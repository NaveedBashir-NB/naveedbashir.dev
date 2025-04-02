"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import { AuroraBackground } from "./ui/aurora-background";
import { FaEnvelope, FaPhone } from "react-icons/fa"; 

export default function Contact() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
  
      if (response.ok) {
        alert("Message Sent Successfully!");
        setFormData({ name: "", email: "", message: "" });
      } else {
        alert("Failed to send message. Please try again later.");
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      alert("Something went wrong. Please try again.");
    }
  };

  return (
    <AuroraBackground>
      <section id="contact" className="relative md:min-h-screen px-10 md:px-20 py-16 flex items-center justify-center">
        <div className="relative max-w-4xl mx-auto text-center md:translate-y-10">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
            Hire{" "}
            <span className="bg-gradient-to-r from-purple-700 via-violet-500 to-pink-500 text-transparent bg-clip-text">
              Me
            </span>
          </h2>
          <p className="text-lg text-gray-600 mt-4">Let's discuss your project!</p>

          <motion.form
            onSubmit={handleSubmit}
            className="mt-8 bg-white/70 backdrop-blur-md shadow-lg rounded-lg p-6 space-y-4 border border-gray-200"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
          >
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              value={formData.name}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-300 bg-white text-gray-800 placeholder-gray-500 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
              required
            />

            <input
              type="email"
              name="email"
              placeholder="Your Email"
              value={formData.email}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-300 bg-white text-gray-800 placeholder-gray-500 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
              required
            />

            <textarea
              name="message"
              placeholder="Your Message"
              value={formData.message}
              onChange={handleChange}
              rows="5"
              className="w-full px-4 py-2 border border-gray-300 bg-white text-gray-800 placeholder-gray-500 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
              required
            ></textarea>

            <button
              type="submit"
              className="w-full bg-purple-600 text-white py-2 rounded-md font-semibold hover:bg-purple-700 transition"
            >
              Send Message
            </button>
          </motion.form>

          <div className="mt-8 text-gray-700 text-lg space-y-3">
            <p className="flex items-center justify-center">
              <FaEnvelope className="mr-2 text-purple-600" /> naveedbashir@live.com
            </p>
            <p className="flex items-center justify-center">
              <FaPhone className="mr-2 text-purple-600" /> (+92) 333 4308510
            </p>
          </div>
        </div>
      </section>
    </AuroraBackground>
  );
}
