import React from "react";
import { Link } from "react-router-dom";
import github from "../assets/github.svg";
import linkedin from "../assets/linkedin.svg";
import { useDarkMode } from "../hooks/useDarkMode";

export default function Header() {
  const [isDark, setIsDark] = useDarkMode();

  // Shared button classes for nav bubbles
  const navBtnBase =
    "flex items-center justify-center rounded-full transition-all duration-200 group overflow-hidden min-w-12 h-12 min-h-12 px-4 py-0";
  const navBtnHover =
    "hover:px-6 focus:px-6 hover:bg-blue-100/60 dark:hover:bg-blue-900/40";
  const navBtnText =
    "font-semibold text-zinc-800 dark:text-zinc-100 whitespace-nowrap opacity-0 scale-90 max-w-0 group-hover:opacity-100 group-hover:scale-100 group-hover:max-w-xs group-hover:ml-3 group-focus:opacity-100 group-focus:scale-100 group-focus:max-w-xs group-focus:ml-3 overflow-hidden transition-all duration-200";

  return (
    <header className="fixed w-full z-20 top-0 left-0 flex justify-center items-center px-4 py-4 bg-transparent">
      <div className="w-full max-w-5xl flex justify-between items-center gap-4">
        {/* Left Bubble: Logo/Home */}
        <Link
          to="/"
          className="h-16 backdrop-blur-md bg-white/60 dark:bg-zinc-800/60 shadow-lg rounded-full px-6 py-3 flex items-center font-bold text-xl text-black border border-white/30 dark:border-zinc-700/40 hover:scale-105 transition-transform duration-200"
          aria-label="Home"
        >
          CT
        </Link>
        {/* Center Bubble: Combined Navigation */}
        <div className="backdrop-blur-md bg-white/60 dark:bg-zinc-800/60 shadow-lg rounded-full flex flex-row items-center border border-white/30 dark:border-zinc-700/40 transition-all duration-200 gap-2 px-2 py-2">
          <Link
            to="/"
            className={`${navBtnBase} group ${navBtnHover}`}
            aria-label="Home"
            tabIndex={0}
          >
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-7 h-7 text-black dark:text-blue-300 flex-shrink-0" style={{transition: 'color 0.2s'}}>
              <path strokeLinecap="round" strokeLinejoin="round" d="m2.25 12 8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
            </svg>
            <span className={navBtnText}>Home</span>
          </Link>
          <Link
            to="/projects"
            className={`${navBtnBase} group ${navBtnHover}`}
            aria-label="Projects"
            tabIndex={0}
          >
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-7 h-7 text-black dark:text-blue-300 flex-shrink-0" style={{transition: 'color 0.2s'}}>
              <path strokeLinecap="round" strokeLinejoin="round" d="m6.75 7.5 3 2.25-3 2.25m4.5 0h3m-9 8.25h13.5A2.25 2.25 0 0 0 21 18V6a2.25 2.25 0 0 0-2.25-2.25H5.25A2.25 2.25 0 0 0 3 6v12a2.25 2.25 0 0 0 2.25 2.25Z" />
            </svg>
            <span className={navBtnText}>Projects</span>
          </Link>
          <Link
            to="/technologies"
            className={`${navBtnBase} group ${navBtnHover}`}
            aria-label="Tech Stack"
            tabIndex={0}
          >
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-7 h-7 text-black dark:text-blue-300 flex-shrink-0" style={{transition: 'color 0.2s'}}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 6.375c0 2.278-3.694 4.125-8.25 4.125S3.75 8.653 3.75 6.375m16.5 0c0-2.278-3.694-4.125-8.25-4.125S3.75 4.097 3.75 6.375m16.5 0v11.25c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125V6.375m16.5 0v3.75m-16.5-3.75v3.75m16.5 0v3.75C20.25 16.153 16.556 18 12 18s-8.25-1.847-8.25-4.125v-3.75m16.5 0c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125" />
            </svg>
            <span className={navBtnText}>Tech Stack</span>
          </Link>
          <Link
            to="/about"
            className={`${navBtnBase} group ${navBtnHover}`}
            aria-label="About"
            tabIndex={0}
          >
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-7 h-7 text-black dark:text-blue-300 flex-shrink-0" style={{transition: 'color 0.2s'}}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M17.982 18.725A7.488 7.488 0 0 0 12 15.75a7.488 7.488 0 0 0-5.982 2.975m11.963 0a9 9 0 1 0-11.963 0m11.963 0A8.966 8.966 0 0 1 12 21a8.966 8.966 0 0 1-5.982-2.275M15 9.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
            </svg>
            <span className={navBtnText}>About</span>
          </Link>
        </div>
        {/* Right Bubble: Socials & Dark Mode */}
        <div className="flex flew-row items-center gap-2 md:gap-4 backdrop-blur-md bg-white/60 dark:bg-zinc-800/60 shadow-lg rounded-full px-4 py-2 border border-white/30 dark:border-zinc-700/40 h-16 min-h-12">
          <a
            href="https://github.com/ctanakaa"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:scale-110 transition-transform"
            aria-label="GitHub"
          >
            <img src={github} alt="GitHub" className="w-7 h-7" />
          </a>
          <a
            href="https://www.linkedin.com/in/curt-tanaka/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:scale-110 transition-transform"
            aria-label="LinkedIn"
          >
            <img src={linkedin} alt="LinkedIn" className="w-7 h-7" />
          </a>
        </div>
      </div>
    </header>
  );
}