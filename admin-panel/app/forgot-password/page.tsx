"use client"

import { useState } from 'react'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Alert, AlertDescription } from '@/components/ui/alert'
import { ArrowLeft, Mail, Loader2 } from 'lucide-react'

export default function ForgotPasswordPage() {
  const [email, setEmail] = useState('')
  const [loading, setLoading] = useState(false)
  const [sent, setSent] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)

    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1500))
    
    setSent(true)
    setLoading(false)
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 dark:bg-gray-900 px-4">
      <div className="w-full max-w-md space-y-8">
        <div className="text-center">
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white">
            MSC.EDU.VN
          </h1>
          <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">
            Khôi phục mật khẩu
          </p>
        </div>

        <Card>
          <CardHeader>
            <CardTitle className="text-2xl text-center">Quên mật khẩu?</CardTitle>
            <CardDescription className="text-center">
              {sent 
                ? "Chúng tôi đã gửi hướng dẫn đến email của bạn"
                : "Nhập email để nhận hướng dẫn khôi phục mật khẩu"
              }
            </CardDescription>
          </CardHeader>
          <CardContent>
            {sent ? (
              <div className="space-y-4">
                <Alert>
                  <Mail className="h-4 w-4" />
                  <AlertDescription>
                    Nếu email này tồn tại trong hệ thống, bạn sẽ nhận được hướng dẫn khôi phục mật khẩu trong vài phút.
                  </AlertDescription>
                </Alert>
                
                <div className="text-sm text-gray-600 dark:text-gray-400">
                  <p>Không nhận được email?</p>
                  <ul className="mt-2 space-y-1 list-disc list-inside">
                    <li>Kiểm tra thư mục spam/junk</li>
                    <li>Đảm bảo email đã được nhập chính xác</li>
                    <li>Thử gửi lại sau 5 phút</li>
                  </ul>
                </div>

                <Button 
                  onClick={() => setSent(false)}
                  variant="outline"
                  className="w-full"
                >
                  Gửi lại
                </Button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <Input
                    id="email"
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="admin@msc.edu.vn"
                    required
                    disabled={loading}
                  />
                </div>

                <Button 
                  type="submit" 
                  className="w-full" 
                  disabled={loading || !email}
                >
                  {loading ? (
                    <>
                      <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                      Đang gửi...
                    </>
                  ) : (
                    'Gửi hướng dẫn khôi phục'
                  )}
                </Button>
              </form>
            )}

            {/* Demo Notice */}
            <div className="mt-6 p-3 bg-yellow-50 dark:bg-yellow-900/20 rounded-lg border border-yellow-200 dark:border-yellow-800">
              <h3 className="text-sm font-medium text-yellow-800 dark:text-yellow-200 mb-2">
                💡 Lưu ý cho tài khoản demo:
              </h3>
              <div className="space-y-1 text-xs text-yellow-700 dark:text-yellow-300">
                <div>Đây là hệ thống demo với tài khoản mặc định:</div>
                <div><strong>Admin:</strong> admin@msc.edu.vn / admin123</div>
                <div><strong>Editor:</strong> editor@msc.edu.vn / editor123</div>
                <div><strong>Partner:</strong> demo@msc.edu.vn / demo123</div>
              </div>
            </div>

            <div className="mt-6 text-center">
              <Link 
                href="/login" 
                className="inline-flex items-center text-sm text-blue-600 hover:underline"
              >
                <ArrowLeft className="mr-1 h-4 w-4" />
                Quay lại đăng nhập
              </Link>
            </div>
          </CardContent>
        </Card>

        <div className="text-center text-xs text-gray-500 dark:text-gray-400">
          © 2024 MSC.EDU.VN. All rights reserved.
        </div>
      </div>
    </div>
  )
}
