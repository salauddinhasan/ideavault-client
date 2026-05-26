"use client";
import React from "react";
import Link from "next/link";
import {
  FaBrain,
  FaCode,
  FaGraduationCap,
  FaHeartbeat,
  FaCoins,
  FaArrowRight,
} from "react-icons/fa";

export default function Categories() {
  const categories = [
    {
      id: 1,
      name: "Artificial Intelligence",
      slug: "ai-ml",
      count: "42 Ideas",
      icon: <FaBrain className="text-purple-500" />,
      bg: "group-hover:text-purple-400",
    },
    {
      id: 2,
      name: "Web Development",
      slug: "web-dev",
      count: "38 Ideas",
      icon: <FaCode className="text-blue-500" />,
      bg: "group-hover:text-blue-400",
    },
    {
      id: 3,
      name: "FinTech & Blockchain",
      slug: "fintech",
      count: "25 Ideas",
      icon: <FaCoins className="text-amber-500" />,
      bg: "group-hover:text-amber-400",
    },
    {
      id: 4,
      name: "EdTech Platform",
      slug: "edtech",
      count: "19 Ideas",
      icon: <FaGraduationCap className="text-emerald-500" />,
      bg: "group-hover:text-emerald-400",
    },
    {
      id: 5,
      name: "Health & Biotech",
      slug: "healthtech",
      count: "14 Ideas",
      icon: <FaHeartbeat className="text-rose-500" />,
      bg: "group-hover:text-rose-400",
    },
  ];

  return (
    <section className="w-full bg-slate-900 py-16 lg:py-24 border-b border-slate-800">
      <div className="max-w-7xl mx-auto px-6">
        {/* SECTION HEADER */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-4 mb-12">
          <div className="space-y-3 max-w-xl">
            <div className="inline-flex items-center gap-1.5 bg-blue-500/10 border border-blue-500/20 text-blue-400 px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider">
              Targeted Filters
            </div>
            <h2 className="text-3xl font-bold text-white tracking-tight">
              Explore Concepts by{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-500">
                Popular Categories
              </span>
            </h2>
            <p className="text-slate-400 text-sm">
              Dive directly into specific domains to find projects, dynamic
              routes, and collaborations tailored to your tech stack.
            </p>
          </div>

          <Link
            href="/ideas"
            className="text-sm font-semibold text-blue-500 hover:text-blue-400 flex items-center gap-2 transition-colors group pt-2 md:pt-0"
          >
            See All Categories
            <FaArrowRight
              size={12}
              className="group-hover:translate-x-1 transition-transform"
            />
          </Link>
        </div>

        {/* CATEGORIES GRID */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-5">
          {categories.map((cat) => (
            <Link
              key={cat.id}
              href={`/ideas?category=${cat.slug}`}
              className="group bg-slate-950/40 border border-slate-800/80 hover:border-slate-700/80 p-6 rounded-2xl transition-all duration-300 flex flex-col justify-between items-start h-40 relative overflow-hidden"
            >
              {/* ICON BOX */}
              <div className="w-12 h-12 rounded-xl bg-slate-900 border border-slate-800 flex items-center justify-center text-xl group-hover:scale-110 transition-transform duration-300 shadow-md">
                {cat.icon}
              </div>

              {/* TEXT CONTENT */}
              <div className="space-y-1 z-10 w-full">
                <h3
                  className={`text-base font-bold text-white truncate ${cat.bg} transition-colors`}
                >
                  {cat.name}
                </h3>
                <p className="text-xs text-slate-500 font-medium">
                  {cat.count}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
