"use client";

import {
  Code,
  Zap,
  Box,
  Type,
  LayoutGrid,
  Server,
  Database,
  Key,
  Link,
  GitBranch,
  Package,
  Smartphone,
  FileText,
  ScrollText,
  Brush,
} from "lucide-react";
import { motion } from "framer-motion";
import { PORTFOLIO_DATA } from "./data";
import { SectionHeader } from "./SectionHeader";

const skillIconMap = {
  Code,
  Zap,
  Box,
  Type,
  LayoutGrid,
  Server,
  Database,
  Key,
  Link,
  GitBranch,
  Package,
  Smartphone,
  FileText,
  ScrollText,
  Brush,
} as const;

type SkillIconKey = keyof typeof skillIconMap;

const Skills: React.FC = () => {
  const { sections, skills } = PORTFOLIO_DATA;
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.05,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.8, y: 20 },
    visible: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: {
        duration: 0.4,
      },
    },
  };

  return (
    <section id={sections.skills.id} className="py-24 bg-[var(--background)] px-4">
      <div className="max-w-7xl mx-auto">
        <SectionHeader
          number={sections.skills.number}
          title={sections.skills.title}
          id={sections.skills.id}
        />

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4"
        >
          {skills.map((skill, index) => {
            const Icon =
              skillIconMap[skill.icon as SkillIconKey] ?? Code;
            return (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ 
                  scale: 1.05, 
                  y: -4,
                  borderColor: "rgba(34, 211, 238, 1)",
                  boxShadow: "0 10px 30px rgba(34, 211, 238, 0.2)"
                }}
                className="px-5 py-3 bg-slate-900/95 border border-slate-800 rounded-lg text-slate-100 font-mono text-sm text-center hover:border-cyan-400 hover:text-cyan-300 transition-all cursor-default shadow-lg hover:shadow-cyan-500/10 flex items-center justify-center space-x-2"
              >
                <motion.div
                  whileHover={{ rotate: [0, -10, 10, 0] }}
                  transition={{ duration: 0.5 }}
                >
                  <Icon size={18} className={`${skill.color} flex-shrink-0`} />
                </motion.div>
                <span>{skill.name}</span>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
