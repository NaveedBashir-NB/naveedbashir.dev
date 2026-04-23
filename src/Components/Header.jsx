"use client";
import React, { useState } from "react";
import Link from "next/link";
import { FaBars, FaTimes, FaArrowRight } from "react-icons/fa";
import BrandLogo from "./BrandLogo";

const navItems = [
  { href: "#home", label: "Home" },
  { href: "#about", label: "About" },
  { href: "#services", label: "Services" },
  { href: "#portfolio", label: "Portfolio" },
  { href: "#contact", label: "Contact" },
];

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const scrollToSection = (hash) => {
    if (typeof window === "undefined") return;

    const target = document.querySelector(hash);
    if (!target) return;

    target.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  const handleNavClick = (event, hash) => {
    event.preventDefault();
    setMenuOpen(false);
    scrollToSection(hash);
  };

  return (
    <header className="fixed top-0 z-50 w-full px-4 pt-4 sm:px-6 lg:px-10">
      <div className="mx-auto max-w-7xl rounded-[1.75rem] border border-white/50 bg-white/75 px-4 py-3 shadow-[0_20px_80px_rgba(15,23,42,0.12)] backdrop-blur-xl lg:px-6">
        <div className="flex items-center justify-between gap-4">
          <Link
            href="#home"
            aria-label="Go to home"
            className="shrink-0"
            onClick={(event) => handleNavClick(event, "#home")}
          >
            <BrandLogo />
          </Link>

          <nav className="hidden items-center rounded-full border border-slate-200/80 bg-slate-950/5 px-2 py-1.5 md:flex">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={(event) => handleNavClick(event, item.href)}
                className="rounded-full px-4 py-2 text-sm font-medium text-slate-700 transition duration-300 hover:bg-white hover:text-slate-950 hover:shadow-sm"
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            <Link
              href="#contact"
              onClick={(event) => handleNavClick(event, "#contact")}
              className="hidden items-center gap-2 rounded-full bg-slate-950 px-4 py-2 text-sm font-semibold text-white shadow-lg shadow-slate-950/20 transition duration-300 hover:-translate-y-0.5 hover:bg-slate-800 md:inline-flex"
            >
              Let&apos;s Talk
              <FaArrowRight className="text-xs" />
            </Link>

            <button
              type="button"
              aria-label={menuOpen ? "Close menu" : "Open menu"}
              aria-expanded={menuOpen}
              onClick={() => setMenuOpen((value) => !value)}
              className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-slate-200 bg-white text-slate-900 shadow-sm transition hover:bg-slate-50 md:hidden"
            >
              {menuOpen ? <FaTimes className="text-lg" /> : <FaBars className="text-lg" />}
            </button>
          </div>
        </div>

        {menuOpen ? (
          <div className="mt-4 border-t border-slate-200 pt-4 md:hidden">
            <div className="grid gap-2">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={(event) => handleNavClick(event, item.href)}
                  className="rounded-2xl border border-transparent bg-white/80 px-4 py-3 text-base font-medium text-slate-700 transition hover:border-slate-200 hover:bg-white hover:text-slate-950"
                >
                  {item.label}
                </Link>
              ))}
              <Link
                href="#contact"
                onClick={(event) => handleNavClick(event, "#contact")}
                className="mt-2 inline-flex items-center justify-center gap-2 rounded-2xl bg-slate-950 px-4 py-3 text-sm font-semibold text-white shadow-lg shadow-slate-950/20"
              >
                Start a Project
                <FaArrowRight className="text-xs" />
              </Link>
            </div>
          </div>
        ) : null}
      </div>
    </header>
  );
}
