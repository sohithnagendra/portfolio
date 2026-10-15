import React from 'react';
import { motion } from 'motion/react';
import { ArrowUpRight } from 'lucide-react';

interface ContactButtonProps {
  label?: string;
  href?: string;
  onClick?: () => void;
  className?: string;
  showIcon?: boolean;
}

export const ContactButton: React.FC<ContactButtonProps> = ({
  label = "Let's Connect",
  href,
  onClick,
  className = '',
  showIcon = false,
}) => {
  const content = (
    <motion.button
      whileHover={{ scale: 1.04 }}
      whileTap={{ scale: 0.96 }}
      onClick={onClick}
      className={`relative inline-flex items-center justify-center gap-2 rounded-full px-8 py-3 sm:px-10 sm:py-3.5 md:px-12 md:py-4 text-xs sm:text-sm md:text-base font-medium uppercase tracking-widest text-white transition-all duration-300 contact-btn-glow cursor-pointer ${className}`}
      style={{
        background: 'linear-gradient(123deg, #18011F 7%, #B600A8 37%, #7621B0 72%, #BE4C00 100%)',
        boxShadow: '0px 4px 4px rgba(181, 1, 167, 0.25), 4px 4px 12px #7721B1 inset',
        outline: '2px solid rgba(255, 255, 255, 0.9)',
        outlineOffset: '-3px',
      }}
    >
      <span>{label}</span>
      {showIcon && <ArrowUpRight className="w-4 h-4 text-white/90" />}
    </motion.button>
  );

  if (href) {
    return (
      <a href={href} className="inline-block text-decoration-none">
        {content}
      </a>
    );
  }

  return content;
};
