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
      <div className="container py-12 md:py-20 px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-16 mb-8 md:mb-16">
          {/* Company Info */}
          <div className="text-center md:text-left">
            <h3
              className="text-xl md:text-2xl font-semibold mb-3 md:mb-4"
              style={{ color: 'var(--brand-primary)' }}
            >
              {companyInfo.name}
            </h3>
            <p
              className="text-sm md:text-base mb-4 md:mb-6"
              style={{ color: 'var(--text-secondary)', lineHeight: '1.6' }}
            >
              Bridging the gap between industry and innovation through intelligent IoT solutions.
            </p>
          </div>

          {/* Quick Links */}
          <div className="text-center md:text-left">
            <h4
              className="text-lg md:text-xl font-semibold mb-4 md:mb-6"
              style={{ color: 'var(--text-primary)' }}
            >
              Quick Links
            </h4>
            <nav className="flex flex-col gap-3 md:gap-4">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-sm md:text-base transition-colors duration-300 touch-manipulation py-1"
                  style={{ color: 'var(--text-muted)' }}
                  onMouseEnter={(e) => {
                    e.target.style.color = 'var(--brand-primary)';
                  }}
                  onMouseLeave={(e) => {
                    e.target.style.color = 'var(--text-muted)';
                  }}
                >
                  {link.name}
                </a>
              ))}
            </nav>
          </div>

          {/* Contact Info */}
          <div className="text-center md:text-left">
            <h4
              className="text-lg md:text-xl font-semibold mb-4 md:mb-6"
              style={{ color: 'var(--text-primary)' }}
            >
              Contact
            </h4>
            <div className="space-y-3 md:space-y-4">
              <p
                className="text-sm md:text-base"
                style={{ color: 'var(--text-secondary)' }}
              >
                <a
                  href={`mailto:${companyInfo.email}`}
                  className="transition-colors duration-300 touch-manipulation"
                  onMouseEnter={(e) => {
                    e.target.style.color = 'var(--brand-primary)';
                  }}
                  onMouseLeave={(e) => {
                    e.target.style.color = 'var(--text-secondary)';
                  }}
                >
                  {companyInfo.email}
                </a>
              </p>
              <p
                className="text-sm md:text-base"
                style={{ color: 'var(--text-secondary)' }}
              >
                {companyInfo.location}
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
