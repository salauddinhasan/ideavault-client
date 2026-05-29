"use client";
import React, { useState, useEffect } from "react";
import { useParams, useRouter } from "next/navigation";
import {
  FaHeart,
  FaComment,
  FaWallet,
  FaChevronLeft,
  FaSpinner,
  FaBullhorn,
  FaCheckCircle,
  FaUsers,
  FaArrowRight,
  FaEnvelope,
} from "react-icons/fa";
import Image from "next/image";
import Link from "next/link";

export default function IdeaDetailsPage() {
  const { id } = useParams();
  const router = useRouter();
  const [idea, setIdea] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!id) return;

    fetch(`http://localhost:5000/ideas/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setIdea(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Details page error", err);
        setLoading(false);
      });
  }, [id]);

  if (loading) {
    return (
      <div className="w-full bg-slate-900 min-h-screen flex flex-col justify-center items-center text-white gap-4">
        <FaSpinner className="animate-spin text-4xl text-blue-500" />
        <p className="text-sm font-mono tracking-wider text-slate-400">
          FETCHING VAULT SECURE DATA...
        </p>
      </div>
    );
  }

  if (!idea) {
    return (
      <div className="w-full bg-slate-900 min-h-screen flex flex-col justify-center items-center text-white gap-4">
        <p className="text-slate-400">Concept not found in the vault.</p>
        <button
          onClick={() => router.back()}
          className="text-sm text-blue-500 hover:underline"
        >
          Go Back
        </button>
      </div>
    );
  }

  return (
    <div className="w-full bg-slate-900 min-h-screen text-slate-300 py-12">
      <div className="max-w-4xl mx-auto px-6 space-y-8">
        {/* BACK BUTTON */}
        <button
          onClick={() => router.back()}
          className="flex items-center gap-2 text-sm font-medium text-slate-400 hover:text-white transition-colors group mb-4"
        >
          <FaChevronLeft
            size={12}
            className="group-hover:-translate-x-0.5 transition-transform"
          />
          Back to Explorations
        </button>

        {/* HERO SECTION: LEFT IMAGE & RIGHT TEXT */}
        <div className="bg-slate-950/40 border border-slate-800 rounded-2xl overflow-hidden shadow-2xl grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 p-6 md:p-8 items-center">
          {/* LEFT SIDE: IMAGE */}
          <div className="w-full h-64 sm:h-72 md:h-80 overflow-hidden relative bg-slate-950 rounded-xl border border-slate-800/60">
            <Image
              src={idea.imageUrl}
              alt={idea.title}
              width={600}
              height={400}
              priority
              className="w-full h-full object-cover opacity-80"
            />
          </div>

          {/* RIGHT SIDE: TEXT CONTENT */}
          <div className="space-y-5 flex flex-col justify-center h-full">
            <div>
              <span className="inline-block text-[10px] font-bold tracking-wider uppercase text-blue-400 bg-blue-500/5 border border-blue-500/20 px-3 py-1 rounded-md mb-3">
                {idea.category || "General"}
              </span>
              <h1 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-white tracking-tight leading-tight">
                {idea.title}
              </h1>
            </div>

            {/* TAGS */}
            <div className="flex flex-wrap gap-2 pt-2">
              {idea.tags?.map((tag, idx) => (
                <span
                  key={idx}
                  className="text-xs font-medium text-slate-400 bg-slate-900 border border-slate-800 px-3 py-1 rounded-full"
                >
                  #{tag}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* METRICS & BUDGET ROW */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          <div className="bg-slate-950/40 border border-slate-800/60 p-5 rounded-xl flex items-center justify-between">
            <div className="space-y-1">
              <p className="text-xs text-slate-500 font-medium">
                Estimated Budget
              </p>
              <p className="text-lg font-bold text-amber-500 font-mono">
                {idea.estimatedBudget || "TBD"}
              </p>
            </div>
            <FaWallet className="text-2xl text-amber-500/30" />
          </div>
          <div className="bg-slate-950/40 border border-slate-800/60 p-5 rounded-xl flex items-center justify-between">
            <div className="space-y-1">
              <p className="text-xs text-slate-500 font-medium">
                Community Upvotes
              </p>
              <p className="text-lg font-bold text-rose-500 font-mono">
                {idea.votes || 0} Votes
              </p>
            </div>
            <FaHeart className="text-2xl text-rose-500/30" />
          </div>
          <div className="bg-slate-950/40 border border-slate-800/60 p-5 rounded-xl flex items-center justify-between">
            <div className="space-y-1">
              <p className="text-xs text-slate-500 font-medium">Discussions</p>
              <p className="text-lg font-bold text-blue-400 font-mono">
                {idea.commentsCount || 0} Threads
              </p>
            </div>
            <FaComment className="text-2xl text-blue-400/30" />
          </div>
        </div>

        {/* DETAILED SPECIFICATIONS */}
        <div className="bg-slate-950/30 border border-slate-800 rounded-2xl p-8 space-y-8 shadow-xl">
          {/* PROBLEM STATEMENT */}
          <div className="space-y-3">
            <h3 className="text-lg font-bold text-white flex items-center gap-2">
              <FaBullhorn className="text-rose-500 text-base" /> The Problem
              Statement
            </h3>
            <p className="text-sm text-slate-400 leading-relaxed pl-6 border-l border-slate-800">
              {idea.problemStatement}
            </p>
          </div>

          {/* PROPOSED SOLUTION */}
          <div className="space-y-3">
            <h3 className="text-lg font-bold text-white flex items-center gap-2">
              <FaCheckCircle className="text-emerald-500 text-base" /> Proposed
              Solution
            </h3>
            <p className="text-sm text-slate-400 leading-relaxed pl-6 border-l border-slate-800">
              {idea.proposedSolution}
            </p>
          </div>

          {/* DETAILED DESCRIPTION */}
          <div className="space-y-3">
            <h3 className="text-lg font-bold text-white flex items-center gap-2">
              📂 Concept Deep-Dive
            </h3>
            <p className="text-sm text-slate-300 leading-relaxed pl-6 border-l border-slate-800 bg-slate-950/20 p-4 rounded-xl">
              {idea.detailedDescription}
            </p>
          </div>

          {/* TARGET AUDIENCE */}
          <div className="space-y-3">
            <h3 className="text-lg font-bold text-white flex items-center gap-2">
              <FaUsers className="text-indigo-500 text-base" /> Target Market /
              Audience
            </h3>
            <p className="text-sm text-slate-400 leading-relaxed pl-6">
              {idea.targetAudience || "Global Tech Ecosystem"}
            </p>
          </div>
        </div>

        {/* BOTTOM ACTION BUTTONS ROW */}
        <div className="flex flex-col sm:flex-row items-center justify-end gap-4 pt-4">
          <Link
            href="/ideas"
            className="w-full sm:w-auto px-6 py-3 bg-slate-800 hover:bg-slate-700 text-white font-medium text-sm rounded-xl transition-colors border border-slate-700 text-center flex items-center justify-center gap-2"
          >
            Explore More
          </Link>

          <button
            onClick={() => alert("Connecting with the concept owner...")}
            className="w-full sm:w-auto px-6 py-3 bg-blue-600 hover:bg-blue-500 text-white font-semibold text-sm rounded-xl transition-all shadow-lg shadow-blue-600/20 text-center flex items-center justify-center gap-2 group"
          >
            <span>Connect Founder</span>
            <FaArrowRight
              size={12}
              className="group-hover:translate-x-0.5 transition-transform"
            />
          </button>
        </div>
      </div>
    </div>
  );
}
