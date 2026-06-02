import Image from "next/image";
import {
  FaLightbulb,
  FaCalendarAlt,
  FaTag,
  FaTrashAlt,
  FaDollarSign,
  FaUsers,
  FaExclamationCircle,
  FaCheckCircle,
} from "react-icons/fa";

export default function IdeaInfo({ idea, isOwner, onDelete }) {
  return (
    <div className="bg-slate-900/40 border border-slate-800 rounded-3xl overflow-hidden shadow-2xl">
      {/* IMAGE */}
      <div className="w-full h-64 md:h-96 relative bg-slate-900">
        <Image
          src={idea.imageUrl}
          alt={idea.title}
          fill
          className="object-cover opacity-90"
          priority
          sizes="(max-width: 1200px) 100vw, 1200px"
        />
        <span className="absolute top-6 left-6 text-xs font-bold tracking-wider uppercase text-blue-400 bg-slate-950/90 border border-blue-500/30 px-3 py-1.5 rounded-xl">
          {idea.category || "General"}
        </span>
      </div>

      <div className="p-6 md:p-10 space-y-8">
        {/* TITLE + DELETE */}
        <div className="flex flex-col md:flex-row justify-between items-start gap-4 border-b border-slate-800 pb-6">
          <div className="space-y-2">
            <h1 className="text-2xl md:text-4xl font-extrabold text-white leading-tight">
              {idea.title}
            </h1>
            <div className="flex flex-wrap items-center gap-4 text-xs text-slate-400">
              <div className="flex items-center gap-1.5">
                <FaLightbulb className="text-blue-500" />
                <span>By {idea.creatorName || "Anonymous"}</span>
              </div>
              <div className="flex items-center gap-1.5">
                <FaCalendarAlt className="text-slate-500" />
                <span>
                  {idea.createdAt
                    ? new Date(idea.createdAt).toLocaleDateString()
                    : "June 2026"}
                </span>
              </div>
            </div>
          </div>
          {isOwner && (
            <button
              type="button"
              onClick={onDelete}
              className="flex items-center gap-2 bg-red-950/40 hover:bg-red-600 border border-red-500/30 text-red-400 hover:text-white px-5 py-2.5 rounded-xl text-sm font-semibold transition-all"
            >
              <FaTrashAlt size={14} />
              Delete Idea
            </button>
          )}
        </div>

        {/* DESCRIPTION */}
        <div className="space-y-2">
          <h3 className="text-lg font-bold text-white">Overview</h3>
          <p className="text-slate-300 leading-relaxed text-sm md:text-base whitespace-pre-line">
            {idea.description || "No overview provided."}
          </p>
        </div>

        {/* BUDGET + TARGET AUDIENCE */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {idea.budget && (
            <div className="bg-slate-900 border border-slate-800 rounded-2xl p-5 space-y-1.5">
              <div className="flex items-center gap-2 text-xs text-slate-400 uppercase tracking-wider">
                <FaDollarSign className="text-green-500" />
                <span>Estimated Budget</span>
              </div>
              <p className="text-white font-semibold">{idea.budget}</p>
            </div>
          )}
          {idea.targetAudience && (
            <div className="bg-slate-900 border border-slate-800 rounded-2xl p-5 space-y-1.5">
              <div className="flex items-center gap-2 text-xs text-slate-400 uppercase tracking-wider">
                <FaUsers className="text-purple-500" />
                <span>Target Audience</span>
              </div>
              <p className="text-white font-semibold">{idea.targetAudience}</p>
            </div>
          )}
        </div>

        {/* PROBLEM STATEMENT */}
        {idea.problemStatement && (
          <div className="bg-slate-900 border border-red-500/20 rounded-2xl p-5 space-y-2">
            <div className="flex items-center gap-2 text-xs text-red-400 uppercase tracking-wider font-semibold">
              <FaExclamationCircle />
              <span>Problem Statement</span>
            </div>
            <p className="text-slate-300 text-sm leading-relaxed">
              {idea.problemStatement}
            </p>
          </div>
        )}

        {/* PROPOSED SOLUTION */}
        {idea.proposedSolution && (
          <div className="bg-slate-900 border border-green-500/20 rounded-2xl p-5 space-y-2">
            <div className="flex items-center gap-2 text-xs text-green-400 uppercase tracking-wider font-semibold">
              <FaCheckCircle />
              <span>Proposed Solution</span>
            </div>
            <p className="text-slate-300 text-sm leading-relaxed">
              {idea.proposedSolution}
            </p>
          </div>
        )}

        {/* TAGS */}
        {idea.tags && idea.tags.length > 0 && (
          <div className="border-t border-slate-800 pt-6 space-y-3">
            <h4 className="text-xs font-semibold text-slate-400 uppercase tracking-wider flex items-center gap-1.5">
              <FaTag size={10} className="text-blue-500" />
              Tags & Focus Areas
            </h4>
            <div className="flex flex-wrap gap-2">
              {idea.tags.map((tag, idx) => (
                <span
                  key={idx}
                  className="text-xs text-slate-300 bg-slate-900 border border-slate-700 px-3 py-1 rounded-full"
                >
                  #{tag}
                </span>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
