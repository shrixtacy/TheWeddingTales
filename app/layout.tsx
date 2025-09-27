import type { Metadata, Viewport } from 'next'
import { Inter, Playfair_Display } from 'next/font/google'
import './globals.css'
import LenisProvider from '@/components/LenisProvider'
import ErrorBoundary from '@/components/ErrorBoundary'

const inter = Inter({ 
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

const playfair = Playfair_Display({ 
  subsets: ['latin'],
  variable: '--font-playfair',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'The Wedding Tales - Cinematic Wedding Photography & Films',
  description: 'Professional wedding photography and filmmaking services. Creating cinematic wedding stories with artistic excellence and emotional depth.',
  keywords: 'wedding photography, wedding films, cinematic wedding, professional photographer, wedding videography',
  authors: [{ name: 'The Wedding Tales' }],
}

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${inter.variable} ${playfair.variable}`}>
      <body className="min-h-screen">
        <ErrorBoundary>
          <LenisProvider>
            {children}
          </LenisProvider>
        </ErrorBoundary>
      </body>
    </html>
  )
}
