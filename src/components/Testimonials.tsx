'use client'

import React, { useState, useEffect, useRef } from 'react';
import { ChevronLeft, ChevronRight, Star } from 'lucide-react';

const Testimonials: React.FC = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);
  
  const testimonials = [
    {
      name: 'Sarah & Michael',
      role: 'Wedding Couple',
      location: 'Napa Valley, CA',
      testimonial: 'The Wedding Tale captured our day with such artistry and emotion. Every photo tells a story, and we relive our special day through their incredible work. The video they created had our entire family in tears!',
      rating: 5,
      avatar: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop',
      wedding: 'Garden Wedding',
      type: 'wedding'
    },
    {
      name: 'Emma & James',
      role: 'Wedding Couple',
      location: 'Malibu, CA',
      testimonial: 'From our engagement shoot to the wedding day, every moment was captured beautifully. Their cinematic approach and attention to detail are unmatched. We couldn\'t be happier!',
      rating: 5,
      avatar: 'https://images.pexels.com/photos/697509/pexels-photo-697509.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop',
      wedding: 'Beach Ceremony',
      type: 'wedding'
    },
    {
      name: 'Jessica & David',
      role: 'Wedding Couple',
      location: 'Sonoma, CA',
      testimonial: 'Working with The Wedding Tale was an absolute dream. They made us feel comfortable and captured our love story perfectly. The photos and video exceeded all our expectations!',
      rating: 5,
      avatar: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop',
      wedding: 'Rustic Wedding',
      type: 'wedding'
    },
    {
      name: 'Anna & Chris',
      role: 'Wedding Couple',
      location: 'Temecula, CA',
      testimonial: 'Professional, creative, and delivers results that speak volumes. They created wedding content that perfectly represents our love story. Highly recommend!',
      rating: 5,
      avatar: 'https://images.pexels.com/photos/1040880/pexels-photo-1040880.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop',
      wedding: 'Vineyard Wedding',
      type: 'wedding'
    }
  ];


  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 6000);
    return () => clearInterval(interval);
  }, [testimonials.length]);

  // Intersection observer for text animation
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        } else {
          setIsVisible(false);
        }
      },
      { threshold: 0.3 } // Trigger when 30% of section is visible
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section ref={sectionRef} className="py-16 bg-gradient-to-br from-white via-gray-50 to-gray-100 text-gray-900 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-yellow-600/5 rounded-full -translate-y-48 translate-x-48" />
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-yellow-600/10 rounded-full translate-y-32 -translate-x-32" />
      
      <div className="max-w-7xl mx-auto px-4 relative">
        {/* Header */}
        <div className={`text-center mb-12 transition-all duration-1500 ease-in-out delay-300 ${
          isVisible 
            ? 'opacity-100 blur-0 translate-y-0' 
            : 'opacity-0 blur-lg translate-y-8'
        }`}>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-4 px-4">
            What Our <span className="text-yellow-600">Couples Say</span>
          </h2>
          <div className="w-12 sm:w-16 h-1 bg-yellow-600 mx-auto mb-4" />
        </div>

        {/* Testimonial Carousel */}
        <div className={`relative bg-white/80 backdrop-blur-sm rounded-2xl border border-gray-200 shadow-lg p-4 sm:p-6 md:p-8 mb-8 sm:mb-12 transition-all duration-1500 ease-in-out delay-600 ${
          isVisible 
            ? 'opacity-100 blur-0 translate-y-0' 
            : 'opacity-0 blur-lg translate-y-8'
        }`}>
          <div className="flex items-center justify-between mb-6">
            <button 
              onClick={prevTestimonial}
              className="p-4 rounded-full bg-gray-100 hover:bg-yellow-600 hover:text-white transition-all duration-300 text-gray-600"
            >
              <ChevronLeft size={24} />
            </button>
            
            <div className="flex space-x-3">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentTestimonial(index)}
                  className={`w-4 h-4 rounded-full transition-all duration-300 ${
                    index === currentTestimonial ? 'bg-yellow-600' : 'bg-gray-300'
                  }`}
                />
              ))}
            </div>
            
            <button 
              onClick={nextTestimonial}
              className="p-4 rounded-full bg-gray-100 hover:bg-yellow-600 hover:text-white transition-all duration-300 text-gray-600"
            >
              <ChevronRight size={24} />
            </button>
          </div>

          <div className="text-center">
            {/* Stars */}
            <div className="flex justify-center mb-6">
              {[...Array(testimonials[currentTestimonial].rating)].map((_, index) => (
                <Star key={index} className="text-yellow-600 fill-current mx-1" size={24} />
              ))}
            </div>

            {/* Testimonial Text */}
            <blockquote className="text-xl md:text-2xl text-gray-800 font-light leading-relaxed mb-6 italic max-w-3xl mx-auto">
              "{testimonials[currentTestimonial].testimonial}"
            </blockquote>

            {/* Client Info */}
            <div className="flex flex-col md:flex-row items-center justify-center space-y-3 md:space-y-0 md:space-x-4">
              <img
                src={testimonials[currentTestimonial].avatar}
                alt={testimonials[currentTestimonial].name}
                className="w-16 h-16 rounded-full object-cover border-3 border-yellow-600/30"
              />
              <div className="text-center md:text-left">
                <h4 className="text-xl font-bold text-gray-900 mb-1">
                  {testimonials[currentTestimonial].name}
                </h4>
                <p className="text-yellow-600 font-medium text-base mb-1">
                  {testimonials[currentTestimonial].wedding}
                </p>
                <p className="text-gray-600 text-sm">
                  {testimonials[currentTestimonial].location}
                </p>
              </div>
            </div>
          </div>
        </div>


      </div>
    </section>
  );
};

export default Testimonials;