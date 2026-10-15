import React from 'react';
import { motion, Variants } from 'motion/react';

interface SectionHeaderProps {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  align?: 'center' | 'left';
  theme?: 'dark' | 'light';
  className?: string;
}

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.05,
    },
  },
};

const eyebrowVariants: Variants = {
  hidden: { opacity: 0, y: 15, filter: 'blur(3px)' },
  visible: {
    opacity: 1,
    y: 0,
    filter: 'blur(0px)',
    transition: {
      duration: 0.6,
      ease: [0.25, 0.1, 0.25, 1],
    },
  },
};

const titleVariants: Variants = {
  hidden: { opacity: 0, y: 35, scale: 0.98, filter: 'blur(4px)' },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    filter: 'blur(0px)',
    transition: {
      duration: 0.75,
      ease: [0.25, 0.1, 0.25, 1],
    },
  },
};

const subtitleVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      ease: [0.25, 0.1, 0.25, 1],
    },
  },
};

export const SectionHeader: React.FC<SectionHeaderProps> = ({
  eyebrow,
  title,
  subtitle,
  align = 'center',
  theme = 'dark',
  className = '',
}) => {
  const isLight = theme === 'light';
  const alignmentClasses =
    align === 'center' ? 'text-center mx-auto items-center' : 'text-left items-start';

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-60px' }}
      className={`flex flex-col ${alignmentClasses} ${className}`}
    >
      {/* 1. Staggered Eyebrow / Tag */}
      {eyebrow && (
        <motion.div variants={eyebrowVariants} className="mb-2.5">
          <span
            className={`inline-block text-xs font-mono uppercase tracking-[0.25em] px-3 py-1 rounded-full border ${
              isLight
                ? 'bg-black/5 text-[#0C0C0C]/70 border-black/10'
                : 'bg-white/5 text-[#BBCCD7]/75 border-white/10'
            }`}
          >
            {eyebrow}
          </span>
        </motion.div>
      )}

      {/* 2. Staggered Main Title */}
      <motion.h2
        variants={titleVariants}
        className={`font-bold tracking-tight leading-tight ${
          isLight ? 'text-[#0C0C0C]' : 'hero-heading'
        }`}
        style={{ fontSize: 'clamp(2.2rem, 5.5vw, 68px)' }}
      >
        {title}
      </motion.h2>

      {/* 3. Staggered Subtitle / Description */}
      {subtitle && (
        <motion.p
          variants={subtitleVariants}
          className={`mt-4 font-light text-sm sm:text-base md:text-lg leading-relaxed max-w-2xl ${
            isLight ? 'text-[#0C0C0C]/65' : 'text-[#D7E2EA]/75'
          }`}
        >
          {subtitle}
        </motion.p>
      )}
    </motion.div>
  );
};
