"use client";

import { motion } from "framer-motion";

export default function Education() {
  const educationList = [
    {
      degree: "Master of Computer Applications (MCA)",
      college: "SASTRA Deemed University",
      year: "2023 – 2025",
      score: "CGPA: 8.58",
      points: [
        "Developed full-stack SaaS applications using MERN stack with API integrations.",
        "Worked on CRM automation, database optimization, and scalable backend architecture.",
      ],
    },
    {
      degree: "B.Sc Mathematics with Computer Applications",
      college: "SASTRA Deemed University",
      year: "2020 – 2023",
      score: "CGPA: 7.33",
      points: [
        "Built strong foundation in data structures, algorithms, and mathematical problem solving.",
        "Gained practical experience in programming, database management, and web technologies.",
      ],
    },
  ];

  return (
    <section id="education" className="py-16 px-6 relative scroll-mt-28">

      {/* Background Glow */}
      <div className="absolute inset-0 -z-10 flex justify-center items-center">
        <div className="w-[400px] h-[400px] bg-[var(--accent-4)] opacity-15 blur-[100px] rounded-full" />
      </div>

      <div className="max-w-4xl mx-auto">

        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-4xl font-bold text-center mb-12"
        >
          Education
        </motion.h2>

        {/* Education Cards */}
        <div className="space-y-8">

          {educationList.map((item) => (
            <motion.div
              key={item.degree}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="bg-[var(--gray-2)]/60 backdrop-blur-lg border border-[var(--gray-6)]/40 p-8 rounded-xl shadow-md"
            >
              {/* Top Section */}
              <div className="flex flex-col md:flex-row md:justify-between md:items-center mb-4">
                <div>
                  <h3 className="text-lg font-semibold">
                    {item.degree}
                  </h3>
                  <p className="text-sm text-[var(--gray-11)]">
                    {item.college}
                  </p>
                </div>

                <div className="mt-3 md:mt-0 text-sm text-[var(--gray-11)]">
                  <p>{item.year}</p>
                  <p className="font-medium text-[var(--accent-9)]">
                    {item.score}
                  </p>
                </div>
              </div>

              {/* Points */}
              <ul className="list-disc list-inside text-sm text-[var(--gray-11)] space-y-2">
                {item.points.map((point) => (
                  <li key={point}>{point}</li>
                ))}
              </ul>

            </motion.div>
          ))}

        </div>
      </div>
    </section>
  );
}