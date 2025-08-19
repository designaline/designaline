"use client";

import { motion, Variants } from "framer-motion";
import { Building, Home, TreePine } from "lucide-react";
import React from "react";
import { useTheme } from "../contexts/ThemeContext";
// import { useTheme } from '@/contexts/ThemeContext'

const Services: React.FC = () => {
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

  const services = [
    {
      icon: Building,
      title: "Sustainable Architecture",
      description:
        "Innovative architectural solutions that minimize environmental impact while maximizing functionality and beauty.",
      features: [
        "Green Building Design",
        "IGBC Certification",
        "Energy Modeling",
        "Renewable Integration",
      ],
    },
    {
      icon: Home,
      title: "Interior Design",
      description:
        "Eco-conscious interior spaces that promote wellness and sustainability without compromising on style.",
      features: [
        "Biophilic Design",
        "Sustainable Materials",
        "Air Quality Optimization",
        "Natural Lighting",
      ],
    },
    // {
    //   icon: Lightbulb,
    //   title: "Energy Consulting",
    //   description:
    //     "Comprehensive energy efficiency analysis and solutions to reduce carbon footprint and operational costs.",
    //   features: [
    //     "Energy Audits",
    //     "Solar Integration",
    //     "Smart Systems",
    //     "Cost Analysis",
    //   ],
    // },
    {
      icon: TreePine,
      title: "Landscape Architecture",
      description:
        "Sustainable landscape design that enhances biodiversity and creates harmonious outdoor environments.",
      features: [
        "Native Plantings",
        "Water Conservation",
        "Biodiversity Enhancement",
        "Carbon Sequestration",
      ],
    },
  ];

  return (
    <motion.section
      id="services"
      className={`py-20 ${isDark ? "bg-gray-800" : "bg-gray-50"}`}
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
              Our Services
            </span>
          </motion.div>

          <motion.h2
            className={`text-4xl lg:text-5xl font-bold mb-6 ${
              isDark ? "text-white" : "text-gray-900"
            }`}
            variants={cardVariants}
          >
            Comprehensive <span className="text-[#1B6B36]">End to End</span>{" "}
            Solutions
          </motion.h2>

          <motion.p
            className={`text-xl max-w-3xl mx-auto ${
              isDark ? "text-gray-300" : "text-gray-600"
            }`}
            variants={cardVariants}
          >
            From initial concept to final construction, we provide end-to-end
            design services that transform your vision into environmentally
            responsible reality.
          </motion.p>
        </motion.div>

        {/* Services Grid */}
        <motion.div
          className="grid md:grid-cols-2 lg:grid-cols-2 gap-8"
          variants={containerVariants}
        >
          {services.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <motion.div
                key={index}
                className={`group p-8 rounded-2xl transition-all duration-300 ${
                  isDark
                    ? "bg-gray-900 border border-gray-700"
                    : "bg-white border border-gray-200"
                }`}
                variants={cardVariants}
                whileHover={{
                  scale: 1.05,
                  borderColor: isDark
                    ? "rgba(27, 107, 54, 0.5)"
                    : "rgba(27, 107, 54, 0.3)",
                  boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25)",
                }}
                whileTap={{ scale: 0.98 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <div className="flex flex-col gap-6 items-start space-x-6">
                  <div className="flex-shrink-0">
                    <motion.div
                      className="p-4 bg-[#1B6B36]/10 rounded-xl group-hover:bg-[#1B6B36]/20 transition-colors duration-300"
                      whileHover={{ rotate: 360, scale: 1.1 }}
                      transition={{ duration: 0.5 }}
                    >
                      <IconComponent className="text-[#1B6B36]" size={32} />
                    </motion.div>
                  </div>

                  <div className="flex-1">
                    <h3
                      className={`text-xl font-semibold mb-3 ${
                        isDark ? "text-white" : "text-gray-900"
                      }`}
                    >
                      {service.title}
                    </h3>

                    <p
                      className={`mb-6 leading-relaxed ${
                        isDark ? "text-gray-300" : "text-gray-600"
                      }`}
                    >
                      {service.description}
                    </p>

                    <ul className="space-y-2">
                      {service.features.map((feature, idx) => (
                        <motion.li
                          key={idx}
                          className="flex items-center space-x-3"
                          initial={{ opacity: 0, x: -20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          transition={{ delay: idx * 0.1 }}
                        >
                          <motion.div
                            className="w-2 h-2 bg-[#1B6B36] rounded-full"
                            whileHover={{ scale: 1.5 }}
                          />
                          <span
                            className={`text-sm ${
                              isDark ? "text-gray-400" : "text-gray-600"
                            }`}
                          >
                            {feature}
                          </span>
                        </motion.li>
                      ))}
                    </ul>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </motion.section>
  );
};

export default Services;
