"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  Mail,
  Phone,
  MapPin,
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
  Youtube,
  ChevronUp,
  Heart,
  Settings,
  Shield,
  FileText,
  HelpCircle,
  Edit,
  Eye,
  Crown,
} from "lucide-react";
import { useAuth } from "@/contexts/AuthContext";

interface FooterProps {
  language?: "vi" | "en";
}

const footerSections = {
  vi: {
    company: {
      title: "MSC",
      description:
        "Trung tâm Mentoring & Coaching hàng đầu Việt Nam, đồng hành cùng bạn trên con đường phát triển sự nghiệp và cá nhân.",
    },
    quickLinks: {
      title: "Liên kết nhanh",
      links: [
        { href: "/about", label: "Giới thiệu" },
        { href: "/training", label: "Đào tạo" },
        { href: "/projects", label: "Dự án" },
        { href: "/mentors", label: "Mentors" },
        { href: "/mscers", label: "MSCers" },
      ],
    },
    services: {
      title: "Dịch vụ",
      links: [
        { href: "/training#courses", label: "Khóa học" },
        { href: "/training#mentoring", label: "Mentoring 1:1" },
        { href: "/training#coaching", label: "Group Coaching" },
        { href: "/projects#consulting", label: "Tư vấn doanh nghiệp" },
        { href: "/partnership", label: "Đối tác chiến lược" },
      ],
    },
    legal: {
      title: "Pháp lý & Hỗ trợ",
      links: [
        { href: "/faq", label: "Câu hỏi thường gặp", icon: HelpCircle },
        { href: "/privacy", label: "Chính sách bảo mật", icon: Shield },
        { href: "/terms", label: "Điều khoản dịch vụ", icon: FileText },
        { href: "/contact", label: "Liên hệ hỗ trợ", icon: Mail },
      ],
    },
    admin: {
      title: "Quản trị",
      loginText: "Đăng nhập Admin",
      dashboardText: "Dashboard",
      settingsText: "Cài đặt",
    },
    contact: {
      title: "Liên hệ",
      address: "Tầng 12, Tòa nhà ABC, 123 Nguyễn Huệ, Quận 1, TP.HCM",
      phone: "+84 28 1234 5678",
      email: "hello@msc.vn",
    },
    copyright: "Bản quyền thuộc về MSC. Tất cả quyền được bảo lưu.",
    madeWith: "Được tạo với",
    by: "bởi MSC Team",
  },
  en: {
    company: {
      title: "MSC",
      description:
        "Leading Mentoring & Coaching center in Vietnam, accompanying you on your career and personal development journey.",
    },
    quickLinks: {
      title: "Quick Links",
      links: [
        { href: "/about", label: "About" },
        { href: "/training", label: "Training" },
        { href: "/projects", label: "Projects" },
        { href: "/mentors", label: "Mentors" },
        { href: "/mscers", label: "MSCers" },
      ],
    },
    services: {
      title: "Services",
      links: [
        { href: "/training#courses", label: "Courses" },
        { href: "/training#mentoring", label: "1:1 Mentoring" },
        { href: "/training#coaching", label: "Group Coaching" },
        { href: "/projects#consulting", label: "Business Consulting" },
        { href: "/partnership", label: "Strategic Partnership" },
      ],
    },
    legal: {
      title: "Legal & Support",
      links: [
        { href: "/faq", label: "FAQ", icon: HelpCircle },
        { href: "/privacy", label: "Privacy Policy", icon: Shield },
        { href: "/terms", label: "Terms of Service", icon: FileText },
        { href: "/contact", label: "Contact Support", icon: Mail },
      ],
    },
    admin: {
      title: "Administration",
      loginText: "Admin Login",
      dashboardText: "Dashboard",
      settingsText: "Settings",
    },
    contact: {
      title: "Contact",
      address:
        "12th Floor, ABC Building, 123 Nguyen Hue, District 1, Ho Chi Minh City",
      phone: "+84 28 1234 5678",
      email: "hello@msc.vn",
    },
    copyright: "Copyright © MSC. All rights reserved.",
    madeWith: "Made with",
    by: "by MSC Team",
  },
};

const socialLinks = [
  { href: "https://facebook.com/msc.vn", icon: Facebook, label: "Facebook" },
  { href: "https://twitter.com/msc_vn", icon: Twitter, label: "Twitter" },
  { href: "https://instagram.com/msc.vn", icon: Instagram, label: "Instagram" },
  {
    href: "https://linkedin.com/company/msc-vn",
    icon: Linkedin,
    label: "LinkedIn",
  },
  { href: "https://youtube.com/@mscvn", icon: Youtube, label: "YouTube" },
];

export default function Footer({ language = "vi" }: FooterProps) {
  const { isAuthenticated, user } = useAuth();
  const content = footerSections[language];

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative bg-gray-900 text-white overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-grid opacity-5"></div>

      {/* Main Footer Content */}
      <div className="relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 mb-12">
            {/* Company Info */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="lg:col-span-2"
            >
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl flex items-center justify-center">
                  <span className="text-white font-bold text-xl">M</span>
                </div>
                <div>
                  <h3 className="text-2xl font-bold gradient-text">
                    {content.company.title}
                  </h3>
                  <p className="text-sm text-blue-200">Mentoring & Coaching</p>
                </div>
              </div>
              <p className="text-gray-300 text-sm leading-relaxed mb-6">
                {content.company.description}
              </p>

              {/* Social Links */}
              <div className="flex space-x-3">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    initial={{ opacity: 0, scale: 0.5 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.3, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    whileHover={{ scale: 1.1, y: -2 }}
                    className="w-10 h-10 bg-white/10 hover:bg-gradient-to-br hover:from-blue-500 hover:to-purple-600 rounded-lg flex items-center justify-center transition-all duration-300 group"
                  >
                    <social.icon className="w-5 h-5 text-gray-300 group-hover:text-white transition-colors duration-300" />
                  </motion.a>
                ))}
              </div>
            </motion.div>

            {/* Quick Links */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
            >
              <h4 className="text-lg font-semibold mb-6">
                {content.quickLinks.title}
              </h4>
              <ul className="space-y-3">
                {content.quickLinks.links.map((link, index) => (
                  <motion.li
                    key={link.href}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3, delay: index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <Link
                      href={link.href}
                      className="text-gray-300 hover:text-blue-300 transition-colors duration-300 text-sm flex items-center group"
                    >
                      <span className="w-1.5 h-1.5 bg-blue-400 rounded-full mr-3 group-hover:bg-blue-300 transition-colors duration-300"></span>
                      {link.label}
                    </Link>
                  </motion.li>
                ))}
              </ul>
            </motion.div>

            {/* Services */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <h4 className="text-lg font-semibold mb-6">
                {content.services.title}
              </h4>
              <ul className="space-y-3">
                {content.services.links.map((link, index) => (
                  <motion.li
                    key={link.href}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3, delay: index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <Link
                      href={link.href}
                      className="text-gray-300 hover:text-blue-300 transition-colors duration-300 text-sm flex items-center group"
                    >
                      <span className="w-1.5 h-1.5 bg-blue-400 rounded-full mr-3 group-hover:bg-blue-300 transition-colors duration-300"></span>
                      {link.label}
                    </Link>
                  </motion.li>
                ))}
              </ul>
            </motion.div>

            {/* Legal & Support + Admin */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              {/* Legal & Support Section */}
              <div>
                <h4 className="text-lg font-semibold mb-6">
                  {content.legal.title}
                </h4>
                <ul className="space-y-3">
                  {content.legal.links.map((link, index) => (
                    <motion.li
                      key={link.href}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.3, delay: index * 0.1 }}
                      viewport={{ once: true }}
                    >
                      <Link
                        href={link.href}
                        className="text-gray-300 hover:text-blue-300 transition-colors duration-300 text-sm flex items-center group"
                      >
                        <link.icon className="w-4 h-4 mr-3 text-blue-400 group-hover:text-blue-300 transition-colors duration-300" />
                        {link.label}
                      </Link>
                    </motion.li>
                  ))}
                </ul>
              </div>

              {/* Admin Section */}
              <div className="border-t border-gray-700 pt-6">
                <h4 className="text-lg font-semibold mb-4 flex items-center">
                  <Crown className="w-5 h-5 mr-2 text-yellow-400" />
                  {content.admin.title}
                </h4>
                <div className="space-y-3">
                  {!isAuthenticated ? (
                    <Link
                      href="/admin/login"
                      className="flex items-center space-x-2 text-gray-300 hover:text-yellow-300 transition-colors duration-300 text-sm group"
                    >
                      <Settings className="w-4 h-4 group-hover:rotate-45 transition-transform duration-300" />
                      <span>{content.admin.loginText}</span>
                    </Link>
                  ) : (
                    <>
                      <Link
                        href="/admin/dashboard"
                        className="flex items-center space-x-2 text-yellow-300 hover:text-yellow-200 transition-colors duration-300 text-sm group"
                      >
                        <Eye className="w-4 h-4" />
                        <span>{content.admin.dashboardText}</span>
                      </Link>
                      <div className="text-gray-400 text-xs">
                        {language === "vi" ? "Đăng nhập:" : "Logged in:"}{" "}
                        {user?.name}
                      </div>
                    </>
                  )}
                </div>
              </div>
            </motion.div>
          </div>

          {/* Contact Info Bar */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
            className="border-t border-gray-700 pt-8 mb-8"
          >
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center md:text-left">
              <div className="flex items-center justify-center md:justify-start space-x-3">
                <MapPin className="w-5 h-5 text-blue-400 flex-shrink-0" />
                <p className="text-gray-300 text-sm">
                  {content.contact.address}
                </p>
              </div>
              <div className="flex items-center justify-center md:justify-start space-x-3">
                <Phone className="w-5 h-5 text-blue-400 flex-shrink-0" />
                <a
                  href={`tel:${content.contact.phone}`}
                  className="text-gray-300 hover:text-blue-300 transition-colors duration-300 text-sm"
                >
                  {content.contact.phone}
                </a>
              </div>
              <div className="flex items-center justify-center md:justify-start space-x-3">
                <Mail className="w-5 h-5 text-blue-400 flex-shrink-0" />
                <a
                  href={`mailto:${content.contact.email}`}
                  className="text-gray-300 hover:text-blue-300 transition-colors duration-300 text-sm"
                >
                  {content.contact.email}
                </a>
              </div>
            </div>
          </motion.div>

          {/* Footer Bottom */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            viewport={{ once: true }}
            className="pt-8 border-t border-gray-800"
          >
            <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
              <div className="flex flex-col md:flex-row items-center space-y-2 md:space-y-0 md:space-x-6 text-sm text-gray-400">
                <p>{content.copyright}</p>
                <div className="flex items-center space-x-1">
                  <span>{content.madeWith}</span>
                  <Heart className="w-4 h-4 text-red-500 animate-pulse" />
                  <span>{content.by}</span>
                </div>
                <div className="text-xs text-gray-500">
                  v2.1.0 {isAuthenticated && "• Admin Mode"}
                </div>
              </div>

              {/* Back to Top Button */}
              <motion.button
                onClick={scrollToTop}
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="p-3 bg-gradient-to-br from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 rounded-full transition-all duration-300 group shadow-lg hover:shadow-xl"
              >
                <ChevronUp className="w-5 h-5 text-white group-hover:animate-bounce" />
              </motion.button>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Gradient Overlay */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-blue-500 to-transparent"></div>
    </footer>
  );
}
