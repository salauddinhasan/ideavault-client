"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { authClient } from "@/lib/auth-client";
import { toast, Toaster } from "react-hot-toast";
import { FaGlobe, FaBars, FaTimes, FaSpinner } from "react-icons/fa";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [mounted, setMounted] = useState(false);
  const pathname = usePathname();
  const router = useRouter();

 
  const { data: session, isPending } = authClient.useSession();
  const user = session?.user;

 
  useEffect(() => {
    setMounted(true);
  }, []);

  
  const menuItems = [
    { label: "Home", path: "/" },
    { label: "Ideas", path: "/ideas" },
    ...(user
      ? [
          { label: "Add Idea", path: "/add-idea" },
          { label: "My Ideas", path: "/my-ideas" },
        ]
      : []),
  ];

  // লগআউট হ্যান্ডলার
  const handleLogout = async () => {
    toast.loading("Logging out...");
    await authClient.signOut({
      fetchOptions: {
        onSuccess: () => {
          toast.dismiss();
          toast.success("Logged out successfully!");
          setIsOpen(false);
          router.push("/login");
          router.refresh();
        },
      },
    });
  };

  const linkStyle = (path) =>
    `text-sm font-medium transition-colors ${
      pathname === path
        ? "text-blue-500 font-bold"
        : "text-slate-400 hover:text-blue-400"
    }`;

  return (
    <nav className="w-full border-b border-slate-900 bg-slate-950 backdrop-blur-md sticky top-0 z-50 px-6 py-4 shadow-xl">
      <Toaster position="top-center" />
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        {/* LOGO */}
        <Link
          href="/"
          className="flex items-center gap-2 font-bold text-xl text-blue-500 hover:text-blue-400 transition-colors"
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

        {/* RIGHT SIDE PROFILE / LOGIN */}
        <div className="hidden md:flex items-center gap-4">
          {!mounted || isPending ? (
            <FaSpinner className="animate-spin text-blue-500" size={18} />
          ) : user ? (
            <div className="relative group">
              <button
                type="button"
                className="flex items-center gap-2.5 focus:outline-none"
              >
                <div className="w-8 h-8 rounded-full bg-gradient-to-br from-blue-600 to-indigo-600 text-white font-bold text-sm flex items-center justify-center shadow-md shadow-blue-600/20 group-hover:scale-105 transition-transform uppercase">
                  {user.name ? user.name.charAt(0) : "U"}
                </div>
                <span className="text-sm font-semibold text-slate-300 max-w-[100px] truncate group-hover:text-blue-400 transition-colors">
                  {user.name}
                </span>
              </button>

              {/* DROPDOWN */}
              <div className="absolute right-0 mt-2 w-48 bg-slate-900 border border-slate-800 rounded-xl shadow-2xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 p-2 z-50">
                <p className="text-xs text-slate-500 px-3 py-1 truncate">
                  {user.email}
                </p>
                <button
                  type="button"
                  onClick={handleLogout}
                  className="w-full text-left px-3 py-2 text-sm text-red-400 hover:bg-red-950/30 rounded-lg transition-colors mt-1"
                >
                  Logout
                </button>
              </div>
            </div>
          ) : (
            <Link
              href="/login"
              className="bg-blue-600 text-white px-4 py-2 rounded-xl text-sm font-semibold hover:bg-blue-500 transition-colors shadow-lg shadow-blue-600/10"
            >
              Login
            </Link>
          )}
        </div>

        {/* MOBILE TOGGLE BUTTON */}
        <div className="md:hidden flex items-center">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-xl text-slate-400 hover:text-blue-400 transition-colors"
          >
            {isOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>
      </div>

      {/* MOBILE MENU */}
      {isOpen && (
        <div className="md:hidden mt-4 flex flex-col gap-4 pb-4 border-t border-slate-900 pt-4 bg-slate-950">
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

          {!mounted || isPending ? (
            <FaSpinner
              className="animate-spin text-blue-500 self-center"
              size={18}
            />
          ) : user ? (
            <div className="flex flex-col gap-4 border-t border-slate-900 pt-4">
              <div className="flex items-center gap-3 px-1">
                <div className="w-9 h-9 rounded-full bg-gradient-to-br from-blue-600 to-indigo-600 text-white font-bold text-sm flex items-center justify-center uppercase">
                  {user.name ? user.name.charAt(0) : "U"}
                </div>
                <div className="flex flex-col truncate">
                  <span className="text-sm font-semibold text-slate-200">
                    {user.name}
                  </span>
                  <span className="text-xs text-slate-500 truncate">
                    {user.email}
                  </span>
                </div>
              </div>
              <button
                type="button"
                onClick={handleLogout}
                className="text-left text-sm text-red-400 font-medium pl-1 hover:text-red-300 transition-colors"
              >
                Logout
              </button>
            </div>
          ) : (
            <Link
              href="/login"
              onClick={() => setIsOpen(false)}
              className="bg-blue-600 text-white text-center py-2 rounded-xl text-sm font-semibold shadow-lg"
            >
              Login
            </Link>
          )}
        </div>
      )}
    </nav>
  );
}
