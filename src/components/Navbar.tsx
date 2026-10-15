import React from 'react';
import { motion } from 'motion/react';

interface NavbarProps {
  onContactClick?: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onContactClick }) => {
  const navItems = [
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <motion.nav
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, delay: 0, ease: [0.25, 0.1, 0.25, 1] }}
      className="w-full flex items-center justify-between px-6 md:px-10 pt-6 md:pt-8 z-30 select-none"
    >
      {navItems.map((item) => (
        <a
          key={item.name}
          href={item.href}
          onClick={(e) => {
            if (item.name === 'Contact' && onContactClick) {
              // smooth scroll or open modal
            }
          }}
          className="text-[#D7E2EA]/80 font-medium text-sm md:text-base hover:text-white transition-colors duration-200 cursor-pointer"
        >
          {item.name}
        </a>
      ))}
    </motion.nav>
  );
};
