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
        <div className="relative w-full max-w-lg">
            {/* Neumorphic Container */}
            <div className="bg-gradient-to-br from-white to-gray-50 rounded-[2rem] p-8 shadow-[20px_20px_60px_#d1d9e6,-20px_-20px_60px_#ffffff] border border-white/20 backdrop-blur-sm">
                {/* Header Section */}
                <div className="text-center mb-8">
                    <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-purple-100 to-purple-200 rounded-2xl shadow-[inset_8px_8px_16px_#e3e9f0,inset_-8px_-8px_16px_#ffffff] mb-4">
                        <svg className="w-8 h-8 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z" />
                        </svg>
                    </div>
                    <h2 className="font-display text-2xl font-bold text-gray-800 mb-2">Share Your Vision</h2>
                    <p className="text-gray-600 text-sm leading-relaxed">
                        Record a quick voice note to share your project vision.<br/>
                        <span className="text-purple-600 font-medium">We'll turn your ideas into reality.</span>
                    </p>
                </div>

                {recordingPhase === 'submitted' && submissionStatus === 'success' ? (
                    <div className="text-center">
                        <div className="bg-gradient-to-br from-green-50 to-emerald-100 rounded-2xl p-6 shadow-[inset_8px_8px_16px_#e8f5e8,inset_-8px_-8px_16px_#ffffff] border border-green-200/50">
                            <div className="inline-flex items-center justify-center w-12 h-12 bg-green-500 rounded-full mb-4">
                                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                </svg>
                            </div>
                            <h3 className="font-bold text-green-800 mb-2">Vision Received! 🚀</h3>
                            <p className="text-green-700 text-sm">We'll analyze your vision and get back to you within 24 hours.</p>
                        </div>
                    </div>
                ) : (
                    <div className="space-y-6">
                        {/* Email Input - Neumorphic */}
                        <div className="relative">
                            <label className="block text-sm font-medium text-gray-700 mb-2">Email Address</label>
                            <input
                                type="email"
                                placeholder="your@email.com"
                                value={userEmail}
                                onChange={(e) => setUserEmail(e.target.value)}
                                className="w-full rounded-2xl bg-gradient-to-br from-gray-50 to-white py-4 px-6 text-gray-800 placeholder:text-gray-400 shadow-[inset_8px_8px_16px_#e3e9f0,inset_-8px_-8px_16px_#ffffff] border border-gray-200/50 focus:outline-none focus:ring-2 focus:ring-purple-400/30 focus:border-purple-300 transition-all duration-300"
                                disabled={submissionStatus === 'submitting'}
                            />
                        </div>

                        {/* Voice Recording Section */}
                        {recordingPhase === 'ready' && (
                            <div className="text-center">
                                <button
                                    onClick={handleRecord}
                                    disabled={submissionStatus === 'submitting' || !userEmail.trim()}
                                    className={`relative group w-full rounded-2xl py-4 px-6 font-semibold transition-all duration-300 ${
                                        isRecording 
                                            ? 'bg-gradient-to-br from-red-500 to-red-600 text-white shadow-[8px_8px_16px_#d1d9e6,-8px_-8px_16px_#ffffff] hover:shadow-[12px_12px_24px_#d1d9e6,-12px_-12px_24px_#ffffff]' 
                                            : !userEmail.trim()
                                            ? 'bg-gradient-to-br from-gray-200 to-gray-300 text-gray-400 cursor-not-allowed shadow-[inset_8px_8px_16px_#e3e9f0,inset_-8px_-8px_16px_#ffffff]'
                                            : 'bg-gradient-to-br from-purple-500 to-purple-600 text-white shadow-[8px_8px_16px_#d1d9e6,-8px_-8px_16px_#ffffff] hover:shadow-[12px_12px_24px_#d1d9e6,-12px_-12px_24px_#ffffff] active:shadow-[inset_8px_8px_16px_#d1d9e6,inset_-8px_-8px_16px_#ffffff]'
                                    }`}
                                >
                                    <div className="flex items-center justify-center gap-3">
                                        {isRecording ? (
                                            <>
                                                <div className="w-3 h-3 bg-white rounded-full animate-pulse"></div>
                                                <span>Recording... Click to Stop</span>
                                            </>
                                        ) : (
                                            <>
                                                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z" />
                                                </svg>
                                                <span>🎤 Record Your Vision</span>
                                            </>
                                        )}
                                    </div>
                                </button>
                            </div>
                        )}

                        {/* Recorded Audio Controls */}
                        {recordingPhase === 'recorded' && audioURL && (
                            <div className="space-y-4">
                                <div className="bg-gradient-to-br from-gray-50 to-white rounded-2xl p-4 shadow-[inset_8px_8px_16px_#e3e9f0,inset_-8px_-8px_16px_#ffffff] border border-gray-200/50">
                                    <div className="flex items-center gap-3 mb-3">
                                        <div className="flex-1">
                                            <audio controls src={audioURL} className="w-full rounded-lg" style={{filter: 'sepia(0.2) contrast(1.1)'}}/>
                                        </div>
                                        <button
                                            onClick={handleReRecord}
                                            className="py-2 px-4 rounded-xl bg-gradient-to-br from-gray-100 to-gray-200 hover:from-gray-200 hover:to-gray-300 text-gray-700 transition-all duration-300 text-sm whitespace-nowrap shadow-[4px_4px_8px_#d1d9e6,-4px_-4px_8px_#ffffff] hover:shadow-[6px_6px_12px_#d1d9e6,-6px_-6px_12px_#ffffff]"
                                            disabled={submissionStatus === 'submitting'}
                                        >
                                            🔄 Re-record
                                        </button>
                                    </div>
                                </div>
                                
                                {transcript && (
                                    <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl p-4 shadow-[inset_8px_8px_16px_#e8f0fe,inset_-8px_-8px_16px_#ffffff] border border-blue-200/50">
                                        <div className="flex items-center gap-2 mb-2">
                                            <svg className="w-4 h-4 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                                            </svg>
                                            <h3 className="font-semibold text-blue-800 text-sm">AI Transcript:</h3>
                                        </div>
                                        <p className="text-blue-700 text-sm leading-relaxed">{transcript}</p>
                                    </div>
                                )}
                            </div>
                        )}

                        {/* Submit Buttons */}
                        <div className="grid grid-cols-2 gap-4">
                            <button
                                onClick={handleSubmit}
                                disabled={submissionStatus === 'submitting' || (!transcript && !audioURL)}
                                className={`rounded-2xl py-3 px-6 font-semibold transition-all duration-300 ${
                                    submissionStatus === 'submitting' || (!transcript && !audioURL)
                                        ? 'bg-gradient-to-br from-gray-200 to-gray-300 text-gray-400 cursor-not-allowed shadow-[inset_8px_8px_16px_#e3e9f0,inset_-8px_-8px_16px_#ffffff]'
                                        : 'bg-gradient-to-br from-emerald-500 to-emerald-600 text-white shadow-[8px_8px_16px_#d1d9e6,-8px_-8px_16px_#ffffff] hover:shadow-[12px_12px_24px_#d1d9e6,-12px_-12px_24px_#ffffff] active:shadow-[inset_8px_8px_16px_#d1d9e6,inset_-8px_-8px_16px_#ffffff]'
                                }`}
                                title={(!transcript && !audioURL) ? 'Please record a voice note first' : ''}
                            >
                                {submissionStatus === 'submitting' ? (
                                    <div className="flex items-center justify-center gap-2">
                                        <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                                        <span>Sending...</span>
                                    </div>
                                ) : (
                                    '🚀 Send Vision'
                                )}
                            </button>
                            
                            <a
                                href="mailto:hello@superstack.dev?subject=Project Vision Discussion&body=Hi SuperStack team,%0A%0AI'd like to discuss my project vision with you.%0A%0AProject Details:%0A-%20%0A-%20%0A-%20%0A%0AThanks!"
                                className="rounded-2xl py-3 px-6 font-semibold transition-all duration-300 bg-gradient-to-br from-gray-100 to-gray-200 hover:from-gray-200 hover:to-gray-300 text-gray-700 text-center flex items-center justify-center shadow-[8px_8px_16px_#d1d9e6,-8px_-8px_16px_#ffffff] hover:shadow-[12px_12px_24px_#d1d9e6,-12px_-12px_24px_#ffffff]"
                            >
                                📧 Just Email Us
                            </a>
                        </div>

                        {/* Error state */}
                        {submissionStatus === 'error' && (
                            <div className="bg-gradient-to-br from-red-50 to-pink-50 rounded-2xl p-4 shadow-[inset_8px_8px_16px_#f8e8e8,inset_-8px_-8px_16px_#ffffff] border border-red-200/50 text-center">
                                <div className="flex items-center justify-center gap-2 text-red-700">
                                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                    </svg>
                                    <span className="text-sm font-medium">Oops! Something went wrong. Please try again.</span>
                                </div>
                            </div>
                        )}
                    </div>
                )}
            </div>

            {/* Subtle background decoration */}
            <div className="absolute -top-4 -right-4 w-24 h-24 bg-gradient-to-br from-purple-200/30 to-blue-200/30 rounded-full blur-2xl -z-10"></div>
            <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-gradient-to-br from-pink-200/30 to-purple-200/30 rounded-full blur-2xl -z-10"></div>
        </div>
    )
}
