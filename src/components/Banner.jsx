"use client";
import React from "react";
import Link from "next/link";
import { FaArrowRight, FaLightbulb, FaRocket } from "react-icons/fa";

export default function Banner() {
  return (
    <section className="relative w-full bg-slate-900 overflow-hidden py-20 lg:py-28 border-b border-slate-800">
      {/* BACKGROUND ABSTRACT GLOWS */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl -z-10" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-indigo-600/10 rounded-full blur-3xl -z-10" />

      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* LEFT COLUMN: TEXT CONTENT */}
        <div className="space-y-6 text-center lg:text-left">
          <div className="inline-flex items-center gap-2 bg-blue-500/10 border border-blue-500/20 text-blue-400 px-4 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider">
            <FaRocket className="animate-bounce" />
            Empowering Next-Gen Innovators
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white leading-tight">
            Where Big Ideas Find Their{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-500">
              Perfect Vault
            </span>
          </h1>

          <p className="text-base sm:text-lg text-slate-400 max-w-xl mx-auto lg:mx-0 leading-relaxed">
            Share your groundbreaking concepts, collaborate with visionary
            minds, and discover tech insights that shape tomorrow. Your journey
            from imagination to reality starts here.
          </p>

          {/* ACTION BUTTONS */}
          <div className="flex flex-wrap justify-center lg:justify-start items-center gap-4 pt-4">
            <Link
              href="/ideas"
              className="group bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-3.5 rounded-xl shadow-lg shadow-blue-600/20 transition-all duration-200 flex items-center gap-2"
            >
              Explore Concepts
              <FaArrowRight
                size={14}
                className="group-hover:translate-x-1 transition-transform"
              />
            </Link>
            <Link
              href="/add-idea"
              className="bg-slate-800 hover:bg-slate-700 border border-slate-700 text-slate-200 font-semibold px-6 py-3.5 rounded-xl transition-all duration-200"
            >
              Submit an Idea
            </Link>
          </div>
        </div>

        {/* RIGHT COLUMN: PROFESSIONAL GRAPHIC / VISUAL CARD */}
        <div className="hidden lg:flex justify-center relative">
          <div className="w-[450px] h-[350px] bg-gradient-to-br from-slate-800 to-slate-950 border border-slate-700/50 rounded-2xl p-8 shadow-2xl relative flex flex-col justify-between">
            {/* Decorative Top Bar */}
            <div className="flex items-center gap-2 pb-4 border-b border-slate-800">
              <span className="w-3 h-3 rounded-full bg-red-500" />
              <span className="w-3 h-3 rounded-full bg-yellow-500" />
              <span className="w-3 h-3 rounded-full bg-green-500" />
              <span className="text-xs text-slate-500 font-mono ml-2">
                idea_generator.json
              </span>
            </div>

            {/* Glowing Icon Center */}
            <div className="my-auto flex flex-col items-center justify-center text-center space-y-4">
              <div className="p-5 bg-gradient-to-tr from-blue-500 to-indigo-600 rounded-2xl shadow-xl shadow-blue-500/20 text-white text-4xl">
                <FaLightbulb className="animate-pulse" />
              </div>
              <div className="space-y-1">
                <h3 className="text-white font-semibold text-lg">
                  Centralized Collaboration
                </h3>
                <p className="text-sm text-slate-400 max-w-xs">
                  Securely store, dynamic vote, and map interactions globally.
                </p>
              </div>
            </div>

            {/* Status Info */}
            <div className="flex justify-between items-center text-xs font-mono text-slate-500 pt-4 border-t border-slate-800">
              <span>STATUS: READY</span>
              <span className="text-blue-400">v1.0.0</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
