import { useEffect } from 'react'

export const useAnalytics = (page: string) => {
  useEffect(() => {
    // Use requestIdleCallback for non-blocking analytics
    const trackPageView = async () => {
      try {
        // Add timeout to prevent hanging
        const controller = new AbortController()
        const timeoutId = setTimeout(() => controller.abort(), 5000) // 5 second timeout
        
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
        
        clearTimeout(timeoutId)
      } catch (error) {
        // Silently fail analytics to not block the UI
        if (error instanceof Error && error.name !== 'AbortError') {
          console.warn('Analytics tracking failed:', error)
        }
      }
    }

    // Use requestIdleCallback for better performance
    if ('requestIdleCallback' in window) {
      requestIdleCallback(trackPageView, { timeout: 2000 })
    } else {
      // Fallback for browsers without requestIdleCallback
      setTimeout(trackPageView, 100)
    }
  }, [page])
}
