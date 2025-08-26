"use client"
import { motion } from "framer-motion"
import { Play, Pause } from "lucide-react"
import { useState, useRef } from "react"

const HeroVideo = () => {
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

      {/* Subtle Overlay */}
      <div className="absolute inset-0 z-10">
        <div className="absolute inset-0 bg-black/20" />
      </div>

      {/* Video Controls */}
      <motion.button
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
        onClick={toggleVideo}
        className="absolute top-6 right-6 z-30 w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white/30 transition-all duration-300 border border-white/30"
      >
        {isPlaying ? <Pause className="h-5 w-5 text-white" /> : <Play className="h-5 w-5 text-white ml-1" />}
      </motion.button>
    </section>
  )
}

export default HeroVideo
