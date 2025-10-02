'use client'

import React from 'react';
import { Heart, Star, Users } from 'lucide-react';

const Values: React.FC = () => {
  const values = [
    {
      icon: Heart,
      title: 'Passion-Driven',
      description: 'Every project is approached with genuine passion and dedication to excellence.'
    },
    {
      icon: Star,
      title: 'Quality Focus',
      description: 'Committed to delivering only the highest quality work that exceeds expectations.'
    },
    {
      icon: Users,
      title: 'Client-Centric',
      description: 'Your vision and story are at the heart of everything we create together.'
    }
  ];

  return (
    <section className="py-20 bg-gray-900/30 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="text-gray-400 mb-4 font-body tracking-widest text-sm uppercase">
            OUR APPROACH
          </div>
          <h2 className="text-3xl lg:text-4xl font-display text-white mb-6 leading-tight">
            What Drives Us
          </h2>
          <p className="text-lg text-gray-300 max-w-3xl mx-auto leading-relaxed">
            These core values guide every decision we make and every moment we capture.
          </p>
        </div>

        {/* Values Grid - Horizontal Layout */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {values.map((value, index) => {
            const IconComponent = value.icon;
            return (
              <div 
                key={index} 
                className="group text-center p-8 bg-black/40 backdrop-blur-sm border border-gray-800 hover:border-gray-600 transition-all duration-500 hover:transform hover:scale-105"
              >
                <div className="w-20 h-20 bg-white/5 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:bg-white/10 transition-colors duration-300">
                  <IconComponent className="text-white group-hover:text-gray-300 transition-colors duration-300" size={36} />
                </div>
                <h3 className="text-xl font-display text-white mb-4 font-light">{value.title}</h3>
                <p className="text-gray-300 font-body leading-relaxed">{value.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Values;
