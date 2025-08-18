"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import Link from "next/link";
import {
  BarChart3,
  Users,
  BookOpen,
  MessageCircle,
  TrendingUp,
  DollarSign,
  Eye,
  Edit,
  Plus,
  Settings,
  LogOut,
  Bell,
  Search,
  Filter,
  Download,
  Upload,
  Trash2,
  Save,
  RefreshCw,
  Calendar,
  Clock,
  Star,
  Award,
  Target,
  Zap,
  Crown,
  Shield,
  Globe,
  Image,
  Video,
  FileText,
  Mail,
  Phone,
  MapPin,
  ExternalLink,
  ChevronRight,
  MoreHorizontal,
  Layout,
  Palette,
  Code,
  Database,
  Monitor,
} from "lucide-react";
import { useAuth } from "@/contexts/AuthContext";

// Sample dashboard data
const dashboardData = {
  stats: [
    {
      label: "Tổng học viên",
      value: "2,847",
      change: "+12%",
      trend: "up",
      icon: Users,
      color: "bg-blue-500",
    },
    {
      label: "Khóa học hoạt động",
      value: "24",
      change: "+3",
      trend: "up",
      icon: BookOpen,
      color: "bg-green-500",
    },
    {
      label: "Doanh thu tháng",
      value: "1.2B VND",
      change: "+18%",
      trend: "up",
      icon: DollarSign,
      color: "bg-yellow-500",
    },
    {
      label: "Sessions hoàn thành",
      value: "156",
      change: "+7%",
      trend: "up",
      icon: Target,
      color: "bg-purple-500",
    },
  ],
  recentActivities: [
    {
      id: 1,
      type: "course_enrollment",
      title: "Học viên mới đăng ký",
      description: "Nguyễn Văn A đăng ký khóa Digital Marketing Mastery",
      time: "5 phút trước",
      icon: BookOpen,
      color: "text-blue-400",
    },
    {
      id: 2,
      type: "mentor_session",
      title: "Session mentoring hoàn thành",
      description: "Dr. Nguyễn Minh Tuấn hoàn thành session với Trần Thị B",
      time: "15 phút trước",
      icon: Users,
      color: "text-green-400",
    },
    {
      id: 3,
      type: "payment",
      title: "Thanh toán thành công",
      description: "Lê Văn C thanh toán khóa Leadership Excellence",
      time: "30 phút trước",
      icon: DollarSign,
      color: "text-yellow-400",
    },
    {
      id: 4,
      type: "review",
      title: "Đánh giá mới",
      description: "Phạm Thị D đánh giá 5 sao cho khóa Startup Acceleration",
      time: "1 giờ trước",
      icon: Star,
      color: "text-purple-400",
    },
  ],
  quickActions: [
    {
      label: "CMS Editor",
      icon: Layout,
      href: "/admin/cms",
      color: "bg-purple-500 hover:bg-purple-600",
      description: "Edit website content",
    },
    {
      label: "Thêm khóa học",
      icon: Plus,
      href: "/admin/courses/new",
      color: "bg-blue-500 hover:bg-blue-600",
      description: "Create new course",
    },
    {
      label: "Quản lý mentors",
      icon: Users,
      href: "/admin/mentors",
      color: "bg-green-500 hover:bg-green-600",
      description: "Manage mentors",
    },
    {
      label: "Xem báo cáo",
      icon: BarChart3,
      href: "/admin/reports",
      color: "bg-orange-500 hover:bg-orange-600",
      description: "View analytics",
    },
  ],
  contentSections: [
    {
      title: "Trang chủ",
      icon: Globe,
      items: [
        "Hero Section",
        "Thống kê",
        "Dịch vụ",
        "Testimonials",
        "CTA Section",
      ],
      lastUpdated: "2 giờ trước",
      href: "/admin/cms?page=homepage",
    },
    {
      title: "Về chúng tôi",
      icon: FileText,
      items: ["Sứ mệnh & Tầm nhìn", "Giá trị cốt lõi", "Timeline", "Thành tựu"],
      lastUpdated: "1 ngày trước",
      href: "/admin/cms?page=about",
    },
    {
      title: "Đào tạo",
      icon: BookOpen,
      items: ["Danh sách khóa học", "Filters", "Chi tiết khóa học", "Pricing"],
      lastUpdated: "3 giờ trước",
      href: "/admin/cms?page=training",
    },
    {
      title: "Dự án",
      icon: Target,
      items: ["Portfolio", "Case studies", "Testimonials", "Results"],
      lastUpdated: "5 giờ trước",
      href: "/admin/cms?page=projects",
    },
  ],
};

export default function AdminDashboard() {
  const { user, logout, isAuthenticated, isLoading } = useAuth();
  const [activeSection, setActiveSection] = useState("overview");
  const [searchTerm, setSearchTerm] = useState("");
  const [notifications, setNotifications] = useState(5);
  const [currentTime, setCurrentTime] = useState(new Date());
  const router = useRouter();

  useEffect(() => {
    if (!isLoading && !isAuthenticated) {
      router.push("/admin/login");
    }
  }, [isAuthenticated, isLoading, router]);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900">
        <div className="text-center">
          <div className="w-16 h-16 border-4 border-blue-400 border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
          <p className="text-white">Đang tải dashboard...</p>
        </div>
      </div>
    );
  }

  if (!isAuthenticated) {
    return null;
  }

  const sidebarItems = [
    { id: "overview", label: "Tổng quan", icon: BarChart3 },
    { id: "cms", label: "CMS Editor", icon: Layout, href: "/admin/cms" },
    { id: "content", label: "Quản lý nội dung", icon: FileText },
    { id: "courses", label: "Khóa học", icon: BookOpen },
    { id: "mentors", label: "Mentors", icon: Users },
    { id: "students", label: "Học viên", icon: Users },
    { id: "projects", label: "Dự án", icon: Target },
    { id: "blog", label: "Blog", icon: Edit },
    { id: "media", label: "Media", icon: Image },
    { id: "analytics", label: "Analytics", icon: BarChart3 },
    { id: "settings", label: "Cài đặt", icon: Settings },
  ];

  return (
    <div className="min-h-screen bg-gray-900 flex">
      {/* Sidebar */}
      <motion.div
        initial={{ x: -300 }}
        animate={{ x: 0 }}
        transition={{ duration: 0.5 }}
        className="w-64 bg-gray-800 border-r border-gray-700 flex flex-col"
      >
        {/* Header */}
        <div className="p-6 border-b border-gray-700">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-xl flex items-center justify-center">
              <Crown className="w-6 h-6 text-white" />
            </div>
            <div>
              <h1 className="text-white font-bold text-lg">MSC Admin</h1>
              <p className="text-gray-400 text-sm">Content Management</p>
            </div>
          </div>
        </div>

        {/* Real-time Clock */}
        <div className="p-4 border-b border-gray-700 bg-gradient-to-r from-blue-900/20 to-purple-900/20">
          <div className="text-center">
            <div className="text-white font-mono text-lg mb-1">
              {currentTime.toLocaleTimeString("vi-VN")}
            </div>
            <div className="text-blue-300 text-xs">
              {currentTime.toLocaleDateString("vi-VN", {
                weekday: "long",
                day: "numeric",
                month: "short",
              })}
            </div>
          </div>
        </div>

        {/* Navigation */}
        <nav className="flex-1 p-4">
          <ul className="space-y-2">
            {sidebarItems.map((item) => (
              <motion.li
                key={item.id}
                whileHover={{ x: 4 }}
                transition={{ duration: 0.2 }}
              >
                {item.href ? (
                  <Link
                    href={item.href}
                    className="w-full flex items-center space-x-3 px-4 py-3 rounded-lg transition-all duration-300 text-gray-300 hover:bg-gray-700 hover:text-white group"
                  >
                    <item.icon className="w-5 h-5 group-hover:scale-110 transition-transform" />
                    <span>{item.label}</span>
                    {item.label === "CMS Editor" && (
                      <span className="ml-auto bg-purple-500 text-white text-xs px-2 py-1 rounded-full">
                        New
                      </span>
                    )}
                  </Link>
                ) : (
                  <button
                    onClick={() => setActiveSection(item.id)}
                    className={`w-full flex items-center space-x-3 px-4 py-3 rounded-lg transition-all duration-300 ${
                      activeSection === item.id
                        ? "bg-blue-600 text-white"
                        : "text-gray-300 hover:bg-gray-700 hover:text-white"
                    }`}
                  >
                    <item.icon className="w-5 h-5" />
                    <span>{item.label}</span>
                  </button>
                )}
              </motion.li>
            ))}
          </ul>
        </nav>

        {/* User Profile */}
        <div className="p-4 border-t border-gray-700">
          <div className="flex items-center space-x-3 mb-4">
            <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center">
              <span className="text-white font-semibold text-sm">
                {user?.name
                  ?.split(" ")
                  .map((n) => n[0])
                  .join("")}
              </span>
            </div>
            <div className="flex-1">
              <p className="text-white font-medium text-sm">{user?.name}</p>
              <p className="text-gray-400 text-xs">{user?.email}</p>
            </div>
          </div>
          <button
            onClick={logout}
            className="w-full flex items-center space-x-2 px-4 py-2 text-gray-300 hover:text-white hover:bg-gray-700 rounded-lg transition-colors duration-300"
          >
            <LogOut className="w-4 h-4" />
            <span>Đăng xuất</span>
          </button>
        </div>
      </motion.div>

      {/* Main Content */}
      <div className="flex-1 flex flex-col">
        {/* Top Bar */}
        <motion.header
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="bg-gray-800 border-b border-gray-700 px-6 py-4"
        >
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <h2 className="text-2xl font-bold text-white">
                {sidebarItems.find((item) => item.id === activeSection)?.label}
              </h2>
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                <input
                  type="text"
                  placeholder="Tìm kiếm..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10 pr-4 py-2 bg-gray-700 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
            </div>

            <div className="flex items-center space-x-4">
              <button className="relative p-2 text-gray-400 hover:text-white transition-colors duration-300">
                <Bell className="w-6 h-6" />
                {notifications > 0 && (
                  <span className="absolute -top-1 -right-1 w-5 h-5 bg-red-500 text-white text-xs rounded-full flex items-center justify-center">
                    {notifications}
                  </span>
                )}
              </button>

              <div className="flex items-center space-x-2">
                <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center">
                  <span className="text-white font-semibold text-sm">
                    {user?.name
                      ?.split(" ")
                      .map((n) => n[0])
                      .join("")}
                  </span>
                </div>
                <span className="text-white font-medium">{user?.name}</span>
              </div>
            </div>
          </div>
        </motion.header>

        {/* Content Area */}
        <main className="flex-1 p-6 overflow-y-auto">
          {activeSection === "overview" && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="space-y-6"
            >
              {/* Stats Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {dashboardData.stats.map((stat, index) => (
                  <motion.div
                    key={stat.label}
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    className="bg-gray-800 border border-gray-700 rounded-xl p-6 group hover:border-gray-600 transition-all duration-300"
                  >
                    <div className="flex items-center justify-between mb-4">
                      <div
                        className={`w-12 h-12 ${stat.color} rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}
                      >
                        <stat.icon className="w-6 h-6 text-white" />
                      </div>
                      <div
                        className={`text-sm font-medium ${
                          stat.trend === "up"
                            ? "text-green-400"
                            : "text-red-400"
                        }`}
                      >
                        {stat.change}
                      </div>
                    </div>
                    <div>
                      <p className="text-2xl font-bold text-white mb-1">
                        {stat.value}
                      </p>
                      <p className="text-gray-400 text-sm">{stat.label}</p>
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* CMS Quick Access */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="bg-gradient-to-r from-purple-900/50 to-blue-900/50 border border-purple-500/30 rounded-xl p-6"
              >
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center space-x-3">
                    <Layout className="w-6 h-6 text-purple-400" />
                    <h3 className="text-xl font-bold text-white">
                      CMS Content Editor
                    </h3>
                    <span className="bg-purple-500 text-white text-xs px-2 py-1 rounded-full">
                      Advanced
                    </span>
                  </div>
                  <Link
                    href="/admin/cms"
                    className="bg-purple-600 hover:bg-purple-700 text-white px-4 py-2 rounded-lg transition-colors duration-300 flex items-center space-x-2"
                  >
                    <span>Open CMS</span>
                    <ChevronRight className="w-4 h-4" />
                  </Link>
                </div>
                <p className="text-blue-100 mb-4">
                  Edit website content with advanced visual editor, real-time
                  preview, and floating widgets.
                </p>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                  <div className="flex items-center space-x-2 text-purple-200">
                    <Monitor className="w-4 h-4" />
                    <span className="text-sm">Visual Editor</span>
                  </div>
                  <div className="flex items-center space-x-2 text-purple-200">
                    <Palette className="w-4 h-4" />
                    <span className="text-sm">Color Picker</span>
                  </div>
                  <div className="flex items-center space-x-2 text-purple-200">
                    <Clock className="w-4 h-4" />
                    <span className="text-sm">Real-time Clock</span>
                  </div>
                  <div className="flex items-center space-x-2 text-purple-200">
                    <Image className="w-4 h-4" />
                    <span className="text-sm">Media Library</span>
                  </div>
                </div>
              </motion.div>

              {/* Quick Actions */}
              <div className="bg-gray-800 border border-gray-700 rounded-xl p-6">
                <h3 className="text-xl font-bold text-white mb-6">
                  Thao tác nhanh
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                  {dashboardData.quickActions.map((action, index) => (
                    <motion.div
                      key={action.label}
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
                      className="group"
                    >
                      <Link
                        href={action.href}
                        className={`${action.color} text-white p-4 rounded-xl transition-all duration-300 flex flex-col items-center space-y-2 group-hover:scale-105`}
                      >
                        <action.icon className="w-8 h-8" />
                        <span className="font-medium">{action.label}</span>
                        <span className="text-xs opacity-80">
                          {action.description}
                        </span>
                      </Link>
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* Recent Activities & Content Overview */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                {/* Recent Activities */}
                <div className="bg-gray-800 border border-gray-700 rounded-xl p-6">
                  <div className="flex items-center justify-between mb-6">
                    <h3 className="text-xl font-bold text-white">
                      Hoạt động gần đây
                    </h3>
                    <button className="text-blue-400 hover:text-blue-300 text-sm">
                      Xem tất cả
                    </button>
                  </div>
                  <div className="space-y-4">
                    {dashboardData.recentActivities.map((activity, index) => (
                      <motion.div
                        key={activity.id}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6, delay: index * 0.1 }}
                        className="flex items-start space-x-3 p-3 rounded-lg hover:bg-gray-700/50 transition-colors duration-300"
                      >
                        <div
                          className={`w-8 h-8 rounded-lg bg-gray-700 flex items-center justify-center ${activity.color}`}
                        >
                          <activity.icon className="w-4 h-4" />
                        </div>
                        <div className="flex-1">
                          <p className="text-white font-medium text-sm">
                            {activity.title}
                          </p>
                          <p className="text-gray-400 text-sm">
                            {activity.description}
                          </p>
                          <p className="text-gray-500 text-xs mt-1">
                            {activity.time}
                          </p>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </div>

                {/* Content Sections */}
                <div className="bg-gray-800 border border-gray-700 rounded-xl p-6">
                  <div className="flex items-center justify-between mb-6">
                    <h3 className="text-xl font-bold text-white">
                      Quản lý nội dung
                    </h3>
                    <Link
                      href="/admin/cms"
                      className="text-blue-400 hover:text-blue-300 text-sm"
                    >
                      Chỉnh sửa trong CMS
                    </Link>
                  </div>
                  <div className="space-y-4">
                    {dashboardData.contentSections.map((section, index) => (
                      <motion.div
                        key={section.title}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: index * 0.1 }}
                        className="p-4 border border-gray-600 rounded-lg hover:border-gray-500 transition-colors duration-300 cursor-pointer group"
                      >
                        <Link href={section.href}>
                          <div className="flex items-center justify-between mb-3">
                            <div className="flex items-center space-x-3">
                              <section.icon className="w-5 h-5 text-blue-400" />
                              <span className="text-white font-medium group-hover:text-blue-300 transition-colors">
                                {section.title}
                              </span>
                            </div>
                            <div className="flex items-center space-x-2">
                              <button className="p-1 text-gray-400 hover:text-white transition-colors duration-300">
                                <Edit className="w-4 h-4" />
                              </button>
                              <button className="p-1 text-gray-400 hover:text-white transition-colors duration-300">
                                <Eye className="w-4 h-4" />
                              </button>
                            </div>
                          </div>
                          <div className="text-gray-400 text-sm mb-2">
                            {section.items.join(" • ")}
                          </div>
                          <div className="text-gray-500 text-xs">
                            Cập nhật: {section.lastUpdated}
                          </div>
                        </Link>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          )}

          {activeSection === "content" && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="space-y-6"
            >
              <div className="bg-gray-800 border border-gray-700 rounded-xl p-6">
                <div className="flex items-center justify-between mb-6">
                  <h3 className="text-2xl font-bold text-white">
                    Quản lý nội dung website
                  </h3>
                  <Link
                    href="/admin/cms"
                    className="bg-purple-600 hover:bg-purple-700 text-white px-4 py-2 rounded-lg transition-colors duration-300 flex items-center space-x-2"
                  >
                    <Layout className="w-4 h-4" />
                    <span>Open CMS Editor</span>
                  </Link>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {[
                    {
                      title: "Trang chủ",
                      pages: 1,
                      icon: Globe,
                      color: "bg-blue-500",
                      href: "/admin/cms?page=homepage",
                    },
                    {
                      title: "Về chúng tôi",
                      pages: 1,
                      icon: FileText,
                      color: "bg-green-500",
                      href: "/admin/cms?page=about",
                    },
                    {
                      title: "Đào tạo",
                      pages: 24,
                      icon: BookOpen,
                      color: "bg-purple-500",
                      href: "/admin/cms?page=training",
                    },
                    {
                      title: "Dự án",
                      pages: 15,
                      icon: Target,
                      color: "bg-orange-500",
                      href: "/admin/cms?page=projects",
                    },
                    {
                      title: "Mentors",
                      pages: 12,
                      icon: Users,
                      color: "bg-pink-500",
                      href: "/admin/cms?page=mentors",
                    },
                    {
                      title: "Blog",
                      pages: 28,
                      icon: Edit,
                      color: "bg-teal-500",
                      href: "/admin/cms?page=blog",
                    },
                  ].map((section, index) => (
                    <motion.div
                      key={section.title}
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.6, delay: index * 0.1 }}
                      className="bg-gray-700 border border-gray-600 rounded-xl p-6 hover:border-gray-500 transition-all duration-300 cursor-pointer group"
                    >
                      <Link href={section.href}>
                        <div className="flex items-center justify-between mb-4">
                          <div
                            className={`w-12 h-12 ${section.color} rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}
                          >
                            <section.icon className="w-6 h-6 text-white" />
                          </div>
                          <button className="p-2 text-gray-400 hover:text-white transition-colors duration-300">
                            <MoreHorizontal className="w-5 h-5" />
                          </button>
                        </div>
                        <h4 className="text-white font-bold text-lg mb-2 group-hover:text-blue-300 transition-colors">
                          {section.title}
                        </h4>
                        <p className="text-gray-400 text-sm mb-4">
                          {section.pages} trang
                        </p>
                        <div className="flex space-x-2">
                          <button className="flex-1 bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded-lg text-sm transition-colors duration-300">
                            Chỉnh sửa
                          </button>
                          <button className="p-2 bg-gray-600 hover:bg-gray-500 text-white rounded-lg transition-colors duration-300">
                            <Eye className="w-4 h-4" />
                          </button>
                        </div>
                      </Link>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          )}

          {/* Other sections would be implemented similarly */}
          {activeSection !== "overview" && activeSection !== "content" && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="bg-gray-800 border border-gray-700 rounded-xl p-6 text-center"
            >
              <div className="w-16 h-16 bg-gray-700 rounded-full flex items-center justify-center mx-auto mb-4">
                {(() => {
                  const item = sidebarItems.find(
                    (item) => item.id === activeSection,
                  );
                  if (item?.icon) {
                    const IconComponent = item.icon;
                    return <IconComponent className="w-8 h-8 text-gray-400" />;
                  }
                  return null;
                })()}
              </div>
              <h3 className="text-xl font-bold text-white mb-2">
                {sidebarItems.find((item) => item.id === activeSection)?.label}
              </h3>
              <p className="text-gray-400">
                Chức năng này đang được phát triển...
              </p>
            </motion.div>
          )}
        </main>
      </div>
    </div>
  );
}
