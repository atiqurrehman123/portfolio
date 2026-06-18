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
  const [theme, setTheme] = useState<"light" | "dark">("light");

  useEffect(() => {
    if (typeof window === "undefined") return;
    const stored = window.localStorage.getItem("theme");
    if (stored === "light" || stored === "dark") {
      setTheme(stored);
      document.documentElement.dataset.theme = stored;
      return;
    }
    // Default to light mode if no preference is stored
    const initial = "light";
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
      className="fixed top-0 left-0 z-50 flex w-full justify-center px-4 pt-4"
      aria-label="Main site header"
    >
      <div className="glass flex w-full max-w-5xl items-center justify-between rounded-2xl px-4 py-2.5 shadow-xl shadow-black/5">
        {/* Logo */}
        <motion.button
          type="button"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="gradient-text text-2xl font-extrabold font-mono tracking-tighter cursor-pointer px-1"
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        >
          {navigation.logo}
        </motion.button>

        {/* Desktop links — centered pill group */}
        <nav
          className="hidden md:flex items-center gap-1 rounded-full bg-[var(--foreground)]/[0.04] px-2 py-1"
          aria-label="Primary"
        >
          {navLinks.map((link, index) => (
            <motion.a
              key={link.name}
              href={link.href}
              initial={{ opacity: 0, y: -12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.08 + 0.3, duration: 0.4 }}
              className="nav-link rounded-full px-4 py-1.5 text-sm font-medium tracking-wide transition-colors hover:bg-[var(--foreground)]/[0.06] hover:text-[var(--accent-2)]"
            >
              {link.name}
            </motion.a>
          ))}
        </nav>

        {/* Desktop actions */}
        <div className="hidden md:flex items-center gap-2">
          <motion.button
            type="button"
            onClick={toggleTheme}
            whileHover={{ scale: 1.08 }}
            whileTap={{ scale: 0.9 }}
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.7, duration: 0.3 }}
            className="nav-icon flex h-9 w-9 items-center justify-center rounded-full border border-[var(--border-subtle)] transition-colors hover:border-[var(--accent-2)]/60 hover:text-[var(--accent-2)]"
            aria-label={`Activate ${theme === "dark" ? "light" : "dark"} mode`}
          >
            <motion.div
              key={theme}
              initial={{ rotate: -180, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              transition={{ duration: 0.3 }}
            >
              {theme === "dark" ? <Sun size={17} /> : <Moon size={17} />}
            </motion.div>
          </motion.button>

          <motion.a
            href={resumeUrl}
            download
            initial={{ opacity: 0, x: -16 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.8, duration: 0.4 }}
            whileHover={{ scale: 1.05, y: -1 }}
            whileTap={{ scale: 0.95 }}
            className="btn-gradient flex items-center gap-2 rounded-full px-4 py-2 text-sm font-semibold"
          >
            <Download size={16} /> Resume
          </motion.a>
        </div>

        {/* Mobile actions */}
        <div className="flex items-center gap-2 md:hidden">
          <motion.button
            type="button"
            onClick={toggleTheme}
            whileHover={{ scale: 1.08 }}
            whileTap={{ scale: 0.9 }}
            className="nav-icon flex h-9 w-9 items-center justify-center rounded-full border border-[var(--border-subtle)] transition-colors hover:border-[var(--accent-2)]/60"
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

          <motion.button
            type="button"
            onClick={() => setIsOpen((open) => !open)}
            whileTap={{ scale: 0.9 }}
            className="nav-icon flex h-9 w-9 items-center justify-center rounded-full border border-[var(--border-subtle)]"
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
                  <X size={22} />
                </motion.div>
              ) : (
                <motion.div
                  key="menu"
                  initial={{ rotate: 90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: -90, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <Menu size={22} />
                </motion.div>
              )}
            </AnimatePresence>
          </motion.button>
        </div>
      </div>

      {/* Mobile dropdown */}
      <AnimatePresence>
        {isOpen && (
          <>
            <motion.nav
              id="mobile-menu"
              initial={{ opacity: 0, y: -12, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -12, scale: 0.98 }}
              transition={{ duration: 0.25, ease: "easeOut" }}
              className="glass absolute top-full left-4 right-4 mt-2 flex flex-col gap-1 rounded-2xl p-3 shadow-2xl md:hidden"
              aria-label="Mobile primary"
            >
              {navLinks.map((link, index) => (
                <motion.a
                  key={link.name}
                  href={link.href}
                  initial={{ opacity: 0, x: -12 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -12 }}
                  transition={{ delay: index * 0.06, duration: 0.25 }}
                  onClick={() => setIsOpen(false)}
                  className="rounded-xl px-4 py-3 text-center font-medium text-[var(--foreground)] transition-colors hover:bg-[var(--foreground)]/[0.06] hover:text-[var(--accent-2)]"
                >
                  {link.name}
                </motion.a>
              ))}

              <a
                href={resumeUrl}
                download
                onClick={() => setIsOpen(false)}
                className="btn-gradient mt-1 flex items-center justify-center gap-2 rounded-xl px-4 py-3 text-sm font-semibold"
              >
                <Download size={16} /> Download Resume
              </a>
            </motion.nav>

            <motion.button
              type="button"
              aria-label="Close navigation menu"
              onClick={() => setIsOpen(false)}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="md:hidden fixed inset-0 top-20 z-[-1] bg-black/30"
            />
          </>
        )}
      </AnimatePresence>
    </motion.header>
  );
};
