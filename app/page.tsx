'use client'

import { lazy, Suspense } from 'react'
import Navbar from '@/components/Navbar'
import Hero from '@/components/Hero'
import WhatsAppButton from '@/components/WhatsAppButton'
import { useAnalytics } from '@/hooks/useAnalytics'
import LoadingSpinner from '@/components/LoadingSpinner'

// Lazy load components for better performance
const About = lazy(() => import('@/components/About'))
const PhotographySection = lazy(() => import('@/components/PhotographySection'))
const EditorialGallery = lazy(() => import('@/components/EditorialGallery'))
const PanoramicGallery = lazy(() => import('@/components/Immersive360Gallery'))
const Services = lazy(() => import('@/components/Services'))
const Values = lazy(() => import('@/components/Values'))
const Testimonials = lazy(() => import('@/components/Testimonials'))
const Contact = lazy(() => import('@/components/Contact'))
const Footer = lazy(() => import('@/components/Footer'))

export default function HomePage() {
  useAnalytics('home')
  
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <Suspense fallback={<LoadingSpinner />}>
        <About />
      </Suspense>
      <Suspense fallback={<LoadingSpinner />}>
        <PhotographySection />
      </Suspense>
      <Suspense fallback={<LoadingSpinner />}>
        <EditorialGallery />
      </Suspense>
      <Suspense fallback={<LoadingSpinner />}>
        <PanoramicGallery />
      </Suspense>
      <Suspense fallback={<LoadingSpinner />}>
        <Services />
      </Suspense>
      <Suspense fallback={<LoadingSpinner />}>
        <Values />
      </Suspense>
      <Suspense fallback={<LoadingSpinner />}>
        <Testimonials />
      </Suspense>
      <Suspense fallback={<LoadingSpinner />}>
        <Contact />
      </Suspense>
      <Suspense fallback={<LoadingSpinner />}>
        <Footer />
      </Suspense>
      
      {/* WhatsApp Floating Button */}
      <WhatsAppButton />
    </div>
  )
}
