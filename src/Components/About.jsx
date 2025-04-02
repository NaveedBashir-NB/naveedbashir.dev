"use client";
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import Naveed from "../../public/images/Naveed.jpg";

export default function About() {
  return (
    <section
      id="about"
      className="px-10 md:px-20 py-16 bg-gradient-to-b from-gray-100 to-gray-200 md:min-h-screen flex items-center"
    >
      {/* Wrap the content in motion div for transition effect */}
      <motion.div
        className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 items-center gap-10"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeInOut" }}
      >

        {/* Wrap the Image in motion div for scaling effect */}
        <motion.div
          className="relative flex justify-center md:justify-start"
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.3 }}
        >
          <Image
            src={Naveed}
            alt="Profile Picture"
            width={400}
            height={400}
            className="object-cover rounded-full shadow-2xl border-4 border-white"
          />

          {/* Image Shadow Div */}
          <div className="absolute bottom-[-10px] left-1/2 transform -translate-x-1/3 w-[70%] h-[30px] bg-black opacity-30 blur-lg rounded-full"></div>
        </motion.div>

        {/* Text Section */}
        <div className="space-y-6 text-center md:text-left">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
            About{" "}
            <span className="bg-gradient-to-r from-purple-700 via-violet-500 to-pink-500 text-transparent bg-clip-text">
              Me
            </span>
          </h2>
          <p className="text-lg text-gray-700 leading-relaxed text-justify">
            I am a <b>Full-Stack Developer</b> with expertise in <b>React, Next.js, WordPress, and SEO.</b> Passionate about building <b>fast, SEO-optimized, and highly responsive websites.</b> I help businesses establish a strong online presence through performance-driven solutions.
          </p>
          <p className="text-lg text-gray-700 text-justify">
            Whether it’s a custom web app or an optimized WordPress site, I
            bring <b>innovation and efficiency</b> to every project. Let’s build
            something amazing together! 🚀
          </p>
        </div>
      </motion.div>
    </section>
  );
}
