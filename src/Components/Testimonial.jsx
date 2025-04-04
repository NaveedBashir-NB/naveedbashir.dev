"use client";
import React, { useState } from "react";
import { FaQuoteLeft, FaQuoteRight } from "react-icons/fa";
import { Meteors } from "./ui/meteors";
import { AuroraBackground } from "./ui/aurora-background";

const testimonials = [
  {
    id: 1,
    name: "John Doe",
    position: "CEO, Tech Corp",
    feedback:
      "Naveed is an exceptional developer! His expertise in React, Next.js, and SEO helped our business scale online. Highly recommended!",
  },
  {
    id: 2,
    name: "Sarah Khan",
    position: "Marketing Manager",
    feedback:
      "Superb WordPress and SEO skills! Naveed optimized our website and increased traffic by 200%. A great professional to work with!",
  },
  {
    id: 3,
    name: "Michael Lee",
    position: "Founder, Startup X",
    feedback:
      "A talented full-stack developer! Delivered a fast, responsive website with excellent UI/UX. Would love to work again!",
  },
];

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <AuroraBackground>
    <section id="testimonials" className="md:h-screen py-16 px-10 md:px-20 ">
      <div className="max-w-5xl mx-auto text-center md:translate-y-16">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
          Happy{" "}
          <span className="bg-gradient-to-r from-purple-700 via-violet-500 to-pink-500 text-transparent bg-clip-text">
            Clients
          </span>
        </h2>
        <p className="text-lg text-gray-700 mt-4">Here’s what my clients say about my work.</p>
      </div>

      {/* Testimonial Card with Wider Layout */}
      <div className="relative flex justify-center mt-10 md:translate-y-16">
        <div className="relative w-full max-w-2xl bg-gray-900 text-white shadow-lg rounded-xl p-10 md:p-12 lg:p-14 text-center overflow-hidden">
          <Meteors className="absolute inset-0" />
          <FaQuoteLeft className="text-4xl text-gray-400 absolute top-6 left-6" />
          <p className="text-gray-300 text-lg md:text-xl italic leading-relaxed z-10 relative">
            {testimonials[currentIndex].feedback}
          </p>
          <FaQuoteRight className="text-4xl text-gray-400 absolute bottom-6 right-6" />
          <h3 className="mt-6 text-xl md:text-2xl font-semibold text-purple-400 z-10 relative">
            {testimonials[currentIndex].name}
          </h3>
          <p className="text-gray-400 z-10 relative">{testimonials[currentIndex].position}</p>
        </div>
      </div>

      {/* Navigation Buttons */}
      <div className="mt-8 flex justify-center space-x-4 md:translate-y-16">
        <button
          onClick={prevTestimonial}
          className="px-5 py-2 bg-purple-600 text-white rounded-full shadow-md hover:bg-purple-700 transition"
        >
          Prev
        </button>
        <button
          onClick={nextTestimonial}
          className="px-5 py-2 bg-purple-600 text-white rounded-full shadow-md hover:bg-purple-700 transition"
        >
          Next
        </button>
      </div>
    </section>
    </AuroraBackground>
  );
}
