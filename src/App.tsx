import { TechCursor } from './components/TechCursor.tsx';
import { ScrollProgressBar } from './components/ScrollProgressBar.tsx';
import { HeroSection } from './components/HeroSection.tsx';
import { AboutSection } from './components/AboutSection.tsx';
import { ExploreSection } from './components/ExploreSection.tsx';
import { SkillsSection } from './components/SkillsSection.tsx';
import { ProjectsSection } from './components/ProjectsSection.tsx';
import { EducationSection } from './components/EducationSection.tsx';
import { ContactSection } from './components/ContactSection.tsx';
import { Footer } from './components/Footer.tsx';

export default function App() {
  const scrollToContact = () => {
    const contactElem = document.getElementById('contact');
    if (contactElem) {
      contactElem.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <main className="w-full bg-[#0C0C0C] text-[#D7E2EA] overflow-x-clip selection:bg-[#B600A8]/30 selection:text-white">
      {/* Custom Tech Crosshair Cursor */}
      <TechCursor />

      {/* Global Scroll Progress Bar */}
      <ScrollProgressBar />

      {/* 1. HERO SECTION */}
      <HeroSection onContactClick={scrollToContact} />

      {/* 2. ABOUT SECTION */}
      <AboutSection onContactClick={scrollToContact} />

      {/* 4. WHAT I EXPLORE (SERVICES & INTERESTS) SECTION */}
      <ExploreSection />

      {/* 5. TECHNICAL SKILLS SECTION */}
      <SkillsSection />

      {/* 6. PROJECTS SECTION (STICKY STACKING CARDS) */}
      <ProjectsSection />

      {/* 7. EDUCATION SECTION */}
      <EducationSection />

      {/* 8. CONTACT SECTION */}
      <ContactSection />

      {/* 9. FOOTER */}
      <Footer />
    </main>
  );
}
