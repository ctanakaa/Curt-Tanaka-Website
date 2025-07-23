import React from "react";

export default function Background() {
  return (
    <div
      aria-hidden="true"
      className="fixed inset-0 w-full h-full -z-10 overflow-hidden pointer-events-none"
    >
      {/* Animated blurred bubbles */}
      <div className="absolute top-[-10%] left-[-10%] w-[400px] h-[400px] rounded-full bg-blue-300/40 dark:bg-blue-900/30 blur-3xl animate-float-slow" />
      <div className="absolute bottom-[-10%] right-[-5%] w-[350px] h-[350px] rounded-full bg-purple-300/40 dark:bg-purple-900/30 blur-2xl animate-float-medium" />
      <div className="absolute top-[30%] left-[60%] w-[250px] h-[250px] rounded-full bg-pink-200/40 dark:bg-pink-900/30 blur-2xl animate-float-fast" />
      <div className="absolute bottom-[15%] left-[10%] w-[200px] h-[200px] rounded-full bg-green-200/40 dark:bg-green-900/30 blur-2xl animate-float-medium" />
      {/* Add more bubbles or shapes for uniqueness if desired */}
      <style>{`
        @keyframes float-slow {
          0% { transform: translateY(0) scale(1); }
          50% { transform: translateY(-30px) scale(1.05); }
          100% { transform: translateY(0) scale(1); }
        }
        @keyframes float-medium {
          0% { transform: translateY(0) scale(1); }
          50% { transform: translateY(20px) scale(0.98); }
          100% { transform: translateY(0) scale(1); }
        }
        @keyframes float-fast {
          0% { transform: translateY(0) scale(1); }
          50% { transform: translateY(-15px) scale(1.03); }
          100% { transform: translateY(0) scale(1); }
        }
        .animate-float-slow { animation: float-slow 12s ease-in-out infinite; }
        .animate-float-medium { animation: float-medium 8s ease-in-out infinite; }
        .animate-float-fast { animation: float-fast 5s ease-in-out infinite; }
      `}</style>
    </div>
  );
} 