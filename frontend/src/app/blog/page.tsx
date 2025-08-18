"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import {
  BookOpen,
  Calendar,
  User,
  Clock,
  Tag,
  TrendingUp,
  Eye,
  MessageCircle,
  Heart,
  Share2,
  Search,
  Filter,
  ArrowRight,
} from "lucide-react";

const blogContent = {
  vi: {
    hero: {
      badge: "Blog & Insights",
      title: "Chia sẻ kiến thức",
      subtitle:
        "Khám phá những insights, xu hướng và best practices từ các chuyên gia hàng đầu",
    },
    categories: {
      all: "Tất cả",
      leadership: "Lãnh đạo",
      career: "Sự nghiệp",
      business: "Kinh doanh",
      technology: "Công nghệ",
      personal: "Phát triển bản thân",
      trends: "Xu hướng",
    },
    articles: [
      {
        id: 1,
        title: "10 Kỹ năng lãnh đạo thiết yếu trong thời đại số",
        excerpt:
          "Khám phá những kỹ năng quan trọng mà mọi leader cần có để thành công trong môi trường công việc hiện đại.",
        content:
          "Trong thời đại chuyển đổi số, các nhà lãnh đạo cần trang bị những kỹ năng mới để dẫn dắt team hiệu quả...",
        category: "leadership",
        author: "Dr. Nguyễn Minh Tuấn",
        publishDate: "2024-01-15",
        readTime: 8,
        views: 2500,
        likes: 156,
        comments: 23,
        image: "/blog/leadership-skills.jpg",
        tags: ["Leadership", "Digital Transformation", "Management"],
        featured: true,
      },
      {
        id: 2,
        title: "Cách xây dựng Personal Brand hiệu quả trên LinkedIn",
        excerpt:
          "Hướng dẫn chi tiết cách tạo dựng thương hiệu cá nhân chuyên nghiệp và thu hút cơ hội nghề nghiệp.",
        content:
          "Personal branding không chỉ là tạo ra một profile đẹp mà còn là việc xây dựng uy tín và mạng lưới...",
        category: "career",
        author: "Ms. Trần Thị Hoa",
        publishDate: "2024-01-12",
        readTime: 6,
        views: 3200,
        likes: 234,
        comments: 45,
        image: "/blog/personal-brand.jpg",
        tags: ["Personal Branding", "LinkedIn", "Career Development"],
        featured: false,
      },
      {
        id: 3,
        title: "Startup 101: Từ ý tưởng đến Product-Market Fit",
        excerpt:
          "Hành trình chi tiết từ việc validate ý tưởng kinh doanh đến khi tìm được product-market fit.",
        content:
          "Nhiều startup thất bại vì không hiểu rõ khách hàng của mình. Bài viết này sẽ hướng dẫn cách validate ý tưởng...",
        category: "business",
        author: "Mr. Lê Văn Nam",
        publishDate: "2024-01-10",
        readTime: 12,
        views: 1800,
        likes: 89,
        comments: 18,
        image: "/blog/startup-journey.jpg",
        tags: ["Startup", "Product-Market Fit", "Entrepreneurship"],
        featured: true,
      },
      {
        id: 4,
        title: "AI và Machine Learning: Tương lai của các ngành nghề",
        excerpt:
          "Phân tích tác động của AI/ML đến thị trường lao động và cách chuẩn bị cho tương lai.",
        content:
          "Trí tuệ nhân tạo đang thay đổi cách chúng ta làm việc. Những ngành nào sẽ bị tác động mạnh nhất...",
        category: "technology",
        author: "Prof. Nguyễn Thị Lan",
        publishDate: "2024-01-08",
        readTime: 10,
        views: 4100,
        likes: 298,
        comments: 67,
        image: "/blog/ai-future.jpg",
        tags: ["AI", "Machine Learning", "Future of Work"],
        featured: false,
      },
      {
        id: 5,
        title: "Emotional Intelligence: Chìa khóa thành công trong công việc",
        excerpt:
          "Tại sao EQ lại quan trọng hơn IQ trong môi trường làm việc hiện đại và cách phát triển EQ.",
        content:
          "Nghiên cứu cho thấy 90% top performers có EQ cao. Vậy làm thế nào để phát triển trí tuệ cảm xúc...",
        category: "personal",
        author: "Dr. Phạm Thị Lan",
        publishDate: "2024-01-05",
        readTime: 7,
        views: 2800,
        likes: 187,
        comments: 34,
        image: "/blog/emotional-intelligence.jpg",
        tags: ["EQ", "Soft Skills", "Personal Development"],
        featured: false,
      },
      {
        id: 6,
        title: "Xu hướng Remote Work và Future of Work 2024",
        excerpt:
          "Những thay đổi lớn trong cách thức làm việc và kỹ năng cần thiết cho tương lai.",
        content:
          "Remote work không chỉ là xu hư��ng tạm thời. Đây là một sự thay đổi căn bản trong cách thức làm việc...",
        category: "trends",
        author: "Ms. Hoàng Thị Mai",
        publishDate: "2024-01-03",
        readTime: 9,
        views: 3600,
        likes: 245,
        comments: 52,
        image: "/blog/remote-work.jpg",
        tags: ["Remote Work", "Future of Work", "Digital Nomad"],
        featured: true,
      },
    ],
  },
  en: {
    hero: {
      badge: "Blog & Insights",
      title: "Knowledge Sharing",
      subtitle:
        "Discover insights, trends and best practices from leading experts",
    },
    categories: {
      all: "All",
      leadership: "Leadership",
      career: "Career",
      business: "Business",
      technology: "Technology",
      personal: "Personal Development",
      trends: "Trends",
    },
    articles: [
      {
        id: 1,
        title: "10 Essential Leadership Skills in the Digital Age",
        excerpt:
          "Discover the important skills every leader needs to succeed in the modern work environment.",
        content:
          "In the digital transformation era, leaders need to equip new skills to effectively lead teams...",
        category: "leadership",
        author: "Dr. Nguyen Minh Tuan",
        publishDate: "2024-01-15",
        readTime: 8,
        views: 2500,
        likes: 156,
        comments: 23,
        image: "/blog/leadership-skills.jpg",
        tags: ["Leadership", "Digital Transformation", "Management"],
        featured: true,
      },
      {
        id: 2,
        title: "How to Build an Effective Personal Brand on LinkedIn",
        excerpt:
          "Detailed guide on creating a professional personal brand and attracting career opportunities.",
        content:
          "Personal branding is not just about creating a beautiful profile but building credibility and network...",
        category: "career",
        author: "Ms. Tran Thi Hoa",
        publishDate: "2024-01-12",
        readTime: 6,
        views: 3200,
        likes: 234,
        comments: 45,
        image: "/blog/personal-brand.jpg",
        tags: ["Personal Branding", "LinkedIn", "Career Development"],
        featured: false,
      },
      {
        id: 3,
        title: "Startup 101: From Idea to Product-Market Fit",
        excerpt:
          "Detailed journey from validating business ideas to finding product-market fit.",
        content:
          "Many startups fail because they don't understand their customers. This article will guide you on how to validate ideas...",
        category: "business",
        author: "Mr. Le Van Nam",
        publishDate: "2024-01-10",
        readTime: 12,
        views: 1800,
        likes: 89,
        comments: 18,
        image: "/blog/startup-journey.jpg",
        tags: ["Startup", "Product-Market Fit", "Entrepreneurship"],
        featured: true,
      },
      {
        id: 4,
        title: "AI and Machine Learning: The Future of Industries",
        excerpt:
          "Analysis of AI/ML impact on the job market and how to prepare for the future.",
        content:
          "Artificial intelligence is changing how we work. Which industries will be most affected...",
        category: "technology",
        author: "Prof. Nguyen Thi Lan",
        publishDate: "2024-01-08",
        readTime: 10,
        views: 4100,
        likes: 298,
        comments: 67,
        image: "/blog/ai-future.jpg",
        tags: ["AI", "Machine Learning", "Future of Work"],
        featured: false,
      },
      {
        id: 5,
        title: "Emotional Intelligence: Key to Success at Work",
        excerpt:
          "Why EQ is more important than IQ in modern workplace and how to develop EQ.",
        content:
          "Research shows 90% of top performers have high EQ. So how do you develop emotional intelligence...",
        category: "personal",
        author: "Dr. Pham Thi Lan",
        publishDate: "2024-01-05",
        readTime: 7,
        views: 2800,
        likes: 187,
        comments: 34,
        image: "/blog/emotional-intelligence.jpg",
        tags: ["EQ", "Soft Skills", "Personal Development"],
        featured: false,
      },
      {
        id: 6,
        title: "Remote Work Trends and Future of Work 2024",
        excerpt:
          "Major changes in working methods and skills needed for the future.",
        content:
          "Remote work is not just a temporary trend. This is a fundamental change in how we work...",
        category: "trends",
        author: "Ms. Hoang Thi Mai",
        publishDate: "2024-01-03",
        readTime: 9,
        views: 3600,
        likes: 245,
        comments: 52,
        image: "/blog/remote-work.jpg",
        tags: ["Remote Work", "Future of Work", "Digital Nomad"],
        featured: true,
      },
    ],
  },
};

export default function BlogPage() {
  const [language, setLanguage] = useState<"vi" | "en">("vi");
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    const savedLanguage = localStorage.getItem("msc-language") as "vi" | "en";
    if (savedLanguage) {
      setLanguage(savedLanguage);
    }
  }, []);

  const content = blogContent[language];

  const filteredArticles = content.articles.filter((article) => {
    const matchesCategory =
      selectedCategory === "all" || article.category === selectedCategory;
    const matchesSearch =
      article.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      article.excerpt.toLowerCase().includes(searchTerm.toLowerCase()) ||
      article.author.toLowerCase().includes(searchTerm.toLowerCase());

    return matchesCategory && matchesSearch;
  });

  const featuredArticles = filteredArticles.filter(
    (article) => article.featured,
  );
  const regularArticles = filteredArticles.filter(
    (article) => !article.featured,
  );

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString(language === "vi" ? "vi-VN" : "en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  };

  const getCategoryColor = (category: string) => {
    switch (category) {
      case "leadership":
        return "bg-blue-500";
      case "career":
        return "bg-green-500";
      case "business":
        return "bg-purple-500";
      case "technology":
        return "bg-orange-500";
      case "personal":
        return "bg-pink-500";
      case "trends":
        return "bg-teal-500";
      default:
        return "bg-gray-500";
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
                    ? "Tìm kiếm bài viết..."
                    : "Search articles..."
                }
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-3 bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg text-white placeholder-blue-200 focus:outline-none focus:ring-2 focus:ring-blue-400"
              />
            </div>

            {/* Category Filter */}
            <div className="flex flex-wrap gap-2">
              {Object.entries(content.categories).map(([key, label]) => (
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

      {/* Featured Articles */}
      {featuredArticles.length > 0 && (
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="mb-12"
            >
              <h2 className="text-3xl font-bold text-white mb-2">
                {language === "vi" ? "Bài viết nổi bật" : "Featured Articles"}
              </h2>
              <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full"></div>
            </motion.div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {featuredArticles.slice(0, 2).map((article, index) => (
                <motion.article
                  key={article.id}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  viewport={{ once: true }}
                  className="msc-card group cursor-pointer"
                >
                  {/* Article Image */}
                  <div className="relative h-64 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl mb-6 overflow-hidden">
                    <div className="absolute inset-0 bg-black/20"></div>
                    <div className="absolute top-4 left-4">
                      <span
                        className={`px-3 py-1 ${getCategoryColor(article.category)} text-white text-sm font-semibold rounded-full`}
                      >
                        {
                          content.categories[
                            article.category as keyof typeof content.categories
                          ]
                        }
                      </span>
                    </div>
                    <div className="absolute bottom-4 right-4">
                      <div className="flex items-center space-x-3 text-white text-sm">
                        <div className="flex items-center space-x-1">
                          <Eye className="w-4 h-4" />
                          <span>{article.views}</span>
                        </div>
                        <div className="flex items-center space-x-1">
                          <Heart className="w-4 h-4" />
                          <span>{article.likes}</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Article Content */}
                  <div className="mb-4">
                    <h3 className="text-xl font-bold text-white mb-3 group-hover:text-blue-300 transition-colors duration-300">
                      {article.title}
                    </h3>

                    <p className="text-blue-100 leading-relaxed mb-4">
                      {article.excerpt}
                    </p>
                  </div>

                  {/* Article Meta */}
                  <div className="flex items-center justify-between text-sm text-blue-200 mb-4">
                    <div className="flex items-center space-x-4">
                      <div className="flex items-center space-x-1">
                        <User className="w-4 h-4" />
                        <span>{article.author}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Calendar className="w-4 h-4" />
                        <span>{formatDate(article.publishDate)}</span>
                      </div>
                    </div>

                    <div className="flex items-center space-x-1">
                      <Clock className="w-4 h-4" />
                      <span>
                        {article.readTime} {language === "vi" ? "phút" : "min"}
                      </span>
                    </div>
                  </div>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {article.tags.slice(0, 3).map((tag, idx) => (
                      <span
                        key={idx}
                        className="px-2 py-1 bg-blue-500/20 text-blue-200 text-xs rounded-full"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Read More */}
                  <div className="flex items-center justify-between pt-4 border-t border-white/10">
                    <div className="flex items-center space-x-3 text-blue-200 text-sm">
                      <div className="flex items-center space-x-1">
                        <MessageCircle className="w-4 h-4" />
                        <span>{article.comments}</span>
                      </div>
                    </div>

                    <button className="flex items-center text-blue-300 hover:text-blue-200 font-medium group-hover:gap-2 transition-all duration-300">
                      <span>
                        {language === "vi" ? "Đọc tiếp" : "Read more"}
                      </span>
                      <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform duration-300" />
                    </button>
                  </div>
                </motion.article>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Regular Articles */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="mb-12"
          >
            <h2 className="text-3xl font-bold text-white mb-2">
              {language === "vi" ? "Tất cả bài viết" : "All Articles"}
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full"></div>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {regularArticles.map((article, index) => (
              <motion.article
                key={article.id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="msc-card group cursor-pointer h-full flex flex-col"
              >
                {/* Article Image */}
                <div className="relative h-48 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl mb-4 overflow-hidden">
                  <div className="absolute inset-0 bg-black/20"></div>
                  <div className="absolute top-3 left-3">
                    <span
                      className={`px-2 py-1 ${getCategoryColor(article.category)} text-white text-xs font-semibold rounded-full`}
                    >
                      {
                        content.categories[
                          article.category as keyof typeof content.categories
                        ]
                      }
                    </span>
                  </div>
                </div>

                {/* Article Content */}
                <div className="flex-1 flex flex-col">
                  <h3 className="text-lg font-bold text-white mb-2 group-hover:text-blue-300 transition-colors duration-300">
                    {article.title}
                  </h3>

                  <p className="text-blue-100 text-sm leading-relaxed mb-4 flex-1">
                    {article.excerpt}
                  </p>

                  {/* Article Meta */}
                  <div className="text-xs text-blue-200 mb-3 space-y-1">
                    <div className="flex items-center justify-between">
                      <span>{article.author}</span>
                      <span>
                        {article.readTime} {language === "vi" ? "phút" : "min"}
                      </span>
                    </div>
                    <div>{formatDate(article.publishDate)}</div>
                  </div>

                  {/* Stats */}
                  <div className="flex items-center justify-between pt-3 border-t border-white/10">
                    <div className="flex items-center space-x-3 text-blue-200 text-xs">
                      <div className="flex items-center space-x-1">
                        <Eye className="w-3 h-3" />
                        <span>{article.views}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Heart className="w-3 h-3" />
                        <span>{article.likes}</span>
                      </div>
                    </div>

                    <button className="text-blue-300 hover:text-blue-200 transition-colors duration-300">
                      <ArrowRight className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
