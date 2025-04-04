"use client";
import React from "react";
import { motion } from "framer-motion";
import { FaCode, FaWordpress, FaSearch, FaMobileAlt } from "react-icons/fa";
import { SiHtml5, SiCss3, SiJavascript, SiBootstrap, SiTailwindcss, SiReact, SiNextdotjs, SiWordpress, SiGoogle } from "react-icons/si";

export default function Skills() {
  return (
    <section id="services" className="md:h-screen px-10 md:px-20 py-16 bg-gray-100">
      
      {/* Wrap the content in motion div for transition effect */}
      <motion.div
        className="max-w-6xl mx-auto text-center md:translate-y-16"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeInOut" }}
      >
        {/* Heading */}
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
          My{" "}
          <span className="bg-gradient-to-r from-purple-700 via-violet-500 to-pink-500 text-transparent bg-clip-text">
            Skills & Services
          </span>
        </h2>

        {/* Skills */}
        <div className="my-10 text-center">
          <ul className="flex flex-wrap justify-center gap-4 text-sm text-gray-800">
            <li className="flex items-center px-4 py-2 bg-white shadow rounded-lg">
              <SiHtml5 className="text-red-500 mr-2 " /> HTML
            </li>
            <li className="flex items-center px-4 py-2 bg-white shadow rounded-lg">
              <SiCss3 className="text-blue-500 mr-2" /> CSS
            </li>
            <li className="flex items-center px-4 py-2 bg-white shadow rounded-lg">
              <SiJavascript className="text-yellow-500 mr-2" /> JavaScript
            </li>
            <li className="flex items-center px-4 py-2 bg-white shadow rounded-lg">
              <SiBootstrap className="text-purple-600 mr-2" /> Bootstrap
            </li>
            <li className="flex items-center px-4 py-2 bg-white shadow rounded-lg">
              <SiTailwindcss className="text-blue-400 mr-2" /> Tailwind CSS
            </li>
            <li className="flex items-center px-4 py-2 bg-white shadow rounded-lg">
              <SiReact className="text-blue-600 mr-2" /> React.js
            </li>
            <li className="flex items-center px-4 py-2 bg-white shadow rounded-lg">
              <SiNextdotjs className="text-gray-900 mr-2" /> Next.js
            </li>
            <li className="flex items-center px-4 py-2 bg-white shadow rounded-lg">
              <SiWordpress className="text-blue-700 mr-2" /> WordPress
            </li>
            <li className="flex items-center px-4 py-2 bg-white shadow rounded-lg">
              <SiGoogle className="text-green-500 mr-2" /> SEO
            </li>
          </ul>
        </div>

        {/* Services */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-10">
          <motion.div
            className="p-6 bg-white shadow-xl rounded-xl flex flex-col items-center text-center"
            whileHover={{ scale: 1.05 }}
          >
            <FaCode className="text-5xl text-purple-700 mb-4" />
            <h3 className="text-xl font-semibold text-gray-800">Web Development</h3>
            <p className="text-gray-600 mt-2">
              Expert in <strong>React, Next.js, and modern frontend technologies</strong> to build
              <strong> fast and responsive</strong> websites.
            </p>
          </motion.div>

          {/* Service Card - WordPress & SEO */}
          <motion.div
            className="p-6 bg-white shadow-xl rounded-xl flex flex-col items-center text-center"
            whileHover={{ scale: 1.05 }}
          >
            <FaWordpress className="text-5xl text-blue-600 mb-4" />
            <h3 className="text-xl font-semibold text-gray-800">WordPress Development</h3>
            <p className="text-gray-600 mt-2">
              I design and develop <strong>custom WordPress websites</strong> with <strong>Elementor,
              WooCommerce, and SEO optimization.</strong>
            </p>
          </motion.div>

          {/* Service Card - SEO Optimization */}
          <motion.div
            className="p-6 bg-white shadow-xl rounded-xl flex flex-col items-center text-center"
            whileHover={{ scale: 1.05 }}
          >
            <FaSearch className="text-5xl text-green-600 mb-4" />
            <h3 className="text-xl font-semibold text-gray-800">SEO & Digital Marketing</h3>
            <p className="text-gray-600 mt-2">
              <strong>Boost search rankings</strong> with advanced <strong>SEO strategies</strong>, keyword
              research, and on-page optimization.
            </p>
          </motion.div>

          {/* Service Card - Mobile Optimization */}
          <motion.div
            className="p-6 bg-white shadow-xl rounded-xl flex flex-col items-center text-center"
            whileHover={{ scale: 1.05 }}
          >
            <FaMobileAlt className="text-5xl text-red-500 mb-4" />
            <h3 className="text-xl font-semibold text-gray-800">Mobile Optimization</h3>
            <p className="text-gray-600 mt-2">
              Ensure <strong>100% responsiveness</strong> with mobile-first designs for <strong>seamless
              user experience.</strong>
            </p>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}
