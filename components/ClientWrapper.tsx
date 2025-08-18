"use client";

import { useState, useEffect } from "react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { AuthProvider } from "@/contexts/AuthContext";

export default function ClientWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  const [language, setLanguage] = useState<"vi" | "en">("vi");

  useEffect(() => {
    // Load language preference from localStorage
    const savedLanguage = localStorage.getItem("msc-language") as "vi" | "en";
    if (savedLanguage) {
      setLanguage(savedLanguage);
    }
  }, []);

  const handleLanguageChange = (lang: "vi" | "en") => {
    setLanguage(lang);
    localStorage.setItem("msc-language", lang);
  };

  return (
    <AuthProvider>
      <div className="min-h-screen flex flex-col">
        <Navigation
          language={language}
          onLanguageChange={handleLanguageChange}
        />

        <main className="flex-1">{children}</main>

        <Footer language={language} />
      </div>
    </AuthProvider>
  );
}
