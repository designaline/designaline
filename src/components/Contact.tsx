"use client";

import React from "react";
import { motion, Variants } from "framer-motion";
import { Mail, Phone, MapPin, Clock, Send } from "lucide-react";
import Image from "next/image";
import { useTheme } from "../contexts/ThemeContext";

// ✅ Strongly typed animation variants
const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut", // ✅ Recognized literal string
    },
  },
};

const Contact: React.FC = () => {
  const { isDark } = useTheme();

  const contactInfo: {
    icon: React.ElementType;
    label: string;
    value: string;
    href?: string | null;
  }[] = [
    {
      icon: Phone,
      label: "Phone",
      value: "+1 (555) 123-4567",
      href: "tel:+15551234567",
    },
    {
      icon: Mail,
      label: "Email",
      value: "hello@greenspace.design",
      href: "mailto:hello@greenspace.design",
    },
    {
      icon: MapPin,
      label: "Address",
      value: "123 Sustainable St, Eco City, CA 90210",
      href: "https://maps.google.com",
    },
    {
      icon: Clock,
      label: "Business Hours",
      value: "Mon-Fri: 9AM-6PM PST",
      href: null,
    },
  ];

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    alert("Thank you for your message! We'll get back to you soon.");
  };

  return (
    <motion.section
      id="contact"
      className={`py-20 ${isDark ? "bg-gray-900" : "bg-white"}`}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          className="text-center mb-16"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.div
            className="inline-flex items-center space-x-2 px-4 py-2 rounded-full bg-[#1B6B36]/10 border border-[#1B6B36]/20 mb-6"
            variants={itemVariants}
            whileHover={{ scale: 1.05 }}
          >
            <span
              className={`text-sm font-medium ${
                isDark ? "text-gray-300" : "text-gray-700"
              }`}
            >
              Get In Touch
            </span>
          </motion.div>

          <motion.h2
            className={`text-4xl lg:text-5xl font-bold mb-6 ${
              isDark ? "text-white" : "text-gray-900"
            }`}
            variants={itemVariants}
          >
            Let&apos;s Create Something{" "}
            <span className="text-[#1B6B36]">Sustainable</span> Together
          </motion.h2>

          <motion.p
            className={`text-xl max-w-3xl mx-auto ${
              isDark ? "text-gray-300" : "text-gray-600"
            }`}
            variants={itemVariants}
          >
            Ready to start your sustainable design journey? We&apos;d love to
            hear about your project and explore how we can bring your vision to
            life.
          </motion.p>
        </motion.div>

        <motion.div
          className="grid lg:grid-cols-2 gap-16"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Contact Information */}
          <motion.div className="space-y-8" variants={itemVariants}>
            <motion.div variants={itemVariants}>
              <h3
                className={`text-2xl font-semibold mb-6 ${
                  isDark ? "text-white" : "text-gray-900"
                }`}
              >
                Contact Information
              </h3>

              <div className="space-y-6">
                {contactInfo.map((info, index) => {
                  const IconComponent = info.icon;
                  return (
                    <motion.div
                      key={index}
                      className="flex items-start space-x-4"
                      whileHover={{ x: 10 }}
                      transition={{ type: "spring", stiffness: 300 }}
                    >
                      <div className="flex-shrink-0">
                        <motion.div
                          className="p-3 bg-[#1B6B36]/10 rounded-lg"
                          whileHover={{ scale: 1.1, rotate: 5 }}
                        >
                          <IconComponent className="text-[#1B6B36]" size={20} />
                        </motion.div>
                      </div>

                      <div>
                        <h4
                          className={`font-semibold mb-1 ${
                            isDark ? "text-white" : "text-gray-900"
                          }`}
                        >
                          {info.label}
                        </h4>

                        {info.href ? (
                          <a
                            href={info.href}
                            className={`transition-colors duration-200 hover:text-[#1B6B36] ${
                              isDark ? "text-gray-300" : "text-gray-600"
                            }`}
                          >
                            {info.value}
                          </a>
                        ) : (
                          <span
                            className={
                              isDark ? "text-gray-300" : "text-gray-600"
                            }
                          >
                            {info.value}
                          </span>
                        )}
                      </div>
                    </motion.div>
                  );
                })}
              </div>
            </motion.div>

            {/* Office Image */}
            <motion.div
              className="aspect-[4/3] rounded-2xl overflow-hidden shadow-xl"
              variants={itemVariants}
              whileHover={{ scale: 1.02 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <Image
                src="https://images.pexels.com/photos/3760069/pexels-photo-3760069.jpeg"
                alt="GreenSpace office"
                width={600}
                height={450}
                className="w-full h-full object-cover"
              />
            </motion.div>
          </motion.div>

          {/* Contact Form */}
          <motion.div variants={itemVariants}>
            <motion.div
              className={`p-8 rounded-2xl ${
                isDark ? "bg-gray-800 border border-gray-700" : "bg-gray-50"
              }`}
              whileHover={{ scale: 1.01 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <h3
                className={`text-2xl font-semibold mb-6 ${
                  isDark ? "text-white" : "text-gray-900"
                }`}
              >
                Send us a Message
              </h3>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <FormField label="First Name" type="text" isDark={isDark} />
                  <FormField label="Last Name" type="text" isDark={isDark} />
                </div>

                <FormField label="Email Address" type="email" isDark={isDark} />

                <div>
                  <label
                    className={`block text-sm font-medium mb-2 ${
                      isDark ? "text-gray-300" : "text-gray-700"
                    }`}
                  >
                    Project Type
                  </label>
                  <select
                    className={`w-full px-4 py-3 rounded-lg border transition-colors duration-200 focus:ring-2 focus:ring-[#1B6B36]/20 focus:border-[#1B6B36] ${
                      isDark
                        ? "bg-gray-900 border-gray-600 text-white"
                        : "bg-white border-gray-300 text-gray-900"
                    }`}
                  >
                    <option>Residential Architecture</option>
                    <option>Commercial Architecture</option>
                    <option>Interior Design</option>
                    <option>Sustainability Consulting</option>
                    <option>Other</option>
                  </select>
                </div>

                <div>
                  <label
                    className={`block text-sm font-medium mb-2 ${
                      isDark ? "text-gray-300" : "text-gray-700"
                    }`}
                  >
                    Project Details
                  </label>
                  <textarea
                    rows={4}
                    required
                    className={`w-full px-4 py-3 rounded-lg border transition-colors duration-200 focus:ring-2 focus:ring-[#1B6B36]/20 focus:border-[#1B6B36] ${
                      isDark
                        ? "bg-gray-900 border-gray-600 text-white"
                        : "bg-white border-gray-300 text-gray-900"
                    }`}
                    placeholder="Tell us about your project, timeline, and sustainability goals..."
                  />
                </div>

                <motion.button
                  type="submit"
                  className="w-full inline-flex items-center justify-center px-8 py-4 bg-[#1B6B36] text-white font-semibold rounded-lg hover:bg-[#155a2e] transition-all duration-200 transform hover:scale-105 shadow-lg hover:shadow-xl"
                  whileHover={{
                    scale: 1.05,
                    backgroundColor: "#155a2e",
                    boxShadow:
                      "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
                  }}
                  whileTap={{ scale: 0.95 }}
                >
                  Send Message
                  <motion.div
                    animate={{ x: [0, 5, 0] }}
                    transition={{ repeat: Infinity, duration: 1.5 }}
                  >
                    <Send className="ml-2" size={20} />
                  </motion.div>
                </motion.button>
              </form>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </motion.section>
  );
};

// ✅ Extracted reusable input field to avoid repetition
interface FormFieldProps {
  label: string;
  type: string;
  isDark: boolean;
}

const FormField: React.FC<FormFieldProps> = ({ label, type, isDark }) => (
  <div>
    <label
      className={`block text-sm font-medium mb-2 ${
        isDark ? "text-gray-300" : "text-gray-700"
      }`}
    >
      {label}
    </label>
    <input
      type={type}
      required
      className={`w-full px-4 py-3 rounded-lg border transition-colors duration-200 focus:ring-2 focus:ring-[#1B6B36]/20 focus:border-[#1B6B36] ${
        isDark
          ? "bg-gray-900 border-gray-600 text-white"
          : "bg-white border-gray-300 text-gray-900"
      }`}
    />
  </div>
);

export default Contact;
