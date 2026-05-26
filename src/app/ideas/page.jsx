"use client";
import React, { useState, useEffect } from "react";
import { FaSpinner } from "react-icons/fa";
import IdeaCard from "@/components/IdeaCard";  

export default function IdeasPage() {
  const [allIdeas, setAllIdeas] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("http://localhost:5000/ideas")
      .then((res) => res.json())
      .then((data) => {
        setAllIdeas(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Data fetch error" );
        setLoading(false);
      });
  }, []);

  if (loading) {
    return (
      <div className="w-full bg-slate-900 min-h-screen flex flex-col justify-center items-center text-white gap-4">
        <FaSpinner className="animate-spin text-4xl text-blue-500" />
        <p className="text-sm font-mono tracking-wider text-slate-400">
          LOADING VAULT DATA...
        </p>
      </div>
    );
  }

  return (
    <div className="w-full bg-slate-900 min-h-screen text-slate-300 py-12">
      <div className="max-w-7xl mx-auto px-6">
        {/* HEADER */}
        <div className="text-center md:text-left border-b border-slate-800 pb-8 mb-12">
          <h1 className="text-3xl sm:text-4xl font-extrabold text-white">
            Explore All{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-500">
              Vaulted Ideas
            </span>
          </h1>
        </div>

        {/* LIVE GRID WITH COMPONENT MAP */}
        {allIdeas.length === 0 ? (
          <div className="text-center py-20 bg-slate-950/20 border border-slate-800 rounded-2xl">
            <p className="text-slate-500">No ideas found in the vault.</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {allIdeas.map((idea) => (
              <IdeaCard key={idea._id} idea={idea} />  
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
