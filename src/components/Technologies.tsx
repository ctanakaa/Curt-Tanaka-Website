import React from "react";
import { Link } from "react-router-dom";
import JavaIcon from "../assets/Java.svg";
import TypeScriptIcon from "../assets/TypeScript.svg";
import PythonIcon from "../assets/Python.svg";
import JavaScriptIcon from "../assets/JavaScript.svg";
import RIcon from "../assets/R.svg";
import ReactIcon from "../assets/react.svg";
import TailwindIcon from "../assets/tailwind-css.svg";
import NodeIcon from "../assets/Node.js.svg";
import GitHubIcon from "../assets/github.svg";
import GitLabIcon from "../assets/GitLab.svg";
import NextIcon from "../assets/Next.js.svg";
import MongoDBIcon from "../assets/MongoDB.svg";

const keyTechnologies = [
  "Java",
  "JavaScript",
  "TypeScript",
  "Python",
  "R",
];

const technologyIcons: Record<string, string> = {
  "Java": JavaIcon,
  "JavaScript": JavaScriptIcon,
  "TypeScript": TypeScriptIcon,
  "React": ReactIcon,
  "Tailwind CSS": TailwindIcon,
  "Node.js": NodeIcon,
  "Python": PythonIcon,
  "Git": GitHubIcon,
  "GitLab": GitLabIcon,
  "Next.js": NextIcon,
  "MongoDB": MongoDBIcon,
  "R": RIcon,
};

export default function Technologies() {
  return (
    <section id="technologies" className="">
      <div className="rounded-3xl shadow-2xl bg-white/80 dark:bg-zinc-900/80 px-8 py-12 max-w-3xl mx-auto animate-fade-in">
        <div className="flex items-center justify-between mb-10">
          <h2 className="text-3xl font-extrabold text-left text-blue-800 dark:text-blue-300">
            Technologies
          </h2>
          <Link
            to="/technologies"
            className="px-8 py-3 bg-blue-600 text-white rounded-full font-semibold shadow-lg hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600 transition text-lg"
          >
            View All Technologies
          </Link>
        </div>
        <div className="flex flex-wrap justify-center gap-6 mb-8">
          {keyTechnologies.map((tech) => (
            <div
              key={tech}
              className="bg-white dark:bg-zinc-700 rounded-lg shadow p-4 text-center font-medium text-zinc-800 dark:text-zinc-100 hover:scale-105 hover:shadow-lg transition-transform cursor-pointer min-w-[120px] flex flex-col items-center"
            >
              {technologyIcons[tech] && (
                <img src={technologyIcons[tech]} alt={tech + ' icon'} width={36} height={36} className="mb-2" />
              )}
              {tech}
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
      `}</style>
    </section>
  );
}