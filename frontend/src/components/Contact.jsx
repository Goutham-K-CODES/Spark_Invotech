import React, { useState } from 'react';
import { Mail, Globe, MapPin, Send, Phone } from 'lucide-react';
import { companyInfo } from '../data/mock';
import { useToast } from '../hooks/use-toast';

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Mock form submission
    toast({
      title: "Message Sent!",
      description: "Thank you for contacting us. We'll get back to you soon.",
    });
    
    // Reset form
    setFormData({ name: '', email: '', message: '' });
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section
      id="contact"
      className="py-32 relative"
      style={{ background: 'var(--bg-primary)' }}
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
            Let's Build Something Smart Together
          </h2>
          <p
            className="text-xl max-w-3xl mx-auto"
            style={{ color: 'var(--text-secondary)' }}
          >
            Get in touch with our team to discuss your project
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-16">
          {/* Contact Info */}
          <div className="animate-fade-in">
            <h3
              className="text-3xl font-semibold mb-8"
              style={{ color: 'var(--text-primary)' }}
            >
              Get In Touch
            </h3>

            <div className="space-y-8">
              {/* Email */}
              <div className="flex items-start gap-4">
                <div
                  className="flex-shrink-0 w-12 h-12 flex items-center justify-center"
                  style={{
                    background: 'rgba(0, 224, 255, 0.1)',
                    border: '1px solid var(--brand-primary)'
                  }}
                >
                  <Mail size={24} style={{ color: 'var(--brand-primary)' }} />
                </div>
                <div>
                  <div
                    className="text-lg font-medium mb-1"
                    style={{ color: 'var(--text-primary)' }}
                  >
                    Email
                  </div>
                  <a
                    href={`mailto:${companyInfo.email}`}
                    className="text-base transition-colors duration-300"
                    style={{ color: 'var(--text-secondary)' }}
                    onMouseEnter={(e) => {
                      e.target.style.color = 'var(--brand-primary)';
                    }}
                    onMouseLeave={(e) => {
                      e.target.style.color = 'var(--text-secondary)';
                    }}
                  >
                    {companyInfo.email}
                  </a>
                </div>
              </div>

              {/* Website */}
              <div className="flex items-start gap-4">
                <div
                  className="flex-shrink-0 w-12 h-12 flex items-center justify-center"
                  style={{
                    background: 'rgba(0, 224, 255, 0.1)',
                    border: '1px solid var(--brand-primary)'
                  }}
                >
                  <Globe size={24} style={{ color: 'var(--brand-primary)' }} />
                </div>
                <div>
                  <div
                    className="text-lg font-medium mb-1"
                    style={{ color: 'var(--text-primary)' }}
                  >
                    Website
                  </div>
                  <a
                    href={`https://${companyInfo.website}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-base transition-colors duration-300"
                    style={{ color: 'var(--text-secondary)' }}
                    onMouseEnter={(e) => {
                      e.target.style.color = 'var(--brand-primary)';
                    }}
                    onMouseLeave={(e) => {
                      e.target.style.color = 'var(--text-secondary)';
                    }}
                  >
                    {companyInfo.website}
                  </a>
                </div>
              </div>

              {/* Location */}
              <div className="flex items-start gap-4">
                <div
                  className="flex-shrink-0 w-12 h-12 flex items-center justify-center"
                  style={{
                    background: 'rgba(0, 224, 255, 0.1)',
                    border: '1px solid var(--brand-primary)'
                  }}
                >
                  <MapPin size={24} style={{ color: 'var(--brand-primary)' }} />
                </div>
                <div>
                  <div
                    className="text-lg font-medium mb-1"
                    style={{ color: 'var(--text-primary)' }}
                  >
                    Location
                  </div>
                  <p
                    className="text-base"
                    style={{ color: 'var(--text-secondary)' }}
                  >
                    {companyInfo.location}
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="animate-fade-in-up">
            <form
              onSubmit={handleSubmit}
              className="space-y-6"
              style={{
                background: 'var(--bg-secondary)',
                border: '1px solid var(--border-subtle)',
                padding: '40px'
              }}
            >
              {/* Name */}
              <div>
                <label
                  htmlFor="name"
                  className="block text-base font-medium mb-2"
                  style={{ color: 'var(--text-primary)' }}
                >
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 text-base transition-all duration-300"
                  style={{
                    background: 'var(--bg-primary)',
                    border: '1px solid var(--border-subtle)',
                    color: 'var(--text-primary)',
                    borderRadius: '0px',
                    outline: 'none'
                  }}
                  onFocus={(e) => {
                    e.target.style.borderColor = 'var(--brand-primary)';
                  }}
                  onBlur={(e) => {
                    e.target.style.borderColor = 'var(--border-subtle)';
                  }}
                />
              </div>

              {/* Email */}
              <div>
                <label
                  htmlFor="email"
                  className="block text-base font-medium mb-2"
                  style={{ color: 'var(--text-primary)' }}
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 text-base transition-all duration-300"
                  style={{
                    background: 'var(--bg-primary)',
                    border: '1px solid var(--border-subtle)',
                    color: 'var(--text-primary)',
                    borderRadius: '0px',
                    outline: 'none'
                  }}
                  onFocus={(e) => {
                    e.target.style.borderColor = 'var(--brand-primary)';
                  }}
                  onBlur={(e) => {
                    e.target.style.borderColor = 'var(--border-subtle)';
                  }}
                />
              </div>

              {/* Message */}
              <div>
                <label
                  htmlFor="message"
                  className="block text-base font-medium mb-2"
                  style={{ color: 'var(--text-primary)' }}
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows="6"
                  className="w-full px-4 py-3 text-base transition-all duration-300 resize-none"
                  style={{
                    background: 'var(--bg-primary)',
                    border: '1px solid var(--border-subtle)',
                    color: 'var(--text-primary)',
                    borderRadius: '0px',
                    outline: 'none'
                  }}
                  onFocus={(e) => {
                    e.target.style.borderColor = 'var(--brand-primary)';
                  }}
                  onBlur={(e) => {
                    e.target.style.borderColor = 'var(--border-subtle)';
                  }}
                />
              </div>

              {/* Submit Button */}
              <button
                type="submit"
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
                Send Message
                <Send size={20} />
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
