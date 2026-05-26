"use client";
import React from "react";
import Link from "next/link";
import {
  FaGlobe,
  FaLinkedin,
  FaGithub,
  FaFacebook,
  FaArrowRight,
} from "react-icons/fa";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full bg-slate-900 text-slate-300 border-t border-slate-800 mt-auto">
      <div className="max-w-7xl mx-auto px-6 pt-16 pb-8">
        {/* MAIN GRID SECTION */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 pb-12 border-b border-slate-800">
          {/* COLUMN 1: BRAND INFO */}
          <div className="space-y-4">
            <div className="flex items-center gap-2 font-bold text-2xl text-blue-500 tracking-wide">
              <FaGlobe className="text-3xl animate-pulse" />
              <span>IdeaVault</span>
            </div>
            <p className="text-sm text-slate-400 leading-relaxed">
              IdeaVault is a premier centralized platform designed for
              innovators to seamlessly share, discover, and collaborate on
              groundbreaking concepts globally.
            </p>
          </div>

          {/* COLUMN 2: QUICK NAVIGATION */}
          <div className="space-y-4">
            <h4 className="text-sm font-semibold text-white tracking-wider uppercase">
              Platform
            </h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link
                  href="/"
                  className="hover:text-blue-500 transition-colors duration-200 block py-1"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="/ideas"
                  className="hover:text-blue-500 transition-colors duration-200 block py-1"
                >
                  Explore Ideas
                </Link>
              </li>
              <li>
                <Link
                  href="/add-idea"
                  className="hover:text-blue-500 transition-colors duration-200 block py-1"
                >
                  Submit Concept
                </Link>
              </li>
            </ul>
          </div>

          {/* COLUMN 3: LEGAL & SUPPORT */}
          <div className="space-y-4">
            <h4 className="text-sm font-semibold text-white tracking-wider uppercase">
              Legal & Support
            </h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link
                  href="/"
                  className="hover:text-blue-500 transition-colors duration-200 block py-1"
                >
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="hover:text-blue-500 transition-colors duration-200 block py-1"
                >
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="hover:text-blue-500 transition-colors duration-200 block py-1"
                >
                  Contact Support
                </Link>
              </li>
            </ul>
          </div>

          {/* COLUMN 4: NEWSLETTER / ENGAGEMENT */}
          <div className="space-y-4">
            <h4 className="text-sm font-semibold text-white tracking-wider uppercase">
              Stay Updated
            </h4>
            <p className="text-sm text-slate-400">
              Subscribe to our newsletter for latest tech insights.
            </p>
            <div className="flex items-center bg-slate-800 rounded-xl p-1 border border-slate-700 focus-within:border-blue-500 transition-colors">
              <input
                type="email"
                placeholder="Enter email"
                className="w-full bg-transparent pl-3 text-sm text-white outline-none placeholder-slate-500"
              />
              <button
                className="bg-blue-600 hover:bg-blue-700 text-white p-2.5 rounded-lg transition-colors"
                aria-label="Subscribe"
              >
                <FaArrowRight size={14} />
              </button>
            </div>
          </div>
        </div>

        {/* BOTTOM SECTION: COPYRIGHT & SOCIAL */}
        <div className="flex flex-col sm:flex-row justify-between items-center gap-4 pt-8 text-sm text-slate-500">
          <p>© {currentYear} IdeaVault Inc. All rights reserved.</p>

          {/* CORPORATE SOCIAL ICONS */}
          <div className="flex items-center gap-5 text-xl">
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noreferrer"
              className="hover:text-blue-500 transition-colors duration-200"
              aria-label="LinkedIn"
            >
              <FaLinkedin />
            </a>
            <a
              href="https://github.com"
              target="_blank"
              rel="noreferrer"
              className="hover:text-white transition-colors duration-200"
              aria-label="GitHub"
            >
              <FaGithub />
            </a>
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noreferrer"
              className="hover:text-blue-600 transition-colors duration-200"
              aria-label="Facebook"
            >
              <FaFacebook />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
