import React from 'react';
import { ArrowRight } from 'lucide-react';
import Spline from '@splinetool/react-spline';
import { companyInfo } from '../data/mock';

const Hero = () => {
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
              className="text-lg sm:text-xl md:text-2xl mb-8 md:mb-12 max-w-2xl mx-auto lg:mx-0"
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
            <div
              className="relative hidden lg:block"
              style={{
                width: '700px',
                height: '700px',
                overflow: 'visible'
              }}
            >
              <Spline scene="https://prod.spline.design/NbVmy6DPLhY-5Lvg/scene.splinecode" />
            </div>
            {/* Mobile placeholder */}
            <div className="lg:hidden w-full h-80 rounded-lg border border-gray-700 flex items-center justify-center">
              <div className="text-center">
                <div className="w-24 h-24 mx-auto mb-4 bg-cyan-400/20 rounded-full flex items-center justify-center">
                  <div className="w-12 h-12 bg-cyan-400 rounded-full animate-pulse"></div>
                </div>
                <p className="text-gray-400 text-sm">3D Interactive Demo</p>
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
