import React from "react";
import { Link } from "react-router-dom";

export default function AboutPage() {
  return (
    <section className="py-20 bg-gray-50 dark:bg-zinc-900 transition-colors min-h-screen">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-extrabold mb-10 text-center text-blue-800 dark:text-blue-300">
          About Me: Education & Experience
        </h2>
        <div className="flex flex-col gap-10">
          {/* Personal Blurb Card */}
          <div className="category-card">
            <h3 className="category-title">Personal Story</h3>
            <div className="space-y-4 text-zinc-700 dark:text-zinc-100 text-base leading-relaxed">
              <p>
                Hi there! I'm Curt Tanaka, a passionate software engineer based in Seattle, WA. My journey into tech has been anything but conventional - I started by building and running a successful landscaping business, which taught me invaluable lessons about problem-solving, customer service, and the importance of creating solutions that truly serve people's needs.
              </p>
              <p>
                After discovering my love for coding during my time at the University of Washington, I made the exciting transition from managing physical projects to building digital solutions. My background in business ownership gives me a unique perspective on how technology can solve real-world problems, and I bring that entrepreneurial mindset to every project I work on.
              </p>
              <p>
                When I'm not coding, you'll find me in the gym lifting, or on the court playing basketball or volleyball. I'm particularly passionate about frontend development, database optimization, and creating user experiences that make a difference.
              </p>
              <p>
                I'm currently contributing to UW's Avian Impact research project, where I'm helping build tools that support important environmental research. I'm excited to bring my blend of business acumen, technical skills, and collaborative spirit to new opportunities in software engineering.
              </p>
            </div>
          </div>
          {/* Education Card */}
          <div className="category-card">
            <h3 className="category-title">Education</h3>
            <div className="space-y-2">
              <div>
                <div className="font-semibold text-lg text-zinc-800 dark:text-zinc-100">University of Washington</div>
                <div className="text-zinc-600 dark:text-zinc-300 text-sm mb-1">B.S. Informatics, 2020-2025</div>
                <ul className="list-disc pl-6 text-zinc-700 dark:text-zinc-100 text-base">
                  <li>Dean's List</li>
                </ul>
                <div className="font-semibold text-lg text-zinc-800 dark:text-zinc-100">Shorewood Highschool</div>
                <div className="text-zinc-600 dark:text-zinc-300 text-sm mb-1">2016-2020</div>
                <ul className="list-disc pl-6 text-zinc-700 dark:text-zinc-100 text-base">
                  <li>Dean's List</li>
                  <li>AP Scholar with Distinction</li>
                  <li>U.S. Army Reserve National Scholar/Athlete Award</li>
                </ul>
              </div>
            </div>
          </div>
          {/* Professional Experience Card */}
          <div className="category-card">
            <h3 className="category-title">Professional Experience</h3>
            <div className="flex flex-col gap-8">
              {/* Tanaka Lawn Care */}
              <div>
                <div className="font-semibold text-lg text-zinc-800 dark:text-zinc-100">Co-Owner, Tanaka Lawn Care</div>
                <div className="text-zinc-600 dark:text-zinc-300 text-sm mb-1">May 2022 - March 2025</div>
                <ul className="list-disc pl-6 text-zinc-700 dark:text-zinc-100 text-base space-y-1">
                  <li>Built and scaled landscaping business generating $200,000+ in gross revenue over 2+ years through strategic customer acquisition and operational efficiency improvements</li>
                  <li>Managed end-to-end business operations including client relationship management, financial planning, budgeting, and on-site project coordination for residential and commercial properties</li>
                  <li>Developed custom Excel-based payroll tracking system to automate employee time management and streamline accounting processes, reducing administrative overhead by 40%</li>
                  <li>Led team operations and scheduling while maintaining high customer satisfaction rates through quality service delivery and proactive communication</li>
                  <li>Handled full P&L responsibility including expense management, pricing strategy, and reinvestment decisions to support sustainable business growth</li>
                </ul>
              </div>
              {/* Avian Impact Intern */}
              <div>
                <div className="font-semibold text-lg text-zinc-800 dark:text-zinc-100">Software Engineer Intern, Avian Impact</div>
                <div className="text-zinc-600 dark:text-zinc-300 text-sm mb-1">February 2025 - Current</div>
                <ul className="list-disc pl-6 text-zinc-700 dark:text-zinc-100 text-base space-y-1">
                  <li>Led bandwidth optimization initiative reducing peak usage from 1GB+ to under 300MB through Firebase Firestore query optimization and pagination implementation across 3 core features</li>
                  <li>Built Live Birds geolocation-based reporting feature enabling researchers to collect standardized bird observation data within defined radius zones using React Native and Firebase backend</li>
                  <li>Delivered consistent frontend maintenance and feature development, resolving 4+ bugs weekly through systematic reproduction in test environments, including critical user data export functionality</li>
                  <li>Refactored legacy HTML components to Ionic framework and implemented proper routing architecture while resolving accessibility issues including dark mode compatibility</li>
                  <li>Drove technical decision-making for performance optimization and participated in code reviews within 5-member agile development team</li>
                  <li>Enhanced user data management capabilities by implementing granular export options for Firebase Storage data</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Certifications & Awards Card */}
          <div className="category-card">
            <h3 className="category-title">Certifications & Awards</h3>
            <ul className="list-disc pl-6 text-zinc-700 dark:text-zinc-100 text-base">
              <li><a href="https://ischool.uw.edu/event/ischool-showcase-2025/awards" className="text-blue-600 dark:text-blue-400 hover:underline">The Spark Award for Creativity iSchool Showcase 2025</a></li>
            </ul>
          </div>
        </div>
      </div>
      <style>{`
        @keyframes fade-in {
          0% { opacity: 0; transform: translateY(20px); }
          100% { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-in { animation: fade-in 1s cubic-bezier(.68,-0.55,.27,1.55); }
        .container { max-width: 1100px; margin: 0 auto; padding: 0 1rem 2rem 1rem; }
        .category-card { background: #fff; border-radius: 18px; box-shadow: 0 2px 12px rgba(0,0,0,0.06); margin-bottom: 2rem; padding: 2rem 1.5rem 1.5rem 1.5rem; border: 1px solid #e5e7eb; transition: box-shadow 0.2s; }
        .category-card:hover { box-shadow: 0 4px 24px rgba(37,99,235,0.08); }
        .category-title { font-size: 1.35rem; font-weight: 700; margin-bottom: 1.2rem; color: #2563eb; letter-spacing: -0.5px; }
        .dark .category-card { background: #1f2937; border-color: #374151; }
        .dark .category-title { color: #60a5fa; }
      `}</style>
    </section>
  );
} 