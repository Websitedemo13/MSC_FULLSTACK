"use client";

import { useState, useEffect, useRef } from "react";
import { useRouter } from "next/navigation";
import { motion, AnimatePresence, useDragControls } from "framer-motion";
import {
  Layout,
  Grid,
  Settings,
  Monitor,
  Smartphone,
  Tablet,
  Eye,
  EyeOff,
  Save,
  Undo,
  Redo,
  Copy,
  Scissors,
  Clipboard,
  Palette,
  Type,
  Image,
  Video,
  Music,
  FileText,
  Code,
  Database,
  Cloud,
  Download,
  Upload,
  Share2,
  Link,
  Search,
  Filter,
  SortAsc,
  SortDesc,
  Plus,
  Minus,
  X,
  Maximize2,
  Minimize2,
  RotateCcw,
  RotateCw,
  ZoomIn,
  ZoomOut,
  Move,
  MousePointer,
  Hand,
  Square,
  Circle,
  Triangle,
  Star,
  Heart,
  Zap,
  Crown,
  Shield,
  Clock,
  Calendar,
  Bell,
  MessageCircle,
  Users,
  BarChart3,
  PieChart,
  LineChart,
  TrendingUp,
  TrendingDown,
  Activity,
  Wifi,
  Battery,
  Volume2,
  Brightness6,
  Contrast,
  Layers,
  Folder,
  FolderOpen,
  File,
  Edit3,
  Trash2,
  MoreHorizontal,
  ChevronLeft,
  ChevronRight,
  ChevronUp,
  ChevronDown,
  ArrowLeft,
  ArrowRight,
  ArrowUp,
  ArrowDown,
  RefreshCw,
  Power,
  LogOut,
} from "lucide-react";
import { useAuth } from "@/contexts/AuthContext";

// Floating Widget Components
const FloatingClock = ({ onClose }: { onClose: () => void }) => {
  const [time, setTime] = useState(new Date());
  const [is24Hour, setIs24Hour] = useState(true);
  const dragControls = useDragControls();

  useEffect(() => {
    const timer = setInterval(() => setTime(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  const formatTime = (date: Date) => {
    if (is24Hour) {
      return date.toLocaleTimeString("vi-VN", { hour12: false });
    }
    return date.toLocaleTimeString("en-US", { hour12: true });
  };

  return (
    <motion.div
      drag
      dragControls={dragControls}
      dragMomentum={false}
      className="fixed top-20 right-4 z-50 bg-black/80 backdrop-blur-xl border border-white/20 rounded-2xl p-6 shadow-2xl"
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.8 }}
    >
      <div className="flex items-center justify-between mb-4">
        <Clock className="w-5 h-5 text-blue-400" />
        <button
          onClick={onClose}
          className="text-gray-400 hover:text-white transition-colors"
        >
          <X className="w-4 h-4" />
        </button>
      </div>

      <div className="text-center">
        <div className="text-3xl font-mono font-bold text-white mb-2">
          {formatTime(time)}
        </div>
        <div className="text-blue-300 text-sm mb-3">
          {time.toLocaleDateString("vi-VN", {
            weekday: "long",
            year: "numeric",
            month: "long",
            day: "numeric",
          })}
        </div>
        <button
          onClick={() => setIs24Hour(!is24Hour)}
          className="text-xs text-gray-400 hover:text-blue-300 transition-colors"
        >
          {is24Hour ? "12h" : "24h"} format
        </button>
      </div>
    </motion.div>
  );
};

const FloatingTaskManager = ({ onClose }: { onClose: () => void }) => {
  const [tasks, setTasks] = useState([
    {
      id: 1,
      title: "Update homepage content",
      completed: false,
      priority: "high",
    },
    {
      id: 2,
      title: "Review mentor profiles",
      completed: true,
      priority: "medium",
    },
    {
      id: 3,
      title: "Upload new course images",
      completed: false,
      priority: "low",
    },
  ]);
  const [newTask, setNewTask] = useState("");
  const dragControls = useDragControls();

  const addTask = () => {
    if (newTask.trim()) {
      setTasks([
        ...tasks,
        {
          id: Date.now(),
          title: newTask,
          completed: false,
          priority: "medium",
        },
      ]);
      setNewTask("");
    }
  };

  const toggleTask = (id: number) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task,
      ),
    );
  };

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case "high":
        return "text-red-400";
      case "medium":
        return "text-yellow-400";
      case "low":
        return "text-green-400";
      default:
        return "text-gray-400";
    }
  };

  return (
    <motion.div
      drag
      dragControls={dragControls}
      dragMomentum={false}
      className="fixed top-20 left-4 z-50 w-80 bg-black/80 backdrop-blur-xl border border-white/20 rounded-2xl p-6 shadow-2xl"
      initial={{ opacity: 0, x: -100 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -100 }}
    >
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center space-x-2">
          <FileText className="w-5 h-5 text-purple-400" />
          <span className="text-white font-semibold">Task Manager</span>
        </div>
        <button
          onClick={onClose}
          className="text-gray-400 hover:text-white transition-colors"
        >
          <X className="w-4 h-4" />
        </button>
      </div>

      <div className="mb-4">
        <div className="flex space-x-2">
          <input
            type="text"
            value={newTask}
            onChange={(e) => setNewTask(e.target.value)}
            onKeyPress={(e) => e.key === "Enter" && addTask()}
            placeholder="Add new task..."
            className="flex-1 bg-white/10 border border-white/20 rounded-lg px-3 py-2 text-white placeholder-gray-400 text-sm focus:outline-none focus:ring-2 focus:ring-purple-500"
          />
          <button
            onClick={addTask}
            className="bg-purple-600 hover:bg-purple-700 text-white px-3 py-2 rounded-lg transition-colors"
          >
            <Plus className="w-4 h-4" />
          </button>
        </div>
      </div>

      <div className="space-y-2 max-h-60 overflow-y-auto">
        {tasks.map((task) => (
          <div
            key={task.id}
            className={`flex items-center space-x-3 p-2 rounded-lg transition-colors ${
              task.completed
                ? "bg-green-500/20"
                : "bg-white/5 hover:bg-white/10"
            }`}
          >
            <button
              onClick={() => toggleTask(task.id)}
              className={`w-4 h-4 rounded border-2 flex items-center justify-center ${
                task.completed
                  ? "bg-green-500 border-green-500"
                  : "border-gray-400 hover:border-white"
              }`}
            >
              {task.completed && <span className="text-white text-xs">✓</span>}
            </button>
            <span
              className={`flex-1 text-sm ${
                task.completed ? "text-gray-400 line-through" : "text-white"
              }`}
            >
              {task.title}
            </span>
            <span className={`text-xs ${getPriorityColor(task.priority)}`}>
              ●
            </span>
          </div>
        ))}
      </div>
    </motion.div>
  );
};

const FloatingAnalytics = ({ onClose }: { onClose: () => void }) => {
  const [metrics] = useState({
    visitors: { current: 2847, change: "+12%", trend: "up" },
    pageViews: { current: 8521, change: "+8%", trend: "up" },
    bounceRate: { current: 23.4, change: "-5%", trend: "down" },
    avgSession: { current: "4:32", change: "+15%", trend: "up" },
  });
  const dragControls = useDragControls();

  return (
    <motion.div
      drag
      dragControls={dragControls}
      dragMomentum={false}
      className="fixed bottom-4 right-4 z-50 w-96 bg-black/80 backdrop-blur-xl border border-white/20 rounded-2xl p-6 shadow-2xl"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 100 }}
    >
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center space-x-2">
          <BarChart3 className="w-5 h-5 text-green-400" />
          <span className="text-white font-semibold">Analytics</span>
        </div>
        <button
          onClick={onClose}
          className="text-gray-400 hover:text-white transition-colors"
        >
          <X className="w-4 h-4" />
        </button>
      </div>

      <div className="grid grid-cols-2 gap-4">
        <div className="bg-blue-500/20 rounded-lg p-3">
          <div className="flex items-center justify-between mb-1">
            <span className="text-blue-300 text-sm">Visitors</span>
            <span className="text-green-400 text-xs">
              {metrics.visitors.change}
            </span>
          </div>
          <div className="text-white font-bold text-lg">
            {metrics.visitors.current.toLocaleString()}
          </div>
        </div>

        <div className="bg-purple-500/20 rounded-lg p-3">
          <div className="flex items-center justify-between mb-1">
            <span className="text-purple-300 text-sm">Page Views</span>
            <span className="text-green-400 text-xs">
              {metrics.pageViews.change}
            </span>
          </div>
          <div className="text-white font-bold text-lg">
            {metrics.pageViews.current.toLocaleString()}
          </div>
        </div>

        <div className="bg-orange-500/20 rounded-lg p-3">
          <div className="flex items-center justify-between mb-1">
            <span className="text-orange-300 text-sm">Bounce Rate</span>
            <span className="text-green-400 text-xs">
              {metrics.bounceRate.change}
            </span>
          </div>
          <div className="text-white font-bold text-lg">
            {metrics.bounceRate.current}%
          </div>
        </div>

        <div className="bg-teal-500/20 rounded-lg p-3">
          <div className="flex items-center justify-between mb-1">
            <span className="text-teal-300 text-sm">Avg Session</span>
            <span className="text-green-400 text-xs">
              {metrics.avgSession.change}
            </span>
          </div>
          <div className="text-white font-bold text-lg">
            {metrics.avgSession.current}
          </div>
        </div>
      </div>
    </motion.div>
  );
};

const FloatingColorPicker = ({ onClose }: { onClose: () => void }) => {
  const [selectedColor, setSelectedColor] = useState("#3B82F6");
  const [colorHistory, setColorHistory] = useState([
    "#3B82F6",
    "#8B5CF6",
    "#EC4899",
    "#10B981",
    "#F59E0B",
  ]);
  const dragControls = useDragControls();

  const presetColors = [
    "#FF0000",
    "#FF8000",
    "#FFFF00",
    "#80FF00",
    "#00FF00",
    "#00FF80",
    "#00FFFF",
    "#0080FF",
    "#0000FF",
    "#8000FF",
    "#FF00FF",
    "#FF0080",
    "#FFFFFF",
    "#C0C0C0",
    "#808080",
    "#404040",
    "#000000",
    "#800000",
    "#808000",
    "#008000",
    "#008080",
    "#000080",
    "#800080",
    "#FFC0CB",
    "#FFE4E1",
  ];

  const addToHistory = (color: string) => {
    if (!colorHistory.includes(color)) {
      setColorHistory([color, ...colorHistory.slice(0, 4)]);
    }
  };

  const handleColorChange = (color: string) => {
    setSelectedColor(color);
    addToHistory(color);
  };

  return (
    <motion.div
      drag
      dragControls={dragControls}
      dragMomentum={false}
      className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-50 w-80 bg-black/80 backdrop-blur-xl border border-white/20 rounded-2xl p-6 shadow-2xl"
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.8 }}
    >
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center space-x-2">
          <Palette className="w-5 h-5 text-pink-400" />
          <span className="text-white font-semibold">Color Picker</span>
        </div>
        <button
          onClick={onClose}
          className="text-gray-400 hover:text-white transition-colors"
        >
          <X className="w-4 h-4" />
        </button>
      </div>

      <div className="space-y-4">
        <div className="flex items-center space-x-4">
          <div
            className="w-16 h-16 rounded-lg border-2 border-white/20"
            style={{ backgroundColor: selectedColor }}
          />
          <div>
            <input
              type="color"
              value={selectedColor}
              onChange={(e) => handleColorChange(e.target.value)}
              className="w-8 h-8 rounded cursor-pointer"
            />
            <div className="text-white text-sm mt-1 font-mono">
              {selectedColor}
            </div>
          </div>
        </div>

        <div>
          <div className="text-gray-300 text-sm mb-2">Preset Colors</div>
          <div className="grid grid-cols-5 gap-2">
            {presetColors.map((color) => (
              <button
                key={color}
                onClick={() => handleColorChange(color)}
                className="w-8 h-8 rounded border-2 border-white/20 hover:border-white/50 transition-colors"
                style={{ backgroundColor: color }}
              />
            ))}
          </div>
        </div>

        <div>
          <div className="text-gray-300 text-sm mb-2">Recent Colors</div>
          <div className="flex space-x-2">
            {colorHistory.map((color, index) => (
              <button
                key={index}
                onClick={() => setSelectedColor(color)}
                className="w-8 h-8 rounded border-2 border-white/20 hover:border-white/50 transition-colors"
                style={{ backgroundColor: color }}
              />
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
};

const FloatingMediaLibrary = ({ onClose }: { onClose: () => void }) => {
  const [activeTab, setActiveTab] = useState("images");
  const [uploadProgress, setUploadProgress] = useState(0);
  const [isUploading, setIsUploading] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);
  const dragControls = useDragControls();

  const mockImages = [
    { id: 1, name: "hero-banner.jpg", size: "2.4 MB", type: "image" },
    { id: 2, name: "mentor-profile.png", size: "856 KB", type: "image" },
    { id: 3, name: "course-thumbnail.jpg", size: "1.2 MB", type: "image" },
  ];

  const mockVideos = [
    { id: 1, name: "intro-video.mp4", size: "45 MB", type: "video" },
    { id: 2, name: "testimonial.mov", size: "78 MB", type: "video" },
  ];

  const handleFileUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const files = event.target.files;
    if (files && files.length > 0) {
      setIsUploading(true);
      setUploadProgress(0);

      // Simulate upload progress
      const interval = setInterval(() => {
        setUploadProgress((prev) => {
          if (prev >= 100) {
            clearInterval(interval);
            setIsUploading(false);
            return 100;
          }
          return prev + 10;
        });
      }, 200);
    }
  };

  const tabs = [
    { id: "images", label: "Images", icon: Image, data: mockImages },
    { id: "videos", label: "Videos", icon: Video, data: mockVideos },
    { id: "files", label: "Files", icon: FileText, data: [] },
  ];

  return (
    <motion.div
      drag
      dragControls={dragControls}
      dragMomentum={false}
      className="fixed bottom-4 left-4 z-50 w-96 h-80 bg-black/80 backdrop-blur-xl border border-white/20 rounded-2xl p-6 shadow-2xl flex flex-col"
      initial={{ opacity: 0, x: -100, y: 100 }}
      animate={{ opacity: 1, x: 0, y: 0 }}
      exit={{ opacity: 0, x: -100, y: 100 }}
    >
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center space-x-2">
          <Folder className="w-5 h-5 text-orange-400" />
          <span className="text-white font-semibold">Media Library</span>
        </div>
        <button
          onClick={onClose}
          className="text-gray-400 hover:text-white transition-colors"
        >
          <X className="w-4 h-4" />
        </button>
      </div>

      <div className="flex space-x-2 mb-4">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`flex items-center space-x-1 px-3 py-1 rounded-lg text-sm transition-colors ${
              activeTab === tab.id
                ? "bg-orange-500/20 text-orange-300"
                : "text-gray-400 hover:text-white"
            }`}
          >
            <tab.icon className="w-4 h-4" />
            <span>{tab.label}</span>
          </button>
        ))}
      </div>

      <div className="flex-1 overflow-y-auto">
        {isUploading && (
          <div className="mb-4 p-3 bg-blue-500/20 rounded-lg">
            <div className="flex items-center justify-between mb-2">
              <span className="text-blue-300 text-sm">Uploading...</span>
              <span className="text-blue-300 text-sm">{uploadProgress}%</span>
            </div>
            <div className="w-full bg-blue-900/50 rounded-full h-2">
              <div
                className="bg-blue-500 h-2 rounded-full transition-all duration-300"
                style={{ width: `${uploadProgress}%` }}
              />
            </div>
          </div>
        )}

        <div className="space-y-2">
          {tabs
            .find((tab) => tab.id === activeTab)
            ?.data.map((item) => (
              <div
                key={item.id}
                className="flex items-center space-x-3 p-2 rounded-lg hover:bg-white/5 transition-colors"
              >
                <div className="w-8 h-8 bg-orange-500/20 rounded flex items-center justify-center">
                  {activeTab === "images" && (
                    <Image className="w-4 h-4 text-orange-400" />
                  )}
                  {activeTab === "videos" && (
                    <Video className="w-4 h-4 text-orange-400" />
                  )}
                  {activeTab === "files" && (
                    <FileText className="w-4 h-4 text-orange-400" />
                  )}
                </div>
                <div className="flex-1">
                  <div className="text-white text-sm">{item.name}</div>
                  <div className="text-gray-400 text-xs">{item.size}</div>
                </div>
                <button className="text-gray-400 hover:text-white transition-colors">
                  <MoreHorizontal className="w-4 h-4" />
                </button>
              </div>
            ))}
        </div>
      </div>

      <div className="mt-4 pt-4 border-t border-white/10">
        <button
          onClick={() => fileInputRef.current?.click()}
          className="w-full bg-orange-600 hover:bg-orange-700 text-white py-2 rounded-lg transition-colors flex items-center justify-center space-x-2"
        >
          <Upload className="w-4 h-4" />
          <span>Upload Files</span>
        </button>
        <input
          ref={fileInputRef}
          type="file"
          multiple
          accept="image/*,video/*"
          onChange={handleFileUpload}
          className="hidden"
        />
      </div>
    </motion.div>
  );
};

export default function CMSDashboard() {
  const { user, isAuthenticated, isLoading } = useAuth();
  const router = useRouter();
  const [activeWidget, setActiveWidget] = useState<string | null>(null);
  const [selectedPage, setSelectedPage] = useState("homepage");
  const [previewMode, setPreviewMode] = useState("desktop");
  const [isDarkMode, setIsDarkMode] = useState(true);
  const [zoomLevel, setZoomLevel] = useState(100);
  const [isGridVisible, setIsGridVisible] = useState(true);
  const [activeFloatingWidgets, setActiveFloatingWidgets] = useState<string[]>(
    [],
  );

  useEffect(() => {
    if (!isLoading && !isAuthenticated) {
      router.push("/admin/login");
    }
  }, [isAuthenticated, isLoading, router]);

  if (isLoading || !isAuthenticated) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-900">
        <div className="text-center">
          <div className="w-16 h-16 border-4 border-blue-400 border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
          <p className="text-white">Loading CMS...</p>
        </div>
      </div>
    );
  }

  const pages = [
    { id: "homepage", name: "Trang chủ", icon: Layout },
    { id: "about", name: "Giới thiệu", icon: FileText },
    { id: "training", name: "Đào tạo", icon: Users },
    { id: "projects", name: "Dự án", icon: BarChart3 },
    { id: "mentors", name: "Mentors", icon: Crown },
    { id: "blog", name: "Blog", icon: Edit3 },
    { id: "contact", name: "Liên hệ", icon: MessageCircle },
  ];

  const previewModes = [
    { id: "desktop", name: "Desktop", icon: Monitor, width: "100%" },
    { id: "tablet", name: "Tablet", icon: Tablet, width: "768px" },
    { id: "mobile", name: "Mobile", icon: Smartphone, width: "375px" },
  ];

  const floatingWidgets = [
    {
      id: "clock",
      name: "Real-time Clock",
      icon: Clock,
      component: FloatingClock,
    },
    {
      id: "tasks",
      name: "Task Manager",
      icon: FileText,
      component: FloatingTaskManager,
    },
    {
      id: "analytics",
      name: "Analytics",
      icon: BarChart3,
      component: FloatingAnalytics,
    },
    {
      id: "colors",
      name: "Color Picker",
      icon: Palette,
      component: FloatingColorPicker,
    },
    {
      id: "media",
      name: "Media Library",
      icon: Folder,
      component: FloatingMediaLibrary,
    },
  ];

  const toggleFloatingWidget = (widgetId: string) => {
    setActiveFloatingWidgets((prev) =>
      prev.includes(widgetId)
        ? prev.filter((id) => id !== widgetId)
        : [...prev, widgetId],
    );
  };

  const closeFloatingWidget = (widgetId: string) => {
    setActiveFloatingWidgets((prev) => prev.filter((id) => id !== widgetId));
  };

  return (
    <div className="min-h-screen bg-gray-900 flex flex-col">
      {/* Top Toolbar */}
      <div className="bg-gray-800 border-b border-gray-700 px-6 py-3">
        <div className="flex items-center justify-between">
          {/* Left Section */}
          <div className="flex items-center space-x-6">
            <div className="flex items-center space-x-3">
              <div className="w-8 h-8 bg-gradient-to-br from-purple-500 to-pink-600 rounded-lg flex items-center justify-center">
                <Crown className="w-5 h-5 text-white" />
              </div>
              <div>
                <h1 className="text-white font-bold">MSC CMS</h1>
                <p className="text-gray-400 text-xs">
                  Advanced Content Management
                </p>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex items-center space-x-2">
              <button className="p-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors">
                <Save className="w-4 h-4" />
              </button>
              <button className="p-2 bg-gray-700 hover:bg-gray-600 text-white rounded-lg transition-colors">
                <Undo className="w-4 h-4" />
              </button>
              <button className="p-2 bg-gray-700 hover:bg-gray-600 text-white rounded-lg transition-colors">
                <Redo className="w-4 h-4" />
              </button>
              <div className="w-px h-6 bg-gray-600"></div>
              <button className="p-2 bg-gray-700 hover:bg-gray-600 text-white rounded-lg transition-colors">
                <Copy className="w-4 h-4" />
              </button>
              <button className="p-2 bg-gray-700 hover:bg-gray-600 text-white rounded-lg transition-colors">
                <Scissors className="w-4 h-4" />
              </button>
              <button className="p-2 bg-gray-700 hover:bg-gray-600 text-white rounded-lg transition-colors">
                <Clipboard className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Center Section - Preview Controls */}
          <div className="flex items-center space-x-4">
            <div className="flex items-center bg-gray-700 rounded-lg">
              {previewModes.map((mode) => (
                <button
                  key={mode.id}
                  onClick={() => setPreviewMode(mode.id)}
                  className={`flex items-center space-x-2 px-3 py-2 rounded-lg transition-colors ${
                    previewMode === mode.id
                      ? "bg-blue-600 text-white"
                      : "text-gray-300 hover:text-white"
                  }`}
                >
                  <mode.icon className="w-4 h-4" />
                  <span className="text-sm">{mode.name}</span>
                </button>
              ))}
            </div>

            <div className="flex items-center space-x-2">
              <button
                onClick={() => setZoomLevel(Math.max(25, zoomLevel - 25))}
                className="p-1 text-gray-400 hover:text-white transition-colors"
              >
                <ZoomOut className="w-4 h-4" />
              </button>
              <span className="text-white text-sm w-12 text-center">
                {zoomLevel}%
              </span>
              <button
                onClick={() => setZoomLevel(Math.min(200, zoomLevel + 25))}
                className="p-1 text-gray-400 hover:text-white transition-colors"
              >
                <ZoomIn className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Right Section */}
          <div className="flex items-center space-x-4">
            {/* Floating Widgets Toggle */}
            <div className="flex items-center space-x-2">
              {floatingWidgets.map((widget) => (
                <button
                  key={widget.id}
                  onClick={() => toggleFloatingWidget(widget.id)}
                  className={`p-2 rounded-lg transition-colors ${
                    activeFloatingWidgets.includes(widget.id)
                      ? "bg-purple-600 text-white"
                      : "bg-gray-700 text-gray-300 hover:text-white"
                  }`}
                  title={widget.name}
                >
                  <widget.icon className="w-4 h-4" />
                </button>
              ))}
            </div>

            <div className="w-px h-6 bg-gray-600"></div>

            {/* Settings */}
            <button className="p-2 bg-gray-700 hover:bg-gray-600 text-white rounded-lg transition-colors">
              <Settings className="w-4 h-4" />
            </button>

            {/* User Info */}
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center">
                <span className="text-white font-semibold text-sm">
                  {user?.name
                    ?.split(" ")
                    .map((n) => n[0])
                    .join("")}
                </span>
              </div>
              <span className="text-white text-sm">{user?.name}</span>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 flex">
        {/* Left Sidebar - Pages & Components */}
        <div className="w-80 bg-gray-800 border-r border-gray-700 flex flex-col">
          {/* Pages Section */}
          <div className="p-4 border-b border-gray-700">
            <h3 className="text-white font-semibold mb-3">Pages</h3>
            <div className="space-y-1">
              {pages.map((page) => (
                <button
                  key={page.id}
                  onClick={() => setSelectedPage(page.id)}
                  className={`w-full flex items-center space-x-3 px-3 py-2 rounded-lg transition-colors ${
                    selectedPage === page.id
                      ? "bg-blue-600 text-white"
                      : "text-gray-300 hover:text-white hover:bg-gray-700"
                  }`}
                >
                  <page.icon className="w-4 h-4" />
                  <span className="text-sm">{page.name}</span>
                </button>
              ))}
            </div>
          </div>

          {/* Components Library */}
          <div className="flex-1 p-4">
            <h3 className="text-white font-semibold mb-3">Components</h3>
            <div className="space-y-2">
              {[
                { name: "Hero Section", icon: Layout },
                { name: "Text Block", icon: Type },
                { name: "Image Gallery", icon: Image },
                { name: "Video Player", icon: Video },
                { name: "Contact Form", icon: MessageCircle },
                { name: "Testimonials", icon: Star },
                { name: "Statistics", icon: BarChart3 },
                { name: "Call to Action", icon: Zap },
              ].map((component) => (
                <div
                  key={component.name}
                  className="flex items-center space-x-3 px-3 py-2 rounded-lg text-gray-300 hover:text-white hover:bg-gray-700 transition-colors cursor-pointer"
                >
                  <component.icon className="w-4 h-4" />
                  <span className="text-sm">{component.name}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Quick Tools */}
          <div className="p-4 border-t border-gray-700">
            <h3 className="text-white font-semibold mb-3">Quick Tools</h3>
            <div className="grid grid-cols-2 gap-2">
              <button className="flex items-center justify-center space-x-2 p-2 bg-gray-700 hover:bg-gray-600 text-white rounded-lg transition-colors">
                <Grid className="w-4 h-4" />
                <span className="text-sm">Grid</span>
              </button>
              <button className="flex items-center justify-center space-x-2 p-2 bg-gray-700 hover:bg-gray-600 text-white rounded-lg transition-colors">
                <Layers className="w-4 h-4" />
                <span className="text-sm">Layers</span>
              </button>
              <button className="flex items-center justify-center space-x-2 p-2 bg-gray-700 hover:bg-gray-600 text-white rounded-lg transition-colors">
                <Code className="w-4 h-4" />
                <span className="text-sm">Code</span>
              </button>
              <button className="flex items-center justify-center space-x-2 p-2 bg-gray-700 hover:bg-gray-600 text-white rounded-lg transition-colors">
                <Database className="w-4 h-4" />
                <span className="text-sm">Data</span>
              </button>
            </div>
          </div>
        </div>

        {/* Center - Canvas Area */}
        <div className="flex-1 bg-gray-900 p-8 overflow-auto">
          <div className="h-full flex items-center justify-center">
            <div
              className="bg-white rounded-lg shadow-2xl transition-all duration-300"
              style={{
                width: previewModes.find((m) => m.id === previewMode)?.width,
                maxWidth: "100%",
                height: "800px",
                transform: `scale(${zoomLevel / 100})`,
                transformOrigin: "center top",
              }}
            >
              {/* Mock Website Preview */}
              <div className="h-full p-8 overflow-y-auto">
                <div className="space-y-8">
                  <div className="text-center">
                    <h1 className="text-4xl font-bold text-gray-800 mb-4">
                      {selectedPage === "homepage" &&
                        "MSC - Mentoring & Coaching"}
                      {selectedPage === "about" && "V�� chúng tôi"}
                      {selectedPage === "training" && "Đào tạo"}
                      {selectedPage === "projects" && "Dự án"}
                      {selectedPage === "mentors" && "Mentors"}
                      {selectedPage === "blog" && "Blog"}
                      {selectedPage === "contact" && "Liên hệ"}
                    </h1>
                    <p className="text-gray-600">
                      Content for{" "}
                      {pages.find((p) => p.id === selectedPage)?.name} page
                    </p>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {[1, 2, 3].map((i) => (
                      <div key={i} className="bg-gray-100 rounded-lg p-6">
                        <div className="w-full h-32 bg-gray-300 rounded mb-4"></div>
                        <h3 className="font-semibold text-gray-800 mb-2">
                          Section {i}
                        </h3>
                        <p className="text-gray-600 text-sm">
                          Sample content for section {i}. This is editable
                          through the CMS.
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Right Sidebar - Properties */}
        <div className="w-80 bg-gray-800 border-l border-gray-700 p-4">
          <h3 className="text-white font-semibold mb-4">Properties</h3>

          <div className="space-y-4">
            <div>
              <label className="block text-gray-300 text-sm mb-2">
                Element Type
              </label>
              <select className="w-full bg-gray-700 border border-gray-600 rounded-lg px-3 py-2 text-white">
                <option>Heading</option>
                <option>Paragraph</option>
                <option>Image</option>
                <option>Button</option>
              </select>
            </div>

            <div>
              <label className="block text-gray-300 text-sm mb-2">
                Text Content
              </label>
              <textarea
                className="w-full bg-gray-700 border border-gray-600 rounded-lg px-3 py-2 text-white resize-none"
                rows={3}
                placeholder="Enter text content..."
              />
            </div>

            <div>
              <label className="block text-gray-300 text-sm mb-2">
                Font Size
              </label>
              <div className="flex items-center space-x-2">
                <input
                  type="range"
                  min="12"
                  max="72"
                  defaultValue="16"
                  className="flex-1"
                />
                <span className="text-white text-sm w-8">16px</span>
              </div>
            </div>

            <div>
              <label className="block text-gray-300 text-sm mb-2">Color</label>
              <div className="flex items-center space-x-2">
                <input
                  type="color"
                  defaultValue="#000000"
                  className="w-8 h-8 rounded"
                />
                <input
                  type="text"
                  defaultValue="#000000"
                  className="flex-1 bg-gray-700 border border-gray-600 rounded px-2 py-1 text-white text-sm"
                />
              </div>
            </div>

            <div>
              <label className="block text-gray-300 text-sm mb-2">
                Spacing
              </label>
              <div className="grid grid-cols-2 gap-2">
                <div>
                  <label className="block text-gray-400 text-xs mb-1">
                    Margin
                  </label>
                  <input
                    type="number"
                    defaultValue="0"
                    className="w-full bg-gray-700 border border-gray-600 rounded px-2 py-1 text-white text-sm"
                  />
                </div>
                <div>
                  <label className="block text-gray-400 text-xs mb-1">
                    Padding
                  </label>
                  <input
                    type="number"
                    defaultValue="0"
                    className="w-full bg-gray-700 border border-gray-600 rounded px-2 py-1 text-white text-sm"
                  />
                </div>
              </div>
            </div>

            <div>
              <label className="block text-gray-300 text-sm mb-2">Border</label>
              <div className="space-y-2">
                <div className="flex items-center space-x-2">
                  <input
                    type="number"
                    placeholder="Width"
                    className="flex-1 bg-gray-700 border border-gray-600 rounded px-2 py-1 text-white text-sm"
                  />
                  <select className="flex-1 bg-gray-700 border border-gray-600 rounded px-2 py-1 text-white text-sm">
                    <option>Solid</option>
                    <option>Dashed</option>
                    <option>Dotted</option>
                  </select>
                </div>
                <input
                  type="color"
                  defaultValue="#cccccc"
                  className="w-full h-8 rounded"
                />
              </div>
            </div>

            <div>
              <label className="block text-gray-300 text-sm mb-2">
                Background
              </label>
              <div className="space-y-2">
                <input
                  type="color"
                  defaultValue="#ffffff"
                  className="w-full h-8 rounded"
                />
                <input
                  type="file"
                  accept="image/*"
                  className="w-full text-gray-300 text-sm"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Floating Widgets */}
      <AnimatePresence>
        {activeFloatingWidgets.map((widgetId) => {
          const widget = floatingWidgets.find((w) => w.id === widgetId);
          if (!widget) return null;

          const WidgetComponent = widget.component;
          return (
            <WidgetComponent
              key={widgetId}
              onClose={() => closeFloatingWidget(widgetId)}
            />
          );
        })}
      </AnimatePresence>

      {/* Grid Overlay */}
      {isGridVisible && (
        <div className="fixed inset-0 pointer-events-none z-10">
          <div
            className="w-full h-full"
            style={{
              backgroundImage: `
                linear-gradient(rgba(59, 130, 246, 0.1) 1px, transparent 1px),
                linear-gradient(90deg, rgba(59, 130, 246, 0.1) 1px, transparent 1px)
              `,
              backgroundSize: "20px 20px",
            }}
          />
        </div>
      )}
    </div>
  );
}
