"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion, useScroll, useTransform } from "framer-motion";
import {
  ArrowRight,
  Users,
  Award,
  Target,
  BookOpen,
  TrendingUp,
  CheckCircle,
  Star,
  Quote,
  Play,
  ChevronRight,
  Globe,
  Briefcase,
  GraduationCap,
  MessageCircle,
} from "lucide-react";

const heroContent = {
  vi: {
    badge: "Trung tâm Mentoring & Coaching #1 Việt Nam",
    title: "Khám phá tiềm năng vô hạn cùng MSC",
    subtitle:
      "Chúng tôi đồng hành cùng bạn trên hành trình phát triển sự nghiệp và cá nhân thông qua các chương trình mentoring, coaching và đào tạo chuyên sâu.",
    primaryCTA: "Bắt đầu hành trình",
    secondaryCTA: "Tìm hiểu thêm",
    watchVideo: "Xem video giới thiệu",
  },
  en: {
    badge: "#1 Mentoring & Coaching Center in Vietnam",
    title: "Discover unlimited potential with MSC",
    subtitle:
      "We accompany you on your career and personal development journey through mentoring, coaching and specialized training programs.",
    primaryCTA: "Start Your Journey",
    secondaryCTA: "Learn More",
    watchVideo: "Watch intro video",
  },
};

const statsData = {
  vi: [
    { number: "5000+", label: "Học viên thành công", icon: Users },
    { number: "95%", label: "Tỷ lệ hài lòng", icon: Award },
    { number: "100+", label: "Chuyên gia mentors", icon: Target },
    { number: "50+", label: "Khóa học chuyên môn", icon: BookOpen },
  ],
  en: [
    { number: "5000+", label: "Successful students", icon: Users },
    { number: "95%", label: "Satisfaction rate", icon: Award },
    { number: "100+", label: "Expert mentors", icon: Target },
    { number: "50+", label: "Professional courses", icon: BookOpen },
  ],
};

const featuresData = {
  vi: [
    {
      icon: GraduationCap,
      title: "Mentoring 1:1",
      description:
        "Được hướng dẫn trực tiếp bởi các chuyên gia hàng đầu trong lĩnh vực của bạn.",
      link: "/mentors",
    },
    {
      icon: Users,
      title: "Group Coaching",
      description:
        "Học hỏi và phát triển cùng nhóm trong môi trường tương tác cao.",
      link: "/training",
    },
    {
      icon: Briefcase,
      title: "Corporate Training",
      description: "Giải pháp đào tạo toàn diện cho doanh nghiệp và tổ chức.",
      link: "/projects",
    },
    {
      icon: Globe,
      title: "Online Platform",
      description:
        "Nền tảng học tập trực tuyến hiện đại với công nghệ tiên tiến.",
      link: "/training#online",
    },
  ],
  en: [
    {
      icon: GraduationCap,
      title: "1:1 Mentoring",
      description: "Direct guidance from leading experts in your field.",
      link: "/mentors",
    },
    {
      icon: Users,
      title: "Group Coaching",
      description:
        "Learn and develop with groups in highly interactive environments.",
      link: "/training",
    },
    {
      icon: Briefcase,
      title: "Corporate Training",
      description:
        "Comprehensive training solutions for businesses and organizations.",
      link: "/projects",
    },
    {
      icon: Globe,
      title: "Online Platform",
      description: "Modern online learning platform with advanced technology.",
      link: "/training#online",
    },
  ],
};

const testimonialsData = {
  vi: [
    {
      name: "Nguyễn Minh Anh",
      role: "Product Manager tại VinGroup",
      content:
        "MSC đã giúp tôi phát triển kỹ năng lãnh đạo và quản lý sản phẩm một cách toàn diện. Mentor của tôi luôn hỗ trợ tận tình.",
      rating: 5,
      avatar: "/avatars/user1.jpg",
    },
    {
      name: "Trần Hoàng Việt",
      role: "Founder & CEO Startup Tech",
      content:
        "Chương trình coaching tại MSC đã thay đổi hoàn toàn mindset kinh doanh của tôi. Doanh thu công ty tăng 300% sau 6 tháng.",
      rating: 5,
      avatar: "/avatars/user2.jpg",
    },
    {
      name: "Lê Thị Hương",
      role: "Digital Marketing Director",
      content:
        "Tôi đã tìm thấy định hướng sự nghiệp rõ ràng nhờ chương trình mentoring. Giờ đây tôi đã trở thành Director trong mơ.",
      rating: 5,
      avatar: "/avatars/user3.jpg",
    },
  ],
  en: [
    {
      name: "Nguyen Minh Anh",
      role: "Product Manager at VinGroup",
      content:
        "MSC helped me develop leadership and product management skills comprehensively. My mentor is always supportive.",
      rating: 5,
      avatar: "/avatars/user1.jpg",
    },
    {
      name: "Tran Hoang Viet",
      role: "Founder & CEO Tech Startup",
      content:
        "The coaching program at MSC completely changed my business mindset. Company revenue increased 300% after 6 months.",
      rating: 5,
      avatar: "/avatars/user2.jpg",
    },
    {
      name: "Le Thi Huong",
      role: "Digital Marketing Director",
      content:
        "I found clear career direction through the mentoring program. Now I have become the Director of my dreams.",
      rating: 5,
      avatar: "/avatars/user3.jpg",
    },
  ],
};

const ctaSectionData = {
  vi: {
    title: "Sẵn sàng bắt đầu hành trình của bạn?",
    subtitle: "Tham gia cùng hàng nghìn học viên đã thay đổi cuộc đời tại MSC",
    primaryCTA: "Đăng ký ngay",
    secondaryCTA: "Tư vấn miễn phí",
  },
  en: {
    title: "Ready to start your journey?",
    subtitle: "Join thousands of students who have changed their lives at MSC",
    primaryCTA: "Register Now",
    secondaryCTA: "Free Consultation",
  },
};

export default function HomePage() {
  const [language, setLanguage] = useState<"vi" | "en">("vi");
  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  useEffect(() => {
    const savedLanguage = localStorage.getItem("msc-language") as "vi" | "en";
    if (savedLanguage) {
      setLanguage(savedLanguage);
    }
  }, []);

  const hero = heroContent[language];
  const stats = statsData[language];
  const features = featuresData[language];
  const testimonials = testimonialsData[language];
  const cta = ctaSectionData[language];

  return (
    <div className="relative">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background with parallax effect */}
        <motion.div
          style={{ y, opacity }}
          className="absolute inset-0 bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900"
        >
          <div className="absolute inset-0 bg-grid opacity-20"></div>
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
        </motion.div>

        {/* Floating elements */}
        <div className="absolute inset-0 overflow-hidden">
          <motion.div
            animate={{
              y: [0, -20, 0],
              rotate: [0, 5, 0],
            }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
            className="absolute top-1/4 left-1/4 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl"
          />
          <motion.div
            animate={{
              y: [0, 20, 0],
              rotate: [0, -5, 0],
            }}
            transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
            className="absolute top-3/4 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl"
          />
        </div>

        {/* Hero Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mb-6"
          >
            <span className="inline-flex items-center px-4 py-2 bg-blue-500/20 backdrop-blur-sm border border-blue-400/30 rounded-full text-blue-200 text-sm font-medium">
              <Star className="w-4 h-4 mr-2 text-yellow-400" />
              {hero.badge}
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-8 max-w-4xl mx-auto"
          >
            <span className="gradient-text">{hero.title}</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-xl md:text-2xl text-blue-100 mb-12 max-w-3xl mx-auto leading-relaxed"
          >
            {hero.subtitle}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-4 justify-center mb-16"
          >
            <Link
              href="/training"
              className="btn-primary inline-flex items-center justify-center group"
            >
              {hero.primaryCTA}
              <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
            </Link>

            <Link
              href="/about"
              className="btn-secondary inline-flex items-center justify-center"
            >
              {hero.secondaryCTA}
            </Link>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="inline-flex items-center space-x-3 text-blue-200 hover:text-white transition-colors duration-300 cursor-pointer group"
          >
            <div className="w-12 h-12 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full flex items-center justify-center group-hover:bg-white/20 transition-colors duration-300">
              <Play className="w-6 h-6 ml-1" />
            </div>
            <span className="text-lg font-medium">{hero.watchVideo}</span>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-white/5 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center group"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <stat.icon className="w-8 h-8 text-white" />
                </div>
                <div className="text-3xl md:text-4xl font-bold text-white mb-2 group-hover:text-blue-300 transition-colors duration-300">
                  {stat.number}
                </div>
                <div className="text-blue-200 font-medium">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-32 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              <span className="gradient-text">
                {language === "vi"
                  ? "Dịch vụ chuyên nghiệp"
                  : "Professional Services"}
              </span>
            </h2>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto">
              {language === "vi"
                ? "Chúng tôi cung cấp giải pháp toàn diện cho sự phát triển cá nhân và nghề nghiệp"
                : "We provide comprehensive solutions for personal and professional development"}
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="msc-card group cursor-pointer"
              >
                <div className="w-14 h-14 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <feature.icon className="w-7 h-7 text-white" />
                </div>

                <h3 className="text-xl font-bold text-white mb-4 group-hover:text-blue-300 transition-colors duration-300">
                  {feature.title}
                </h3>

                <p className="text-blue-100 mb-6 leading-relaxed">
                  {feature.description}
                </p>

                <Link
                  href={feature.link}
                  className="inline-flex items-center text-blue-300 hover:text-blue-200 font-medium group-hover:gap-2 transition-all duration-300"
                >
                  <span>
                    {language === "vi" ? "Tìm hiểu thêm" : "Learn more"}
                  </span>
                  <ChevronRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform duration-300" />
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-32 bg-white/5 backdrop-blur-sm relative overflow-hidden">
        <div className="absolute inset-0 bg-dots opacity-10"></div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              <span className="gradient-text">
                {language === "vi"
                  ? "Câu chuyện thành công"
                  : "Success Stories"}
              </span>
            </h2>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto">
              {language === "vi"
                ? "Hàng nghìn học viên đã thay đổi cuộc đời nhờ chương trình của MSC"
                : "Thousands of students have changed their lives through MSC programs"}
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial.name}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="msc-card group"
              >
                <div className="flex items-center mb-4">
                  <Quote className="w-8 h-8 text-blue-400 mr-3" />
                  <div className="flex">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star
                        key={i}
                        className="w-5 h-5 text-yellow-400 fill-current"
                      />
                    ))}
                  </div>
                </div>

                <p className="text-blue-100 mb-6 leading-relaxed italic">
                  "{testimonial.content}"
                </p>

                <div className="flex items-center">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center mr-4">
                    <span className="text-white font-semibold text-lg">
                      {testimonial.name.charAt(0)}
                    </span>
                  </div>
                  <div>
                    <div className="text-white font-semibold">
                      {testimonial.name}
                    </div>
                    <div className="text-blue-200 text-sm">
                      {testimonial.role}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-32 relative">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-purple-600/20"></div>

        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              <span className="gradient-text">{cta.title}</span>
            </h2>

            <p className="text-xl text-blue-100 mb-12 max-w-2xl mx-auto">
              {cta.subtitle}
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="btn-primary inline-flex items-center justify-center group"
              >
                {cta.primaryCTA}
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
              </Link>

              <Link
                href="/contact"
                className="btn-secondary inline-flex items-center justify-center group"
              >
                <MessageCircle className="w-5 h-5 mr-2" />
                {cta.secondaryCTA}
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
