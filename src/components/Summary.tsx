import React from "react";
import { Link } from "react-router-dom";
import profile from "../assets/profile.png";
import ScrollingRoles from "./ScrollingRoles";

export default function Summary() {
  return (
    <section
      id="home"
      className="flex items-start justify-center relative pt-8 pb-30"
    >
      <div className="backdrop-blur-md bg-white/70 dark:bg-zinc-900/70 rounded-3xl shadow-2xl px-8 py-12 flex flex-col items-center gap-8 max-w-3xl w-full animate-fade-in">
        {/* Top section with photo and contact info */}
        <div className="flex flex-col md:flex-row items-center gap-6 w-full">
          <div className="w-56 h-64 overflow-hidden rounded-2xl shadow-xl border-white dark:border-zinc-800 bg-blue-800 dark:bg-blue-300 flex items-center justify-center">
            <img
              src={profile}
              alt="Curt Tanaka"
              className="w-full h-full object-cover object-top md:object-[center_top_10%]"
            />
          </div>
          
          {/* Right side with name, roles, contact info, and button */}
          <div className="flex flex-col items-center md:items-start gap-4 flex-1">
            <h1 className="text-4xl md:text-5xl font-extrabold text-blue-800 dark:text-blue-300 text-center md:text-left animate-slide-down pb-2">
              Hi, I'm Curt Tanaka
            </h1>
            <ScrollingRoles />
            <div className="flex items-center gap-4 animate-fade-in delay-200 dark:text-zinc-300">
              <div className="flex items-center gap-2 dark:text-zinc-300">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6 text-black-500">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
                </svg>
                <span className="text-base md:text-lg text-zinc-700 dark:text-zinc-300 font-medium">Seattle, WA</span>
              </div>
              <div className="flex items-center gap-2">
                <a
                  href="tel:+12069314107"
                  className="flex items-center gap-2 rounded-full px-4 py-2 font-semibold transition focus:outline-none focus:ring-2 focus:ring-blue-400 bg-transparent text-zinc-700 dark:text-zinc-300 shadow-none hover:bg-blue-600 hover:text-white hover:shadow-lg hover:scale-105 dark:hover:bg-blue-500"
                  aria-label="Call or text Curt Tanaka at (206) 931-4107"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z" />
                  </svg>
                  <span className="text-base md:text-lg font-medium">+1 (206) 931-4107</span>
                </a>
              </div>
            </div>
            <Link
              to="/about"
              className="px-6 py-2 bg-blue-600 text-white rounded-full font-semibold shadow-xl hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600 transition text-lg animate-bounce-in text-center"
            >
              More About Me
            </Link>
          </div>
        </div>
        
        {/* Bottom section with text content */}
        <div className="flex flex-col items-center md:items-start gap-4 w-full">
          <p className="text-lg text-zinc-700 dark:text-zinc-300 w-full text-center md:text-left animate-fade-in delay-200 py-2">
            After building and running a successful landscaping business, I discovered my true passion lies in solving complex problems through code. I recently earned my Bachelor's of Science in Informatics, and I specialize in frontend development and database optimization, with hands-on experience reducing bandwidth usage by 70% and building real-time geolocation features for research applications.
          </p>
          <p className="text-lg text-zinc-700 dark:text-zinc-300 w-full text-center md:text-left animate-fade-in delay-200 py-2">
            My unique background combining business ownership, technical development, and collaborative research gives me a holistic perspective on building software that truly serves users' needs. I'm excited to bring this blend of entrepreneurial drive and technical expertise to a new grad software engineering role.
          </p>
          <p className="text-lg text-zinc-700 dark:text-zinc-300 w-full text-center md:text-left animate-fade-in delay-200 py-2">
            <strong>Currently:</strong> Contributing to UW's Avian Impact research project | Building with React Native, Firebase, and Ionic
          </p>
        </div>
      </div>
      <style>{`
        @keyframes fade-in {
          0% { opacity: 0; }
          100% { opacity: 1; }
        }
        .animate-fade-in { animation: fade-in 1.2s ease; }
        .animate-fade-in.delay-200 { animation-delay: 0.2s; }
        @keyframes pop-in {
          0% { transform: scale(0.8); opacity: 0; }
          100% { transform: scale(1); opacity: 1; }
        }
        .animate-pop-in { animation: pop-in 0.8s cubic-bezier(.68,-0.55,.27,1.55); }
        @keyframes slide-down {
          0% { transform: translateY(-30px); opacity: 0; }
          100% { transform: translateY(0); opacity: 1; }
        }
        .animate-slide-down { animation: slide-down 1s cubic-bezier(.68,-0.55,.27,1.55); }
        @keyframes slide-up {
          0% { transform: translateY(30px); opacity: 0; }
          100% { transform: translateY(0); opacity: 1; }
        }
        .animate-slide-up { animation: slide-up 1s cubic-bezier(.68,-0.55,.27,1.55); }
        @keyframes bounce-in {
          0% { transform: scale(0.8); opacity: 0; }
          60% { transform: scale(1.1); opacity: 1; }
          100% { transform: scale(1); }
        }
        .animate-bounce-in { animation: bounce-in 1.1s cubic-bezier(.68,-0.55,.27,1.55); }
      `}</style>
    </section>
  );
}