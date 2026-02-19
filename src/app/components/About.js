"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export default function About() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  const experiences = [
     {
      company: "Integrated Enterprises",
      role: "Full Stack Developer Trainee",
      duration: "2025",
      description:
        "Developing scalable web applications and CRM automation systems while optimizing backend performance and database architecture.",
      metrics: [
        { label: "Pages Developed", value: "20+" },
        { label: "Performance Boost", value: "40%" },
      ],
      tech: ["React", "Express", "MongoDB", "HubSpot", "REST APIs"],
    },
    {
      company: "Tech Vaseegrah",
      role: "Full Stack Developer Intern",
      duration: "2025",
      description:
        "Built custom SaaS applications and integrated WooCommerce & Shopify APIs for real-time inventory sync, improving operational efficiency through automation.",
      metrics: [
        { label: "Efficiency Improved", value: "60%" },
        { label: "Sync Accuracy", value: "95%" },
      ],
      tech: ["React", "Node.js", "MongoDB", "WooCommerce API", "Shopify API"],
    },
   
  ];

  const fadeUp = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <section id="about" className="relative py-24 px-6 overflow-hidden">

      {/* Background Glow */}
      <div className="absolute top-20 left-1/2 -translate-x-1/2 w-[500px] h-[300px] bg-[var(--accent-4)] opacity-30 blur-[120px] rounded-full"></div>

      <div className="relative max-w-5xl mx-auto">

        {/* Header */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-extrabold mb-4 relative inline-block">
            <span className="bg-gradient-to-r from-[var(--accent-9)] to-[var(--accent-6)] bg-clip-text text-transparent">
              Professional Experience
            </span>
            <span className="absolute left-0 -bottom-2 w-full h-2 bg-[var(--accent-5)] blur-xl opacity-60 rounded-full"></span>
          </h2>

          <p className="text-sm md:text-base text-[var(--gray-11)] max-w-xl mx-auto mt-6">
            Delivering scalable systems, automation workflows, and measurable
            business impact with modern technologies.
          </p>
        </motion.div>

        {/* Experience Cards */}
        <div className="space-y-10">

          {experiences.map((exp, index) => (
            <motion.div
              key={exp.company}
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="
                bg-[var(--gray-2)]/40
                backdrop-blur-2xl
                border border-[var(--gray-6)]/40
                rounded-2xl
                p-7
                shadow-xl
                hover:shadow-2xl
                hover:border-[var(--accent-7)]
                transition-all duration-300
              "
            >
              {/* Top Section */}
              <div className="mb-4">
                <p className="text-xs text-[var(--accent-9)] font-semibold tracking-wide">
                  {exp.duration}
                </p>

                <h3 className="text-xl font-bold mt-1">
                  {exp.company}
                </h3>

                <p className="text-sm text-[var(--gray-11)]">
                  {exp.role}
                </p>
              </div>

              {/* Description */}
              <p className="text-sm text-[var(--gray-11)] leading-relaxed mb-6">
                {exp.description}
              </p>

              {/* Metrics */}
              <div className="flex gap-10 mb-6">
                {exp.metrics.map((metric) => (
                  <div key={metric.label}>
                    <p className="text-xl font-bold text-[var(--accent-9)]">
                      {metric.value}
                    </p>
                    <p className="text-xs text-[var(--gray-11)]">
                      {metric.label}
                    </p>
                  </div>
                ))}
              </div>

              {/* Tech Stack */}
              <div className="flex flex-wrap gap-2">
                {exp.tech.map((tech) => (
                  <span
                    key={tech}
                    className="
                      px-3 py-1
                      text-xs
                      rounded-full
                      bg-[var(--gray-3)]/60
                      border border-[var(--gray-6)]/40
                      text-[var(--gray-12)]
                      hover:bg-[var(--accent-5)]/40
                      transition
                    "
                  >
                    {tech}
                  </span>
                ))}
              </div>

            </motion.div>
          ))}

        </div>
      </div>
    </section>
  );
}