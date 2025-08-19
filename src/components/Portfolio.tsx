"use client";

import React from "react";
import { motion, Variants } from "framer-motion";
import { ExternalLink, MapPin } from "lucide-react";
import Image from "next/image";
import { useTheme } from "../contexts/ThemeContext";

const Portfolio: React.FC = () => {
  const { isDark } = useTheme();

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const cardVariants: Variants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  // ✅ Updated Projects List from your details
  const projects = [
    {
      title: "Pearl City",
      location: "Hyderabad",
      category: "Residential Township",
      image: "/projects/pearl_city.jpg", // replace with actual path
      description:
        "A township of 5 apartments with opulent 3 BHK spaces, designed for ample natural lighting and ventilation. Earthy tones and local materials reflect a sustainable approach.",
      // stats: { energy: "40% reduction", certification: "LEED Gold" },
    },
    {
      title: "Soma Adobe",
      location: "Hyderabad",
      category: "Residential",
      image: "/projects/soma_abode.jpg",
      description:
        "A premium apartment project with lavishly proportioned 3 BHK homes, integrating natural ventilation, earthy tones, and locally sourced sustainable materials.",
    },
    {
      title: "Commercial & Residential Complex",
      location: "Hyderabad",
      category: "Mixed-Use Development",
      image: "/projects/commercial_resedentials.jpeg",
      description:
        "A hybrid commercial and residential building designed to blend functionality with sustainable architecture principles.",
    },
    {
      title: "Celest Apartments",
      location: "Palasa",
      category: "Residential",
      image: "/projects/celestial.jpg",
      description:
        "A thoughtfully designed apartment complex balancing contemporary living with contextual sustainability concepts.",
    },
    {
      title: "Luxury Villa",
      location: "Vizag",
      category: "Residential Villa",
      image: "/projects/luxury_villas.png",
      description:
        "A 5BHK villa with a luxury contemporary aesthetic, crafted with modern materials and elements that highlight sophistication and comfort.",
    },
  ];

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
            whileHover={{ scale: 1.05 }}
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
            <motion.div
              key={index}
              className={`group rounded-2xl overflow-hidden transition-all duration-300 ${
                isDark
                  ? "bg-gray-800 border border-gray-700"
                  : "bg-white border border-gray-200"
              } shadow-lg`}
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
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover object-center"
                  />
                </motion.div>

                {/* Gradient overlay */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"
                  initial={{ opacity: 0 }}
                  whileHover={{ opacity: 1 }}
                  transition={{ duration: 0.3 }}
                />

                {/* External link button */}
                <motion.div
                  className="absolute top-4 right-4"
                  initial={{ opacity: 0 }}
                  whileHover={{ opacity: 1 }}
                  transition={{ duration: 0.3 }}
                >
                  <motion.button
                    className="p-2 bg-white/90 rounded-lg hover:bg-white transition-colors"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    data-cursor="pointer"
                  >
                    <ExternalLink className="text-gray-700" size={18} />
                  </motion.button>
                </motion.div>

                {/* Category badge */}
                <motion.div
                  className="absolute top-4 left-4"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <span className="px-3 py-1 bg-[#1B6B36] text-white text-xs font-medium rounded-full">
                    {project.category}
                  </span>
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
                {/* Stats */}
                {/* <div className="flex items-center justify-between pt-4 border-t border-gray-200/20">
                  <div>
                    <div className="text-sm font-medium text-[#1B6B36]">
                      {project.stats.energy}
                    </div>
                    <div
                      className={`text-xs ${
                        isDark ? "text-gray-400" : "text-gray-500"
                      }`}
                    >
                      Energy Savings
                    </div>
                  </div>
                  <div className="text-right">
                    <div
                      className={`text-sm font-medium ${
                        isDark ? "text-white" : "text-gray-900"
                      }`}
                    >
                      {project.stats.certification}
                    </div>
                    <div
                      className={`text-xs ${
                        isDark ? "text-gray-400" : "text-gray-500"
                      }`}
                    >
                      Certification
                    </div>
                  </div>
                </div> */}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.section>
  );
};

export default Portfolio;
