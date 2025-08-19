"use client";

import { motion, Variants } from "framer-motion";
import { MapPin } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { useTheme } from "../contexts/ThemeContext";
import { projects } from "../data/projects"; // ✅ import data

const Portfolio: React.FC = () => {
  const { isDark } = useTheme();

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 },
    },
  };

  const cardVariants: Variants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  return (
    <motion.section
      id="portfolio"
      className={`py-20 ${isDark ? "bg-gray-900" : "bg-white"}`}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div className="text-center mb-16" variants={containerVariants}>
          <motion.div
            className="inline-flex items-center space-x-2 px-4 py-2 rounded-full bg-[#1B6B36]/10 border border-[#1B6B36]/20 mb-6"
            variants={cardVariants}
          >
            <span
              className={`text-sm font-medium ${
                isDark ? "text-gray-300" : "text-gray-700"
              }`}
            >
              Our Portfolio
            </span>
          </motion.div>

          <motion.h2
            className={`text-4xl lg:text-5xl font-bold mb-6 ${
              isDark ? "text-white" : "text-gray-900"
            }`}
            variants={cardVariants}
          >
            <span className="text-[#1B6B36]">Sustainable</span> & Contemporary
            Projects
          </motion.h2>

          <motion.p
            className={`text-xl max-w-3xl mx-auto ${
              isDark ? "text-gray-300" : "text-gray-600"
            }`}
            variants={cardVariants}
          >
            Explore our portfolio of residential, commercial, and villa projects
            designed with a strong focus on sustainability and lifestyle
            enhancement.
          </motion.p>
        </motion.div>

        {/* Projects Grid */}
        <motion.div
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
        >
          {projects.map((project, index) => (
            <Link href={`/projects/${project.slug}`} key={project.slug}>
              <motion.div
                className={`group rounded-2xl overflow-hidden transition-all duration-300 ${
                  isDark
                    ? "bg-gray-800 border border-gray-700"
                    : "bg-white border border-gray-200"
                } shadow-lg cursor-pointer`}
                variants={cardVariants}
                whileHover={{
                  scale: 1.05,
                  borderColor: isDark
                    ? "rgba(27, 107, 54, 0.5)"
                    : "rgba(27, 107, 54, 0.3)",
                  boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25)",
                }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                {/* Image */}
                <div className="relative h-48 overflow-hidden">
                  <motion.div
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.5 }}
                    className="w-full h-full"
                  >
                    <Image
                      src={project.images[0]}
                      alt={project.title}
                      fill
                      className="object-cover object-center"
                    />
                  </motion.div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <div className="flex items-center space-x-2 mb-3">
                    <MapPin className="text-[#1B6B36]" size={16} />
                    <span
                      className={`text-sm ${
                        isDark ? "text-gray-400" : "text-gray-600"
                      }`}
                    >
                      {project.location}
                    </span>
                  </div>
                  <h3
                    className={`text-xl font-semibold mb-3 ${
                      isDark ? "text-white" : "text-gray-900"
                    }`}
                  >
                    {project.title}
                  </h3>
                  <p
                    className={`mb-4 text-sm leading-relaxed ${
                      isDark ? "text-gray-300" : "text-gray-600"
                    }`}
                  >
                    {project.description}
                  </p>
                </div>
              </motion.div>
            </Link>
          ))}
        </motion.div>
      </div>
    </motion.section>
  );
};

export default Portfolio;
