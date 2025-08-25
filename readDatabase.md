# Hướng dẫn Kết nối Database (Database Connection Guide)

## 📋 Tổng quan
Dự án MSC Center hỗ trợ kết nối với nhiều loại database khác nhau thông qua các dịch vụ cloud hiện đại. Tài liệu này hướng dẫn cách kết nối database một cách dễ dàng và an toàn.

## 🎯 Các Database được hỗ trợ

### 1. **Neon Database** (Khuyến nghị) 🌟
Neon là serverless PostgreSQL database với hiệu suất cao và tính năng branching độc đáo.

#### Ưu điểm:
- ✅ Serverless, tự động scale
- ✅ Database branching như Git
- ✅ Cold starts nhanh
- ✅ Tương thích hoàn toàn với PostgreSQL
- ✅ Free tier hào phóng

#### Cách kết nối:

**Bước 1: Tạo tài khoản Neon**
1. Truy cập [neon.tech](https://neon.tech)
2. Đăng ký tài khoản miễn phí
3. Tạo project mới

**Bước 2: Kết nối trong Builder.io**
1. Trong Builder.io, click [Connect to Neon](#open-mcp-popover)
2. Nhập thông tin kết nối từ Neon dashboard
3. Test connection để đảm bảo kết nối thành công

**Bước 3: Cấu hình Environment Variables**
```bash
DATABASE_URL="postgresql://username:password@ep-xxx.neon.tech/dbname?sslmode=require"
NEON_DATABASE_URL="postgresql://username:password@ep-xxx.neon.tech/dbname?sslmode=require"
```

### 2. **Supabase** 🚀
Supabase là "Firebase alternative" với PostgreSQL backend và nhiều tính năng tích hợp.

#### Ưu điểm:
- ✅ Database + Auth + Storage + Real-time
- ✅ RESTful API tự động
- ✅ Dashboard quản lý trực quan
- ✅ Row Level Security (RLS)

#### Cách kết nối:
1. Truy cập [supabase.com](https://supabase.com)
2. Tạo project mới
3. Trong Builder.io, click [Connect to Supabase](#open-mcp-popover)
4. Cấu hình các biến môi trường:

```bash
SUPABASE_URL="https://your-project.supabase.co"
SUPABASE_ANON_KEY="your-anon-key"
SUPABASE_SERVICE_ROLE_KEY="your-service-role-key"
DATABASE_URL="postgresql://postgres:password@db.your-project.supabase.co:5432/postgres"
```

### 3. **PlanetScale** 🌍
PlanetScale sử dụng MySQL với tính năng branching và serverless.

#### Ưu điểm:
- ✅ MySQL serverless
- ✅ Database branching
- ✅ Zero-downtime schema changes
- ✅ Horizontal scaling

#### Cách kết nối:
1. Tạo tài khoản tại [planetscale.com](https://planetscale.com)
2. Tạo database mới
3. Lấy connection string và cấu hình:

```bash
DATABASE_URL="mysql://username:password@aws.connect.psdb.cloud/database-name?sslaccept=strict"
```

### 4. **Railway** 🚂
Railway cung cấp PostgreSQL managed với deployment dễ dàng.

#### Ưu điểm:
- ✅ Setup nhanh chóng
- ✅ Tích hợp CI/CD
- ✅ Pricing trong suốt

#### Cách kết nối:
1. Đăng ký tại [railway.app](https://railway.app)
2. Tạo PostgreSQL service
3. Cấu hình connection:

```bash
DATABASE_URL="postgresql://postgres:password@containers-us-west-xxx.railway.app:5432/railway"
```

## 🔧 Cách sử dụng MCP Integrations trong Builder.io

### Bước 1: Mở MCP Popover
Click vào [Open MCP popover](#open-mcp-popover) để xem danh sách các integration có sẵn.

### Bước 2: Chọn Database Service
Chọn database service phù hợp:
- [Connect to Neon](#open-mcp-popover) - Cho PostgreSQL serverless
- [Connect to Supabase](#open-mcp-popover) - Cho full-stack solution
- [Connect to Prisma Postgres](#open-mcp-popover) - Cho ORM integration

### Bước 3: Cấu hình Connection
Làm theo hướng dẫn trong popover để hoàn tất kết nối.

## 🛠️ Setup Database Schema

### Sử dụng Prisma (Khuyến nghị)
```bash
# Cài đặt Prisma
npm install prisma @prisma/client

# Khởi tạo Prisma
npx prisma init

# Tạo và chạy migration
npx prisma migrate dev --name init

# Generate Prisma client
npx prisma generate
```

### Schema mẫu cho MSC Center:
```prisma
// prisma/schema.prisma
generator client {
  provider = "prisma-client-js"
}

datasource db {
  provider = "postgresql"
  url      = env("DATABASE_URL")
}

model User {
  id        String   @id @default(cuid())
  email     String   @unique
  name      String?
  role      Role     @default(USER)
  createdAt DateTime @default(now())
  updatedAt DateTime @updatedAt
  posts     Post[]
}

model Post {
  id        String   @id @default(cuid())
  title     String
  content   String?
  published Boolean  @default(false)
  authorId  String
  author    User     @relation(fields: [authorId], references: [id])
  createdAt DateTime @default(now())
  updatedAt DateTime @updatedAt
}

enum Role {
  USER
  ADMIN
  MENTOR
}
```

## 🔐 Bảo mật Database

### 1. Environment Variables
Không bao giờ commit database credentials vào code. Sử dụng environment variables:

```bash
# .env.local (KHÔNG commit file này)
DATABASE_URL="your-connection-string"
DATABASE_DIRECT_URL="your-direct-connection-string" # Cho migrations
```

### 2. Connection Pooling
Sử dụng connection pooling để tối ưu hiệu suất:

```bash
# Với Neon
DATABASE_URL="postgresql://user:pass@ep-xxx.neon.tech/db?pgbouncer=true"

# Với Supabase
DATABASE_URL="postgresql://postgres:pass@db.xxx.supabase.co:6543/postgres"
```

### 3. Row Level Security (RLS)
Khi sử dụng Supabase, bật RLS để bảo mật dữ liệu:

```sql
-- Bật RLS cho bảng users
ALTER TABLE users ENABLE ROW LEVEL SECURITY;

-- Tạo policy
CREATE POLICY "Users can view own data" ON users
  FOR SELECT USING (auth.uid() = id);
```

## 📊 Monitoring và Backup

### 1. Database Monitoring
- **Neon**: Built-in monitoring dashboard
- **Supabase**: Real-time metrics và logs
- **PlanetScale**: Insights dashboard

### 2. Automated Backup
Hầu hết các dịch vụ cloud đều có backup tự động:
- Neon: Point-in-time recovery
- Supabase: Daily backups
- Railway: Automated snapshots

## 🚀 Best Practices

### 1. Database Design
- Sử dụng UUID thay vì auto-increment IDs
- Tạo indexes cho các query thường xuyên
- Normalize dữ liệu hợp lý

### 2. Performance Optimization
- Sử dụng connection pooling
- Cache queries khi có thể
- Optimize N+1 queries

### 3. Development Workflow
- Sử dụng database branching (Neon/PlanetScale)
- Test migrations trên development environment
- Backup trước khi deploy production

## 🆘 Troubleshooting

### Lỗi thường gặp:

**1. Connection timeout**
```bash
# Kiểm tra connection pooling settings
DATABASE_URL="postgresql://user:pass@host/db?pgbouncer=true&connection_limit=10"
```

**2. SSL issues**
```bash
# Thêm SSL mode
DATABASE_URL="postgresql://user:pass@host/db?sslmode=require"
```

**3. Migration errors**
```bash
# Reset database (chỉ trên development)
npx prisma migrate reset

# Đồng bộ schema không cần migration
npx prisma db push
```

## 📞 Hỗ trợ

Nếu gặp vấn đề khi kết nối database:

1. **Check documentation**: Xem tài liệu của từng service
2. **Community support**: Discord/Slack channels của các service
3. **Contact team**: Liên hệ team MSC Center qua Slack
4. **Professional support**: [Contact Support](#reach-support) trong Builder.io

---

**Lưu ý**: Luôn test kết nối database trên development environment trước khi deploy lên production. Đảm bảo backup dữ liệu quan trọng thường xuyên.

**Cập nhật**: Tài liệu này được cập nhật thường xuyên. Phiên bản mới nhất luôn có tại repository của dự án.
