import React, { useState } from "react";
import { Link } from "react-router-dom";
import JavaIcon from "../assets/Java.svg";
import TypeScriptIcon from "../assets/TypeScript.svg";
import PythonIcon from "../assets/Python.svg";
import JavaScriptIcon from "../assets/JavaScript.svg";
import ReactIcon from "../assets/react.svg";
import TailwindIcon from "../assets/tailwind-css.svg";
import NodeIcon from "../assets/Node.js.svg";
import NextIcon from "../assets/Next.js.svg";
import MongoDBIcon from "../assets/MongoDB.svg";
import NetlifyIcon from "../assets/Netlify.svg";
import GradleIcon from "../assets/Gradle.svg";
import { projects } from "../data/projects";

const technologyIcons: Record<string, string> = {
  "Java": JavaIcon,
  "JavaScript": JavaScriptIcon,
  "TypeScript": TypeScriptIcon,
  "React": ReactIcon,
  "Tailwind CSS": TailwindIcon,
  "Node.js": NodeIcon,
  "Python": PythonIcon,
  "Next.js": NextIcon,
  "MongoDB": MongoDBIcon,
  "Netlify": NetlifyIcon,
  "Gradle": GradleIcon,
};

export default function Projects() {
  const [selected, setSelected] = useState(0);
  const selectedProject = projects[selected];

  return (
    <section id="projects" className="">
      <div className="rounded-3xl shadow-2xl bg-white/80 dark:bg-zinc-900/80 px-8 py-12 max-w-3xl mx-auto mt-34 animate-fade-in">
        <div className="flex items-center justify-between mb-10">
          <h1 className="text-3xl font-extrabold text-left text-blue-800 dark:text-blue-300">
            Featured Projects
          </h1>
          <Link
            to="/projects"
            className="px-8 py-3 bg-blue-600 text-white rounded-full font-semibold shadow-lg hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600 transition text-lg"
          >
            View All Projects
          </Link>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Left: Project List */}
          <div className="flex flex-col gap-4">
            {projects.map((proj, idx) => (
              <button
                key={proj.title}
                onClick={() => setSelected(idx)}
                className={`text-left rounded-2xl px-6 py-4 shadow font-semibold transition-all border border-transparent hover:border-blue-400 focus:border-blue-600 focus:outline-none bg-white dark:bg-zinc-800/70 text-blue-800 dark:text-blue-200 hover:bg-blue-50 dark:hover:bg-blue-900/30 ${selected === idx ? "ring-2 ring-blue-400 bg-blue-100 dark:bg-blue-900/60" : ""}`}
                aria-current={selected === idx}
              >
                <div className="text-lg md:text-xl font-bold mb-1">{proj.title}</div>
                <div className="text-zinc-600 dark:text-zinc-300 text-sm line-clamp-2">{proj.description}</div>
                <span className="block mt-2 text-blue-600 dark:text-blue-400 font-semibold text-sm">View Details →</span>
              </button>
            ))}
          </div>
          {/* Right: Selected Project Details */}
          <div className="flex flex-col gap-4">
            <img
              src={selectedProject.image}
              alt={selectedProject.title}
              className="w-full h-48 object-cover object-center rounded-2xl shadow border border-zinc-200 dark:border-zinc-800"
            />
            <div>
              <h3 className="text-2xl font-bold text-blue-700 dark:text-blue-200 mb-2">
                {selectedProject.title}
              </h3>
              <p className="text-zinc-700 dark:text-zinc-200 mb-3">
                {selectedProject.description}
              </p>
              <div className="flex flex-wrap gap-2 mb-3">
                {selectedProject.techStack.map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1 bg-blue-100 dark:bg-blue-900/40 text-blue-800 dark:text-blue-200 rounded-full text-xs font-semibold shadow-sm flex items-center gap-1"
                  >
                    {technologyIcons[tech] && (
                      <img src={technologyIcons[tech]} alt={tech + ' icon'} width={18} height={18} className="inline-block mr-1" />
                    )}
                    {tech}
                  </span>
                ))}
              </div>
              <div className="flex gap-4 mb-2">
                {selectedProject.demo && (
                  <a
                    href={selectedProject.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-5 py-2 bg-blue-600 text-white rounded-full font-semibold shadow hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600 transition text-base"
                  >
                    View Demo
                  </a>
                )}
                <a
                  href={selectedProject.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-5 py-2 bg-zinc-200 dark:bg-zinc-700 text-zinc-800 dark:text-zinc-100 rounded-full font-semibold shadow hover:bg-zinc-300 dark:hover:bg-zinc-600 transition text-base"
                >
                  Source Code
                </a>
              </div>
              <div className="bg-zinc-100 dark:bg-zinc-800/60 rounded-lg p-3 text-sm text-zinc-600 dark:text-zinc-300">
                <span className="font-semibold">Challenge:</span> {selectedProject.challenges}
              </div>
            </div>
          </div>
        </div>
      </div>
      <style>{`
        @keyframes fade-in {
          0% { opacity: 0; transform: translateY(20px); }
          100% { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-in { animation: fade-in 1s cubic-bezier(.68,-0.55,.27,1.55); }
      `}</style>
    </section>
  );
} 