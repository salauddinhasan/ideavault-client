"use client";
import React from "react";
import { FaHeart, FaComment, FaWallet, FaArrowRight } from "react-icons/fa";
import Link from "next/link";
import Image from "next/image";

export default function IdeaCard({ idea }) {
  // মঙ্গোডিবির লাইভ ফিল্ডগুলো ডিস্ট্রাকচার করে ব্যাকআপ ভ্যালু সেট করে রাখলাম
  const {
    _id,
    title,
    category,
    shortDescription,
    imageUrl,
    estimatedBudget,
    tags = [],
    votes,
    commentsCount,
  } = idea;

  return (
    <div className="bg-slate-950/50 border border-slate-800 hover:border-slate-700 rounded-2xl transition-all duration-300 flex flex-col justify-between group overflow-hidden shadow-xl">
      <div>
        {/* IDEA IMAGE */}
        <div className="w-full h-48 overflow-hidden relative bg-slate-900 border-b border-slate-800">
          <Image
            src={imageUrl}
            width={300}
            height={300}
            alt={title}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 opacity-80 group-hover:opacity-100"
          />
          {/* CATEGORY BADGE ON IMAGE */}
          <span className="absolute top-4 left-4 text-[10px] font-bold tracking-wider uppercase text-blue-400 bg-slate-950/80 border border-blue-500/30 px-2.5 py-1 rounded-md backdrop-blur-sm">
            {category || "General"}
          </span>
        </div>

        {/* CARD CONTENT */}
        <div className="p-6 space-y-4">
          <h3 className="text-xl font-bold text-white group-hover:text-blue-400 transition-colors line-clamp-1">
            {title}
          </h3>

          {/* DYNAMIC TAGS */}
          {tags.length > 0 && (
            <div className="flex flex-wrap gap-1.5 pt-1">
              {tags.map((tag, idx) => (
                <span
                  key={idx}
                  className="text-[11px] font-medium text-slate-400 bg-slate-900 border border-slate-800/80 px-2.5 py-0.5 rounded-full"
                >
                  #{tag}
                </span>
              ))}
            </div>
          )}
        </div>
      </div>

      {/* CARD FOOTER */}
      <div className="p-6 pt-0">
        <div className="pt-4 border-t border-slate-800/60 flex justify-between items-center w-full">
          {/* BUDGET INFO */}
          <div className="flex items-center gap-1.5 text-xs text-amber-500 font-mono bg-amber-500/5 border border-amber-500/10 px-2 py-1 rounded-lg">
            <FaWallet size={12} />
            <span>{estimatedBudget || "TBD"}</span>
          </div>

          {/* INTERACTIONS & DETAILS */}
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-3 text-xs text-slate-500 font-medium">
              <span className="flex items-center gap-1 hover:text-rose-500 transition-colors cursor-pointer">
                <FaHeart className="text-rose-500/80" /> {votes || 0}
              </span>
              <span className="flex items-center gap-1 hover:text-blue-400 transition-colors">
                <FaComment /> {commentsCount || 0}
              </span>
            </div>

            <Link
              href={`/ideas/${_id}`}
              className="bg-slate-800 hover:bg-blue-600 text-white text-xs font-bold px-3 py-2 rounded-xl transition-all flex items-center gap-1 group/btn"
            >
              Details
              <FaArrowRight
                size={10}
                className="group-hover/btn:translate-x-0.5 transition-transform"
              />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
