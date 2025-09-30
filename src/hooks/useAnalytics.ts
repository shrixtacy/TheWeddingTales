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
        const fetchTimeoutId = setTimeout(() => controller.abort(), 3000) // Reduced timeout
        
        await fetch('/api/analytics/track', {
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
      } catch (error) {
        // Silently fail analytics to not block the UI
        if (error instanceof Error && error.name !== 'AbortError') {
          console.warn('Analytics tracking failed:', error)
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
