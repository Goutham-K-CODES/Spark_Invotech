import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { companyInfo } from '../data/mock';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Products', href: '#products' },
    { name: 'Services', href: '#services' }
  ];

  return (
    <header
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-400"
      style={{
        background: isScrolled ? 'rgba(0, 0, 0, 0.95)' : 'transparent',
        borderBottom: isScrolled ? '1px solid var(--border-subtle)' : 'none',
        backdropFilter: isScrolled ? 'blur(10px)' : 'none'
      }}
    >
      <div className="container">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <a
            href="#home"
            className="text-xl md:text-2xl font-semibold"
            style={{ color: '#ffffff' }}
          >
            {companyInfo.name}
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-6 lg:gap-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-base lg:text-lg font-normal transition-colors duration-300"
                style={{
                  color: 'var(--text-muted)'
                }}
                onMouseEnter={(e) => {
                  e.target.style.color = 'var(--text-primary)';
                }}
                onMouseLeave={(e) => {
                  e.target.style.color = 'var(--text-muted)';
                }}
              >
                {link.name}
              </a>
            ))}
            <a
              href="#contact"
              className="px-4 py-2 lg:px-6 lg:py-3 font-medium transition-all duration-300 rounded text-sm lg:text-base"
              style={{
                backgroundColor: '#3b82f6',
                color: '#ffffff',
                border: 'none'
              }}
              onMouseEnter={(e) => {
                e.target.style.backgroundColor = '#2563eb';
              }}
              onMouseLeave={(e) => {
                e.target.style.backgroundColor = '#3b82f6';
              }}
            >
              Contact
            </a>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-3 -m-2 touch-manipulation"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            style={{ color: 'var(--text-primary)' }}
            aria-label="Toggle mobile menu"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div
          className="md:hidden fixed inset-0 top-16 z-40"
          style={{
            background: 'rgba(0, 0, 0, 0.98)',
            backdropFilter: 'blur(10px)'
          }}
        >
          <nav className="container py-8 flex flex-col gap-6 h-full">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-xl font-normal py-4 border-b border-gray-800"
                style={{ color: 'var(--text-muted)' }}
                onClick={() => setIsMobileMenuOpen(false)}
                onTouchStart={(e) => {
                  e.target.style.color = 'var(--text-primary)';
                }}
                onTouchEnd={(e) => {
                  setTimeout(() => {
                    e.target.style.color = 'var(--text-muted)';
                  }, 150);
                }}
              >
                {link.name}
              </a>
            ))}
            <a
              href="#contact"
              className="px-8 py-4 font-medium text-center rounded mt-6 text-lg touch-manipulation"
              style={{
                backgroundColor: '#3b82f6',
                color: '#ffffff',
                border: 'none',
                minHeight: '48px'
              }}
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Contact
            </a>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
