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
    const [userEmail, setUserEmail] = useState('')
    const [userMessage, setUserMessage] = useState('')
    const [submissionStatus, setSubmissionStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle')
    const [recordingPhase, setRecordingPhase] = useState<'ready' | 'recorded' | 'submitted'>('ready')

    const mediaRecorderRef = useRef<MediaRecorder | null>(null)
    const audioChunksRef = useRef<Blob[]>([])

    // Start or stop recording
    const handleRecord = async () => {
        if (isRecording) {
            // Stop recording
            mediaRecorderRef.current?.stop()
            setIsRecording(false)
        } else {
            // Start recording
            const stream = await navigator.mediaDevices.getUserMedia({audio: true})
            const mediaRecorder = new MediaRecorder(stream)
            mediaRecorderRef.current = mediaRecorder
            audioChunksRef.current = []

            mediaRecorder.ondataavailable = (event) => {
                audioChunksRef.current.push(event.data)
            }

            mediaRecorder.onstop = async () => {
                const audioBlob = new Blob(audioChunksRef.current, {type: 'audio/wav'})
                const blobURL = URL.createObjectURL(audioBlob)
                setAudioURL(blobURL)
                setRecordingPhase('recorded')

                // Send to API for transcription
                const formData = new FormData()
                formData.append('audio', audioBlob, 'voice-note.wav')
                formData.append('email', userEmail.toLowerCase())

                try {
                    const response = await axios.post('/api/voice-note', formData, {
                        headers: {'Content-Type': 'multipart/form-data'},
                    })

                    console.log('Voice transcription response:', response.data)

                    if (response.data?.success) {
                        const {user} = response.data
                        const latestEnquiry = user.enquiries[user.enquiries.length - 1]
                        const latestVoiceNote = latestEnquiry.voiceNotes[latestEnquiry.voiceNotes.length - 1] || null
                        const transcriptText = latestVoiceNote?.transcript || ''
                        console.log('Setting transcript:', transcriptText)
                        setTranscript(transcriptText)
                    } else {
                        console.error('Voice transcription failed:', response.data)
                    }
                } catch (err) {
                    console.error('Error transcribing voice note:', err)
                }
            }

            mediaRecorder.start()
            setIsRecording(true)
        }
    }

    const handleReRecord = () => {
        setAudioURL(null)
        setTranscript(null)
        setRecordingPhase('ready')
    }

    const handleSubmit = async () => {
        if (!userEmail) {
            alert('Please enter your email.')
            return
        }

        if (!transcript && !audioURL) {
            alert('Please record a voice note first.')
            return
        }

        setSubmissionStatus('submitting')

        try {
            console.log('Submitting enquiry with:', { 
                email: userEmail.toLowerCase(),
                message: transcript || 'Voice note submitted (transcription pending)',
                hasVoiceNote: true,
                transcript: transcript
            })

            const response = await axios.post('/api/enquiry', {
                email: userEmail.toLowerCase(),
                message: transcript || 'Voice note submitted (transcription pending)',
                hasVoiceNote: true,
                transcript: transcript
            })

            console.log('Response:', response.data)

            if (response.data?.success) {
                setSubmissionStatus('success')
                setRecordingPhase('submitted')
                // Reset form after success
                setTimeout(() => {
                    setUserEmail('')
                    setUserMessage('')
                    setAudioURL(null)
                    setTranscript(null)
                    setSubmissionStatus('idle')
                    setRecordingPhase('ready')
                }, 3000)
            } else {
                console.error('API returned error:', response.data)
                setSubmissionStatus('error')
            }
        } catch (err) {
            console.error('Error submitting enquiry:', err)
            setSubmissionStatus('error')
        }
    }

    return (
        <div className="bg-neutral-950 rounded-3xl p-8 text-white shadow-[0_20px_50px_rgba(0,0,0,0.8)] border border-neutral-800/50 transform hover:shadow-[0_25px_60px_rgba(0,0,0,0.9)] transition-all duration-300">
            <h2 className="font-display text-2xl font-semibold mb-2 text-center">Share Your Vision</h2>
            <p className="text-neutral-300 mb-6 text-center">
                Record a quick voice note to share your vision.
            </p>

            {recordingPhase === 'submitted' && submissionStatus === 'success' ? (
                <div className="text-center">
                    <div className="bg-green-600 rounded-2xl p-4 mb-4">
                        <p className="font-semibold">Message Sent Successfully!</p>
                        <p className="text-sm text-green-100">We'll get back to you soon.</p>
                    </div>
                </div>
            ) : (
                <div className="space-y-4">
                    {/* Email input */}
                    <input
                        type="email"
                        placeholder="Enter your email"
                        value={userEmail}
                        onChange={(e) => setUserEmail(e.target.value)}
                        className="w-full rounded-2xl border border-neutral-600 bg-neutral-800 py-3 px-4 text-white placeholder:text-neutral-400 focus:border-white focus:outline-none focus:ring-2 focus:ring-white/20 transition"
                        disabled={submissionStatus === 'submitting'}
                    />

                    {/* Voice Recording Section */}
                    {recordingPhase === 'ready' && (
                        <button
                            onClick={handleRecord}
                            disabled={submissionStatus === 'submitting' || !userEmail.trim()}
                            className={`w-full rounded-2xl py-3 px-6 font-semibold transition ${
                                isRecording 
                                    ? 'bg-red-600 hover:bg-red-700 text-white' 
                                    : !userEmail.trim()
                                    ? 'bg-neutral-700 text-neutral-400 cursor-not-allowed'
                                    : 'bg-white text-neutral-950 hover:bg-neutral-100'
                            }`}
                        >
                            {isRecording ? 'Stop Recording' : 'Record Voice Note'}
                        </button>
                    )}

                    {/* Recorded Audio Controls */}
                    {recordingPhase === 'recorded' && audioURL && (
                        <div className="space-y-4">
                            <div className="flex items-center gap-3">
                                <audio controls src={audioURL} className="flex-1 rounded-lg"/>
                                <button
                                    onClick={handleReRecord}
                                    className="py-2 px-4 rounded-xl bg-neutral-700 hover:bg-neutral-600 text-white transition text-sm whitespace-nowrap"
                                    disabled={submissionStatus === 'submitting'}
                                >
                                    Rerecord
                                </button>
                            </div>
                            
                            {transcript && (
                                <div className="p-4 bg-neutral-800 rounded-2xl border border-neutral-700">
                                    <h3 className="font-semibold mb-2 text-white">Transcript:</h3>
                                    <p className="text-neutral-300 text-sm">{transcript}</p>
                                </div>
                            )}
                        </div>
                    )}

                    {/* Submit Buttons */}
                    <div className="grid grid-cols-2 gap-3">
                        <button
                            onClick={handleSubmit}
                            disabled={submissionStatus === 'submitting' || (!transcript && !audioURL)}
                            className={`rounded-2xl py-3 px-6 font-semibold transition ${
                                submissionStatus === 'submitting' || (!transcript && !audioURL)
                                    ? 'bg-neutral-700 text-neutral-400 cursor-not-allowed'
                                    : 'bg-blue-600 hover:bg-blue-700 text-white'
                            }`}
                            title={(!transcript && !audioURL) ? 'Please record a voice note first' : ''}
                        >
                            {submissionStatus === 'submitting' ? 'Sending...' : 'Send Voice Note'}
                        </button>
                        
                        <a
                            href="mailto:hello@superstacksolutions.com?subject=Project Inquiry&body=Hi, I'd like to discuss a project with you."
                            className="rounded-2xl py-3 px-6 font-semibold transition bg-neutral-700 hover:bg-neutral-600 text-white text-center flex items-center justify-center"
                        >
                            Just Email Us
                        </a>
                    </div>

                    {/* Error state */}
                    {submissionStatus === 'error' && (
                        <div className="p-3 bg-red-600/20 border border-red-600 rounded-xl text-red-200 text-sm text-center">
                            Something went wrong. Please try again.
                        </div>
                    )}
                </div>
            )}
        </div>
    )
}
