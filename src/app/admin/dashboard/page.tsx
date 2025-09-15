'use client'

import { useEffect, useState, useCallback } from 'react'
import { useRouter } from 'next/navigation'
import { Container } from '@/components/Container.jsx'
import { FadeIn } from '@/components/FadeIn.jsx'

interface Enquiry {
  _id: string
  email: string
  message: string
  hasVoiceNote?: boolean
  transcript?: string
  createdAt: string
}

interface User {
  _id: string
  email: string
  createdAt: string
}

interface Stats {
  totalEnquiries: number
  totalUsers: number
  todayEnquiries: number
  weeklyEnquiries: number
}

export default function AdminDashboard() {
  const [isAuthenticated, setIsAuthenticated] = useState(false)
  const [loading, setLoading] = useState(true)
  const [enquiries, setEnquiries] = useState<Enquiry[]>([])
  const [users, setUsers] = useState<User[]>([])
  const [expandedTranscripts, setExpandedTranscripts] = useState<Set<string>>(new Set())
  const [stats, setStats] = useState<Stats>({
    totalEnquiries: 0,
    totalUsers: 0,
    todayEnquiries: 0,
    weeklyEnquiries: 0
  })
  const router = useRouter()

  useEffect(() => {
    const token = localStorage.getItem('adminToken')
    if (!token) {
      router.push('/admin')
      return
    }

    // Verify token and load data
    verifyTokenAndLoadData(token)
  }, [router]) // eslint-disable-line react-hooks/exhaustive-deps

  const verifyTokenAndLoadData = async (token: string) => {
    try {
      // Verify token
      const response = await fetch('/api/admin/verify', {
        headers: {
          'Authorization': `Bearer ${token}`
        }
      })

      if (!response.ok) {
        throw new Error('Invalid token')
      }

      setIsAuthenticated(true)
      
      // Load enquiries
      const enquiriesResponse = await fetch('/api/admin/enquiries', {
        headers: {
          'Authorization': `Bearer ${token}`
        }
      })
      
      if (enquiriesResponse.ok) {
        const enquiriesData = await enquiriesResponse.json()
        setEnquiries(enquiriesData.enquiries || [])
      }

      // Load users
      const usersResponse = await fetch('/api/admin/users', {
        headers: {
          'Authorization': `Bearer ${token}`
        }
      })
      
      if (usersResponse.ok) {
        const usersData = await usersResponse.json()
        setUsers(usersData.users || [])
      }

      // Load stats
      const statsResponse = await fetch('/api/admin/stats', {
        headers: {
          'Authorization': `Bearer ${token}`
        }
      })
      
      if (statsResponse.ok) {
        const statsData = await statsResponse.json()
        setStats(statsData.stats || stats)
      }

    } catch (error) {
      console.error('Authentication failed:', error)
      localStorage.removeItem('adminToken')
      router.push('/admin')
    } finally {
      setLoading(false)
    }
  }

  const handleLogout = () => {
    localStorage.removeItem('adminToken')
    router.push('/admin')
  }

  const toggleTranscript = (enquiryId: string) => {
    const newExpanded = new Set(expandedTranscripts)
    if (newExpanded.has(enquiryId)) {
      newExpanded.delete(enquiryId)
    } else {
      newExpanded.add(enquiryId)
    }
    setExpandedTranscripts(newExpanded)
  }

  const copyTranscript = async (transcript: string) => {
    try {
      await navigator.clipboard.writeText(transcript)
      // You could add a toast notification here
    } catch (err) {
      console.error('Failed to copy transcript:', err)
    }
  }

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    })
  }

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-purple-600"></div>
          <p className="mt-4 text-gray-600">Loading dashboard...</p>
        </div>
      </div>
    )
  }

  if (!isAuthenticated) {
    return null // Will redirect to login
  }

  return (
    <div className="min-h-screen bg-gray-50 pt-8">
      {/* Header */}
      <div className="bg-white shadow-sm border-b">
        <Container as="div" className="">
          <div className="flex justify-between items-center py-6">
            <h1 className="text-2xl font-bold text-gray-900">Admin Dashboard</h1>
            <button
              onClick={handleLogout}
              className="bg-red-600 text-white px-4 py-2 rounded-lg hover:bg-red-700 transition-colors"
            >
              Logout
            </button>
          </div>
        </Container>
      </div>

      <Container as="div" className="py-6">
        {/* Stats Cards */}
        <FadeIn>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
            <div className="bg-white rounded-lg shadow p-6">
              <h3 className="text-sm font-medium text-gray-500">Total Enquiries</h3>
              <p className="text-3xl font-bold text-purple-600">{stats.totalEnquiries}</p>
            </div>
            <div className="bg-white rounded-lg shadow p-6">
              <h3 className="text-sm font-medium text-gray-500">Total Users</h3>
              <p className="text-3xl font-bold text-blue-600">{stats.totalUsers}</p>
            </div>
            <div className="bg-white rounded-lg shadow p-6">
              <h3 className="text-sm font-medium text-gray-500">Today's Enquiries</h3>
              <p className="text-3xl font-bold text-green-600">{stats.todayEnquiries}</p>
            </div>
            <div className="bg-white rounded-lg shadow p-6">
              <h3 className="text-sm font-medium text-gray-500">This Week</h3>
              <p className="text-3xl font-bold text-orange-600">{stats.weeklyEnquiries}</p>
            </div>
          </div>
        </FadeIn>

        {/* Enquiries Table */}
        <FadeIn>
          <div className="bg-white rounded-lg shadow mb-8">
            <div className="px-6 py-4 border-b">
              <h2 className="text-xl font-semibold text-gray-900">Recent Enquiries</h2>
            </div>
            <div className="overflow-x-auto">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Email
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Message / Transcript
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Voice Note
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Date
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {enquiries.map((enquiry) => (
                    <tr key={enquiry._id} className="hover:bg-gray-50">
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                        {enquiry.email}
                      </td>
                      <td className="px-6 py-4 text-sm text-gray-900">
                        {enquiry.hasVoiceNote && enquiry.transcript ? (
                          <div className="space-y-2">
                            <div className="bg-blue-50 p-3 rounded-lg border-l-4 border-blue-400">
                              <div className="flex items-center justify-between mb-2">
                                <div className="flex items-center">
                                  <svg className="w-4 h-4 text-blue-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z" />
                                  </svg>
                                  <span className="text-sm font-medium text-blue-700">Voice Note Transcript</span>
                                  <span className="text-xs text-blue-500 ml-2">({enquiry.transcript.length} chars)</span>
                                </div>
                                <div className="flex items-center gap-2">
                                  <button
                                    onClick={() => copyTranscript(enquiry.transcript)}
                                    className="text-blue-600 hover:text-blue-800 text-xs font-medium flex items-center"
                                    title="Copy transcript"
                                  >
                                    <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
                                    </svg>
                                  </button>
                                  {enquiry.transcript.length > 200 && (
                                    <button
                                      onClick={() => toggleTranscript(enquiry._id)}
                                      className="text-blue-600 hover:text-blue-800 text-xs font-medium flex items-center"
                                    >
                                      {expandedTranscripts.has(enquiry._id) ? (
                                        <>
                                          <span>Show Less</span>
                                          <svg className="w-3 h-3 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 15l7-7 7 7" />
                                          </svg>
                                        </>
                                      ) : (
                                        <>
                                          <span>Show More</span>
                                          <svg className="w-3 h-3 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                          </svg>
                                        </>
                                      )}
                                    </button>
                                  )}
                                </div>
                              </div>
                              <p className="text-sm text-blue-800 leading-relaxed whitespace-pre-wrap">
                                {enquiry.transcript.length > 200 && !expandedTranscripts.has(enquiry._id)
                                  ? `${enquiry.transcript.substring(0, 200)}...`
                                  : enquiry.transcript
                                }
                              </p>
                            </div>
                          </div>
                        ) : enquiry.transcript ? (
                          <div className="bg-gray-50 p-3 rounded-lg">
                            <p className="text-sm text-gray-800 leading-relaxed whitespace-pre-wrap">
                              {enquiry.transcript.length > 200 && !expandedTranscripts.has(enquiry._id)
                                ? `${enquiry.transcript.substring(0, 200)}...`
                                : enquiry.transcript
                              }
                            </p>
                            {enquiry.transcript.length > 200 && (
                              <button
                                onClick={() => toggleTranscript(enquiry._id)}
                                className="text-blue-600 hover:text-blue-800 text-xs font-medium mt-2 flex items-center"
                              >
                                {expandedTranscripts.has(enquiry._id) ? (
                                  <>
                                    <span>Show Less</span>
                                    <svg className="w-3 h-3 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 15l7-7 7 7" />
                                    </svg>
                                  </>
                                ) : (
                                  <>
                                    <span>Show More</span>
                                    <svg className="w-3 h-3 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                    </svg>
                                  </>
                                )}
                              </button>
                            )}
                          </div>
                        ) : (
                          <div className="text-sm text-gray-500 italic">
                            {enquiry.message || 'No message'}
                          </div>
                        )}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm">
                        {enquiry.hasVoiceNote ? (
                          <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
                            Voice Note
                          </span>
                        ) : (
                          <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-gray-100 text-gray-800">
                            Text Only
                          </span>
                        )}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        {formatDate(enquiry.createdAt)}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </FadeIn>

        {/* Users Table */}
        <FadeIn>
          <div className="bg-white rounded-lg shadow">
            <div className="px-6 py-4 border-b">
              <h2 className="text-xl font-semibold text-gray-900">Recent Users</h2>
            </div>
            <div className="overflow-x-auto">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Email
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Registration Date
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {users.map((user) => (
                    <tr key={user._id} className="hover:bg-gray-50">
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                        {user.email}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        {formatDate(user.createdAt)}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </FadeIn>
      </Container>
    </div>
  )
}
