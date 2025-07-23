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
          {/* Education Card */}
          <div className="category-card">
            <h3 className="category-title">Education</h3>
            <div className="space-y-2">
              <div>
                <div className="font-semibold text-lg text-zinc-800 dark:text-zinc-100">University of Washington</div>
                <div className="text-zinc-600 dark:text-zinc-300 text-sm mb-1">B.S. Informatics, 2020-2025</div>
                <ul className="list-disc pl-6 text-zinc-700 dark:text-zinc-200 text-base">
                  <li>Dean's List</li>
                </ul>
                <div className="font-semibold text-lg text-zinc-800 dark:text-zinc-100">Shorewood Highschool</div>
                <div className="text-zinc-600 dark:text-zinc-300 text-sm mb-1">2016-2020</div>
                <ul className="list-disc pl-6 text-zinc-700 dark:text-zinc-200 text-base">
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
                <ul className="list-disc pl-6 text-zinc-700 dark:text-zinc-200 text-base space-y-1">
                  <li>Founded and scaled a residential lawn care business to 10 employees, managing operations, client relationships, and financial planning</li>
                  <li>Implemented streamlined scheduling and service tracking systems, improving team efficiency by 30%</li>
                  <li>Developed and executed strategic marketing initiatives that grew client base from 5 to 45+ recurring customers</li>
                  <li>Managed all aspects of business operations including hiring, training, budgeting, and client communication, peaking at $200,000+ in annual revenue</li>
                </ul>
              </div>
              {/* Avian Impact Intern */}
              <div>
                <div className="font-semibold text-lg text-zinc-800 dark:text-zinc-100">Software Engineer Intern, Avian Impact</div>
                <div className="text-zinc-600 dark:text-zinc-300 text-sm mb-1">Feburary 2025 - Current</div>
                <ul className="list-disc pl-6 text-zinc-700 dark:text-zinc-200 text-base space-y-1">
                  <li>Worked in a team using AGILE and SCRUM techniques to improve task turnaround time and better meet user needs, resulting in timely project delivery</li>
                  <li>Enhanced the React front end of the company website by integrating with the existing API framework using Next.js, JavaScript, and HTML, improving user experience and site performance</li>
                  <li>Participated in code review sessions to improve team output and code efficiency, resulting in higher quality software releases</li>
                  <li>Utilized Firebase for user authentication and data storage, enhancing data security and user management</li>
                </ul>
              </div>
              {/* Avian Impact Full-time */}
              <div>
                <div className="font-semibold text-lg text-zinc-800 dark:text-zinc-100">Software Engineer, TLC Solutions</div>
                <div className="text-zinc-600 dark:text-zinc-300 text-sm mb-1">June 2025 - Present</div>
                <ul className="list-disc pl-6 text-zinc-700 dark:text-zinc-200 text-base space-y-1">
                  <li>[Add details about your current role, responsibilities, and achievements here]</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Certifications & Awards Card (optional, can be removed if not needed) */}
          {/*
          <div className="backdrop-blur-md bg-white/80 dark:bg-zinc-800/80 rounded-2xl shadow-lg p-8 animate-fade-in border border-blue-100 dark:border-zinc-700">
            <h3 className="text-2xl font-bold text-blue-700 dark:text-blue-200 mb-4">Certifications & Awards</h3>
            <ul className="list-disc pl-6 text-zinc-700 dark:text-zinc-200 text-base">
              <li>[Certification or Award Name, Issuer, Date]</li>
              <li>[Another certification, award, or recognition]</li>
            </ul>
          </div>
          */}
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
      `}</style>
    </section>
  );
} 