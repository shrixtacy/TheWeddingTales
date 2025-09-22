import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import { Camera, Video, Plane, User, Calendar, Image, Package, Users, Star } from 'lucide-react'

export default function ServicesPage() {
  const services = [
    {
      id: 1,
      title: "Pre-Wedding Photography",
      description: "Capture your love story before the big day with romantic and creative pre-wedding shoots.",
      icon: Camera,
      color: "bg-blue-500"
    },
    {
      id: 2,
      title: "Wedding Photography",
      description: "Professional wedding photography to capture every precious moment of your special day.",
      icon: Camera,
      color: "bg-pink-500"
    },
    {
      id: 3,
      title: "Cinematic Video Shoots",
      description: "Create stunning cinematic wedding films that tell your unique love story.",
      icon: Video,
      color: "bg-purple-500"
    },
    {
      id: 4,
      title: "Drone Photography",
      description: "Aerial shots and unique perspectives using professional drone technology.",
      icon: Plane,
      color: "bg-green-500"
    },
    {
      id: 5,
      title: "Fashion Photography",
      description: "High-end fashion and portrait photography for all your special occasions.",
      icon: User,
      color: "bg-red-500"
    },
    {
      id: 6,
      title: "Product Photography",
      description: "Professional product photography for businesses and e-commerce needs.",
      icon: Image,
      color: "bg-yellow-500"
    },
    {
      id: 7,
      title: "Portrait Photography",
      description: "Beautiful portrait sessions for individuals, couples, and families.",
      icon: User,
      color: "bg-indigo-500"
    },
    {
      id: 8,
      title: "Event Photography",
      description: "Corporate events, parties, and special occasions captured professionally.",
      icon: Calendar,
      color: "bg-orange-500"
    },
    {
      id: 9,
      title: "Custom Photo Albums & Prints",
      description: "Beautiful custom photo albums and high-quality prints for your memories.",
      icon: Package,
      color: "bg-teal-500"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative h-[70vh] overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ 
            backgroundImage: `url('https://images.unsplash.com/photo-1606800052052-a08af7148866?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80')`
          }}
        >
          <div className="absolute inset-0 bg-black bg-opacity-50" />
        </div>
        
        <div className="relative z-10 h-full flex flex-col items-center justify-center text-center text-white px-4">
          <h1 className="text-6xl md:text-8xl font-bold mb-6">Services</h1>
          <p className="text-xl md:text-2xl font-light max-w-3xl">
            From love stories to lifetime events — we capture it all, beautifully.
          </p>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 px-4 bg-blue-50">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <h2 className="text-5xl font-bold text-gray-900 mb-6">
                Our Photography Services
              </h2>
              <p className="text-lg text-gray-700 leading-relaxed mb-8">
                We specialize in capturing the most meaningful moments of your life. 
                From intimate pre-wedding sessions to grand wedding celebrations, 
                we tailor each shoot to your unique story, blending technical expertise 
                with emotional storytelling to create timeless memories.
              </p>
              
              {/* Social Media Icons */}
              <div className="flex space-x-4">
                <div className="w-12 h-12 bg-white border-2 border-blue-500 rounded-lg flex items-center justify-center hover:bg-blue-500 hover:text-white transition-colors duration-300 cursor-pointer">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 5.079 3.158 9.417 7.618 11.174-.105-.949-.199-2.403.041-3.439.219-.937 1.406-5.957 1.406-5.957s-.359-.72-.359-1.781c0-1.663.967-2.911 2.168-2.911 1.024 0 1.518.769 1.518 1.688 0 1.029-.653 2.567-.992 3.992-.285 1.193.6 2.165 1.775 2.165 2.128 0 3.768-2.245 3.768-5.487 0-2.861-2.063-4.869-5.008-4.869-3.41 0-5.409 2.562-5.409 5.199 0 1.033.394 2.143.889 2.741.099.12.112.225.085.345-.09.375-.293 1.199-.334 1.363-.053.225-.172.271-.402.165-1.495-.69-2.433-2.878-2.433-4.646 0-3.776 2.748-7.252 7.92-7.252 4.158 0 7.392 2.967 7.392 6.923 0 4.135-2.607 7.462-6.233 7.462-1.214 0-2.357-.629-2.746-1.378l-.748 2.853c-.271 1.043-1.002 2.35-1.492 3.146C9.57 23.812 10.763 24.009 12.017 24.009c6.624 0 11.99-5.367 11.99-11.988C24.007 5.367 18.641.001.012.001z"/>
                  </svg>
                </div>
                <div className="w-12 h-12 bg-white border-2 border-blue-500 rounded-lg flex items-center justify-center hover:bg-blue-500 hover:text-white transition-colors duration-300 cursor-pointer">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/>
                  </svg>
                </div>
                <div className="w-12 h-12 bg-white border-2 border-blue-500 rounded-lg flex items-center justify-center hover:bg-blue-500 hover:text-white transition-colors duration-300 cursor-pointer">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                  </svg>
                </div>
              </div>
            </div>
          </div>

          {/* Services Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => {
              const IconComponent = service.icon;
              return (
                <div
                  key={service.id}
                  className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 hover:scale-105 cursor-pointer"
                  style={{ 
                    transitionDelay: `${index * 100}ms`,
                    animation: 'fadeInUp 0.6s ease-out forwards'
                  }}
                >
                  {/* Icon */}
                  <div className={`w-16 h-16 ${service.color} rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                    <IconComponent className="w-8 h-8 text-white" />
                  </div>
                  
                  {/* Content */}
                  <h3 className="text-xl font-bold text-gray-900 mb-4 group-hover:text-blue-600 transition-colors duration-300">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed group-hover:text-gray-800 transition-colors duration-300">
                    {service.description}
                  </p>
                  
                  {/* Hover Effect Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-purple-500/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-blue-50">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-gray-900 mb-6">
            Ready to Book Your Shoot?
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            Let's create beautiful memories together. Contact us today to discuss your photography needs.
          </p>
          <button className="bg-gray-800 hover:bg-gray-900 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-300 hover:shadow-xl hover:-translate-y-1 flex items-center mx-auto">
            <Calendar className="w-5 h-5 mr-2" />
            Book a Session Now
          </button>
        </div>
      </section>

      <Footer />
    </div>
  );
}
