import React, { useState, useEffect, useRef } from 'react';
import { ArrowRight } from 'lucide-react';
import Spline from '@splinetool/react-spline';
import { companyInfo } from '../data/mock';

const Hero = () => {
  const [is3DLoaded, setIs3DLoaded] = useState(false);
  const [scrollY, setScrollY] = useState(0);
  const splineRef = useRef(null);

  const handle3DLoad = () => {
    setIs3DLoaded(true);
  };

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setScrollY(currentScrollY);
      
      // Apply scroll-based transformation to 3D scene
      if (splineRef.current) {
        const scrollFactor = currentScrollY * 0.5;
        const rotationY = scrollFactor * 0.1;
        const rotationX = Math.sin(scrollFactor * 0.01) * 10;
        
        splineRef.current.style.transform = `
          scale(${window.innerWidth >= 1024 ? '1' : '0.8'}) 
          rotateY(${rotationY}deg) 
          rotateX(${rotationX}deg) 
          translateZ(${Math.sin(scrollFactor * 0.005) * 20}px)
        `;
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden px-4 sm:px-6 lg:px-8"
      style={{ background: 'var(--bg-primary)' }}
    >
      {/* Background Pattern */}
      <div
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage:
            'repeating-linear-gradient(0deg, transparent, transparent 1px, transparent 1px, transparent 7.6923%), repeating-linear-gradient(-90deg, #fff, #fff 1px, transparent 1px, transparent 7.6923%)',
          backgroundSize: '100% 100%'
        }}
      />

      <div className="container relative z-10">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center" style={{ paddingTop: '80px' }}>
          {/* Left Content */}
          <div className="animate-fade-in-up text-center lg:text-left">
            <h1
              className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-semibold mb-4 md:mb-6"
              style={{
                color: 'var(--text-primary)',
                lineHeight: '1.1',
                letterSpacing: '-0.02em'
              }}
            >
              {companyInfo.tagline}
            </h1>
            <p
                            className="text-lg sm:text-xl md:text-2xl lg:text-3xl mb-6 lg:mb-8 max-w-3xl mx-auto lg:mx-0"
              style={{
                color: 'var(--text-secondary)',
                lineHeight: '1.5'
              }}
            >
              {companyInfo.subheading}
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <a
                href="#products"
                className="px-6 sm:px-8 py-3 sm:py-4 font-medium text-base sm:text-lg inline-flex items-center justify-center gap-3 transition-all duration-400 touch-manipulation"
                style={{
                  background: 'var(--brand-primary)',
                  color: '#000000',
                  borderRadius: '0px',
                  minHeight: '48px'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = 'var(--brand-hover)';
                  e.currentTarget.style.color = 'var(--brand-primary)';
                  e.currentTarget.style.transform = 'scale(1.02)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = 'var(--brand-primary)';
                  e.currentTarget.style.color = '#000000';
                  e.currentTarget.style.transform = 'scale(1)';
                }}
              >
                Explore Products
                <ArrowRight size={20} />
              </a>
              <a
                href="#contact"
                className="px-6 sm:px-8 py-3 sm:py-4 font-medium text-base sm:text-lg inline-flex items-center justify-center gap-3 transition-all duration-400 touch-manipulation"
                style={{
                  background: 'rgba(255, 255, 255, 0.1)',
                  color: '#FFFFFF',
                  borderRadius: '0px',
                  minHeight: '48px'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = '#FFFFFF';
                  e.currentTarget.style.color = '#000000';
                  e.currentTarget.style.transform = 'scale(1.02)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = 'rgba(255, 255, 255, 0.1)';
                  e.currentTarget.style.color = '#FFFFFF';
                  e.currentTarget.style.transform = 'scale(1)';
                }}
              >
                Contact Us
                <ArrowRight size={20} />
              </a>
            </div>
          </div>

          {/* Right Content - 3D Spline */}
          <div className="relative flex items-center justify-center mt-8 lg:mt-0" style={{ minHeight: '400px' }}>
            {/* Desktop 3D Spline */}
            <div
              className="relative hidden lg:block"
              style={{
                width: '700px',
                height: '700px',
                overflow: 'visible'
              }}
            >
              <div
                ref={splineRef}
                style={{
                  width: '100%',
                  height: '100%',
                  transition: 'transform 0.1s ease-out',
                  transformStyle: 'preserve-3d'
                }}
              >
                <Spline 
                  scene="https://prod.spline.design/NbVmy6DPLhY-5Lvg/scene.splinecode"
                  onLoad={handle3DLoad}
                />
              </div>
            </div>
            
            {/* Mobile 3D Spline - Optimized */}
            <div
              className="relative lg:hidden w-full"
              style={{
                height: '350px',
                maxWidth: '400px',
                overflow: 'hidden'
              }}
            >
              {/* Loading placeholder */}
              {!is3DLoaded && (
                <div className="absolute inset-0 flex items-center justify-center bg-gray-900/20 rounded-lg backdrop-blur-sm">
                  <div className="text-center">
                    <div className="w-16 h-16 mx-auto mb-3 bg-cyan-400/20 rounded-full flex items-center justify-center">
                      <div className="w-8 h-8 bg-cyan-400 rounded-full animate-pulse"></div>
                    </div>
                    <p className="text-gray-400 text-sm">Loading 3D Scene...</p>
                  </div>
                </div>
              )}
              <div
                ref={splineRef}
                style={{
                  width: '100%',
                  height: '100%',
                  transformOrigin: 'center center',
                  transition: 'transform 0.1s ease-out',
                  transformStyle: 'preserve-3d'
                }}
              >
                <Spline 
                  scene="https://prod.spline.design/NbVmy6DPLhY-5Lvg/scene.splinecode"
                  onLoad={handle3DLoad}
                  className="spline-mobile"
                  style={{
                    width: '100%',
                    height: '100%',
                    opacity: is3DLoaded ? 1 : 0,
                    transition: 'opacity 0.5s ease-in-out'
                  }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div
        className="absolute bottom-4 sm:bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce"
        style={{ color: 'var(--brand-primary)' }}
      >
        <div className="w-5 h-8 sm:w-6 sm:h-10 border-2 rounded-full flex items-start justify-center p-1 sm:p-2"
          style={{ borderColor: 'var(--brand-primary)' }}
        >
          <div
            className="w-1 h-2 sm:h-3 rounded-full"
            style={{ background: 'var(--brand-primary)' }}
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
