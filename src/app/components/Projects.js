"use client";

import { useRef } from "react";
import { motion } from "framer-motion";
import {
  ChevronLeft,
  ChevronRight,
  ExternalLink,
  Github,
} from "lucide-react";

export default function Projects() {
  const scrollRef = useRef(null);

  const scroll = (direction) => {
    if (!scrollRef.current) return;
    const scrollAmount = 400;

    scrollRef.current.scrollBy({
      left: direction === "left" ? -scrollAmount : scrollAmount,
      behavior: "smooth",
    });
  };

  const projects = [
    {
      id: "f3-saas",
      name: "F3 – Multi-Tenant SaaS Platform",
      description:
        "Built a scalable multi-tenant SaaS system with secure authentication, tenant isolation, and optimized REST APIs. Improved business efficiency by 50% through automation.",
      tech: ["React", "Node.js", "MongoDB", "JWT"],
      live: "https://f3engine.com/home/about", // 🔴 Replace
    },
    {
      id: "inventory-sync",
      name: "Real-Time Inventory Sync System",
      description:
        "Developed WooCommerce & Shopify API integration with 95% stock sync accuracy. Reduced manual inventory errors by 60%.",
      tech: ["Node.js", "WooCommerce API", "Shopify API"],
      live: null,
      github: null,
    },
    {
      id: "ai-automation",
      name: "AI Voice Automation Model",
      description:
        "Created AI-based workflow automation converting voice commands into structured system actions. Reduced manual effort by 38%.",
      tech: ["Python", "AI APIs", "Automation"],
      live: null,
      github: null,
    },
    {
      id: "admin-dashboard",
      name: "Admin Dashboard – Integrated Enterprises",
      description:
        "Engineered a role-based secure dashboard with optimized database queries and 30% faster response performance.",
      tech: ["React", "Tailwind", "Node.js", "SQL"],
      live: null,
      github: null,
    },
    {
      id: "sujas-boutique",
      name: "Sujas Boutiques Web Platform",
      description:
        "Built a responsive SEO-optimized business website improving performance and user engagement across devices.",
      tech: ["React", "Responsive UI", "SEO"],
      live: "https://your-live-link.com", // 🔴 Replace
      github: null,
    },
  ];

  return (
    <section id="projects" className="relative py-24 px-6 overflow-hidden scroll-mt-28">

      {/* Background Glow */}
      <div className="absolute inset-0 -z-10 flex justify-center items-center">
        <div className="w-[700px] h-[700px] bg-[var(--accent-5)] opacity-20 blur-[140px] rounded-full" />
      </div>

      <div className="max-w-7xl mx-auto relative">

        {/* Heading */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-extrabold relative inline-block">
            <span className="relative z-10">
              Engineered Solutions & Digital Creations
            </span>
            <span className="absolute inset-0 bg-[var(--accent-9)] blur-2xl opacity-20 rounded-lg -z-10" />
          </h2>
        </div>

        {/* Carousel */}
        <div className="relative">

          {/* Left Button */}
          <button
            onClick={() => scroll("left")}
            className="absolute -left-5 top-1/2 -translate-y-1/2 z-20 p-3 rounded-full bg-[var(--gray-2)] border border-[var(--gray-6)] shadow-lg hover:bg-[var(--gray-3)] transition"
          >
            <ChevronLeft size={20} />
          </button>

          {/* Scroll Container */}
          <div
            ref={scrollRef}
            className="flex gap-8 overflow-x-auto scroll-smooth scrollbar-hide px-4"
          >
            {projects.map((project) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
                className="min-w-[340px] max-w-[340px] bg-[var(--gray-2)]/60 backdrop-blur-xl border border-[var(--gray-6)] rounded-2xl p-8 shadow-lg hover:shadow-2xl transition"
              >
                <h3 className="text-lg font-semibold mb-4 text-[var(--accent-9)]">
                  {project.name}
                </h3>

                <p className="text-[var(--gray-11)] text-sm leading-relaxed mb-6">
                  {project.description}
                </p>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="text-xs px-3 py-1 rounded-full bg-[var(--accent-3)] text-[var(--accent-9)]"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Buttons */}
                <div className="flex gap-4">

                  {/* Live Link */}
                  {project.live ? (
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-sm text-[var(--accent-9)] hover:opacity-80 transition"
                    >
                      Live <ExternalLink size={16} />
                    </a>
                  ) : (
                    <span className="text-sm text-gray-400">
                      Private
                    </span>
                  )}

                  {/* GitHub Link */}
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-sm text-[var(--gray-11)] hover:text-[var(--accent-9)] transition"
                    >
                      Code <Github size={16} />
                    </a>
                  )}

                </div>

              </motion.div>
            ))}
          </div>

          {/* Right Button */}
          <button
            onClick={() => scroll("right")}
            className="absolute -right-5 top-1/2 -translate-y-1/2 z-20 p-3 rounded-full bg-[var(--gray-2)] border border-[var(--gray-6)] shadow-lg hover:bg-[var(--gray-3)] transition"
          >
            <ChevronRight size={20} />
          </button>

        </div>
      </div>
    </section>
  );
}