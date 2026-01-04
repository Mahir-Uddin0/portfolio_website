"use client"; // Required if using Next.js app router

import { useEffect, useState } from "react";
import { FaMoon, FaSun } from "react-icons/fa";
import Link from "next/link";
import { useRouter } from "next/router";

export default function Navbar() {
  const routes = [
    { href: "/", label: "Home" },
    { href: "/skills", label: "Skills" },
    { href: "/projects", label: "Projects" },
    { href: "/research", label: "Research" },
    { href: "/certificates", label: "Certificates" },
    { href: "/education", label: "Education" },
    { href: "/experience", label: "Experience" },
    { href: "/contact", label: "Contact" },
  ];

  const router = useRouter();
  const [darkMode, setDarkMode] = useState(false);

  // Initialize theme on mount
  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme === "dark") {
      document.documentElement.classList.add("dark");
      setDarkMode(true);
    } else {
      document.documentElement.classList.remove("dark");
      setDarkMode(false);
    }
  }, []);

  const toggleTheme = () => {
    const isDark = document.documentElement.classList.contains("dark");
    if (isDark) {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
      setDarkMode(false);
    } else {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
      setDarkMode(true);
    }
  };

  return (
    <nav className="bg-white dark:bg-gray-900 shadow-sm sticky top-0 z-40 transition-colors">
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Left: Name */}
          <div className="text-xl font-semibold text-gray-900 dark:text-white">
            Mahir Uddin
          </div>

          {/* Middle: Nav Links */}
          <div className="hidden md:flex items-center gap-6">
            {routes.map((r) => (
              <Link
                key={r.href}
                href={r.href}
                className={`py-2 px-3 rounded-md transition ${
                  router.pathname === r.href
                    ? "bg-indigo-50 dark:bg-gray-800 text-indigo-600"
                    : "text-gray-700 dark:text-gray-300 hover:text-indigo-600"
                }`}
              >
                {r.label}
              </Link>
            ))}
          </div>

          {/* Right: Dark mode toggle */}
          <button
            onClick={toggleTheme}
            className="p-2 rounded-full transition hover:bg-gray-200 dark:hover:bg-gray-700"
            aria-label="Toggle dark mode"
          >
            {darkMode ? (
              <FaSun className="text-yellow-400 text-lg" />
            ) : (
              <FaMoon className="text-gray-800 dark:text-gray-200 text-lg" />
            )}
          </button>
        </div>
      </div>
    </nav>
  );
}
