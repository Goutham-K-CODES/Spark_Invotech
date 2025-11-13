import React from 'react';
import { ArrowRight } from 'lucide-react';
import Spline from '@splinetool/react-spline';
import { companyInfo } from '../data/mock';

const Hero = () => {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
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
        <div className="grid md:grid-cols-2 gap-12 items-center" style={{ paddingTop: '80px' }}>
          {/* Left Content */}
          <div className="animate-fade-in-up">
            <h1
              className="text-5xl md:text-6xl lg:text-7xl font-semibold mb-6"
              style={{
                color: 'var(--text-primary)',
                lineHeight: '1.1',
                letterSpacing: '-0.02em'
              }}
            >
              {companyInfo.tagline}
            </h1>
            <p
              className="text-xl md:text-2xl mb-12"
              style={{
                color: 'var(--text-secondary)',
                lineHeight: '1.5',
                maxWidth: '600px'
              }}
            >
              {companyInfo.subheading}
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-4">
              <a
                href="#products"
                className="px-8 py-4 font-medium text-lg inline-flex items-center gap-3 transition-all duration-400"
                style={{
                  background: 'var(--brand-primary)',
                  color: '#000000',
                  borderRadius: '0px'
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
                className="px-8 py-4 font-medium text-lg inline-flex items-center gap-3 transition-all duration-400"
                style={{
                  background: 'rgba(255, 255, 255, 0.1)',
                  color: '#FFFFFF',
                  borderRadius: '0px'
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
          <div className="relative flex items-center justify-center" style={{ minHeight: '600px' }}>
            <div
              className="relative"
              style={{
                width: '700px',
                height: '700px',
                overflow: 'visible'
              }}
            >
              <Spline scene="https://prod.spline.design/NbVmy6DPLhY-5Lvg/scene.splinecode" />
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce"
        style={{ color: 'var(--brand-primary)' }}
      >
        <div className="w-6 h-10 border-2 rounded-full flex items-start justify-center p-2"
          style={{ borderColor: 'var(--brand-primary)' }}
        >
          <div
            className="w-1 h-3 rounded-full"
            style={{ background: 'var(--brand-primary)' }}
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
