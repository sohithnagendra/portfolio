import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'motion/react';
import { FadeIn } from './FadeIn.tsx';
import { SectionHeader } from './SectionHeader.tsx';
import { AnimatedText } from './AnimatedText.tsx';
import { ContactButton } from './ContactButton.tsx';
import { Calendar, GraduationCap, Sparkles, FolderGit2 } from 'lucide-react';

interface AboutSectionProps {
  onContactClick?: () => void;
}

export const AboutSection: React.FC<AboutSectionProps> = ({ onContactClick }) => {
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start end', 'end start'],
  });

  // Parallax transforms for the 4 corner 3D elements
  const moonY = useTransform(scrollYProgress, [0, 1], [-45, 65]);
  const moonRotate = useTransform(scrollYProgress, [0, 1], [-10, 14]);

  const legoY = useTransform(scrollYProgress, [0, 1], [-65, 45]);
  const legoRotate = useTransform(scrollYProgress, [0, 1], [12, -14]);

  const objBottomLeftY = useTransform(scrollYProgress, [0, 1], [35, -55]);
  const objBottomRightY = useTransform(scrollYProgress, [0, 1], [50, -70]);

  // Ambient backdrop glow parallax
  const ambientGlowY = useTransform(scrollYProgress, [0, 1], [-70, 70]);

  const highlights = [
    {
      label: '2029',
      subtitle: 'Expected Graduation',
      icon: <Calendar className="w-5 h-5 text-cyan-400" />,
    },
    {
      label: 'CSE',
      subtitle: 'Computer Science & Engineering',
      icon: <GraduationCap className="w-5 h-5 text-purple-400" />,
    },
    {
      label: 'AI + Web',
      subtitle: 'Primary Focus Areas',
      icon: <Sparkles className="w-5 h-5 text-amber-400" />,
    },
    {
      label: 'Practical',
      subtitle: 'Hands-on Learning Approach',
      icon: <FolderGit2 className="w-5 h-5 text-emerald-400" />,
    },
  ];

  const bioText =
    "I'm T. Sohith Nagendra, a Computer Science and Engineering student at KL University with a strong interest in software development, artificial intelligence, and modern web technologies. I enjoy transforming ideas into functional applications, experimenting with new technologies, and building projects that combine creativity with practical problem-solving. Let's build something incredible together!";

  return (
    <section
      ref={sectionRef}
      id="about"
      className="relative min-h-screen flex flex-col items-center justify-center px-5 sm:px-8 md:px-10 py-24 sm:py-28 md:py-36 bg-[#0C0C0C] overflow-hidden select-none"
    >
      {/* Ambient Parallax Glow Aura */}
      <motion.div
        style={{ y: ambientGlowY }}
        className="absolute w-[500px] h-[500px] rounded-full bg-gradient-to-tr from-purple-600/10 via-cyan-500/10 to-transparent blur-[120px] pointer-events-none"
      />

      {/* 4 Decorative 3D elements in corners with scroll parallax */}
      {/* Top-Left: Moon icon */}
      <div className="absolute top-[4%] left-[1%] sm:left-[2%] md:left-[4%] pointer-events-none z-0">
        <motion.div style={{ y: moonY, rotate: moonRotate, willChange: 'transform' }}>
          <FadeIn delay={0.1} x={-80} y={0} duration={0.9}>
            <img
              src="https://shrug-person-78902957.figma.site/_components/v2/ebb2b8f25d8e24d5f0a5ca8af4c950de81aa2fd7/moon_icon.11395d36.png"
              alt="3D Moon Object"
              className="w-[110px] sm:w-[150px] md:w-[200px] object-contain drop-shadow-[0_10px_30px_rgba(0,0,0,0.8)] filter brightness-95"
              loading="lazy"
            />
          </FadeIn>
        </motion.div>
      </div>

      {/* Bottom-Left: 3D Object */}
      <div className="absolute bottom-[6%] left-[2%] sm:left-[5%] md:left-[8%] pointer-events-none z-0">
        <motion.div style={{ y: objBottomLeftY, willChange: 'transform' }}>
          <FadeIn delay={0.25} x={-80} y={0} duration={0.9}>
            <img
              src="https://shrug-person-78902957.figma.site/_components/v2/ebb2b8f25d8e24d5f0a5ca8af4c950de81aa2fd7/p59_1.4659672e.png"
              alt="3D Geometric Object"
              className="w-[90px] sm:w-[130px] md:w-[170px] object-contain drop-shadow-[0_10px_30px_rgba(0,0,0,0.8)] filter brightness-95"
              loading="lazy"
            />
          </FadeIn>
        </motion.div>
      </div>

      {/* Top-Right: Lego icon */}
      <div className="absolute top-[4%] right-[1%] sm:right-[2%] md:right-[4%] pointer-events-none z-0">
        <motion.div style={{ y: legoY, rotate: legoRotate, willChange: 'transform' }}>
          <FadeIn delay={0.15} x={80} y={0} duration={0.9}>
            <img
              src="https://shrug-person-78902957.figma.site/_components/v2/ebb2b8f25d8e24d5f0a5ca8af4c950de81aa2fd7/lego_icon-1.703bb594.png"
              alt="3D Tech Cube"
              className="w-[110px] sm:w-[150px] md:w-[200px] object-contain drop-shadow-[0_10px_30px_rgba(0,0,0,0.8)] filter brightness-95"
              loading="lazy"
            />
          </FadeIn>
        </motion.div>
      </div>

      {/* Bottom-Right: 3D Group */}
      <div className="absolute bottom-[6%] right-[2%] sm:right-[5%] md:right-[8%] pointer-events-none z-0">
        <motion.div style={{ y: objBottomRightY, willChange: 'transform' }}>
          <FadeIn delay={0.3} x={80} y={0} duration={0.9}>
            <img
              src="https://shrug-person-78902957.figma.site/_components/v2/ebb2b8f25d8e24d5f0a5ca8af4c950de81aa2fd7/Group_134-1.2e04f3ce.png"
              alt="3D Abstract Group"
              className="w-[120px] sm:w-[160px] md:w-[210px] object-contain drop-shadow-[0_10px_30px_rgba(0,0,0,0.8)] filter brightness-95"
              loading="lazy"
            />
          </FadeIn>
        </motion.div>
      </div>

      {/* Center content container */}
      <div className="relative z-10 max-w-4xl mx-auto flex flex-col items-center gap-10 sm:gap-14 md:gap-16 text-center">
        {/* Section Heading with Staggered Entrance */}
        <SectionHeader
          eyebrow="// 01 · IDENTITY & VISION"
          title="About me"
        />

        {/* Character-by-character animated paragraph */}
        <div className="max-w-[560px] px-4">
          <AnimatedText
            text={bioText}
            className="text-[#D7E2EA] font-medium leading-relaxed"
          />
        </div>

        {/* Highlight cards */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4 w-full max-w-3xl pt-2">
          {highlights.map((item, idx) => (
            <motion.div
              key={item.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.15 * idx, duration: 0.6 }}
              whileHover={{ y: -4, borderColor: 'rgba(182, 0, 168, 0.4)' }}
              className="bg-[#121319]/80 border border-white/10 rounded-2xl p-4 sm:p-5 flex flex-col items-center justify-center text-center shadow-lg backdrop-blur-sm transition-all"
            >
              <div className="p-2 rounded-xl bg-white/5 mb-2.5">{item.icon}</div>
              <span className="text-xl sm:text-2xl font-bold text-white tracking-tight">
                {item.label}
              </span>
              <span className="text-[11px] sm:text-xs text-[#BBCCD7]/70 font-mono mt-1">
                {item.subtitle}
              </span>
            </motion.div>
          ))}
        </div>

        {/* Contact button below the text block */}
        <div className="pt-6 sm:pt-10">
          <ContactButton
            label="Get in Touch"
            href="#contact"
            onClick={onContactClick}
            showIcon={true}
          />
        </div>
      </div>
    </section>
  );
};
