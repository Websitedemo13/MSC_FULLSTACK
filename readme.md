# 🚀 MSC Full-Stack Educational Platform  

<div align="center">

![Next.js](https://img.shields.io/badge/Next.js-14+-000000?style=for-the-badge&logo=nextdotjs&logoColor=white)  
![Go](https://img.shields.io/badge/Go-1.22+-00ADD8?style=for-the-badge&logo=go)  
![PostgreSQL](https://img.shields.io/badge/PostgreSQL-16-336791?style=for-the-badge&logo=postgresql)  
![Docker](https://img.shields.io/badge/Docker-Ready-2496ED?style=for-the-badge&logo=docker)  
![GitHub](https://img.shields.io/badge/GitHub-Source_Code-181717?style=for-the-badge&logo=github)  

**Một nền tảng giáo dục thế hệ mới**, được xây dựng từ đầu với kiến trúc **full-stack hiện đại**,  
tối ưu hiệu năng và dễ dàng mở rộng.  

✨ **Tính năng** • 🏗️ **Kiến trúc** • 🚀 **Khởi động nhanh** • 🛠️ **Phát triển** • 🚢 **Triển khai**  

</div>  

---

## 🌟 Tầm nhìn dự án  

**MSC Platform** không chỉ là một website học tập, mà là **một hệ sinh thái giáo dục hoàn chỉnh**.  
Dự án kết hợp **Frontend Next.js** mượt mà, giàu tương tác cùng **Backend Go** mạnh mẽ, an toàn và hiệu suất cao → mang lại trải nghiệm học tập vượt trội cho cả học viên và giảng viên.  

---

## ✨ Tính năng nổi bật  

- 🎓 **Quản lý khóa học tương tác** – giao diện kéo/thả trực quan  
- 🤖 **AI Assistant 24/7** – chatbot gợi ý lộ trình học tập cá nhân hóa  
- 🎥 **Lớp học ảo & Livestream** – video call HD, bảng trắng cộng tác và chat realtime  
- 📊 **Theo dõi tiến độ & Gamification** – hệ thống điểm, cấp độ, huy hiệu và bảng xếp hạng  
- 🎨 **CMS trực quan** – quản trị nội dung dễ dàng  
- 🔐 **Bảo mật toàn diện** – JWT, RBAC, API security  
- 📱 **Hỗ trợ PWA** – trải nghiệm như app native, hoạt động offline  

---

## 🏗️ Kiến trúc tổng thể  

Hệ thống sử dụng kiến trúc **decoupled**, cho phép phát triển – bảo trì – mở rộng từng phần độc lập.  

### 🔧 Tech Stack  

| Phần       | Công nghệ |
|------------|-----------|
| 🖥️ Frontend | Next.js 14+, React 18, TypeScript, Tailwind CSS, Framer Motion |
| ⚙️ Backend  | Go 1.22+, Gin Gonic, GORM, PostgreSQL, Gorilla WebSocket |
| 🐳 DevOps   | Docker, Docker Compose, GitHub Actions |
| 💾 Database | PostgreSQL, Redis (Caching) |
| ☁️ Services | Cloudflare R2 (Storage), Agora (Video), OpenAI/Gemini (AI) |

---

## 🚀 Khởi động nhanh (Docker)  

Cách đơn giản và nhanh nhất để chạy toàn bộ hệ thống trên máy của bạn.  

### Yêu cầu  
- Git  
- Docker & Docker Compose  

### Các bước  

```bash
# Clone repository
git clone https://github.com/StephenSouth13/MSC_FULLSTACK.git
cd MSC_FULLSTACK

# Tạo file env
cp backend/.env.example backend/.env
cp frontend/.env.example frontend/.env.local

# Chạy toàn bộ hệ thống
docker-compose up --build
✅ Sau khi chạy:

Frontend: http://localhost:3000

Backend API: http://localhost:8080