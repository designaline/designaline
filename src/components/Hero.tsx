"use client";

import React from "react";
import { motion, Variants } from "framer-motion";
import { ArrowRight, Leaf, Home } from "lucide-react";
// import { useTheme } from '@/contexts/ThemeContext'
import Image from "next/image";
import { useTheme } from "../contexts/ThemeContext";

const Hero: React.FC = () => {
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

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  const imageVariants: Variants = {
    hidden: { opacity: 0, scale: 0.8, x: 50 },
    visible: {
      opacity: 1,
      scale: 1,
      x: 0,
      transition: {
        duration: 1,
        ease: "easeOut",
      },
    },
  };

  return (
    <section
      id="home"
      className={`min-h-screen flex items-center ${
        isDark ? "bg-gray-900" : "bg-white"
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Content */}
          <div className="space-y-8 relative z-10">
            {/* <motion.div
              className="inline-flex items-center space-x-2 px-4 py-2 rounded-full bg-[#1B6B36]/10 border border-[#1B6B36]/20"
              variants={itemVariants}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Leaf className="text-[#1B6B36]" size={16} />
              <span
                className={`text-sm font-medium ${
                  isDark ? "text-gray-300" : "text-gray-700"
                }`}
              >
                Sustainable Design Leaders
              </span>
            </motion.div> */}

            <motion.div className="space-y-6" variants={itemVariants}>
              <motion.h1
                className={`text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight ${
                  isDark ? "text-white" : "text-gray-900"
                }`}
              >
                Building a{" "}
                <motion.span
                  className="text-[#1B6B36] relative"
                  whileHover={{ scale: 1.05 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  Sustainable
                  <motion.div
                    className="absolute -bottom-2 left-0 right-0 h-1 bg-[#1B6B36]/30 rounded"
                    initial={{ width: 0 }}
                    animate={{ width: "100%" }}
                    transition={{ delay: 1, duration: 0.8 }}
                  />
                </motion.span>{" "}
                Future
              </motion.h1>

              <motion.p
                className={`text-xl leading-relaxed ${
                  isDark ? "text-gray-300" : "text-gray-600"
                }`}
              >
                We specialize in eco-friendly architecture and interior design
                that harmonizes with nature while creating beautiful, functional
                spaces for modern living.
              </motion.p>
            </motion.div>

            <motion.div
              className="flex flex-col sm:flex-row gap-4"
              variants={itemVariants}
            >
              <motion.button
                className="inline-flex items-center justify-center px-8 py-4 bg-[#1B6B36] text-white font-semibold rounded-lg shadow-lg"
                whileHover={{
                  scale: 1.05,
                  backgroundColor: "#155a2e",
                  boxShadow:
                    "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
                }}
                whileTap={{ scale: 0.95 }}
                transition={{ type: "spring", stiffness: 300 }}
                data-cursor="pointer"
              >
                View Our Projects
                <motion.div
                  animate={{ x: [0, 5, 0] }}
                  transition={{ repeat: Infinity, duration: 1.5 }}
                >
                  <ArrowRight className="ml-2" size={20} />
                </motion.div>
              </motion.button>

              <motion.button
                className={`inline-flex items-center justify-center px-8 py-4 border-2 border-[#1B6B36] text-[#1B6B36] font-semibold rounded-lg transition-all duration-200`}
                whileHover={{
                  scale: 1.05,
                  backgroundColor: "#1B6B36",
                  color: "#ffffff",
                }}
                whileTap={{ scale: 0.95 }}
                transition={{ type: "spring", stiffness: 300 }}
                data-cursor="pointer"
              >
                <Home className="mr-2" size={20} />
                Our Services
              </motion.button>
            </motion.div>

            {/* Stats */}
            <motion.div
              className="grid grid-cols-3 gap-8 pt-8 border-t border-gray-200/20"
              variants={itemVariants}
            >
              <motion.div
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <motion.div
                  className="text-3xl font-bold text-[#1B6B36]"
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 1.5, duration: 0.5 }}
                >
                  150+
                </motion.div>
                <div
                  className={`text-sm ${
                    isDark ? "text-gray-400" : "text-gray-600"
                  }`}
                >
                  Projects Completed
                </div>
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <motion.div
                  className="text-3xl font-bold text-[#1B6B36]"
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 1.7, duration: 0.5 }}
                >
                  5+
                </motion.div>
                <div
                  className={`text-sm ${
                    isDark ? "text-gray-400" : "text-gray-600"
                  }`}
                >
                  Years Experience
                </div>
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <motion.div
                  className="text-3xl font-bold text-[#1B6B36]"
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 1.9, duration: 0.5 }}
                >
                  90+{" "}
                </motion.div>
                <div
                  className={`text-sm ${
                    isDark ? "text-gray-400" : "text-gray-600"
                  }`}
                >
                  Happy Customers{" "}
                </div>
              </motion.div>
            </motion.div>
          </div>

          {/* Image */}
          <motion.div className="relative" variants={imageVariants}>
            <motion.div
              className="aspect-[4/5] rounded-2xl overflow-hidden shadow-2xl"
              whileHover={{ scale: 1.02 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <Image
                src="https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg"
                alt="Sustainable modern architecture"
                width={600}
                height={750}
                className="w-full h-full object-cover"
                priority
              />
            </motion.div>

            {/* Floating Card */}
            {/* <motion.div
              className={`absolute -bottom-6 -left-6 p-6 rounded-xl shadow-2xl ${
                isDark ? "bg-gray-800 border border-gray-700" : "bg-white"
              }`}
              initial={{ opacity: 0, y: 20, x: -20 }}
              animate={{ opacity: 1, y: 0, x: 0 }}
              transition={{ delay: 1.2, duration: 0.8 }}
              whileHover={{
                scale: 1.05,
                boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25)",
              }}
            >
              <div className="flex items-center space-x-4">
                <motion.div
                  className="p-3 bg-[#1B6B36]/10 rounded-lg"
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.5 }}
                >
                  <Leaf className="text-[#1B6B36]" size={24} />
                </motion.div>
                <div>
                  <div
                    className={`font-semibold ${
                      isDark ? "text-white" : "text-gray-900"
                    }`}
                  >
                    LEED Certified
                  </div>
                  <div
                    className={`text-sm ${
                      isDark ? "text-gray-400" : "text-gray-600"
                    }`}
                  >
                    Gold Standard
                  </div>
                </div>
              </div>
            </motion.div> */}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
