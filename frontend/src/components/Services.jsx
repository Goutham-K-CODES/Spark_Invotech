import React, { useState, useRef, useEffect } from 'react';

/**
 * HorizontalAccordion Component
 * 
 * A responsive horizontal accordion for displaying IoT & Automation services.
 * 
 * To integrate with Tailwind (optional):
 * Replace inline styles with Tailwind classes like:
 * - style={{display: 'flex'}} → className="flex"
 * - style={{backgroundColor: '#f8fafc'}} → className="bg-slate-50"
 * 
 * To swap placeholder images:
 * Replace the placeholder URLs in the defaultPanels array with your actual image URLs
 */

const Services = ({ 
  panels = null, 
  onChange = () => {} 
}) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(false);
  const panelRefs = useRef([]);

  // Default panels data
  const defaultPanels = [
    {
      title: "IoT Product Development",
      description: "We provide end-to-end IoT product development services that take your idea from concept to reality. Our expert team designs hardware, firmware, and cloud integration to deliver complete and scalable IoT ecosystems.",
      offers: [
        "Custom hardware design and PCB development",
        "Embedded firmware development for various microcontrollers",
        "Cloud integration with APIs and mobile/web dashboards",
        "Rapid prototyping and field testing",
        "Production support and post-deployment updates"
      ],
      // IoT devices and microcontrollers
      image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&h=400&fit=crop&q=80"
    },
    {
      title: "Industrial Automation & Monitoring",
      description: "We build automation systems tailored to industrial needs, ensuring efficiency, reliability, and data transparency. Our monitoring systems enable real-time decision-making by providing accurate insights into machine and process performance.",
      offers: [
        "PLC and SCADA integration",
        "Custom dashboards for machine health and productivity",
        "Energy and environmental monitoring systems",
        "Predictive maintenance solutions",
        "Remote control and alert-based systems"
      ],
      // Industrial automation and manufacturing
      image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=600&h=400&fit=crop&q=80"
    },
    {
      title: "Web & Cloud Integration",
      description: "Our web and cloud integration services bridge devices and data seamlessly. We develop responsive and reliable platforms for visualizing and controlling IoT systems from anywhere.",
      offers: [
        "Cloud database design and API development",
        "Real-time data visualization dashboards",
        "Web and mobile interfaces for IoT devices",
        "Secure cloud hosting and user management systems",
        "Integration with third-party analytics and reporting tools"
      ],
      // Cloud computing and data visualization
      image: "https://images.unsplash.com/photo-1544197150-b99a580bb7a8?w=600&h=400&fit=crop&q=80"
    },
    {
      title: "Prototype to Product Support",
      description: "From idea to implementation — we guide innovators and businesses in developing market-ready products. Our process includes design validation, prototyping, testing, and production setup.",
      offers: [
        "Feasibility study and proof-of-concept development",
        "Hardware and enclosure design support",
        "Prototype assembly and testing",
        "Certification and compliance assistance",
        "Batch manufacturing and quality control support"
      ],
      // 3D printing and prototyping
      image: "https://images.unsplash.com/photo-1581822261290-991b38693d1b?w=600&h=400&fit=crop&q=80"
    }
  ];

  const panelsData = panels || defaultPanels;

  // Responsive detection
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  // Handle panel interaction
  const handlePanelClick = (index) => {
    setActiveIndex(index);
    onChange(index);
  };

  // Handle keyboard navigation
  const handleKeyDown = (event, index) => {
    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault();
      handlePanelClick(index);
    }
  };

  return (
    <>
      <style>
        {`
          /* Accordion Styles */
          .horizontal-accordion {
            display: flex;
            height: 600px;
            border-radius: 16px;
            overflow: hidden;
            box-shadow: 0 20px 40px rgba(0, 0, 0, 0.3);
            background: linear-gradient(135deg, #0A192F 0%, #000000 100%);
          }

          .accordion-panel {
            position: relative;
            transition: flex 0.6s cubic-bezier(0.25, 0.46, 0.45, 0.94);
            cursor: pointer;
            overflow: hidden;
            border-right: 1px solid rgba(255, 255, 255, 0.15);
          }

          .accordion-panel:last-child {
            border-right: none;
          }

          .accordion-panel.inactive {
            flex: 1;
          }

          .accordion-panel.active {
            flex: 4;
          }

          .panel-background {
            position: absolute;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            background-size: cover;
            background-position: center;
            background-repeat: no-repeat;
            opacity: 0.7;
            transition: opacity 0.3s ease;
          }

          .panel-overlay {
            position: absolute;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            background: linear-gradient(135deg, rgba(0, 224, 255, 0.2) 0%, rgba(10, 25, 47, 0.6) 100%);
          }

          .panel-title {
            position: absolute;
            left: 24px;
            top: 50%;
            transform: translateY(-50%) rotate(-90deg);
            transform-origin: left center;
            font-size: 18px;
            font-weight: 600;
            color: white;
            letter-spacing: 0.5px;
            white-space: nowrap;
            z-index: 10;
            transition: all 0.3s ease;
            pointer-events: none;
          }

          .panel-content {
            position: absolute;
            top: 0;
            left: 80px;
            right: 0;
            bottom: 0;
            padding: 40px;
            color: white;
            opacity: 0;
            transform: translateX(30px);
            transition: all 0.4s ease 0.2s;
            overflow-y: auto;
          }

          .accordion-panel.active .panel-content {
            opacity: 1;
            transform: translateX(0);
          }

          .accordion-panel.active .panel-title {
            opacity: 0;
          }

          .content-title {
            font-size: 32px;
            font-weight: 700;
            margin-bottom: 16px;
            line-height: 1.2;
          }

          .content-description {
            font-size: 16px;
            line-height: 1.6;
            margin-bottom: 24px;
            opacity: 0.9;
          }

          .content-offers-title {
            font-size: 20px;
            font-weight: 600;
            margin-bottom: 16px;
            color: #FFD700;
          }

          .content-offers-list {
            list-style: none;
            padding: 0;
            margin: 0;
          }

          .content-offers-item {
            position: relative;
            padding-left: 24px;
            margin-bottom: 12px;
            font-size: 14px;
            line-height: 1.5;
            opacity: 0.9;
          }

          .content-offers-item::before {
            content: "•";
            position: absolute;
            left: 0;
            color: #FFD700;
            font-weight: bold;
            font-size: 16px;
          }

          /* Mobile Styles */
          @media (max-width: 768px) {
            .horizontal-accordion {
              flex-direction: column;
              height: auto;
              border-radius: 12px;
            }

            .accordion-panel {
              flex: none !important;
              height: 80px;
              border-right: none;
              border-bottom: 1px solid rgba(255, 255, 255, 0.15);
            }

            .accordion-panel:last-child {
              border-bottom: none;
            }

            .accordion-panel.active {
              height: 400px;
            }

            .panel-title {
              position: absolute;
              left: 24px;
              top: 50%;
              transform: translateY(-50%) rotate(0deg);
              font-size: 16px;
            }

            .panel-content {
              left: 0;
              top: 80px;
              padding: 20px;
              height: calc(100% - 80px);
            }

            .content-title {
              font-size: 24px;
            }

            .content-description {
              font-size: 14px;
            }

            .content-offers-title {
              font-size: 18px;
            }
          }

          /* Focus styles for accessibility */
          .accordion-panel:focus {
            outline: 3px solid #00E0FF;
            outline-offset: -3px;
          }

          .accordion-panel:focus .panel-title {
            color: #00E0FF;
          }

          /* Hover effects for desktop */
          @media (min-width: 769px) {
            .accordion-panel:hover .panel-background {
              opacity: 0.9;
            }
            
            .accordion-panel:hover .panel-overlay {
              background: linear-gradient(135deg, rgba(0, 224, 255, 0.15) 0%, rgba(10, 25, 47, 0.4) 100%);
            }
          }
        `}
      </style>

      <section
        id="services"
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
              Innovating Beyond Boundaries
            </h2>
            <p
              className="text-xl max-w-3xl mx-auto"
              style={{ color: 'var(--text-secondary)' }}
            >
              Comprehensive services to power your digital transformation
            </p>
          </div>

          {/* Horizontal Accordion */}
          <div className="horizontal-accordion">
            {panelsData.map((panel, index) => (
              <div
                key={index}
                ref={(el) => (panelRefs.current[index] = el)}
                className={`accordion-panel ${index === activeIndex ? 'active' : 'inactive'}`}
                onClick={() => handlePanelClick(index)}
                onMouseEnter={() => !isMobile && handlePanelClick(index)}
                onKeyDown={(e) => handleKeyDown(e, index)}
                tabIndex="0"
                role="button"
                aria-expanded={index === activeIndex}
                aria-controls={`panel-content-${index}`}
                aria-label={`${panel.title} service panel`}
              >
                {/* Background Image */}
                <div 
                  className="panel-background"
                  style={{ backgroundImage: `url(${panel.image})` }}
                />
                
                {/* Overlay */}
                <div className="panel-overlay" />

                {/* Panel Title */}
                <h3 className="panel-title">
                  {panel.title}
                </h3>

                {/* Panel Content */}
                <div 
                  className="panel-content"
                  id={`panel-content-${index}`}
                >
                  <h2 className="content-title">{panel.title}</h2>
                  <p className="content-description">{panel.description}</p>
                  
                  <h3 className="content-offers-title">What We Offer:</h3>
                  <ul className="content-offers-list">
                    {panel.offers.map((offer, offerIndex) => (
                      <li key={offerIndex} className="content-offers-item">
                        {offer}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Services;