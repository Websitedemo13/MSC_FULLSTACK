"use client"

import { useParams } from "next/navigation"
import { useEffect, useState } from "react"
import { motion } from "framer-motion"
import { User, Mail, Calendar, Award, BookOpen, Trophy, Clock, QrCode, Download, Share2 } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Progress } from "@/components/ui/progress"
import QRCode from "qrcode.react"

// User profile interface
interface UserProfile {
  id: string
  name: string
  email: string
  avatar?: string
  role: string
  joinDate: string
  totalCourses: number
  completedCourses: number
  achievements: Achievement[]
  recentActivity: Activity[]
  skills: Skill[]
  certificates: Certificate[]
}

interface Achievement {
  id: string
  title: string
  description: string
  icon: string
  earnedDate: string
}

interface Activity {
  id: string
  type: string
  title: string
  date: string
  status: string
}

interface Skill {
  name: string
  level: number
  category: string
}

interface Certificate {
  id: string
  name: string
  issueDate: string
  validity: string
  downloadUrl?: string
}

// Mock user data generator
const generateUserProfile = (id: string): UserProfile => {
  const users = {
    "demo": {
      name: "Demo User",
      email: "demo@msc.edu.vn",
      role: "Học viên",
      avatar: "/Users/demo.webp"
    },
    "user": {
      name: "MSC User",
      email: "user@msc.edu.vn", 
      role: "Học viên Pro",
      avatar: "/Users/user.webp"
    },
    "student": {
      name: "Student User",
      email: "student@msc.edu.vn",
      role: "Sinh viên",
      avatar: "/Users/student.webp"
    }
  }

  const userData = users[id as keyof typeof users] || users.demo

  return {
    id,
    name: userData.name,
    email: userData.email,
    avatar: userData.avatar,
    role: userData.role,
    joinDate: "2024-01-15",
    totalCourses: 8,
    completedCourses: 5,
    achievements: [
      {
        id: "1",
        title: "Học viên xuất sắc",
        description: "Hoàn thành 5 khóa học với điểm số cao",
        icon: "🏆",
        earnedDate: "2024-12-01"
      },
      {
        id: "2", 
        title: "Người học tích cực",
        description: "Tham gia học tập liên tục 30 ngày",
        icon: "🔥",
        earnedDate: "2024-11-15"
      },
      {
        id: "3",
        title: "Chuyên gia Marketing",
        description: "Hoàn thành chuyên ngành Marketing Digital",
        icon: "📊",
        earnedDate: "2024-10-20"
      }
    ],
    recentActivity: [
      {
        id: "1",
        type: "course",
        title: "Hoàn thành bài học: Facebook Ads Advanced",
        date: "2024-12-20",
        status: "completed"
      },
      {
        id: "2",
        type: "assignment",
        title: "Nộp bài tập: Chiến lược Content Marketing",
        date: "2024-12-19",
        status: "submitted"
      },
      {
        id: "3",
        type: "quiz",
        title: "Kiểm tra: Google Analytics cơ bản",
        date: "2024-12-18",
        status: "passed"
      }
    ],
    skills: [
      { name: "Digital Marketing", level: 85, category: "Marketing" },
      { name: "Facebook Ads", level: 90, category: "Advertising" },
      { name: "Google Analytics", level: 75, category: "Analytics" },
      { name: "Content Marketing", level: 80, category: "Content" },
      { name: "SEO", level: 70, category: "Technical" }
    ],
    certificates: [
      {
        id: "1",
        name: "Chứng chỉ Digital Marketing Foundation",
        issueDate: "2024-11-30",
        validity: "Vĩnh viễn",
        downloadUrl: "#"
      },
      {
        id: "2",
        name: "Chứng chỉ Facebook Ads Specialist",
        issueDate: "2024-12-15",
        validity: "2 năm",
        downloadUrl: "#"
      }
    ]
  }
}

export default function UserProfilePage() {
  const params = useParams()
  const [profile, setProfile] = useState<UserProfile | null>(null)
  const [showQRCode, setShowQRCode] = useState(false)
  const userId = params.id as string

  useEffect(() => {
    // Generate or fetch user profile based on ID
    const userProfile = generateUserProfile(userId)
    setProfile(userProfile)
  }, [userId])

  if (!profile) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-primary"></div>
      </div>
    )
  }

  const currentUrl = typeof window !== 'undefined' ? window.location.href : ''

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 py-8">
      <div className="container mx-auto px-4">
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-8 mb-8"
        >
          <div className="flex flex-col md:flex-row items-center gap-6">
            <Avatar className="w-24 h-24 ring-4 ring-primary/20">
              <AvatarImage src={profile.avatar} alt={profile.name} />
              <AvatarFallback className="text-2xl">
                {profile.name.split(' ').map(n => n[0]).join('')}
              </AvatarFallback>
            </Avatar>
            
            <div className="flex-1 text-center md:text-left">
              <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">
                {profile.name}
              </h1>
              <div className="flex flex-col md:flex-row items-center gap-4 text-gray-600 dark:text-gray-300">
                <span className="flex items-center gap-2">
                  <Mail className="w-4 h-4" />
                  {profile.email}
                </span>
                <Badge variant="secondary">{profile.role}</Badge>
                <span className="flex items-center gap-2">
                  <Calendar className="w-4 h-4" />
                  Tham gia: {new Date(profile.joinDate).toLocaleDateString('vi-VN')}
                </span>
              </div>
            </div>

            <div className="flex gap-2">
              <Button
                variant="outline"
                onClick={() => setShowQRCode(!showQRCode)}
                className="flex items-center gap-2"
              >
                <QrCode className="w-4 h-4" />
                QR Code
              </Button>
              <Button variant="outline" className="flex items-center gap-2">
                <Share2 className="w-4 h-4" />
                Chia sẻ
              </Button>
            </div>
          </div>

          {showQRCode && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              className="mt-6 p-4 bg-gray-50 dark:bg-gray-700 rounded-lg text-center"
            >
              <p className="mb-4 text-sm text-gray-600 dark:text-gray-400">
                Quét mã QR để truy cập trang cá nhân
              </p>
              <div className="inline-block p-4 bg-white rounded-lg">
                <QRCode value={currentUrl} size={150} />
              </div>
            </motion.div>
          )}
        </motion.div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }}>
            <Card>
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-gray-600 dark:text-gray-400">Tổng khóa học</p>
                    <p className="text-2xl font-bold">{profile.totalCourses}</p>
                  </div>
                  <BookOpen className="w-8 h-8 text-blue-500" />
                </div>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}>
            <Card>
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-gray-600 dark:text-gray-400">Hoàn thành</p>
                    <p className="text-2xl font-bold">{profile.completedCourses}</p>
                  </div>
                  <Trophy className="w-8 h-8 text-green-500" />
                </div>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }}>
            <Card>
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-gray-600 dark:text-gray-400">Thành tích</p>
                    <p className="text-2xl font-bold">{profile.achievements.length}</p>
                  </div>
                  <Award className="w-8 h-8 text-yellow-500" />
                </div>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4 }}>
            <Card>
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-gray-600 dark:text-gray-400">Tiến độ</p>
                    <p className="text-2xl font-bold">{Math.round((profile.completedCourses / profile.totalCourses) * 100)}%</p>
                  </div>
                  <Clock className="w-8 h-8 text-purple-500" />
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Skills Section */}
          <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.5 }}>
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <User className="w-5 h-5" />
                  Kỹ năng
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {profile.skills.map((skill, index) => (
                  <div key={index}>
                    <div className="flex justify-between mb-2">
                      <span className="font-medium">{skill.name}</span>
                      <span className="text-sm text-gray-600">{skill.level}%</span>
                    </div>
                    <Progress value={skill.level} className="h-2" />
                  </div>
                ))}
              </CardContent>
            </Card>
          </motion.div>

          {/* Recent Activity */}
          <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.6 }}>
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Clock className="w-5 h-5" />
                  Hoạt động gần đây
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {profile.recentActivity.map((activity) => (
                    <div key={activity.id} className="flex items-start gap-3 p-3 rounded-lg bg-gray-50 dark:bg-gray-700">
                      <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0" />
                      <div className="flex-1">
                        <p className="font-medium text-sm">{activity.title}</p>
                        <p className="text-xs text-gray-600 dark:text-gray-400">
                          {new Date(activity.date).toLocaleDateString('vi-VN')}
                        </p>
                      </div>
                      <Badge variant={activity.status === 'completed' ? 'default' : 'secondary'} className="text-xs">
                        {activity.status === 'completed' ? 'Hoàn thành' : 
                         activity.status === 'submitted' ? 'Đã nộp' : 'Đạt'}
                      </Badge>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* Achievements */}
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.7 }}>
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Award className="w-5 h-5" />
                  Thành tích
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid gap-4">
                  {profile.achievements.map((achievement) => (
                    <div key={achievement.id} className="flex items-center gap-4 p-4 rounded-lg bg-gradient-to-r from-yellow-50 to-orange-50 dark:from-yellow-900/20 dark:to-orange-900/20 border border-yellow-200 dark:border-yellow-700">
                      <div className="text-2xl">{achievement.icon}</div>
                      <div className="flex-1">
                        <h4 className="font-semibold">{achievement.title}</h4>
                        <p className="text-sm text-gray-600 dark:text-gray-400">{achievement.description}</p>
                        <p className="text-xs text-gray-500 mt-1">
                          {new Date(achievement.earnedDate).toLocaleDateString('vi-VN')}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* Certificates */}
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.8 }}>
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Trophy className="w-5 h-5" />
                  Chứng chỉ
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {profile.certificates.map((cert) => (
                    <div key={cert.id} className="flex items-center justify-between p-4 rounded-lg border border-gray-200 dark:border-gray-700">
                      <div className="flex-1">
                        <h4 className="font-semibold">{cert.name}</h4>
                        <p className="text-sm text-gray-600 dark:text-gray-400">
                          Cấp ngày: {new Date(cert.issueDate).toLocaleDateString('vi-VN')}
                        </p>
                        <p className="text-xs text-gray-500">Hiệu lực: {cert.validity}</p>
                      </div>
                      <Button variant="outline" size="sm" className="flex items-center gap-2">
                        <Download className="w-4 h-4" />
                        Tải về
                      </Button>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </div>
  )
}
