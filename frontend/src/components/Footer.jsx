import React from 'react';
import { companyInfo } from '../data/mock';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Products', href: '#products' },
    { name: 'Services', href: '#services' },
    { name: 'Testimonials', href: '#testimonials' },
    { name: 'Contact', href: '#contact' }
  ];

  return (
    <footer
      style={{
        background: 'var(--bg-secondary)',
        borderTop: '1px solid var(--border-subtle)'
      }}
    >
      <div className="container py-6 md:py-8 px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 mb-4 md:mb-6">
          {/* Company Info */}
          <div className="text-center md:text-left mt-4">
            <div className="flex items-center justify-center md:justify-start mb-3">
              <img 
                src="/spark.png" 
                alt="Spark Invotech Logo" 
                className="h-12 sm:h-14 md:h-20 lg:h-24 w-auto"
                onError={(e) => {
                  e.target.style.display = 'none';
                }}
              />
            </div>
            <p
              className="text-base md:text-lg mb-4 md:mb-6"
              style={{ color: 'var(--text-secondary)', lineHeight: '1.6' }}
            >
              Bridging the gap between industry and innovation through intelligent IoT solutions.
            </p>
          </div>

          {/* Quick Links */}
          <div className="text-center md:text-left mt-4">
            <h4
              className="text-xl md:text-2xl font-semibold mb-3 md:mb-4"
              style={{ color: 'var(--text-primary)' }}
            >
              Quick Links
            </h4>
            <nav className="flex flex-col gap-2 md:gap-3">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-base md:text-lg hover:text-cyan-400 transition-colors duration-300 cursor-pointer"
                  style={{ color: 'var(--text-secondary)' }}
                >
                  {link.name}
                </a>
              ))}
            </nav>
          </div>

          {/* Contact Info */}
          <div className="text-center md:text-left mt-4">
            <h4
              className="text-xl md:text-2xl font-semibold mb-3 md:mb-4"
              style={{ color: 'var(--text-primary)' }}
            >
              Contact
            </h4>
            <div className="flex flex-col gap-2 md:gap-3">
              <p
                className="text-base md:text-lg"
                style={{ color: 'var(--text-secondary)' }}
              >
                Email: {companyInfo.email}
              </p>
              <p
                className="text-base md:text-lg"
                style={{ color: 'var(--text-secondary)' }}
              >
                Phone: {companyInfo.phone}
              </p>
              <p
                className="text-base md:text-lg"
                style={{ color: 'var(--text-secondary)' }}
              >
                Address: {companyInfo.address}
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div
          className="pt-8 md:pt-12 pb-6 md:pb-8 flex flex-col md:flex-row justify-between items-center gap-4 md:gap-6"
          style={{ borderTop: '1px solid var(--border-subtle)' }}
        >
          <p className="text-sm md:text-base text-center md:text-left" style={{ color: 'var(--text-muted)' }}>
            © {currentYear} {companyInfo.name}. All rights reserved.
          </p>
          <div className="flex gap-4 md:gap-8">
            <a
              href="#"
              className="text-sm md:text-base transition-colors duration-300 touch-manipulation"
              style={{ color: 'var(--text-muted)' }}
              onMouseEnter={(e) => {
                e.target.style.color = 'var(--brand-primary)';
              }}
              onMouseLeave={(e) => {
                e.target.style.color = 'var(--text-muted)';
              }}
            >
              Privacy Policy
            </a>
            <a
              href="#"
              className="text-sm md:text-base transition-colors duration-300 touch-manipulation"
              style={{ color: 'var(--text-muted)' }}
              onMouseEnter={(e) => {
                e.target.style.color = 'var(--brand-primary)';
              }}
              onMouseLeave={(e) => {
                e.target.style.color = 'var(--text-muted)';
              }}
            >
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
