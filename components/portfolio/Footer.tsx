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

  const socials = [
    personalInfo.email && {
      href: `mailto:${personalInfo.email}`,
      label: "Email",
      Icon: Mail,
    },
    personalInfo.linkedin && {
      href: personalInfo.linkedin,
      label: "LinkedIn",
      Icon: Linkedin,
    },
    personalInfo.github && {
      href: personalInfo.github,
      label: "GitHub",
      Icon: Github,
    },
    personalInfo.upwork && {
      href: personalInfo.upwork,
      label: "Upwork",
      Icon: Globe,
    },
  ].filter(Boolean) as { href: string; label: string; Icon: typeof Mail }[];

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
          className="gradient-text font-mono mb-4 inline-block"
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
          className="text-[var(--foreground)]/70 text-lg leading-relaxed mb-12 max-w-xl mx-auto"
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
          className="btn-gradient inline-block px-10 py-4 rounded-xl font-bold text-lg"
        >
          <Mail size={20} className="inline-block mr-2 -mt-0.5" />{" "}
          {footer.ctaLabel}
        </motion.a>

        <motion.div
          variants={itemVariants}
          className="flex justify-center gap-4 pt-14"
        >
          {socials.map(({ href, label, Icon }) => (
            <motion.a
              key={label}
              href={href}
              target={href.startsWith("mailto:") ? undefined : "_blank"}
              rel="noreferrer"
              aria-label={label}
              whileHover={{ scale: 1.12, y: -4 }}
              whileTap={{ scale: 0.9 }}
              className="glass flex h-12 w-12 items-center justify-center rounded-full border border-[var(--border-subtle)] text-[var(--foreground)]/70 transition-colors hover:border-[var(--accent-2)]/60 hover:text-[var(--accent-2)]"
            >
              <Icon size={20} />
            </motion.a>
          ))}
        </motion.div>

        <motion.div
          variants={itemVariants}
          className="mt-16 border-t border-[var(--border-subtle)] pt-8 text-sm text-[var(--foreground)]/50"
        >
          © {new Date().getFullYear()} {personalInfo.name} · Built with Next.js
          &amp; Tailwind CSS
        </motion.div>
      </motion.div>
    </footer>
  );
};


