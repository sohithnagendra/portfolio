import React from 'react';
import { motion } from 'motion/react';
import { SectionHeader } from './SectionHeader.tsx';

export const ExploreSection: React.FC = () => {
  const exploreItems = [
    {
      number: '01',
      title: 'Web Development',
      description:
        'Building responsive websites and interactive web applications using modern frontend technologies, component systems, and clean UI engineering.',
    },
    {
      number: '02',
      title: 'AI Integration',
      description:
        'Experimenting with language models, AI APIs, speech recognition, and intelligent application workflows that bridge intelligence with practical user interfaces.',
    },
    {
      number: '03',
      title: 'Backend Development',
      description:
        'Developing Python-based application logic, integrating RESTful APIs, and connecting frontend interfaces reliably to server-side services.',
    },
    {
      number: '04',
      title: 'Creative Development',
      description:
        'Exploring modern interface design, animations, interactive experiences, and distinctive digital products that deliver memorable visual quality.',
    },
    {
      number: '05',
      title: 'Problem-Solving',
      description:
        'Strengthening programming fundamentals, data structures, algorithms, and practical software engineering practices through continuous project building.',
    },
  ];

  return (
    <section className="relative w-full bg-[#0C0C0C] text-[#D7E2EA] px-5 sm:px-8 md:px-10 py-20 sm:py-24 md:py-32 z-10 select-none overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute top-1/2 left-0 w-80 h-80 bg-purple-600/10 rounded-full blur-[100px] pointer-events-none -translate-y-1/2" />
      <div className="absolute top-1/2 right-0 w-80 h-80 bg-cyan-500/10 rounded-full blur-[100px] pointer-events-none -translate-y-1/2" />

      <div className="max-w-5xl mx-auto relative z-10">
        {/* Section Heading with Staggered Entrance */}
        <div className="mb-16 sm:mb-20 md:mb-24">
          <SectionHeader
            eyebrow="// 02 · SPECIALIZATIONS"
            title="What I Explore"
            subtitle="Areas of focus & technical curiosity across software engineering and machine intelligence."
            theme="dark"
          />
        </div>

        {/* 5 Vertical Items with 1px borders */}
        <div className="divide-y divide-white/10 border-t border-b border-white/10">
          {exploreItems.map((item, idx) => (
            <motion.div
              key={item.number}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '50px' }}
              transition={{
                duration: 0.7,
                delay: idx * 0.1,
                ease: [0.25, 0.1, 0.25, 1],
              }}
              className="py-8 sm:py-10 md:py-12 flex flex-col md:flex-row md:items-center justify-between gap-4 md:gap-12 group transition-all duration-300 hover:bg-white/[0.03] px-4 rounded-2xl"
            >
              {/* Left Number */}
              <div
                className="font-bold leading-none text-[#D7E2EA]/40 group-hover:text-cyan-400 group-hover:translate-x-1.5 transition-all duration-300 select-none font-mono"
                style={{ fontSize: 'clamp(2rem, 5vw, 68px)' }}
              >
                {item.number}
              </div>

              {/* Right Title + Description */}
              <div className="flex flex-col gap-1.5 max-w-2xl">
                <h3
                  className="font-semibold tracking-tight text-white group-hover:text-cyan-200 transition-colors"
                  style={{ fontSize: 'clamp(1.1rem, 2vw, 1.6rem)' }}
                >
                  {item.title}
                </h3>
                <p
                  className="font-light leading-relaxed text-[#D7E2EA]/70"
                  style={{ fontSize: 'clamp(0.85rem, 1.5vw, 1.15rem)' }}
                >
                  {item.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
