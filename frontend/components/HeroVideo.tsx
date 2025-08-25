"use client"
import Link from 'next/link';
import { motion } from "framer-motion"
import { ChevronDown, Play, Pause, Star, Users, Award, TrendingUp } from "lucide-react"
import { useState, useRef } from "react"
import { useLanguage } from "./language-provider"
import { Button } from "@/components/ui/button"

const HeroVideo = () => {
  const { t } = useLanguage()
  const [isPlaying, setIsPlaying] = useState(true)
  const videoRef = useRef<HTMLVideoElement>(null)

  const toggleVideo = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause()
      } else {
        videoRef.current.play()
      }
      setIsPlaying(!isPlaying)
    }
  }

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Video Background */}
      <div className="absolute inset-0 z-0">
        <video
          ref={videoRef}
          autoPlay
          muted
          loop
          playsInline
          className="w-full h-full object-cover"
          poster="/placeholder.svg?height=1080&width=1920&text=MSC+Center+Video+Poster"
        >
          <source src="/Intro.mp4" type="video/mp4" />
        </video>
      </div>

      {/* Enhanced Multi-layer Overlay */}
      <div className="absolute inset-0 z-10">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900/60 via-blue-800/40 to-purple-900/60" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-blue-600/20 to-transparent animate-pulse" />
      </div>

      {/* Floating Particles Animation */}
      <div className="absolute inset-0 z-15 overflow-hidden">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-white/30 rounded-full"
            animate={{
              y: [0, -100, 0],
              x: [0, Math.random() * 50 - 25, 0],
              opacity: [0, 1, 0],
              scale: [0, 1, 0],
            }}
            transition={{
              duration: 4 + Math.random() * 4,
              repeat: Number.POSITIVE_INFINITY,
              delay: Math.random() * 4,
              ease: "easeInOut",
            }}
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
          />
        ))}
      </div>

      {/* Video Controls */}
      <motion.button
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2 }}
        onClick={toggleVideo}
        className="absolute top-6 right-6 z-30 w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white/30 transition-all duration-300 border border-white/30"
      >
        {isPlaying ? <Pause className="h-5 w-5 text-white" /> : <Play className="h-5 w-5 text-white ml-1" />}
      </motion.button>

      {/* Content */}
      <div className="relative z-20 text-center text-white max-w-7xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          {/* Enhanced Title with Gradient Text */}
          <motion.h1 
            className="text-6xl md:text-8xl lg:text-9xl font-bold mb-8 leading-tight"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.2, delay: 0.3 }}
          >
            <span className="bg-gradient-to-r from-white via-blue-200 to-orange-300 bg-clip-text text-transparent">
              MSC
            </span>
            <br />
            <span className="bg-gradient-to-r from-orange-300 via-orange-400 to-yellow-400 bg-clip-text text-transparent">
              CENTER
            </span>
          </motion.h1>
          
          {/* Enhanced Subtitle with Glow Effect */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.8 }}
            className="text-xl md:text-3xl lg:text-4xl mb-12 max-w-5xl mx-auto leading-relaxed font-light"
            style={{
              textShadow: '0 0 20px rgba(255,255,255,0.5), 0 0 40px rgba(59,130,246,0.3)',
            }}
          >
            <span className="bg-gradient-to-r from-blue-200 to-white bg-clip-text text-transparent">
              Trung tâm đào tạo và phát triển kỹ năng chuyên nghiệp hàng đầu Vi��t Nam
            </span>
          </motion.p>

          {/* Enhanced Statistics Bar */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 1.0 }}
            className="flex flex-wrap justify-center gap-8 mb-12"
          >
            {[
              { number: "10,000+", label: "Học viên", icon: <Users className="w-6 h-6" /> },
              { number: "50+", label: "Mentors", icon: <Star className="w-6 h-6" /> },
              { number: "100+", label: "Khóa học", icon: <Award className="w-6 h-6" /> },
              { number: "95%", label: "Hài lòng", icon: <TrendingUp className="w-6 h-6" /> }
            ].map((stat, index) => (
              <motion.div
                key={index}
                className="text-center backdrop-blur-sm bg-white/10 rounded-xl px-6 py-4 border border-white/20 shadow-lg"
                whileHover={{ scale: 1.05, y: -5 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <div className="flex items-center justify-center mb-2 text-orange-300">
                  {stat.icon}
                </div>
                <div className="text-2xl md:text-3xl font-bold text-orange-300">{stat.number}</div>
                <div className="text-sm md:text-base text-blue-200">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>

          {/* Enhanced Action Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 1.3 }}
            className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-12"
          >
            <Link href="/dao-tao">
              <motion.div
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button
                  size="lg"
                  className="bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white px-10 py-5 text-xl font-bold shadow-2xl hover:shadow-orange-500/25 transition-all duration-300 rounded-full border-2 border-orange-400"
                  style={{
                    boxShadow: '0 0 30px rgba(249,115,22,0.4), 0 10px 25px rgba(0,0,0,0.2)',
                  }}
                >
                  <span className="mr-2">🚀</span>
                  Khám phá khóa học
                </Button>
              </motion.div>
            </Link>
            
            <Link href="/gioi-thieu">
              <motion.div
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button
                  variant="outline"
                  size="lg"
                  className="border-2 border-white/50 text-white hover:bg-white/20 hover:border-white backdrop-blur-sm px-10 py-5 text-xl font-semibold shadow-2xl transition-all duration-300 rounded-full"
                  style={{
                    boxShadow: '0 0 20px rgba(255,255,255,0.2), 0 10px 25px rgba(0,0,0,0.1)',
                  }}
                >
                  <span className="mr-2">💡</span>
                  Tìm hiểu thêm
                </Button>
              </motion.div>
            </Link>
          </motion.div>

          {/* Scroll Indicator */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 2 }}
            className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
          >
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
              className="flex flex-col items-center"
            >
              <span className="text-white/70 text-sm mb-2">Cuộn xuống</span>
              <ChevronDown className="w-6 h-6 text-white/70" />
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default HeroVideo
