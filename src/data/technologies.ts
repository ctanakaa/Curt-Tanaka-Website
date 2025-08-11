export interface Technology {
  name: string;
  icon: string;
  category: string;
}

export const technologies: Technology[] = [
  // Programming Languages
  { name: "Java", icon: "java.svg", category: "Programming Languages" },
  { name: "TypeScript", icon: "typescript.svg", category: "Programming Languages" },
  { name: "Python", icon: "python.svg", category: "Programming Languages" },
  { name: "JavaScript", icon: "javascript.svg", category: "Programming Languages" },
  { name: "R", icon: "r.svg", category: "Programming Languages" },

  // Frontend Technologies
  { name: "React", icon: "react.svg", category: "Frontend Technologies" },
  { name: "Tailwind CSS", icon: "tailwindcss.svg", category: "Frontend Technologies" },
  { name: "HTML5", icon: "html5.svg", category: "Frontend Technologies" },
  { name: "CSS3", icon: "css3.svg", category: "Frontend Technologies" },
  { name: "Ionic", icon: "ionic.svg", category: "Frontend Technologies" },
  { name: "Bootstrap", icon: "bootstrap.svg", category: "Frontend Technologies" },
  { name: "Vite", icon: "vitejs.svg", category: "Frontend Technologies" },

  // Backend Technologies
  { name: "Node.js", icon: "nodejs.svg", category: "Backend Technologies" },
  { name: "Express", icon: "nodejs.svg", category: "Backend Technologies" }, // Using Node.js icon as fallback
  { name: "REST APIs", icon: "nodejs.svg", category: "Backend Technologies" }, // Using Node.js icon as fallback
  { name: "Express.js", icon: "nodejs.svg", category: "Backend Technologies" }, // Using Node.js icon as fallback

  // Databases
  { name: "MongoDB", icon: "mongodb.svg", category: "Databases" },
  { name: "PostgreSQL", icon: "postgressql.svg", category: "Databases" },
  { name: "MySQL", icon: "mysql.svg", category: "Databases" },
  { name: "Firebase", icon: "firebase.svg", category: "Databases" },

  // DevOps & Tools
  { name: "Git", icon: "github.svg", category: "DevOps & Tools" },
  { name: "GitLab", icon: "gitlab.svg", category: "DevOps & Tools" },
  { name: "Azure", icon: "azure.svg", category: "DevOps & Tools" },
  { name: "Vercel", icon: "azure.svg", category: "DevOps & Tools" }, // Using Azure icon as fallback
  { name: "Netlify", icon: "netlify.svg", category: "DevOps & Tools" },
  { name: "Docker", icon: "azure.svg", category: "DevOps & Tools" }, // Using Azure icon as fallback

  // Frameworks & Libraries
  { name: "Next.js", icon: "nextjs.svg", category: "Frameworks & Libraries" },
  { name: "Gradle", icon: "gradle.svg", category: "Frameworks & Libraries" },
  { name: "Jest", icon: "gradle.svg", category: "Frameworks & Libraries" }, // Using Gradle icon as fallback

  // IDEs & Tools
  { name: "VS Code", icon: "vscode.svg", category: "IDEs & Tools" },
  { name: "IntelliJ IDEA", icon: "intellij-idea.svg", category: "IDEs & Tools" },
  { name: "Eclipse IDE", icon: "eclipse-ide.svg", category: "IDEs & Tools" },
  { name: "Xcode", icon: "xcode.svg", category: "IDEs & Tools" },
];

// Helper function to get technologies by category
export const getTechnologiesByCategory = (category: string): Technology[] => {
  return technologies.filter(tech => tech.category === category);
};

// Helper function to get all categories
export const getCategories = (): string[] => {
  return [...new Set(technologies.map(tech => tech.category))];
};

// Helper function to get icon import path
export const getIconPath = (iconName: string): string => {
  return `../assets/${iconName}`;
}; 