import React, { useRef, useState } from 'react';
import { motion, useScroll, useTransform, MotionValue } from 'motion/react';
import { FadeIn } from './FadeIn.tsx';
import { SectionHeader } from './SectionHeader.tsx';
import { LiveProjectButton } from './LiveProjectButton.tsx';
import {
  ExternalLink,
  Github,
  Sparkles,
  Shield,
  Mic,
  Cpu,
  Terminal,
  Activity,
} from 'lucide-react';

interface ProjectData {
  number: string;
  name: string;
  category: string;
  shortDesc: string;
  fullDesc: string;
  tech: string[];
  liveUrl?: string;
  githubUrl: string;
  accentColor: string;
  renderPreview: (isExpanded: boolean) => React.ReactNode;
}

interface ProjectCardProps {
  project: ProjectData;
  index: number;
  totalCards: number;
  scrollYProgress: MotionValue<number>;
}

const ProjectCard: React.FC<ProjectCardProps> = ({
  project,
  index,
  totalCards,
  scrollYProgress,
}) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const [mousePosition, setMousePosition] = useState<{ x: number; y: number } | null>(null);
  const [isHovered, setIsHovered] = useState(false);

  const targetScale = 1 - (totalCards - 1 - index) * 0.035;

  const cardProgressStart = index / totalCards;
  const cardProgressEnd = (index + 1) / totalCards;

  const scale = useTransform(
    scrollYProgress,
    [cardProgressStart, cardProgressEnd],
    [1, targetScale]
  );

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setMousePosition({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };

  return (
    <div
      ref={cardRef}
      style={{
        top: `${index * 28 + 90}px`,
      }}
      className="sticky w-full mb-16 will-change-transform"
    >
      <motion.div
        style={{ scale }}
        onMouseMove={handleMouseMove}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => {
          setIsHovered(false);
          setMousePosition(null);
        }}
        className="w-full rounded-[36px] sm:rounded-[48px] md:rounded-[56px] border border-[#D7E2EA]/30 hover:border-[#D7E2EA]/60 bg-[#0E1015]/95 p-5 sm:p-7 md:p-9 shadow-2xl backdrop-blur-xl relative overflow-hidden transition-colors duration-300"
      >
        {/* Interactive Mouse-following Light Gradient Reveal */}
        <div
          className="absolute inset-0 pointer-events-none transition-opacity duration-500 z-0"
          style={{
            opacity: isHovered && mousePosition ? 1 : 0,
            background: mousePosition
              ? `radial-gradient(600px circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(0, 242, 254, 0.12), rgba(182, 0, 168, 0.08), transparent 70%)`
              : 'none',
          }}
        />

        {/* Ambient background glow inside card */}
        <div
          className={`absolute -right-24 -top-24 w-96 h-96 rounded-full blur-[100px] pointer-events-none opacity-20 bg-gradient-to-br ${project.accentColor}`}
        />

        {/* TOP ROW: Number, Category, Name, Live / Source Buttons */}
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 pb-6 border-b border-[#D7E2EA]/15 relative z-10">
          <div className="flex items-center gap-4 sm:gap-6">
            <span
              className="font-bold leading-none text-[#D7E2EA]/70 select-none"
              style={{ fontSize: 'clamp(1.8rem, 3.5vw, 42px)' }}
            >
              {project.number}
            </span>

            <div className="flex flex-col">
              <span className="text-xs font-mono uppercase tracking-wider text-[#BBCCD7]/70">
                {project.category}
              </span>
              <h3 className="text-xl sm:text-2xl md:text-3xl font-bold tracking-tight text-white mt-0.5">
                {project.name}
              </h3>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-wrap items-center gap-3">
            {project.liveUrl && (
              <LiveProjectButton
                label="Live Demo"
                href={project.liveUrl}
                icon={<ExternalLink className="w-4 h-4 text-[#D7E2EA]" />}
              />
            )}
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-white/20 px-6 py-3 text-xs sm:text-sm font-medium uppercase tracking-widest text-[#D7E2EA]/90 hover:bg-white/10 hover:text-white transition-all duration-200"
            >
              <Github className="w-4 h-4" />
              <span>Source Code</span>
            </a>
          </div>
        </div>

        {/* BOTTOM ROW: Two-column grid (40% / 60%) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 pt-6 relative z-10">
          {/* Left Column (40% -> 5 cols on lg) */}
          <div className="lg:col-span-5 flex flex-col justify-between gap-6">
            <div className="flex flex-col gap-3">
              <p className="text-base sm:text-lg text-white font-medium leading-snug">
                {project.shortDesc}
              </p>
              <p className="text-sm text-[#D7E2EA]/70 font-light leading-relaxed">
                {project.fullDesc}
              </p>
            </div>

            {/* Tech badges */}
            <div className="flex flex-col gap-2.5">
              <span className="text-xs font-mono uppercase tracking-widest text-[#BBCCD7]/60">
                Technologies & Architecture
              </span>
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: '-40px' }}
                variants={{
                  hidden: { opacity: 0 },
                  visible: {
                    opacity: 1,
                    transition: {
                      staggerChildren: 0.08,
                      delayChildren: 0.15,
                    },
                  },
                }}
                className="flex flex-wrap gap-2"
              >
                {project.tech.map((t) => (
                  <motion.span
                    key={t}
                    variants={{
                      hidden: { opacity: 0, y: 12, scale: 0.88 },
                      visible: {
                        opacity: 1,
                        y: 0,
                        scale: 1,
                        transition: {
                          duration: 0.45,
                          ease: [0.25, 0.1, 0.25, 1],
                        },
                      },
                    }}
                    whileHover={{ y: -2, backgroundColor: 'rgba(255, 255, 255, 0.1)' }}
                    className="px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-mono text-[#D7E2EA] transition-colors cursor-default"
                  >
                    {t}
                  </motion.span>
                ))}
              </motion.div>
            </div>
          </div>

          {/* Right Column (60% -> 7 cols on lg): Custom High-Tech Visual Preview */}
          <div className="lg:col-span-7 rounded-[28px] sm:rounded-[36px] overflow-hidden bg-[#13151D] border border-white/10 p-4 sm:p-5 flex flex-col justify-center min-h-[320px] sm:min-h-[380px] relative">
            {project.renderPreview(false)}
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export const ProjectsSection: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end end'],
  });

  // Interactive state for GenZify live simulator in card
  const [inputText, setInputText] = useState('This project is really awesome and impressive.');
  const [outputStyle, setOutputStyle] = useState('no cap this project is straight bussin fr fr lowkey fire 10/10 no debate 💀🔥');

  const handleGenZTransform = (val: string) => {
    setInputText(val);
    const presets: Record<string, string> = {
      'This project is really awesome and impressive.':
        'no cap this project is straight bussin fr fr lowkey fire 10/10 no debate 💀🔥',
      'I will see you tomorrow at school.':
        'catch u tmrw bestie, we lockin in on god 🫡✨',
      'Please tell me the truth about this situation.':
        'spill the tea bestie stop gatekeepin rn fr 👀🍵',
    };
    if (presets[val]) {
      setOutputStyle(presets[val]);
    } else {
      setOutputStyle(`literally so valid bestie, '${val}' hits different fr 💅🔥`);
    }
  };

  const projects: ProjectData[] = [
    {
      number: '01',
      name: 'GenZify',
      category: 'AI-Powered Web Application',
      shortDesc: 'Transform ordinary text into expressive Gen-Z-style language using AI.',
      fullDesc:
        'GenZify combines a lightweight web interface with a Python Flask backend and AI API integration. Users enter text, submit it for transformation, and receive an adapted, colloquial version through a simple, responsive workflow.',
      tech: ['HTML', 'CSS', 'JavaScript', 'Python', 'Flask', 'AI API Integration'],
      liveUrl: 'https://genzconverterr.netlify.app/',
      githubUrl: 'https://github.com/sohith1437/genzify',
      accentColor: 'from-[#B600A8] to-[#BE4C00]',
      renderPreview: () => (
        <div className="w-full h-full flex flex-col justify-between gap-4">
          <div className="flex items-center justify-between pb-3 border-b border-white/10">
            <div className="flex items-center gap-2">
              <span className="w-3 h-3 rounded-full bg-rose-500/80" />
              <span className="w-3 h-3 rounded-full bg-amber-500/80" />
              <span className="w-3 h-3 rounded-full bg-emerald-500/80" />
              <span className="text-xs font-mono text-[#D7E2EA]/60 ml-2">genzconverterr.netlify.app</span>
            </div>
            <span className="text-[11px] font-mono px-2 py-0.5 rounded-full bg-[#B600A8]/20 text-[#B600A8] border border-[#B600A8]/30">
              AI SLANG ENGINE
            </span>
          </div>

          <div className="space-y-3 font-mono">
            {/* Input Box simulation */}
            <div className="bg-[#0C0C0C]/80 rounded-2xl p-3 border border-white/10">
              <div className="flex items-center justify-between text-[11px] text-zinc-400 mb-1">
                <span>INPUT FORMAL TEXT</span>
                <span className="text-xs text-purple-400">Sample prompt</span>
              </div>
              <input
                type="text"
                value={inputText}
                onChange={(e) => handleGenZTransform(e.target.value)}
                className="w-full bg-transparent text-sm text-white focus:outline-none"
              />
            </div>

            {/* Quick preset pills */}
            <div className="flex flex-wrap gap-1.5 text-[10px]">
              <button
                onClick={() => handleGenZTransform('This project is really awesome and impressive.')}
                className="px-2.5 py-1 rounded-lg bg-white/5 hover:bg-white/10 text-zinc-300 transition-colors"
              >
                &ldquo;This is awesome...&rdquo;
              </button>
              <button
                onClick={() => handleGenZTransform('Please tell me the truth about this situation.')}
                className="px-2.5 py-1 rounded-lg bg-white/5 hover:bg-white/10 text-zinc-300 transition-colors"
              >
                &ldquo;Tell me the truth...&rdquo;
              </button>
            </div>

            {/* AI Output Box */}
            <div className="bg-gradient-to-br from-[#1b1129] to-[#120a1f] rounded-2xl p-4 border border-[#B600A8]/40 shadow-inner">
              <div className="flex items-center gap-2 text-[11px] text-[#BBCCD7]/70 mb-1.5">
                <Sparkles className="w-3.5 h-3.5 text-purple-400" />
                <span className="uppercase tracking-wider font-semibold">GEN-Z ADAPTATION</span>
              </div>
              <p className="text-base sm:text-lg font-bold text-white tracking-wide leading-snug">
                &ldquo;{outputStyle}&rdquo;
              </p>
            </div>
          </div>

          <div className="flex items-center justify-between text-[11px] text-zinc-400 font-mono pt-2">
            <span>Flask REST endpoint // status: 200 OK</span>
            <span className="text-emerald-400">⚡ Live on Netlify</span>
          </div>
        </div>
      ),
    },
    {
      number: '02',
      name: 'Ghost Confessions',
      category: 'Anonymous Social Web Application',
      shortDesc: 'An anonymous confession platform designed for campus communities.',
      fullDesc:
        'Ghost Confessions is a web platform centered on anonymous expression and campus-oriented social interaction. It explores how users can share thoughts without exposing personal identity, using privacy-conscious interface design and community aesthetics.',
      tech: ['HTML5', 'CSS3', 'JavaScript', 'Responsive Web Design', 'Web APIs'],
      liveUrl: 'https://secret-confessionn.netlify.app/',
      githubUrl: 'https://github.com/sohith1437/confessionpage',
      accentColor: 'from-[#7621B0] to-[#00f2fe]',
      renderPreview: () => (
        <div className="w-full h-full flex flex-col justify-between gap-4">
          <div className="flex items-center justify-between pb-3 border-b border-white/10">
            <div className="flex items-center gap-2">
              <Shield className="w-4 h-4 text-cyan-400" />
              <span className="text-xs font-mono text-[#D7E2EA]/70">secret-confessionn.netlify.app</span>
            </div>
            <span className="text-[11px] font-mono px-2 py-0.5 rounded-full bg-cyan-500/10 text-cyan-300 border border-cyan-500/30">
              ZERO-IDENTITY FEED
            </span>
          </div>

          {/* Simulated Campus Confession Cards */}
          <div className="space-y-3">
            <div className="rounded-2xl bg-[#0a0a0f] border border-white/10 p-3.5 shadow-md">
              <div className="flex items-center justify-between text-[11px] text-zinc-400 font-mono mb-1.5">
                <span className="flex items-center gap-1.5 text-purple-400">
                  <span className="w-2 h-2 rounded-full bg-purple-400" />
                  Ghost #2941 · KL University
                </span>
                <span>12m ago</span>
              </div>
              <p className="text-sm text-zinc-200">
                &ldquo;Honestly the late-night lab coding sessions in CSE block hits different when everyone is debugging together.&rdquo;
              </p>
              <div className="flex items-center gap-4 mt-2 text-[11px] text-zinc-400">
                <span>💜 48 resonates</span>
                <span>💬 12 echoes</span>
              </div>
            </div>

            <div className="rounded-2xl bg-[#0a0a0f] border border-cyan-500/20 p-3.5 shadow-md">
              <div className="flex items-center justify-between text-[11px] text-zinc-400 font-mono mb-1.5">
                <span className="flex items-center gap-1.5 text-cyan-400">
                  <span className="w-2 h-2 rounded-full bg-cyan-400" />
                  Ghost #2942 · Anonymous
                </span>
                <span>Just now</span>
              </div>
              <p className="text-sm text-zinc-200">
                &ldquo;Trying out new AI models and web frameworks is the best part of the weekend.&rdquo;
              </p>
              <div className="flex items-center gap-4 mt-2 text-[11px] text-zinc-400">
                <span>✨ 34 resonates</span>
                <span>💬 6 echoes</span>
              </div>
            </div>
          </div>

          <div className="flex items-center justify-between text-[11px] text-zinc-400 font-mono pt-1">
            <span>Campus Private Wall</span>
            <span className="text-cyan-400">🔒 Privacy-first layout</span>
          </div>
        </div>
      ),
    },
    {
      number: '03',
      name: 'JARVIS AI Voice Assistant',
      category: 'Personal AI Assistant | Voice Automation',
      shortDesc:
        'A personal AI assistant experiment combining voice recognition, language models, and desktop automation.',
      fullDesc:
        'JARVIS explores natural-language interaction between user and operating system. It combines Python-based speech recognition, text-to-speech, local Llama 3.2 3B model integration via Ollama, and desktop automation scripts to process verbal commands and execute PC actions.',
      tech: [
        'Python',
        'Ollama',
        'Llama 3.2 3B',
        'faster-whisper',
        'Speech Recognition',
        'TTS',
        'Desktop Automation',
      ],
      githubUrl: 'https://github.com/sohith1437',
      accentColor: 'from-[#00f2fe] to-[#7621B0]',
      renderPreview: () => (
        <div className="w-full h-full flex flex-col justify-between gap-4 font-mono">
          <div className="flex items-center justify-between pb-3 border-b border-white/10">
            <div className="flex items-center gap-2">
              <Cpu className="w-4 h-4 text-cyan-400" />
              <span className="text-xs text-[#D7E2EA]/70">JARVIS CORE // v2.4</span>
            </div>
            <span className="text-[11px] px-2 py-0.5 rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/30 flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
              LOCAL LLM READY
            </span>
          </div>

          {/* Voice Wave HUD Simulation */}
          <div className="flex flex-col items-center justify-center py-4 bg-[#0a0d14] rounded-2xl border border-cyan-500/20 p-4">
            <div className="flex items-center justify-center gap-1.5 h-14 w-full mb-3">
              {[30, 60, 95, 45, 80, 100, 75, 40, 85, 95, 60, 30].map((h, i) => (
                <motion.div
                  key={i}
                  animate={{ height: [`${h * 0.4}%`, `${h}%`, `${h * 0.3}%`] }}
                  transition={{ duration: 1.2, repeat: Infinity, delay: i * 0.08, ease: 'easeInOut' }}
                  className="w-1.5 rounded-full bg-gradient-to-t from-cyan-500 to-purple-500"
                />
              ))}
            </div>
            <div className="flex items-center gap-2 text-xs text-cyan-300">
              <Mic className="w-3.5 h-3.5 animate-pulse text-cyan-400" />
              <span>Whisper ASR: &ldquo;Jarvis, summarize system metrics and open VS Code&rdquo;</span>
            </div>
          </div>

          {/* Action Log */}
          <div className="bg-[#0C0C0C]/90 rounded-xl p-3 border border-white/10 text-[11px] space-y-1">
            <div className="text-zinc-400 flex items-center gap-1.5">
              <Terminal className="w-3 h-3 text-emerald-400" />
              <span>Model: Llama 3.2 (3B Parameters) running on Ollama</span>
            </div>
            <div className="text-zinc-400 flex items-center gap-1.5">
              <Activity className="w-3 h-3 text-cyan-400" />
              <span>Response: Action executed in 340ms</span>
            </div>
          </div>
        </div>
      ),
    },
  ];

  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress: sectionScrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start end', 'end start'],
  });

  // Parallax transforms for background shapes
  const bgShape1Y = useTransform(sectionScrollYProgress, [0, 1], [-80, 160]);
  const bgShape1Rotate = useTransform(sectionScrollYProgress, [0, 1], [0, 90]);

  const bgShape2Y = useTransform(sectionScrollYProgress, [0, 1], [120, -140]);
  const bgShape2Rotate = useTransform(sectionScrollYProgress, [0, 1], [-30, 45]);

  const bgAuraY = useTransform(sectionScrollYProgress, [0, 1], [-100, 100]);

  return (
    <section
      ref={sectionRef}
      id="projects"
      className="relative w-full bg-[#0C0C0C] pt-20 sm:pt-24 md:pt-32 pb-24 px-5 sm:px-8 md:px-10 z-10 select-none overflow-hidden"
    >
      {/* Background Parallax Shapes */}
      <motion.div
        style={{ y: bgAuraY }}
        className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[700px] h-[500px] rounded-full bg-gradient-to-b from-purple-600/10 via-cyan-500/5 to-transparent blur-[140px] pointer-events-none z-0"
      />

      <motion.div
        style={{ y: bgShape1Y, rotate: bgShape1Rotate, willChange: 'transform' }}
        className="absolute -top-10 -left-12 w-64 h-64 sm:w-80 sm:h-80 rounded-full border border-cyan-500/15 pointer-events-none z-0"
      >
        <div className="absolute inset-4 rounded-full border border-dashed border-purple-500/20" />
        <div className="absolute top-1/2 left-0 w-3 h-3 rounded-full bg-cyan-400/50 shadow-[0_0_12px_#00f2fe]" />
      </motion.div>

      <motion.div
        style={{ y: bgShape2Y, rotate: bgShape2Rotate, willChange: 'transform' }}
        className="absolute top-1/3 -right-16 w-72 h-72 sm:w-96 sm:h-96 rounded-full border border-purple-500/20 pointer-events-none z-0"
      >
        <div className="absolute inset-8 rounded-3xl border border-dashed border-cyan-500/15 rotate-45" />
        <div className="absolute bottom-1/4 right-0 w-3 h-3 rounded-full bg-purple-400/50 shadow-[0_0_12px_#B600A8]" />
      </motion.div>

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Section Heading with Staggered Entrance */}
        <div className="mb-16 sm:mb-20">
          <SectionHeader
            eyebrow="// 04 · FEATURED WORK"
            title="Selected Projects"
            subtitle="Building practical applications at the intersection of software development, artificial intelligence, and creative problem-solving."
          />
        </div>

        {/* 3 Sticky Stacking Cards Container */}
        <div ref={containerRef} className="relative">
          {projects.map((project, idx) => (
            <ProjectCard
              key={project.number}
              project={project}
              index={idx}
              totalCards={projects.length}
              scrollYProgress={scrollYProgress}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
