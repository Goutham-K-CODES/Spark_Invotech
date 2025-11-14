import React, { useEffect, useRef, useState } from 'react';

const AnimatedText = ({ 
  children, 
  className = '', 
  animationType = 'reveal', 
  delay = 0,
  threshold = 0.1,
  rootMargin = '0px 0px -50px 0px'
}) => {
  const [isVisible, setIsVisible] = useState(false);
  const elementRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setTimeout(() => {
              setIsVisible(true);
            }, delay);
          }
        });
      },
      {
        threshold,
        rootMargin
      }
    );

    if (elementRef.current) {
      observer.observe(elementRef.current);
    }

    return () => observer.disconnect();
  }, [delay, threshold, rootMargin]);

  const getAnimationClass = () => {
    const baseClass = `animate-text-${animationType}`;
    const visibleClass = isVisible ? 'visible' : '';
    return `${baseClass} ${visibleClass}`;
  };

  return (
    <div 
      ref={elementRef} 
      className={`${getAnimationClass()} ${className}`}
    >
      {children}
    </div>
  );
};

export default AnimatedText;