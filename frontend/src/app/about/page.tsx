"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import {
  Target,
  Eye,
  Heart,
  Users,
  Award,
  TrendingUp,
  CheckCircle,
  Calendar,
  Globe,
  Zap,
  Lightbulb,
  Shield,
} from "lucide-react";

const aboutContent = {
  vi: {
    hero: {
      badge: "Về chúng tôi",
      title: "MSC - Nơi khơi nguồn tiềm năng",
      subtitle:
        "Chúng tôi tin rằng mỗi người đều có tiềm năng vô hạn. MSC ra đời với sứ mệnh đồng hành cùng bạn khám phá và phát triển tiềm năng đó.",
    },
    mission: {
      title: "Sứ mệnh",
      description:
        "Trao quyền cho mọi người phát triển tiềm năng vô hạn thông qua mentoring và coaching chuyên nghiệp, tạo ra những lãnh đạo tương lai.",
      icon: Target,
    },
    vision: {
      title: "Tầm nhìn",
      description:
        "Trở thành trung tâm mentoring & coaching hàng đầu Đông Nam Á, nơi kết nối những tâm hồn muốn phát triển với những chuyên gia xuất sắc.",
      icon: Eye,
    },
    values: {
      title: "Giá trị cốt lõi",
      list: [
        {
          title: "Tận tâm",
          description: "Chúng tôi đặt sự thành công của học viên lên hàng đầu",
          icon: Heart,
        },
        {
          title: "Chuyên nghiệp",
          description: "Áp dụng những phương pháp và công cụ hiện đại nhất",
          icon: Award,
        },
        {
          title: "Đổi mới",
          description: "Không ngừng cải tiến và sáng tạo trong cách tiếp cận",
          icon: Lightbulb,
        },
        {
          title: "Chính trực",
          description: "Luôn minh bạch và trung thực trong mọi hoạt động",
          icon: Shield,
        },
      ],
    },
    timeline: {
      title: "Hành trình phát triển",
      events: [
        {
          year: "2019",
          title: "Thành lập MSC",
          description: "Khởi đầu với đội ngũ 5 mentor và 20 học viên đầu tiên",
        },
        {
          year: "2020",
          title: "Mở rộng chương trình",
          description: "Ra mắt 10 khóa học chuyên môn và đạt 500 học viên",
        },
        {
          year: "2021",
          title: "Chuyển đổi số",
          description:
            "Phát triển nền tảng học tập trực tuyến và mentoring từ xa",
        },
        {
          year: "2022",
          title: "Mở rộng quốc tế",
          description:
            "Hợp tác với các tổ chức quốc tế và đón 50 mentor nước ngoài",
        },
        {
          year: "2023",
          title: "Ghi dấu ấn",
          description: "5000+ học viên thành công, 95% tỷ lệ hài lòng",
        },
        {
          year: "2024",
          title: "Tương lai rộng mở",
          description: "Mở rộng ra toàn khu vực Đông Nam Á",
        },
      ],
    },
    achievements: {
      title: "Thành tựu nổi bật",
      stats: [
        { number: "5000+", label: "Học viên thành công" },
        { number: "100+", label: "Chuyên gia mentor" },
        { number: "95%", label: "Tỷ lệ hài lòng" },
        { number: "50+", label: "Khóa học chuyên môn" },
        { number: "15+", label: "Giải thưởng uy tín" },
        { number: "3", label: "Quốc gia hoạt động" },
      ],
    },
  },
  en: {
    hero: {
      badge: "About Us",
      title: "MSC - Where potential ignites",
      subtitle:
        "We believe everyone has unlimited potential. MSC was born with the mission to accompany you in discovering and developing that potential.",
    },
    mission: {
      title: "Mission",
      description:
        "Empower everyone to develop unlimited potential through professional mentoring and coaching, creating future leaders.",
      icon: Target,
    },
    vision: {
      title: "Vision",
      description:
        "To become the leading mentoring & coaching center in Southeast Asia, connecting souls who want to develop with outstanding experts.",
      icon: Eye,
    },
    values: {
      title: "Core Values",
      list: [
        {
          title: "Dedication",
          description: "We put student success first",
          icon: Heart,
        },
        {
          title: "Professional",
          description: "Apply the most modern methods and tools",
          icon: Award,
        },
        {
          title: "Innovation",
          description: "Continuously improve and innovate in our approach",
          icon: Lightbulb,
        },
        {
          title: "Integrity",
          description: "Always transparent and honest in all activities",
          icon: Shield,
        },
      ],
    },
    timeline: {
      title: "Development Journey",
      events: [
        {
          year: "2019",
          title: "MSC Foundation",
          description: "Started with 5 mentors and first 20 students",
        },
        {
          year: "2020",
          title: "Program Expansion",
          description:
            "Launched 10 professional courses and reached 500 students",
        },
        {
          year: "2021",
          title: "Digital Transformation",
          description:
            "Developed online learning platform and remote mentoring",
        },
        {
          year: "2022",
          title: "International Expansion",
          description:
            "Partnered with international organizations and welcomed 50 foreign mentors",
        },
        {
          year: "2023",
          title: "Milestone Achievement",
          description: "5000+ successful students, 95% satisfaction rate",
        },
        {
          year: "2024",
          title: "Bright Future",
          description: "Expanding throughout Southeast Asia",
        },
      ],
    },
    achievements: {
      title: "Outstanding Achievements",
      stats: [
        { number: "5000+", label: "Successful students" },
        { number: "100+", label: "Expert mentors" },
        { number: "95%", label: "Satisfaction rate" },
        { number: "50+", label: "Professional courses" },
        { number: "15+", label: "Prestigious awards" },
        { number: "3", label: "Operating countries" },
      ],
    },
  },
};

export default function AboutPage() {
  const [language, setLanguage] = useState<"vi" | "en">("vi");

  useEffect(() => {
    const savedLanguage = localStorage.getItem("msc-language") as "vi" | "en";
    if (savedLanguage) {
      setLanguage(savedLanguage);
    }
  }, []);

  const content = aboutContent[language];

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

      {/* Mission & Vision */}
      <section className="py-32 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="msc-card group"
            >
              <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <Target className="w-8 h-8 text-white" />
              </div>

              <h2 className="text-3xl font-bold text-white mb-6 group-hover:text-blue-300 transition-colors duration-300">
                {content.mission.title}
              </h2>

              <p className="text-blue-100 text-lg leading-relaxed">
                {content.mission.description}
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="msc-card group"
            >
              <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <Eye className="w-8 h-8 text-white" />
              </div>

              <h2 className="text-3xl font-bold text-white mb-6 group-hover:text-purple-300 transition-colors duration-300">
                {content.vision.title}
              </h2>

              <p className="text-blue-100 text-lg leading-relaxed">
                {content.vision.description}
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-32 bg-white/5 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              <span className="gradient-text">{content.values.title}</span>
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {content.values.list.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="msc-card group text-center"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                  <value.icon className="w-8 h-8 text-white" />
                </div>

                <h3 className="text-xl font-bold text-white mb-4 group-hover:text-blue-300 transition-colors duration-300">
                  {value.title}
                </h3>

                <p className="text-blue-100 leading-relaxed">
                  {value.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-32 relative overflow-hidden">
        <div className="absolute inset-0 bg-dots opacity-10"></div>

        <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              <span className="gradient-text">{content.timeline.title}</span>
            </h2>
          </motion.div>

          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-1/2 transform -translate-x-px h-full w-0.5 bg-gradient-to-b from-blue-500 to-purple-600"></div>

            {content.timeline.events.map((event, index) => (
              <motion.div
                key={event.year}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
                className={`relative flex items-center mb-16 ${
                  index % 2 === 0 ? "justify-start" : "justify-end"
                }`}
              >
                {/* Timeline dot */}
                <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full border-4 border-gray-900 z-10"></div>

                {/* Content */}
                <div className={`w-5/12 ${index % 2 === 0 ? "pr-8" : "pl-8"}`}>
                  <div className="msc-card group">
                    <div className="text-2xl font-bold text-blue-300 mb-3 group-hover:text-blue-200 transition-colors duration-300">
                      {event.year}
                    </div>
                    <h3 className="text-xl font-bold text-white mb-3 group-hover:text-blue-300 transition-colors duration-300">
                      {event.title}
                    </h3>
                    <p className="text-blue-100 leading-relaxed">
                      {event.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Achievements */}
      <section className="py-32 bg-white/5 backdrop-blur-sm">
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
                {content.achievements.title}
              </span>
            </h2>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
            {content.achievements.stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.5 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center group"
              >
                <div className="text-3xl md:text-4xl font-bold text-white mb-2 group-hover:text-blue-300 transition-colors duration-300">
                  {stat.number}
                </div>
                <div className="text-blue-200 font-medium text-sm">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
