'use client'

import React, { useState, useEffect, useRef, memo } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { Check, Star, Camera, Video, Users, Clock, Award, MessageCircle, ArrowRight } from 'lucide-react'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import WhatsAppButton from '@/components/WhatsAppButton'

const PricingPage = memo(() => {
  const [isTextBlurred, setIsTextBlurred] = useState(true);
  const [isMobileTextFaded, setIsMobileTextFaded] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  // Trigger text blur animation when section comes into view
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const timer = setTimeout(() => {
              setIsTextBlurred(false);
            }, 500);
            return () => clearTimeout(timer);
          }
        });
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  // Mobile fade-out effect for hero text
  useEffect(() => {
    const checkMobileAndFade = () => {
      const isMobile = window.innerWidth < 768; // md breakpoint
      if (isMobile) {
        // Fade out text after 4 seconds on mobile
        const fadeTimer = setTimeout(() => {
          setIsMobileTextFaded(true);
        }, 4000);
        return () => clearTimeout(fadeTimer);
      }
    };

    checkMobileAndFade();
    
    // Listen for resize events to handle orientation changes
    const handleResize = () => {
      const isMobile = window.innerWidth < 768;
      if (!isMobile) {
        setIsMobileTextFaded(false);
      } else {
        // Reset and restart fade timer on mobile
        setIsMobileTextFaded(false);
        const fadeTimer = setTimeout(() => {
          setIsMobileTextFaded(true);
        }, 4000);
        return () => clearTimeout(fadeTimer);
      }
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const pricingPackages = [
    {
      name: "ESSENTIAL",
      price: "₹75,000",
      duration: "8 Hours",
      description: "Perfect for intimate celebrations",
      features: [
        "1 Professional Photographer",
        "8 Hours Coverage",
        "300+ Edited Images",
        "Online Gallery",
        "Basic Color Correction",
        "2-3 Weeks Delivery"
      ],
      popular: false,
      color: "border-gray-600"
    },
    {
      name: "PREMIUM",
      price: "₹1,50,000",
      duration: "12 Hours",
      description: "Most popular choice for complete coverage",
      features: [
        "2 Professional Photographers",
        "12 Hours Coverage",
        "500+ Edited Images",
        "Online Gallery + USB Drive",
        "Advanced Color Grading",
        "Pre-Wedding Session (2 Hours)",
        "Highlight Film (2-3 mins)",
        "3-4 Weeks Delivery"
      ],
      popular: true,
      color: "border-yellow-500"
    },
    {
      name: "LUXURY",
      price: "₹2,75,000",
      duration: "Multi-Day",
      description: "Complete wedding experience",
      features: [
        "2 Lead Photographers + Assistant",
        "Multi-Day Coverage",
        "800+ Edited Images",
        "Premium Album (50 pages)",
        "Cinematic Wedding Film (5-8 mins)",
        "Drone Coverage",
        "Same Day Preview",
        "4-6 Weeks Delivery"
      ],
      popular: false,
      color: "border-gray-600"
    }
  ];

  const additionalServices = [
    {
      name: "Pre-Wedding Shoot",
      price: "₹45,000",
      duration: "4 Hours",
      description: "Romantic couple session before the big day"
    },
    {
      name: "Engagement Session",
      price: "₹25,000",
      duration: "2 Hours",
      description: "Intimate engagement photography"
    },
    {
      name: "Reception Only",
      price: "₹60,000",
      duration: "6 Hours",
      description: "Evening reception coverage"
    },
    {
      name: "Drone Coverage",
      price: "₹35,000",
      duration: "Add-on",
      description: "Aerial photography and videography"
    }
  ];

  return (
    <div className="min-h-screen bg-black">
      <Navbar />
      
      {/* Hero Section */}
      <section ref={sectionRef} className="py-32 bg-black relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-8 relative">
          {/* Editorial Header with Blur Animation */}
          <div className="text-center mb-24">
            <div className={`editorial-heading text-gray-400 mb-8 transition-all duration-1000 ease-out delay-200 ${
              isTextBlurred ? 'blur-sm opacity-0 translate-y-4' : 'blur-none opacity-100 translate-y-0'
            } ${isMobileTextFaded ? 'md:opacity-100 opacity-0 transition-opacity duration-1000' : ''}`}>
              INVESTMENT
            </div>
            <h1 className={`text-6xl lg:text-7xl xl:text-8xl font-display text-white mb-8 leading-none hero-text-blur ${
              !isTextBlurred ? 'visible' : ''
            } ${isMobileTextFaded ? 'md:opacity-100 opacity-0 transition-opacity duration-1000' : ''}`}>
              <div className={`hero-text-line ${!isTextBlurred ? 'visible' : ''} ${isMobileTextFaded ? 'md:opacity-100 opacity-0 transition-opacity duration-1000' : ''}`}>
                TRANSPARENT
              </div>
              <div className={`hero-text-line ${!isTextBlurred ? 'visible' : ''} ${isMobileTextFaded ? 'md:opacity-100 opacity-0 transition-opacity duration-1000' : ''}`}>
                PRICING
              </div>
            </h1>
            <p className={`text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed font-body transition-all duration-1000 ease-out delay-800 ${
              isTextBlurred ? 'blur-sm opacity-0 translate-y-4' : 'blur-none opacity-100 translate-y-0'
            } ${isMobileTextFaded ? 'md:opacity-100 opacity-0 transition-opacity duration-1000' : ''}`}>
              No hidden costs, no surprises. Choose the package that fits your vision and budget.
            </p>
          </div>

          {/* Pricing Packages */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-24">
            {pricingPackages.map((pkg, index) => (
              <div key={index} className={`relative bg-white/5 backdrop-blur-sm border ${pkg.color} p-8 rounded-3xl transition-all duration-500 hover:scale-105 hover:bg-white/10 ${
                pkg.popular ? 'ring-2 ring-yellow-500/50' : ''
              }`}>
                {pkg.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <div className="bg-yellow-500 text-black px-6 py-2 rounded-full text-sm font-bold tracking-widest">
                      MOST POPULAR
                    </div>
                  </div>
                )}
                
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-white mb-2">{pkg.name}</h3>
                  <div className="text-4xl font-bold text-yellow-500 mb-2">{pkg.price}</div>
                  <div className="text-gray-400 mb-4">{pkg.duration}</div>
                  <p className="text-gray-300 text-sm">{pkg.description}</p>
                </div>

                <ul className="space-y-4 mb-8">
                  {pkg.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start space-x-3">
                      <Check className="text-yellow-500 mt-1 flex-shrink-0" size={16} />
                      <span className="text-gray-300 text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>

                <button 
                  onClick={() => window.open('https://wa.me/919658404280?text=Hi, I\'m interested in the ' + pkg.name + ' package. Please share more details.', '_blank')}
                  className={`w-full py-4 rounded-xl font-semibold text-lg transition-all duration-300 ${
                    pkg.popular 
                      ? 'bg-yellow-500 hover:bg-yellow-600 text-black' 
                      : 'bg-white/10 hover:bg-white/20 text-white border border-white/20'
                  }`}
                >
                  Choose {pkg.name}
                </button>
              </div>
            ))}
          </div>

          {/* Additional Services */}
          <div className="mb-24">
            <div className="text-center mb-16">
              <h2 className="text-4xl lg:text-5xl font-display text-white mb-6 font-light">
                Additional <span className="text-gray-400">Services</span>
              </h2>
              <p className="text-lg text-gray-300 max-w-3xl mx-auto">
                Customize your package with these add-on services
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {additionalServices.map((service, index) => (
                <div key={index} className="bg-white/5 backdrop-blur-sm border border-white/10 p-6 rounded-2xl hover:bg-white/10 transition-all duration-300">
                  <h3 className="text-xl font-bold text-white mb-2">{service.name}</h3>
                  <div className="text-2xl font-bold text-yellow-500 mb-2">{service.price}</div>
                  <div className="text-gray-400 text-sm mb-3">{service.duration}</div>
                  <p className="text-gray-300 text-sm mb-4">{service.description}</p>
                  <button 
                    onClick={() => window.open('https://wa.me/919658404280?text=Hi, I\'m interested in ' + service.name + '. Please share more details.', '_blank')}
                    className="w-full py-2 bg-white/10 hover:bg-white/20 text-white rounded-lg transition-all duration-300 text-sm"
                  >
                    Inquire Now
                  </button>
                </div>
              ))}
            </div>
          </div>

          {/* Why Choose Us */}
          <div className="bg-white/5 backdrop-blur-sm border border-white/10 p-12 rounded-3xl mb-24">
            <div className="text-center mb-12">
              <h2 className="text-4xl lg:text-5xl font-display text-white mb-6 font-light">
                Why Choose <span className="text-yellow-500">The Wedding Tales</span>
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-yellow-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Award className="text-yellow-500" size={32} />
                </div>
                <h3 className="text-xl font-bold text-white mb-2">Award Winning</h3>
                <p className="text-gray-300 text-sm">Recognized for excellence in wedding photography</p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-yellow-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Camera className="text-yellow-500" size={32} />
                </div>
                <h3 className="text-xl font-bold text-white mb-2">Professional Equipment</h3>
                <p className="text-gray-300 text-sm">Latest cameras and lenses for perfect shots</p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-yellow-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Clock className="text-yellow-500" size={32} />
                </div>
                <h3 className="text-xl font-bold text-white mb-2">Timely Delivery</h3>
                <p className="text-gray-300 text-sm">Fast turnaround without compromising quality</p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-yellow-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="text-yellow-500" size={32} />
                </div>
                <h3 className="text-xl font-bold text-white mb-2">Experienced Team</h3>
                <p className="text-gray-300 text-sm">Skilled photographers with years of experience</p>
              </div>
            </div>
          </div>

          {/* CTA Section */}
          <div className="text-center">
            <h2 className="text-4xl lg:text-6xl font-display text-white font-light leading-tight mb-8">
              READY TO BOOK<br />
              YOUR DREAM WEDDING?
            </h2>
            <p className="text-lg text-gray-300 mb-12 max-w-2xl mx-auto leading-relaxed font-body">
              Let's discuss your vision and create a custom package that fits your needs and budget.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <button 
                onClick={() => window.open('https://wa.me/919658404280?text=Hi, I\'m interested in your wedding photography services. Please share package details.', '_blank')}
                className="group relative px-12 py-4 border border-white text-white hover:bg-white hover:text-black transition-all duration-500 tracking-widest text-sm font-body overflow-hidden"
              >
                <span className="relative z-10 flex items-center justify-center">
                  GET QUOTE
                  <MessageCircle className="ml-2" size={16} />
                </span>
                <div className="absolute inset-0 bg-white transform -translate-x-full group-hover:translate-x-0 transition-transform duration-500" />
              </button>
              <Link 
                href="/gallery"
                className="group relative px-12 py-4 border border-white text-white hover:bg-white hover:text-black transition-all duration-500 tracking-widest text-sm font-body overflow-hidden"
              >
                <span className="relative z-10 flex items-center justify-center">
                  VIEW OUR WORK
                  <ArrowRight className="ml-2" size={16} />
                </span>
                <div className="absolute inset-0 bg-white transform -translate-x-full group-hover:translate-x-0 transition-transform duration-500" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
      <WhatsAppButton />
    </div>
  );
});

PricingPage.displayName = 'PricingPage';

export default PricingPage;
