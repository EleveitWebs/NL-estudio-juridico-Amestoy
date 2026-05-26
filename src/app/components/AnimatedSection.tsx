'use client';

import { useIntersectionObserver } from '../hooks/useIntersectionObserver';
import { ReactNode } from 'react';

interface AnimatedSectionProps {
  children: ReactNode;
  animationClass: string;
  delay?: number;
  className?: string;
}

export const AnimatedSection = ({ 
  children, 
  animationClass, 
  delay = 0, 
  className = '' 
}: AnimatedSectionProps) => {
  const [ref, , hasIntersected] = useIntersectionObserver();

  return (
    <div
      ref={ref}
      className={`${className} ${
        hasIntersected ? animationClass : 'opacity-0 translate-y-8'
      }`}
      style={{
        transitionDelay: `${delay}ms`,
        transitionDuration: '0.6s',
        transitionTimingFunction: 'cubic-bezier(0.4, 0, 0.2, 1)',
      }}
    >
      {children}
    </div>
  );
};






