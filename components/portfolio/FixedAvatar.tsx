"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { PORTFOLIO_DATA } from "./data";

export const FixedAvatar: React.FC = () => {
  const { avatarUrl, name } = PORTFOLIO_DATA.personalInfo;

  return (
    <motion.div
      initial={{ opacity: 0, x: 50 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.8, delay: 1 }}
      className="hidden lg:block fixed right-6 top-1/2 transform -translate-y-1/2 z-40"
    >
      <motion.div
        whileHover={{ scale: 1.1, rotate: 5 }}
        whileTap={{ scale: 0.95 }}
        className="w-24 h-24 rounded-full border-2 border-cyan-500/80 overflow-hidden shadow-2xl shadow-cyan-500/20 cursor-pointer"
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
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.7 }}
        transition={{ delay: 1.5 }}
        className="text-center mt-2 text-xs font-mono text-cyan-400"
      >
        {name.split(" ")[0]}
      </motion.p>
    </motion.div>
  );
};


