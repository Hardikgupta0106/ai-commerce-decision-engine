import React from 'react';
import { Sun, Moon } from 'lucide-react';

export default function Navbar({ darkMode, setDarkMode }) {
  return (
    <header className="h-16 border-b border-gray-200 dark:border-gray-800 bg-white/80 dark:bg-[#0d0d15]/80 backdrop-blur-md flex items-center justify-between px-8 sticky top-0 z-50 transition-colors duration-300">
      <div className="flex items-center gap-3">
        <h1 className="text-xl font-bold tracking-tight bg-gradient-to-r from-teal-500 via-teal-400 to-amber-500 bg-clip-text text-transparent">
          AI Commerce Decision Engine
        </h1>
        <span className="px-2.5 py-0.5 text-xs font-semibold text-teal-600 dark:text-teal-400 bg-teal-50 dark:bg-teal-950/40 rounded-full border border-teal-100 dark:border-teal-900/50">
          CEO Dashboard
        </span>
      </div>

      <button
        onClick={() => setDarkMode(!darkMode)}
        className="p-2 rounded-xl border border-gray-200 dark:border-gray-800 text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800/60 transition-all duration-200"
        aria-label="Toggle Theme"
      >
        {darkMode ? (
          <Sun className="h-5 w-5 text-amber-500" />
        ) : (
          <Moon className="h-5 w-5 text-teal-600" />
        )}
      </button>
    </header>
  );
}
