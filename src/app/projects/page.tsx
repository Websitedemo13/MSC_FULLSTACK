"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Briefcase,
  TrendingUp,
  Users,
  Award,
  Calendar,
  ExternalLink,
  Filter,
  Search,
  CheckCircle,
  Star,
  ArrowRight,
  Building,
  Globe,
  Target,
  Lightbulb,
  BarChart3,
  Zap,
} from "lucide-react";

const projectsContent = {
  vi: {
    hero: {
      badge: "Dự án & Tư vấn",
      title: "Portfolio Dự án Thành công",
      subtitle:
        "Khám phá các dự án đã được MSC thực hiện thành công cùng với khách hàng và đối tác",
    },
    filters: {
      all: "Tất cả",
      training: "Đào tạo",
      consulting: "Tư vấn",
      development: "Phát triển",
      technology: "Công nghệ",
      completed: "Hoàn thành",
      ongoing: "Đang thực hiện",
    },
    projects: [
      {
        id: 1,
        title: "Chuyển đổi số VinGroup",
        description:
          "Triển khai chương trình đào tạo digital transformation cho 5000+ nhân viên VinGroup",
        category: "training",
        status: "completed",
        client: "VinGroup",
        duration: "12 tháng",
        team: 25,
        budget: "15 tỷ VND",
        image: "/projects/vingroup.jpg",
        results: [
          "Đào tạo 5,200 nhân viên",
          "Tăng 85% hiệu suất làm việc",
          "Tiết kiệm 30% chi phí vận hành",
          "Triển khai 50+ quy trình số",
        ],
        technologies: [
          "Learning Management System",
          "AI Coaching",
          "VR Training",
        ],
        testimonial: {
          content:
            "MSC đã giúp VinGroup thực hiện chuyển đổi số một cách toàn diện và hiệu quả.",
          author: "Nguyễn Minh Anh",
          position: "Chief Digital Officer, VinGroup",
        },
        mentor: "Dr. Nguyễn Tuấn Anh",
      },
      {
        id: 2,
        title: "Startup Acceleration FPT",
        description:
          "Chương trình gia tốc startup cho 50 dự án khởi nghiệp công nghệ tại FPT",
        category: "development",
        status: "completed",
        client: "FPT Corporation",
        duration: "6 tháng",
        team: 15,
        budget: "8 tỷ VND",
        image: "/projects/fpt.jpg",
        results: [
          "50 startup tham gia",
          "35 startup nhận funding",
          "$5M tổng vốn huy động",
          "200+ việc làm được tạo",
        ],
        technologies: [
          "Pitch Training",
          "Business Model Canvas",
          "Investor Matching",
        ],
        testimonial: {
          content:
            "Chương trình của MSC đã thay đổi hoàn toàn ecosystem startup tại FPT.",
          author: "Trần Văn Hùng",
          position: "Director of Innovation, FPT",
        },
        mentor: "Mr. Lê Minh Quang",
      },
      {
        id: 3,
        title: "Leadership Development Techcombank",
        description:
          "Phát triển đội ngũ lãnh đạo cấp cao cho ngân hàng Techcombank",
        category: "consulting",
        status: "completed",
        client: "Techcombank",
        duration: "18 tháng",
        team: 20,
        budget: "12 tỷ VND",
        image: "/projects/techcombank.jpg",
        results: [
          "150 lãnh đạo được đào tạo",
          "40% cải thiện hiệu suất team",
          "90% retention rate",
          "Top 10 nơi làm việc tốt nhất",
        ],
        technologies: [
          "360 Assessment",
          "Executive Coaching",
          "Leadership Simulation",
        ],
        testimonial: {
          content:
            "MSC đã nâng tầm khả năng lãnh đạo của đội ngũ quản lý Techcombank.",
          author: "Phạm Quang Dũng",
          position: "CEO, Techcombank",
        },
        mentor: "Prof. Nguyễn Thị Hoa",
      },
      {
        id: 4,
        title: "Digital Marketing AEON Vietnam",
        description:
          "Xây dựng và triển khai chiến lược marketing số cho chuỗi bán lẻ AEON",
        category: "consulting",
        status: "ongoing",
        client: "AEON Vietnam",
        duration: "10 tháng",
        team: 18,
        budget: "9 tỷ VND",
        image: "/projects/aeon.jpg",
        results: [
          "Tăng 300% traffic online",
          "ROI campaign tăng 250%",
          "500K khách hàng mới",
          "Omnichannel experience",
        ],
        technologies: [
          "Marketing Automation",
          "Customer Analytics",
          "Social Commerce",
        ],
        testimonial: {
          content:
            "Chiến lược của MSC đã giúp AEON tiếp cận khách hàng hiệu quả hơn.",
          author: "Yamada Takeshi",
          position: "Marketing Director, AEON Vietnam",
        },
        mentor: "Ms. Trần Thị Mai",
      },
      {
        id: 5,
        title: "AI Training Platform Viettel",
        description: "Phát triển nền tảng đào tạo AI cho 10,000+ kỹ sư Viettel",
        category: "technology",
        status: "ongoing",
        client: "Viettel Group",
        duration: "24 tháng",
        team: 30,
        budget: "25 tỷ VND",
        image: "/projects/viettel.jpg",
        results: [
          "Nền tảng AI training",
          "10,000 kỹ sư tham gia",
          "100+ AI use cases",
          "R&D capability x3",
        ],
        technologies: [
          "Machine Learning",
          "Deep Learning",
          "Computer Vision",
          "NLP",
        ],
        testimonial: {
          content:
            "MSC đã giúp Viettel xây dựng năng lực AI vượt trội trong ngành.",
          author: "Lê Đăng Dũng",
          position: "CTO, Viettel Group",
        },
        mentor: "Dr. Phạm Minh Tuấn",
      },
      {
        id: 6,
        title: "ESG Consulting Masan Group",
        description:
          "Tư vấn chiến lược ESG và phát triển bền vững cho Masan Group",
        category: "consulting",
        status: "completed",
        client: "Masan Group",
        duration: "8 tháng",
        team: 12,
        budget: "6 tỷ VND",
        image: "/projects/masan.jpg",
        results: [
          "ESG framework hoàn chỉnh",
          "Carbon neutral roadmap",
          "Sustainability report",
          "ESG rating improvement",
        ],
        technologies: [
          "ESG Assessment",
          "Sustainability Planning",
          "Impact Measurement",
        ],
        testimonial: {
          content: "MSC đã hỗ trợ Masan xây dựng chiến lược ESG toàn diện.",
          author: "Nguyễn Đăng Quang",
          position: "Chairman, Masan Group",
        },
        mentor: "Dr. Lê Thị Hương",
      },
    ],
  },
  en: {
    hero: {
      badge: "Projects & Consulting",
      title: "Successful Project Portfolio",
      subtitle:
        "Explore projects successfully implemented by MSC with clients and partners",
    },
    filters: {
      all: "All",
      training: "Training",
      consulting: "Consulting",
      development: "Development",
      technology: "Technology",
      completed: "Completed",
      ongoing: "Ongoing",
    },
    projects: [
      {
        id: 1,
        title: "VinGroup Digital Transformation",
        description:
          "Implement digital transformation training program for 5000+ VinGroup employees",
        category: "training",
        status: "completed",
        client: "VinGroup",
        duration: "12 months",
        team: 25,
        budget: "15 billion VND",
        image: "/projects/vingroup.jpg",
        results: [
          "Trained 5,200 employees",
          "85% work efficiency increase",
          "30% operational cost savings",
          "Deployed 50+ digital processes",
        ],
        technologies: [
          "Learning Management System",
          "AI Coaching",
          "VR Training",
        ],
        testimonial: {
          content:
            "MSC helped VinGroup implement digital transformation comprehensively and effectively.",
          author: "Nguyen Minh Anh",
          position: "Chief Digital Officer, VinGroup",
        },
        mentor: "Dr. Nguyen Tuan Anh",
      },
      {
        id: 2,
        title: "FPT Startup Acceleration",
        description:
          "Startup acceleration program for 50 tech startup projects at FPT",
        category: "development",
        status: "completed",
        client: "FPT Corporation",
        duration: "6 months",
        team: 15,
        budget: "8 billion VND",
        image: "/projects/fpt.jpg",
        results: [
          "50 startups participated",
          "35 startups received funding",
          "$5M total capital raised",
          "200+ jobs created",
        ],
        technologies: [
          "Pitch Training",
          "Business Model Canvas",
          "Investor Matching",
        ],
        testimonial: {
          content:
            "MSC program completely changed the startup ecosystem at FPT.",
          author: "Tran Van Hung",
          position: "Director of Innovation, FPT",
        },
        mentor: "Mr. Le Minh Quang",
      },
      {
        id: 3,
        title: "Techcombank Leadership Development",
        description: "Develop senior leadership team for Techcombank",
        category: "consulting",
        status: "completed",
        client: "Techcombank",
        duration: "18 months",
        team: 20,
        budget: "12 billion VND",
        image: "/projects/techcombank.jpg",
        results: [
          "150 leaders trained",
          "40% team performance improvement",
          "90% retention rate",
          "Top 10 best workplace",
        ],
        technologies: [
          "360 Assessment",
          "Executive Coaching",
          "Leadership Simulation",
        ],
        testimonial: {
          content:
            "MSC elevated the leadership capabilities of Techcombank management team.",
          author: "Pham Quang Dung",
          position: "CEO, Techcombank",
        },
        mentor: "Prof. Nguyen Thi Hoa",
      },
      {
        id: 4,
        title: "AEON Vietnam Digital Marketing",
        description:
          "Build and implement digital marketing strategy for AEON retail chain",
        category: "consulting",
        status: "ongoing",
        client: "AEON Vietnam",
        duration: "10 months",
        team: 18,
        budget: "9 billion VND",
        image: "/projects/aeon.jpg",
        results: [
          "300% online traffic increase",
          "250% campaign ROI increase",
          "500K new customers",
          "Omnichannel experience",
        ],
        technologies: [
          "Marketing Automation",
          "Customer Analytics",
          "Social Commerce",
        ],
        testimonial: {
          content: "MSC strategy helped AEON reach customers more effectively.",
          author: "Yamada Takeshi",
          position: "Marketing Director, AEON Vietnam",
        },
        mentor: "Ms. Tran Thi Mai",
      },
      {
        id: 5,
        title: "Viettel AI Training Platform",
        description:
          "Develop AI training platform for 10,000+ Viettel engineers",
        category: "technology",
        status: "ongoing",
        client: "Viettel Group",
        duration: "24 months",
        team: 30,
        budget: "25 billion VND",
        image: "/projects/viettel.jpg",
        results: [
          "AI training platform",
          "10,000 engineers participating",
          "100+ AI use cases",
          "R&D capability x3",
        ],
        technologies: [
          "Machine Learning",
          "Deep Learning",
          "Computer Vision",
          "NLP",
        ],
        testimonial: {
          content:
            "MSC helped Viettel build superior AI capabilities in the industry.",
          author: "Le Dang Dung",
          position: "CTO, Viettel Group",
        },
        mentor: "Dr. Pham Minh Tuan",
      },
      {
        id: 6,
        title: "Masan Group ESG Consulting",
        description:
          "ESG strategy consulting and sustainable development for Masan Group",
        category: "consulting",
        status: "completed",
        client: "Masan Group",
        duration: "8 months",
        team: 12,
        budget: "6 billion VND",
        image: "/projects/masan.jpg",
        results: [
          "Complete ESG framework",
          "Carbon neutral roadmap",
          "Sustainability report",
          "ESG rating improvement",
        ],
        technologies: [
          "ESG Assessment",
          "Sustainability Planning",
          "Impact Measurement",
        ],
        testimonial: {
          content:
            "MSC supported Masan in building comprehensive ESG strategy.",
          author: "Nguyen Dang Quang",
          position: "Chairman, Masan Group",
        },
        mentor: "Dr. Le Thi Huong",
      },
    ],
  },
};

export default function ProjectsPage() {
  const [language, setLanguage] = useState<"vi" | "en">("vi");
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [selectedStatus, setSelectedStatus] = useState("all");
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    const savedLanguage = localStorage.getItem("msc-language") as "vi" | "en";
    if (savedLanguage) {
      setLanguage(savedLanguage);
    }
  }, []);

  const content = projectsContent[language];

  const filteredProjects = content.projects.filter((project) => {
    const matchesCategory =
      selectedCategory === "all" || project.category === selectedCategory;
    const matchesStatus =
      selectedStatus === "all" || project.status === selectedStatus;
    const matchesSearch =
      project.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      project.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
      project.client.toLowerCase().includes(searchTerm.toLowerCase());

    return matchesCategory && matchesStatus && matchesSearch;
  });

  const getStatusColor = (status: string) => {
    return status === "completed" ? "bg-green-500" : "bg-yellow-500";
  };

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case "training":
        return Users;
      case "consulting":
        return Target;
      case "development":
        return TrendingUp;
      case "technology":
        return Zap;
      default:
        return Briefcase;
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
              <Briefcase className="w-4 h-4 mr-2" />
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
                  language === "vi" ? "Tìm kiếm dự án..." : "Search projects..."
                }
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-3 bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg text-white placeholder-blue-200 focus:outline-none focus:ring-2 focus:ring-blue-400"
              />
            </div>

            {/* Filters */}
            <div className="flex flex-wrap gap-2">
              <div className="flex gap-1">
                {[
                  "all",
                  "training",
                  "consulting",
                  "development",
                  "technology",
                ].map((category) => (
                  <button
                    key={category}
                    onClick={() => setSelectedCategory(category)}
                    className={`px-3 py-1.5 rounded-full text-sm font-medium transition-all duration-300 ${
                      selectedCategory === category
                        ? "bg-blue-500 text-white"
                        : "bg-white/10 text-blue-200 hover:bg-white/20"
                    }`}
                  >
                    {content.filters[category as keyof typeof content.filters]}
                  </button>
                ))}
              </div>

              <div className="flex gap-1">
                {["all", "completed", "ongoing"].map((status) => (
                  <button
                    key={status}
                    onClick={() => setSelectedStatus(status)}
                    className={`px-3 py-1.5 rounded-full text-sm font-medium transition-all duration-300 ${
                      selectedStatus === status
                        ? "bg-purple-500 text-white"
                        : "bg-white/10 text-blue-200 hover:bg-white/20"
                    }`}
                  >
                    {content.filters[status as keyof typeof content.filters]}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatePresence mode="wait">
            {filteredProjects.length === 0 ? (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="text-center py-20"
              >
                <Briefcase className="w-16 h-16 text-blue-400 mx-auto mb-4" />
                <h3 className="text-2xl font-bold text-white mb-2">
                  {language === "vi"
                    ? "Không tìm thấy dự án"
                    : "No projects found"}
                </h3>
                <p className="text-blue-200">
                  {language === "vi"
                    ? "Thử thay đổi bộ lọc hoặc từ khóa tìm kiếm"
                    : "Try changing filters or search terms"}
                </p>
              </motion.div>
            ) : (
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {filteredProjects.map((project, index) => {
                  const CategoryIcon = getCategoryIcon(project.category);

                  return (
                    <motion.div
                      key={project.id}
                      initial={{ opacity: 0, y: 50 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -50 }}
                      transition={{ duration: 0.6, delay: index * 0.1 }}
                      className="msc-card group cursor-pointer"
                    >
                      {/* Project Header */}
                      <div className="flex items-start justify-between mb-6">
                        <div className="flex items-center space-x-3">
                          <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                            <CategoryIcon className="w-6 h-6 text-white" />
                          </div>
                          <div>
                            <h3 className="text-xl font-bold text-white group-hover:text-blue-300 transition-colors duration-300">
                              {project.title}
                            </h3>
                            <p className="text-blue-200 text-sm">
                              {project.client}
                            </p>
                          </div>
                        </div>

                        <div className="flex items-center space-x-2">
                          <span
                            className={`px-2 py-1 ${getStatusColor(project.status)} text-white text-xs font-semibold rounded-full`}
                          >
                            {
                              content.filters[
                                project.status as keyof typeof content.filters
                              ]
                            }
                          </span>
                        </div>
                      </div>

                      {/* Project Description */}
                      <p className="text-blue-100 mb-6 leading-relaxed">
                        {project.description}
                      </p>

                      {/* Project Stats */}
                      <div className="grid grid-cols-2 gap-4 mb-6">
                        <div className="flex items-center space-x-2">
                          <Calendar className="w-4 h-4 text-blue-400" />
                          <span className="text-blue-200 text-sm">
                            {project.duration}
                          </span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Users className="w-4 h-4 text-blue-400" />
                          <span className="text-blue-200 text-sm">
                            {project.team}{" "}
                            {language === "vi" ? "thành viên" : "members"}
                          </span>
                        </div>
                      </div>

                      {/* Results */}
                      <div className="mb-6">
                        <h4 className="text-sm font-semibold text-blue-300 mb-3">
                          {language === "vi"
                            ? "Kết quả đạt được:"
                            : "Results achieved:"}
                        </h4>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                          {project.results.map((result, idx) => (
                            <div
                              key={idx}
                              className="flex items-center space-x-2 text-blue-100 text-sm"
                            >
                              <CheckCircle className="w-3 h-3 text-green-400 flex-shrink-0" />
                              <span>{result}</span>
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* Technologies */}
                      <div className="mb-6">
                        <h4 className="text-sm font-semibold text-blue-300 mb-2">
                          {language === "vi"
                            ? "Công nghệ/Phương pháp:"
                            : "Technologies/Methods:"}
                        </h4>
                        <div className="flex flex-wrap gap-2">
                          {project.technologies.map((tech, idx) => (
                            <span
                              key={idx}
                              className="px-2 py-1 bg-blue-500/20 text-blue-200 text-xs rounded-full"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>

                      {/* Testimonial */}
                      <div className="border-t border-white/10 pt-6">
                        <div className="flex items-start space-x-3">
                          <div className="w-8 h-8 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-full flex items-center justify-center flex-shrink-0">
                            <Star className="w-4 h-4 text-white fill-current" />
                          </div>
                          <div className="flex-1">
                            <p className="text-blue-100 text-sm italic mb-2">
                              "{project.testimonial.content}"
                            </p>
                            <div className="text-blue-300 text-xs font-medium">
                              {project.testimonial.author}
                            </div>
                            <div className="text-blue-400 text-xs">
                              {project.testimonial.position}
                            </div>
                          </div>
                        </div>
                      </div>

                      {/* Mentor */}
                      <div className="flex items-center justify-between pt-4 border-t border-white/10 mt-4">
                        <div className="text-sm text-blue-200">
                          <span className="font-medium">Mentor: </span>
                          {project.mentor}
                        </div>
                        <button className="flex items-center text-blue-300 hover:text-blue-200 text-sm font-medium group-hover:gap-2 transition-all duration-300">
                          <span>
                            {language === "vi" ? "Chi tiết" : "Details"}
                          </span>
                          <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform duration-300" />
                        </button>
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
