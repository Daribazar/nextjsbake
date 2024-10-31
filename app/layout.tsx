"use client"
import { useState, useEffect } from "react";
import "./globals.css";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    // Load saved preference
    const savedDarkMode = localStorage.getItem("darkMode") === "true";
    setDarkMode(savedDarkMode);
  }, []);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    localStorage.setItem("darkMode", (!darkMode).toString());
  };

  return (
    <html lang="en">
      <body className={darkMode ? "dark-mode" : ""}>
        <button 
          onClick={toggleDarkMode}
          style={{
            position: "fixed",
            top: "20px",
            right: "20px",
            padding: "10px",
            borderRadius: "50%",
            border: "none",
            cursor: "pointer",
            background: "transparent"
          }}
        >
          {darkMode ? "🌞" : "🌙"}
        </button>
        {children}
      </body>
    </html>
  );
}
