import React from "react";

// Programming Languages
import JavaIcon from "../assets/Java.svg";
import TypeScriptIcon from "../assets/TypeScript.svg";
import PythonIcon from "../assets/Python.svg";
import JavaScriptIcon from "../assets/JavaScript.svg";
import RIcon from "../assets/R.svg";

// Frontend Technologies
import ReactIcon from "../assets/react.svg";
import TailwindIcon from "../assets/tailwind-css.svg";
import HTML5Icon from "../assets/HTML5.svg";
import CSS3Icon from "../assets/CSS3.svg";
import IonicIcon from "../assets/Ionic.svg";
import BootstrapIcon from "../assets/Bootstrap.svg";
import ViteIcon from "../assets/Vite.js.svg";

// Backend Technologies
import NodeIcon from "../assets/Node.js.svg";
// Express icon not available, fallback to Node.js or custom
const ExpressIcon = NodeIcon;

// Databases
import MongoDBIcon from "../assets/MongoDB.svg";
import PostgreSQLIcon from "../assets/PostgresSQL.svg";
import MySQLIcon from "../assets/MySQL.svg";
import FirebaseIcon from "../assets/Firebase.svg";

// DevOps & Tools
// Git icon not available, fallback to GitLab or custom
import GitHubIcon from "../assets/github.svg";
import GitLabIcon from "../assets/GitLab.svg";
import AzureIcon from "../assets/Azure.svg";
// Docker, Vercel, Netlify icons not available, fallback to Azure or custom
const DockerIcon = AzureIcon;
const VercelIcon = AzureIcon;
const NetlifyIcon = AzureIcon;

// Frameworks & Libraries
import NextIcon from "../assets/Next.js.svg";
import GradleIcon from "../assets/Gradle.svg";
// Jest icon not available, fallback to Gradle or custom
const JestIcon = GradleIcon;

import VSCodeIcon from "../assets/VisualStudioCode.svg";

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

const TechnologiesPage: React.FC = () => (
  <div className="min-h-screen bg-gray-50 dark:bg-zinc-900 transition-colors pt-20">
    <style>{styles}</style>
    <h1 className="text-3xl font-extrabold mb-10 text-center text-blue-800 dark:text-blue-300">Technologies</h1>
    <div className="container">

      {/* Programming Languages */}
      <section className="category-card">
        <div className="category-title">Programming Languages</div>
        <div className="tech-grid">
          <div className="tech-item"><span className="tech-icon"><img src={JavaIcon} alt="Java" width={40} height={40} /></span><span className="tech-label">Java</span></div>
          <div className="tech-item"><span className="tech-icon"><img src={TypeScriptIcon} alt="TypeScript" width={40} height={40} /></span><span className="tech-label">TypeScript</span></div>
          <div className="tech-item"><span className="tech-icon"><img src={PythonIcon} alt="Python" width={40} height={40} /></span><span className="tech-label">Python</span></div>
          <div className="tech-item"><span className="tech-icon"><img src={JavaScriptIcon} alt="JavaScript" width={40} height={40} /></span><span className="tech-label">JavaScript</span></div>
          <div className="tech-item"><span className="tech-icon"><img src={RIcon} alt="R" width={40} height={40} /></span><span className="tech-label">R</span></div>
        </div>
      </section>

      {/* Frontend Technologies */}
      <section className="category-card">
        <div className="category-title">Frontend Technologies</div>
        <div className="tech-grid">
          <div className="tech-item"><span className="tech-icon"><img src={ReactIcon} alt="React" width={40} height={40} /></span><span className="tech-label">React</span></div>
          <div className="tech-item"><span className="tech-icon"><img src={TailwindIcon} alt="Tailwind CSS" width={40} height={40} /></span><span className="tech-label">Tailwind CSS</span></div>
          <div className="tech-item"><span className="tech-icon"><img src={HTML5Icon} alt="HTML5" width={40} height={40} /></span><span className="tech-label">HTML5</span></div>
          <div className="tech-item"><span className="tech-icon"><img src={CSS3Icon} alt="CSS3" width={40} height={40} /></span><span className="tech-label">CSS3</span></div>
          <div className="tech-item"><span className="tech-icon"><img src={IonicIcon} alt="Ionic" width={40} height={40} /></span><span className="tech-label">Ionic</span></div>
          <div className="tech-item"><span className="tech-icon"><img src={BootstrapIcon} alt="Bootstrap" width={40} height={40} /></span><span className="tech-label">Bootstrap</span></div>
        </div>
      </section>

      {/* Backend Technologies */}
      <section className="category-card">
        <div className="category-title">Backend Technologies</div>
        <div className="tech-grid">
          <div className="tech-item"><span className="tech-icon"><img src={NodeIcon} alt="Node.js" width={40} height={40} /></span><span className="tech-label">Node.js</span></div>
          <div className="tech-item"><span className="tech-icon"><img src={ExpressIcon} alt="Express" width={40} height={40} /></span><span className="tech-label">Express</span></div>
          <div className="tech-item"><span className="tech-icon"><img src={ExpressIcon} alt="REST APIs" width={40} height={40} /></span><span className="tech-label">REST APIs</span></div>
          <div className="tech-item"><span className="tech-icon"><img src={ExpressIcon} alt="Express.js" width={40} height={40} /></span><span className="tech-label">Express.js</span></div>
        </div>
      </section>

      {/* Databases */}
      <section className="category-card">
        <div className="category-title">Databases</div>
        <div className="tech-grid">
          <div className="tech-item"><span className="tech-icon"><img src={MongoDBIcon} alt="MongoDB" width={40} height={40} /></span><span className="tech-label">MongoDB</span></div>
          <div className="tech-item"><span className="tech-icon"><img src={PostgreSQLIcon} alt="PostgreSQL" width={40} height={40} /></span><span className="tech-label">PostgreSQL</span></div>
          <div className="tech-item"><span className="tech-icon"><img src={MySQLIcon} alt="MySQL" width={40} height={40} /></span><span className="tech-label">MySQL</span></div>
          <div className="tech-item"><span className="tech-icon"><img src={FirebaseIcon} alt="Firebase" width={40} height={40} /></span><span className="tech-label">Firebase</span></div>
        </div>
      </section>

      {/* DevOps & Tools */}
      <section className="category-card">
        <div className="category-title">DevOps & Tools</div>
        <div className="tech-grid">
          <div className="tech-item"><span className="tech-icon"><img src={GitHubIcon} alt="Git" width={40} height={40} /></span><span className="tech-label">Git</span></div>
          <div className="tech-item"><span className="tech-icon"><img src={GitLabIcon} alt="GitLab" width={40} height={40} /></span><span className="tech-label">GitLab</span></div>
          <div className="tech-item"><span className="tech-icon"><img src={AzureIcon} alt="Azure" width={40} height={40} /></span><span className="tech-label">Azure</span></div>
          <div className="tech-item"><span className="tech-icon"><img src={VercelIcon} alt="Vercel" width={40} height={40} /></span><span className="tech-label">Vercel</span></div>
          <div className="tech-item"><span className="tech-icon"><img src={NetlifyIcon} alt="Netlify" width={40} height={40} /></span><span className="tech-label">Netlify</span></div>
          <div className="tech-item"><span className="tech-icon"><img src={DockerIcon} alt="Docker" width={40} height={40} /></span><span className="tech-label">Docker</span></div>
        </div>
      </section>

      {/* Frameworks & Libraries */}
      <section className="category-card">
        <div className="category-title">Frameworks & Libraries</div>
        <div className="tech-grid">
          <div className="tech-item"><span className="tech-icon"><img src={NextIcon} alt="Next.js" width={40} height={40} /></span><span className="tech-label">Next.js</span></div>
          <div className="tech-item"><span className="tech-icon"><img src={GradleIcon} alt="Gradle" width={40} height={40} /></span><span className="tech-label">Gradle</span></div>
          <div className="tech-item"><span className="tech-icon"><img src={JestIcon} alt="Jest" width={40} height={40} /></span><span className="tech-label">Jest</span></div>
        </div>
      </section>

    </div>
  </div>
);

export default TechnologiesPage;