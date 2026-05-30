"use client";
import React, { useState } from "react";
import { FaEnvelope, FaLock, FaUser, FaSpinner } from "react-icons/fa";

export default function AuthPage() {
  const [isLogin, setIsLogin] = useState(true);
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    setTimeout(() => setLoading(false), 1500);
  };

  return (
    <div className="w-full bg-slate-900 min-h-screen flex items-center justify-center px-4">
      <div className="w-full max-w-sm bg-slate-950/50 border border-slate-800 p-6 rounded-2xl shadow-xl space-y-6">
        {/* HEADER */}
        <div className="text-center space-y-1">
          <h2 className="text-xl md:text-2xl font-bold text-white tracking-tight">
            {isLogin ? "Welcome Back" : "Create Account"}
          </h2>
          <p className="text-xs text-slate-500">
            {isLogin
              ? "Enter the secure concept vault"
              : "Join the developer network"}
          </p>
        </div>

        {/* FORM */}
        <form onSubmit={handleSubmit} className="space-y-4">
          {/* NAME FIELD (ONLY FOR SIGNUP) */}
          {!isLogin && (
            <div className="space-y-1.5">
              <label className="text-xs font-medium text-slate-400">
                Full Name
              </label>
              <div className="relative flex items-center">
                <FaUser className="absolute left-3 text-slate-600 text-xs" />
                <input
                  type="text"
                  required
                  placeholder="John Doe"
                  className="w-full pl-9 pr-4 py-2 bg-slate-900 border border-slate-800 focus:border-blue-500/50 rounded-xl text-sm text-slate-200 outline-none transition-colors"
                />
              </div>
            </div>
          )}

          {/* EMAIL FIELD */}
          <div className="space-y-1.5">
            <label className="text-xs font-medium text-slate-400">
              Email Address
            </label>
            <div className="relative flex items-center">
              <FaEnvelope className="absolute left-3 text-slate-600 text-xs" />
              <input
                type="email"
                required
                placeholder="name@domain.com"
                className="w-full pl-9 pr-4 py-2 bg-slate-900 border border-slate-800 focus:border-blue-500/50 rounded-xl text-sm text-slate-200 outline-none transition-colors"
              />
            </div>
          </div>

          {/* PASSWORD FIELD */}
          <div className="space-y-1.5">
            <label className="text-xs font-medium text-slate-400">
              Password
            </label>
            <div className="relative flex items-center">
              <FaLock className="absolute left-3 text-slate-600 text-xs" />
              <input
                type="password"
                required
                placeholder="••••••••"
                className="w-full pl-9 pr-4 py-2 bg-slate-900 border border-slate-800 focus:border-blue-500/50 rounded-xl text-sm text-slate-200 outline-none transition-colors"
              />
            </div>
          </div>

          {/* SUBMIT BUTTON */}
          <button
            type="submit"
            disabled={loading}
            className="w-full py-2.5 bg-blue-600 hover:bg-blue-500 disabled:bg-blue-600/50 text-white font-semibold text-sm rounded-xl transition-colors shadow-lg shadow-blue-600/10 flex items-center justify-center gap-2"
          >
            {loading ? (
              <FaSpinner className="animate-spin" size={14} />
            ) : isLogin ? (
              "Sign In"
            ) : (
              "Sign Up"
            )}
          </button>
        </form>

        {/* TOGGLE LINK */}
        <div className="text-center">
          <button
            onClick={() => setIsLogin(!isLogin)}
            className="text-xs font-medium text-blue-400 hover:underline"
          >
            {isLogin
              ? "Don't have an account? Sign up"
              : "Already have an account? Sign in"}
          </button>
        </div>
      </div>
    </div>
  );
}
