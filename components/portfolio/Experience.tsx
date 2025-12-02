"use client";

import { motion } from "framer-motion";
import { Briefcase } from "lucide-react";
import { PORTFOLIO_DATA } from "./data";
import { SectionHeader } from "./SectionHeader";

interface ExperienceItemProps {
  job: (typeof PORTFOLIO_DATA.experience)[number];
  index: number;
}

const ExperienceItem: React.FC<ExperienceItemProps> = ({ job, index }) => {
  return (
    <motion.li
      initial={{ opacity: 0, y: 30, x: -20 }}
      whileInView={{ opacity: 1, y: 0, x: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.6, delay: index * 0.15, ease: "easeOut" }}
      whileHover={{ x: 8 }}
      className="relative pl-10 md:pl-12 group cursor-default"
    >
      {/* Enhanced Timeline dot with glow */}
      <motion.span
        initial={{ scale: 0 }}
        whileInView={{ scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.4, delay: index * 0.15 + 0.2 }}
        whileHover={{ scale: 1.3 }}
        className="absolute left-1.5 md:left-2 top-2 flex h-4 w-4 items-center justify-center rounded-full bg-[var(--background)] ring-2 ring-cyan-400 group-hover:ring-cyan-300 group-hover:ring-4 transition-all duration-300 z-10"
        style={{
          boxShadow: "0 0 15px rgba(34, 211, 238, 0.5)",
        }}
      >
        <motion.span
          initial={{ scale: 0 }}
          whileInView={{ scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.3, delay: index * 0.15 + 0.3 }}
          whileHover={{ scale: 1.2 }}
          className="h-2 w-2 rounded-full bg-cyan-400 group-hover:bg-cyan-300 transition-colors duration-300"
        />
        {/* Pulsing glow effect */}
        <motion.span
          animate={{
            scale: [1, 1.8, 1],
            opacity: [0.5, 0, 0.5],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            delay: index * 0.4,
            ease: "easeOut",
          }}
          className="absolute inset-0 rounded-full bg-cyan-400"
        />
      </motion.span>

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: index * 0.15 + 0.2 }}
        className="flex flex-col md:flex-row md:items-baseline md:justify-between gap-2 md:gap-4"
      >
        <div className="flex items-center gap-2 text-sm font-mono text-cyan-500/90">
          <motion.div
            animate={{ rotate: [0, 5, -5, 0] }}
            transition={{ duration: 2, repeat: Infinity, repeatDelay: 3 }}
          >
            <Briefcase size={16} className="text-cyan-400/90" />
          </motion.div>
          <span>{job.period}</span>
          <span className="hidden md:inline text-slate-500">•</span>
          <span className="hidden md:inline text-slate-600">{job.location}</span>
        </div>

        <p className="text-xs md:text-sm font-mono uppercase tracking-[0.18em] text-slate-500">
          {String(index + 1).padStart(2, "0")}
        </p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: index * 0.15 + 0.3 }}
        className="mt-3 md:mt-4"
      >
        <h3 className="text-xl md:text-2xl font-semibold text-[var(--foreground)] leading-snug group-hover:text-cyan-400 transition-colors duration-300">
          {job.role}
          <span className="text-cyan-300 group-hover:text-cyan-200 font-normal transition-colors duration-300"> · {job.company}</span>
        </h3>
      </motion.div>

      <motion.ul
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: index * 0.15 + 0.4 }}
        className="mt-3 md:mt-4 space-y-2 text-sm md:text-base experience-text"
      >
        {job.achievements.map((item, i) => (
          <motion.li
            key={i}
            initial={{ opacity: 0, x: -10 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.15 + 0.5 + i * 0.1 }}
            className="flex gap-2"
          >
            <motion.span
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15 + 0.5 + i * 0.1 + 0.1, duration: 0.3 }}
              className="mt-2 h-[2px] w-4 flex-shrink-0 rounded-full bg-cyan-400/60"
            />
            <p>{item}</p>
          </motion.li>
        ))}
      </motion.ul>
    </motion.li>
  );
};

export const Experience: React.FC = () => {
  const { sections } = PORTFOLIO_DATA;
  const experienceSection = sections.experience;
  
  return (
    <section id={experienceSection.id} className="py-24 bg-[var(--background)] px-4">
      <div className="max-w-7xl mx-auto">
        <SectionHeader
          number={experienceSection.number}
          title={experienceSection.title}
          id={experienceSection.id}
        />

        <div className="mt-8 md:mt-10 grid grid-cols-[auto,1fr] gap-x-6">
          {/* Enhanced Vertical Timeline Line - Magenta/Pink */}
          <div className="relative">
            {/* Main timeline line with magenta/pink gradient */}
            <motion.div
              initial={{ scaleY: 0 }}
              whileInView={{ scaleY: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1.2, ease: "easeInOut" }}
              className="absolute left-3 md:left-3 top-0 h-full w-1 bg-gradient-to-b from-fuchsia-500 via-pink-500 via-fuchsia-400/80 to-transparent origin-top"
              style={{
                boxShadow: "0 0 15px rgba(236, 72, 153, 0.6), 0 0 30px rgba(236, 72, 153, 0.3), 0 0 45px rgba(236, 72, 153, 0.1)",
              }}
            />
            
            {/* Animated glow effect - magenta/pink */}
            <motion.div
              animate={{
                opacity: [0.4, 0.8, 0.4],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="absolute left-3 md:left-3 top-0 h-full w-1 bg-fuchsia-400/50 blur-md origin-top"
              style={{
                boxShadow: "0 0 20px rgba(236, 72, 153, 0.5)",
              }}
            />
            
            {/* Additional outer glow for more visibility */}
            <motion.div
              animate={{
                opacity: [0.2, 0.5, 0.2],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 0.5,
              }}
              className="absolute left-3 md:left-3 top-0 h-full w-2 bg-fuchsia-500/30 blur-xl origin-top"
            />
          </div>

          {/* Timeline items */}
          <ul className="space-y-8 md:space-y-10">
          {PORTFOLIO_DATA.experience.map((job, index) => (
            <ExperienceItem key={index} job={job} index={index} />
          ))}
          </ul>
        </div>
      </div>
    </section>
  );
};


