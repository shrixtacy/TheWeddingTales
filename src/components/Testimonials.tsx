'use client'

import React, { useState, useEffect, useRef } from 'react';
import { ChevronLeft, ChevronRight, Star, Quote, Heart, Camera, Video } from 'lucide-react';

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

  const stats = [
    { icon: Heart, number: '200+', label: 'Happy Couples' },
    { icon: Camera, number: '500+', label: 'Weddings Shot' },
    { icon: Video, number: '1000+', label: 'Hours of Footage' },
    { icon: Star, number: '5.0', label: 'Average Rating' }
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
        }
      },
      { threshold: 0.1 }
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
    <section ref={sectionRef} className="py-24 bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-yellow-600/5 rounded-full -translate-y-48 translate-x-48" />
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-yellow-600/10 rounded-full translate-y-32 -translate-x-32" />
      
      <div className="max-w-7xl mx-auto px-4 relative">
        {/* Header */}
        <div className={`text-center mb-20 transition-all duration-1500 ease-in-out delay-300 ${
          isVisible 
            ? 'opacity-100 blur-0 translate-y-0' 
            : 'opacity-0 blur-lg translate-y-8'
        }`}>
          <h2 className="text-5xl font-bold mb-6">
            What Our <span className="text-yellow-600">Couples Say</span>
          </h2>
          <div className="w-20 h-1 bg-yellow-600 mx-auto mb-8" />
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Don't just take our word for it. Here's what our amazing couples have to say about their experience.
          </p>
        </div>

        {/* Testimonial Carousel */}
        <div className={`relative bg-white/5 backdrop-blur-sm rounded-3xl border border-white/10 p-8 md:p-12 mb-20 transition-all duration-1500 ease-in-out delay-600 ${
          isVisible 
            ? 'opacity-100 blur-0 translate-y-0' 
            : 'opacity-0 blur-lg translate-y-8'
        }`}>
          <div className="flex items-center justify-between mb-8">
            <button 
              onClick={prevTestimonial}
              className="p-4 rounded-full bg-white/10 hover:bg-yellow-600 hover:text-white transition-all duration-300 backdrop-blur-sm"
            >
              <ChevronLeft size={24} />
            </button>
            
            <div className="flex space-x-3">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentTestimonial(index)}
                  className={`w-4 h-4 rounded-full transition-all duration-300 ${
                    index === currentTestimonial ? 'bg-yellow-600' : 'bg-white/30'
                  }`}
                />
              ))}
            </div>
            
            <button 
              onClick={nextTestimonial}
              className="p-4 rounded-full bg-white/10 hover:bg-yellow-600 hover:text-white transition-all duration-300 backdrop-blur-sm"
            >
              <ChevronRight size={24} />
            </button>
          </div>

          <div className="text-center">
            {/* Quote Icon */}
            <div className="flex justify-center mb-8">
              <div className="w-16 h-16 bg-yellow-600/20 rounded-full flex items-center justify-center">
                <Quote className="text-yellow-600" size={32} />
              </div>
            </div>

            {/* Stars */}
            <div className="flex justify-center mb-8">
              {[...Array(testimonials[currentTestimonial].rating)].map((_, index) => (
                <Star key={index} className="text-yellow-600 fill-current mx-1" size={28} />
              ))}
            </div>

            {/* Testimonial Text */}
            <blockquote className="text-2xl md:text-3xl text-white font-light leading-relaxed mb-8 italic max-w-4xl mx-auto">
              "{testimonials[currentTestimonial].testimonial}"
            </blockquote>

            {/* Client Info */}
            <div className="flex flex-col md:flex-row items-center justify-center space-y-4 md:space-y-0 md:space-x-6">
              <img
                src={testimonials[currentTestimonial].avatar}
                alt={testimonials[currentTestimonial].name}
                className="w-20 h-20 rounded-full object-cover border-4 border-yellow-600/30"
              />
              <div className="text-center md:text-left">
                <h4 className="text-2xl font-bold text-white mb-2">
                  {testimonials[currentTestimonial].name}
                </h4>
                <p className="text-yellow-400 font-medium text-lg mb-1">
                  {testimonials[currentTestimonial].wedding}
                </p>
                <p className="text-gray-300">
                  {testimonials[currentTestimonial].location}
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Stats Section */}
        <div className={`grid grid-cols-2 lg:grid-cols-4 gap-8 transition-all duration-1500 ease-in-out delay-900 ${
          isVisible 
            ? 'opacity-100 blur-0 translate-y-0' 
            : 'opacity-0 blur-lg translate-y-8'
        }`}>
          {stats.map((stat, index) => {
            const IconComponent = stat.icon;
            return (
              <div key={index} className="text-center group">
                <div className="w-20 h-20 bg-yellow-600/20 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:bg-yellow-600 transition-colors duration-300">
                  <IconComponent className="text-yellow-600 group-hover:text-white transition-colors duration-300" size={36} />
                </div>
                <div className="text-4xl font-bold text-white mb-2">{stat.number}</div>
                <div className="text-gray-300 font-medium">{stat.label}</div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;