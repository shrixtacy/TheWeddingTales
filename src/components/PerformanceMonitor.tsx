'use client'

import { useEffect, memo } from 'react'

const PerformanceMonitor = memo(() => {
  useEffect(() => {
    // Monitor performance metrics
    if (typeof window !== 'undefined' && 'performance' in window) {
      // Monitor Core Web Vitals
      const observer = new PerformanceObserver((list) => {
        for (const entry of list.getEntries()) {
          if (entry.entryType === 'largest-contentful-paint') {
            console.log('LCP:', entry.startTime)
          }
          if (entry.entryType === 'first-input') {
            const fidEntry = entry as any
            console.log('FID:', fidEntry.processingStart - entry.startTime)
          }
          if (entry.entryType === 'layout-shift') {
            const clsEntry = entry as any
            console.log('CLS:', clsEntry.value)
          }
        }
      })

      observer.observe({ entryTypes: ['largest-contentful-paint', 'first-input', 'layout-shift'] })

      // Monitor frame rate
      let frameCount = 0
      let lastTime = performance.now()
      
      const measureFPS = () => {
        frameCount++
        const currentTime = performance.now()
        
        if (currentTime - lastTime >= 1000) {
          const fps = Math.round((frameCount * 1000) / (currentTime - lastTime))
          if (fps < 30) {
            console.warn('Low FPS detected:', fps)
          }
          
          frameCount = 0
          lastTime = currentTime
        }
        
        requestAnimationFrame(measureFPS)
      }
      
      requestAnimationFrame(measureFPS)

      return () => {
        observer.disconnect()
      }
    }
  }, [])

  return null
})

PerformanceMonitor.displayName = 'PerformanceMonitor'

export default PerformanceMonitor
