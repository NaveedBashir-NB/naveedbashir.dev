"use client";
import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { AuroraBackground } from "./ui/aurora-background"; // Import AuroraBackground

import MealStore from "../../public/images/themealstore.png";
import Blog from "../../public/images/khnworld.png";
import Calculator from "../../public/images/calculator.png";
import NBPortfolio from "../../public/images/portfolio.png";
import Clock from "../../public/images/digitalclock.png";
import Resume from "../../public/images/resumebuilder.png";
import Bulb from "../../public/images/bulb.png";
import Loginform from "../../public/images/loginform.png";

const projects = [
  {
    id: 8,
    title: "Portfolio Website",
    description: "A personal portfolio website showcasing skills, projects, and experience. Built with React, Next.js, and Tailwind CSS for a modern and responsive design.",
    image: NBPortfolio,
    link: `${"#home"}`,
  },
  {
    id: 7,
    title: "Food Recipe Website",
    description: "A dynamic recipe site using React, APIs, and Tailwind CSS. Users can search for recipes, view detailed instructions, and explore various cuisines.",
    image: MealStore,
    link: "https://themealstore.netlify.app/",
  },
  {
    id: 6,
    title: "WordPress Blog",
    description: "A mobile-friendly blog created with WordPress and Elementor Pro. Features SEO optimization, engaging content, and a user-friendly layout.",
    image: Blog,
    link: "https://khnworld.com/",
  },
  {
    id: 5,
    title: "React Calculator",
    description: "A fully responsive calculator built with React and Tailwind CSS. Supports basic arithmetic operations with a sleek and modern UI.",
    image: Calculator,
    link: "https://naveedbashir-nb.github.io/Calculator/",
  },
  {
    id: 4,
    title: "Digital Clock",
    description: "A real-time digital clock built using HTML, CSS, and JavaScript. Displays current date & time dynamically and updates every second.",
    image: Clock,
    link: "https://naveedbashir-nb.github.io/Digital-Clock/",
  },
  {
    id: 3,
    title: "Dynamic Resume Builder",
    description: "An interactive resume builder that allows users to create, customize, and download resumes instantly with a simple UI.",
    image: Resume,
    link: "https://instantresumebuilder.netlify.app/",
  },
  {
    id: 2,
    title: "SMIT Login Form",
    description: "A stylish and secure login & registration form designed for a seamless authentication experience. Built using HTML, CSS, and JavaScript for smooth UI interactions.",
    image: Loginform,
    link: "https://naveedbashir-nb.github.io/SMIT-Login-Registration-Form/index.html",
  },
  {
    id: 1,
    title: "Power Bulb",
    description: "A fun JavaScript project that allows users to turn a light bulb on and off, demonstrating event handling and DOM manipulation.",
    image: Bulb,
    link: "https://powerbulb.netlify.app/",
  },
];

export default function Portfolio() {
  return (
    <AuroraBackground>
      <section id="portfolio" className="relative z-30 inset-0 flex items-center justify-center font-bold px-4 py-24">
        <motion.div
          className="max-w-6xl mx-auto text-center"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
            My{" "}
            <span className="bg-gradient-to-r from-purple-700 via-violet-500 to-pink-500 text-transparent bg-clip-text">
              Portfolio
            </span>
          </h2>
          <p className="mt-4">
            Here are some of my recent projects built with React, Next.js, and WordPress using SEO strategies.
          </p>

          {/* Grid Layout */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-10">
            {projects.map((project) => (
              <motion.div
                key={project.id}
                className="relative group overflow-hidden rounded-lg shadow-lg"
                whileHover={{ scale: 1.03 }}
              >
                <Image
                  src={project.image}
                  alt={project.title}
                  width={400}
                  height={200}
                  className="max-w-96 max-h-48 object-cover mx-auto rounded-md"
                />

                {/* Card Hover */}
                <div className="absolute inset-0 bg-black bg-opacity-60 flex flex-col justify-center items-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-white px-6">
                  <h3 className="text-2xl font-semibold">{project.title}</h3>
                  <p className="mt-2 text-sm">{project.description}</p>
                  <a
                    href={project.link}
                    target="_blank"
                    className="mt-4 px-4 py-2 bg-purple-600 text-white rounded-full shadow-md hover:bg-purple-700 transition"
                  >
                    View Project
                  </a>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>
    </AuroraBackground>
  );
}
