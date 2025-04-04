import React from "react";
import Link from "next/link";
import { FaWhatsapp, FaLinkedin, FaGithub, FaEnvelope } from "react-icons/fa";
import {
  SiHtml5,
  SiCss3,
  SiJavascript,
  SiBootstrap,
  SiTailwindcss,
  SiReact,
  SiNextdotjs,
  SiNodedotjs,
  SiExpress,
  SiMongodb,
} from "react-icons/si";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 px-10 md:px-20 py-4 shadow-t-md">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-start">
        <div>
          <h3 className="my-5 text-lg font-semibold text-white">Tech Stack</h3>
          <div className="my-5 flex flex-wrap gap-4 text-2xl">
            <SiHtml5 className="text-orange-500" title="HTML5" />
            <SiCss3 className="text-blue-500" title="CSS3" />
            <SiJavascript className="text-yellow-400" title="JavaScript" />
            <SiBootstrap className="text-purple-600" title="Bootstrap" />
            <SiTailwindcss className="text-blue-400" title="Tailwind CSS" />
            <SiReact className="text-blue-500" title="React" />
            <SiNextdotjs className="text-white" title="Next.js" />
            <SiNodedotjs className="text-green-500" title="Node.js" />
            <SiExpress className="text-gray-400" title="Express.js" />
            <SiMongodb className="text-green-600" title="MongoDB" />
          </div>
        </div>

        <div className="text-white">
          <h3 className="text-lg font-semibold my-5">Contact Me</h3>
          <ul className="space-y-3 my-5">
            <li className="flex items-center space-x-3">
              <FaWhatsapp className="text-green-500 text-xl" />
              <a
                href="https://wa.me/923334308510"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-green-400 transition"
              >
                (+92) 333 4308510
              </a>
            </li>

            <li className="flex items-center space-x-3">
              <FaEnvelope className="text-blue-500 text-xl" />
              <a
                href="mailto:naveed.bashir@live.com"
                className="hover:text-blue-400 transition"
              >
                naveed.bashir@live.com
              </a>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="my-5 text-lg font-semibold text-white">Follow Me</h3>
          <div className="my-5 flex space-x-5 text-2xl">
            <a
              href="https://wa.me/923334308510"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaWhatsapp className="hover:text-green-500 transition cursor-pointer" />
            </a>

            <a
              href="https://www.linkedin.com/in/m-naveed-bashir/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedin className="hover:text-blue-700 transition cursor-pointer" />
            </a>

            <a
              href="https://www.github.com/NaveedBashir-NB/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaGithub className="hover:text-gray-400 transition cursor-pointer" />
            </a>
          </div>
        </div>
      </div>

      <div className="text-center text-gray-500 text-sm mt-4">
        &copy; {new Date().getFullYear()} Naveed Bashir. All Rights Reserved.
      </div>
    </footer>
  );
}
