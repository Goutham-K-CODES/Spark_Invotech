import React from 'react';
import { ArrowRight, CheckCircle } from 'lucide-react';
import { products, images } from '../data/mock';

const Products = () => {
  return (
    <section
      id="products"
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
            Transforming Ideas into Intelligent Solutions
          </h2>
          <p
            className="text-xl max-w-3xl mx-auto"
            style={{ color: 'var(--text-secondary)' }}
          >
            Innovative products designed to revolutionize industrial operations
          </p>
        </div>

        {/* Products Grid */}
        <div className="grid md:grid-cols-2 gap-12">
          {products.map((product, index) => (
            <div
              key={product.id}
              className="animate-fade-in-up group"
              style={{
                animationDelay: `${index * 0.2}s`,
                background: 'var(--bg-primary)',
                border: '1px solid var(--border-subtle)',
                padding: '40px',
                transition: 'all 0.4s ease-in-out'
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
              {/* Product Image */}
              <div className="mb-6 overflow-hidden" style={{ height: '200px' }}>
                <img
                  src={index === 0 ? images.iotDevices : images.industrial}
                  alt={product.name}
                  className="w-full h-full object-cover transition-transform duration-400 group-hover:scale-105"
                  style={{ filter: 'brightness(0.8)' }}
                />
              </div>

              {/* Product Name */}
              <h3
                className="text-3xl font-semibold mb-4"
                style={{ color: 'var(--text-primary)' }}
              >
                {product.name}
              </h3>

              {/* Description */}
              <p
                className="text-lg mb-6"
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
                className="w-full py-4 font-medium text-lg inline-flex items-center justify-center gap-3 transition-all duration-400"
                style={{
                  background: 'var(--brand-primary)',
                  color: '#000000',
                  borderRadius: '0px',
                  border: 'none',
                  cursor: 'pointer'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = 'var(--brand-hover)';
                  e.currentTarget.style.color = 'var(--brand-primary)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = 'var(--brand-primary)';
                  e.currentTarget.style.color = '#000000';
                }}
              >
                Learn More
                <ArrowRight size={20} />
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Products;
