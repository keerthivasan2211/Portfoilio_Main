"use client";

import { motion } from "framer-motion";
import { Code2, Database, Brain } from "lucide-react";

export default function Services() {
  const services = [
    {
      icon: <Code2 size={28} />,
      title: "Web Development",
      description:
        "Building scalable and performance-driven web applications using React, Node.js, and MongoDB. From modern UI design to secure backend APIs, I deliver complete end-to-end solutions.",
      points: [
        "MERN Stack Applications",
        "Responsive & Modern UI",
        "Secure REST APIs",
      ],
    },
    {
      icon: <Database size={28} />,
      title: "CRM Integration & Implementation",
      description:
        "Custom CRM setup, workflow automation, and third-party integrations. I specialize in WooCommerce, Shopify, and real-time data synchronization for business efficiency.",
      points: [
        "CRM Workflow Automation",
        "WooCommerce & Shopify Sync",
        "API Integrations",
      ],
    },
    {
      icon: <Brain size={28} />,
      title: "AI / ML Development",
      description:
        "Developing AI-powered automation systems to reduce manual effort and improve decision-making using intelligent APIs and smart data processing.",
      points: [
        "AI Workflow Automation",
        "Smart Decision Systems",
        "Process Optimization",
      ],
    },
  ];

  return (
    <section id="services" className="py-24 px-6 relative overflow-hidden">

      {/* Background Glow */}
      <div className="absolute inset-0 -z-10 flex justify-center">
        <div className="w-[500px] h-[500px] bg-[var(--accent-3)] blur-3xl opacity-30 rounded-full" />
      </div>

      <div className="max-w-7xl mx-auto">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-extrabold relative inline-block">
            <span className="relative z-10">
              Services I Provide
            </span>
            <span className="absolute inset-0 bg-[var(--accent-9)] blur-2xl opacity-20 rounded-lg -z-10"></span>
          </h2>

          <p className="text-[var(--gray-11)] mt-4 max-w-2xl mx-auto">
            Delivering scalable systems, intelligent automation, and seamless integrations
            that help businesses grow faster and smarter.
          </p>
        </motion.div>

        {/* Service Cards */}
        <div className="grid md:grid-cols-3 gap-10">

          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="bg-[var(--gray-2)]/60 backdrop-blur-xl border border-[var(--gray-6)] rounded-2xl p-8 shadow-lg hover:shadow-2xl transition duration-300"
            >
              <div className="w-12 h-12 rounded-lg bg-[var(--accent-3)] flex items-center justify-center text-[var(--accent-9)] mb-6">
                {service.icon}
              </div>

              <h3 className="text-xl font-semibold mb-4">
                {service.title}
              </h3>

              <p className="text-[var(--gray-11)] text-sm leading-relaxed mb-6">
                {service.description}
              </p>

              <ul className="space-y-2">
                {service.points.map((point, i) => (
                  <li
                    key={i}
                    className="text-sm text-[var(--gray-10)] flex items-center gap-2"
                  >
                    <span className="w-2 h-2 rounded-full bg-[var(--accent-9)]"></span>
                    {point}
                  </li>
                ))}
              </ul>

            </motion.div>
          ))}

        </div>

      </div>
    </section>
  );
}