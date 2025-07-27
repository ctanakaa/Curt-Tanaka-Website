import React, { useState, useEffect } from "react";
import { roles } from "../data/roles";

export default function ScrollingRoles() {
  const [currentRoleIndex, setCurrentRoleIndex] = useState(0);
  const [currentText, setCurrentText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentRole = roles[currentRoleIndex];
    
    if (!isDeleting) {
      // Typing effect
      if (currentText.length < currentRole.length) {
        const timeout = setTimeout(() => {
          setCurrentText(currentRole.slice(0, currentText.length + 1));
        }, 100);
        return () => clearTimeout(timeout);
      } else {
        // Wait before starting to delete
        const timeout = setTimeout(() => {
          setIsDeleting(true);
        }, 2000);
        return () => clearTimeout(timeout);
      }
    } else {
      // Deleting effect
      if (currentText.length > 0) {
        const timeout = setTimeout(() => {
          setCurrentText(currentText.slice(0, -1));
        }, 50);
        return () => clearTimeout(timeout);
      } else {
        // Move to next role
        setIsDeleting(false);
        setCurrentRoleIndex((prev) => (prev + 1) % roles.length);
      }
    }
  }, [currentText, currentRoleIndex, isDeleting]);

  return (
    <h2 className="text-xl md:text-2xl font-semibold text-zinc-700 dark:text-zinc-200 text-center md:text-left animate-slide-up py-2 min-h-[2.5rem] flex items-center">
      <span className="inline-block">
        {currentText}
        <span className="animate-pulse">|</span>
      </span>
    </h2>
  );
} 