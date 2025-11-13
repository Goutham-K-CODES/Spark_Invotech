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
      <div className="container py-20">
        <div className="grid md:grid-cols-3 gap-16 mb-16">
          {/* Company Info */}
          <div className="mt-8">
            <h3
              className="text-2xl font-semibold mb-4"
              style={{ color: 'var(--brand-primary)' }}
            >
              {companyInfo.name}
            </h3>
            <p
              className="text-base mb-6"
              style={{ color: 'var(--text-secondary)', lineHeight: '1.6' }}
            >
              Bridging the gap between industry and innovation through intelligent IoT solutions.
            </p>
          </div>

          {/* Quick Links */}
          <div className="mt-8">
            <h4
              className="text-xl font-semibold mb-6"
              style={{ color: 'var(--text-primary)' }}
            >
              Quick Links
            </h4>
            <nav className="flex flex-col gap-4">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-base transition-colors duration-300"
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
          <div className="mt-8">
            <h4
              className="text-xl font-semibold mb-6"
              style={{ color: 'var(--text-primary)' }}
            >
              Contact
            </h4>
            <div className="space-y-4">
              <p
                className="text-base"
                style={{ color: 'var(--text-secondary)' }}
              >
                <a
                  href={`mailto:${companyInfo.email}`}
                  className="transition-colors duration-300"
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
                className="text-base"
                style={{ color: 'var(--text-secondary)' }}
              >
                {companyInfo.location}
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div
          className="pt-12 pb-8 flex flex-col md:flex-row justify-between items-center gap-6"
          style={{ borderTop: '1px solid var(--border-subtle)' }}
        >
          <p className="text-base" style={{ color: 'var(--text-muted)' }}>
            © {currentYear} {companyInfo.name}. All rights reserved.
          </p>
          <div className="flex gap-8">
            <a
              href="#"
              className="text-base transition-colors duration-300"
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
              className="text-base transition-colors duration-300"
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
