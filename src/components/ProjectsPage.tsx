import React from "react";
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
};

export default function ProjectsPage() {
  return (
    <section className="py-20 bg-gray-50 dark:bg-zinc-900 transition-colors min-h-screen">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-extrabold mb-10 text-center text-blue-800 dark:text-blue-300">
          All Projects
        </h2>
        <div className="flex flex-col gap-12">
          {projects.map((proj) => (
            <div
              key={proj.title}
              className="bg-white dark:bg-zinc-800 rounded-2xl shadow-lg border border-zinc-200 dark:border-zinc-700 animate-fade-in flex flex-col md:flex-row overflow-hidden"
            >
              <img
                src={proj.image}
                alt={proj.title}
                className="w-full md:w-2/5 h-64 object-cover object-center border-b md:border-b-0 md:border-r border-zinc-200 dark:border-zinc-700"
              />
              <div className="p-8 flex-1 flex flex-col gap-4">
                <h3 className="text-2xl font-bold text-blue-700 dark:text-blue-200 mb-1">
                  {proj.title}
                </h3>
                <p className="text-zinc-700 dark:text-zinc-100 mb-2">
                  {proj.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-2">
                  {proj.techStack.map((tech) => (
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
                  <a
                    href={proj.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 dark:text-blue-400 hover:underline font-semibold"
                  >
                    GitHub
                  </a>
                  {proj.demo && (
                    <a
                      href={proj.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-600 dark:text-blue-400 hover:underline font-semibold"
                    >
                      Demo
                    </a>
                  )}
                </div>
                <div className="bg-zinc-100 dark:bg-zinc-700/60 rounded-lg p-3 text-sm text-zinc-600 dark:text-zinc-100">
                  <span className="font-semibold">Challenge:</span> {proj.challenges}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <style>{`
        @keyframes fade-in {
          0% { opacity: 0; transform: translateY(20px); }
          100% { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-in { animation: fade-in 1s cubic-bezier(.68,-0.55,.27,1.55); }
        .container { max-width: 1100px; margin: 0 auto; padding: 0 1rem 2rem 1rem; }
      `}</style>
    </section>
  );
} 