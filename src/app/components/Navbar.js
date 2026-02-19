"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Sun, Moon } from "lucide-react";
import { useTheme } from "./ThemeContext";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [active, setActive] = useState("home");
  const { theme, toggleTheme } = useTheme();

  const menuItems = [
    { label: "Home", id: "home" },
    { label: "Services", id: "services" },
    { label: "About", id: "about" },
    { label: "Education", id: "education" },
    { label: "Projects", id: "projects" },
    { label: "Contact", id: "contact" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      menuItems.forEach((item) => {
        const section = document.getElementById(item.id);
        if (section) {
          const rect = section.getBoundingClientRect();
          if (rect.top <= 150 && rect.bottom >= 150) {
            setActive(item.id);
          }
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
      setIsOpen(false);
    }
  };

  return (
    <div className="fixed top-4 left-1/2 -translate-x-1/2 w-full max-w-6xl px-4 z-50">
      <nav className="relative bg-[var(--gray-2)] backdrop-blur-md border border-[var(--gray-6)] rounded-2xl shadow-lg">

        <div className="px-6 py-4 flex items-center justify-center">

          {/* Logo */}
          <button
            onClick={() => scrollToSection("home")}
            className="absolute left-6 text-[var(--accent-9)] font-bold text-lg tracking-wide"
          >
            KV
          </button>

          {/* Theme Toggle */}
          <button
            onClick={toggleTheme}
            className="absolute right-16 p-2 rounded-lg bg-[var(--gray-3)] hover:bg-[var(--gray-4)] transition"
          >
            {theme === "light" ? <Moon size={18} /> : <Sun size={18} />}
          </button>

          {/* Desktop Menu */}
          <div className="hidden md:flex gap-8 font-medium text-sm text-[var(--gray-11)]">
            {menuItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`transition-colors duration-200 ${
                  active === item.id
                    ? "text-[var(--accent-9)]"
                    : "hover:text-[var(--accent-9)]"
                }`}
              >
                {item.label}
              </button>
            ))}
          </div>

          {/* Mobile Hamburger */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden absolute right-6 flex flex-col gap-1"
          >
            <span
              className={`w-6 h-[2px] bg-[var(--gray-12)] transition-all ${
                isOpen ? "rotate-45 translate-y-1.5" : ""
              }`}
            />
            <span
              className={`w-6 h-[2px] bg-[var(--gray-12)] transition-all ${
                isOpen ? "opacity-0" : ""
              }`}
            />
            <span
              className={`w-6 h-[2px] bg-[var(--gray-12)] transition-all ${
                isOpen ? "-rotate-45 -translate-y-1.5" : ""
              }`}
            />
          </button>

        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="md:hidden border-t border-[var(--gray-6)] px-6 py-6 flex flex-col items-center gap-6 text-[var(--gray-11)] text-lg"
            >
              {menuItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`transition-colors duration-200 ${
                    active === item.id
                      ? "text-[var(--accent-9)]"
                      : "hover:text-[var(--accent-9)]"
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </motion.div>
          )}
        </AnimatePresence>

      </nav>
    </div>
  );
}