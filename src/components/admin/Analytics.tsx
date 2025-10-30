'use client'

import { useState, useEffect } from 'react'
import { supabase } from '@/lib/supabase'

interface AnalyticsData {
  totalVisits: number
  uniqueVisitors: number
  pageViews: {
    page: string
    views: number
  }[]
  recentVisits: {
    id: string
    page: string
    timestamp: string
    user_agent: string
    ip_address: string
  }[]
  galleryViews: number
  totalImages: number
}

export default function Analytics() {
  const [analytics, setAnalytics] = useState<AnalyticsData | null>(null)
  const [loading, setLoading] = useState(true)
  const [isOffline, setIsOffline] = useState(false)
  const [timeRange, setTimeRange] = useState('7d')

  useEffect(() => {
    fetchAnalytics()
  }, [timeRange])

  // Load cached data on component mount
  useEffect(() => {
    const cachedData = localStorage.getItem('analytics_cache')
    if (cachedData) {
      try {
        const parsedData = JSON.parse(cachedData)
        setAnalytics(parsedData)
      } catch (error) {
        console.error('Error parsing cached analytics:', error)
      }
    }
  }, [])

  const fetchAnalytics = async () => {
    try {
      // Check if Supabase is available
      if (!supabase) {
        console.warn('Supabase not configured, using fallback analytics data')
        setIsOffline(true)
        
        // Use fallback/demo data
        const fallbackAnalytics = {
          totalVisits: 0,
          uniqueVisitors: 0,
          pageViews: [],
          recentVisits: [],
          galleryViews: 0,
          totalImages: 0,
        }
        
        setAnalytics(fallbackAnalytics)
        return
      }

      // Get total visits
      const { data: visits, error: visitsError } = await supabase
        .from('website_visits')
        .select('*')

      if (visitsError) throw visitsError

      // Get unique visitors (by IP)
      const uniqueIPs = new Set(visits?.map(v => v.ip_address) || [])
      
      // Get page views
      const pageViews = visits?.reduce((acc: any, visit) => {
        acc[visit.page] = (acc[visit.page] || 0) + 1
        return acc
      }, {}) || {}

      const pageViewsArray = Object.entries(pageViews).map(([page, views]) => ({
        page,
        views: views as number
      }))

      // Get recent visits (last 10)
      const recentVisits = visits?.slice(0, 10) || []

      // Get gallery views
      const { data: galleryViews, error: galleryError } = await supabase
        .from('gallery_views')
        .select('*')

      if (galleryError) console.error('Gallery views error:', galleryError)

      // Get total images from existing gallery_images table
      const { data: images, error: imagesError } = await supabase
        .from('gallery_images')
        .select('id')

      if (imagesError) console.error('Images error:', imagesError)

      const analyticsData = {
        totalVisits: visits?.length || 0,
        uniqueVisitors: uniqueIPs.size,
        pageViews: pageViewsArray,
        recentVisits,
        galleryViews: galleryViews?.length || 0,
        totalImages: images?.length || 0,
      }

      setAnalytics(analyticsData)
      setIsOffline(false)
      
      // Cache the data for offline use
      localStorage.setItem('analytics_cache', JSON.stringify(analyticsData))
      localStorage.setItem('analytics_cache_timestamp', new Date().toISOString())
      
    } catch (error) {
      console.error('Error fetching analytics:', error)
      setIsOffline(true)
      
      // Try to load cached data as fallback
      const cachedData = localStorage.getItem('analytics_cache')
      if (cachedData) {
        try {
          const parsedData = JSON.parse(cachedData)
          setAnalytics(parsedData)
        } catch (parseError) {
          console.error('Error parsing cached analytics:', parseError)
        }
      } else {
        // If no cached data, try to generate analytics from offline data
        try {
          const offlineData = localStorage.getItem('offline_analytics')
          if (offlineData) {
            const offlineVisits = JSON.parse(offlineData)
            const uniqueIPs = new Set(offlineVisits.map((v: any) => v.ip_address || 'unknown'))
            
            const pageViews = offlineVisits.reduce((acc: any, visit: any) => {
              acc[visit.page] = (acc[visit.page] || 0) + 1
              return acc
            }, {})

            const pageViewsArray = Object.entries(pageViews).map(([page, views]) => ({
              page,
              views: views as number
            }))

            const recentVisits = offlineVisits.slice(0, 10).map((visit: any, index: number) => ({
              id: `offline-${index}`,
              page: visit.page,
              timestamp: visit.timestamp,
              user_agent: visit.user_agent || 'unknown',
              ip_address: visit.ip_address || 'unknown'
            }))

            const offlineAnalytics = {
              totalVisits: offlineVisits.length,
              uniqueVisitors: uniqueIPs.size,
              pageViews: pageViewsArray,
              recentVisits,
              galleryViews: 0, // Offline data doesn't have gallery views
              totalImages: 0,  // Offline data doesn't have image count
            }

            setAnalytics(offlineAnalytics)
          }
        } catch (offlineError) {
          console.error('Error processing offline analytics:', offlineError)
        }
      }
    } finally {
      setLoading(false)
    }
  }

  const trackPageView = async (page: string) => {
    try {
      if (!supabase) {
        console.log('Supabase not configured, skipping page view tracking')
        return
      }

      await supabase
        .from('website_visits')
        .insert([
          {
            page,
            timestamp: new Date().toISOString(),
            user_agent: navigator.userAgent,
            ip_address: 'unknown', // In production, you'd get this from the server
          },
        ])
    } catch (error) {
      console.error('Error tracking page view:', error)
    }
  }

  if (loading) {
    return (
      <div className="flex justify-center items-center h-64">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-indigo-600"></div>
      </div>
    )
  }

  const getCacheTimestamp = () => {
    const timestamp = localStorage.getItem('analytics_cache_timestamp')
    if (timestamp) {
      return new Date(timestamp).toLocaleString()
    }
    return null
  }

  const syncOfflineData = async () => {
    try {
      const offlineData = localStorage.getItem('offline_analytics')
      if (!offlineData) return

      const offlineVisits = JSON.parse(offlineData)
      const failedVisits = offlineVisits.filter((visit: any) => visit.failed)
      
      if (failedVisits.length === 0) {
        alert('No offline data to sync')
        return
      }

      if (!supabase) {
        alert('Supabase not configured, cannot sync offline data')
        return
      }

      // Try to sync failed visits to Supabase
      for (const visit of failedVisits) {
        try {
          await supabase
            .from('website_visits')
            .insert([
              {
                page: visit.page,
                timestamp: visit.timestamp,
                user_agent: visit.user_agent,
                ip_address: visit.ip_address || 'unknown',
              },
            ])
        } catch (error) {
          console.error('Error syncing visit:', error)
        }
      }

      // Remove synced data from offline storage
      const remainingVisits = offlineVisits.filter((visit: any) => !visit.failed)
      localStorage.setItem('offline_analytics', JSON.stringify(remainingVisits))

      alert(`Synced ${failedVisits.length} offline visits`)
      
      // Refresh analytics
      await fetchAnalytics()
    } catch (error) {
      console.error('Error syncing offline data:', error)
      alert('Error syncing offline data')
    }
  }

  return (
    <div className="space-y-6">
      <div>
        <div className="flex items-center justify-between">
          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Website Analytics</h2>
            <p className="text-gray-600">Monitor your website's performance and visitor engagement.</p>
          </div>
          {isOffline && (
            <div className="flex items-center space-x-2 bg-yellow-50 border border-yellow-200 rounded-lg px-3 py-2">
              <div className="w-2 h-2 bg-yellow-400 rounded-full"></div>
              <span className="text-sm text-yellow-800">Offline Mode</span>
            </div>
          )}
        </div>
        {isOffline && getCacheTimestamp() && (
          <div className="mt-2 flex items-center justify-between">
            <div className="text-sm text-gray-500">
              Showing cached data from: {getCacheTimestamp()}
            </div>
            <div className="flex space-x-2">
              <button
                onClick={fetchAnalytics}
                className="text-sm text-indigo-600 hover:text-indigo-800 font-medium"
              >
                Try Again
              </button>
              <button
                onClick={syncOfflineData}
                className="text-sm text-green-600 hover:text-green-800 font-medium"
              >
                Sync Offline Data
              </button>
            </div>
          </div>
        )}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <div className="bg-white p-6 rounded-lg shadow">
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <div className="w-8 h-8 bg-indigo-100 rounded-md flex items-center justify-center">
                <svg className="w-5 h-5 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                </svg>
              </div>
            </div>
            <div className="ml-4">
              <p className="text-sm font-medium text-gray-500">Total Visits</p>
              <p className="text-2xl font-semibold text-gray-900">{analytics?.totalVisits || 0}</p>
            </div>
          </div>
        </div>

        <div className="bg-white p-6 rounded-lg shadow">
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <div className="w-8 h-8 bg-green-100 rounded-md flex items-center justify-center">
                <svg className="w-5 h-5 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197m13.5-9a2.5 2.5 0 11-5 0 2.5 2.5 0 015 0z" />
                </svg>
              </div>
            </div>
            <div className="ml-4">
              <p className="text-sm font-medium text-gray-500">Unique Visitors</p>
              <p className="text-2xl font-semibold text-gray-900">{analytics?.uniqueVisitors || 0}</p>
            </div>
          </div>
        </div>

        <div className="bg-white p-6 rounded-lg shadow">
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <div className="w-8 h-8 bg-blue-100 rounded-md flex items-center justify-center">
                <svg className="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
              </div>
            </div>
            <div className="ml-4">
              <p className="text-sm font-medium text-gray-500">Gallery Views</p>
              <p className="text-2xl font-semibold text-gray-900">{analytics?.galleryViews || 0}</p>
            </div>
          </div>
        </div>

        <div className="bg-white p-6 rounded-lg shadow">
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <div className="w-8 h-8 bg-purple-100 rounded-md flex items-center justify-center">
                <svg className="w-5 h-5 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012 2v2M7 7h10" />
                </svg>
              </div>
            </div>
            <div className="ml-4">
              <p className="text-sm font-medium text-gray-500">Total Images</p>
              <p className="text-2xl font-semibold text-gray-900">{analytics?.totalImages || 0}</p>
            </div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-white p-6 rounded-lg shadow">
          <h3 className="text-lg font-medium text-gray-900 mb-4">Page Views</h3>
          <div className="space-y-3">
            {analytics?.pageViews.map((page, index) => (
              <div key={index} className="flex items-center justify-between">
                <span className="text-sm text-gray-600">{page.page}</span>
                <span className="text-sm font-medium text-gray-900">{page.views}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-white p-6 rounded-lg shadow">
          <h3 className="text-lg font-medium text-gray-900 mb-4">Recent Visits</h3>
          <div className="space-y-3 max-h-64 overflow-y-auto">
            {analytics?.recentVisits.map((visit) => (
              <div key={visit.id} className="flex items-center justify-between text-sm">
                <div>
                  <span className="text-gray-900">{visit.page}</span>
                  <p className="text-gray-500">{new Date(visit.timestamp).toLocaleString()}</p>
                </div>
                <span className="text-gray-500">{visit.ip_address}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}