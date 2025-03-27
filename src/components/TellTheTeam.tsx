'use client'

import React, {useRef, useState} from 'react'
import axios from 'axios'

interface VoiceNote {
    _id?: string
    audioURL: string
    transcript: string
    createdAt?: string
}

export default function TellTheTeam() {
    const [isRecording, setIsRecording] = useState(false)
    const [audioURL, setAudioURL] = useState<string | null>(null)
    const [transcript, setTranscript] = useState<string | null>(null)
    const [voiceNotes, setVoiceNotes] = useState<VoiceNote[]>([])
    const [userEmail, setUserEmail] = useState('')

    const mediaRecorderRef = useRef<MediaRecorder | null>(null)
    const audioChunksRef = useRef<Blob[]>([])

    // 1) Start or stop recording
    const handleRecord = async () => {
        if (!userEmail) {
            alert('Please enter your email first.')
            return
        }

        if (isRecording) {
            // Stop
            mediaRecorderRef.current?.stop()
            setIsRecording(false)
        } else {
            // Start
            const stream = await navigator.mediaDevices.getUserMedia({audio: true})
            const mediaRecorder = new MediaRecorder(stream)
            mediaRecorderRef.current = mediaRecorder
            audioChunksRef.current = []

            mediaRecorder.ondataavailable = (event) => {
                audioChunksRef.current.push(event.data)
            }

            mediaRecorder.onstop = async () => {
                // Convert to Blob
                const audioBlob = new Blob(audioChunksRef.current, {type: 'audio/wav'})
                const blobURL = URL.createObjectURL(audioBlob)
                setAudioURL(blobURL)

                // Send to backend
                const formData = new FormData()
                formData.append('audio', audioBlob, 'recording.wav')
                formData.append('email', userEmail.toLowerCase())

                try {
                    const response = await axios.post('/api/voice-note', formData)
                    if (response.data.error) {
                        alert(response.data.error)
                        return
                    }
                    const {message, user} = response.data
                    const latestEnquiry = user.enquiries[user.enquiries.length - 1]
                    const latestVoiceNote =
                        latestEnquiry.voiceNotes[latestEnquiry.voiceNotes.length - 1] || null

                    setTranscript(latestVoiceNote?.transcript || '')
                    setVoiceNotes((prev) => [
                        ...prev,
                        {
                            audioURL: latestVoiceNote?.audioURL,
                            transcript: latestVoiceNote?.transcript,
                            createdAt: latestVoiceNote?.createdAt,
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

    return (
        <div className="max-w-xl mx-auto p-4">
            <h1 className="text-2xl font-bold mb-4 text-center">Tell The Team</h1>
            <p className="text-gray-600 mb-6 text-center">
                Record a quick voice note to share your thoughts with our team.
            </p>

            <div className="flex flex-col items-center gap-4">
                {/* Email input */}
                <input
                    type="email"
                    placeholder="Enter your email"
                    value={userEmail}
                    onChange={(e) => setUserEmail(e.target.value)}
                    className="border border-gray-300 rounded px-3 py-2 w-full max-w-sm"
                />

                {/* Start/stop recording button */}
                <button
                    onClick={handleRecord}
                    className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition"
                >
                    {isRecording ? 'Stop Recording' : 'Record Voice Note'}
                </button>

                {/* Playback (if needed) */}
                {audioURL && (
                    <audio controls src={audioURL} className="w-full mt-2"/>
                )}
            </div>

            {/* Show transcript of the most recent voice note */}
            {transcript && (
                <div className="mt-6 p-4 bg-white rounded shadow">
                    <h2 className="text-xl font-semibold mb-2">Latest Transcript</h2>
                    <p className="text-gray-700 whitespace-pre-line">{transcript}</p>
                </div>
            )}

            {/* Show all voice notes in an optional list */}
            {voiceNotes.length > 0 && (
                <div className="mt-8">
                    <h2 className="text-lg font-semibold mb-2">Your Voice Notes</h2>
                    <ul className="space-y-4">
                        {voiceNotes.map((note, idx) => (
                            <li key={idx} className="p-4 bg-white rounded shadow">
                                <audio controls src={note.audioURL} className="w-full mb-2"/>
                                <p className="text-gray-700">
                                    {note.transcript || '(No transcript)'}
                                </p>
                            </li>
                        ))}
                    </ul>
                </div>
            )}
        </div>
    )
}
