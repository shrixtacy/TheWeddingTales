import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import { Camera, Video, Heart, Award, Shield, Zap, Users, Star, Home, CheckCircle, Trophy, DollarSign, Instagram, Facebook, Youtube, Mail, Phone, MapPin, Clock } from 'lucide-react'

export default function AboutPage() {
  const services = [
    {
      id: 1,
      icon: Camera,
      title: "Wedding Photography",
      description: "Capturing your special day with artistic excellence and emotional storytelling.",
      color: "bg-pink-500"
    },
    {
      id: 2,
      icon: Video,
      title: "Cinematic Films",
      description: "Creating beautiful wedding films that tell your unique love story.",
      color: "bg-purple-500"
    },
    {
      id: 3,
      icon: Heart,
      title: "Pre-Wedding Shoots",
      description: "Romantic and creative sessions before your big day.",
      color: "bg-red-500"
    },
    {
      id: 4,
      icon: Users,
      title: "Event Photography",
      description: "Professional coverage for all your special occasions.",
      color: "bg-blue-500"
    }
  ];

  const team = [
    {
      id: 1,
      name: "Creative Directors",
      role: "Vision & Strategy",
      description: "Our creative team brings fresh perspectives and innovative approaches to every project."
    },
    {
      id: 2,
      name: "Lead Photographers",
      role: "Art & Technique",
      description: "Experienced professionals with an eye for detail and passion for storytelling."
    },
    {
      id: 3,
      name: "Video Specialists",
      role: "Motion & Emotion",
      description: "Cinematic storytellers who bring your memories to life through moving images."
    },
    {
      id: 4,
      name: "Post-Production",
      role: "Polish & Perfection",
      description: "Expert editors who ensure every image and video meets our high standards."
    }
  ];

  const stats = [
    {
      id: 1,
      icon: Home,
      number: "1000+",
      title: "WEDDINGS CAPTURED",
      color: "bg-blue-500"
    },
    {
      id: 2,
      icon: Users,
      number: "50k+",
      title: "HAPPY COUPLES",
      color: "bg-green-500"
    },
    {
      id: 3,
      icon: Star,
      number: "4.9",
      title: "CLIENT RATING",
      color: "bg-yellow-500"
    },
    {
      id: 4,
      icon: Camera,
      number: "15+",
      title: "YEARS EXPERIENCE",
      color: "bg-purple-500"
    }
  ];

  const values = [
    {
      id: 1,
      icon: Heart,
      title: "Passion",
      description: "We love what we do and it shows in every photograph we create.",
      color: "bg-red-500"
    },
    {
      id: 2,
      icon: Award,
      title: "Excellence",
      description: "We never compromise on quality and always strive for perfection.",
      color: "bg-yellow-500"
    },
    {
      id: 3,
      icon: Shield,
      title: "Trust",
      description: "Your precious moments are safe with our reliable and professional service.",
      color: "bg-blue-500"
    },
    {
      id: 4,
      icon: Zap,
      title: "Innovation",
      description: "We embrace new techniques and technology to deliver cutting-edge results.",
      color: "bg-purple-500"
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative h-[90vh] overflow-hidden bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900">
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        <div className="relative z-10 h-full flex items-center">
          <div className="max-w-7xl mx-auto px-4 w-full">
            <div className="text-center">
              <p className="text-xl text-blue-300 mb-6 font-light tracking-widest">ABOUT US</p>
              <h1 className="text-7xl lg:text-8xl font-bold text-white mb-8 leading-tight">
                The Wedding Tales
              </h1>
              <p className="text-2xl text-gray-300 mb-12 max-w-4xl mx-auto leading-relaxed">
                We are storytellers with cameras, capturing the most precious moments of your life 
                with artistic vision, technical excellence, and heartfelt passion.
              </p>
              <div className="flex flex-col sm:flex-row gap-6 justify-center">
                <button className="bg-white text-gray-900 px-10 py-5 rounded-lg text-lg font-semibold hover:bg-gray-100 transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
                  Our Story
                </button>
                <button className="border-2 border-white text-white px-10 py-5 rounded-lg text-lg font-semibold hover:bg-white hover:text-gray-900 transition-all duration-300">
                  Meet Our Team
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="py-24 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-6xl font-bold text-gray-900 mb-8">Our Story</h2>
            <p className="text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              Founded with a vision to capture life's most beautiful moments, 
              The Wedding Tales has grown into one of the most trusted and innovative 
              photography studios in the industry.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <div className="space-y-8">
              <div className="bg-gradient-to-br from-blue-50 to-purple-50 p-10 rounded-3xl">
                <h3 className="text-3xl font-bold text-gray-900 mb-6">Our Mission</h3>
                <p className="text-lg text-gray-700 leading-relaxed">
                  To create timeless memories through exceptional photography and videography, 
                  capturing the essence of your special moments with artistic vision and 
                  technical excellence. We believe every love story deserves to be told beautifully, 
                  and we're here to make that happen.
                </p>
              </div>
              
              <div className="bg-gradient-to-br from-gray-50 to-blue-50 p-10 rounded-3xl">
                <h3 className="text-3xl font-bold text-gray-900 mb-6">Our Vision</h3>
                <p className="text-lg text-gray-700 leading-relaxed">
                  To be the leading photography studio that sets the standard for creative 
                  excellence, innovative storytelling, and exceptional client experiences 
                  in the wedding and event photography industry worldwide.
                </p>
              </div>
            </div>

            <div className="space-y-8">
              <div className="flex items-start space-x-6">
                <div className="w-16 h-16 bg-blue-500 rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-white font-bold text-xl">1</span>
                </div>
                <div>
                  <h4 className="text-2xl font-bold text-gray-900 mb-3">Founded in 2009</h4>
                  <p className="text-lg text-gray-600 leading-relaxed">Started with a passion for photography and a dream to capture beautiful moments that last forever.</p>
                </div>
              </div>

              <div className="flex items-start space-x-6">
                <div className="w-16 h-16 bg-blue-500 rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-white font-bold text-xl">2</span>
                </div>
                <div>
                  <h4 className="text-2xl font-bold text-gray-900 mb-3">Team Expansion</h4>
                  <p className="text-lg text-gray-600 leading-relaxed">Grew from a solo photographer to a team of skilled professionals and creative experts.</p>
                </div>
              </div>

              <div className="flex items-start space-x-6">
                <div className="w-16 h-16 bg-blue-500 rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-white font-bold text-xl">3</span>
                </div>
                <div>
                  <h4 className="text-2xl font-bold text-gray-900 mb-3">Industry Recognition</h4>
                  <p className="text-lg text-gray-600 leading-relaxed">Became one of the most trusted and highly-rated photography studios with international recognition.</p>
                </div>
              </div>

              <div className="flex items-start space-x-6">
                <div className="w-16 h-16 bg-blue-500 rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-white font-bold text-xl">4</span>
                </div>
                <div>
                  <h4 className="text-2xl font-bold text-gray-900 mb-3">Today</h4>
                  <p className="text-lg text-gray-600 leading-relaxed">Continuing to innovate and create beautiful memories for couples worldwide with cutting-edge technology.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-24 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-6xl font-bold text-gray-900 mb-8">What We Do</h2>
            <p className="text-2xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive photography and videography services for all your special moments
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => {
              const IconComponent = service.icon;
              return (
                <div
                  key={service.id}
                  className="bg-white rounded-3xl p-10 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-3 group text-center"
                  style={{ 
                    transitionDelay: `${index * 100}ms`,
                    animation: 'fadeInUp 0.6s ease-out forwards'
                  }}
                >
                  <div className={`w-20 h-20 ${service.color} rounded-2xl flex items-center justify-center mx-auto mb-8 group-hover:scale-110 transition-transform duration-300`}>
                    <IconComponent className="w-10 h-10 text-white" />
                  </div>
                  
                  <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-blue-600 transition-colors duration-300">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed group-hover:text-gray-800 transition-colors duration-300">
                    {service.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-24 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-6xl font-bold text-gray-900 mb-8">Our Team</h2>
            <p className="text-2xl text-gray-600 max-w-3xl mx-auto">
              Meet the talented professionals behind The Wedding Tales
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => {
              const IconComponent = Camera;
              return (
                <div
                  key={member.id}
                  className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 group text-center"
                  style={{ 
                    transitionDelay: `${index * 100}ms`,
                    animation: 'fadeInUp 0.6s ease-out forwards'
                  }}
                >
                  <div className="w-16 h-16 bg-blue-500 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                    <IconComponent className="w-8 h-8 text-white" />
                  </div>
                  
                  <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors duration-300">
                    {member.name}
                  </h3>
                  <p className="text-blue-600 font-semibold mb-4">{member.role}</p>
                  <p className="text-gray-600 leading-relaxed group-hover:text-gray-800 transition-colors duration-300">
                    {member.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-24 px-4 bg-blue-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-6xl font-bold text-gray-900 mb-8">Our Values</h2>
            <p className="text-2xl text-gray-600 max-w-3xl mx-auto">
              The core principles that guide everything we do
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => {
              const IconComponent = value.icon;
              return (
                <div
                  key={value.id}
                  className="bg-white rounded-3xl p-10 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-3 group text-center"
                  style={{ 
                    transitionDelay: `${index * 100}ms`,
                    animation: 'fadeInUp 0.6s ease-out forwards'
                  }}
                >
                  <div className={`w-20 h-20 ${value.color} rounded-2xl flex items-center justify-center mx-auto mb-8 group-hover:scale-110 transition-transform duration-300`}>
                    <IconComponent className="w-10 h-10 text-white" />
                  </div>
                  
                  <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-blue-600 transition-colors duration-300">
                    {value.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed group-hover:text-gray-800 transition-colors duration-300">
                    {value.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-24 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-6xl font-bold text-gray-900 mb-8">By The Numbers</h2>
            <p className="text-2xl text-gray-600 max-w-3xl mx-auto">
              Our achievements and impact in numbers
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => {
              const IconComponent = stat.icon;
              return (
                <div
                  key={stat.id}
                  className="text-center group"
                  style={{ 
                    transitionDelay: `${index * 100}ms`,
                    animation: 'fadeInUp 0.6s ease-out forwards'
                  }}
                >
                  <div className={`w-24 h-24 ${stat.color} rounded-full flex items-center justify-center mx-auto mb-8 group-hover:scale-110 transition-transform duration-300`}>
                    <IconComponent className="w-12 h-12 text-white" />
                  </div>
                  
                  <h3 className="text-5xl font-bold text-gray-900 mb-4 group-hover:text-blue-600 transition-colors duration-300">
                    {stat.number}
                  </h3>
                  <p className="text-xl text-gray-600 font-medium group-hover:text-gray-800 transition-colors duration-300">
                    {stat.title}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Contact CTA Section */}
      <section className="py-24 px-4 bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-6xl font-bold text-white mb-8">
            Ready to Create Beautiful Memories?
          </h2>
          <p className="text-2xl text-gray-300 mb-12 max-w-4xl mx-auto leading-relaxed">
            Let's discuss your vision and bring your story to life through our lens. 
            We're here to make your special moments unforgettable.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <button className="bg-white text-gray-900 px-12 py-6 rounded-lg text-xl font-semibold hover:bg-gray-100 transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
              Get In Touch
            </button>
            <button className="border-2 border-white text-white px-12 py-6 rounded-lg text-xl font-semibold hover:bg-white hover:text-gray-900 transition-all duration-300">
              View Our Work
            </button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
