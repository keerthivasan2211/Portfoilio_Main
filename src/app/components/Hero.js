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
      metrics: [
        "API Latency: 118ms",
        "Uptime: 99.99%",
        "Active Users: 1.4k+",
        "MongoDB Indexed",
        "JWT Auth Secured",
        "Node Services Running",
        "Cache Optimized",
        "CI/CD Pipeline Active",
      ],
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
      metrics: [
        "WooCommerce Sync: Active",
        "Shopify Sync: Active",
        "HubSpot Automation Running",
        "Data Sync Accuracy: 99%",
        "Webhook Listeners Active",
        "CRM Workflow Triggered",
        "API Rate Limit Optimized",
        "Multi-Tenant Enabled",
      ],
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
      metrics: [
        "Prediction Model Running",
        "Workflow Intelligence Active",
        "Automation Accuracy: 96%",
        "Smart Decision Engine Enabled",
        "Task Reduction: 60%",
        "API Orchestration Layer Active",
        "Real-time Data Processing",
        "AI Optimization Stable",
      ],
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

        {/* LEFT SIDE */}
        <div className="text-left space-y-6">

          <h1 className="text-5xl md:text-6xl font-extrabold leading-tight">
            Keerthivasan{" "}
            <span className="text-[var(--accent-9)]">S</span>
          </h1>

          <AnimatePresence mode="wait">
            <motion.div
              key={currentRole}
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -40 }}
              transition={{ duration: 0.6 }}
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

          <p className="text-sm text-[var(--gray-10)]">
            Specialized in React, Node.js, MongoDB, CRM integrations,
            REST APIs, and scalable system architecture.
          </p>

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

        {/* RIGHT SIDE */}
        <div className="relative flex justify-center items-center">

          <AnimatePresence mode="wait">
            <motion.div
              key={currentRole}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.5 }}
              className="relative w-[420px] h-[420px] flex items-center justify-center"
            >

              {/* Rotating Rings */}
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
                className="absolute w-[380px] h-[380px] rounded-full border border-[var(--accent-6)] opacity-30"
              />

              <motion.div
                animate={{ rotate: -360 }}
                transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
                className="absolute w-[280px] h-[280px] rounded-full border border-[var(--accent-8)] opacity-40"
              />

              {/* Core */}
              <div className="relative z-10 w-32 h-32 rounded-full 
                bg-[var(--gray-2)] 
                border border-[var(--gray-6)] 
                flex flex-col items-center justify-center 
                shadow-2xl">

                <span className="text-[var(--accent-9)] font-bold text-lg text-center px-3">
                  {roles[currentRole].title.split(" ")[0]}
                </span>

                <p className="text-xs text-[var(--gray-10)] mt-1">
                           </p>
              </div>

              {/* Dynamic Metrics */}
              {roles[currentRole].metrics.map((item, index) => (
                <motion.div
                  key={index}
                  animate={{ y: [0, -8, 0] }}
                  transition={{
                    duration: 3 + index,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                  className={`
                    absolute
                    ${index === 0 ? "-top-5 left-1/2 -translate-x-1/2" : ""}
                    ${index === 1 ? "-bottom-5 left-1/2 -translate-x-1/2" : ""}
                    ${index === 2 ? "-left-10 top-1/2 -translate-y-1/2" : ""}
                    ${index === 3 ? "-right-10 top-1/2 -translate-y-1/2" : ""}
                    ${index === 4 ? "top-12 right-6" : ""}
                    ${index === 5 ? "top-12 left-6" : ""}
                    ${index === 6 ? "bottom-12 right-6" : ""}
                    ${index === 7 ? "bottom-12 left-6" : ""}
                    w-44 p-3 rounded-xl
                    bg-[var(--gray-2)]
                    border border-[var(--gray-6)]
                    shadow-lg
                  `}
                >
                  <p className="text-xs text-[var(--gray-11)] text-center">
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
