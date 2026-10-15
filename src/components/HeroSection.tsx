import React from 'react';
import { motion } from 'motion/react';
import { Navbar } from './Navbar.tsx';
import { Magnet } from './Magnet.tsx';
import { HeroCenterpiece } from './HeroCenterpiece.tsx';
import { ContactButton } from './ContactButton.tsx';
import { ArrowDown } from 'lucide-react';

interface HeroSectionProps {
  onContactClick?: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ onContactClick }) => {
  return (
    <section className="relative h-screen min-h-[660px] max-h-[1100px] flex flex-col justify-between overflow-x-clip bg-[#0C0C0C] select-none">
      {/* Background subtle radial gradient */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] bg-gradient-to-b from-[#7621B0]/15 via-[#B600A8]/10 to-transparent blur-[120px] pointer-events-none" />

      {/* Top Navbar */}
      <Navbar onContactClick={onContactClick} />

      {/* Main Massive Hero Heading */}
      <div className="w-full overflow-hidden mt-4 sm:mt-2 md:-mt-4 z-0 text-center px-2">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.15, ease: [0.25, 0.1, 0.25, 1] }}
          className="w-full"
        >
          <h1 className="hero-heading font-extrabold tracking-tight leading-none whitespace-nowrap w-full text-[11vw] sm:text-[12.5vw] md:text-[13.5vw] lg:text-[14vw]">
            Hi, I&apos;m Sohith
          </h1>
          <p className="text-[#BBCCD7]/75 font-medium tracking-wide text-xs sm:text-sm md:text-base lg:text-lg mt-1 sm:mt-2">
            Computer Science Student · Full-Stack Developer · AI Enthusiast
          </p>
        </motion.div>
      </div>

      {/* Centerpiece with Magnet Hover Effect */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
        className="absolute left-1/2 -translate-x-1/2 z-10 w-[280px] sm:w-[360px] md:w-[440px] lg:w-[500px] top-1/2 -translate-y-1/2 sm:top-auto sm:translate-y-0 sm:bottom-0 pointer-events-none"
      >
        <Magnet
          padding={150}
          strength={3}
          className="w-full pointer-events-auto"
        >
          <HeroCenterpiece />
        </Magnet>
      </motion.div>

      {/* Bottom bar */}
      <div className="w-full flex justify-between items-end px-6 md:px-10 pb-7 sm:pb-8 md:pb-10 z-20">
        {/* Left text */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.35, ease: [0.25, 0.1, 0.25, 1] }}
          className="max-w-[190px] sm:max-w-[280px] md:max-w-[360px]"
        >
          <p className="text-[#D7E2EA]/85 font-normal leading-relaxed text-xs sm:text-sm md:text-base">
            A computer science student passionate about building intelligent applications, creative digital experiences, and technology that solves real-world problems.
          </p>
        </motion.div>

        {/* Right CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.5, ease: [0.25, 0.1, 0.25, 1] }}
          className="flex flex-col sm:flex-row items-end sm:items-center gap-3"
        >
          <a
            href="#projects"
            className="hidden sm:inline-flex items-center gap-1.5 text-xs md:text-sm font-medium uppercase tracking-widest text-[#D7E2EA]/70 hover:text-white transition-colors duration-200 px-3 py-2"
          >
            <span>Explore Work</span>
            <ArrowDown className="w-3.5 h-3.5" />
          </a>
          <ContactButton
            label="Let's Connect"
            href="#contact"
            onClick={onContactClick}
            showIcon={true}
          />
        </motion.div>
      </div>
    </section>
  );
};
