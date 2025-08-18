"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import {
  Menu,
  X,
  ChevronDown,
  Globe,
  Crown,
  Settings,
  LogOut,
  Eye,
} from "lucide-react";
import { cn } from "@/lib/utils";
import { useAuth } from "@/contexts/AuthContext";

const navigationItems = [
  {
    href: "/",
    label: "Trang chủ",
    labelEn: "Home",
  },
  {
    href: "/about",
    label: "Giới thiệu",
    labelEn: "About",
  },
  {
    href: "/training",
    label: "Đào tạo",
    labelEn: "Training",
  },
  {
    href: "/projects",
    label: "Dự án",
    labelEn: "Projects",
  },
  {
    href: "/mentors",
    label: "Mentors",
    labelEn: "Mentors",
  },
  {
    href: "/mscers",
    label: "MSCers",
    labelEn: "MSCers",
  },
  {
    href: "/partnership",
    label: "Đồng hành",
    labelEn: "Partnership",
  },
  {
    href: "/blog",
    label: "Chia sẻ",
    labelEn: "Blog",
  },
  {
    href: "/contact",
    label: "Liên hệ",
    labelEn: "Contact",
  },
];

interface NavigationProps {
  language?: "vi" | "en";
  onLanguageChange?: (lang: "vi" | "en") => void;
}

export default function Navigation({
  language = "vi",
  onLanguageChange,
}: NavigationProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isLanguageMenuOpen, setIsLanguageMenuOpen] = useState(false);
  const [isAdminMenuOpen, setIsAdminMenuOpen] = useState(false);
  const pathname = usePathname();
  const { isAuthenticated, user, logout } = useAuth();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }

    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isMobileMenuOpen]);

  const handleLanguageChange = (lang: "vi" | "en") => {
    onLanguageChange?.(lang);
    setIsLanguageMenuOpen(false);
  };

  const handleAdminAction = (action: string) => {
    setIsAdminMenuOpen(false);
    if (action === "logout") {
      logout();
    }
  };

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        className={cn(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-500",
          isScrolled
            ? "bg-white/10 backdrop-blur-xl border-b border-white/10 shadow-lg"
            : "bg-transparent",
        )}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 lg:h-20">
            {/* Logo */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
            >
              <Link href="/" className="flex items-center space-x-3 group">
                <div className="relative">
                  <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl flex items-center justify-center transform group-hover:scale-110 transition-transform duration-300">
                    <span className="text-white font-bold text-lg">M</span>
                  </div>
                  <div className="absolute -inset-1 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl blur opacity-25 group-hover:opacity-75 transition-opacity duration-300"></div>
                </div>
                <div className="flex flex-col">
                  <span className="text-xl font-bold text-white group-hover:text-blue-300 transition-colors duration-300">
                    MSC
                  </span>
                  <span className="text-xs text-blue-200 group-hover:text-blue-100 transition-colors duration-300">
                    Mentoring & Coaching
                  </span>
                </div>
              </Link>
            </motion.div>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center space-x-8">
              {navigationItems.map((item, index) => (
                <motion.div
                  key={item.href}
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 * index }}
                >
                  <Link
                    href={item.href}
                    className={cn(
                      "relative px-3 py-2 text-sm font-medium transition-all duration-300 group",
                      pathname === item.href
                        ? "text-blue-300"
                        : "text-white hover:text-blue-300",
                    )}
                  >
                    {language === "vi" ? item.label : item.labelEn}
                    <span
                      className={cn(
                        "absolute inset-x-0 -bottom-1 h-0.5 bg-gradient-to-r from-blue-400 to-purple-500 transition-all duration-300",
                        pathname === item.href
                          ? "opacity-100 scale-x-100"
                          : "opacity-0 scale-x-0 group-hover:opacity-100 group-hover:scale-x-100",
                      )}
                    />
                  </Link>
                </motion.div>
              ))}
            </div>

            {/* Controls */}
            <div className="flex items-center space-x-4">
              {/* Admin Menu (if authenticated) */}
              {isAuthenticated && (
                <div className="relative hidden lg:block">
                  <button
                    onClick={() => setIsAdminMenuOpen(!isAdminMenuOpen)}
                    className="flex items-center space-x-2 px-3 py-2 text-sm font-medium text-yellow-300 hover:text-yellow-200 transition-colors duration-300 focus-ring rounded-md"
                  >
                    <Crown className="w-4 h-4" />
                    <span>Admin</span>
                    <ChevronDown
                      className={cn(
                        "w-4 h-4 transition-transform duration-200",
                        isAdminMenuOpen ? "rotate-180" : "",
                      )}
                    />
                  </button>

                  <AnimatePresence>
                    {isAdminMenuOpen && (
                      <motion.div
                        initial={{ opacity: 0, scale: 0.95, y: -10 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.95, y: -10 }}
                        transition={{ duration: 0.2 }}
                        className="absolute right-0 mt-2 w-48 bg-white/10 backdrop-blur-xl border border-white/20 rounded-lg shadow-xl py-1"
                      >
                        <div className="px-4 py-2 border-b border-white/10">
                          <p className="text-white text-sm font-medium">
                            {user?.name}
                          </p>
                          <p className="text-blue-200 text-xs">{user?.email}</p>
                        </div>

                        <Link
                          href="/admin/dashboard"
                          onClick={() => setIsAdminMenuOpen(false)}
                          className="flex items-center space-x-2 w-full px-4 py-2 text-left text-sm text-white hover:text-blue-300 hover:bg-white/10 transition-colors duration-200"
                        >
                          <Eye className="w-4 h-4" />
                          <span>Dashboard</span>
                        </Link>

                        <button
                          onClick={() => handleAdminAction("logout")}
                          className="flex items-center space-x-2 w-full px-4 py-2 text-left text-sm text-red-300 hover:text-red-200 hover:bg-white/10 transition-colors duration-200"
                        >
                          <LogOut className="w-4 h-4" />
                          <span>Đăng xuất</span>
                        </button>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              )}

              {/* Language Selector */}
              <div className="relative">
                <button
                  onClick={() => setIsLanguageMenuOpen(!isLanguageMenuOpen)}
                  className="flex items-center space-x-1 px-3 py-2 text-sm font-medium text-white hover:text-blue-300 transition-colors duration-300 focus-ring rounded-md"
                >
                  <Globe className="w-4 h-4" />
                  <span>{language.toUpperCase()}</span>
                  <ChevronDown
                    className={cn(
                      "w-4 h-4 transition-transform duration-200",
                      isLanguageMenuOpen ? "rotate-180" : "",
                    )}
                  />
                </button>

                <AnimatePresence>
                  {isLanguageMenuOpen && (
                    <motion.div
                      initial={{ opacity: 0, scale: 0.95, y: -10 }}
                      animate={{ opacity: 1, scale: 1, y: 0 }}
                      exit={{ opacity: 0, scale: 0.95, y: -10 }}
                      transition={{ duration: 0.2 }}
                      className="absolute right-0 mt-2 w-32 bg-white/10 backdrop-blur-xl border border-white/20 rounded-lg shadow-xl py-1"
                    >
                      <button
                        onClick={() => handleLanguageChange("vi")}
                        className={cn(
                          "w-full px-4 py-2 text-left text-sm transition-colors duration-200",
                          language === "vi"
                            ? "text-blue-300 bg-blue-500/20"
                            : "text-white hover:text-blue-300 hover:bg-white/10",
                        )}
                      >
                        🇻🇳 Tiếng Việt
                      </button>
                      <button
                        onClick={() => handleLanguageChange("en")}
                        className={cn(
                          "w-full px-4 py-2 text-left text-sm transition-colors duration-200",
                          language === "en"
                            ? "text-blue-300 bg-blue-500/20"
                            : "text-white hover:text-blue-300 hover:bg-white/10",
                        )}
                      >
                        🇺🇸 English
                      </button>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {/* Mobile Menu Button */}
              <motion.button
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.3 }}
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="lg:hidden p-2 text-white hover:text-blue-300 transition-colors duration-300 focus-ring rounded-md"
              >
                {isMobileMenuOpen ? (
                  <X className="w-6 h-6" />
                ) : (
                  <Menu className="w-6 h-6" />
                )}
              </motion.button>
            </div>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-40 lg:hidden"
          >
            <div
              className="fixed inset-0 bg-black/50 backdrop-blur-sm"
              onClick={() => setIsMobileMenuOpen(false)}
            />

            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="fixed right-0 top-0 h-full w-80 bg-gray-900/95 backdrop-blur-xl border-l border-white/10 shadow-2xl overflow-y-auto"
            >
              <div className="flex flex-col h-full">
                {/* Header */}
                <div className="flex items-center justify-between p-6 border-b border-white/10">
                  <div className="flex items-center space-x-3">
                    <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
                      <span className="text-white font-bold">M</span>
                    </div>
                    <span className="text-white font-bold text-lg">MSC</span>
                  </div>
                  <button
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="p-2 text-white hover:text-blue-300 transition-colors duration-300"
                  >
                    <X className="w-6 h-6" />
                  </button>
                </div>

                {/* Admin Section (Mobile) */}
                {isAuthenticated && (
                  <div className="p-6 border-b border-white/10 bg-yellow-500/10">
                    <div className="flex items-center space-x-3 mb-4">
                      <Crown className="w-5 h-5 text-yellow-400" />
                      <div>
                        <p className="text-white font-medium">{user?.name}</p>
                        <p className="text-yellow-300 text-sm">Admin</p>
                      </div>
                    </div>
                    <div className="space-y-2">
                      <Link
                        href="/admin/dashboard"
                        onClick={() => setIsMobileMenuOpen(false)}
                        className="flex items-center space-x-2 text-yellow-300 hover:text-yellow-200 text-sm"
                      >
                        <Eye className="w-4 h-4" />
                        <span>Dashboard</span>
                      </Link>
                      <button
                        onClick={() => {
                          logout();
                          setIsMobileMenuOpen(false);
                        }}
                        className="flex items-center space-x-2 text-red-300 hover:text-red-200 text-sm"
                      >
                        <LogOut className="w-4 h-4" />
                        <span>Đăng xuất</span>
                      </button>
                    </div>
                  </div>
                )}

                {/* Navigation Items */}
                <div className="flex-1 py-6">
                  {navigationItems.map((item, index) => (
                    <motion.div
                      key={item.href}
                      initial={{ opacity: 0, x: 50 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.1 * index }}
                    >
                      <Link
                        href={item.href}
                        onClick={() => setIsMobileMenuOpen(false)}
                        className={cn(
                          "block px-6 py-4 text-lg font-medium transition-all duration-300 border-l-4",
                          pathname === item.href
                            ? "text-blue-300 bg-blue-500/10 border-blue-400"
                            : "text-white hover:text-blue-300 hover:bg-white/5 border-transparent hover:border-blue-400/50",
                        )}
                      >
                        {language === "vi" ? item.label : item.labelEn}
                      </Link>
                    </motion.div>
                  ))}
                </div>

                {/* Footer */}
                <div className="p-6 border-t border-white/10">
                  <div className="text-center text-white/60 text-sm mb-3">
                    © 2024 MSC. All rights reserved.
                  </div>
                  {!isAuthenticated && (
                    <Link
                      href="/admin/login"
                      onClick={() => setIsMobileMenuOpen(false)}
                      className="flex items-center justify-center space-x-2 text-yellow-300 hover:text-yellow-200 text-sm"
                    >
                      <Crown className="w-4 h-4" />
                      <span>Admin Login</span>
                    </Link>
                  )}
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
