import React, { useRef, useState, useEffect, memo, useCallback } from 'react';
import { Camera, Video, Award, Users } from 'lucide-react';
import Image from 'next/image';

const About: React.FC = memo(() => {
  const [tilt, setTilt] = useState({ x: 0, y: 0 });
  const [animatedNumbers, setAnimatedNumbers] = useState({
    weddings: 0,
    hours: 0,
    couples: 0,
    awards: 0
  });
  const [isTextBlurred, setIsTextBlurred] = useState(true);
  const [hasAnimated, setHasAnimated] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);
  const sectionRef = useRef<HTMLElement>(null);
  const statsRef = useRef<HTMLDivElement>(null);

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
    { icon: Camera, number: 500, label: 'Weddings Captured', suffix: '+' },
    { icon: Video, number: 1000, label: 'Hours of Footage', suffix: '+' },
    { icon: Users, number: 200, label: 'Happy Couples', suffix: '+' },
    { icon: Award, number: 15, label: 'Awards Won', suffix: '+' }
  ];


  return (
    <section ref={sectionRef} id="about" className="py-32 bg-black relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-8 relative">
        {/* Editorial Header with Blur Animation */}
        <div className="text-center mb-24">
          <div className={`editorial-heading text-gray-400 mb-8 transition-all duration-1000 ease-out delay-200 ${
            isTextBlurred ? 'blur-sm opacity-0 translate-y-4' : 'blur-none opacity-100 translate-y-0'
          }`}>
            AUTHENTIC, EVOCATIVE
          </div>
          <h2 className={`text-4xl lg:text-5xl xl:text-6xl font-display text-white mb-8 leading-none hero-text-blur ${
            !isTextBlurred ? 'visible' : ''
          }`}>
            <div className={`hero-text-line ${!isTextBlurred ? 'visible' : ''}`}>
              REFINED STORYTELLING
            </div>
            <div className={`hero-text-line ${!isTextBlurred ? 'visible' : ''}`}>
              WITH AN EDITORIAL EDGE
            </div>
          </h2>
          <p className={`text-lg text-gray-300 max-w-4xl mx-auto leading-relaxed font-body transition-all duration-1000 ease-out delay-800 ${
            isTextBlurred ? 'blur-sm opacity-0 translate-y-4' : 'blur-none opacity-100 translate-y-0'
          }`}>
            We are storytellers who believe every love story deserves to be told with authenticity, 
            creativity, and timeless elegance.
          </p>
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
                src="/images/6S8A9608.jpg"
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
            <div>
              <h3 className="text-3xl sm:text-4xl lg:text-5xl font-display text-white mb-8 leading-tight font-light">
                Crafting <span className="text-gray-400">Timeless</span><br />
                Wedding Stories
              </h3>
              
              <p className="text-lg text-gray-300 leading-relaxed mb-6 font-body">
                Hi, I'm cheeku, a passionate photographer with a keen eye for detail and storytelling, 
                through my lens, I aim to capture authentic emotions, timeless moments, and the beauty 
                hidden in everyday life.
              </p>
              
              <p className="text-lg text-gray-300 leading-relaxed mb-6 font-body">
                My journey with photography began during my college days, and since then, I've explored 
                various styles including [ portrait / lifestyle / wedding / travel / product / fashion ]. 
                Each photograph I take reflects not just a scene — but a story, emotion, and perspective.
              </p>
              
              <p className="text-lg text-gray-300 leading-relaxed mb-8 font-body">
                I believe that photography is more than just art — it's a way to preserve memories and 
                express individuality. Whether I'm working on a client project or a personal shoot, my 
                focus remains on creating meaningful, high quality visuals that connect with people.
              </p>
            </div>

          </div>
        </div>

        {/* Stats Section - Editorial Style */}
        <div ref={statsRef} className="grid grid-cols-2 lg:grid-cols-4 gap-12">
          {stats.map((stat, index) => {
            const IconComponent = stat.icon;
            const currentValue = index === 0 ? animatedNumbers.weddings : 
                               index === 1 ? animatedNumbers.hours : 
                               index === 2 ? animatedNumbers.couples : 
                               animatedNumbers.awards;
            
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
  );
});

About.displayName = 'About';

export default About;