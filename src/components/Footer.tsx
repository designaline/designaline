"use client";

import React from "react";
import { Leaf, Instagram, Twitter, Linkedin, Youtube } from "lucide-react";
import { useTheme } from "../contexts/ThemeContext";
import Image from "next/image";
// import { useTheme } from '@/contexts/ThemeContext'

const Footer: React.FC = () => {
  const { isDark } = useTheme();

  const socialLinks = [
    {
      icon: Instagram,
      href: "https://www.instagram.com/designaline.in?igsh=MXRhMmhzOHp6YXg3ag%3D%3D&utm_source=qr",
      label: "Instagram",
    },
    // { icon: Twitter, href: "#", label: "Twitter" },
    {
      icon: Linkedin,
      href: "https://www.linkedin.com/company/designa-line",
      label: "LinkedIn",
    },
    // { icon: Youtube, href: "#", label: "YouTube" },
  ];

  const footerSections = [
    {
      title: "Services",
      links: [
        { label: "Sustainable Architecture", href: "#" },
        { label: "Interior Design", href: "#" },
        { label: "Landscape design", href: "#" },
        // { label: "LEED Certification", href: "#" },
      ],
    },
    {
      title: "Company",
      links: [
        { label: "About Us", href: "#about" },
        { label: "Our Team", href: "#about" },
        { label: "Careers", href: "#" },
        { label: "Press", href: "#" },
      ],
    },
    {
      title: "Resources",
      links: [
        { label: "Portfolio", href: "#portfolio" },
        { label: "Case Studies", href: "#" },
        { label: "Blog", href: "#" },
        { label: "Sustainability Guide", href: "#" },
      ],
    },
  ];

  return (
    <footer
      className={`py-16 ${
        isDark
          ? "bg-gray-900 border-t border-gray-800"
          : "bg-gray-50 border-t border-gray-200"
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-4 gap-12 mb-12">
          {/* Brand Section */}
          <div className="lg:col-span-1">
            <div className="flex items-center space-x-3 mb-6">
              {/* <div className="p-2 bg-[#1B6B36] rounded-lg">
                <Leaf className="text-white" size={24} />
              </div> */}
              <Image
                src="/logo.png"
                alt="GreenSpace Logo"
                width={40}
                height={40}
                priority
              />
              <div>
                <h1 className="text-xl font-bold text-[#1B6B36]">
                  DesignAline
                </h1>
                <p
                  className={`text-sm ${
                    isDark ? "text-gray-400" : "text-gray-600"
                  }`}
                >
                  Architecture & Interiors
                </p>
              </div>
            </div>

            <p
              className={`mb-6 leading-relaxed ${
                isDark ? "text-gray-300" : "text-gray-600"
              }`}
            >
              Creating beautiful, sustainable spaces that harmonize with nature
              while exceeding client expectations.
            </p>

            {/* Social Links */}
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => {
                const IconComponent = social.icon;
                return (
                  <a
                    key={index}
                    href={social.href}
                    aria-label={social.label}
                    className={`p-2 rounded-lg transition-colors duration-200 ${
                      isDark
                        ? "bg-gray-800 text-gray-400 hover:bg-gray-700 hover:text-white"
                        : "bg-gray-200 text-gray-600 hover:bg-gray-300 hover:text-gray-900"
                    }`}
                  >
                    <IconComponent size={18} />
                  </a>
                );
              })}
            </div>
          </div>

          {/* Footer Links */}
          {footerSections.map((section, index) => (
            <div key={index}>
              <h3
                className={`font-semibold mb-6 ${
                  isDark ? "text-white" : "text-gray-900"
                }`}
              >
                {section.title}
              </h3>

              <ul className="space-y-4">
                {section.links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    <a
                      href={link.href}
                      className={`transition-colors duration-200 hover:text-[#1B6B36] ${
                        isDark ? "text-gray-300" : "text-gray-600"
                      }`}
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom Bar */}
        <div
          className={`pt-8 border-t flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0 ${
            isDark ? "border-gray-800" : "border-gray-200"
          }`}
        >
          <p
            className={`text-sm ${isDark ? "text-gray-400" : "text-gray-600"}`}
          >
            © 2024 DesignAline. All rights reserved.
          </p>

          <div className="flex space-x-6 text-sm">
            <a
              href="#"
              className={`transition-colors duration-200 hover:text-[#1B6B36] ${
                isDark ? "text-gray-400" : "text-gray-600"
              }`}
            >
              Privacy Policy
            </a>
            <a
              href="#"
              className={`transition-colors duration-200 hover:text-[#1B6B36] ${
                isDark ? "text-gray-400" : "text-gray-600"
              }`}
            >
              Terms of Service
            </a>
            <a
              href="#"
              className={`transition-colors duration-200 hover:text-[#1B6B36] ${
                isDark ? "text-gray-400" : "text-gray-600"
              }`}
            >
              Cookie Policy
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
