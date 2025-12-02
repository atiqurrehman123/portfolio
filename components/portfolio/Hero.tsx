"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { PORTFOLIO_DATA } from "./data";
import { Typewriter } from "./Typewriter";
import { Mail } from "lucide-react";

export const Hero: React.FC = () => {
  const [typingStage, setTypingStage] = useState(0);

  useEffect(() => {
    const startTypingTimeout = setTimeout(() => setTypingStage(1), 500);
    return () => clearTimeout(startTypingTimeout);
  }, []);

  const isIntroTyping = typingStage === 1;
  const isTitleTyping = typingStage === 2;
  const isTaglineTyping = typingStage === 3;
  const isAllComplete = typingStage === 4;

  const handleIntroComplete = () => {
    setTimeout(() => setTypingStage(2), 200);
  };

  const handleTitleComplete = () => {
    setTimeout(() => setTypingStage(3), 200);
  };

  const handleTaglineComplete = () => {
    setTypingStage(4);
  };

  const { personalInfo, hero, sections } = PORTFOLIO_DATA;

  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="min-h-screen flex items-center justify-center pt-24 px-4 bg-[var(--background)] relative overflow-hidden"
      id="about"
    >
      {/* Animated Grid Background */}
      <div className="absolute inset-0 z-0 opacity-[0.15] dark:opacity-[0.2]">
        <motion.div
          className="absolute inset-0"
          style={{
            backgroundImage: `
              linear-gradient(to right, rgb(34, 211, 238) 1px, transparent 1px),
              linear-gradient(to bottom, rgb(34, 211, 238) 1px, transparent 1px)
            `,
            backgroundSize: "50px 50px",
          }}
          animate={{
            backgroundPosition: ["0px 0px", "50px 50px"],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear",
          }}
        />
      </div>

      {/* Floating Gradient Orbs */}
      <motion.div
        className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full blur-3xl opacity-60 dark:opacity-50"
        style={{
          background: "radial-gradient(circle, rgba(34, 211, 238, 0.8) 0%, rgba(34, 211, 238, 0.4) 40%, transparent 70%)",
        }}
        animate={{
          x: [0, 100, 0],
          y: [0, 50, 0],
          scale: [1, 1.2, 1],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      
      <motion.div
        className="absolute bottom-1/4 right-1/4 w-96 h-96 rounded-full blur-3xl opacity-55 dark:opacity-50"
        style={{
          background: "radial-gradient(circle, rgba(34, 211, 238, 0.75) 0%, rgba(34, 211, 238, 0.35) 40%, transparent 70%)",
        }}
        animate={{
          x: [0, -80, 0],
          y: [0, -60, 0],
          scale: [1, 1.3, 1],
        }}
        transition={{
          duration: 25,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      <motion.div
        className="absolute top-1/2 right-1/3 w-72 h-72 rounded-full blur-3xl opacity-50 dark:opacity-45"
        style={{
          background: "radial-gradient(circle, rgba(34, 211, 238, 0.7) 0%, rgba(34, 211, 238, 0.3) 40%, transparent 70%)",
        }}
        animate={{
          x: [0, 60, -40, 0],
          y: [0, -80, 40, 0],
          scale: [1, 1.1, 1.2, 1],
        }}
        transition={{
          duration: 30,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      <motion.div
        className="absolute bottom-1/3 left-1/3 w-80 h-80 rounded-full blur-3xl opacity-50 dark:opacity-45"
        style={{
          background: "radial-gradient(circle, rgba(34, 211, 238, 0.7) 0%, rgba(34, 211, 238, 0.3) 40%, transparent 70%)",
        }}
        animate={{
          x: [0, -50, 70, 0],
          y: [0, 90, -30, 0],
          scale: [1, 1.15, 1.1, 1],
        }}
        transition={{
          duration: 35,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* Center Radial Gradient */}
      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 0.2 }}
        transition={{ duration: 1.5, ease: "easeOut" }}
        className="absolute inset-0 z-0 [background:radial-gradient(circle_at_center,_var(--tw-color-cyan-900)_0%,_transparent_50%)] dark:opacity-[0.15]"
      />

      <div className="max-w-7xl mx-auto z-10 space-y-8 text-center md:text-left">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={typingStage >= 1 ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="text-cyan-400 font-mono text-lg sm:text-xl"
        >
          {typingStage >= 1 && (
            <Typewriter
              text={personalInfo.intro}
              isTyping={isIntroTyping}
              onComplete={handleIntroComplete}
              cursorHeightClass="h-6"
            />
          )}
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={typingStage >= 2 ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="text-5xl sm:text-6xl lg:text-7xl font-black tracking-tighter leading-snug text-[var(--foreground)]"
        >
          <span className="block mb-2 min-h-[3rem] sm:min-h-[4rem] lg:min-h-[5rem]">
            {typingStage >= 2 && (
              <Typewriter
                text={personalInfo.title}
                isTyping={isTitleTyping}
                onComplete={handleTitleComplete}
                cursorHeightClass="h-10 sm:h-12 lg:h-14"
              />
            )}
            {typingStage < 2 && personalInfo.title}
          </span>

          <motion.span
            initial={{ opacity: 0 }}
            animate={typingStage >= 3 ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="block sm:inline text-cyan-400 min-h-[3rem] sm:min-h-[4rem] lg:min-h-[5rem]"
          >
            {typingStage >= 3 && (
              <Typewriter
                text={personalInfo.tagline}
                delay={80}
                isTyping={isTaglineTyping}
                onComplete={handleTaglineComplete}
                cursorHeightClass="h-10 sm:h-12 lg:h-14"
              />
            )}
          </motion.span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={isAllComplete ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, delay: 0.3, ease: "easeOut" }}
          className="hero-summary max-w-4xl text-xl leading-relaxed mx-auto md:mx-0"
        >
          {personalInfo.summary}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isAllComplete ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, delay: 0.4, ease: "easeOut" }}
          className="flex flex-wrap gap-5 pt-8 justify-center md:justify-start"
        >
          {sections.projects.visible && (
            <motion.a
              href={hero.exploreProjectsButton.href}
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              className="bg-cyan-600 text-white px-8 py-3 rounded-xl font-bold hover:bg-cyan-500 shadow-xl shadow-cyan-500/30 transition-all"
            >
              {hero.exploreProjectsButton.text}
            </motion.a>
          )}
          <motion.a
            href={hero.contactButton.href}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05, y: -2, borderColor: "rgb(34, 211, 238)" }}
            whileTap={{ scale: 0.95 }}
            className="border border-gray-700 text-cyan-400 px-8 py-3 rounded-xl font-medium hover:border-cyan-400 hover:bg-cyan-400/10 transition-colors flex items-center gap-2 shadow-md hover:shadow-cyan-500/20"
          >
            <Mail size={20} /> {hero.contactButton.text}
          </motion.a>
        </motion.div>
      </div>
    </motion.section>
  );
};


