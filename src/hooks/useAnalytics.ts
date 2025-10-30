import { useEffect } from 'react'

export const useAnalytics = (page: string) => {
  useEffect(() => {
    // Debounce analytics to prevent multiple rapid calls
    let timeoutId: NodeJS.Timeout | null = null
    let isTracking = false

    const trackPageView = async () => {
      if (isTracking) return
      isTracking = true

      try {
        // Add timeout to prevent hanging
        const controller = new AbortController()
        // Pass 'timeout' reason for modern browsers; fallback to abort without reason for support
        const fetchTimeoutId = setTimeout(() => {
          try { controller.abort('timeout') } catch { controller.abort() } // Reason is optional
        }, 3000) // Reduced timeout
        
        const response = await fetch('/api/analytics/track', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            page,
            user_agent: navigator.userAgent,
          }),
          signal: controller.signal,
        })
        
        clearTimeout(fetchTimeoutId)
        
        if (!response.ok) {
          throw new Error(`Analytics tracking failed: ${response.status}`)
        }
        
        // Store successful tracking in localStorage for offline fallback
        const trackingData = {
          page,
          timestamp: new Date().toISOString(),
          user_agent: navigator.userAgent,
        }
        
        // Store in localStorage for offline analytics
        const existingData = JSON.parse(localStorage.getItem('offline_analytics') || '[]')
        existingData.push(trackingData)
        
        // Keep only last 100 entries to prevent localStorage bloat
        if (existingData.length > 100) {
          existingData.splice(0, existingData.length - 100)
        }
        
        localStorage.setItem('offline_analytics', JSON.stringify(existingData))
        
      } catch (error) {
        // Silently fail analytics to not block the UI
        // Ignore all abort errors (with/without reason)
        if (error instanceof Error && error.name === 'AbortError') {
          return
        }
        if (error instanceof Error) {
          console.warn('Analytics tracking failed:', error)
          
          // Store failed tracking attempt for later retry
          const trackingData = {
            page,
            timestamp: new Date().toISOString(),
            user_agent: navigator.userAgent,
            failed: true
          }
          
          const existingData = JSON.parse(localStorage.getItem('offline_analytics') || '[]')
          existingData.push(trackingData)
          
          if (existingData.length > 100) {
            existingData.splice(0, existingData.length - 100)
          }
          
          localStorage.setItem('offline_analytics', JSON.stringify(existingData))
        }
      } finally {
        isTracking = false
      }
    }

    // Debounce the analytics call
    const debouncedTrack = () => {
      if (timeoutId) {
        clearTimeout(timeoutId)
      }
      timeoutId = setTimeout(trackPageView, 1000) // Wait 1 second before tracking
    }

    // Use requestIdleCallback for better performance
    if ('requestIdleCallback' in window) {
      requestIdleCallback(debouncedTrack, { timeout: 2000 })
    } else {
      // Fallback for browsers without requestIdleCallback
      setTimeout(debouncedTrack, 100)
    }

    // Cleanup function
    return () => {
      if (timeoutId) {
        clearTimeout(timeoutId)
      }
    }
  }, [page])
}
