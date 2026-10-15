import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { FadeIn } from './FadeIn.tsx';
import { SectionHeader } from './SectionHeader.tsx';
import { ContactButton } from './ContactButton.tsx';
import {
  Linkedin,
  Github,
  Mail,
  Copy,
  Check,
  Send,
  MessageSquare,
  ArrowUpRight,
} from 'lucide-react';

interface ContactSectionProps {
  onOpenMessageModal?: () => void;
}

export const ContactSection: React.FC<ContactSectionProps> = ({ onOpenMessageModal }) => {
  const [copied, setCopied] = useState(false);
  const email = 'sohithnagendra80@gmail.com';
  const linkedinUrl = 'https://www.linkedin.com/in/tanneeru-sohith-nagendra-35913840a/';
  const githubUrl = 'https://github.com/sohith1437';

  // Quick message form states
  const [name, setName] = useState('');
  const [userEmail, setUserEmail] = useState('');
  const [message, setMessage] = useState('');
  const [sentSuccess, setSentSuccess] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const handleSubmitMessage = (e: React.FormEvent) => {
    e.preventDefault();
    if (!message) return;
    const subject = encodeURIComponent(`Portfolio Inquiry from ${name || 'Collaborator'}`);
    const body = encodeURIComponent(
      `Name: ${name}\nEmail: ${userEmail}\n\nMessage:\n${message}`
    );
    window.location.href = `mailto:${email}?subject=${subject}&body=${body}`;
    setSentSuccess(true);
  };

  return (
    <section
      id="contact"
      className="relative w-full bg-[#0C0C0C] px-5 sm:px-8 md:px-10 py-24 sm:py-32 select-none overflow-hidden"
    >
      {/* Background ambient lighting */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[350px] bg-gradient-to-t from-[#B600A8]/20 via-[#7621B0]/15 to-transparent blur-[120px] pointer-events-none" />

      <div className="max-w-5xl mx-auto relative z-10">
        {/* Section Heading with Staggered Entrance */}
        <div className="mb-12 sm:mb-16">
          <SectionHeader
            eyebrow="// 06 · GET IN TOUCH"
            title="Let's Build Something."
            subtitle="I'm always interested in learning, collaborating on interesting ideas, and exploring opportunities in software development and artificial intelligence."
          />
        </div>

        {/* Contact Links & Quick Form Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: Direct channels & Quick Connect Cards */}
          <div className="lg:col-span-5 flex flex-col gap-4">
            {/* LinkedIn Card */}
            <a
              href={linkedinUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="group p-5 rounded-3xl bg-[#121319] border border-white/10 hover:border-cyan-400/50 transition-all flex items-center justify-between"
            >
              <div className="flex items-center gap-3.5">
                <div className="p-3 rounded-2xl bg-cyan-500/10 text-cyan-400 border border-cyan-500/20 group-hover:scale-110 transition-transform">
                  <Linkedin className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-xs font-mono text-[#BBCCD7]/60 uppercase">LinkedIn Profile</span>
                  <p className="text-white font-bold text-base sm:text-lg">Tanneeru Sohith Nagendra</p>
                </div>
              </div>
              <ArrowUpRight className="w-5 h-5 text-white/50 group-hover:text-cyan-400 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
            </a>

            {/* GitHub Card */}
            <a
              href={githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="group p-5 rounded-3xl bg-[#121319] border border-white/10 hover:border-purple-400/50 transition-all flex items-center justify-between"
            >
              <div className="flex items-center gap-3.5">
                <div className="p-3 rounded-2xl bg-purple-500/10 text-purple-400 border border-purple-500/20 group-hover:scale-110 transition-transform">
                  <Github className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-xs font-mono text-[#BBCCD7]/60 uppercase">GitHub Profile</span>
                  <p className="text-white font-bold text-base sm:text-lg">@sohith1437</p>
                </div>
              </div>
              <ArrowUpRight className="w-5 h-5 text-white/50 group-hover:text-purple-400 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
            </a>

            {/* Email Copy Card */}
            <div className="p-5 rounded-3xl bg-[#121319] border border-white/10 flex items-center justify-between">
              <div className="flex items-center gap-3.5 min-w-0">
                <div className="p-3 rounded-2xl bg-[#B600A8]/10 text-[#B600A8] border border-[#B600A8]/20 flex-shrink-0">
                  <Mail className="w-5 h-5" />
                </div>
                <div className="min-w-0">
                  <span className="text-xs font-mono text-[#BBCCD7]/60 uppercase">Direct Email</span>
                  <p className="text-white font-mono text-xs sm:text-sm truncate">{email}</p>
                </div>
              </div>
              <button
                onClick={handleCopyEmail}
                className="flex-shrink-0 p-2.5 rounded-xl bg-white/5 hover:bg-white/10 text-white transition-colors cursor-pointer ml-2"
                title="Copy email to clipboard"
              >
                {copied ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4 text-zinc-400" />}
              </button>
            </div>
          </div>

          {/* Right Column: Direct Message Composer */}
          <div className="lg:col-span-7 rounded-3xl sm:rounded-[36px] bg-[#121319] border border-white/15 p-6 sm:p-8 shadow-2xl">
            <div className="flex items-center gap-2 mb-4">
              <MessageSquare className="w-4 h-4 text-purple-400" />
              <h3 className="text-lg font-bold text-white uppercase tracking-tight">
                Send a Direct Message
              </h3>
            </div>

            {sentSuccess ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="p-6 rounded-2xl bg-emerald-500/10 border border-emerald-500/30 text-center"
              >
                <Check className="w-8 h-8 text-emerald-400 mx-auto mb-2" />
                <h4 className="text-white font-bold text-lg">Email client prepared!</h4>
                <p className="text-sm text-zinc-300 mt-1">
                  Your message has been transferred to your mail client for Sohith.
                </p>
                <button
                  onClick={() => setSentSuccess(false)}
                  className="mt-4 text-xs font-mono text-emerald-400 underline uppercase"
                >
                  Send another message
                </button>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmitMessage} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-mono uppercase text-[#BBCCD7]/70 mb-1.5">
                      Your Name
                    </label>
                    <input
                      type="text"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder="e.g. Alex Smith"
                      className="w-full bg-[#0C0C0C] border border-white/10 rounded-2xl px-4 py-3 text-sm text-white focus:outline-none focus:border-purple-400 transition-colors"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-mono uppercase text-[#BBCCD7]/70 mb-1.5">
                      Your Email
                    </label>
                    <input
                      type="email"
                      value={userEmail}
                      onChange={(e) => setUserEmail(e.target.value)}
                      placeholder="alex@example.com"
                      className="w-full bg-[#0C0C0C] border border-white/10 rounded-2xl px-4 py-3 text-sm text-white focus:outline-none focus:border-purple-400 transition-colors"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-mono uppercase text-[#BBCCD7]/70 mb-1.5">
                    Message
                  </label>
                  <textarea
                    rows={4}
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    required
                    placeholder="Hello Sohith, I loved your projects GenZify & Ghost Confessions and wanted to connect..."
                    className="w-full bg-[#0C0C0C] border border-white/10 rounded-2xl px-4 py-3 text-sm text-white focus:outline-none focus:border-purple-400 transition-colors resize-none"
                  />
                </div>

                <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-2">
                  <span className="text-xs font-mono text-zinc-500">
                    Direct communication to sohithnagendra80@gmail.com
                  </span>
                  <ContactButton
                    label="Send Message"
                    onClick={() => {}}
                    showIcon={true}
                    className="w-full sm:w-auto"
                  />
                </div>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
