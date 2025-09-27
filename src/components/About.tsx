import React, { useRef, useState, useEffect, memo, useCallback } from 'react';
import { Camera, Video, Award, Users, Heart, Star } from 'lucide-react';
import Image from 'next/image';

const About: React.FC = memo(() => {
  const [tilt, setTilt] = useState({ x: 0, y: 0 });
  const [animatedNumbers, setAnimatedNumbers] = useState({
    weddings: 0,
    hours: 0,
    couples: 0,
    awards: 0
  });
  const cardRef = useRef<HTMLDivElement>(null);
  const sectionRef = useRef<HTMLElement>(null);

  const handleMouseMove = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    
    const rect = cardRef.current.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    
    const rotateX = (e.clientY - centerY) / 80; // Reduced sensitivity for smoother performance
    const rotateY = (centerX - e.clientX) / 80;
    
    setTilt({ x: rotateX, y: rotateY });
  }, []);

  const handleMouseLeave = useCallback(() => {
    setTilt({ x: 0, y: 0 });
  }, []);

  // Removed intersection observer for better performance

  // Simplified number animation - start immediately
  useEffect(() => {
    const duration = 2000; // 2 seconds
    const steps = 60; // 60 steps for smooth animation
    const stepDuration = duration / steps;

    stats.forEach((stat, index) => {
      const increment = stat.number / steps;
      let currentStep = 0;

      const timer = setInterval(() => {
        currentStep++;
        const newValue = Math.min(Math.floor(increment * currentStep), stat.number);
        
        setAnimatedNumbers(prev => ({
          ...prev,
          [index === 0 ? 'weddings' : index === 1 ? 'hours' : index === 2 ? 'couples' : 'awards']: newValue
        }));

        if (currentStep >= steps) {
          clearInterval(timer);
        }
      }, stepDuration);
    });
  }, []);

  const stats = [
    { icon: Camera, number: 500, label: 'Weddings Captured', suffix: '+' },
    { icon: Video, number: 1000, label: 'Hours of Footage', suffix: '+' },
    { icon: Users, number: 200, label: 'Happy Couples', suffix: '+' },
    { icon: Award, number: 15, label: 'Awards Won', suffix: '+' }
  ];

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
    <section ref={sectionRef} id="about" className="py-24 bg-gradient-to-br from-gray-50 to-white relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-yellow-600/5 rounded-full -translate-y-48 translate-x-48" />
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-yellow-600/10 rounded-full translate-y-32 -translate-x-32" />
      
      <div className="max-w-7xl mx-auto px-4 relative">
        {/* Header */}
        <div className="text-center mb-20">
          <h2 className="text-5xl font-bold text-gray-900 mb-6">
            About <span className="text-yellow-600">The Wedding Tale</span>
          </h2>
          <div className="w-20 h-1 bg-yellow-600 mx-auto mb-8" />
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            We are storytellers who believe every love story deserves to be told with authenticity, 
            creativity, and timeless elegance.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-20 items-center mb-12 lg:mb-20">
          {/* Portrait Section */}
          <div className="relative group perspective-1000">
            <div 
              ref={cardRef}
              className="relative overflow-hidden rounded-2xl shadow-2xl transition-transform duration-700 hover:scale-105 tilt-container"
              onMouseMove={handleMouseMove}
              onMouseLeave={handleMouseLeave}
              style={{
                transform: `perspective(1000px) rotateX(${tilt.x}deg) rotateY(${tilt.y}deg) scale3d(1, 1, 1)`,
              }}
            >
              <Image 
                src="/images/6S8A9608.jpg"
                alt="Shri Portrait"
                width={800}
                height={800}
                className="w-full h-[400px] sm:h-[500px] md:h-[600px] lg:h-[700px] xl:h-[800px] object-cover"
                quality={75}
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 800px"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </div>
            {/* Decorative Elements */}
            <div className="absolute -top-6 -left-6 w-24 h-24 bg-yellow-600/20 rounded-full" />
            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-yellow-600/10 rounded-full" />
          </div>

          {/* Content Section */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-6 leading-tight">
                Crafting <span className="text-yellow-600">Timeless</span><br />
                Wedding Stories
              </h3>
              
              <p className="text-lg text-gray-600 leading-relaxed mb-6">
                With over 8 years of experience in wedding photography and videography, we specialize in 
                creating cinematic narratives that capture not just moments, but the very essence of your love story.
              </p>
              
              <p className="text-lg text-gray-600 leading-relaxed mb-8">
                Every wedding is unique, and we approach each one with fresh eyes, creative vision, and 
                an unwavering commitment to excellence. Our goal is to create memories that will be 
                treasured for generations to come.
              </p>
            </div>

            {/* Values Grid */}
            <div className="grid grid-cols-1 gap-6">
              {values.map((value, index) => {
                const IconComponent = value.icon;
                return (
                  <div key={index} className="flex items-start space-x-4 p-6 bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 group">
                    <div className="flex-shrink-0 w-12 h-12 bg-yellow-600/10 rounded-lg flex items-center justify-center group-hover:bg-yellow-600 transition-colors duration-300">
                      <IconComponent className="text-yellow-600 group-hover:text-white transition-colors duration-300" size={24} />
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold text-gray-900 mb-2">{value.title}</h4>
                      <p className="text-gray-600">{value.description}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* Animated Stats Section */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => {
            const IconComponent = stat.icon;
            const currentValue = index === 0 ? animatedNumbers.weddings : 
                               index === 1 ? animatedNumbers.hours : 
                               index === 2 ? animatedNumbers.couples : 
                               animatedNumbers.awards;
            
            return (
              <div key={index} className="text-center group">
                <div className="w-16 h-16 bg-yellow-600/10 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:bg-yellow-600 transition-colors duration-300">
                  <IconComponent className="text-yellow-600 group-hover:text-white transition-colors duration-300" size={32} />
                </div>
                <div className="text-3xl font-bold text-gray-900 mb-2">
                  {currentValue}{stat.suffix}
                </div>
                <div className="text-gray-600 font-medium">{stat.label}</div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
});

About.displayName = 'About';

export default About;