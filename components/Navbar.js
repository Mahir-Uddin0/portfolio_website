"use client";

import { useEffect, useState } from "react";
import { FaMoon, FaSun } from "react-icons/fa";
import Link from "next/link";
import { useRouter } from "next/router";

export default function Navbar() {
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

  const handleContactClick = () => {
    if (router.pathname !== "/") {
      // Navigate to home page with query param to jump to contact
      router.push("/?scrollTo=contact");
    } else {
      // Smooth scroll on home page
      const el = document.getElementById("contact");
      el?.scrollIntoView({ behavior: "smooth" });
    }
  };

  const routes = [
    { href: "/", label: "Home" },
    { href: "/projects", label: "Projects" },
    { href: "/research", label: "Research" },
    { href: "/certificates", label: "Certifications" },
    { href: "/education", label: "Education" },
    { href: "/experience", label: "Experience" },
  ];

  return (
    <nav className="bg-white dark:bg-gray-900 shadow-sm sticky top-0 z-40 transition-colors">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Left: Name */}
          <div className="text-xl font-semibold text-gray-900 dark:text-white">
            MU
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
            <button
              onClick={handleContactClick}
              className="py-2 px-3 rounded-md text-gray-700 dark:text-gray-300 hover:text-indigo-600 transition"
            >
              Contact
            </button>
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
