import React from "react";
import { technologies, getTechnologiesByCategory, getCategories, type Technology } from "../data/technologies";

// Import all icons statically
import JavaIcon from "../assets/java.svg";
import TypeScriptIcon from "../assets/typescript.svg";
import PythonIcon from "../assets/python.svg";
import JavaScriptIcon from "../assets/javascript.svg";
import RIcon from "../assets/r.svg";
import ReactIcon from "../assets/react.svg";
import TailwindIcon from "../assets/tailwindcss.svg";
import HTML5Icon from "../assets/html5.svg";
import CSS3Icon from "../assets/css3.svg";
import IonicIcon from "../assets/ionic.svg";
import BootstrapIcon from "../assets/bootstrap.svg";
import ViteIcon from "../assets/vitejs.svg";
import NodeIcon from "../assets/nodejs.svg";
import MongoDBIcon from "../assets/mongodb.svg";
import PostgreSQLIcon from "../assets/postgressql.svg";
import MySQLIcon from "../assets/mysql.svg";
import FirebaseIcon from "../assets/firebase.svg";
import GitHubIcon from "../assets/github.svg";
import GitLabIcon from "../assets/gitlab.svg";
import AzureIcon from "../assets/azure.svg";
import NetlifyIcon from "../assets/netlify.svg";
import NextIcon from "../assets/nextjs.svg";
import GradleIcon from "../assets/gradle.svg";
import VSCodeIcon from "../assets/vscode.svg";
import IntelliJIcon from "../assets/intellij-idea.svg";
import EclipseIcon from "../assets/eclipse-ide.svg";
import XcodeIcon from "../assets/xcode.svg";

// Icon mapping
const iconMap: Record<string, string> = {
  "java.svg": JavaIcon,
  "typescript.svg": TypeScriptIcon,
  "python.svg": PythonIcon,
  "javascript.svg": JavaScriptIcon,
  "r.svg": RIcon,
  "react.svg": ReactIcon,
  "tailwindcss.svg": TailwindIcon,
  "html5.svg": HTML5Icon,
  "css3.svg": CSS3Icon,
  "ionic.svg": IonicIcon,
  "bootstrap.svg": BootstrapIcon,
  "vitejs.svg": ViteIcon,
  "nodejs.svg": NodeIcon,
  "mongodb.svg": MongoDBIcon,
  "postgressql.svg": PostgreSQLIcon,
  "mysql.svg": MySQLIcon,
  "firebase.svg": FirebaseIcon,
  "github.svg": GitHubIcon,
  "gitlab.svg": GitLabIcon,
  "azure.svg": AzureIcon,
  "netlify.svg": NetlifyIcon,
  "nextjs.svg": NextIcon,
  "gradle.svg": GradleIcon,
  "vscode.svg": VSCodeIcon,
  "intellij-idea.svg": IntelliJIcon,
  "eclipse-ide.svg": EclipseIcon,
  "xcode.svg": XcodeIcon,
};

const getIcon = (iconName: string): string => {
  return iconMap[iconName] || NodeIcon; // Fallback to Node.js icon
};

const styles = `
:root {
  --bg: #f5f5f5;
  --card-bg: #fff;
  --card-shadow: 0 2px 12px rgba(0,0,0,0.06);
  --card-radius: 18px;
  --text-main: #222;
  --text-muted: #666;
  --border: #e5e7eb;
  --accent: #2563eb;
}

.dark {
  --bg: #18181b;
  --card-bg: #1f2937;
  --card-shadow: 0 2px 12px rgba(0,0,0,0.2);
  --text-main: #f3f4f6;
  --text-muted: #d1d5db;
  --border: #374151;
  --accent: #60a5fa;
}

body {
  background: var(--bg);
  font-family: 'Inter', 'Segoe UI', Arial, sans-serif;
  color: var(--text-main);
  margin: 0;
  padding: 0;
}
.container {
  max-width: 1100px;
  margin: 0 auto;
  padding: 0 1rem 2rem 1rem;
}
.category-card {
  background: var(--card-bg);
  border-radius: var(--card-radius);
  box-shadow: var(--card-shadow);
  margin-bottom: 2rem;
  padding: 2rem 1.5rem 1.5rem 1.5rem;
  border: 1px solid var(--border);
  transition: box-shadow 0.2s;
}
.category-card:hover {
  box-shadow: 0 4px 24px rgba(37,99,235,0.08);
}
.category-title {
  font-size: 1.35rem;
  font-weight: 700;
  margin-bottom: 1.2rem;
  color: var(--accent);
  letter-spacing: -0.5px;
}
.tech-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(120px, 1fr));
  gap: 1.5rem 1rem;
}
.tech-item {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0.7rem 0.2rem;
  border-radius: 12px;
  transition: background 0.18s, box-shadow 0.18s, transform 0.18s;
  cursor: pointer;
  background: transparent;
}
.tech-item:hover {
  background: #f0f4ff;
  box-shadow: 0 2px 8px rgba(37,99,235,0.07);
  transform: translateY(-2px) scale(1.04);
}
.dark .tech-item:hover {
  background: #1e3a8a;
  box-shadow: 0 2px 8px rgba(96,165,250,0.2);
}
.tech-icon {
  width: 40px;
  height: 40px;
  margin-bottom: 0.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
}
.tech-label {
  font-size: 1rem;
  color: var(--text-muted);
  text-align: center;
  font-weight: 500;
  margin-top: 2px;
  letter-spacing: 0.01em;
  word-break: break-word;
}
@media (max-width: 700px) {
  .container { padding: 0 0.5rem; }
  .category-card { padding: 1.2rem 0.7rem 1rem 0.7rem; }
  .tech-grid { gap: 1rem 0.5rem; }
}
@media (max-width: 500px) {
  h1 { font-size: 2rem; }
  .category-title { font-size: 1.1rem; }
  .tech-label { font-size: 0.95rem; }
  .tech-icon { width: 32px; height: 32px; }
}
`;

const TechnologiesPage: React.FC = () => {
  const categories = getCategories();

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-zinc-900 transition-colors pt-20">
      <style>{styles}</style>
      <h1 className="text-3xl font-extrabold mb-10 text-center text-blue-800 dark:text-blue-300">Technologies</h1>
      <div className="container">
        {categories.map((category) => {
          const categoryTechnologies = getTechnologiesByCategory(category);
          
          return (
            <section key={category} className="category-card">
              <div className="category-title">{category}</div>
              <div className="tech-grid">
                {categoryTechnologies.map((tech) => (
                  <div key={tech.name} className="tech-item">
                    <span className="tech-icon">
                                             <img 
                         src={getIcon(tech.icon)} 
                         alt={tech.name} 
                         width={40} 
                         height={40} 
                       />
                    </span>
                    <span className="tech-label">{tech.name}</span>
                  </div>
                ))}
              </div>
            </section>
          );
        })}
      </div>
    </div>
  );
};

export default TechnologiesPage;