"use client";

import { motion } from "framer-motion";
import { Github, Linkedin, Mail, Globe } from "lucide-react";
import { PORTFOLIO_DATA } from "./data";

export const Footer: React.FC = () => {
  const { personalInfo, footer } = PORTFOLIO_DATA;

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
      },
    },
  };

  return (
    <footer
      id={footer.id}
      className="py-20 bg-[var(--background)] text-center px-4"
    >
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        className="max-w-2xl mx-auto"
      >
        <motion.p
          variants={itemVariants}
          className="text-cyan-400 font-mono mb-4"
        >
          {footer.label}
        </motion.p>
        <motion.h2
          variants={itemVariants}
          className="text-4xl md:text-5xl font-extrabold text-[var(--foreground)] mb-6 leading-snug"
        >
          {footer.title}
        </motion.h2>
        <motion.p
          variants={itemVariants}
          className="text-[var(--foreground)] dark:text-white text-lg mb-12"
        >
          {footer.description}
        </motion.p>
        <motion.a
          href={footer.ctaHref}
          target="_blank"
          rel="noopener noreferrer"
          variants={itemVariants}
          whileHover={{ scale: 1.05, y: -2 }}
          whileTap={{ scale: 0.95 }}
          className="inline-block px-10 py-4 bg-cyan-600 text-white rounded-xl hover:bg-cyan-500 transition-colors font-bold text-lg shadow-2xl shadow-cyan-500/30"
        >
          <Mail size={20} className="inline-block mr-2 -mt-0.5" />{" "}
          {footer.ctaLabel}
        </motion.a>

        <motion.div
          variants={itemVariants}
          className="flex justify-center gap-6 pt-12 text-gray-500"
        >
          {personalInfo.email && (
            <motion.a
              href={`mailto:${personalInfo.email}`}
              whileHover={{ scale: 1.2, y: -4, color: "rgb(34, 211, 238)" }}
              whileTap={{ scale: 0.9 }}
              className="transition-colors"
            >
              <Mail size={24} />
            </motion.a>
          )}
          {personalInfo.linkedin && (
            <motion.a
              href={personalInfo.linkedin}
              target="_blank"
              rel="noreferrer"
              whileHover={{ scale: 1.2, y: -4, color: "rgb(34, 211, 238)" }}
              whileTap={{ scale: 0.9 }}
              className="transition-colors"
            >
              <Linkedin size={24} />
            </motion.a>
          )}
          {personalInfo.github && (
            <motion.a
              href={personalInfo.github}
              target="_blank"
              rel="noreferrer"
              whileHover={{ scale: 1.2, y: -4, color: "rgb(34, 211, 238)" }}
              whileTap={{ scale: 0.9 }}
              className="transition-colors"
            >
              <Github size={24} />
            </motion.a>
          )}
          {personalInfo.upwork && (
            <motion.a
              href={personalInfo.upwork}
              target="_blank"
              rel="noreferrer"
              whileHover={{ scale: 1.2, y: -4, color: "rgb(34, 211, 238)" }}
              whileTap={{ scale: 0.9 }}
              className="transition-colors"
              aria-label="Upwork Profile"
            >
              <Globe size={24} />
            </motion.a>
          )}
        </motion.div>

        {/* <div className="mt-16 pt-8 text-gray-500 text-sm font-mono border-t border-gray-900">
          <p>Crafted with React &amp; Tailwind by {personalInfo.name}</p>
        </div> */}
      </motion.div>
    </footer>
  );
};


