"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { PORTFOLIO_DATA } from "./data";

export const FixedAvatar: React.FC = () => {
  const { avatarUrl, name } = PORTFOLIO_DATA.personalInfo;
  const [scrolledPastHero, setScrolledPastHero] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      // Show only once the hero (≈ viewport height) is scrolled past
      setScrolledPastHero(window.scrollY > window.innerHeight * 0.8);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <AnimatePresence>
      {scrolledPastHero && (
    <motion.div
      initial={{ opacity: 0, x: 50 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: 50 }}
      transition={{ duration: 0.5 }}
      className="hidden lg:block fixed right-6 top-1/2 transform -translate-y-1/2 z-40"
    >
      <motion.div
        whileHover={{ scale: 1.1, rotate: 5 }}
        whileTap={{ scale: 0.95 }}
        className="w-20 h-20 rounded-full border-2 border-[var(--accent-2)]/80 overflow-hidden shadow-2xl shadow-[var(--accent-2)]/20 cursor-pointer"
      >
        <motion.div
          whileHover={{ scale: 1.1 }}
          transition={{ duration: 0.3 }}
        >
          <Image
            src={avatarUrl}
            alt={name}
            width={96}
            height={96}
            className="w-full h-full object-cover rounded-full"
            priority
          />
        </motion.div>
      </motion.div>
      <p className="text-center mt-2 text-xs font-mono text-[var(--accent-2)]">
        {name.split(" ")[0]}
      </p>
    </motion.div>
      )}
    </AnimatePresence>
  );
};


