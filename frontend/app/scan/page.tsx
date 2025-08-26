"use client"

import { useState, useRef, useEffect } from "react"
import { motion } from "framer-motion"
import { QrCode, Camera, X, User, ArrowRight, Scan, AlertCircle } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Alert, AlertDescription } from "@/components/ui/alert"

export default function ScanPage() {
  const [scanning, setScanning] = useState(false)
  const [scannedData, setScannedData] = useState("")
  const [manualId, setManualId] = useState("")
  const [error, setError] = useState("")
  const [success, setSuccess] = useState("")
  const videoRef = useRef<HTMLVideoElement>(null)
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const streamRef = useRef<MediaStream | null>(null)

  // Start camera for QR scanning
  const startScanning = async () => {
    try {
      setError("")
      const stream = await navigator.mediaDevices.getUserMedia({ 
        video: { facingMode: "environment" } // Use back camera on mobile
      })
      
      if (videoRef.current) {
        videoRef.current.srcObject = stream
        streamRef.current = stream
        setScanning(true)
        
        // Start scanning for QR codes
        scanForQRCode()
      }
    } catch (err) {
      setError("Không thể truy cập camera. Vui lòng kiểm tra quyền truy cập hoặc nhập ID thủ công.")
    }
  }

  // Stop camera
  const stopScanning = () => {
    if (streamRef.current) {
      streamRef.current.getTracks().forEach(track => track.stop())
      streamRef.current = null
    }
    setScanning(false)
  }

  // Simple QR code detection simulation
  const scanForQRCode = () => {
    const interval = setInterval(() => {
      if (!scanning || !videoRef.current || !canvasRef.current) {
        clearInterval(interval)
        return
      }

      // In a real implementation, you would use a QR code library here
      // For demo purposes, we'll simulate QR code detection
      if (Math.random() < 0.1) { // 10% chance per scan cycle
        const mockQRData = window.location.origin + "/user/demo"
        handleQRCodeDetected(mockQRData)
        clearInterval(interval)
      }
    }, 100)
  }

  // Handle QR code detection
  const handleQRCodeDetected = (data: string) => {
    setScannedData(data)
    setSuccess("QR code đã được quét thành công!")
    
    // Extract user ID from URL
    const urlMatch = data.match(/\/user\/(.+)$/)
    if (urlMatch) {
      const userId = urlMatch[1]
      setTimeout(() => {
        window.location.href = `/user/${userId}`
      }, 1500)
    }
  }

  // Handle manual ID input
  const handleManualSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (!manualId.trim()) {
      setError("Vui lòng nhập ID người dùng")
      return
    }

    setError("")
    setSuccess(`Đang chuyển đến trang cá nhân của ${manualId}...`)
    
    setTimeout(() => {
      window.location.href = `/user/${manualId.toLowerCase()}`
    }, 1000)
  }

  // Cleanup on unmount
  useEffect(() => {
    return () => {
      stopScanning()
    }
  }, [])

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 py-8">
      <div className="container mx-auto px-4 max-w-4xl">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-8"
        >
          <div className="flex items-center justify-center mb-4">
            <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center">
              <Scan className="w-8 h-8 text-white" />
            </div>
          </div>
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-2">
            Quét QR Code
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-300">
            Quét mã QR hoặc nhập ID để truy cập trang cá nhân
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* QR Scanner */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
          >
            <Card className="h-full">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <QrCode className="w-5 h-5" />
                  Quét QR Code
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {!scanning ? (
                  <div className="text-center space-y-4">
                    <div className="w-full h-64 bg-gray-100 dark:bg-gray-700 rounded-lg flex items-center justify-center">
                      <div className="text-center">
                        <Camera className="w-16 h-16 text-gray-400 mx-auto mb-4" />
                        <p className="text-gray-600 dark:text-gray-400">
                          Nhấn để bắt đầu quét
                        </p>
                      </div>
                    </div>
                    <Button onClick={startScanning} className="w-full">
                      <Camera className="w-4 h-4 mr-2" />
                      Bắt đầu quét
                    </Button>
                  </div>
                ) : (
                  <div className="space-y-4">
                    <div className="relative">
                      <video
                        ref={videoRef}
                        autoPlay
                        playsInline
                        className="w-full h-64 bg-black rounded-lg object-cover"
                      />
                      <canvas
                        ref={canvasRef}
                        className="hidden"
                      />
                      <div className="absolute inset-0 border-2 border-dashed border-primary rounded-lg pointer-events-none">
                        <div className="absolute top-4 left-4 w-8 h-8 border-t-4 border-l-4 border-primary"></div>
                        <div className="absolute top-4 right-4 w-8 h-8 border-t-4 border-r-4 border-primary"></div>
                        <div className="absolute bottom-4 left-4 w-8 h-8 border-b-4 border-l-4 border-primary"></div>
                        <div className="absolute bottom-4 right-4 w-8 h-8 border-b-4 border-r-4 border-primary"></div>
                      </div>
                    </div>
                    <div className="flex gap-2">
                      <Button onClick={stopScanning} variant="outline" className="flex-1">
                        <X className="w-4 h-4 mr-2" />
                        Dừng quét
                      </Button>
                      <Button 
                        onClick={() => handleQRCodeDetected(window.location.origin + "/user/demo")}
                        className="flex-1"
                      >
                        Demo QR
                      </Button>
                    </div>
                  </div>
                )}
              </CardContent>
            </Card>
          </motion.div>

          {/* Manual Input */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4 }}
          >
            <Card className="h-full">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <User className="w-5 h-5" />
                  Nhập ID thủ công
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <form onSubmit={handleManualSubmit} className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="userId">ID Người dùng</Label>
                    <Input
                      id="userId"
                      type="text"
                      placeholder="Nhập ID (ví dụ: demo, user, student)"
                      value={manualId}
                      onChange={(e) => setManualId(e.target.value)}
                      className="h-12"
                    />
                  </div>
                  <Button type="submit" className="w-full h-12">
                    <ArrowRight className="w-4 h-4 mr-2" />
                    Truy cập trang cá nhân
                  </Button>
                </form>

                {/* Demo IDs */}
                <div className="space-y-3">
                  <h4 className="font-semibold text-sm text-gray-700 dark:text-gray-300">
                    ID demo có sẵn:
                  </h4>
                  <div className="grid gap-2">
                    {[
                      { id: "demo", name: "Demo User" },
                      { id: "user", name: "MSC User" },
                      { id: "student", name: "Student User" }
                    ].map((user) => (
                      <Button
                        key={user.id}
                        variant="outline"
                        onClick={() => setManualId(user.id)}
                        className="justify-start h-auto p-3"
                      >
                        <div className="text-left">
                          <div className="font-medium">{user.name}</div>
                          <div className="text-sm text-gray-500">ID: {user.id}</div>
                        </div>
                      </Button>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>

        {/* Status Messages */}
        {error && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mt-6"
          >
            <Alert variant="destructive">
              <AlertCircle className="h-4 w-4" />
              <AlertDescription>{error}</AlertDescription>
            </Alert>
          </motion.div>
        )}

        {success && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mt-6"
          >
            <Alert className="border-green-200 bg-green-50 text-green-800">
              <QrCode className="h-4 w-4" />
              <AlertDescription>{success}</AlertDescription>
            </Alert>
          </motion.div>
        )}

        {/* Instructions */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="mt-8"
        >
          <Card>
            <CardHeader>
              <CardTitle>Hướng dẫn sử dụng</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold mb-2 flex items-center gap-2">
                    <QrCode className="w-4 h-4" />
                    Quét QR Code
                  </h4>
                  <ul className="text-sm text-gray-600 dark:text-gray-400 space-y-1">
                    <li>• Nhấn "Bắt đầu quét" để mở camera</li>
                    <li>• Hướng camera vào mã QR</li>
                    <li>• Đợi hệ thống tự động nhận diện</li>
                    <li>• Sẽ được chuyển hướng tự động</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold mb-2 flex items-center gap-2">
                    <User className="w-4 h-4" />
                    Nhập ID thủ công
                  </h4>
                  <ul className="text-sm text-gray-600 dark:text-gray-400 space-y-1">
                    <li>• Nhập ID người dùng (demo, user, student)</li>
                    <li>• Hoặc chọn từ danh sách demo</li>
                    <li>• Nhấn "Truy cập trang cá nhân"</li>
                    <li>• Sẽ được chuyển đến trang profile</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </div>
  )
}
