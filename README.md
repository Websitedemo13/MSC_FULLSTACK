# 🚀 MSC Educational Platform - Next-Gen Learning Experience

<div align="center">

![MSC Logo](https://img.shields.io/badge/MSC-Educational%20Platform-blue?style=for-the-badge&logo=react)
![Version](https://img.shields.io/badge/Version-2.0.0-green?style=for-the-badge)
![License](https://img.shields.io/badge/License-Custom-orange?style=for-the-badge)

**The most advanced educational platform built with cutting-edge technologies**

[🌟 Features](#-features) • [🚀 Quick Start](#-quick-start) • [📖 Documentation](#-documentation) • [🛠 Troubleshooting](#-troubleshooting) • [🤝 Contributing](#-contributing)

</div>

---

## 📋 Table of Contents

- [✨ Features](#-features)
- [🏗 Architecture](#-architecture)
- [🚀 Quick Start](#-quick-start)
- [📦 Installation](#-installation)
- [⚙️ Configuration](#️-configuration)
- [🌐 Usage](#-usage)
- [🎨 Admin Panel](#-admin-panel)
- [🛠 Development](#-development)
- [🧪 Testing](#-testing)
- [🚢 Deployment](#-deployment)
- [🔧 Troubleshooting](#-troubleshooting)
- [📚 API Documentation](#-api-documentation)
- [🤝 Contributing](#-contributing)
- [📄 License](#-license)
- [🙏 Acknowledgments](#-acknowledgments)

---

## ✨ Features

### 🎓 **Core Learning Features**

- **📚 Interactive Course Management** - Dynamic course creation and management
- **👨‍🏫 Mentor-Student System** - 1-on-1 and group mentoring sessions
- **📊 Progress Tracking** - Comprehensive learning analytics with gamification
- **🏆 Achievement System** - Badges, levels, and skill progression
- **📝 Interactive Quizzes** - AI-powered auto-grading and feedback

### 🤖 **AI-Powered Tools**

- **💬 AI Chatbot** - 24/7 intelligent student support with NLP
- **🎯 Personalized Learning** - AI-driven content recommendations
- **📈 Smart Analytics** - Predictive learning outcomes
- **🗣 Voice Recognition** - Speech-to-text for accessibility

### 🎥 **Advanced Communication**

- **📹 Virtual Classroom** - HD video conferencing with screen sharing
- **🖼 Collaborative Whiteboard** - Real-time drawing and annotation
- **📺 Live Streaming** - Lecture broadcasting and recording
- **💬 Real-time Chat** - Instant messaging with file sharing

### 🎨 **Modern UI/UX**

- **🌙 Dark/Light Theme** - Customizable interface themes
- **📱 Responsive Design** - Mobile-first approach
- **🌍 Multi-language** - Support for Vietnamese, English, Japanese, Korean
- **♿ Accessibility** - WCAG 2.1 AA compliant

### 🔐 **Security & Admin**

- **🔒 Advanced Authentication** - JWT with role-based access
- **👑 Admin Dashboard** - Comprehensive management interface
- **📊 CMS System** - Visual content management with real-time preview
- **🛡 Data Protection** - GDPR compliant data handling

### 📱 **Progressive Web App**

- **📲 PWA Support** - Native app-like experience
- **⚡ Offline Mode** - Continue learning without internet
- **🔔 Push Notifications** - Real-time updates and reminders
- **💾 Background Sync** - Seamless data synchronization

---

## 🏗 Architecture

### **Tech Stack**

```
Frontend:
├── Next.js 15.0+ (React 18+ with App Router)
├── TypeScript 5.0+
├── Tailwind CSS 3.4+
├── Framer Motion 11.0+
├── Lucide React Icons
└── React Query/TanStack Query

Backend & Services:
├── Node.js 20+
├── Next.js API Routes
├── Prisma ORM
├── WebSocket (Socket.io)
└── AI/ML Integration

Development:
├── ESLint + Prettier
├── Husky + Lint-staged
├── Jest + Testing Library
├── Storybook
└── GitHub Actions CI/CD
```

### **System Architecture**

```mermaid
graph TB
    A[Client Browser] --> B[Next.js Frontend]
    B --> C[API Routes]
    C --> D[Database]
    C --> E[AI Services]
    B --> F[WebSocket Server]
    F --> G[Real-time Features]
    B --> H[PWA Service Worker]
    I[Admin Panel] --> B
    J[CMS Editor] --> B
```

---

## 🚀 Quick Start

### **Prerequisites**

- **Node.js** 20.0.0 or higher
- **npm** 10.0.0 or higher (or **yarn** 4.0.0+, **pnpm** 8.0.0+)
- **Git** 2.40.0 or higher

### **One-Command Setup**

```bash
# Clone and setup everything
curl -fsSL https://raw.githubusercontent.com/msc-edu/platform/main/scripts/setup.sh | bash
```

### **Manual Setup**

```bash
# 1. Clone the repository
git clone https://github.com/msc-edu/platform.git
cd platform

# 2. Install dependencies
npm install

# 3. Setup environment
cp .env.example .env.local

# 4. Start development server
npm run dev
```

🎉 **Open** [http://localhost:3001](http://localhost:3001) **to see the application!**

---

## 📦 Installation

### **Step 1: Environment Setup**

#### **Install Node.js (Recommended: Using nvm)**

```bash
# Install nvm (Node Version Manager)
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.0/install.sh | bash

# Restart terminal or run:
source ~/.bashrc

# Install and use Node.js 20
nvm install 20
nvm use 20
nvm alias default 20

# Verify installation
node --version  # Should show v20.x.x
npm --version   # Should show 10.x.x
```

#### **Alternative: Direct Installation**

- **Windows**: Download from [nodejs.org](https://nodejs.org)
- **macOS**: `brew install node@20`
- **Ubuntu/Debian**:
  ```bash
  curl -fsSL https://deb.nodesource.com/setup_20.x | sudo -E bash -
  sudo apt-get install -y nodejs
  ```

### **Step 2: Project Installation**

#### **Method 1: Using create-next-app**

```bash
npx create-next-app@latest msc-platform --typescript --tailwind --eslint --app --src-dir --import-alias "@/*"
cd msc-platform
```

#### **Method 2: Clone Repository**

```bash
git clone https://github.com/msc-edu/platform.git msc-platform
cd msc-platform
```

### **Step 3: Dependencies Installation**

#### **Using npm (Recommended)**

```bash
npm install
```

#### **Using Yarn**

```bash
yarn install
```

#### **Using pnpm (Fastest)**

```bash
npm install -g pnpm
pnpm install
```

### **Step 4: Environment Configuration**

```bash
# Copy environment template
cp .env.example .env.local

# Edit environment variables
nano .env.local  # or use your preferred editor
```

#### **Required Environment Variables**

```env
# Application
NEXT_PUBLIC_APP_URL=http://localhost:3001
NEXT_PUBLIC_APP_NAME="MSC Educational Platform"

# Database
DATABASE_URL="postgresql://username:password@localhost:5432/msc_platform"

# Authentication
NEXTAUTH_URL=http://localhost:3001
NEXTAUTH_SECRET="your-super-secret-key-here"

# AI Services
OPENAI_API_KEY="your-openai-api-key"
GEMINI_API_KEY="your-gemini-api-key"

# Video Services
AGORA_APP_ID="your-agora-app-id"
AGORA_APP_CERTIFICATE="your-agora-certificate"

# Email Services
SMTP_HOST="smtp.gmail.com"
SMTP_PORT=587
SMTP_USER="your-email@gmail.com"
SMTP_PASSWORD="your-app-password"

# File Storage
AWS_ACCESS_KEY_ID="your-aws-access-key"
AWS_SECRET_ACCESS_KEY="your-aws-secret-key"
AWS_S3_BUCKET_NAME="msc-platform-storage"
AWS_REGION="us-east-1"

# Analytics
GOOGLE_ANALYTICS_ID="G-XXXXXXXXXX"

# Admin Credentials (Development Only)
ADMIN_EMAIL="thanhlong@msc.edu.vn"
ADMIN_PASSWORD="123456"
```

---

## ⚙️ Configuration

### **Database Setup**

#### **PostgreSQL (Recommended)**

```bash
# Install PostgreSQL
# Ubuntu/Debian:
sudo apt-get install postgresql postgresql-contrib

# macOS:
brew install postgresql
brew services start postgresql

# Create database
sudo -u postgres createdb msc_platform
sudo -u postgres createuser --superuser $USER

# Setup Prisma
npx prisma generate
npx prisma db push
npx prisma db seed
```

#### **SQLite (Development)**

```env
# In .env.local
DATABASE_URL="file:./dev.db"
```

### **AI Services Configuration**

#### **OpenAI Setup**

1. Visit [OpenAI Platform](https://platform.openai.com)
2. Create API key
3. Add to `.env.local`

#### **Google Gemini Setup**

1. Visit [Google AI Studio](https://aistudio.google.com)
2. Generate API key
3. Add to `.env.local`

### **Video Conference Setup**

#### **Agora.io Configuration**

1. Create account at [Agora.io](https://www.agora.io)
2. Create new project
3. Get App ID and Certificate
4. Add to `.env.local`

---

## 🌐 Usage

### **Development Server**

```bash
# Start development server
npm run dev

# Start with custom port
npm run dev -- --port 3002

# Start with debugging
npm run dev:debug

# Start with production mode
npm run start
```

### **Available Scripts**

```bash
# Development
npm run dev          # Start development server
npm run dev:turbo    # Start with Turbopack (faster)
npm run dev:debug    # Start with debugging enabled

# Building
npm run build        # Create production build
npm run start        # Start production server
npm run export       # Generate static export

# Code Quality
npm run lint         # Run ESLint
npm run lint:fix     # Fix ESLint errors
npm run type-check   # Run TypeScript checks
npm run format       # Format code with Prettier

# Testing
npm run test         # Run all tests
npm run test:watch   # Run tests in watch mode
npm run test:coverage # Generate coverage report
npm run test:e2e     # Run end-to-end tests

# Database
npm run db:generate  # Generate Prisma client
npm run db:push      # Push schema to database
npm run db:migrate   # Run migrations
npm run db:seed      # Seed database
npm run db:reset     # Reset database

# Deployment
npm run analyze      # Analyze bundle size
npm run prepare      # Prepare for deployment
npm run deploy       # Deploy to production
```

---

## 🎨 Admin Panel

### **Access Admin Panel**

1. **URL**: [http://localhost:3001/admin/login](http://localhost:3001/admin/login)
2. **Credentials**:
   - **Email**: `thanhlong@msc.edu.vn`
   - **Password**: `123456`

### **Admin Features**

- **📊 Dashboard**: Overview of platform statistics
- **👥 User Management**: Manage students and mentors
- **📚 Course Management**: Create and edit courses
- **🎥 Content Management**: Upload and organize media
- **📈 Analytics**: Detailed platform analytics
- **⚙️ Settings**: Platform configuration
- **🎨 CMS Editor**: Visual content editing with floating widgets

### **CMS Editor Features**

- **🖼 Visual Editor**: WYSIWYG content editing
- **📱 Responsive Preview**: Desktop, tablet, mobile views
- **🎛 Floating Widgets**: Real-time clock, task manager, analytics
- **🎨 Design Tools**: Color picker, media library
- **💾 Version Control**: Save, undo, redo functionality

---

## 🛠 Development

### **Project Structure**

```
msc-website/
├── 📁 public/                 # Static assets
│   ├── images/
│   ├── icons/
│   └── favicon.ico
├── 📁 src/                    # Source code
│   ├── 📁 app/               # Next.js App Router
│   │   ├── 📁 admin/         # Admin pages
│   │   ├── 📁 api/           # API routes
│   │   ├── 📁 mentors/       # Mentor profiles
│   │   ├── 📁 virtual-classroom/ # Video conference
│   │   ├── 📁 student-progress/  # Progress tracking
│   │   └── layout.tsx
│   ├── 📁 components/        # Reusable components
│   │   ├── 📁 AIChat/        # AI Chatbot
│   │   ├── 📁 ui/            # UI components
│   │   └── Navigation.tsx
│   ├── 📁 contexts/          # React contexts
│   ├── 📁 hooks/             # Custom hooks
│   ├── 📁 lib/               # Utility libraries
│   ├── 📁 types/             # TypeScript types
│   └── 📁 utils/             # Helper functions
├── 📁 prisma/                # Database schema
├── 📁 docs/                  # Documentation
├── 📁 tests/                 # Test files
├── 📄 package.json
├── 📄 tailwind.config.js
├── 📄 next.config.js
└── 📄 tsconfig.json
```

### **Development Workflow**

```bash
# 1. Create feature branch
git checkout -b feature/awesome-feature

# 2. Make changes and test
npm run dev
npm run test

# 3. Check code quality
npm run lint
npm run type-check

# 4. Commit changes
git add .
git commit -m "feat: add awesome feature"

# 5. Push and create PR
git push origin feature/awesome-feature
```

### **Code Style Guide**

- **TypeScript**: Strict mode enabled
- **ESLint**: Next.js recommended rules
- **Prettier**: Automatic code formatting
- **Naming**: camelCase for variables, PascalCase for components
- **File Structure**: Feature-based organization

---

## 🧪 Testing

### **Test Setup**

```bash
# Install test dependencies
npm install --save-dev jest @testing-library/react @testing-library/jest-dom

# Run tests
npm run test
```

### **Test Types**

- **Unit Tests**: Component and function testing
- **Integration Tests**: API and database testing
- **E2E Tests**: Full user flow testing
- **Visual Tests**: Component screenshot testing

### **Test Examples**

```typescript
// Component test
import { render, screen } from '@testing-library/react';
import ChatBot from '@/components/AIChat/ChatBot';

test('renders chatbot correctly', () => {
  render(<ChatBot />);
  expect(screen.getByText('MSC AI Assistant')).toBeInTheDocument();
});

// API test
import { createMocks } from 'node-mocks-http';
import handler from '@/app/api/courses/route';

test('/api/courses returns courses', async () => {
  const { req, res } = createMocks({ method: 'GET' });
  await handler(req, res);
  expect(res._getStatusCode()).toBe(200);
});
```

---

## 🚢 Deployment

### **Production Build**

```bash
# Create optimized build
npm run build

# Test production build locally
npm run start
```

### **Deployment Platforms**

#### **Vercel (Recommended)**

```bash
# Install Vercel CLI
npm install -g vercel

# Deploy
vercel --prod
```

#### **Netlify**

```bash
# Build command: npm run build
# Publish directory: .next
```

#### **Docker**

```dockerfile
FROM node:20-alpine

WORKDIR /app
COPY package*.json ./
RUN npm ci --only=production

COPY . .
RUN npm run build

EXPOSE 3000
CMD ["npm", "start"]
```

#### **AWS/DigitalOcean**

```bash
# Using PM2
npm install -g pm2
pm2 start ecosystem.config.js
pm2 startup
pm2 save
```

### **Environment Variables for Production**

```env
NODE_ENV=production
NEXT_PUBLIC_APP_URL=https://yourdomain.com
DATABASE_URL="postgresql://prod_user:password@prod_host:5432/msc_platform"
```

---

## 🔧 Troubleshooting

### **Common Issues & Solutions**

#### **❌ Installation Issues**

**Problem**: `npm install` fails with permission errors

```bash
# Solution 1: Fix npm permissions
sudo chown -R $(whoami) ~/.npm
sudo chown -R $(whoami) /usr/local/lib/node_modules

# Solution 2: Use nvm (recommended)
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.0/install.sh | bash
nvm install 20
nvm use 20
```

**Problem**: `ENOSPC: no space left on device`

```bash
# Increase file watchers limit
echo fs.inotify.max_user_watches=524288 | sudo tee -a /etc/sysctl.conf
sudo sysctl -p
```

**Problem**: Module not found errors

```bash
# Clear cache and reinstall
rm -rf node_modules package-lock.json
npm cache clean --force
npm install
```

#### **❌ Development Server Issues**

**Problem**: Port 3001 already in use

```bash
# Solution 1: Kill process using port
sudo lsof -ti:3001 | xargs kill -9

# Solution 2: Use different port
npm run dev -- --port 3002
```

**Problem**: Hot reload not working

```bash
# Add to next.config.js
module.exports = {
  webpack: (config) => {
    config.watchOptions = {
      poll: 1000,
      aggregateTimeout: 300,
    }
    return config
  },
}
```

#### **❌ Database Issues**

**Problem**: Database connection failed

```bash
# Check PostgreSQL service
sudo systemctl status postgresql

# Start PostgreSQL
sudo systemctl start postgresql

# Check connection string
psql "postgresql://username:password@localhost:5432/msc_platform"
```

**Problem**: Prisma schema out of sync

```bash
# Reset database
npm run db:reset

# Or migrate manually
npm run db:migrate
```

#### **❌ Build Issues**

**Problem**: TypeScript compilation errors

```bash
# Check types
npm run type-check

# Fix common issues
npm update @types/node @types/react @types/react-dom
```

**Problem**: Out of memory during build

```bash
# Increase Node.js memory limit
export NODE_OPTIONS="--max-old-space-size=4096"
npm run build
```

#### **❌ Runtime Issues**

**Problem**: 500 Internal Server Error

```bash
# Check logs
npm run dev

# Enable debug mode
DEBUG=* npm run dev
```

**Problem**: Environment variables not loaded

```bash
# Check file name (must be .env.local for Next.js)
ls -la .env*

# Restart development server
npm run dev
```

### **Performance Issues**

#### **Slow Loading**

```bash
# Analyze bundle size
npm run analyze

# Optimize images
npm install next-optimized-images

# Enable compression
npm install compression
```

#### **Memory Leaks**

```bash
# Monitor memory usage
node --inspect npm run dev

# Use Chrome DevTools: chrome://inspect
```

### **Browser Issues**

#### **Safari Compatibility**

```css
/* Add to globals.css */
* {
  -webkit-backface-visibility: hidden;
  -webkit-transform: translateZ(0);
}
```

#### **Mobile Issues**

```html
<!-- Add to layout.tsx -->
<meta
  name="viewport"
  content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=0"
/>
```

### **Getting Help**

1. **📖 Check Documentation**: Comprehensive guides in `/docs`
2. **🐛 Search Issues**: GitHub Issues for known problems
3. **💬 Community**: Discord/Slack for real-time help
4. **📧 Support**: stephensouth1307@gmail.com for urgent issues

---

## 📚 API Documentation

### **Authentication Endpoints**

```
POST   /api/auth/login          # User login
POST   /api/auth/register       # User registration
POST   /api/auth/logout         # User logout
GET    /api/auth/me             # Get current user
```

### **Course Endpoints**

```
GET    /api/courses             # List all courses
POST   /api/courses             # Create new course
GET    /api/courses/:id         # Get course details
PUT    /api/courses/:id         # Update course
DELETE /api/courses/:id         # Delete course
```

### **User Management**

```
GET    /api/users               # List users (admin only)
GET    /api/users/:id           # Get user profile
PUT    /api/users/:id           # Update user profile
DELETE /api/users/:id           # Delete user (admin only)
```

### **AI Chat Endpoints**

```
POST   /api/chat/message        # Send message to AI
GET    /api/chat/history        # Get chat history
DELETE /api/chat/clear          # Clear chat history
```

### **Progress Tracking**

```
GET    /api/progress/:userId    # Get user progress
POST   /api/progress/update     # Update progress
GET    /api/achievements        # Get achievements
POST   /api/achievements/unlock # Unlock achievement
```

---

## 🤝 Contributing

### **Contributing Guidelines**

We welcome contributions! Please follow these steps:

1. **Fork the repository**
2. **Create feature branch**: `git checkout -b feature/amazing-feature`
3. **Make changes** and add tests
4. **Commit changes**: `git commit -m 'feat: add amazing feature'`
5. **Push to branch**: `git push origin feature/amazing-feature`
6. **Open Pull Request**

### **Commit Convention**

```
feat: add new feature
fix: bug fix
docs: documentation changes
style: formatting changes
refactor: code refactoring
test: add tests
chore: maintenance tasks
```

### **Code Review Process**

- All changes require PR review
- Automated tests must pass
- Code coverage must be maintained
- Documentation must be updated

---

## 📄 License

This project is licensed under a **Custom Educational License**.

**Copyright (c) 2024 MSC Educational Platform**
**Host: stephensouth1307@gmail.com**

### **License Terms**

- ✅ **Permitted**: Educational use, research, personal learning
- ✅ **Permitted**: Non-commercial modifications and distributions
- ❌ **Prohibited**: Commercial use without explicit permission
- ❌ **Prohibited**: Removing copyright notices
- ❌ **Prohibited**: Using MSC branding without permission

For commercial licensing inquiries, contact: **stephensouth1307@gmail.com**

---

## 🙏 Acknowledgments

### **Core Team**

- **Stephen South** - Project Lead & Architecture
- **MSC Development Team** - Feature Development
- **Community Contributors** - Bug fixes and improvements

### **Technologies Used**

- **Next.js** - React framework
- **Tailwind CSS** - Utility-first CSS
- **Framer Motion** - Animation library
- **Prisma** - Database ORM
- **TypeScript** - Type safety

### **Special Thanks**

- MSC Education for vision and support
- Open source community for amazing tools
- Beta testers for valuable feedback
- Contributors for improvements

---

## 📞 Support & Contact

### **Getting Help**

- 📧 **Email**: stephensouth1307@gmail.com
- 🌐 **Website**: [msc.edu.vn](https://msc.edu.vn)
- 💬 **Discord**: [MSC Community](https://discord.gg/msc-edu)
- 📱 **Phone**: +84 xxx xxx xxx

### **Office Hours**

- **Monday - Friday**: 9:00 AM - 6:00 PM (GMT+7)
- **Response Time**: Within 24 hours
- **Emergency Support**: Available for critical issues

---

<div align="center">

**⭐ Star this repository if it helped you! ⭐**

**Made with ❤️ by the MSC Team**

[🔝 Back to Top](#-msc-educational-platform---next-gen-learning-experience)

</div>
