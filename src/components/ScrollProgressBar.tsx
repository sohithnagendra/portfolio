import React from 'react';
import { motion, useScroll, useSpring } from 'motion/react';

export const ScrollProgressBar: React.FC = () => {
  const { scrollYProgress } = useScroll();

  const scaleX = useSpring(scrollYProgress, {
    stiffness: 120,
    damping: 25,
    restDelta: 0.001,
  });

  return (
    <div className="fixed top-0 left-0 right-0 z-50 pointer-events-none h-[3px] bg-white/5 backdrop-blur-xs">
      <motion.div
        style={{ scaleX }}
        className="w-full h-full origin-left bg-gradient-to-r from-[#B600A8] via-[#7621B0] to-[#00f2fe] shadow-[0_0_12px_rgba(182,0,168,0.85)]"
      />
    </div>
  );
};
