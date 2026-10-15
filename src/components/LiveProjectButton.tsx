import React, { ReactNode } from 'react';
import { motion } from 'motion/react';
import { ExternalLink } from 'lucide-react';

interface LiveProjectButtonProps {
  label?: string;
  href?: string;
  onClick?: () => void;
  className?: string;
  icon?: ReactNode;
}

export const LiveProjectButton: React.FC<LiveProjectButtonProps> = ({
  label = 'Live Demo',
  href,
  onClick,
  className = '',
  icon,
}) => {
  const content = (
    <motion.button
      whileHover={{ scale: 1.03 }}
      whileTap={{ scale: 0.97 }}
      onClick={onClick}
      className={`relative inline-flex items-center justify-center gap-2 rounded-full border-2 border-[#D7E2EA] px-8 py-3 sm:px-10 sm:py-3.5 text-sm sm:text-base font-medium uppercase tracking-widest text-[#D7E2EA] hover:bg-[#D7E2EA]/10 transition-all duration-200 cursor-pointer ${className}`}
    >
      <span>{label}</span>
      {icon || <ExternalLink className="w-4 h-4 text-[#D7E2EA]/80" />}
    </motion.button>
  );

  if (href) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-block text-decoration-none"
      >
        {content}
      </a>
    );
  }

  return content;
};
