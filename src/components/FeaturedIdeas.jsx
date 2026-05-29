"use client";
import React, { useState, useEffect } from "react";
import { FaSpinner, FaArrowRight } from "react-icons/fa";
import Link from "next/link";
import IdeaCard from "./IdeaCard"; // তোমার আগের বানানো IdeaCard

export default function FeaturedIdeas() {
  const [ideas, setIdeas] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("http://localhost:5000/ideas")
      .then((res) => res.json())
      .then((data) => {
        // বস, এখানে ৩ এর জায়গায় ৪ টা আইডিয়া স্লাইস করে নিলাম
        setIdeas(data.slice(0, 4));
        setLoading(false);
      })
      .catch((err) => {
        console.error("Featured ideas fetch error:", err);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return (
      <div className="w-full flex justify-center items-center py-12">
        <FaSpinner className="animate-spin text-3xl text-blue-500" />
      </div>
    );
  }

  if (ideas.length === 0) return null;

  return (
    <div className=" bg-slate-900 border border-slate-800  p-6 md:p-8 space-y-8 ">
      {/* SECTION HEADER */}
      <div className="flex max-w-7xl mx-auto justify-between items-center border-b border-slate-800 pb-3">
        <div>
          <h2 className="text-lg md:text-3xl font-bold text-white">
            Featured Explorations
          </h2>
          <p className="text-xs text-slate-500">
            Handpicked concepts fresh from the vault
          </p>
        </div>
        <Link
          href="/ideas"
          className="text-xs font-medium text-blue-400 hover:underline flex items-center gap-1 group"
        >
          View All
          <FaArrowRight
            size={10}
            className="group-hover:translate-x-0.5 transition-transform"
          />
        </Link>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 max-w-7xl mx-auto">
        {ideas.map((item) => (
          <IdeaCard key={item._id} idea={item} />
        ))}
      </div>
    </div>
  );
}
