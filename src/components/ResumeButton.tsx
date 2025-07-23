import React from "react";

export default function ResumeButton() {
  return (
    <a
      href="/Tanaka_Curt_Resume.pdf"
      download
      className="inline-block px-6 py-3 bg-blue-600 text-white rounded hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600 transition font-semibold shadow"
    >
      Download Resume
    </a>
  );
} 