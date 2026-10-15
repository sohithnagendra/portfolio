import React from 'react';
import { motion } from 'motion/react';
import { FadeIn } from './FadeIn.tsx';
import { SectionHeader } from './SectionHeader.tsx';
import { GraduationCap, MapPin, Calendar, BookOpen, CheckCircle } from 'lucide-react';

export const EducationSection: React.FC = () => {
  return (
    <section className="relative w-full bg-[#0C0C0C] px-5 sm:px-8 md:px-10 py-20 sm:py-24 select-none">
      <div className="max-w-4xl mx-auto">
        {/* Section Heading with Staggered Entrance */}
        <div className="mb-12 sm:mb-16">
          <SectionHeader
            eyebrow="// 05 · ACADEMIC FOUNDATION"
            title="Education"
            subtitle="Developing core computer science principles and software engineering foundations."
          />
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="relative rounded-3xl sm:rounded-[36px] bg-[#121319] border border-white/15 p-6 sm:p-9 md:p-10 shadow-2xl overflow-hidden"
        >
          {/* Subtle accent glow */}
          <div className="absolute top-0 right-0 w-80 h-80 bg-gradient-to-bl from-purple-600/15 via-cyan-500/10 to-transparent rounded-full blur-3xl pointer-events-none" />

          <div className="flex flex-col md:flex-row md:items-start justify-between gap-6 pb-6 border-b border-white/10 relative z-10">
            <div className="flex items-start gap-4">
              <div className="p-3.5 rounded-2xl bg-white/5 border border-white/10 text-cyan-400">
                <GraduationCap className="w-8 h-8" />
              </div>
              <div>
                <span className="text-xs font-mono uppercase tracking-wider text-cyan-400">
                  Bachelor of Technology (B.Tech)
                </span>
                <h3 className="text-2xl sm:text-3xl font-bold uppercase tracking-tight text-white mt-1">
                  KL University (KLU)
                </h3>
                <p className="text-sm sm:text-base text-[#BBCCD7] font-medium mt-0.5">
                  Computer Science and Engineering (CSE)
                </p>
              </div>
            </div>

            <div className="flex flex-col items-start md:items-end gap-2 text-xs sm:text-sm font-mono text-[#D7E2EA]/70">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                <Calendar className="w-3.5 h-3.5" />
                <span>2025 – 2029 (Currently Pursuing)</span>
              </div>
              <div className="inline-flex items-center gap-1.5 text-zinc-400">
                <MapPin className="w-3.5 h-3.5 text-rose-400" />
                <span>Vijayawada, Andhra Pradesh, India</span>
              </div>
            </div>
          </div>

          <div className="pt-6 relative z-10">
            <p className="text-sm sm:text-base text-[#D7E2EA]/80 font-light leading-relaxed">
              Developing a strong foundation in computer science, programming, algorithms, software development, and emerging technologies while applying classroom learning through practical projects.
            </p>

            <div className="mt-6 flex flex-wrap gap-2.5">
              {[
                'Data Structures & Algorithms',
                'Object-Oriented Programming',
                'Computer Systems',
                'Web & AI Exploration',
              ].map((focus) => (
                <span
                  key={focus}
                  className="inline-flex items-center gap-1.5 text-xs font-mono text-[#BBCCD7] bg-white/5 border border-white/10 px-3 py-1.5 rounded-xl"
                >
                  <CheckCircle className="w-3 h-3 text-cyan-400" />
                  <span>{focus}</span>
                </span>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
