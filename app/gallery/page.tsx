import Navbar from '@/components/Navbar'
import ProxyGoogleDriveGallery from '@/components/ProxyGoogleDriveGallery'
import Footer from '@/components/Footer'

export default function Gallery() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <ProxyGoogleDriveGallery />
      <Footer />
    </div>
  )
}
