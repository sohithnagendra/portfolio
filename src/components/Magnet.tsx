import React, { useRef, ReactNode, useEffect } from 'react';
import { motion, useMotionValue, useSpring } from 'motion/react';

interface MagnetProps {
  children: ReactNode;
  padding?: number;
  strength?: number;
  className?: string;
  activeTransition?: string;
  inactiveTransition?: string;
}

export const Magnet: React.FC<MagnetProps> = ({
  children,
  padding = 150,
  strength = 3,
  className = '',
}) => {
  const ref = useRef<HTMLDivElement>(null);

  // Framer Motion motion values for X and Y coordinates
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  // Framer Motion springs for smooth, natural physics-based tracking and return
  const springConfig = { damping: 18, stiffness: 180, mass: 0.15 };
  const smoothX = useSpring(x, springConfig);
  const smoothY = useSpring(y, springConfig);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!ref.current) return;

      const rect = ref.current.getBoundingClientRect();
      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height / 2;

      const distFromLeft = rect.left - e.clientX;
      const distFromRight = e.clientX - rect.right;
      const distFromTop = rect.top - e.clientY;
      const distFromBottom = e.clientY - rect.bottom;

      const isNear =
        distFromLeft <= padding &&
        distFromRight <= padding &&
        distFromTop <= padding &&
        distFromBottom <= padding;

      if (isNear) {
        const deltaX = (e.clientX - centerX) / strength;
        const deltaY = (e.clientY - centerY) / strength;
        x.set(deltaX);
        y.set(deltaY);
      } else {
        x.set(0);
        y.set(0);
      }
    };

    const handleMouseLeave = () => {
      x.set(0);
      y.set(0);
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    window.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, [padding, strength, x, y]);

  return (
    <motion.div
      ref={ref}
      style={{
        x: smoothX,
        y: smoothY,
        willChange: 'transform',
      }}
      className={`inline-block ${className}`}
    >
      {children}
    </motion.div>
  );
};
