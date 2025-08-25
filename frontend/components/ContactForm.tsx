'use client'

import type React from "react"
import { useState } from "react"
import { motion, Variants } from "framer-motion"
import { Send, MapPin, Phone, Mail, Clock, Facebook, MessageSquare, ArrowRight } from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

interface FormData {
  name: string
  email: string
  phone: string
  message: string
}

export default function ContactPage() {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    phone: "",
    message: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<"success" | "error" | null>(null)

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitStatus(null)
    
    // Giả lập API call
    await new Promise((resolve) => setTimeout(resolve, 1500))

    // Logic xử lý form thực tế sẽ nằm ở đây (ví dụ: gửi đến API)
    console.log("Form submitted:", formData)
    
    // Giả lập kết quả
    setSubmitStatus("success")
    setFormData({ name: "", email: "", phone: "", message: "" })
    setIsSubmitting(false)
  }

  // Dữ liệu liên hệ chính xác
  const contactInfo = [
    { icon: MapPin, title: "Địa chỉ", lines: ["279 Nguyễn Tri Phương, Phường 5,", "Phường Diên Hồng,  TP. Hồ Chí Minh"] },
    { icon: Phone, title: "Điện thoại", lines: ["(+84) 329 381 489"], link: "tel:+84329381489" },
    { icon: Mail, title: "Email", lines: ["msc.edu.vn@gmail.com"], link: "mailto:msc.edu.vn@gmail.com" },
    { icon: Clock, title: "Giờ làm việc", lines: ["Thứ 2 - Thứ 7: 8:00 - 17:30", "Chủ nhật: Nghỉ"] },
  ]
  
  const socialLinks = [
    { icon: Facebook, name: "Facebook", href: "https://www.facebook.com/msc.edu.vn" },
    { icon: MessageSquare, name: "Zalo", href: "https://zalo.me/g/acumou501" },
  ]

  return (
    <div className="min-h-screen bg-gray-50 pt-20">
      {/* Enhanced Hero Section */}
      <section className="relative py-32 bg-gradient-to-br from-blue-900 via-purple-900 to-teal-900 text-white overflow-hidden">
        {/* Animated Background Elements */}
        <div className="absolute inset-0">
          {[...Array(8)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-32 h-32 bg-white/5 rounded-full"
              animate={{
                x: [0, 100, 0],
                y: [0, -100, 0],
                scale: [1, 1.2, 1],
                opacity: [0.1, 0.3, 0.1],
              }}
              transition={{
                duration: 8 + i * 2,
                repeat: Number.POSITIVE_INFINITY,
                ease: "easeInOut",
              }}
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
            />
          ))}
        </div>

        <div className="container relative z-10">
          <motion.div
            className="text-center max-w-5xl mx-auto"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.div
              className="inline-block bg-gradient-to-r from-orange-500 to-pink-500 p-4 rounded-full mb-8"
              whileHover={{ scale: 1.1, rotate: 360 }}
              transition={{ duration: 0.5 }}
            >
              <Send className="h-16 w-16 text-white" />
            </motion.div>

            <motion.h1
              className="text-6xl md:text-8xl lg:text-9xl font-bold mb-8 font-serif"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, delay: 0.2 }}
            >
              <span className="bg-gradient-to-r from-white via-blue-200 to-orange-300 bg-clip-text text-transparent">
                Kết nối
              </span>
              <br />
              <span className="bg-gradient-to-r from-orange-300 via-pink-400 to-purple-400 bg-clip-text text-transparent">
                với MSC
              </span>
            </motion.h1>

            <motion.p
              className="text-2xl md:text-3xl text-blue-100 mb-12 leading-relaxed max-w-4xl mx-auto"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.4 }}
              style={{
                textShadow: '0 0 20px rgba(255,255,255,0.3)',
              }}
            >
              Chúng tôi luôn sẵn sàng lắng nghe và tư vấn. Hãy để lại lời nhắn hoặc liên hệ trực tiếp để bắt đầu hành trình phát triển của bạn.
            </motion.p>

            {/* Quick Contact Stats */}
            <motion.div
              className="flex flex-wrap justify-center gap-6 mb-8"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.6 }}
            >
              {[
                { stat: "< 2h", label: "Phản hồi nhanh" },
                { stat: "24/7", label: "Hỗ trợ tư vấn" },
                { stat: "100%", label: "Miễn phí" }
              ].map((item, index) => (
                <motion.div
                  key={index}
                  className="text-center backdrop-blur-sm bg-white/10 rounded-xl px-6 py-4 border border-white/20"
                  whileHover={{ scale: 1.05, y: -5 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <div className="text-2xl font-bold text-orange-300">{item.stat}</div>
                  <div className="text-sm text-blue-200">{item.label}</div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Main Content Section */}
      <section className="py-24 bg-white">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
            
            {/* Enhanced Form Section (3/5 width) */}
            <motion.div
              className="lg:col-span-3"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7 }}
              viewport={{ once: true }}
            >
              <Card className="shadow-2xl border-0 rounded-3xl p-6 md:p-10 bg-gradient-to-br from-white to-blue-50/50 backdrop-blur-sm">
                <CardHeader className="pb-8">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                  >
                    <CardTitle className="text-4xl font-bold bg-gradient-to-r from-blue-900 to-purple-600 bg-clip-text text-transparent mb-3">
                      Gửi lời nhắn cho chúng tôi
                    </CardTitle>
                    <p className="text-gray-600 text-lg">Chúng tôi sẽ phản hồi trong vòng 2 giờ làm việc</p>
                  </motion.div>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleSubmit} className="space-y-8">
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: 0.1 }}
                    >
                      <label htmlFor="name" className="block text-sm font-semibold text-gray-800 mb-3">
                        Họ và tên <span className="text-red-500">*</span>
                      </label>
                      <Input
                        id="name"
                        name="name"
                        type="text"
                        value={formData.name}
                        onChange={handleInputChange}
                        required
                        placeholder="Nguyễn Văn A"
                        className="h-14 text-lg border-2 border-gray-200 focus:border-blue-500 focus:ring-blue-200 rounded-xl transition-all duration-300"
                      />
                    </motion.div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                      <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                      >
                        <label htmlFor="email" className="block text-sm font-semibold text-gray-800 mb-3">
                          Email <span className="text-red-500">*</span>
                        </label>
                        <Input
                          id="email"
                          name="email"
                          type="email"
                          value={formData.email}
                          onChange={handleInputChange}
                          required
                          placeholder="email@example.com"
                          className="h-14 text-lg border-2 border-gray-200 focus:border-blue-500 focus:ring-blue-200 rounded-xl transition-all duration-300"
                        />
                      </motion.div>
                      <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.3 }}
                      >
                        <label htmlFor="phone" className="block text-sm font-semibold text-gray-800 mb-3">
                          Số điện thoại
                        </label>
                        <Input
                          id="phone"
                          name="phone"
                          type="tel"
                          value={formData.phone}
                          onChange={handleInputChange}
                          placeholder="090 xxx xxxx"
                          className="h-14 text-lg border-2 border-gray-200 focus:border-blue-500 focus:ring-blue-200 rounded-xl transition-all duration-300"
                        />
                      </motion.div>
                    </div>

                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: 0.4 }}
                    >
                      <label htmlFor="message" className="block text-sm font-semibold text-gray-800 mb-3">
                        Nội dung <span className="text-red-500">*</span>
                      </label>
                      <Textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleInputChange}
                        required
                        rows={6}
                        placeholder="Tôi cần tư vấn về khóa học..."
                        className="text-lg border-2 border-gray-200 focus:border-blue-500 focus:ring-blue-200 rounded-xl transition-all duration-300 resize-none"
                      />
                    </motion.div>

                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: 0.5 }}
                    >
                      <motion.div
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                      >
                        <Button
                          type="submit"
                          disabled={isSubmitting}
                          className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white text-xl py-7 rounded-xl font-semibold shadow-xl hover:shadow-2xl transition-all duration-300"
                        >
                          {isSubmitting ? (
                            <motion.div
                              className="flex items-center justify-center"
                              animate={{ opacity: [1, 0.5, 1] }}
                              transition={{ duration: 1.5, repeat: Number.POSITIVE_INFINITY }}
                            >
                              <div className="w-6 h-6 border-2 border-white/30 border-t-white rounded-full animate-spin mr-3" />
                              Đang gửi...
                            </motion.div>
                          ) : (
                            <div className="flex items-center justify-center">
                              <Send className="w-6 h-6 mr-3" />
                              Gửi tin nhắn
                              <ArrowRight className="w-6 h-6 ml-3" />
                            </div>
                          )}
                        </Button>
                      </motion.div>
                    </motion.div>

                    {submitStatus === 'success' && (
                      <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        className="text-center p-6 bg-green-50 border border-green-200 rounded-xl"
                      >
                        <div className="text-2xl mb-2">🎉</div>
                        <p className="text-green-700 font-semibold text-lg">
                          Cảm ơn bạn! Tin nhắn đã được gửi thành công.
                        </p>
                        <p className="text-green-600 text-sm mt-2">
                          Chúng tôi sẽ phản hồi trong vòng 2 giờ làm việc.
                        </p>
                      </motion.div>
                    )}
                  </form>
                </CardContent>
              </Card>
            </motion.div>

            {/* Info Section (2/5 width) */}
            <motion.div
              className="lg:col-span-2 space-y-8"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <Card className="shadow-lg border-0 rounded-2xl">
                <CardHeader><CardTitle className="text-2xl font-bold text-gray-900">Thông tin liên hệ</CardTitle></CardHeader>
                <CardContent className="space-y-6">
                  {contactInfo.map((item, index) => (
                    <div key={index} className="flex items-start space-x-4">
                      <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                        <item.icon className="h-6 w-6 text-blue-600" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-800 mb-1">{item.title}</h4>
                        {item.link ? (
                          <a href={item.link} className="text-gray-600 hover:text-blue-600 transition-colors">
                            {item.lines.map((line, i) => <p key={i}>{line}</p>)}
                          </a>
                        ) : (
                          item.lines.map((line, i) => <p key={i} className="text-gray-600">{line}</p>)
                        )}
                      </div>
                    </div>
                  ))}
                </CardContent>
              </Card>
              <Card className="shadow-lg border-0 rounded-2xl">
                <CardHeader><CardTitle className="text-2xl font-bold text-gray-900">Mạng xã hội</CardTitle></CardHeader>
                <CardContent className="flex space-x-4">
                  {socialLinks.map(link => (
                     <a key={link.name} href={link.href} target="_blank" rel="noopener noreferrer">
                        <Button variant="outline" className="h-12 w-12 rounded-full p-0 hover:bg-blue-100 hover:border-blue-500">
                           <link.icon className="h-6 w-6 text-blue-600"/>
                        </Button>
                     </a>
                  ))}
                </CardContent>
              </Card>
            </motion.div>

          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="pb-24 bg-white">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="w-full h-96 bg-gray-200 rounded-2xl overflow-hidden shadow-lg">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3547.0824622742025!2d106.66582407451699!3d10.761148759476423!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31752fe01ccb37b3%3A0xb9b5223950251041!2sMSC%20Center!5e1!3m2!1svi!2s!4v1754099890700!5m2!1svi!2s"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Vị trí Trung tâm MSC"
              />
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
