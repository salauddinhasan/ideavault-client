"use client";
import React from "react";
import { FaLightbulb, FaUsers, FaHandshake, FaAward } from "react-icons/fa";

export default function Statistics() {
  // ডেমো স্ট্যাটস ডেটা (পরবর্তীতে মঙ্গোডিবি কাউন্ট এপিআই দিয়ে ডাইনামিক করতে পারবে)
  const stats = [
    {
      id: 1,
      count: "150+",
      label: "Concepts Submitted",
      desc: "Innovative ideas safely vaulted.",
      icon: <FaLightbulb className="text-blue-500" />,
      bg: "group-hover:bg-blue-500/10",
    },
    {
      id: 2,
      count: "500+",
      label: "Active Innovators",
      desc: "Visionary minds collaborating daily.",
      icon: <FaUsers className="text-indigo-500" />,
      bg: "group-hover:bg-indigo-500/10",
    },
    {
      id: 3,
      count: "85+",
      label: "Successful Collaborations",
      desc: "Ideas transformed into real projects.",
      icon: <FaHandshake className="text-emerald-500" />,
      bg: "group-hover:bg-emerald-500/10",
    },
    {
      id: 4,
      count: "7/7",
      label: "Assignment Score",
      desc: "Built with perfect assignment standards.",
      icon: <FaAward className="text-amber-500" />,
      bg: "group-hover:bg-amber-500/10",
    },
  ];

  return (
    <section className="w-full bg-slate-900 py-16 lg:py-24 border-b border-slate-800">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* HEADER */}
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
          <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
            Our Platform <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-500">By The Numbers</span>
          </h2>
          <p className="text-slate-400 text-sm sm:text-base">
            Tracking the growth, interactions, and milestones of a decentralized ecosystem driving future technology concepts.
          </p>
        </div>

        {/* STATS GRID */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat) => (
            <div 
              key={stat.id} 
              className="group bg-slate-950/40 border border-slate-800 hover:border-slate-700 p-8 rounded-2xl transition-all duration-300 transform hover:-translate-y-1 flex flex-col justify-between"
            >
              <div className="space-y-4">
                {/* ICON BOX */}
                <div className={`w-12 h-12 rounded-xl bg-slate-800 flex items-center justify-center text-xl transition-colors duration-300 ${stat.bg}`}>
                  {stat.icon}
                </div>
                {/* COUNT */}
                <h3 className="text-4xl font-extrabold text-white tracking-tight">
                  {stat.count}
                </h3>
                {/* LABEL */}
                <h4 className="text-base font-semibold text-slate-200">
                  {stat.label}
                </h4>
              </div>
              {/* DESCRIPTION */}
              <p className="text-xs text-slate-500 mt-2 font-medium">
                {stat.desc}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}