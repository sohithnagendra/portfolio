import React from 'react';
import { ArrowUp, Github, Linkedin } from 'lucide-react';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="w-full bg-[#0C0C0C] border-t border-white/10 px-6 md:px-12 py-12 text-[#D7E2EA] select-none">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8">
        {/* Left: Name and Title */}
        <div className="text-center md:text-left">
          <h4 className="text-2xl font-bold uppercase tracking-tight text-white">
            T. Sohith Nagendra
          </h4>
          <p className="text-sm font-light text-[#BBCCD7]/70 mt-1">
            Computer Science Student | Full-Stack Developer | AI Enthusiast
          </p>
        </div>

        {/* Center: Navigation & Social Links */}
        <div className="flex items-center gap-6 text-sm font-medium uppercase tracking-wider">
          <a
            href="https://www.linkedin.com/in/tanneeru-sohith-nagendra-35913840a/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 hover:text-white transition-colors"
          >
            <Linkedin className="w-4 h-4 text-cyan-400" />
            <span>LinkedIn</span>
          </a>
          <a
            href="https://github.com/sohith1437"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 hover:text-white transition-colors"
          >
            <Github className="w-4 h-4 text-purple-400" />
            <span>GitHub</span>
          </a>
          <button
            onClick={scrollToTop}
            className="flex items-center gap-1 hover:text-white transition-colors cursor-pointer"
          >
            <span>Home</span>
            <ArrowUp className="w-4 h-4 text-emerald-400" />
          </button>
        </div>

        {/* Right: Copyright */}
        <div className="text-center md:text-right text-xs font-mono text-[#BBCCD7]/60">
          <p>© 2026 T. Sohith Nagendra.</p>
          <p className="mt-0.5">Built with curiosity and code.</p>
        </div>
      </div>
    </footer>
  );
};
