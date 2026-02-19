"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import { Mail, Linkedin } from "lucide-react";

export default function Hero() {
  const roles = [
    {
      title: "FullStack Developer",
      description: (
        <>
          I design and develop scalable web applications using the{" "}
          <span className="text-[var(--accent-9)] font-semibold">
            MERN stack
          </span>
          . From responsive user interfaces to secure{" "}
          <span className="text-[var(--accent-9)] font-semibold">
            REST APIs
          </span>
          , I build complete end-to-end systems focused on performance,
          scalability, and real business impact.
        </>
      ),
      dashboard: {
        items: [
          "Frontend Performance Optimized",
          "Backend Services Running",
          "Database Indexed & Secure",
        ],
      },
    },
    {
      title: "CRM & Integration Developer",
      description: (
        <>
          I specialize in integrating{" "}
          <span className="text-[var(--accent-9)] font-semibold">
            WooCommerce
          </span>{" "}
          and{" "}
          <span className="text-[var(--accent-9)] font-semibold">
            Shopify
          </span>{" "}
          with CRM platforms to automate workflows, sync data in real-time,
          and reduce operational overhead for growing businesses.
        </>
      ),
      dashboard: {
        items: [
          "WooCommerce Sync Active",
          "Shopify Sync Active",
          "CRM Automation Running",
        ],
      },
    },
    {
      title: "AI & Automation Enthusiast",
      description: (
        <>
          I build{" "}
          <span className="text-[var(--accent-9)] font-semibold">
            AI-driven automation systems
          </span>{" "}
          that eliminate repetitive tasks and improve decision-making
          through intelligent workflows and smart API integrations.
        </>
      ),
      dashboard: {
        items: [
          "Workflow Intelligence Active",
          "Prediction Model Running",
          "Smart Decision Engine Enabled",
        ],
      },
    },
  ];

  const [currentRole, setCurrentRole] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentRole((prev) => (prev + 1) % roles.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="min-h-screen flex items-center px-8">
      <div className="max-w-7xl mx-auto w-full grid md:grid-cols-2 gap-16 items-center">

        {/* ================= LEFT SIDE ================= */}
        <div className="text-left space-y-6">

          {/* Small Intro Tag */}
          <p className="text-sm uppercase tracking-widest text-[var(--accent-9)] font-medium">
            {/* Professional & Innovative Developer */}
          </p>

          {/* Name */}
          <h1 className="text-5xl md:text-6xl font-extrabold leading-tight">
            Keerthivasan{" "}
            <span className="text-[var(--accent-9)]">S</span>
          </h1>

          {/* Dynamic Role */}
          <AnimatePresence mode="wait">
            <motion.div
              key={currentRole}
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -40 }}
              transition={{ duration: 0.8, ease: "easeInOut" }}
              className="min-h-[160px]"
            >
              <h2 className="text-2xl font-semibold mb-4 text-[var(--accent-10)]">
                {roles[currentRole].title}
              </h2>

              <p className="text-[var(--gray-11)] leading-relaxed max-w-xl">
                {roles[currentRole].description}
              </p>
            </motion.div>
          </AnimatePresence>

          {/* Skill Summary */}
          <p className="text-sm text-[var(--gray-10)]">
            Specialized in React, Node.js, MongoDB, CRM integrations,
            REST APIs, and scalable system architecture.
          </p>

          {/* Status */}
          <p className="text-sm font-medium text-[var(--accent-9)]">
            {/* 🚀 Open to Full-Time Roles & Freelance Opportunities */}
          </p>

          {/* Buttons */}
          <div className="flex flex-wrap gap-4 pt-2">
            <a
              href="#contact"
              className="px-6 py-3 rounded-xl bg-[var(--accent-9)] text-[var(--accent-contrast)] hover:bg-[var(--accent-10)] transition"
            >
              Get In Touch
            </a>

            <a
              href="https://www.linkedin.com/in/keerthvasan2282"
              target="_blank"
              className="px-6 py-3 rounded-xl border border-[var(--gray-6)] hover:bg-[var(--gray-3)] transition flex items-center gap-2"
            >
              <Linkedin size={18} />
              LinkedIn
            </a>

            <a
              href="mailto:keerthivasan903@gmail.com"
              className="px-6 py-3 rounded-xl border border-[var(--gray-6)] hover:bg-[var(--gray-3)] transition flex items-center gap-2"
            >
              <Mail size={18} />
              Email
            </a>
          </div>
        </div>

        {/* ================= RIGHT SIDE ================= */}
        <div className="relative flex justify-center items-center">

          <AnimatePresence mode="wait">
            <motion.div
              key={currentRole}
              initial={{ opacity: 0, scale: 0.85 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.85 }}
              transition={{ duration: 0.6 }}
              className="relative w-[380px] h-[380px] flex items-center justify-center"
            >
              {/* Glowing Core */}
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
                className="absolute w-32 h-32 rounded-full bg-[var(--accent-3)] blur-2xl opacity-60"
              />

              <div className="relative z-10 w-28 h-28 rounded-full bg-[var(--gray-2)] border border-[var(--gray-6)] flex items-center justify-center shadow-xl">
                <span className="text-[var(--accent-9)] font-bold text-lg">
                  {roles[currentRole].title.split(" ")[0]}
                </span>
              </div>

              {roles[currentRole].dashboard.items.map((item, index) => (
                <motion.div
                  key={index}
                  animate={{ y: [0, -10, 0] }}
                  transition={{
                    duration: 4 + index,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                  className={`
                    absolute
                    ${index === 0 ? "top-2 left-1/2 -translate-x-1/2" : ""}
                    ${index === 1 ? "bottom-4 left-6" : ""}
                    ${index === 2 ? "bottom-4 -right-10" : ""}
                    w-44 p-4 rounded-xl
                    bg-[var(--gray-2)]
                    border border-[var(--gray-6)]
                    shadow-xl
                  `}
                >
                  <p className="text-sm text-[var(--gray-11)] text-center">
                    {item}
                  </p>
                </motion.div>
              ))}
            </motion.div>
          </AnimatePresence>

        </div>

      </div>
    </section>
  );
}