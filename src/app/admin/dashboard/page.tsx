'use client'

import { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'
import { Container } from '@/components/Container'
import { FadeIn } from '@/components/FadeIn'

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
  }, [router])

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
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white shadow-sm border-b">
        <Container>
          <div className="flex justify-between items-center py-4">
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

      <Container className="py-8">
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
                      Message
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
                      <td className="px-6 py-4 text-sm text-gray-900 max-w-xs truncate">
                        {enquiry.message || enquiry.transcript || 'No message'}
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
