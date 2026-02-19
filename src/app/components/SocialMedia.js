"use client";

import { motion } from "framer-motion";
import { Github, Linkedin, Mail, Globe } from "lucide-react";

export default function Social() {
  const links = [
    {
      name: "LinkedIn",
      icon: <Linkedin size={16} />,
      url: "https://www.linkedin.com/in/keerthvasan2282",
    },
    {
      name: "GitHub",
      icon: <Github size={16} />,
      url: "https://github.com/keerthivasan2211",
    },
    {
      name: "Email",
      icon: <Mail size={16} />,
      url: "mailto:keerthivasan903@gmail.com",
    },
  ];

  return (
    <footer className="py-6 border-t border-[var(--gray-6)]/30 text-center">
      <div className="max-w-xl mx-auto">

        <div className="flex justify-center gap-4 mb-4">
          {links.map((link) => (
            <motion.a
              key={link.name}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              className="w-9 h-9 rounded-lg bg-[var(--gray-2)]/60 border border-[var(--gray-6)]/40 flex items-center justify-center text-[var(--gray-11)] hover:bg-[var(--accent-9)] hover:text-white transition-all duration-300"
            >
              {link.icon}
            </motion.a>
          ))}
        </div>

        <p className="text-[10px] text-[var(--gray-10)]">
          © {new Date().getFullYear()} Keerthivasan S
        </p>

      </div>
    </footer>
  );
}