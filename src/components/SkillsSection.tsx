import React, { useState } from 'react';
import { motion } from 'motion/react';
import { FadeIn } from './FadeIn.tsx';
import { SectionHeader } from './SectionHeader.tsx';
import {
  Code,
  Layout,
  Server,
  Database,
  Brain,
  Wrench,
  Cpu,
  Binary,
  CheckCircle2,
} from 'lucide-react';

interface SkillCategory {
  id: string;
  title: string;
  icon: React.ReactNode;
  color: string;
  skills: string[];
}

export const SkillsSection: React.FC = () => {
  const [activeTab, setActiveTab] = useState<string>('all');

  const categories: SkillCategory[] = [
    {
      id: 'languages',
      title: 'Programming Languages',
      icon: <Code className="w-5 h-5 text-cyan-400" />,
      color: 'from-cyan-500/20 to-blue-500/10',
      skills: ['Java', 'Python', 'C', 'JavaScript'],
    },
    {
      id: 'frontend',
      title: 'Frontend Development',
      icon: <Layout className="w-5 h-5 text-purple-400" />,
      color: 'from-purple-500/20 to-pink-500/10',
      skills: [
        'HTML5',
        'CSS3',
        'JavaScript',
        'React',
        'Vite',
        'Responsive Web Design',
        'UI/UX Implementation',
      ],
    },
    {
      id: 'backend',
      title: 'Backend Development',
      icon: <Server className="w-5 h-5 text-emerald-400" />,
      color: 'from-emerald-500/20 to-teal-500/10',
      skills: [
        'Python Flask',
        'REST API Integration',
        'Backend & Frontend Integration',
      ],
    },
    {
      id: 'database',
      title: 'Databases & Auth',
      icon: <Database className="w-5 h-5 text-amber-400" />,
      color: 'from-amber-500/20 to-orange-500/10',
      skills: [
        'SQL Fundamentals',
        'Supabase',
        'Database Integration',
        'Authentication & Authorization Fundamentals',
      ],
    },
    {
      id: 'ai',
      title: 'Artificial Intelligence',
      icon: <Brain className="w-5 h-5 text-pink-400" />,
      color: 'from-pink-500/20 to-violet-500/10',
      skills: [
        'LLM API Integration',
        'AI-Powered Applications',
        'Ollama',
        'Whisper / faster-whisper',
        'Speech Recognition',
        'Text Processing & Transformation',
      ],
    },
    {
      id: 'tools',
      title: 'Tools & Platforms',
      icon: <Wrench className="w-5 h-5 text-blue-400" />,
      color: 'from-blue-500/20 to-indigo-500/10',
      skills: [
        'Git',
        'GitHub',
        'Visual Studio Code',
        'Netlify',
        'Vercel',
        'Render',
      ],
    },
    {
      id: 'hardware',
      title: 'Hardware & IoT',
      icon: <Cpu className="w-5 h-5 text-lime-400" />,
      color: 'from-lime-500/20 to-green-500/10',
      skills: [
        'ESP32',
        'ESP32-CAM',
        'PIR Sensors',
        'LCD Displays',
        'Sensor-Based Automation',
      ],
    },
    {
      id: 'core',
      title: 'Core Computer Science',
      icon: <Binary className="w-5 h-5 text-rose-400" />,
      color: 'from-rose-500/20 to-red-500/10',
      skills: [
        'Data Structures & Algorithms',
        'Object-Oriented Programming',
        'Programming Fundamentals',
        'Problem-Solving',
        'Basic Database Concepts',
      ],
    },
  ];

  const filteredCategories =
    activeTab === 'all'
      ? categories
      : categories.filter((c) => c.id === activeTab);

  return (
    <section
      id="skills"
      className="relative w-full bg-[#0C0C0C] px-5 sm:px-8 md:px-10 py-24 sm:py-28 md:py-36 select-none"
    >
      <div className="max-w-6xl mx-auto">
        {/* Section Heading with Staggered Entrance */}
        <div className="mb-12 sm:mb-16">
          <SectionHeader
            eyebrow="// 03 · TECHNICAL STACK"
            title="Technical Skills"
            subtitle="Foundational principles, programming stacks, AI tools, and hands-on technologies I actively work with."
          />
        </div>

        {/* Filter Pills */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          <button
            onClick={() => setActiveTab('all')}
            className={`px-4 py-1.5 rounded-full text-xs font-mono tracking-wider uppercase transition-all cursor-pointer border ${
              activeTab === 'all'
                ? 'bg-cyan-500/20 text-cyan-300 border-cyan-400/50 shadow-[0_0_12px_rgba(0,242,254,0.25)] font-semibold'
                : 'bg-white/5 text-[#D7E2EA]/70 hover:bg-white/10 border-white/10'
            }`}
          >
            All Areas ({categories.length})
          </button>
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveTab(cat.id)}
              className={`px-4 py-1.5 rounded-full text-xs font-mono tracking-wider uppercase transition-all cursor-pointer border ${
                activeTab === cat.id
                  ? 'bg-cyan-500/20 text-cyan-300 border-cyan-400/50 shadow-[0_0_12px_rgba(0,242,254,0.25)] font-semibold'
                  : 'bg-white/5 text-[#D7E2EA]/70 hover:bg-white/10 border-white/10'
              }`}
            >
              {cat.title}
            </button>
          ))}
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-5 sm:gap-6">
          {filteredCategories.map((cat, idx) => (
            <motion.div
              key={cat.id}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.08, duration: 0.6 }}
              whileHover={{ y: -4, borderColor: 'rgba(215, 226, 234, 0.3)' }}
              className={`relative rounded-3xl bg-[#121319] border border-white/10 p-6 sm:p-7 shadow-xl overflow-hidden transition-all group`}
            >
              {/* Subtle card corner glow */}
              <div
                className={`absolute -top-12 -right-12 w-36 h-36 bg-gradient-to-bl ${cat.color} rounded-full blur-2xl pointer-events-none group-hover:scale-125 transition-transform duration-500`}
              />

              {/* Header */}
              <div className="flex items-center gap-3.5 mb-5 relative z-10">
                <div className="p-2.5 rounded-2xl bg-white/5 border border-white/10">
                  {cat.icon}
                </div>
                <h3 className="text-lg sm:text-xl font-bold uppercase tracking-tight text-white">
                  {cat.title}
                </h3>
              </div>

              {/* Skills Tags */}
              <div className="flex flex-wrap gap-2 relative z-10">
                {cat.skills.map((skill) => (
                  <span
                    key={skill}
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-white/[0.04] hover:bg-white/[0.09] border border-white/10 text-xs sm:text-sm font-mono text-[#D7E2EA]/90 transition-colors"
                  >
                    <CheckCircle2 className="w-3 h-3 text-[#B600A8]/80 flex-shrink-0" />
                    <span>{skill}</span>
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
