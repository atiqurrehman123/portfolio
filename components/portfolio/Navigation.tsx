"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Download, Menu, X, Moon, Sun } from "lucide-react";
import { PORTFOLIO_DATA } from "./data";

export const Navigation: React.FC = () => {
  const { personalInfo: { resumeUrl }, navigation, sections, footer, hero } = PORTFOLIO_DATA;
  
  // Filter nav links based on both link visibility and section visibility
  const navLinks = navigation.links.filter((link) => {
    if (link.href === "#about") return hero.visible;
    if (link.href === "#projects") return sections.projects.visible;
    if (link.href === "#experience") return sections.experience.visible;
    if (link.href === "#skills") return sections.skills.visible;
    if (link.href === "#contact") return footer.visible;
    return true;
  });
  const [isOpen, setIsOpen] = useState(false);
  const [theme, setTheme] = useState<"light" | "dark">("dark");

  useEffect(() => {
    if (typeof window === "undefined") return;
    const stored = window.localStorage.getItem("theme");
    if (stored === "light" || stored === "dark") {
      setTheme(stored);
      document.documentElement.dataset.theme = stored;
      return;
    }
    // Default to dark mode if no preference is stored
    const initial = "dark";
    setTheme(initial);
    document.documentElement.dataset.theme = initial;
  }, []);

  const toggleTheme = () => {
    const next = theme === "dark" ? "light" : "dark";
    setTheme(next);
    document.documentElement.dataset.theme = next;
    if (typeof window !== "undefined") {
      window.localStorage.setItem("theme", next);
    }
  };

  return (
    <motion.header
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="fixed w-full z-50 transition-all duration-300 bg-[color-mix(in_srgb,var(--background)_92%,#020617_8%)] backdrop-blur-md border-none border-slate-200/60 data-[theme=dark]:border-slate-800/70 py-4"
      aria-label="Main site header"
    >
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        <motion.button
          type="button"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="text-3xl font-extrabold text-cyan-400 font-mono tracking-tighter cursor-pointer"
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        >
          {navigation.logo}
        </motion.button>

        <nav
          className="hidden md:flex space-x-6 items-center"
          aria-label="Primary"
        >
          {navLinks.map((link, index) => (
            <motion.a
              key={link.name}
              href={link.href}
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 + 0.3, duration: 0.4 }}
              whileHover={{ y: -2 }}
              className="nav-link hover:text-cyan-400 transition-colors text-sm font-medium uppercase tracking-wider font-mono"
            >
              {link.name}
            </motion.a>
          ))}

          <motion.button
            type="button"
            onClick={toggleTheme}
            whileHover={{ scale: 1.1, rotate: 15 }}
            whileTap={{ scale: 0.9 }}
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.7, duration: 0.3 }}
            className="nav-icon transition-colors p-2 rounded-full border border-gray-400/60 hover:border-cyan-400/60"
            aria-label={`Activate ${theme === "dark" ? "light" : "dark"} mode`}
          >
            <motion.div
              key={theme}
              initial={{ rotate: -180, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              transition={{ duration: 0.3 }}
            >
              {theme === "dark" ? <Sun size={18} /> : <Moon size={18} />}
            </motion.div>
          </motion.button>

          <motion.a
            href={resumeUrl}
            download
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.8, duration: 0.4 }}
            whileHover={{ scale: 1.05, boxShadow: "0 0 20px rgba(34, 211, 238, 0.4)" }}
            whileTap={{ scale: 0.95 }}
            className="text-cyan-400 border border-cyan-400 px-4 py-2 rounded-lg hover:bg-cyan-400/10 transition-colors text-sm font-mono shadow-md hover:shadow-cyan-500/20"
          >
            <Download size={18} className="inline-block mr-2" /> CV
          </motion.a>
        </nav>

        <div className="flex items-center gap-3 md:hidden">
          <motion.button
            type="button"
            onClick={toggleTheme}
            whileHover={{ scale: 1.1, rotate: 15 }}
            whileTap={{ scale: 0.9 }}
            className="nav-icon transition-colors p-2 rounded-full border border-gray-400/60 hover:border-cyan-400/60"
            aria-label={`Activate ${theme === "dark" ? "light" : "dark"} mode`}
          >
            <motion.div
              key={theme}
              initial={{ rotate: -180, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              transition={{ duration: 0.3 }}
            >
              {theme === "dark" ? <Sun size={20} /> : <Moon size={20} />}
            </motion.div>
          </motion.button>

          <motion.button
            type="button"
            onClick={() => setIsOpen((open) => !open)}
            whileTap={{ scale: 0.9 }}
            className="nav-icon"
            aria-label={isOpen ? "Close navigation menu" : "Open navigation menu"}
            aria-expanded={isOpen}
            aria-controls="mobile-menu"
          >
            <AnimatePresence mode="wait">
              {isOpen ? (
                <motion.div
                  key="close"
                  initial={{ rotate: -90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: 90, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <X size={28} />
                </motion.div>
              ) : (
                <motion.div
                  key="menu"
                  initial={{ rotate: 90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: -90, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <Menu size={28} />
                </motion.div>
              )}
            </AnimatePresence>
          </motion.button>
        </div>
      </div>

      <AnimatePresence>
        {isOpen && (
          <>
            <motion.nav
              id="mobile-menu"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
              className="mobile-menu md:hidden absolute top-full left-0 w-full p-4 flex flex-col space-y-4 shadow-xl z-50"
              aria-label="Mobile primary"
            >
              {navLinks.map((link, index) => (
                <motion.a
                  key={link.name}
                  href={link.href}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ delay: index * 0.1, duration: 0.3 }}
                  onClick={() => setIsOpen(false)}
                  whileHover={{ x: 10 }}
                  className="mobile-link hover:text-cyan-400 py-3 block text-center font-mono"
                >
                  {link.name}
                </motion.a>
              ))}
            </motion.nav>

            <motion.button
              type="button"
              aria-label="Close navigation menu"
              onClick={() => setIsOpen(false)}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="md:hidden fixed inset-0 top-16 bg-black/30 z-40"
            />
          </>
        )}
      </AnimatePresence>
    </motion.header>
  );
};


