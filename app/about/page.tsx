'use client'

import React, { useState, useEffect, useRef, memo, useCallback } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { Camera, Video, Award, Users, Heart, Star, ArrowRight } from 'lucide-react'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import WhatsAppButton from '@/components/WhatsAppButton'

const AboutPage = memo(() => {
  const [animatedNumbers, setAnimatedNumbers] = useState({
    weddings: 0,
    hours: 0,
    couples: 0,
    awards: 0
  });
  const [isTextBlurred, setIsTextBlurred] = useState(true);
  const [hasAnimated, setHasAnimated] = useState(false);
  const [tilt, setTilt] = useState({ x: 0, y: 0 });
  const sectionRef = useRef<HTMLElement>(null);
  const statsRef = useRef<HTMLDivElement>(null);
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

  // Animate numbers when stats section comes into view
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !hasAnimated) {
            setHasAnimated(true);
            
            const duration = 2000;
            const steps = 60;
            const stepDuration = duration / steps;

            const stats = [
              { number: 500, key: 'weddings' },
              { number: 1000, key: 'hours' },
              { number: 200, key: 'couples' },
              { number: 15, key: 'awards' }
            ];

            stats.forEach((stat, index) => {
              const increment = stat.number / steps;
              let currentStep = 0;

              const timer = setInterval(() => {
                currentStep++;
                const newValue = Math.min(Math.floor(increment * currentStep), stat.number);
                
                setAnimatedNumbers(prev => ({
                  ...prev,
                  [stat.key]: newValue
                }));

                if (currentStep >= steps) {
                  clearInterval(timer);
                }
              }, stepDuration);
            });
          }
        });
      },
      { threshold: 0.3 }
    );

    if (statsRef.current) {
      observer.observe(statsRef.current);
    }

    return () => observer.disconnect();
  }, [hasAnimated]);

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

  const stats = [
    { icon: Camera, number: 500, label: 'Weddings Captured', suffix: '+', key: 'weddings' },
    { icon: Video, number: 1000, label: 'Hours of Footage', suffix: '+', key: 'hours' },
    { icon: Users, number: 200, label: 'Happy Couples', suffix: '+', key: 'couples' },
    { icon: Award, number: 15, label: 'Awards Won', suffix: '+', key: 'awards' }
  ];

  const values = [
    {
      icon: Heart,
      title: "Passion",
      description: "We love what we do and it shows in every photograph we create."
    },
    {
      icon: Award,
      title: "Excellence", 
      description: "We never compromise on quality and always strive for perfection."
    },
    {
      icon: Star,
      title: "Innovation",
      description: "We embrace new techniques and technology to deliver cutting-edge results."
    },
    {
      icon: Users,
      title: "Trust",
      description: "Your precious moments are safe with our reliable and professional service."
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
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-display text-white mb-8 leading-tight font-light">
              MEET WITH <span className="font-semibold">CHIKU</span> - THE VISION BEHIND <span className="font-semibold">THE WEDDING TALES</span>
            </h1>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center mb-20">
            {/* Portrait Section - Editorial Style */}
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
                  src="/About-us/Picsart_23-01-01_19-21-08-002.jpg"
                  alt="Portrait"
                  width={800}
                  height={800}
                  className="w-full h-[500px] sm:h-[600px] md:h-[700px] lg:h-[800px] object-cover"
                  quality={85}
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 800px"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </div>
            </div>

            {/* Content Section - Editorial Style */}
            <div className="space-y-8">
              <div className="text-center">
                <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-display text-white mb-8 leading-tight font-light">
                  MEET WITH <span className="font-semibold">CHIKU</span> - THE VISION BEHIND <span className="font-semibold">THE WEDDING TALES</span>
                </h2>
                
                <p className="text-lg text-gray-300 leading-relaxed mb-6 font-body">
                  Hi, I'm <span className="font-semibold text-white">Cheeku</span>, a <span className="font-semibold text-white">passionate photographer</span> with a <span className="font-semibold text-white">keen eye for detail and storytelling</span>. 
                  Through my lens, I aim to capture <span className="font-semibold text-white">authentic emotions</span>, <span className="font-semibold text-white">timeless moments</span>, and the <span className="font-semibold text-white">beauty 
                  hidden in everyday life</span>.
                </p>
                
                <p className="text-lg text-gray-300 leading-relaxed mb-6 font-body">
                  My journey with photography began during my <span className="font-semibold text-white">college days</span>, and since then, I've explored 
                  various styles including <span className="font-semibold text-white">portrait, lifestyle, wedding, travel, product, and fashion</span>. 
                  Each photograph I take reflects not just a scene — but a <span className="font-semibold text-white">story, emotion, and perspective</span>.
                </p>
                
                <p className="text-lg text-gray-300 leading-relaxed mb-8 font-body">
                  I believe that photography is <span className="font-semibold text-white">more than just art</span> — it's a way to <span className="font-semibold text-white">preserve memories</span> and 
                  <span className="font-semibold text-white">express individuality</span>. Whether I'm working on a client project or a personal shoot, my 
                  focus remains on creating <span className="font-semibold text-white">meaningful, high quality visuals</span> that <span className="font-semibold text-white">connect with people</span>.
                </p>

                <button 
                  onClick={() => window.open('https://wa.me/919658404280?text=Hi, I\'m interested in your wedding photography services. Please share package details.', '_blank')}
                  className="group relative px-8 py-4 border border-white text-white hover:bg-white hover:text-black transition-all duration-500 tracking-widest text-sm font-body overflow-hidden"
                >
                  <span className="relative z-10">LET'S CONNECT</span>
                  <div className="absolute inset-0 bg-white transform -translate-x-full group-hover:translate-x-0 transition-transform duration-500" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-32 bg-black">
        <div className="max-w-7xl mx-auto px-8">
          <div className="text-center mb-20">
            <div className="editorial-heading text-gray-400 mb-8">
              OUR CORE VALUES
            </div>
            <h2 className="text-4xl lg:text-5xl xl:text-6xl font-display text-white mb-8 leading-none">
              WHAT DRIVES US
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => {
              const IconComponent = value.icon;
              return (
                <div key={index} className="text-center group">
                  <div className="w-20 h-20 bg-white/5 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:bg-white/10 transition-colors duration-300">
                    <IconComponent className="text-white group-hover:text-gray-300 transition-colors duration-300" size={36} />
                  </div>
                  <h3 className="text-2xl font-display text-white mb-4 font-light">
                    {value.title}
                  </h3>
                  <p className="text-gray-400 font-body leading-relaxed">
                    {value.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section ref={statsRef} className="py-32 bg-black">
        <div className="max-w-7xl mx-auto px-8">
          <div className="text-center mb-20">
            <div className="editorial-heading text-gray-400 mb-8">
              BY THE NUMBERS
            </div>
            <h2 className="text-4xl lg:text-5xl xl:text-6xl font-display text-white mb-8 leading-none">
              OUR IMPACT
            </h2>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-12">
            {stats.map((stat, index) => {
              const IconComponent = stat.icon;
              const currentValue = animatedNumbers[stat.key as keyof typeof animatedNumbers];
              
              return (
                <div key={index} className="text-center group">
                  <div className="w-20 h-20 bg-white/5 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:bg-white/10 transition-colors duration-300">
                    <IconComponent className="text-white group-hover:text-gray-300 transition-colors duration-300" size={36} />
                  </div>
                  <div className="text-4xl font-display text-white mb-3 font-light">
                    {currentValue}{stat.suffix}
                  </div>
                  <div className="text-gray-400 font-body tracking-widest text-sm uppercase">{stat.label}</div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Team Gallery Section */}
      <section className="py-32 bg-black">
        <div className="max-w-7xl mx-auto px-8">
          <div className="text-center mb-20">
            <div className="editorial-heading text-gray-400 mb-8">
              BEHIND THE SCENES
            </div>
            <h2 className="text-4xl lg:text-5xl xl:text-6xl font-display text-white mb-8 leading-none">
              THE TEAM
            </h2>
          </div>

          <div className="flex justify-center">
            <div className="relative group w-80">
              <div className="relative h-96 overflow-hidden rounded-lg">
                <Image
                  src="/About-us/Picsart_23-01-01_19-21-08-002.jpg"
                  alt="Cheeku - Lead Photographer"
                  width={320}
                  height={384}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  quality={85}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                <div className="absolute bottom-8 left-8 right-8">
                  <h3 className="text-2xl font-display text-white mb-2">Cheeku</h3>
                  <p className="text-gray-300 font-body">Lead Photographer & Creative Director</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-32 bg-black">
        <div className="max-w-7xl mx-auto px-8 text-center">
          <div className="editorial-heading text-gray-400 mb-8">
            LET'S CONNECT
          </div>
          <h2 className="text-4xl lg:text-6xl font-display text-white font-light leading-tight mb-8">
            INVEST IN THE<br />
            INDELIBLE
          </h2>
          <p className="text-lg text-gray-300 mb-12 max-w-2xl mx-auto leading-relaxed font-body">
            Ready to create beautiful memories? Let's discuss your vision and bring your story to life through our lens.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <button 
              onClick={() => window.open('https://wa.me/919658404280?text=Hi, I\'m interested in your wedding photography services. Please share package details.', '_blank')}
              className="group relative px-12 py-4 border border-white text-white hover:bg-white hover:text-black transition-all duration-500 tracking-widest text-sm font-body overflow-hidden"
            >
              <span className="relative z-10">INQUIRE</span>
              <div className="absolute inset-0 bg-white transform -translate-x-full group-hover:translate-x-0 transition-transform duration-500" />
            </button>
            <Link 
              href="/gallery"
              className="group relative px-12 py-4 border border-white text-white hover:bg-white hover:text-black transition-all duration-500 tracking-widest text-sm font-body overflow-hidden"
            >
              <span className="relative z-10">VIEW GALLERY</span>
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

AboutPage.displayName = 'AboutPage';

export default AboutPage;