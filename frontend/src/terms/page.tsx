"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import {
  FileText,
  Scale,
  UserCheck,
  CreditCard,
  AlertTriangle,
  Shield,
  Gavel,
  RefreshCw,
  Ban,
  Mail,
  Phone,
  CheckCircle,
  XCircle,
  Info,
} from "lucide-react";

const termsContent = {
  vi: {
    hero: {
      title: "Điều khoản Dịch vụ",
      subtitle: "Các quy định và điều kiện sử dụng dịch vụ tại MSC",
      lastUpdated: "Có hiệu lực từ: 15/01/2024",
    },
    sections: [
      {
        id: "acceptance",
        title: "Chấp nhận Điều khoản",
        icon: UserCheck,
        content: [
          "Bằng cách truy cập và sử dụng website MSC, bạn đồng ý tuân thủ các điều khoản này.",
          "Nếu bạn không đồng ý với bất kỳ điều khoản nào, vui lòng kh��ng sử dụng dịch vụ của chúng tôi.",
          "Các điều khoản này áp dụng cho tất cả người dùng, học viên, mentors và đối tác.",
          "Việc đăng ký tài khoản hoặc tham gia khóa học được coi là chấp nhận đầy đủ các điều khoản.",
        ],
      },
      {
        id: "services",
        title: "Dịch vụ MSC",
        icon: FileText,
        content: [
          "Các khóa học trực tuyến và offline về phát triển kỹ năng, lãnh đạo, kinh doanh.",
          "Dịch vụ mentoring 1:1 với các chuyên gia hàng đầu trong nhiều lĩnh vực.",
          "Group coaching và workshop phát triển cá nhân, nghề nghiệp.",
          "Tư vấn doanh nghiệp và giải pháp đào tạo cho tổ chức.",
          "Nền tảng học tập trực tuyến với nội dung, tài liệu và công cụ hỗ trợ.",
          "Cộng đồng học viên và mạng lưới networking chuyên nghiệp.",
        ],
      },
      {
        id: "registration",
        title: "Đăng ký & Tài khoản",
        icon: UserCheck,
        content: [
          "Bạn phải từ 18 tuổi trở lên hoặc có sự đồng ý của cha mẹ/người giám hộ.",
          "Thông tin đăng ký phải chính xác, đầy đủ và được cập nhật kịp thời.",
          "Mỗi người chỉ được tạo một tài khoản duy nhất.",
          "Bạn chịu trách nhiệm bảo mật thông tin đăng nhập và mọi hoạt động trong tài khoản.",
          "MSC có quyền đình chỉ/xóa tài khoản vi phạm điều khoản.",
          "Thông báo ngay cho MSC nếu phát hiện tài khoản bị sử dụng trái phép.",
        ],
      },
      {
        id: "payment",
        title: "Thanh toán & Hoàn tiền",
        icon: CreditCard,
        content: [
          "Thanh toán đầy đủ trước khi tham gia khóa học hoặc sử dụng dịch vụ.",
          "Giá niêm yết bao gồm VAT, có thể thay đổi mà không cần báo trước.",
          "Hoàn tiền 100% nếu hủy trước 7 ngày bắt đầu khóa học.",
          "Hoàn tiền 70% nếu hủy trong 14 ngày đầu tiên của khóa học.",
          "Không hoàn tiền sau 30 ngày từ ngày bắt đầu khóa học.",
          "Hoàn tiền qua cùng phương thức thanh toán ban đầu trong 7-14 ngày làm việc.",
          "Các trường hợp đặc biệt sẽ được xem xét theo từng case cụ thể.",
        ],
      },
      {
        id: "conduct",
        title: "Quy t���c Ứng xử",
        icon: Shield,
        content: [
          "Tôn trọng mentors, học viên và nhân viên MSC.",
          "Không sử dụng ngôn ngữ thô tục, phân biệt chủng tộc, tôn giáo, giới tính.",
          "Không chia sẻ thông tin cá nhân của người khác mà không có sự đồng ý.",
          "Không ghi âm, quay phim các buổi học mà không được phép.",
          "Tích cực tham gia và duy trì tinh thần học tập tích cực.",
          "Báo cáo ngay các hành vi vi phạm cho ban quản lý.",
          "Tuân thủ các quy định riêng của từng khóa học/chương trình.",
        ],
      },
      {
        id: "intellectual",
        title: "Sở hữu Trí tuệ",
        icon: Scale,
        content: [
          "Tất cả nội dung khóa học, tài liệu thuộc bản quyền của MSC.",
          "Học viên được sử dụng nội dung cho mục đích học tập cá nhân.",
          "Nghiêm cấm sao chép, phân phối, bán lại nội dung cho bên thứ ba.",
          "Logo, thương hiệu MSC được bảo vệ bởi luật sở hữu trí tuệ.",
          "Học viên giữ bản quyền cho các sản phẩm/dự án cá nhân tạo ra.",
          "MSC có quyền sử dụng feedback, testimonial của học viên cho mục đích marketing.",
        ],
      },
      {
        id: "liability",
        title: "Trách nhiệm & Giới hạn",
        icon: AlertTriangle,
        content: [
          "MSC cam kết cung cấp dịch vụ chất lượng cao nhưng không đảm bảo kết quả cụ thể.",
          "Thành công của học viên phụ thuộc vào nỗ lực cá nhân và áp dụng kiến thức.",
          "MSC không chịu trách nhiệm cho thiệt hại gián tiếp, mất mát cơ hội kinh doanh.",
          "Trách nhiệm tối đa của MSC không vượt quá số tiền học viên đã thanh toán.",
          "Học viên tự chịu trách nhiệm về quyết định kinh doanh, đầu tư dựa trên kiến thức học được.",
          "MSC không đảm bảo tính liên tục, không gián đoạn của dịch vụ trực tuyến.",
        ],
      },
      {
        id: "termination",
        title: "Chấm dứt Dịch vụ",
        icon: Ban,
        content: [
          "Học viên có thể hủy tài khoản bất kỳ lúc nào theo chính sách hoàn tiền.",
          "MSC có quyền chấm dứt dịch vụ với học viên vi phạm điều khoản.",
          "Thông báo chấm dứt sẽ được gửi trước ít nhất 7 ngày (trừ vi phạm nghiêm trọng).",
          "Sau khi chấm dứt, quyền truy cập nội dung sẽ bị thu hồi.",
          "Các khoản thanh toán đã thực hiện không được hoàn lại (trừ trường hợp đặc biệt).",
          "Điều khoản về bảo mật, sở hữu trí tuệ vẫn có hiệu lực sau chấm dứt.",
        ],
      },
      {
        id: "updates",
        title: "Cập nhật Điều khoản",
        icon: RefreshCw,
        content: [
          "MSC có quyền cập nhật điều khoản để phù hợp với pháp luật và thực tiễn kinh doanh.",
          "Thông báo về thay đổi sẽ được gửi qua email và đăng trên website.",
          "Thay đổi có hiệu lực sau 30 ngày kể từ ngày thông báo.",
          "Việc tiếp tục sử dụng dịch vụ được coi là chấp nhận điều khoản mới.",
          "Nếu không đồng ý, học viên có thể chấm dứt sử dụng dịch vụ.",
          "Lịch sử các phiên bản điều khoản được lưu trữ và có thể truy cập.",
        ],
      },
      {
        id: "governing",
        title: "Luật áp dụng & Giải quyết Tranh chấp",
        icon: Gavel,
        content: [
          "Điều khoản này được điều chỉnh bởi pháp luật Việt Nam.",
          "Tranh chấp sẽ được giải quyết thông qua thương lượng thiện chí trước.",
          "Nếu không thương lượng được, sẽ đưa ra Trung tâm Trọng tài Quốc tế Việt Nam.",
          "Ngôn ngữ chính thức cho các thủ tục pháp lý là tiếng Việt.",
          "Tòa án có thẩm quyền tại TP. Hồ Chí Minh nếu cần thiết.",
          "Chi phí pháp lý sẽ do bên thua kiện chịu.",
        ],
      },
    ],
  },
  en: {
    hero: {
      title: "Terms of Service",
      subtitle: "Rules and conditions for using MSC services",
      lastUpdated: "Effective from: January 15, 2024",
    },
    sections: [
      {
        id: "acceptance",
        title: "Acceptance of Terms",
        icon: UserCheck,
        content: [
          "By accessing and using the MSC website, you agree to comply with these terms.",
          "If you do not agree with any terms, please do not use our services.",
          "These terms apply to all users, students, mentors and partners.",
          "Registration or course enrollment is considered full acceptance of the terms.",
        ],
      },
      // Other sections would be translated similarly...
    ],
  },
};

export default function TermsPage() {
  const [language, setLanguage] = useState<"vi" | "en">("vi");
  const [activeSection, setActiveSection] = useState("acceptance");

  useEffect(() => {
    const savedLanguage = localStorage.getItem("msc-language") as "vi" | "en";
    if (savedLanguage) {
      setLanguage(savedLanguage);
    }
  }, []);

  const content = termsContent[language];

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
            <div className="w-20 h-20 bg-gradient-to-br from-purple-500 to-pink-600 rounded-2xl flex items-center justify-center mx-auto mb-8">
              <Scale className="w-10 h-10 text-white" />
            </div>

            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              <span className="gradient-text">{content.hero.title}</span>
            </h1>

            <p className="text-xl text-blue-100 max-w-4xl mx-auto leading-relaxed mb-4">
              {content.hero.subtitle}
            </p>

            <p className="text-blue-300 text-sm">{content.hero.lastUpdated}</p>
          </motion.div>
        </div>
      </section>

      {/* Quick Summary */}
      <section className="py-16 bg-white/5 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="bg-blue-500/20 border border-blue-400/30 rounded-2xl p-8"
          >
            <div className="flex items-start space-x-4">
              <Info className="w-8 h-8 text-blue-300 flex-shrink-0 mt-1" />
              <div>
                <h2 className="text-2xl font-bold text-white mb-4">
                  {language === "vi" ? "Tóm tắt Điều khoản" : "Terms Summary"}
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-3">
                    <div className="flex items-center space-x-3">
                      <CheckCircle className="w-5 h-5 text-green-400" />
                      <span className="text-blue-100">
                        {language === "vi"
                          ? "Sử dụng dịch vụ cho mục đích học tập"
                          : "Use services for learning purposes"}
                      </span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <CheckCircle className="w-5 h-5 text-green-400" />
                      <span className="text-blue-100">
                        {language === "vi"
                          ? "Tôn trọng cộng đồng và mentors"
                          : "Respect community and mentors"}
                      </span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <CheckCircle className="w-5 h-5 text-green-400" />
                      <span className="text-blue-100">
                        {language === "vi"
                          ? "Thanh toán đầy đủ và đúng hạn"
                          : "Pay fully and on time"}
                      </span>
                    </div>
                  </div>
                  <div className="space-y-3">
                    <div className="flex items-center space-x-3">
                      <XCircle className="w-5 h-5 text-red-400" />
                      <span className="text-blue-100">
                        {language === "vi"
                          ? "Không sao chép, phân phối nội dung"
                          : "No copying, distributing content"}
                      </span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <XCircle className="w-5 h-5 text-red-400" />
                      <span className="text-blue-100">
                        {language === "vi"
                          ? "Không vi phạm quy tắc ứng xử"
                          : "No violating conduct rules"}
                      </span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <XCircle className="w-5 h-5 text-red-400" />
                      <span className="text-blue-100">
                        {language === "vi"
                          ? "Không chia sẻ tài khoản"
                          : "No sharing accounts"}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Table of Contents */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8"
          >
            <h2 className="text-2xl font-bold text-white mb-6">
              {language === "vi" ? "Mục lục" : "Table of Contents"}
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {content.sections.map((section, index) => (
                <motion.button
                  key={section.id}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  onClick={() => {
                    setActiveSection(section.id);
                    document
                      .getElementById(section.id)
                      ?.scrollIntoView({ behavior: "smooth" });
                  }}
                  className={`flex items-center space-x-3 p-4 rounded-xl transition-all duration-300 text-left ${
                    activeSection === section.id
                      ? "bg-purple-500 text-white"
                      : "bg-white/5 text-blue-200 hover:bg-white/10"
                  }`}
                >
                  <section.icon className="w-5 h-5" />
                  <span className="font-medium">{section.title}</span>
                </motion.button>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Content Sections */}
      <section className="pb-32">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-16">
            {content.sections.map((section, index) => (
              <motion.div
                key={section.id}
                id={section.id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8"
              >
                <div className="flex items-center space-x-4 mb-8">
                  <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-600 rounded-xl flex items-center justify-center">
                    <section.icon className="w-6 h-6 text-white" />
                  </div>
                  <h2 className="text-3xl font-bold text-white">
                    {section.title}
                  </h2>
                </div>

                <div className="space-y-4">
                  {section.content.map((paragraph, idx) => (
                    <motion.div
                      key={idx}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.6, delay: idx * 0.1 }}
                      viewport={{ once: true }}
                      className="flex items-start space-x-3"
                    >
                      <div className="w-2 h-2 bg-purple-400 rounded-full mt-2 flex-shrink-0"></div>
                      <p className="text-blue-100 leading-relaxed">
                        {paragraph}
                      </p>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-32 bg-white/5 backdrop-blur-sm">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold text-white mb-6">
              <span className="gradient-text">
                {language === "vi"
                  ? "Câu hỏi về Điều khoản?"
                  : "Questions about Terms?"}
              </span>
            </h2>

            <p className="text-xl text-blue-100 mb-12">
              {language === "vi"
                ? "Liên hệ với đội ngũ pháp chế của chúng tôi"
                : "Contact our legal team"}
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-2xl mx-auto">
              <motion.a
                href="mailto:legal@msc.vn"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="flex items-center justify-center space-x-3 p-6 bg-purple-600 hover:bg-purple-700 rounded-2xl text-white transition-all duration-300 group"
              >
                <Mail className="w-6 h-6 group-hover:animate-pulse" />
                <span className="font-semibold">legal@msc.vn</span>
              </motion.a>

              <motion.a
                href="tel:+842812345678"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="flex items-center justify-center space-x-3 p-6 bg-pink-600 hover:bg-pink-700 rounded-2xl text-white transition-all duration-300 group"
              >
                <Phone className="w-6 h-6 group-hover:animate-pulse" />
                <span className="font-semibold">+84 28 1234 5678</span>
              </motion.a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
