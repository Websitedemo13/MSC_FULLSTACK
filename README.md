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
## 🚀 Khởi động nhanh

### 1. Cài đặt

```bash
git clone https://github.com/yourusername/msc_fullstack.git
cd msc_fullstack
```

### 2. Chạy Docker

```bash
docker-compose up --build
```

### 3. Truy cập ứng dụng

- Frontend: [http://localhost:3000](http://localhost:3000)
- Backend: [http://localhost:8080](http://localhost:8080)

## 📁 Cấu trúc dự án  

```bash
MSC_FULLSTACK/
├── backend/             # Go Backend Service
│   ├── cmd/
│   ├── internal/
│   ├── db/
│   ├── Dockerfile
│   └── go.mod
│
├── frontend/            # Next.js Frontend
│   ├── src/
│   ├── public/
│   ├── next.config.js
│   └── package.json
│
├── docker-compose.yml   # Điều phối toàn hệ thống
└── README.md
```

---

## 🛠️ Phát triển (Không dùng Docker)  

### 1. Backend (Go)  

```bash
cd backend
go mod tidy

# (Tùy chọn) chạy migrations
# migrate -path db/migrations -database $DATABASE_URL up

# Chạy server
go run ./cmd/server/main.go
# hoặc dùng Air để hot-reload
```

➡️ Backend chạy tại: **http://localhost:8080**  

### 2. Frontend (Next.js)  

```bash
cd frontend
npm install
npm run dev
🎨 Frontend sẽ chạy tại http://localhost:3000.
🚢 Triển khai (Deployment)
Đây là chiến lược triển khai được đề xuất cho môi trường production.
Backend (Go Service):
Build Docker Image: Tạo một Docker image tối ưu cho production.
Deploy: Triển khai image này lên một máy chủ ảo (VPS) như DigitalOcean, Hetzner, Vultr hoặc các nền tảng container như AWS ECS, Google Cloud Run.
Database: Sử dụng một dịch vụ managed database (ví dụ: Neon, Supabase DB, AWS RDS) để đảm bảo tính ổn định và khả năng backup.
Frontend (Next.js):
Nền tảng: Sử dụng Vercel (bởi những người tạo ra Next.js) hoặc Netlify.
Quy trình: Kết nối repository GitHub của bạn với Vercel/Netlify. Quá trình build và deploy sẽ được tự động hóa mỗi khi bạn push code lên branch main.
🤝 Đóng góp
Chúng tôi luôn chào đón các đóng góp để làm cho MSC Platform tốt hơn! Vui lòng tuân theo quy trình sau:
Fork repository này.
Tạo một branch mới (git checkout -b feature/ten-tinh-nang).
Thực hiện thay đổi và commit (git commit -m 'feat: Them tinh nang XYZ').
Push lên branch của bạn (git push origin feature/ten-tinh-nang).
Tạo một Pull Request.