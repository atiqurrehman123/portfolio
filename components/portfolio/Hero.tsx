"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { PORTFOLIO_DATA } from "./data";
import { Mail } from "lucide-react";

export const Hero: React.FC = () => {
  const { personalInfo, hero, sections } = PORTFOLIO_DATA;

  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="min-h-screen flex items-center justify-center pt-24 px-4 bg-[var(--background)] relative overflow-hidden"
      id="about"
    >
      {/* Aurora spotlight backdrop */}
      <div className="aurora z-0" />

      {/* Subtle grid overlay */}
      <div
        className="absolute inset-0 z-0 opacity-[0.06] dark:opacity-[0.12]"
        style={{
          backgroundImage: `
            linear-gradient(to right, var(--accent-1) 1px, transparent 1px),
            linear-gradient(to bottom, var(--accent-1) 1px, transparent 1px)
          `,
          backgroundSize: "56px 56px",
          maskImage:
            "radial-gradient(ellipse at center, black 30%, transparent 75%)",
          WebkitMaskImage:
            "radial-gradient(ellipse at center, black 30%, transparent 75%)",
        }}
      />

      <div className="max-w-7xl w-full mx-auto z-10 grid lg:grid-cols-[1.1fr_0.9fr] gap-12 lg:gap-10 items-center">
        {/* Left column — content */}
        <div className="space-y-7 text-center lg:text-left order-2 lg:order-1">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="glass inline-flex items-center gap-2.5 rounded-full px-4 py-1.5 text-sm font-medium text-[var(--foreground)]/80"
        >
          <span className="live-dot" />
          Available for freelance &amp; full-time work
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" }}
          className="text-[var(--accent-2)] font-mono text-lg sm:text-xl"
        >
          {personalInfo.intro}
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.15, ease: "easeOut" }}
          className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tighter leading-snug text-[var(--foreground)]"
        >
          <span className="gradient-text block mb-2">{personalInfo.title}</span>
          <span className="block sm:inline text-[var(--foreground)]/90">
            {personalInfo.tagline}
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3, ease: "easeOut" }}
          className="hero-summary max-w-xl text-lg leading-relaxed mx-auto lg:mx-0"
        >
          {personalInfo.summary}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4, ease: "easeOut" }}
          className="flex flex-wrap gap-5 pt-8 justify-center md:justify-start"
        >
          {sections.projects.visible && (
            <motion.a
              href={hero.exploreProjectsButton.href}
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              className="btn-gradient px-8 py-3 rounded-xl font-bold"
            >
              {hero.exploreProjectsButton.text}
            </motion.a>
          )}
          <motion.a
            href={hero.contactButton.href}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
            className="glass border border-[var(--border-subtle)] text-[var(--foreground)] px-8 py-3 rounded-xl font-medium hover:border-cyan-400/60 transition-colors flex items-center gap-2"
          >
            <Mail size={20} /> {hero.contactButton.text}
          </motion.a>
        </motion.div>

        {/* Trust / stats bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5, ease: "easeOut" }}
          className="flex flex-wrap gap-x-10 gap-y-5 pt-10 justify-center md:justify-start"
        >
          {personalInfo.stats?.map((stat) => (
            <div key={stat.label} className="text-center lg:text-left">
              <div className="gradient-text text-3xl sm:text-4xl font-black tracking-tight">
                {stat.value}
              </div>
              <div className="text-sm text-[var(--foreground)]/60 mt-1">
                {stat.label}
              </div>
            </div>
          ))}
        </motion.div>
        </div>

        {/* Right column — profile photo */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9, x: 40 }}
          animate={{ opacity: 1, scale: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
          className="order-1 lg:order-2 flex justify-center lg:justify-end"
        >
          <div className="relative w-64 h-64 sm:w-80 sm:h-80 lg:w-[26rem] lg:h-[26rem]">
            {/* Rotating gradient ring */}
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 22, repeat: Infinity, ease: "linear" }}
              className="absolute -inset-4 rounded-full opacity-70 blur-[2px]"
              style={{
                background:
                  "conic-gradient(from 0deg, var(--accent-1), var(--accent-2), var(--accent-3), var(--accent-1))",
              }}
            />
            {/* Soft glow */}
            <div
              className="absolute -inset-8 rounded-full blur-3xl opacity-50"
              style={{
                background:
                  "radial-gradient(circle, color-mix(in srgb, var(--accent-2) 60%, transparent), transparent 70%)",
              }}
            />
            {/* Photo */}
            <div className="absolute inset-1 rounded-full overflow-hidden border-4 border-[var(--background)] shadow-2xl">
              <Image
                src={personalInfo.avatarUrl}
                alt={personalInfo.name}
                fill
                priority
                sizes="(max-width: 1024px) 20rem, 26rem"
                className="object-cover"
              />
            </div>

            {/* Floating tech badges */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: [0, -8, 0] }}
              transition={{
                opacity: { delay: 1, duration: 0.5 },
                y: { delay: 1, duration: 4, repeat: Infinity, ease: "easeInOut" },
              }}
              className="glass absolute -left-2 sm:-left-6 top-10 rounded-2xl px-4 py-2 text-sm font-semibold shadow-xl"
            >
              ⚛️ React Native
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: [0, 8, 0] }}
              transition={{
                opacity: { delay: 1.3, duration: 0.5 },
                y: { delay: 1.3, duration: 4.5, repeat: Infinity, ease: "easeInOut" },
              }}
              className="glass absolute -right-2 sm:-right-6 bottom-16 rounded-2xl px-4 py-2 text-sm font-semibold shadow-xl"
            >
              🟢 MERN Stack
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: [0, -6, 0] }}
              transition={{
                opacity: { delay: 1.6, duration: 0.5 },
                y: { delay: 1.6, duration: 5, repeat: Infinity, ease: "easeInOut" },
              }}
              className="glass absolute right-4 -bottom-3 rounded-2xl px-4 py-2 text-sm font-semibold shadow-xl"
            >
              ▲ Next.js
            </motion.div>
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
};


