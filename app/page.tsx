'use client'

import Navbar from '@/components/Navbar'
import Hero from '@/components/Hero'
import About from '@/components/About'
import PhotographySection from '@/components/PhotographySection'
import Services from '@/components/Services'
import Testimonials from '@/components/Testimonials'
import Contact from '@/components/Contact'
import Footer from '@/components/Footer'
import { useAnalytics } from '@/hooks/useAnalytics'

export default function HomePage() {
  useAnalytics('home')
  
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <About />
      <PhotographySection />
      <Services />
      <Testimonials />
      <Contact />
      <Footer />
    </div>
  )
}
