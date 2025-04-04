"use client";
import React, { useState } from "react";
import Link from "next/link";
import { FaSearch, FaBars, FaTimes } from "react-icons/fa";

export default function Header() {
  const [showSearch, setShowSearch] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="flex justify-between items-center px-10 md:px-20 py-4 shadow-md bg-white fixed top-0 w-full z-50">
      {/* LOGO */}
      <Link href="#home" className="relative group transition duration-300">
        <div className="text-2xl font-extrabold tracking-wider relative inline-block ">
          <span className="text-purple-700 drop-shadow-lg">N</span>
          <span className="text-blue-600 drop-shadow-lg">B</span>

          <div className="absolute -bottom-0 -z-30 left-1/2 -translate-x-1/2 w-14 h-3 bg-gray-200 rounded-[50%]"></div>
        </div>
      </Link>

      {/* Menu Button on Mobile Screen */}
      <button
        className="text-gray-700 text-2xl md:hidden"
        onClick={() => setMenuOpen(!menuOpen)}
      >
        {menuOpen ? <FaTimes /> : <FaBars />}
      </button>

      {/* Menu Bar */}
      <nav className="hidden md:flex space-x-6 xl:space-x-16 text-gray-700 font-medium">
        <Link href="#home" className="relative group transition duration-300">
          Home
          <span className="absolute left-0 bottom-0 w-full h-0.5 bg-blue-500 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left shadow-md"></span>
        </Link>
        <Link href="#about" className="relative group transition duration-300">
          About
          <span className="absolute left-0 bottom-0 w-full h-0.5 bg-blue-500 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left shadow-md"></span>
        </Link>
        <Link
          href="#services"
          className="relative group transition duration-300"
        >
          Services
          <span className="absolute left-0 bottom-0 w-full h-0.5 bg-blue-500 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left shadow-md"></span>
        </Link>
        <Link
          href="#portfolio"
          className="relative group transition duration-300"
        >
          Portfolio
          <span className="absolute left-0 bottom-0 w-full h-0.5 bg-blue-500 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left shadow-md"></span>
        </Link>
        <Link
          href="#contact"
          className="relative group transition duration-300"
        >
          Contact
          <span className="absolute left-0 bottom-0 w-full h-0.5 bg-blue-500 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left shadow-md"></span>
        </Link>
      </nav>

      {/* Search Icon for Mobile Screen */}
      <div className="flex items-center">
        <FaSearch
          className="text-gray-600 text-lg md:hidden cursor-pointer"
          onClick={() => setShowSearch(!showSearch)}
        />

        {/* Search Bar with Icon for Desktop */}
        <div className="hidden md:flex items-center border border-gray-300 rounded-full px-3 py-1">
          <input
            type="text"
            placeholder="Search..."
            className="outline-none bg-transparent w-24 xl:w-64 text-gray-700"
          />
          <FaSearch className="text-gray-500 ml-2" />
        </div>
      </div>

      {/* Search Bar for Mobile Screen */}
      {showSearch && (
        <div className="absolute top-16 left-0 w-full bg-white px-10 py-2 shadow-md md:hidden">
          <input
            type="text"
            placeholder="Search..."
            className="w-full border border-gray-300 rounded-md px-4 py-2 outline-none"
          />
        </div>
      )}

      {/* Handle Toggle Menu on Mobile Screen */}
      {menuOpen && (
        <div className="absolute top-16 left-0 w-full bg-white shadow-md flex flex-col space-y-4 px-10 py-5 md:hidden">
          <Link
            href="#home"
            className="text-gray-700 text-lg text-center transition duration-300 hover:bg-blue-100 hover:text-blue-800"
            onClick={() => setMenuOpen(false)}
          >
            Home
          </Link>
          <Link
            href="#about"
            className="text-gray-700 text-lg text-center transition duration-300 hover:bg-blue-100 hover:text-blue-800"
            onClick={() => setMenuOpen(false)}
          >
            About
          </Link>
          <Link
            href="#services"
            className="text-gray-700 text-lg text-center transition duration-300 hover:bg-blue-100 hover:text-blue-800"
            onClick={() => setMenuOpen(false)}
          >
            Services
          </Link>
          <Link
            href="#portfolio"
            className="text-gray-700 text-lg text-center transition duration-300 hover:bg-blue-100 hover:text-blue-800"
            onClick={() => setMenuOpen(false)}
          >
            Portfolio
          </Link>
          <Link
            href="#contact"
            className="text-gray-700 text-lg text-center transition duration-300 hover:bg-blue-100 hover:text-blue-800"
            onClick={() => setMenuOpen(false)}
          >
            Contact
          </Link>
        </div>
      )}
    </header>
  );
}
