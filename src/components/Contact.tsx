'use client'

import React, { useState, useEffect, useRef } from 'react';


const Contact: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  // Intersection observer for text animation
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const contactInfo = [
    {
      title: 'Email Us',
      details: 'twtfilms2025@gmail.com',
      description: 'We respond within 24 hours'
    },
    {
      title: 'Call Us',
      details: '+91 96584 04280',
      description: 'Call us for More Info'
    },
    {
      title: 'Visit Us',
      details: 'Gandhi Nagar, Brahmapur',
      description: 'Give Us a Visit'
    }
  ];

  return (
    <section ref={sectionRef} id="contact" className="py-24 bg-black text-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 relative">
        {/* Header */}
        <div className={`text-center mb-20 transition-all duration-1500 ease-in-out delay-300 ${isVisible
            ? 'opacity-100 blur-0 translate-y-0'
            : 'opacity-0 blur-lg translate-y-8'
          }`}>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6 px-4">
            Let's Create <span className="text-yellow-600">Magic Together</span>
          </h2>
          <div className="w-16 sm:w-20 h-1 bg-yellow-600 mx-auto mb-6 sm:mb-8" />
          <p className="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed px-4">
            Ready to transform your love story into captivating visuals? Let's discuss your vision
            and create something beautiful together.
          </p>
        </div>

        {/* Contact Info - Side by Side */}
        <div className={`grid grid-cols-1 md:grid-cols-3 gap-8 transition-all duration-1500 ease-in-out delay-600 ${isVisible
            ? 'opacity-100 blur-0 translate-y-0'
            : 'opacity-0 blur-lg translate-y-8'
          }`}>
          {contactInfo.map((info, index) => {
            return (
              <div key={index} className="text-center">
                <h4 className="text-xl font-semibold text-white mb-3">{info.title}</h4>
                <p className="text-yellow-400 text-lg font-medium mb-2">{info.details}</p>
                <p className="text-gray-400">{info.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Contact;