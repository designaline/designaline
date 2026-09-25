"use client";

import { motion, Variants } from "framer-motion";
import { ArrowRight, CalendarDays } from "lucide-react";
import React from "react";
// import { useTheme } from '@/contexts/ThemeContext'
import Image from "next/image";
import Link from "next/link";
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
      className={`min-h-screen flex items-center pb-12 pt-24 ${
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

              <motion.h2
                className={`text-2xl sm:text-3xl font-semibold leading-tight ${
                  isDark ? "text-gray-100" : "text-gray-800"
                }`}
                variants={itemVariants}
              >
                Architecture &amp; Interior Design in Visakhapatnam
              </motion.h2>

              <motion.p
                className={`text-xl leading-relaxed ${
                  isDark ? "text-gray-300" : "text-gray-600"
                }`}
              >
                Thoughtful, climate-responsive spaces shaped around how you
                live and work—balancing function, comfort, and a timeless
                architectural character.
              </motion.p>
            </motion.div>

            <motion.div
              className="flex flex-col sm:flex-row gap-4"
              variants={itemVariants}
            >
              <Link href="/#contact" className="inline-flex">
                <motion.span
                  className="inline-flex w-full items-center justify-center px-8 py-4 bg-[#1B6B36] text-white font-semibold rounded-lg shadow-lg"
                  whileHover={{ scale: 1.03, backgroundColor: "#155a2e" }}
                  whileTap={{ scale: 0.98 }}
                >
                  <CalendarDays className="mr-2" size={20} />
                  Book a Consultation
                </motion.span>
              </Link>

              <Link href="/#portfolio" className="inline-flex">
                <motion.span
                  className="inline-flex w-full items-center justify-center px-8 py-4 border-2 border-[#1B6B36] text-[#1B6B36] font-semibold rounded-lg transition-colors duration-200"
                  whileHover={{
                    scale: 1.03,
                    backgroundColor: "#1B6B36",
                    color: "#ffffff",
                  }}
                  whileTap={{ scale: 0.98 }}
                >
                  View Our Projects
                  <ArrowRight className="ml-2" size={20} />
                </motion.span>
              </Link>
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
                src="/projects/luxury_villas_1.png"
                alt="Design A'Line residential villa project in Visakhapatnam"
                width={600}
                height={750}
                className="w-full h-full object-cover"
                priority
              />
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
