"use client";
import React, { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  FaGlobe,
  FaBars,
  FaTimes,
  FaUserCircle,
  FaSun,
  FaMoon,
  FaLinkedin,
} from "react-icons/fa";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);
  const pathname = usePathname();

  const [user, setUser] = useState({
    name: "Salauddin",
    email: "salauddin@example.com",
  });

  const menuItems = [
    { label: "Home", path: "/" },
    { label: "Ideas", path: "/ideas" },
    ...(user
      ? [
          { label: "Add Idea", path: "/add-idea" },
          { label: "My Ideas", path: "/my-ideas" },
          { label: "My Interactions", path: "/my-interactions" },
        ]
      : []),
  ];

  const linkStyle = (path) =>
    `text-sm font-medium transition-colors ${
      pathname === path
        ? "text-blue-600 font-bold"
        : "text-gray-600 hover:text-blue-600"
    }`;

  return (
    <nav className="w-full border-b border-gray-200 bg-white sticky top-0 z-50 px-6 py-4 shadow-sm">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        {/* LOGO */}
        <Link
          href="/"
          className="flex items-center gap-2 font-bold text-xl text-blue-600"
        >
          <FaGlobe className="text-2xl" />
          <span>IdeaVault</span>
        </Link>

        {/* DESKTOP LINKS */}
        <div className="hidden md:flex items-center gap-6">
          {menuItems.map((item, idx) => (
            <Link key={idx} href={item.path} className={linkStyle(item.path)}>
              {item.label}
            </Link>
          ))}
        </div>

        {/* RIGHT SIDE TOOLS */}
        <div className="hidden md:flex items-center gap-4">
          <button
            onClick={() => setIsDarkMode(!isDarkMode)}
            className="p-2 text-gray-600 hover:text-blue-600"
          >
            {isDarkMode ? <FaMoon size={18} /> : <FaSun size={18} />}
          </button>

          {/* LinkedIn Logo */}
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noreferrer"
            className="text-gray-600 hover:text-blue-600 transition-colors"
          >
            <FaLinkedin size={20} />
          </a>

          {user ? (
            <div className="relative group">
              <button className="flex items-center gap-2 focus:outline-none">
                <FaUserCircle className="text-2xl text-gray-600 group-hover:text-blue-600" />
              </button>
              {/* DROPDOWN */}
              <div className="absolute right-0 mt-2 w-48 bg-white border border-gray-200 rounded-xl shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 p-2 z-50">
                <p className="text-xs text-gray-400 px-3 py-1 truncate">
                  {user.email}
                </p>
                <Link
                  href="/profile"
                  className="block px-3 py-2 text-sm text-gray-700 hover:bg-gray-100 rounded-lg"
                >
                  Profile Management
                </Link>
                <button
                  onClick={() => setUser(null)}
                  className="w-full text-left px-3 py-2 text-sm text-red-600 hover:bg-red-50 rounded-lg"
                >
                  Logout
                </button>
              </div>
            </div>
          ) : (
            <Link
              href="/login"
              className="bg-blue-600 text-white px-4 py-2 rounded-xl text-sm font-semibold hover:bg-blue-700"
            >
              Login
            </Link>
          )}
        </div>

        {/* MOBILE TOGGLE */}
        <div className="md:hidden flex items-center gap-4">
          <button onClick={() => setIsDarkMode(!isDarkMode)}>
            {isDarkMode ? <FaMoon /> : <FaSun />}
          </button>
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-xl text-gray-600"
          >
            {isOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>
      </div>

      {/* MOBILE MENU */}
      {isOpen && (
        <div className="md:hidden mt-4 flex flex-col gap-4 pb-4 border-t border-gray-100 pt-4 bg-white">
          {menuItems.map((item, idx) => (
            <Link
              key={idx}
              href={item.path}
              onClick={() => setIsOpen(false)}
              className={linkStyle(item.path)}
            >
              {item.label}
            </Link>
          ))}
          {user ? (
            <>
              <Link
                href="/profile"
                onClick={() => setIsOpen(false)}
                className="text-sm text-gray-600"
              >
                Profile Management
              </Link>
              <button
                onClick={() => {
                  setUser(null);
                  setIsOpen(false);
                }}
                className="text-left text-sm text-red-600"
              >
                Logout
              </button>
            </>
          ) : (
            <Link
              href="/login"
              onClick={() => setIsOpen(false)}
              className="bg-blue-600 text-white text-center py-2 rounded-xl text-sm font-semibold"
            >
              Login
            </Link>
          )}
        </div>
      )}
    </nav>
  );
}
