"use client";

import { motion } from "framer-motion";

interface SectionHeaderProps {
  number: string;
  title: string;
  id: string;
}

export const SectionHeader: React.FC<SectionHeaderProps> = ({
  number,
  title,
  id,
}) => {
  return (
    <motion.h2
      id={id}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="flex items-center text-3xl font-extrabold text-[var(--foreground)] mb-12"
    >
      <motion.span
        initial={{ opacity: 0, x: -20 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.1 }}
        className="text-cyan-400 font-mono text-xl mr-3"
      >
        {number}.
      </motion.span>
      <motion.span
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        {title}
      </motion.span>
      <motion.span
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.3, ease: "easeOut" }}
        className="ml-4 h-px bg-gray-700/50 flex-grow max-w-sm origin-left"
      />
    </motion.h2>
  );
};


