import React, { useState, useEffect, useRef } from 'react';
import { aboutContent, images } from '../data/mock';

const About = () => {
  const [isImageVisible, setIsImageVisible] = useState(false);
  const [isStatsVisible, setIsStatsVisible] = useState(false);
  const [animatedStats, setAnimatedStats] = useState([
    { number: 0, target: 50, suffix: '+', label: 'Projects' },
    { number: 0, target: 30, suffix: '+', label: 'Clients' },
    { number: 0, target: 99, suffix: '%', label: 'Satisfaction' }
  ]);

  const imageRef = useRef(null);
  const statsRef = useRef(null);

  // Intersection Observer for scroll-triggered animations
  useEffect(() => {
    const observerOptions = {
      threshold: 0.1, // Reduced threshold for earlier triggering
      rootMargin: '0px 0px -50px 0px' // Reduced margin for earlier triggering
    };

    const imageObserver = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        console.log('Image intersecting:', entry.isIntersecting); // Debug log
        if (entry.isIntersecting) {
          setIsImageVisible(true);
        }
      });
    }, observerOptions);

    const statsObserver = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        console.log('Stats intersecting:', entry.isIntersecting); // Debug log
        if (entry.isIntersecting && !isStatsVisible) {
          setIsStatsVisible(true);
          animateCounters();
        }
      });
    }, observerOptions);

    if (imageRef.current) {
      imageObserver.observe(imageRef.current);
    }

    if (statsRef.current) {
      statsObserver.observe(statsRef.current);
    }

    return () => {
      imageObserver.disconnect();
      statsObserver.disconnect();
    };
  }, [isStatsVisible]);

  // Animated counter function
  const animateCounters = () => {
    console.log('Starting counter animation'); // Debug log
    const duration = 2000; // 2 seconds
    const frameRate = 60;
    const totalFrames = (duration / 1000) * frameRate;

    let currentFrame = 0;

    const timer = setInterval(() => {
      currentFrame++;
      const progress = currentFrame / totalFrames;
      const easeOutProgress = 1 - Math.pow(1 - progress, 3); // Ease-out cubic

      setAnimatedStats(prev => prev.map((stat, index) => {
        const newValue = Math.floor(stat.target * easeOutProgress);
        return {
          ...stat,
          number: newValue
        };
      }));

      if (currentFrame >= totalFrames) {
        clearInterval(timer);
        console.log('Counter animation completed'); // Debug log
        // Ensure final values are exact
        setAnimatedStats(prev => prev.map(stat => ({
          ...stat,
          number: stat.target
        })));
      }
    }, 1000 / frameRate);
  };

  return (
    <section
      id="about"
      className="py-16 relative"
      style={{ background: 'var(--bg-primary)' }}
    >
      <div className="container">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          {/* Left - Image with slide-in animation */}
          <div 
            ref={imageRef}
            className={`relative transition-all duration-1000 ease-out custom-cursor-tech ${
              isImageVisible 
                ? 'translate-x-0 opacity-100' 
                : '-translate-x-full opacity-0'
            }`}
          >
            <div
              className="relative overflow-hidden about-image-container"
              style={{
                border: '1px solid var(--border-subtle)',
                padding: '4px',
                borderRadius: '16px',
                boxShadow: '0 20px 40px rgba(0, 0, 0, 0.3)',
                background: 'linear-gradient(135deg, rgba(0, 224, 255, 0.05) 0%, rgba(10, 25, 47, 0.1) 100%)'
              }}
            >
              <img
                src="https://images.unsplash.com/photo-1518709268805-4e9042af2176?w=800&h=600&fit=crop&q=80"
                alt="Technology Innovation at Spark Invotech"
                className="w-full h-auto object-cover transition-transform duration-500 hover:scale-105"
                style={{
                  filter: 'brightness(0.9) contrast(1.1)',
                  borderRadius: '12px',
                  minHeight: '300px',
                  maxHeight: '500px'
                }}
                onError={(e) => {
                  console.log('Image failed to load, using fallback');
                  e.target.src = 'https://images.unsplash.com/photo-1581092921461-eab62e97a780?w=800&h=600&fit=crop&q=80';
                }}
                onLoad={() => console.log('Image loaded successfully')}
                loading="lazy"
              />
              {/* Enhanced glow overlay */}
              <div
                className="absolute inset-0 pointer-events-none"
                style={{
                  background:
                    'radial-gradient(circle at 50% 50%, rgba(0, 224, 255, 0.15) 0%, transparent 70%)',
                  borderRadius: '12px'
                }}
              />
              {/* Additional animated glow */}
              <div
                className={`absolute inset-0 pointer-events-none transition-opacity duration-1000 ${
                  isImageVisible ? 'opacity-100' : 'opacity-0'
                }`}
                style={{
                  background:
                    'linear-gradient(45deg, transparent 30%, rgba(0, 224, 255, 0.1) 50%, transparent 70%)',
                  animation: isImageVisible ? 'shimmer 3s ease-in-out infinite' : 'none',
                  borderRadius: '12px'
                }}
              />
            </div>
          </div>

          {/* Right - Content */}
          <div className="animate-fade-in-up">
            <h2
              className="text-4xl md:text-5xl font-semibold mb-6"
              style={{
                color: 'var(--text-primary)',
                lineHeight: '1.2',
                letterSpacing: '-0.02em'
              }}
            >
              {aboutContent.title}
            </h2>
            <p
              className="text-xl leading-relaxed mb-8"
              style={{
                color: 'var(--text-secondary)',
                lineHeight: '1.6'
              }}
            >
              {aboutContent.description}
            </p>

            {/* Animated Stats */}
            <div 
              ref={statsRef}
              className="grid grid-cols-3 gap-8 mt-8"
            >
              {animatedStats.map((stat, index) => (
                <div 
                  key={index} 
                  className={`text-center transition-all duration-700 ease-out ${
                    isStatsVisible 
                      ? 'translate-y-0 opacity-100' 
                      : 'translate-y-8 opacity-0'
                  }`}
                  style={{ 
                    transitionDelay: `${index * 200}ms`,
                    transform: isStatsVisible ? 'translateY(0)' : 'translateY(32px)'
                  }}
                >
                  <div
                    className="text-3xl md:text-4xl font-semibold mb-2 font-mono"
                    style={{ 
                      color: 'var(--brand-primary)',
                      textShadow: '0 0 20px rgba(0, 224, 255, 0.3)'
                    }}
                  >
                    {stat.number}{stat.suffix}
                  </div>
                  <div
                    className="text-sm md:text-base"
                    style={{ color: 'var(--text-muted)' }}
                  >
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
