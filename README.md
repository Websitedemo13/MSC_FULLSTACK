
# 🚀 MSC Full-Stack Educational Platform  

<div align="center">

![Next.js](https://img.shields.io/badge/Next.js-14+-000000?style=for-the-badge&logo=nextdotjs&logoColor=white)  
![Go](https://img.shields.io/badge/Go-1.22+-00ADD8?style=for-the-badge&logo=go)  
![PostgreSQL](https://img.shields.io/badge/PostgreSQL-16-336791?style=for-the-badge&logo=postgresql)  
![Docker](https://img.shields.io/badge/Docker-Ready-2496ED?style=for-the-badge&logo=docker)  
![GitHub](https://img.shields.io/badge/GitHub-Source_Code-181717?style=for-the-badge&logo=github)  

Một nền tảng giáo dục thế hệ mới, xây dựng trên kiến trúc **full-stack hiện đại**, hiệu năng cao, dễ mở rộng.  

✨ **Tính năng** • 🏗️ **Kiến trúc** • 🚀 **Khởi động nhanh** • 🛠️ **Phát triển** • 🚢 **Triển khai**  

</div>  

---

## 🌟 Tầm nhìn  
**MSC Platform** không chỉ là một website học tập, mà là **hệ sinh thái giáo dục toàn diện**.  
Kết hợp **Frontend Next.js** mượt mà, giàu tương tác cùng **Backend Go** mạnh mẽ, an toàn và hiệu suất cao → mang lại trải nghiệm học tập tốt nhất cho học viên & giảng viên.  

---

## ✨ Tính năng nổi bật  

- 🎓 **Quản lý khóa học tương tác** – giao diện kéo/thả trực quan  
- 🤖 **AI Assistant 24/7** – chatbot gợi ý lộ trình học cá nhân hóa  
- 🎥 **Lớp học ảo & Livestream** – video call HD, bảng trắng, chat realtime  
- 📊 **Theo dõi tiến độ & Gamification** – điểm số, cấp độ, huy hiệu, bảng xếp hạng  
- 🎨 **CMS trực quan** – quản trị nội dung dễ dàng  
- 🔐 **Bảo mật toàn diện** – JWT, RBAC, API security  
- 📱 **PWA Support** – trải nghiệm như app native, hoạt động offline  

---

## 🏗️ Kiến trúc tổng thể  

Nền tảng sử dụng kiến trúc **decoupled** → dễ phát triển, bảo trì và mở rộng từng phần.  

### 🔧 Tech Stack  

| Phần | Công nghệ |
|------|-----------|
| 🖥️ Frontend | Next.js 14+, React 18, TypeScript, Tailwind CSS, Framer Motion |
| ⚙️ Backend  | Go 1.22+, Gin Gonic, GORM, PostgreSQL, Gorilla WebSocket |
| 🐳 DevOps   | Docker, Docker Compose, GitHub Actions |
| 💾 Database | PostgreSQL, Redis (Cache) |
| ☁️ Services | Cloudflare R2 (Storage), Agora (Video), OpenAI/Gemini (AI) |

---

## 🚀 Khởi động nhanh với Docker  

### Yêu cầu  
- Git  
- Docker & Docker Compose  

### Các bước  

```bash
# Clone repo
git clone https://github.com/StephenSouth13/MSC_FULLSTACK.git
cd MSC_FULLSTACK

# Tạo file env
cp backend/.env.example backend/.env
cp frontend/.env.example frontend/.env.local

# Chạy toàn hệ thống
docker-compose up --build
```

✅ Sau khi chạy:  
- Frontend: [http://localhost:3000](http://localhost:3000)  
- Backend API: [http://localhost:8080](http://localhost:8080)  

---

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
```

➡️ Frontend chạy tại: **http://localhost:3000**  

---

## 🚢 Triển khai Production  

### 🔹 Backend (Go Service)  
- Build Docker image → deploy lên VPS (DigitalOcean, Hetzner, AWS ECS, GCP Run, …)  
- Database: sử dụng managed DB (Supabase, Neon, AWS RDS, …)  

### 🔹 Frontend (Next.js)  
- Deploy trên **Vercel** (hoặc Netlify)  
- Tự động build/deploy khi push code lên branch `main`  

---

## 🤝 Đóng góp  

Mọi đóng góp đều được chào đón!  

```bash
# Fork repo
git checkout -b feature/ten-tinh-nang
git commit -m "feat: them tinh nang XYZ"
git push origin feature/ten-tinh-nang
```

➡️ Tạo Pull Request để review & merge.  
