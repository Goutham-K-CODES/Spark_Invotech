import React, { useEffect, useRef } from 'react';
import { Star, Quote } from 'lucide-react';
import { testimonials } from '../data/mock';

const Testimonials = () => {
  const scrollContainerRef = useRef(null);
  const intervalRef = useRef(null);

  useEffect(() => {
    const scrollContainer = scrollContainerRef.current;
    if (!scrollContainer) return;

    let scrollPosition = 0;
    const scrollSpeed = 1; // pixels per frame
    const cardWidth = 416; // 400px + 16px gap
    const totalWidth = testimonials.length * cardWidth;

    const autoScroll = () => {
      scrollPosition += scrollSpeed;
      
      // Reset to beginning when we've scrolled past original testimonials
      if (scrollPosition >= totalWidth) {
        scrollPosition = 0;
      }
      
      scrollContainer.scrollLeft = scrollPosition;
    };

    const startScrolling = () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
      intervalRef.current = setInterval(autoScroll, 16); // ~60fps
    };

    const stopScrolling = () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
        intervalRef.current = null;
      }
    };

    // Start auto-scrolling
    startScrolling();

    // Pause on hover
    const handleMouseEnter = () => stopScrolling();
    const handleMouseLeave = () => startScrolling();

    scrollContainer.addEventListener('mouseenter', handleMouseEnter);
    scrollContainer.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      stopScrolling();
      if (scrollContainer) {
        scrollContainer.removeEventListener('mouseenter', handleMouseEnter);
        scrollContainer.removeEventListener('mouseleave', handleMouseLeave);
      }
    };
  }, []);

  return (
    <>
      <style>
        {`
          .testimonials-scroll-container {
            scrollbar-width: none;
            -ms-overflow-style: none;
          }
          
          .testimonials-scroll-container::-webkit-scrollbar {
            display: none;
          }
          
          .testimonials-flex-container {
            animation: none;
            will-change: transform;
          }
        `}
      </style>
      
      <section
      id="testimonials"
      className="py-32 relative"
      style={{ background: 'var(--bg-secondary)' }}
    >
      <div className="container">
        {/* Section Header */}
        <div className="text-center mb-20 animate-fade-in-up">
          <h2
            className="text-4xl md:text-5xl font-semibold mb-6"
            style={{
              color: 'var(--text-primary)',
              lineHeight: '1.2',
              letterSpacing: '-0.02em'
            }}
          >
            What Our Partners Say
          </h2>
          <p
            className="text-xl max-w-3xl mx-auto"
            style={{ color: 'var(--text-secondary)' }}
          >
            Trusted by industry leaders for innovative solutions
          </p>
        </div>

        {/* Testimonials Horizontal Scroll */}
        <div 
          ref={scrollContainerRef}
          className="testimonials-scroll-container overflow-x-hidden pb-4"
          style={{ 
            scrollBehavior: 'auto',
            scrollbarWidth: 'none',
            msOverflowStyle: 'none'
          }}
        >
          <div className="testimonials-flex-container flex gap-4" style={{ 
            minWidth: 'max-content',
            animation: 'none'
          }}>
            {/* Duplicate testimonials for seamless loop */}
            {[...testimonials, ...testimonials, ...testimonials].map((testimonial, index) => (
              <div
                key={`${testimonial.id}-${index}`}
                className="animate-fade-in-up group flex-none"
                style={{
                  animationDelay: `${index * 0.15}s`,
                  background: 'var(--bg-primary)',
                  border: '1px solid var(--border-subtle)',
                  padding: '32px',
                  transition: 'all 0.4s ease-in-out',
                  position: 'relative',
                  width: '400px',
                  minWidth: '400px'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = 'var(--brand-primary)';
                  e.currentTarget.style.transform = 'translateY(-8px)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = 'var(--border-subtle)';
                  e.currentTarget.style.transform = 'translateY(0)';
                }}
              >
              {/* Quote Icon */}
              <div
                className="absolute top-8 right-8 opacity-20"
                style={{ color: 'var(--brand-primary)' }}
              >
                <Quote size={48} />
              </div>

              {/* Rating */}
              <div className="flex gap-1 mb-6">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star
                    key={i}
                    size={20}
                    fill="var(--brand-primary)"
                    style={{ color: 'var(--brand-primary)' }}
                  />
                ))}
              </div>

              {/* Testimonial Text */}
              <p
                className="text-lg mb-8 relative z-10"
                style={{
                  color: 'var(--text-secondary)',
                  lineHeight: '1.6'
                }}
              >
                "{testimonial.text}"
              </p>

              {/* Author Info */}
              <div
                className="pt-6"
                style={{ borderTop: '1px solid var(--border-subtle)' }}
              >
                <div
                  className="font-semibold text-lg mb-1"
                  style={{ color: 'var(--text-primary)' }}
                >
                  {testimonial.name}
                </div>
                <div
                  className="text-base"
                  style={{ color: 'var(--text-muted)' }}
                >
                  {testimonial.company}
                </div>
              </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
    </>
  );
};

export default Testimonials;
