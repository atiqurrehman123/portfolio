"use client";

import { motion } from "framer-motion";
import { Briefcase, MapPin } from "lucide-react";
import { PORTFOLIO_DATA } from "./data";
import { SectionHeader } from "./SectionHeader";

interface ExperienceItemProps {
  job: (typeof PORTFOLIO_DATA.experience)[number];
  index: number;
}

const ExperienceItem: React.FC<ExperienceItemProps> = ({ job, index }) => {
  return (
    <motion.li
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.5, delay: index * 0.1, ease: "easeOut" }}
      className="relative pl-12 md:pl-16 group"
    >
      {/* Timeline dot */}
      <span className="absolute left-2.5 md:left-4 top-7 z-10 flex h-4 w-4 -translate-x-1/2 items-center justify-center">
        <span
          className="h-4 w-4 rounded-full ring-4 ring-[var(--background)]"
          style={{ background: "var(--brand-gradient)" }}
        />
        <span
          className="absolute inset-0 rounded-full opacity-60 blur-[3px]"
          style={{ background: "var(--brand-gradient)" }}
        />
      </span>

      {/* Card */}
      <motion.div
        whileHover={{ y: -4 }}
        transition={{ duration: 0.25 }}
        className="glass rounded-2xl border border-[var(--border-subtle)] p-5 md:p-6 shadow-lg transition-colors duration-300 hover:border-[var(--accent-2)]/50"
      >
        <div className="flex flex-wrap items-center gap-x-3 gap-y-2">
          <span className="inline-flex items-center gap-1.5 rounded-full bg-[var(--accent-2)]/10 px-3 py-1 text-xs font-mono font-medium text-[var(--accent-2)]">
            <Briefcase size={13} />
            {job.period}
          </span>
          <span className="inline-flex items-center gap-1 text-xs font-mono text-[var(--foreground)]/50">
            <MapPin size={13} />
            {job.location}
          </span>
        </div>

        <h3 className="mt-4 text-lg md:text-xl font-bold leading-snug text-[var(--foreground)]">
          {job.role}
        </h3>
        <p className="gradient-text inline-block text-sm md:text-base font-semibold">
          {job.company}
        </p>

        <ul className="mt-4 space-y-2.5">
          {job.achievements.map((item, i) => (
            <li key={i} className="flex gap-3 text-sm md:text-[15px] leading-relaxed text-[var(--foreground)]/75">
              <span
                className="mt-2 h-1.5 w-1.5 flex-shrink-0 rounded-full"
                style={{ background: "var(--brand-gradient)" }}
              />
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </motion.div>
    </motion.li>
  );
};

export const Experience: React.FC = () => {
  const { sections } = PORTFOLIO_DATA;
  const experienceSection = sections.experience;

  return (
    <section id={experienceSection.id} className="py-24 bg-[var(--background)] px-4">
      <div className="max-w-4xl mx-auto">
        <SectionHeader
          number={experienceSection.number}
          title={experienceSection.title}
          id={experienceSection.id}
        />

        <div className="relative mt-10">
          {/* Vertical timeline spine */}
          <motion.div
            initial={{ scaleY: 0 }}
            whileInView={{ scaleY: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.1, ease: "easeInOut" }}
            className="absolute left-2.5 md:left-4 top-2 bottom-2 w-[2px] origin-top rounded-full opacity-70"
            style={{
              background:
                "linear-gradient(to bottom, var(--accent-1), var(--accent-2), var(--accent-3), transparent)",
            }}
          />

          <ul className="space-y-6 md:space-y-8">
            {PORTFOLIO_DATA.experience.map((job, index) => (
              <ExperienceItem key={index} job={job} index={index} />
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};
