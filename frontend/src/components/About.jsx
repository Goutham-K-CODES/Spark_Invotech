import React from 'react';
import { aboutContent, images } from '../data/mock';

const About = () => {
  return (
    <section
      id="about"
      className="py-32 relative"
      style={{ background: 'var(--bg-primary)' }}
    >
      <div className="container">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          {/* Left - Image */}
          <div className="relative animate-fade-in">
            <div
              className="relative overflow-hidden"
              style={{
                border: '1px solid var(--border-subtle)',
                padding: '4px'
              }}
            >
              <img
                src={images.aboutTech}
                alt="Technology"
                className="w-full h-auto object-cover"
                style={{
                  filter: 'brightness(0.9) contrast(1.1)'
                }}
              />
              {/* Glow overlay */}
              <div
                className="absolute inset-0 pointer-events-none"
                style={{
                  background:
                    'radial-gradient(circle at 50% 50%, rgba(0, 224, 255, 0.1) 0%, transparent 70%)'
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
              className="text-xl leading-relaxed"
              style={{
                color: 'var(--text-secondary)',
                lineHeight: '1.6'
              }}
            >
              {aboutContent.description}
            </p>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-8 mt-12">
              {[
                { number: '50+', label: 'Projects' },
                { number: '30+', label: 'Clients' },
                { number: '99%', label: 'Satisfaction' }
              ].map((stat, index) => (
                <div key={index} className="text-center">
                  <div
                    className="text-3xl md:text-4xl font-semibold mb-2"
                    style={{ color: 'var(--brand-primary)' }}
                  >
                    {stat.number}
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
