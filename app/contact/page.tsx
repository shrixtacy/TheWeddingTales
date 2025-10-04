'use client'

import React, { useState, useEffect, useRef, memo, useCallback } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { Mail, Phone, MapPin, Clock, Send, Instagram, Facebook, Youtube, MessageCircle, ArrowRight } from 'lucide-react'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import WhatsAppButton from '@/components/WhatsAppButton'

const ContactPage = memo(() => {
  const [isTextBlurred, setIsTextBlurred] = useState(true);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    eventDate: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [tilt, setTilt] = useState({ x: 0, y: 0 });
  const sectionRef = useRef<HTMLElement>(null);
  const cardRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    
    const rect = cardRef.current.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    
    const rotateX = (e.clientY - centerY) / 80;
    const rotateY = (centerX - e.clientX) / 80;
    
    setTilt({ x: rotateX, y: rotateY });
  }, []);

  const handleMouseLeave = useCallback(() => {
    setTilt({ x: 0, y: 0 });
  }, []);

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

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Create WhatsApp message
    const message = `Hi! I'm interested in your wedding photography services.

Name: ${formData.name}
Email: ${formData.email}
Phone: ${formData.phone}
Event Date: ${formData.eventDate}

Message: ${formData.message}

Please share your package details.`;

    // Open WhatsApp with pre-filled message
    window.open(`https://wa.me/919658404280?text=${encodeURIComponent(message)}`, '_blank');
    
    setIsSubmitting(false);
    setFormData({
      name: '',
      email: '',
      phone: '',
      eventDate: '',
      message: ''
    });
  };

  const contactInfo = [
    {
      icon: Phone,
      title: "Phone",
      details: ["+91 9658404280", "+91 9876543210"],
      action: "tel:+919658404280"
    },
    {
      icon: Mail,
      title: "Email", 
      details: ["hello@theweddingtales.com", "bookings@theweddingtales.com"],
      action: "mailto:hello@theweddingtales.com"
    },
    {
      icon: MapPin,
      title: "Location",
      details: ["New Delhi, India", "Available Worldwide"],
      action: "#"
    },
    {
      icon: Clock,
      title: "Hours",
      details: ["Mon - Sat: 9AM - 7PM", "Sunday: By Appointment"],
      action: "#"
    }
  ];

  const socialLinks = [
    {
      icon: MessageCircle,
      name: "WhatsApp",
      url: "https://wa.me/919658404280",
      color: "hover:text-green-400"
    },
    {
      icon: Instagram,
      name: "Instagram", 
      url: "https://www.instagram.com/twt_films/",
      color: "hover:text-pink-400"
    },
    {
      icon: Youtube,
      name: "YouTube",
      url: "#",
      color: "hover:text-red-400"
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
            }`}>
              LET'S CONNECT
            </div>
            <h1 className={`text-6xl lg:text-7xl xl:text-8xl font-display text-white mb-8 leading-none hero-text-blur ${
              !isTextBlurred ? 'visible' : ''
            }`}>
              <div className={`hero-text-line ${!isTextBlurred ? 'visible' : ''}`}>
                START YOUR
              </div>
              <div className={`hero-text-line ${!isTextBlurred ? 'visible' : ''}`}>
                STORY WITH US
              </div>
            </h1>
            <p className={`text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed font-body transition-all duration-1000 ease-out delay-800 ${
              isTextBlurred ? 'blur-sm opacity-0 translate-y-4' : 'blur-none opacity-100 translate-y-0'
            }`}>
              Ready to capture your special moments? Get in touch and let's create beautiful memories together.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-start">
            {/* Contact Form */}
            <div className="space-y-8">
              <div>
                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display text-white mb-8 leading-tight font-light">
                  Send us a <span className="text-gray-400">Message</span>
                </h2>
                
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="name" className="block text-gray-300 text-sm font-body tracking-widest mb-2">
                        NAME *
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 bg-white/5 border border-white/20 text-white placeholder-gray-400 focus:border-white focus:bg-white/10 transition-all duration-300 font-body"
                        placeholder="Your name"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-gray-300 text-sm font-body tracking-widest mb-2">
                        EMAIL *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 bg-white/5 border border-white/20 text-white placeholder-gray-400 focus:border-white focus:bg-white/10 transition-all duration-300 font-body"
                        placeholder="your@email.com"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="phone" className="block text-gray-300 text-sm font-body tracking-widest mb-2">
                        PHONE
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 bg-white/5 border border-white/20 text-white placeholder-gray-400 focus:border-white focus:bg-white/10 transition-all duration-300 font-body"
                        placeholder="+91 9876543210"
                      />
                    </div>
                    <div>
                      <label htmlFor="eventDate" className="block text-gray-300 text-sm font-body tracking-widest mb-2">
                        EVENT DATE
                      </label>
                      <input
                        type="date"
                        id="eventDate"
                        name="eventDate"
                        value={formData.eventDate}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 bg-white/5 border border-white/20 text-white placeholder-gray-400 focus:border-white focus:bg-white/10 transition-all duration-300 font-body"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-gray-300 text-sm font-body tracking-widest mb-2">
                      MESSAGE *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      required
                      rows={5}
                      className="w-full px-4 py-3 bg-white/5 border border-white/20 text-white placeholder-gray-400 focus:border-white focus:bg-white/10 transition-all duration-300 font-body resize-none"
                      placeholder="Tell us about your vision..."
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="group relative w-full px-8 py-4 border border-white text-white hover:bg-white hover:text-black transition-all duration-500 tracking-widest text-sm font-body overflow-hidden disabled:opacity-50"
                  >
                    <span className="relative z-10 flex items-center justify-center">
                      {isSubmitting ? 'SENDING...' : 'SEND MESSAGE'}
                      <Send className="ml-2" size={16} />
                    </span>
                    <div className="absolute inset-0 bg-white transform -translate-x-full group-hover:translate-x-0 transition-transform duration-500" />
                  </button>
                </form>
              </div>
            </div>

            {/* Contact Info & Image */}
            <div className="space-y-8">
              {/* Contact Information */}
              <div className="space-y-6">
                <h3 className="text-2xl font-display text-white mb-6 font-light">
                  Get in Touch
                </h3>
                
                {contactInfo.map((info, index) => {
                  const IconComponent = info.icon;
                  return (
                    <div key={index} className="flex items-start space-x-4 group">
                      <div className="w-12 h-12 bg-white/5 rounded-xl flex items-center justify-center group-hover:bg-white/10 transition-colors duration-300 flex-shrink-0">
                        <IconComponent className="text-white group-hover:text-gray-300 transition-colors duration-300" size={20} />
                      </div>
                      <div>
                        <h4 className="text-white font-body font-medium mb-1">{info.title}</h4>
                        {info.details.map((detail, idx) => (
                          <p key={idx} className="text-gray-400 font-body text-sm">
                            {detail}
                          </p>
                        ))}
                      </div>
                    </div>
                  );
                })}
              </div>

              {/* Social Links */}
              <div className="pt-8 border-t border-white/10">
                <h3 className="text-2xl font-display text-white mb-6 font-light">
                  Follow Us
                </h3>
                <div className="flex space-x-4">
                  {socialLinks.map((social, index) => {
                    const IconComponent = social.icon;
                    return (
                      <a
                        key={index}
                        href={social.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`group p-3 bg-white/5 rounded-xl hover:bg-white/10 transition-all duration-300 hover:scale-110 ${social.color}`}
                        aria-label={`Follow us on ${social.name}`}
                      >
                        <IconComponent className="w-5 h-5 text-gray-400 group-hover:text-white transition-colors duration-300" />
                      </a>
                    );
                  })}
                </div>
              </div>

              {/* Featured Image */}
              <div className="relative group">
                <div 
                  ref={cardRef}
                  className="relative overflow-hidden transition-transform duration-700 hover:scale-105"
                  onMouseMove={handleMouseMove}
                  onMouseLeave={handleMouseLeave}
                  style={{
                    transform: `perspective(1000px) rotateX(${tilt.x}deg) rotateY(${tilt.y}deg) scale3d(1, 1, 1)`,
                  }}
                >
                  <Image 
                    src="/images/6S8A7477.jpg"
                    alt="Contact us"
                    width={600}
                    height={400}
                    className="w-full h-[300px] object-cover"
                    quality={85}
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Contact CTA */}
      <section className="py-32 bg-black">
        <div className="max-w-7xl mx-auto px-8 text-center">
          <div className="editorial-heading text-gray-400 mb-8">
            READY TO START?
          </div>
          <h2 className="text-4xl lg:text-6xl font-display text-white font-light leading-tight mb-8">
            LET'S CREATE<br />
            SOMETHING BEAUTIFUL
          </h2>
          <p className="text-lg text-gray-300 mb-12 max-w-2xl mx-auto leading-relaxed font-body">
            Prefer to chat directly? Connect with us on WhatsApp for instant responses and personalized service.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <button 
              onClick={() => window.open('https://wa.me/919658404280?text=Hi, I\'m interested in your wedding photography services. Please share package details.', '_blank')}
              className="group relative px-12 py-4 border border-white text-white hover:bg-white hover:text-black transition-all duration-500 tracking-widest text-sm font-body overflow-hidden"
            >
              <span className="relative z-10 flex items-center justify-center">
                WHATSAPP US
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
      </section>

      <Footer />
      <WhatsAppButton />
    </div>
  );
});

ContactPage.displayName = 'ContactPage';

export default ContactPage;
