'use client'

import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, Instagram, Youtube, Twitter, Calendar, Clock, Heart } from 'lucide-react';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    weddingDate: '',
    project: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted:', formData);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const contactInfo = [
    {
      icon: Mail,
      title: 'Email Us',
      details: 'hello@theweddingtale.com',
      description: 'We respond within 24 hours'
    },
    {
      icon: Phone,
      title: 'Call Us',
      details: '+1 (555) 123-4567',
      description: 'Mon-Fri 9AM-6PM PST'
    },
    {
      icon: MapPin,
      title: 'Visit Us',
      details: 'Los Angeles, CA',
      description: 'Available for meetings'
    }
  ];

  const socialLinks = [
    { icon: Instagram, href: '#', label: 'Instagram' },
    { icon: Youtube, href: '#', label: 'YouTube' },
    { icon: Twitter, href: '#', label: 'Twitter' }
  ];

  return (
    <section id="contact" className="py-24 bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-yellow-600/5 rounded-full -translate-x-48 -translate-y-48" />
      <div className="absolute bottom-0 right-0 w-72 h-72 bg-yellow-600/10 rounded-full translate-x-36 translate-y-36" />
      
      <div className="max-w-7xl mx-auto px-4 relative">
        {/* Header */}
        <div className="text-center mb-20">
          <h2 className="text-5xl font-bold mb-6">
            Let's Create <span className="text-yellow-600">Magic Together</span>
          </h2>
          <div className="w-20 h-1 bg-yellow-600 mx-auto mb-8" />
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Ready to transform your love story into captivating visuals? Let's discuss your vision 
            and create something beautiful together.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
          {/* Contact Info */}
          <div className="space-y-12">
            <div>
              <h3 className="text-3xl font-bold mb-6">Get in Touch</h3>
              <p className="text-gray-300 text-lg leading-relaxed mb-8">
                Every great love story deserves to be told beautifully. Share your vision with us, 
                and let's bring your special day to life through the power of visual storytelling.
              </p>
            </div>

            {/* Contact Details */}
            <div className="space-y-8">
              {contactInfo.map((info, index) => {
                const IconComponent = info.icon;
                return (
                  <div key={index} className="flex items-start space-x-6 group">
                    <div className="flex-shrink-0 w-14 h-14 bg-yellow-600/20 rounded-2xl flex items-center justify-center group-hover:bg-yellow-600 transition-colors duration-300">
                      <IconComponent className="text-yellow-600 group-hover:text-white transition-colors duration-300" size={28} />
                    </div>
                    <div>
                      <h4 className="text-xl font-semibold text-white mb-2">{info.title}</h4>
                      <p className="text-yellow-400 text-lg font-medium mb-1">{info.details}</p>
                      <p className="text-gray-400">{info.description}</p>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Social Links */}
            <div className="pt-8">
              <h4 className="text-xl font-semibold mb-6">Follow Our Journey</h4>
              <div className="flex space-x-4">
                {socialLinks.map((social, index) => {
                  const IconComponent = social.icon;
                  return (
                    <a
                      key={index}
                      href={social.href}
                      className="w-12 h-12 bg-white/10 backdrop-blur-sm rounded-xl flex items-center justify-center hover:bg-yellow-600 transition-all duration-300 group"
                      aria-label={social.label}
                    >
                      <IconComponent className="text-white group-hover:text-white transition-colors duration-300" size={24} />
                    </a>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-white/5 backdrop-blur-sm border border-white/10 p-8 rounded-3xl">
            <div className="flex items-center space-x-3 mb-8">
              <div className="w-12 h-12 bg-yellow-600/20 rounded-xl flex items-center justify-center">
                <Heart className="text-yellow-600" size={24} />
              </div>
              <h3 className="text-2xl font-bold">Start Your Story</h3>
            </div>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium mb-3 text-gray-300">
                    Your Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full bg-white/10 border border-white/20 rounded-xl px-4 py-4 text-white placeholder-gray-400 focus:outline-none focus:border-yellow-600 focus:bg-white/20 transition-all duration-300"
                    placeholder="Sarah & Michael"
                    required
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-medium mb-3 text-gray-300">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full bg-white/10 border border-white/20 rounded-xl px-4 py-4 text-white placeholder-gray-400 focus:outline-none focus:border-yellow-600 focus:bg-white/20 transition-all duration-300"
                    placeholder="sarah@example.com"
                    required
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium mb-3 text-gray-300">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full bg-white/10 border border-white/20 rounded-xl px-4 py-4 text-white placeholder-gray-400 focus:outline-none focus:border-yellow-600 focus:bg-white/20 transition-all duration-300"
                    placeholder="+1 (555) 123-4567"
                  />
                </div>
                
                <div>
                  <label htmlFor="weddingDate" className="block text-sm font-medium mb-3 text-gray-300">
                    Wedding Date
                  </label>
                  <input
                    type="date"
                    id="weddingDate"
                    name="weddingDate"
                    value={formData.weddingDate}
                    onChange={handleChange}
                    className="w-full bg-white/10 border border-white/20 rounded-xl px-4 py-4 text-white focus:outline-none focus:border-yellow-600 focus:bg-white/20 transition-all duration-300"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="project" className="block text-sm font-medium mb-3 text-gray-300">
                  Service Type *
                </label>
                <select
                  id="project"
                  name="project"
                  value={formData.project}
                  onChange={handleChange}
                  className="w-full bg-white/10 border border-white/20 rounded-xl px-4 py-4 text-white focus:outline-none focus:border-yellow-600 focus:bg-white/20 transition-all duration-300"
                  required
                >
                  <option value="">Select a service</option>
                  <option value="full-wedding">Full Wedding Package</option>
                  <option value="engagement">Engagement Session</option>
                  <option value="photography">Photography Only</option>
                  <option value="videography">Videography Only</option>
                  <option value="elopement">Elopement Package</option>
                  <option value="other">Other</option>
                </select>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium mb-3 text-gray-300">
                  Tell us about your vision *
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={6}
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full bg-white/10 border border-white/20 rounded-xl px-4 py-4 text-white placeholder-gray-400 focus:outline-none focus:border-yellow-600 focus:bg-white/20 transition-all duration-300"
                  placeholder="Describe your wedding vision, style preferences, timeline, and any special moments you want captured..."
                  required
                />
              </div>

              <button
                type="submit"
                className="w-full bg-yellow-600 hover:bg-yellow-700 text-white py-4 rounded-xl font-semibold text-lg transition-all duration-300 flex items-center justify-center space-x-3 hover:shadow-xl hover:-translate-y-1"
              >
                <span>Send Message</span>
                <Send size={20} />
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;