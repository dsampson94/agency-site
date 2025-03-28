'use client'

import {useRef, useState} from 'react'
import Image from 'next/image'
import Link from 'next/link'
import axios from 'axios'
import meImage from '/src/images/ds.jpg'
import donImage from '/src/images/don.png'
import {Button} from './Button'
import useAuth from "../lib/hooks/useAuth";

export function MeetTheTeam() {
    // Local state for email and magic link message
    const [email, setEmail] = useState('')
    const [loginMessage, setLoginMessage] = useState('')

    // Voice note states
    const [isRecording, setIsRecording] = useState(false)
    const [audioURL, setAudioURL] = useState<string | null>(null)
    const [transcript, setTranscript] = useState<string | null>(null)
    const [voiceNotes, setVoiceNotes] = useState<
        Array<{ audioURL: string; transcript: string }>
    >([])

    const mediaRecorderRef = useRef<MediaRecorder | null>(null)
    const audioChunksRef = useRef<Blob[]>([])

    // Use your auth hook to check if the user is logged in
    const {isAuthenticated, profileLoading} = useAuth()

    // Function to send magic link for authentication
    const sendMagicLink = async (e: React.FormEvent) => {
        e.preventDefault()
        if (!email) return
        try {
            const response = await axios.post('/api/auth/send-magic-link', {email})
            setLoginMessage('Magic link sent to your email. Please check your inbox.')
        } catch (err) {
            console.error('Error sending magic link', err)
            setLoginMessage('Failed to send magic link. Please try again.')
        }
    }

    // Recording function; only allowed when authenticated
    const startOrStopRecording = async () => {
        if (!isAuthenticated) {
            alert('You need to be logged in to record a voice note.')
            return
        }

        if (isRecording) {
            mediaRecorderRef.current?.stop()
            setIsRecording(false)
        } else {
            const stream = await navigator.mediaDevices.getUserMedia({audio: true})
            const mediaRecorder = new MediaRecorder(stream)
            mediaRecorderRef.current = mediaRecorder
            audioChunksRef.current = []

            mediaRecorder.ondataavailable = (event) => {
                audioChunksRef.current.push(event.data)
            }

            mediaRecorder.onstop = async () => {
                // Create a Blob from the recorded audio
                const audioBlob = new Blob(audioChunksRef.current, {type: 'audio/wav'})
                const blobURL = URL.createObjectURL(audioBlob)
                setAudioURL(blobURL)

                // Prepare form data for backend
                const formData = new FormData()
                formData.append('audio', audioBlob, 'recording.wav')
                formData.append('email', email.toLowerCase())

                try {
                    const response = await axios.post('/api/voice-note', formData)
                    if (response.data.error) {
                        alert(response.data.error)
                        return
                    }

                    // Get latest voice note info from the returned user document
                    const {user} = response.data
                    const latestEnquiry = user.enquiries[user.enquiries.length - 1]
                    const latestNote = latestEnquiry.voiceNotes[latestEnquiry.voiceNotes.length - 1]

                    setTranscript(latestNote?.transcript || '')
                    setVoiceNotes((prev) => [
                        ...prev,
                        {
                            audioURL: latestNote.audioURL,
                            transcript: latestNote.transcript,
                        },
                    ])
                } catch (err) {
                    console.error('Error saving voice note:', err)
                    alert('Failed to save voice note.')
                }
            }

            mediaRecorder.start()
            setIsRecording(true)
        }
    }

    // Simple team data to display
    const teamMembers = [
        {
            name: 'David Sampson',
            role: 'Senior Developer & Problem Solver',
            image: meImage,
            links: [
                {label: 'Website', href: 'https://www.davidsampson.tech/'},
                {label: 'LinkedIn', href: 'https://linkedin.com/in/dsampsondev'},
                {
                    label: 'Upwork',
                    href: 'https://www.upwork.com/freelancers/~01cbe753e4aabd2627',
                },
            ],
        },
        {
            name: 'Monwabisi Ndlovu',
            role: 'Junior Developer & Problem Solver',
            image: donImage,
            links: [
                {label: 'Website', href: 'https://monwabisi16.netlify.app/'},
                {label: 'LinkedIn', href: 'https://linkedin.com/in/monwabisi-ndlovu-3270a020b'},
            ],
        },
    ]

    return (
        <section className="my-32 px-4 text-center">
            <h2 className="text-4xl font-bold text-neutral-900 mb-12">
                Meet the Team
            </h2>

            {/* Team Grid */}
            <div className="grid gap-12 sm:grid-cols-2 max-w-5xl mx-auto">
                {teamMembers.map(({name, role, image, links}) => (
                    <div
                        key={name}
                        className="rounded-xl bg-white p-6 shadow-lg hover:shadow-xl transition duration-300 flex flex-col items-center"
                    >
                        <div className="relative h-32 w-32 rounded-full ring-4 ring-white shadow-md overflow-hidden">
                            <Image src={image} alt={name} fill className="object-cover"/>
                        </div>

                        <h3 className="mt-4 text-xl font-semibold text-neutral-900">
                            {name}
                        </h3>
                        <p className="mt-1 text-sm text-neutral-600">{role}</p>

                        <div className="mt-5 flex flex-wrap justify-center gap-3">
                            {links.map(({label, href}) => (
                                <Link
                                    key={label}
                                    href={href}
                                    target="_blank"
                                    className="text-sm text-blue-600 hover:underline"
                                >
                                    {label}
                                </Link>
                            ))}
                        </div>
                    </div>
                ))}
            </div>

            {/* Voice Note Section */}
            <div className="mt-20 max-w-xl mx-auto bg-white p-6 rounded-xl shadow-lg">
                {isAuthenticated ? (
                    <>
                        <h3 className="text-xl font-semibold text-neutral-900 mb-4">
                            Record your voice note
                        </h3>
                        <button
                            onClick={startOrStopRecording}
                            className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition"
                        >
                            {isRecording ? 'Stop Recording' : 'Record Voice Note'}
                        </button>

                        {/* Audio Preview */}
                        {audioURL && (
                            <div className="mt-4">
                                <audio controls src={audioURL} className="w-full"/>
                            </div>
                        )}

                        {/* Latest Transcript */}
                        {transcript && (
                            <div className="mt-8 bg-white p-4 rounded shadow">
                                <h4 className="text-lg font-semibold mb-2">
                                    Latest Transcript
                                </h4>
                                <p className="text-sm text-gray-700">{transcript}</p>
                            </div>
                        )}

                        {/* List of All Voice Notes */}
                        {voiceNotes.length > 0 && (
                            <div className="mt-6">
                                <h4 className="text-lg font-semibold mb-2">
                                    All Recorded Notes
                                </h4>
                                <ul className="space-y-4">
                                    {voiceNotes.map((note, idx) => (
                                        <li key={idx} className="p-4 bg-white rounded shadow">
                                            <audio controls src={note.audioURL} className="w-full mb-2"/>
                                            <p className="text-gray-700">{note.transcript}</p>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        )}
                    </>
                ) : (
                    <>
                        <h3 className="text-xl font-semibold text-neutral-900 mb-4">
                            Log in to record your voice note
                        </h3>
                        <form onSubmit={sendMagicLink} className="flex flex-col gap-4">
                            <input
                                type="email"
                                required
                                placeholder="Enter your email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                className="border px-4 py-2 rounded-md"
                            />
                            <Button type="submit" className={undefined}>Send Magic Link</Button>
                        </form>
                        {loginMessage && (
                            <p className="mt-4 text-sm text-neutral-600">{loginMessage}</p>
                        )}
                    </>
                )}
            </div>
        </section>
    )
}
