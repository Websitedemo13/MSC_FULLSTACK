"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  BookOpen,
  Users,
  Clock,
  Star,
  Award,
  Play,
  ChevronRight,
  Filter,
  Search,
  User,
  Calendar,
  DollarSign,
  Target,
  Lightbulb,
  TrendingUp,
  Globe,
  Heart,
  CheckCircle,
} from "lucide-react";

const trainingContent = {
  vi: {
    hero: {
      badge: "Đào tạo chuyên nghiệp",
      title: "Khóa học & Chương trình Mentoring",
      subtitle:
        "Phát triển kỹ năng và kiến thức với các chương trình được thiết kế bởi chuyên gia hàng đầu",
    },
    filters: {
      all: "Tất cả",
      beginner: "Cơ bản",
      intermediate: "Trung cấp",
      advanced: "Nâng cao",
      leadership: "Lãnh đạo",
      business: "Kinh doanh",
      personal: "Phát triển bản thân",
      technical: "Kỹ thuật",
    },
    courses: [
      {
        id: 1,
        title: "Leadership Excellence Program",
        description:
          "Chương trình phát triển kỹ năng lãnh đạo toàn diện cho các quản lý cấp trung và cao",
        level: "advanced",
        category: "leadership",
        duration: "12 tuần",
        students: 450,
        rating: 4.9,
        price: 12500000,
        instructor: "Dr. Nguyễn Minh Tuấn",
        image: "/courses/leadership.jpg",
        features: [
          "Mentoring 1:1 với CEO",
          "Case study thực tế",
          "Networking với lãnh đạo",
          "Chứng chỉ quốc tế",
        ],
        highlights: [
          "90% học viên được thăng chức",
          "Áp dụng tại 500+ doanh nghiệp",
          "Đánh giá 4.9/5 sao",
        ],
      },
      {
        id: 2,
        title: "Digital Marketing Mastery",
        description:
          "Làm chủ marketing số từ cơ bản đến nâng cao với các công cụ và chiến lược hiện đại",
        level: "intermediate",
        category: "business",
        duration: "8 tuần",
        students: 850,
        rating: 4.8,
        price: 8500000,
        instructor: "Ms. Trần Thị Hoa",
        image: "/courses/marketing.jpg",
        features: [
          "Thực hành trên dự án thật",
          "Công cụ analytics chuyên sâu",
          "Chiến lược content viral",
          "Portfolio cá nhân",
        ],
        highlights: [
          "ROI trung bình tăng 300%",
          "95% tìm được việc mới",
          "Hỗ trợ career coaching",
        ],
      },
      {
        id: 3,
        title: "Personal Branding Workshop",
        description:
          "Xây dựng thương hiệu cá nhân mạnh mẽ và thu hút cơ hội nghề nghiệp",
        level: "beginner",
        category: "personal",
        duration: "4 tuần",
        students: 650,
        rating: 4.7,
        price: 4500000,
        instructor: "Mr. Lê Văn Nam",
        image: "/courses/branding.jpg",
        features: [
          "Chiến lược LinkedIn hiệu quả",
          "Content creation skills",
          "Personal story telling",
          "Network building",
        ],
        highlights: [
          "Tăng 500% lượt xem profile",
          "Kết nối với 1000+ chuyên gia",
          "Cơ hội việc làm x5",
        ],
      },
      {
        id: 4,
        title: "Startup Acceleration Program",
        description:
          "Chương trình gia tốc cho các startup từ ý tưởng đến thực thi thành công",
        level: "advanced",
        category: "business",
        duration: "16 tuần",
        students: 250,
        rating: 4.9,
        price: 25000000,
        instructor: "CEO Panel",
        image: "/courses/startup.jpg",
        features: [
          "Funding preparation",
          "Pitch deck mastery",
          "Investor networking",
          "Legal & compliance",
        ],
        highlights: [
          "70% nhận được funding",
          "$2M tổng vốn huy động",
          "Mentor pool 100+ CEO",
        ],
      },
      {
        id: 5,
        title: "Emotional Intelligence Coaching",
        description:
          "Phát triển trí tuệ cảm xúc để cải thiện hiệu quả công việc và mối quan hệ",
        level: "intermediate",
        category: "personal",
        duration: "6 tuần",
        students: 380,
        rating: 4.8,
        price: 6500000,
        instructor: "Dr. Phạm Thị Lan",
        image: "/courses/eq.jpg",
        features: [
          "Đánh giá EQ chuyên sâu",
          "Kỹ năng giao tiếp hiệu quả",
          "Quản lý stress & burnout",
          "Team building skills",
        ],
        highlights: [
          "Cải thiện 85% mối quan hệ",
          "Giảm 60% stress công việc",
          "Tăng 40% hiệu suất làm việc",
        ],
      },
      {
        id: 6,
        title: "Data Science for Business",
        description:
          "Ứng dụng khoa học dữ liệu vào kinh doanh để ra quyết định thông minh",
        level: "advanced",
        category: "technical",
        duration: "10 tuần",
        students: 180,
        rating: 4.7,
        price: 15000000,
        instructor: "Prof. Hoàng Minh Đức",
        image: "/courses/data.jpg",
        features: [
          "Python & R programming",
          "Machine learning cơ bản",
          "Business intelligence",
          "Visualization tools",
        ],
        highlights: [
          "Salary increase 150%",
          "Career transition 90%",
          "Project portfolio đầy đủ",
        ],
      },
    ],
  },
  en: {
    hero: {
      badge: "Professional Training",
      title: "Courses & Mentoring Programs",
      subtitle:
        "Develop skills and knowledge with programs designed by leading experts",
    },
    filters: {
      all: "All",
      beginner: "Beginner",
      intermediate: "Intermediate",
      advanced: "Advanced",
      leadership: "Leadership",
      business: "Business",
      personal: "Personal Development",
      technical: "Technical",
    },
    courses: [
      {
        id: 1,
        title: "Leadership Excellence Program",
        description:
          "Comprehensive leadership development program for middle and senior managers",
        level: "advanced",
        category: "leadership",
        duration: "12 weeks",
        students: 450,
        rating: 4.9,
        price: 12500000,
        instructor: "Dr. Nguyen Minh Tuan",
        image: "/courses/leadership.jpg",
        features: [
          "1:1 Mentoring with CEO",
          "Real case studies",
          "Leadership networking",
          "International certification",
        ],
        highlights: [
          "90% students promoted",
          "Applied in 500+ companies",
          "Rated 4.9/5 stars",
        ],
      },
      {
        id: 2,
        title: "Digital Marketing Mastery",
        description:
          "Master digital marketing from basic to advanced with modern tools and strategies",
        level: "intermediate",
        category: "business",
        duration: "8 weeks",
        students: 850,
        rating: 4.8,
        price: 8500000,
        instructor: "Ms. Tran Thi Hoa",
        image: "/courses/marketing.jpg",
        features: [
          "Hands-on real projects",
          "Advanced analytics tools",
          "Viral content strategy",
          "Personal portfolio",
        ],
        highlights: [
          "Average ROI increase 300%",
          "95% found new jobs",
          "Career coaching support",
        ],
      },
      {
        id: 3,
        title: "Personal Branding Workshop",
        description:
          "Build a strong personal brand and attract career opportunities",
        level: "beginner",
        category: "personal",
        duration: "4 weeks",
        students: 650,
        rating: 4.7,
        price: 4500000,
        instructor: "Mr. Le Van Nam",
        image: "/courses/branding.jpg",
        features: [
          "Effective LinkedIn strategy",
          "Content creation skills",
          "Personal story telling",
          "Network building",
        ],
        highlights: [
          "500% profile views increase",
          "Connected with 1000+ experts",
          "5x job opportunities",
        ],
      },
      {
        id: 4,
        title: "Startup Acceleration Program",
        description:
          "Acceleration program for startups from idea to successful execution",
        level: "advanced",
        category: "business",
        duration: "16 weeks",
        students: 250,
        rating: 4.9,
        price: 25000000,
        instructor: "CEO Panel",
        image: "/courses/startup.jpg",
        features: [
          "Funding preparation",
          "Pitch deck mastery",
          "Investor networking",
          "Legal & compliance",
        ],
        highlights: [
          "70% received funding",
          "$2M total capital raised",
          "Mentor pool 100+ CEOs",
        ],
      },
      {
        id: 5,
        title: "Emotional Intelligence Coaching",
        description:
          "Develop emotional intelligence to improve work effectiveness and relationships",
        level: "intermediate",
        category: "personal",
        duration: "6 weeks",
        students: 380,
        rating: 4.8,
        price: 6500000,
        instructor: "Dr. Pham Thi Lan",
        image: "/courses/eq.jpg",
        features: [
          "In-depth EQ assessment",
          "Effective communication skills",
          "Stress & burnout management",
          "Team building skills",
        ],
        highlights: [
          "Improved 85% relationships",
          "Reduced 60% work stress",
          "Increased 40% work efficiency",
        ],
      },
      {
        id: 6,
        title: "Data Science for Business",
        description: "Apply data science to business for smart decision making",
        level: "advanced",
        category: "technical",
        duration: "10 weeks",
        students: 180,
        rating: 4.7,
        price: 15000000,
        instructor: "Prof. Hoang Minh Duc",
        image: "/courses/data.jpg",
        features: [
          "Python & R programming",
          "Basic machine learning",
          "Business intelligence",
          "Visualization tools",
        ],
        highlights: [
          "Salary increase 150%",
          "Career transition 90%",
          "Complete project portfolio",
        ],
      },
    ],
  },
};

export default function TrainingPage() {
  const [language, setLanguage] = useState<"vi" | "en">("vi");
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [selectedLevel, setSelectedLevel] = useState("all");
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    const savedLanguage = localStorage.getItem("msc-language") as "vi" | "en";
    if (savedLanguage) {
      setLanguage(savedLanguage);
    }
  }, []);

  const content = trainingContent[language];

  const filteredCourses = content.courses.filter((course) => {
    const matchesCategory =
      selectedCategory === "all" || course.category === selectedCategory;
    const matchesLevel =
      selectedLevel === "all" || course.level === selectedLevel;
    const matchesSearch =
      course.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      course.description.toLowerCase().includes(searchTerm.toLowerCase());

    return matchesCategory && matchesLevel && matchesSearch;
  });

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat("vi-VN", {
      style: "currency",
      currency: "VND",
    }).format(price);
  };

  const getLevelColor = (level: string) => {
    switch (level) {
      case "beginner":
        return "bg-green-500";
      case "intermediate":
        return "bg-yellow-500";
      case "advanced":
        return "bg-red-500";
      default:
        return "bg-blue-500";
    }
  };

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case "leadership":
        return Target;
      case "business":
        return TrendingUp;
      case "personal":
        return Heart;
      case "technical":
        return Globe;
      default:
        return BookOpen;
    }
  };

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="relative py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900">
          <div className="absolute inset-0 bg-grid opacity-20"></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="inline-flex items-center px-4 py-2 bg-blue-500/20 backdrop-blur-sm border border-blue-400/30 rounded-full text-blue-200 text-sm font-medium mb-6">
              <BookOpen className="w-4 h-4 mr-2" />
              {content.hero.badge}
            </span>

            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-8">
              <span className="gradient-text">{content.hero.title}</span>
            </h1>

            <p className="text-xl md:text-2xl text-blue-100 max-w-4xl mx-auto leading-relaxed">
              {content.hero.subtitle}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Filters */}
      <section className="py-16 bg-white/5 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-6 items-center justify-between">
            {/* Search */}
            <div className="relative w-full lg:w-96">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-blue-300 w-5 h-5" />
              <input
                type="text"
                placeholder={
                  language === "vi"
                    ? "Tìm kiếm khóa học..."
                    : "Search courses..."
                }
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-3 bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg text-white placeholder-blue-200 focus:outline-none focus:ring-2 focus:ring-blue-400"
              />
            </div>

            {/* Category Filter */}
            <div className="flex flex-wrap gap-2">
              {Object.entries(content.filters).map(([key, label]) => (
                <button
                  key={key}
                  onClick={() => setSelectedCategory(key)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                    selectedCategory === key
                      ? "bg-blue-500 text-white"
                      : "bg-white/10 text-blue-200 hover:bg-white/20"
                  }`}
                >
                  {label}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Courses Grid */}
      <section className="py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatePresence mode="wait">
            {filteredCourses.length === 0 ? (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="text-center py-20"
              >
                <BookOpen className="w-16 h-16 text-blue-400 mx-auto mb-4" />
                <h3 className="text-2xl font-bold text-white mb-2">
                  {language === "vi"
                    ? "Không tìm thấy khóa học"
                    : "No courses found"}
                </h3>
                <p className="text-blue-200">
                  {language === "vi"
                    ? "Thử thay đổi bộ lọc hoặc từ khóa tìm kiếm"
                    : "Try changing filters or search terms"}
                </p>
              </motion.div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {filteredCourses.map((course, index) => {
                  const CategoryIcon = getCategoryIcon(course.category);

                  return (
                    <motion.div
                      key={course.id}
                      initial={{ opacity: 0, y: 50 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -50 }}
                      transition={{ duration: 0.6, delay: index * 0.1 }}
                      className="msc-card group cursor-pointer h-full flex flex-col"
                    >
                      {/* Course Image */}
                      <div className="relative h-48 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl mb-6 overflow-hidden">
                        <div className="absolute inset-0 bg-black/20"></div>
                        <div className="absolute top-4 left-4 flex items-center space-x-2">
                          <span
                            className={`px-2 py-1 ${getLevelColor(course.level)} text-white text-xs font-semibold rounded-full`}
                          >
                            {
                              content.filters[
                                course.level as keyof typeof content.filters
                              ]
                            }
                          </span>
                          <div className="w-8 h-8 bg-white/20 backdrop-blur-sm rounded-lg flex items-center justify-center">
                            <CategoryIcon className="w-4 h-4 text-white" />
                          </div>
                        </div>
                        <div className="absolute bottom-4 right-4">
                          <div className="w-12 h-12 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full flex items-center justify-center group-hover:bg-white/20 transition-colors duration-300">
                            <Play className="w-6 h-6 text-white ml-1" />
                          </div>
                        </div>
                      </div>

                      {/* Course Info */}
                      <div className="flex-1 flex flex-col">
                        <h3 className="text-xl font-bold text-white mb-3 group-hover:text-blue-300 transition-colors duration-300">
                          {course.title}
                        </h3>

                        <p className="text-blue-100 mb-4 leading-relaxed flex-1">
                          {course.description}
                        </p>

                        {/* Course Stats */}
                        <div className="grid grid-cols-2 gap-4 mb-6">
                          <div className="flex items-center space-x-2">
                            <Clock className="w-4 h-4 text-blue-400" />
                            <span className="text-blue-200 text-sm">
                              {course.duration}
                            </span>
                          </div>
                          <div className="flex items-center space-x-2">
                            <Users className="w-4 h-4 text-blue-400" />
                            <span className="text-blue-200 text-sm">
                              {course.students}
                            </span>
                          </div>
                          <div className="flex items-center space-x-2">
                            <Star className="w-4 h-4 text-yellow-400 fill-current" />
                            <span className="text-blue-200 text-sm">
                              {course.rating}
                            </span>
                          </div>
                          <div className="flex items-center space-x-2">
                            <User className="w-4 h-4 text-blue-400" />
                            <span className="text-blue-200 text-sm">
                              {course.instructor}
                            </span>
                          </div>
                        </div>

                        {/* Features */}
                        <div className="mb-6">
                          <h4 className="text-sm font-semibold text-blue-300 mb-2">
                            {language === "vi" ? "Điểm nổi bật:" : "Features:"}
                          </h4>
                          <ul className="space-y-1">
                            {course.features.slice(0, 3).map((feature, idx) => (
                              <li
                                key={idx}
                                className="flex items-center space-x-2 text-blue-100 text-sm"
                              >
                                <CheckCircle className="w-3 h-3 text-green-400 flex-shrink-0" />
                                <span>{feature}</span>
                              </li>
                            ))}
                          </ul>
                        </div>

                        {/* Price and CTA */}
                        <div className="flex items-center justify-between pt-4 border-t border-white/10">
                          <div className="text-2xl font-bold text-white">
                            {formatPrice(course.price)}
                          </div>
                          <button className="btn-primary text-sm flex items-center group">
                            {language === "vi" ? "Đăng ký" : "Enroll"}
                            <ChevronRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform duration-300" />
                          </button>
                        </div>
                      </div>
                    </motion.div>
                  );
                })}
              </div>
            )}
          </AnimatePresence>
        </div>
      </section>
    </div>
  );
}
// Add any additional styles or components here if needed