"use client";
import React from "react";
import { Typewriter } from "react-simple-typewriter";
import Image from "next/image";
import profilePic from "../../public/images/profile-pic.png";
import { motion } from "framer-motion";
import { AuroraBackground } from "./ui/aurora-background";

export default function HeroSection() {
  return (
    <AuroraBackground>
      {/* Wrap the entire content in AuroraBackground Container for color background effect */}
      
      {/* Wrap the content in motion div for transition effect */}
      <motion.div
        initial={{ opacity: 0.0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.3,
          duration: 0.8,
          ease: "easeInOut",
        }}
        className="relative flex flex-col gap-4 items-center justify-center px-4"
      >

        <div className="grid grid-cols-1 md:grid-cols-2 md:h-screen px-10 md:px-20 items-center translate-y-16">
          {/* Left Section (Text) */}
          <div className="text-center md:text-left space-y-5 m-5">
            <p className="text-2xl font-bold">Hi, 👋 </p>
            <h1 className="text-3xl md:text-5xl font-bold">
              I'm Naveed Bashir
            </h1>
            <h2 className="text-2xl md:text-3xl font-semibold ">
              A{" "}
              <span className="font-bold bg-clip-text bg-no-repeat text-transparent bg-gradient-to-r py-4 from-purple-700 via-violet-500 to-pink-500 [text-shadow:0_0_rgba(0,0,0,0.1)]">
                <Typewriter
                  words={[
                    "Full-Stack Developer",
                    "WordPress & SEO Specialist",
                    "React & Next.js Enthusiast",
                  ]}
                  loop={50}
                  cursor
                  cursorStyle="_"
                  typeSpeed={50}
                  deleteSpeed={30}
                  delaySpeed={1200}
                />
              </span>
            </h2>
            <p className="text-gray-600 text-lg leading-relaxed text-justify">
              <b>Full-stack web developer</b> with expertise in{" "}
              <b>modern frontend technologies</b> like <b>React and Next.js.</b>{" "}
              Also proficient in{" "}
              <b>WordPress and search engine optimization.</b> Designing{" "}
              <b>fast-loading, SEO-optimized, and highly responsive websites</b>{" "}
              is my passion.
            </p>
          </div>

          {/* Right Section (Image) */}
          <div className="relative flex justify-center md:justify-end m-5 mb-32 md:mb-5">
            <Image
              src={profilePic}
              alt="Developer Illustration"
              width={400}
              height={400}
              className="object-cover rounded-full shadow-xl"
              priority
            />
            <div className="absolute bottom-[-10px] left-1/2 transform -translate-x-1/3 w-[70%] h-[30px] bg-black opacity-30 blur-lg rounded-full"></div>
          </div>
        </div>
      </motion.div>
    </AuroraBackground>
  );
}
