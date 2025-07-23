import React from "react";
import github from "../assets/github.svg";
import linkedin from "../assets/linkedin.svg";

export default function Footer() {
  return (
    <footer className="py-6 bg-gray-200 dark:bg-zinc-900 text-center flex flex-col items-center gap-2">
      <div className="flex gap-4 justify-center mb-2">
        <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer">
          <img src={github} alt="GitHub" className="w-6 h-6 hover:scale-110 transition-transform" />
        </a>
        <a href="https://linkedin.com/in/yourusername" target="_blank" rel="noopener noreferrer">
          <img src={linkedin} alt="LinkedIn" className="w-6 h-6 hover:scale-110 transition-transform" />
        </a>
      </div>
      <span className="text-sm text-gray-600 dark:text-gray-400">&copy; {new Date().getFullYear()} Curt Tanaka</span>
    </footer>
  );
} 