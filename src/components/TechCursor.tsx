import React, { useEffect, useState } from 'react';
import { motion, useMotionValue, useSpring } from 'motion/react';

export const TechCursor: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const [isClicking, setIsClicking] = useState(false);
  const [isTouchDevice, setIsTouchDevice] = useState(false);

  // Raw mouse coordinates
  const mouseX = useMotionValue(-100);
  const mouseY = useMotionValue(-100);

  // Ultra-responsive spring physics
  const springConfig = { damping: 28, stiffness: 450, mass: 0.1 };
  const smoothX = useSpring(mouseX, springConfig);
  const smoothY = useSpring(mouseY, springConfig);

  useEffect(() => {
    // Only show on desktop pointer devices
    const touchCheck = window.matchMedia('(hover: none) or (pointer: coarse)');
    if (touchCheck.matches) {
      setIsTouchDevice(true);
      return;
    }

    const handleMouseMove = (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
      if (!isVisible) setIsVisible(true);

      // Check if target element is interactive
      const target = e.target as HTMLElement | null;
      if (target) {
        const interactive = target.closest('a, button, input, textarea, [role="button"], .cursor-pointer');
        setIsHovered(!!interactive);
      }
    };

    const handleMouseDown = () => setIsClicking(true);
    const handleMouseUp = () => setIsClicking(false);
    const handleMouseLeave = () => setIsVisible(false);
    const handleMouseEnter = () => setIsVisible(true);

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    window.addEventListener('mousedown', handleMouseDown);
    window.addEventListener('mouseup', handleMouseUp);
    document.addEventListener('mouseleave', handleMouseLeave);
    document.addEventListener('mouseenter', handleMouseEnter);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mousedown', handleMouseDown);
      window.removeEventListener('mouseup', handleMouseUp);
      document.removeEventListener('mouseleave', handleMouseLeave);
      document.removeEventListener('mouseenter', handleMouseEnter);
    };
  }, [isVisible, mouseX, mouseY]);

  if (isTouchDevice) return null;

  return (
    <motion.div
      style={{
        x: smoothX,
        y: smoothY,
        translateX: '-50%',
        translateY: '-50%',
        opacity: isVisible ? 1 : 0,
      }}
      className="fixed top-0 left-0 pointer-events-none z-[9999] select-none transition-opacity duration-200"
    >
      <motion.svg
        width="38"
        height="38"
        viewBox="0 0 48 48"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        animate={{
          scale: isClicking ? 0.82 : isHovered ? 1.18 : 1,
          rotate: isHovered ? 45 : 0,
        }}
        transition={{
          type: 'spring',
          damping: 20,
          stiffness: 300,
        }}
        className="drop-shadow-[0_2px_8px_rgba(0,0,0,0.85)] filter"
      >
        {/* Top capsule bar */}
        <motion.rect
          x="21.5"
          y={isHovered ? 1 : 4}
          width="5"
          height="13"
          rx="2.5"
          fill="#5D6C8E"
          stroke="#000000"
          strokeWidth="2"
          transition={{ duration: 0.2 }}
        />

        {/* Bottom capsule bar */}
        <motion.rect
          x="21.5"
          y={isHovered ? 34 : 31}
          width="5"
          height="13"
          rx="2.5"
          fill="#5D6C8E"
          stroke="#000000"
          strokeWidth="2"
          transition={{ duration: 0.2 }}
        />

        {/* Left capsule bar */}
        <motion.rect
          x={isHovered ? 1 : 4}
          y="21.5"
          width="13"
          height="5"
          rx="2.5"
          fill="#5D6C8E"
          stroke="#000000"
          strokeWidth="2"
          transition={{ duration: 0.2 }}
        />

        {/* Right capsule bar */}
        <motion.rect
          x={isHovered ? 34 : 31}
          y="21.5"
          width="13"
          height="5"
          rx="2.5"
          fill="#5D6C8E"
          stroke="#000000"
          strokeWidth="2"
          transition={{ duration: 0.2 }}
        />

        {/* Center glowing dot with dark outline */}
        <circle
          cx="24"
          cy="24"
          r={isHovered ? 4 : 3.2}
          fill={isHovered ? '#00f2fe' : '#FF4B72'}
          stroke="#000000"
          strokeWidth="2"
          className="transition-colors duration-200"
        />

        {/* Subtle center dot specular shine */}
        <circle
          cx="23.2"
          cy="23.2"
          r="1"
          fill="#FFFFFF"
          opacity="0.7"
        />
      </motion.svg>
    </motion.div>
  );
};
