"use client";
import React from "react";
import {
  FaUserPlus,
  FaLightbulb,
  FaComments,
  FaChevronRight,
} from "react-icons/fa";

export default function HowItWorks() {
  const steps = [
    {
      id: 1,
      icon: <FaUserPlus className="text-blue-500" />,
      title: "1. Create & Authenticate",
      desc: "Sign up securely using Better Auth. Set up your developer or innovator profile in seconds to access the vault.",
      borderColor: "group-hover:border-blue-500/50",
      glowColor: "bg-blue-500/5",
    },
    {
      id: 2,
      icon: <FaLightbulb className="text-indigo-500" />,
      title: "2. Vault Your Concept",
      desc: "Submit your tech concepts or project ideas with detailed descriptions, tags, and dynamic routing categories securely to MongoDB.",
      borderColor: "group-hover:border-indigo-500/50",
      glowColor: "bg-indigo-500/5",
    },
    {
      id: 3,
      icon: <FaComments className="text-emerald-500" />,
      title: "3. Interact & Collaborate",
      desc: "Get real-time feedback, upvotes, and comments from the community. Map your interactions and scale your idea into reality.",
      borderColor: "group-hover:border-emerald-500/50",
      glowColor: "bg-emerald-500/5",
    },
  ];

  return (
    <section className="w-full bg-slate-900 py-16 lg:py-24 border-b border-slate-800 relative">
      <div className="max-w-7xl mx-auto px-6">
        {/* SECTION HEADER */}
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-1.5 bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider">
            Workflow Guide
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
            How{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-500">
              IdeaVault Works
            </span>
          </h2>
          <p className="text-slate-400 text-sm sm:text-base">
            A seamless three-step pipeline designed to take your raw concepts
            from imagination to structured community collaboration.
          </p>
        </div>

        {/* STEPS GRID */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
          {steps.map((step, idx) => (
            <div key={step.id} className="relative group">
              {/* CARD CONTAINER */}
              <div
                className={`h-full bg-slate-950/30 border border-slate-800/80 ${step.borderColor} p-8 rounded-2xl transition-all duration-300 relative overflow-hidden flex flex-col space-y-4`}
              >
                {/* INNER BACKGROUND GLOW ON HOVER */}
                <div
                  className={`absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 ${step.glowColor} pointer-events-none`}
                />

                {/* ICON & STEP NUMBER */}
                <div className="flex justify-between items-start">
                  <div className="w-12 h-12 rounded-xl bg-slate-800/80 border border-slate-700/30 flex items-center justify-center text-xl shadow-inner">
                    {step.icon}
                  </div>
                  <span className="text-xs font-mono font-bold text-slate-700 group-hover:text-slate-500 transition-colors">
                    STEP_0{step.id}
                  </span>
                </div>

                {/* TEXT CONTENT */}
                <div className="space-y-2 z-10">
                  <h3 className="text-xl font-bold text-white group-hover:text-blue-400 transition-colors">
                    {step.title}
                  </h3>
                  <p className="text-sm text-slate-400 leading-relaxed">
                    {step.desc}
                  </p>
                </div>
              </div>

              {/* CONNECTING ARROW (ONLY FOR DESKTOP AND BETWEEN CARDS) */}
              {idx < 2 && (
                <div className="hidden lg:flex absolute top-1/2 -right-4 -translate-y-1/2 z-20 text-slate-700 pointer-events-none animate-pulse">
                  <FaChevronRight size={16} />
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
