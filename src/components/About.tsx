"use client";

import React from "react";
import { Users, Award, Target, Leaf } from "lucide-react";
// import { useTheme } from '@/contexts/ThemeContext'
import Image from "next/image";
import { useTheme } from "../contexts/ThemeContext";

const About: React.FC = () => {
  const { isDark } = useTheme();

  const values = [
    {
      icon: Leaf,
      title: "Environmental Stewardship",
      description:
        "We prioritize the planet in every design decision, ensuring minimal environmental impact.",
    },
    {
      icon: Target,
      title: "Design Excellence",
      description:
        "Combining functionality with beauty to create spaces that inspire and perform.",
    },
    {
      icon: Users,
      title: "Client Collaboration",
      description:
        "Working closely with clients to bring their sustainable vision to life.",
    },
    {
      icon: Award,
      title: "Innovation Leadership",
      description:
        "Pioneering new approaches to sustainable architecture and interior design.",
    },
  ];

  const team = [
    {
      name: "Sarah Chen",
      role: "Principal Architect",
      specialty: "Sustainable Design",
      image:
        "https://images.pexels.com/photos/3760514/pexels-photo-3760514.jpeg",
    },
    {
      name: "Michael Rodriguez",
      role: "Interior Design Director",
      specialty: "Biophilic Design",
      image:
        "https://images.pexels.com/photos/3760263/pexels-photo-3760263.jpeg",
    },
    {
      name: "Emma Thompson",
      role: "Sustainability Consultant",
      specialty: "LEED Certification",
      image:
        "https://images.pexels.com/photos/3760533/pexels-photo-3760533.jpeg",
    },
  ];

  return (
    <section
      id="about"
      className={`py-20 ${isDark ? "bg-gray-800" : "bg-gray-50"}`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 px-4 py-2 rounded-full bg-[#1B6B36]/10 border border-[#1B6B36]/20 mb-6">
            <span
              className={`text-sm font-medium ${
                isDark ? "text-gray-300" : "text-gray-700"
              }`}
            >
              About Us
            </span>
          </div>

          <h2
            className={`text-4xl lg:text-5xl font-bold mb-6 ${
              isDark ? "text-white" : "text-gray-900"
            }`}
          >
            Pioneering <span className="text-[#1B6B36]">Sustainable</span>{" "}
            Architecture
          </h2>

          <p
            className={`text-xl max-w-3xl mx-auto mb-12 ${
              isDark ? "text-gray-300" : "text-gray-600"
            }`}
          >
            For over a decade, GreenSpace has been at the forefront of
            sustainable architecture and interior design, creating spaces that
            harmonize with nature while exceeding client expectations.
          </p>
        </div>

        {/* Story Section */}
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
          <div>
            <h3
              className={`text-2xl font-semibold mb-6 ${
                isDark ? "text-white" : "text-gray-900"
              }`}
            >
              Our Story
            </h3>

            <div
              className={`space-y-4 text-lg leading-relaxed ${
                isDark ? "text-gray-300" : "text-gray-600"
              }`}
            >
              <p>
                Founded in 2012 with a vision to transform the built
                environment, GreenSpace emerged from a passion for creating
                beautiful spaces that respect and enhance our natural world.
              </p>

              <p>
                Our interdisciplinary team combines architectural innovation
                with environmental science, delivering projects that not only
                meet today&apos;s needs but safeguard tomorrow&apos;s
                possibilities.
              </p>

              <p>
                From residential homes to commercial complexes, every project
                reflects our commitment to sustainability, functionality, and
                timeless design excellence.
              </p>
            </div>
          </div>

          <div className="relative">
            <div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl">
              <Image
                src="https://images.pexels.com/photos/3760067/pexels-photo-3760067.jpeg"
                alt="Team collaboration"
                width={600}
                height={450}
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>

        {/* Values */}
        <div className="mb-20">
          <h3
            className={`text-3xl font-semibold text-center mb-12 ${
              isDark ? "text-white" : "text-gray-900"
            }`}
          >
            Our Core Values
          </h3>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => {
              const IconComponent = value.icon;
              return (
                <div
                  key={index}
                  className={`text-center p-6 rounded-xl ${
                    isDark
                      ? "bg-gray-900 border border-gray-700"
                      : "bg-white border border-gray-200"
                  }`}
                >
                  <div className="inline-flex p-4 bg-[#1B6B36]/10 rounded-xl mb-4">
                    <IconComponent className="text-[#1B6B36]" size={32} />
                  </div>

                  <h4
                    className={`text-lg font-semibold mb-3 ${
                      isDark ? "text-white" : "text-gray-900"
                    }`}
                  >
                    {value.title}
                  </h4>

                  <p
                    className={`text-sm leading-relaxed ${
                      isDark ? "text-gray-300" : "text-gray-600"
                    }`}
                  >
                    {value.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>

        {/* Team */}
        <div>
          <h3
            className={`text-3xl font-semibold text-center mb-12 ${
              isDark ? "text-white" : "text-gray-900"
            }`}
          >
            Meet Our Leadership Team
          </h3>

          <div className="grid md:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <div
                key={index}
                className={`text-center p-6 rounded-xl transition-all duration-300 hover:transform hover:scale-105 ${
                  isDark
                    ? "bg-gray-900 border border-gray-700"
                    : "bg-white border border-gray-200"
                } shadow-lg hover:shadow-xl`}
              >
                <div className="w-24 h-24 mx-auto mb-4 rounded-full overflow-hidden">
                  <Image
                    src={member.image}
                    alt={member.name}
                    width={96}
                    height={96}
                    className="w-full h-full object-cover"
                  />
                </div>

                <h4
                  className={`text-xl font-semibold mb-2 ${
                    isDark ? "text-white" : "text-gray-900"
                  }`}
                >
                  {member.name}
                </h4>

                <p className="text-[#1B6B36] font-medium mb-2">{member.role}</p>

                <p
                  className={`text-sm ${
                    isDark ? "text-gray-400" : "text-gray-600"
                  }`}
                >
                  {member.specialty}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
