import React, { useState, useEffect, useRef } from 'react';
import { ArrowRight, CheckCircle } from 'lucide-react';
import { products, images } from '../data/mock';
import AnimatedText from './ui/AnimatedText';

const Products = () => {
  const [visibleProducts, setVisibleProducts] = useState(new Set());
  const productRefs = useRef([]);

  useEffect(() => {
    const observerOptions = {
      threshold: 0.1, // Lowered threshold for easier triggering
      rootMargin: '0px 0px -20px 0px' // Reduced margin
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const index = parseInt(entry.target.dataset.index);
          console.log(`Product ${index} is now visible and animating`);
          setVisibleProducts(prev => new Set([...prev, index]));
        }
      });
    }, observerOptions);

    productRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="products"
      className="py-32 relative"
      style={{ background: 'var(--bg-secondary)' }}
    >
      <div className="container">
        {/* Section Header */}
        <div className="text-center mb-8 md:mb-12 animate-fade-in-up px-4">
          <AnimatedText animationType="reveal" delay={100}>
            <h2
              className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold mb-4 md:mb-6"
              style={{
                color: 'var(--text-primary)',
                lineHeight: '1.2',
                letterSpacing: '-0.02em'
              }}
            >
              Transforming Ideas into Intelligent Solutions
            </h2>
          </AnimatedText>
          
          <AnimatedText animationType="reveal" delay={300}>
            <p
              className="text-base sm:text-lg md:text-xl max-w-3xl mx-auto px-4"
              style={{ color: 'var(--text-secondary)' }}
            >
              Innovative products designed to revolutionize industrial operations
            </p>
          </AnimatedText>
        </div>

        {/* Products Grid */}
                <div className="grid md:grid-cols-2 gap-12">
          {products.map((product, index) => {
            const isVisible = visibleProducts.has(index);
            const slideDirection = index % 2 === 0 ? 'slide-from-left' : 'slide-from-right';
            
            return (
            <div
              key={product.id}
              ref={(el) => {
                productRefs.current[index] = el;
                if (el) {
                  el.dataset.index = index;
                  console.log(`Product ${index} ref set:`, product.title);
                }
              }}
              className={`group relative overflow-hidden rounded-3xl transition-all duration-1000 ease-out ${
                isVisible ? 'slide-in-visible' : slideDirection
              }`}
              style={{
                background: 'var(--card-bg)',
                border: '1px solid var(--border-subtle)',
                borderRadius: '20px', // Enhanced rounded corners
                transitionDelay: `${index * 200}ms`,
                padding: '32px',
                boxShadow: isVisible 
                  ? '0 20px 48px rgba(0, 224, 255, 0.15)' 
                  : '0 8px 32px rgba(0, 0, 0, 0.1)'
              }}
            >
              {/* Product Image */}
              <div 
                className="mb-6 overflow-hidden" 
                style={{ 
                  height: '200px',
                  borderRadius: '16px',
                  background: 'linear-gradient(135deg, rgba(0, 224, 255, 0.1) 0%, rgba(10, 25, 47, 0.2) 100%)'
                }}
              >
                <img
                  src={index === 0 ? images.iotDevices : images.industrial}
                  alt={product.name}
                  className="w-full h-full object-cover transition-transform duration-400 group-hover:scale-105"
                  style={{ 
                    filter: 'brightness(0.8)',
                    borderRadius: '16px'
                  }}
                />
              </div>

              {/* Product Name */}
              <h3
                className="text-xl sm:text-2xl lg:text-3xl font-semibold mb-4"
                style={{ color: 'var(--text-primary)' }}
              >
                {product.name}
              </h3>

              {/* Description */}
              <p
                className="text-base lg:text-lg mb-6 leading-relaxed"
                style={{ color: 'var(--text-secondary)' }}
              >
                {product.description}
              </p>

              {/* Features */}
              <div className="mb-6">
                <h4
                  className="text-xl font-medium mb-4"
                  style={{ color: 'var(--brand-primary)' }}
                >
                  Key Features
                </h4>
                <ul className="space-y-3">
                  {product.features.map((feature, idx) => (
                    <li
                      key={idx}
                      className="flex items-start gap-3 text-base"
                      style={{ color: 'var(--text-secondary)' }}
                    >
                      <CheckCircle
                        size={20}
                        className="flex-shrink-0 mt-0.5"
                        style={{ color: 'var(--brand-primary)' }}
                      />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Applications */}
              <div className="mb-6">
                <h4
                  className="text-xl font-medium mb-4"
                  style={{ color: 'var(--brand-primary)' }}
                >
                  Applications
                </h4>
                <ul className="space-y-3">
                  {product.applications.map((app, idx) => (
                    <li
                      key={idx}
                      className="flex items-start gap-3 text-base"
                      style={{ color: 'var(--text-secondary)' }}
                    >
                      <CheckCircle
                        size={20}
                        className="flex-shrink-0 mt-0.5"
                        style={{ color: 'var(--brand-primary)' }}
                      />
                      <span>{app}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* CTA Button */}
              <button
                className="w-full py-3 lg:py-4 font-medium text-base lg:text-lg inline-flex items-center justify-center gap-3 transition-all duration-400 touch-manipulation"
                style={{
                  background: 'var(--brand-primary)',
                  color: '#000000',
                  borderRadius: '12px',
                  border: 'none',
                  cursor: 'pointer',
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
                Learn More
                <ArrowRight size={20} />
              </button>
            </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Products;
