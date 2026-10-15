import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Terminal, Code2, RefreshCw } from 'lucide-react';
import avatarImg from '../assets/images/sohith_3d_avatar_1792077283487.jpg';

export const HeroCenterpiece: React.FC = () => {
  // Support both the tailored developer 3D avatar and the reference character from image.png
  const [avatarMode, setAvatarMode] = useState<'developer' | 'reference'>('developer');
  const [imgError, setImgError] = useState(false);

  const currentSrc =
    avatarMode === 'developer'
      ? imgError
        ? '/images/avatar.jpg'
        : avatarImg
      : '/images/character_ref.png';

  const toggleAvatar = (e: React.MouseEvent) => {
    e.stopPropagation();
    setImgError(false);
    setAvatarMode((prev) => (prev === 'developer' ? 'reference' : 'developer'));
  };

  return (
    <motion.div
      whileHover={{
        scale: 1.05,
        filter: 'drop-shadow(0 0 35px rgba(0, 242, 254, 0.4)) drop-shadow(0 0 45px rgba(182, 0, 168, 0.35))',
      }}
      transition={{ duration: 0.35, ease: [0.25, 0.1, 0.25, 1] }}
      className="relative w-full aspect-square max-w-[500px] mx-auto flex items-center justify-center select-none pointer-events-auto cursor-pointer transition-all duration-300"
    >
      {/* Outer ambient blur aura */}
      <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-[#7621B0]/30 via-[#B600A8]/25 to-[#00f2fe]/25 blur-3xl pointer-events-none group-hover:scale-110 transition-transform duration-500" />

      {/* Orbiting subtle cybernetic ring */}
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ duration: 42, repeat: Infinity, ease: 'linear' }}
        className="absolute inset-2 sm:inset-4 rounded-full border border-dashed border-[#D7E2EA]/15 pointer-events-none"
      >
        <span className="absolute top-0 left-1/2 -translate-x-1/2 w-2.5 h-2.5 rounded-full bg-[#00f2fe] shadow-[0_0_10px_#00f2fe]" />
        <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-2.5 h-2.5 rounded-full bg-[#B600A8] shadow-[0_0_10px_#B600A8]" />
      </motion.div>

      {/* 3D Stylized Character Avatar Card */}
      <motion.div
        animate={{ y: [-6, 6, -6] }}
        transition={{ duration: 4.5, repeat: Infinity, ease: 'easeInOut' }}
        className="relative z-10 w-[82%] h-[82%] rounded-[36px] sm:rounded-[44px] p-[2.5px] bg-gradient-to-b from-[#BBCCD7]/40 via-[#7621B0]/50 to-[#B600A8]/60 shadow-[0_20px_50px_rgba(0,0,0,0.85)] overflow-hidden group"
      >
        <div className="w-full h-full rounded-[34px] sm:rounded-[42px] bg-[#0C0C0C] relative overflow-hidden flex items-end justify-center">
          {/* Internal ambient rim light */}
          <div className="absolute -top-16 -left-16 w-40 h-40 bg-[#00f2fe]/20 rounded-full blur-2xl pointer-events-none" />
          <div className="absolute -bottom-16 -right-16 w-40 h-40 bg-[#B600A8]/30 rounded-full blur-2xl pointer-events-none" />

          {/* 3D Avatar Image with robust load handling */}
          <img
            key={currentSrc}
            src={currentSrc}
            alt="Sohith Nagendra — 3D Character Avatar"
            referrerPolicy="no-referrer"
            onError={() => {
              // If ESM import fails, switch to public URL fallback
              if (!imgError) {
                setImgError(true);
              }
            }}
            className="w-full h-full object-cover object-top scale-105 transition-transform duration-500 group-hover:scale-110"
          />

          {/* Bottom subtle gradient overlay */}
          <div className="absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-[#0C0C0C] via-[#0C0C0C]/50 to-transparent pointer-events-none" />

          {/* Bottom developer badge overlay with style switch */}
          <div className="absolute bottom-3 inset-x-3 z-20 bg-[#121318]/90 backdrop-blur-md border border-white/10 rounded-2xl p-2.5 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              <span className="text-[11px] font-mono text-[#D7E2EA] font-semibold tracking-wide">
                SOHITH NAGENDRA
              </span>
            </div>
            <button
              onClick={toggleAvatar}
              title="Click to toggle between Developer 3D Avatar and Reference Character"
              className="inline-flex items-center gap-1 text-[10px] font-mono px-2 py-0.5 rounded-full bg-white/10 hover:bg-white/20 text-cyan-300 transition-colors border border-cyan-400/30 cursor-pointer"
            >
              <RefreshCw className="w-2.5 h-2.5" />
              <span>{avatarMode === 'developer' ? '3D Dev' : 'Reference'}</span>
            </button>
          </div>
        </div>
      </motion.div>

      {/* Floating orbital badges */}
      <motion.div
        animate={{ y: [6, -6, 6], x: [-3, 3, -3] }}
        transition={{ duration: 4.8, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute -top-1 right-2 sm:right-4 z-20 bg-[#0C0C0C]/90 border border-white/20 backdrop-blur-md px-3.5 py-1.5 rounded-full shadow-xl flex items-center gap-2"
      >
        <Terminal className="w-3.5 h-3.5 text-cyan-400" />
        <span className="text-[11px] font-mono text-[#D7E2EA] font-medium tracking-wide">
          KL University
        </span>
      </motion.div>

      <motion.div
        animate={{ y: [-6, 6, -6], x: [3, -3, 3] }}
        transition={{ duration: 5.2, repeat: Infinity, ease: 'easeInOut', delay: 0.5 }}
        className="absolute -bottom-2 left-2 sm:left-4 z-20 bg-[#0C0C0C]/90 border border-purple-500/30 backdrop-blur-md px-3.5 py-1.5 rounded-full shadow-xl flex items-center gap-2"
      >
        <Code2 className="w-3.5 h-3.5 text-purple-400" />
        <span className="text-[11px] font-mono text-[#D7E2EA] font-medium tracking-wide">
          AI & Full-Stack
        </span>
      </motion.div>
    </motion.div>
  );
};
