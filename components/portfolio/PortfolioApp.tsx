'use client';

import { motion } from 'framer-motion';
import { BackToTopButton } from './BackToTopButton';
import { PORTFOLIO_DATA } from './data';
import { Experience } from './Experience';
import { Footer } from './Footer';
import { Hero } from './Hero';
import { Navigation } from './Navigation';
import { Projects } from './Projects';
import Skills from './Skills';

export const PortfolioApp: React.FC = () => {
  const { hero, sections, footer } = PORTFOLIO_DATA;

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="min-h-screen bg-[var(--background)] text-[var(--foreground)] selection:bg-cyan-400/30 selection:text-white font-sans overflow-x-hidden"
    >
      <Navigation />
      {/* <FixedAvatar /> */}
      <BackToTopButton />
      <main>
        {hero.visible && <Hero />}
        {sections.projects.visible && <Projects />}
        {sections.experience.visible && <Experience />}
        {sections.skills.visible && <Skills />}
      </main>
      {footer.visible && <Footer />}
    </motion.div>
  );
};
