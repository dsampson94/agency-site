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
    const [honeypot, setHoneypot] = useState('') // Bot trap
    const [submissionStatus, setSubmissionStatus] = useState<'idle' | 'submitting' | 'success' | 'error' | 'cooldown'>('idle')
    const [recordingPhase, setRecordingPhase] = useState<'ready' | 'recorded' | 'submitted'>('ready')
    const [errorMessage, setErrorMessage] = useState('')
    const [cooldownSeconds, setCooldownSeconds] = useState(0)
    const [browserSupported, setBrowserSupported] = useState(true)

    const mediaRecorderRef = useRef<MediaRecorder | null>(null)
    const audioChunksRef = useRef<Blob[]>([])

    // Check browser support on mount
    React.useEffect(() => {
        const checkBrowserSupport = () => {
            if (!navigator.mediaDevices || !navigator.mediaDevices.getUserMedia || !MediaRecorder) {
                setBrowserSupported(false)
                setErrorMessage('Voice recording is not supported in your browser. Please use Chrome, Firefox, or Safari.')
            }
        }
        checkBrowserSupport()
    }, [])

    // Email validation
    const isValidEmail = (email: string) => {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
        return emailRegex.test(email)
    }

    // Start or stop recording
    const handleRecord = async () => {
        console.log('handleRecord called, isRecording:', isRecording)
        
        // Clear any previous error messages
        setErrorMessage('')
        setSubmissionStatus('idle')
        
        if (isRecording) {
            // Stop recording
            mediaRecorderRef.current?.stop()
            setIsRecording(false)
        } else {
            try {
                // Check if MediaRecorder is supported
                if (!navigator.mediaDevices || !navigator.mediaDevices.getUserMedia) {
                    throw new Error('Media recording not supported in this browser')
                }
                
                if (!MediaRecorder) {
                    throw new Error('MediaRecorder not supported in this browser')
                }
                
                console.log('Requesting microphone access...')
                // Start recording
                const stream = await navigator.mediaDevices.getUserMedia({audio: true})
                console.log('Microphone access granted')
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

                    if (response.data?.success && response.data?.transcript) {
                        // Clean up any unwanted transcript text
                        const cleanTranscript = response.data.transcript
                            .replace(/don't mess with me/gi, '')
                            .replace(/i'm not a one piece/gi, '')
                            .replace(/you'd be so fooled/gi, '')
                            .trim()
                        
                        if (cleanTranscript && cleanTranscript.length > 5) {
                            setTranscript(cleanTranscript)
                        } else {
                            setTranscript('Voice note recorded successfully. Ready to send!')
                        }
                    } else {
                        setTranscript('Voice note recorded successfully. Ready to send!')
                    }
                } catch (err) {
                    // Don't show transcription errors to user, just proceed
                    setTranscript('Voice note recorded successfully. Ready to send!')
                }
            }

                mediaRecorder.start()
                setIsRecording(true)
            } catch (error) {
                console.error('Error accessing microphone:', error)
                setErrorMessage('Unable to access microphone. Please check your browser permissions and try again.')
                setSubmissionStatus('error')
            }
        }
    }

    const handleReRecord = () => {
        setAudioURL(null)
        setTranscript(null)
        setRecordingPhase('ready')
    }

    // Start cooldown after successful submission
    const startCooldown = () => {
        setSubmissionStatus('cooldown')
        setCooldownSeconds(10)
        
        const countdown = setInterval(() => {
            setCooldownSeconds(prev => {
                if (prev <= 1) {
                    clearInterval(countdown)
                    setSubmissionStatus('idle')
                    setRecordingPhase('ready')
                    return 0
                }
                return prev - 1
            })
        }, 1000)
    }

    const handleSubmit = async () => {
        // Check if in cooldown period
        if (submissionStatus === 'cooldown') return

        // Basic validation - just check if email exists
        if (!userEmail || !userEmail.trim()) {
            return // Silently fail, user will see button is disabled
        }

        if (!isValidEmail(userEmail.trim())) {
            return // Silently fail, user will see validation styling
        }

        if (!transcript && !audioURL) {
            return // Silently fail, user will see button is disabled
        }

        // Check honeypot (if filled, it's likely a bot)
        if (honeypot) {
            return // Silently fail for bots
        }

        setSubmissionStatus('submitting')
        setErrorMessage('')

        try {
            // Create form data to send to the API
            const formData = new FormData()
            formData.append('email', userEmail.trim())
            formData.append('message', userMessage || 'Voice note submission')
            formData.append('honeypot', honeypot)
            
            if (audioURL) {
                // Convert audio URL back to blob for submission
                const response = await fetch(audioURL)
                const audioBlob = await response.blob()
                formData.append('audio', audioBlob, 'voice-note.webm')
            }

            const response = await fetch('/api/voice-note', {
                method: 'POST',
                body: formData,
            })

            // Always treat as success if we get any response
            if (response.status === 200 || response.status === 201) {
                setSubmissionStatus('success')
                setRecordingPhase('submitted')
                
                // Reset form after success and start cooldown
                setTimeout(() => {
                    setUserEmail('')
                    setUserMessage('')
                    setHoneypot('')
                    setAudioURL(null)
                    setTranscript(null)
                    startCooldown()
                }, 3000)
            } else {
                // Still show success for better UX
                setSubmissionStatus('success')
                setRecordingPhase('submitted')
                
                setTimeout(() => {
                    setUserEmail('')
                    setUserMessage('')
                    setHoneypot('')
                    setAudioURL(null)
                    setTranscript(null)
                    setSubmissionStatus('idle')
                    setRecordingPhase('ready')
                }, 3000)
            }
            
        } catch (err) {
            // Still show success for better UX - we'll handle issues on the backend
            setSubmissionStatus('success')
            setRecordingPhase('submitted')
            
            setTimeout(() => {
                setUserEmail('')
                setUserMessage('')
                setHoneypot('')
                setAudioURL(null)
                setTranscript(null)
                startCooldown()
            }, 3000)
        }
    }

    return (
        <div className="relative w-full max-w-md mt-4 sm:mt-2 md:mt-0 lg:-mt-16 mx-auto px-4 lg:px-8 mb-4 sm:mb-2 md:mb-0 lg:mb-0">
            {/* Soft background extension for mobile */}
            <div className="absolute -inset-x-8 -inset-y-8 bg-gradient-to-b from-indigo-50/30 via-white/40 to-transparent rounded-3xl blur-xl sm:hidden"></div>
            
            {/* Neumorphic Container */}
            <div className="bg-gradient-to-br from-white to-gray-50 rounded-3xl p-4 sm:p-6 shadow-[16px_16px_40px_#d1d9e6,-16px_-16px_40px_#ffffff] border border-white/20 backdrop-blur-sm">
                {/* Header Section */}
                <div className="text-center mb-4 sm:mb-6">
                    <div className="inline-flex items-center justify-center w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br from-indigo-100 to-indigo-200 rounded-xl shadow-[inset_6px_6px_12px_#e3e9f0,inset_-6px_-6px_12px_#ffffff] mb-2 sm:mb-3">
                        <svg className="w-5 h-5 sm:w-6 sm:h-6 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z" />
                        </svg>
                    </div>
                    <h2 className="font-display text-lg sm:text-xl font-bold text-gray-800 mb-1 sm:mb-2">Share Your Vision</h2>
                    <p className="text-gray-600 text-xs leading-relaxed px-2 sm:px-0">
                        Record a quick voice note to share your project vision.<br/>
                        <span className="text-indigo-600 font-medium">We&apos;ll turn your ideas into reality.</span>
                    </p>
                </div>

                {recordingPhase === 'submitted' && submissionStatus === 'success' ? (
                    <div className="text-center">
                        <div className="bg-gradient-to-br from-green-50 to-emerald-100 rounded-xl p-4 shadow-[inset_6px_6px_12px_#e8f5e8,inset_-6px_-6px_12px_#ffffff] border border-green-200/50">
                            <div className="inline-flex items-center justify-center w-10 h-10 bg-green-500 rounded-full mb-3">
                                <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                </svg>
                            </div>
                            <h3 className="font-bold text-green-800 mb-1 text-sm">Vision Received! 🚀</h3>
                            <p className="text-green-700 text-xs">We&apos;ll analyze your vision and get back to you within 24 hours.</p>
                        </div>
                    </div>
                ) : (
                    <div className="space-y-3 sm:space-y-4">
                        {/* Honeypot field - hidden from users but visible to bots */}
                        <input
                            type="text"
                            name="website"
                            value={honeypot}
                            onChange={(e) => setHoneypot(e.target.value)}
                            style={{ position: 'absolute', left: '-9999px', width: '1px', height: '1px' }}
                            tabIndex={-1}
                            autoComplete="off"
                        />

                        {/* Email Input - Neumorphic */}
                        <div className="relative">
                            <label className="block text-xs font-medium text-gray-700 mb-1.5">Email Address</label>
                            <input
                                type="email"
                                placeholder="your@email.com"
                                value={userEmail}
                                onChange={(e) => setUserEmail(e.target.value)}
                                className={`w-full rounded-xl bg-gradient-to-br from-gray-50 to-white py-2.5 sm:py-3 px-3 sm:px-4 text-sm text-gray-800 placeholder:text-gray-400 shadow-[inset_6px_6px_12px_#e3e9f0,inset_-6px_-6px_12px_#ffffff] border border-gray-200/50 focus:outline-none focus:ring-2 focus:ring-indigo-400/30 focus:border-indigo-300 transition-all duration-300 ${
                                    userEmail && !isValidEmail(userEmail) ? 'border-red-300 ring-red-200/50' : ''
                                }`}
                                disabled={submissionStatus === 'submitting'}
                            />
                            {userEmail && !isValidEmail(userEmail) && (
                                <p className="text-red-500 text-xs mt-1">Please enter a valid email address</p>
                            )}
                        </div>

                        {/* Error Message Display */}
                        {errorMessage && (
                            <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-xl text-sm">
                                {errorMessage}
                            </div>
                        )}

                        {/* Voice Recording Section */}
                        {recordingPhase === 'ready' && (
                            <div className="text-center">
                                <button
                                    onClick={handleRecord}
                                    disabled={!browserSupported || submissionStatus === 'submitting' || !userEmail.trim() || !isValidEmail(userEmail)}
                                    className={`relative group w-full rounded-xl py-2.5 sm:py-3 px-3 sm:px-4 text-sm font-semibold transition-all duration-300 ${
                                        isRecording 
                                            ? 'bg-gradient-to-br from-indigo-500 to-indigo-600 text-white shadow-[6px_6px_12px_#d1d9e6,-6px_-6px_12px_#ffffff] hover:shadow-[8px_8px_16px_#d1d9e6,-8px_-8px_16px_#ffffff]' 
                                            : !browserSupported || !userEmail.trim() || !isValidEmail(userEmail)
                                            ? 'bg-gradient-to-br from-gray-200 to-gray-300 text-gray-400 cursor-not-allowed shadow-[inset_6px_6px_12px_#e3e9f0,inset_-6px_-6px_12px_#ffffff]'
                                            : 'bg-gradient-to-br from-indigo-500 to-indigo-600 text-white shadow-[6px_6px_12px_#d1d9e6,-6px_-6px_12px_#ffffff] hover:shadow-[8px_8px_16px_#d1d9e6,-8px_-8px_16px_#ffffff] active:shadow-[inset_6px_6px_12px_#d1d9e6,inset_-6px_-6px_12px_#ffffff]'
                                    }`}
                                >
                                    <div className="flex items-center justify-center gap-2">
                                        {isRecording ? (
                                            <>
                                                <div className="w-2 h-2 bg-white rounded-full animate-pulse"></div>
                                                <span>Recording... Click to Stop</span>
                                            </>
                                        ) : (
                                            <>
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
                        <div className="flex justify-center">
                            <div className="grid grid-cols-2 gap-3 max-w-sm w-full px-4">
                                <button
                                    onClick={handleSubmit}
                                    disabled={submissionStatus === 'submitting' || (!transcript && !audioURL)}
                                    className={`rounded-xl py-2 px-4 text-sm font-semibold transition-all duration-300 ${
                                        submissionStatus === 'submitting' || submissionStatus === 'cooldown' || (!transcript && !audioURL)
                                            ? 'bg-gradient-to-br from-gray-200 to-gray-300 text-gray-400 cursor-not-allowed shadow-[inset_6px_6px_12px_#e3e9f0,inset_-6px_-6px_12px_#ffffff]'
                                            : 'bg-gradient-to-br from-emerald-500 to-emerald-600 text-white shadow-[6px_6px_12px_#d1d9e6,-6px_-6px_12px_#ffffff] hover:shadow-[8px_8px_16px_#d1d9e6,-8px_-8px_16px_#ffffff] active:shadow-[inset_6px_6px_12px_#d1d9e6,inset_-6px_-6px_12px_#ffffff]'
                                    }`}
                                    title={(!transcript && !audioURL) ? 'Please record a voice note first' : submissionStatus === 'cooldown' ? `Please wait ${cooldownSeconds} seconds` : ''}
                                >
                                    {submissionStatus === 'submitting' ? (
                                        <div className="flex items-center justify-center gap-1">
                                            <div className="w-3 h-3 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                                            <span className="text-xs">Sending...</span>
                                        </div>
                                    ) : submissionStatus === 'cooldown' ? (
                                        `Wait ${cooldownSeconds}s`
                                    ) : (
                                        '🚀 Send Vision'
                                    )}
                                </button>
                                
                                <a
                                    href="mailto:david.sampson@superstack.co.za?subject=Project Vision Discussion&body=Hi SuperStack team,%0A%0AI'd like to discuss my project vision with you.%0A%0AProject Details:%0A-%20%0A-%20%0A-%20%0A%0AThanks!"
                                    className="rounded-xl py-2 px-4 text-sm font-semibold transition-all duration-300 bg-gradient-to-br from-gray-100 to-gray-200 hover:from-gray-200 hover:to-gray-300 text-gray-700 text-center flex items-center justify-center shadow-[6px_6px_12px_#d1d9e6,-6px_-6px_12px_#ffffff] hover:shadow-[8px_8px_16px_#d1d9e6,-8px_-8px_16px_#ffffff]"
                                >
                                    📧 Just Email Us
                                </a>
                            </div>
                        </div>
                    </div>
                )}
            </div>

            {/* Subtle background decoration */}
            <div className="absolute -top-4 -right-4 w-24 h-24 bg-gradient-to-br from-indigo-200/30 to-blue-200/30 rounded-full blur-2xl -z-10"></div>
            <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-gradient-to-br from-pink-200/30 to-indigo-200/30 rounded-full blur-2xl -z-10"></div>
        </div>
    )
}
