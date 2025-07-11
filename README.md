# 🧠 Mental Health Journal App

A full-stack AI-powered mental health journaling application built with Next.js, Node.js, and MongoDB.

## ✨ Features

- **Journal Entries**: Write and manage personal journal entries with mood tracking
- **Mood Tracking**: Log daily moods with scores and descriptions
- **AI Chatbot**: Get support and guidance from an AI assistant
- **Mood Trends**: Visualize your emotional patterns over time
- **Dashboard**: Overview of your mental health journey
- **User Authentication**: Secure login and registration system

## 🛠️ Tech Stack

- **Frontend**: Next.js 14, React, TypeScript, Tailwind CSS
- **Backend**: Node.js, Express.js, MongoDB
- **Database**: MongoDB Atlas
- **AI**: Ollama with Llama model
- **Authentication**: JWT tokens
- **Deployment**: Vercel (Frontend), Render (Backend)

## 🚀 Quick Start

### Prerequisites

- Node.js 18+ 
- MongoDB Atlas account
- Ollama (for local AI)

### Local Development

1. **Clone the repository**
   ```bash
   git clone <your-repo-url>
   cd mental-health-app
   ```

2. **Backend Setup**
   ```bash
   cd backend
   npm install
   cp .env.example .env
   # Edit .env with your MongoDB URI and JWT secret
   npm run dev
   ```

3. **Frontend Setup**
   ```bash
   cd ..
   npm install
   cp .env.example .env.local
   # Edit .env.local with your backend URL
   npm run dev
   ```

4. **Start Ollama**
   ```bash
   ollama run llama3.2
   ```

5. **Visit the application**
   - Frontend: http://localhost:3000
   - Backend: http://localhost:5000

## 🌐 Deployment

### Quick Deployment

Run the deployment script for guidance:
```bash
chmod +x deploy.sh
./deploy.sh
```

### Detailed Deployment Guides

- **[Backend Deployment (Render)](BACKEND_DEPLOYMENT.md)** - Deploy your Node.js backend
- **[Frontend Deployment (Vercel)](FRONTEND_DEPLOYMENT.md)** - Deploy your Next.js frontend
- **[Complete Deployment Checklist](DEPLOYMENT_CHECKLIST.md)** - Step-by-step deployment guide

### Environment Variables

#### Backend (Render)
```
MONGODB_URI=mongodb+srv://...
JWT_SECRET=your-super-secret-key
FRONTEND_URL=https://your-app.vercel.app
NODE_ENV=production
```

#### Frontend (Vercel)
```
NEXT_PUBLIC_API_URL=https://your-backend.onrender.com
```

## 📁 Project Structure

```
mental-health-app/
├── src/                    # Frontend source code
│   ├── app/               # Next.js app directory
│   ├── components/        # React components
│   └── lib/              # Utilities and configurations
├── backend/               # Backend source code
│   ├── src/
│   │   ├── routes/       # API routes
│   │   ├── models/       # MongoDB models
│   │   └── middleware/   # Express middleware
│   └── server.js         # Main server file
├── BACKEND_DEPLOYMENT.md  # Backend deployment guide
├── FRONTEND_DEPLOYMENT.md # Frontend deployment guide
├── DEPLOYMENT_CHECKLIST.md # Complete deployment checklist
└── deploy.sh             # Deployment helper script
```

## 🔧 API Endpoints

### Authentication
- `POST /api/auth/register` - User registration
- `POST /api/auth/login` - User login

### Journal
- `GET /api/journal` - Get all journal entries
- `POST /api/journal` - Create journal entry
- `PUT /api/journal/:id` - Update journal entry
- `DELETE /api/journal/:id` - Delete journal entry
- `DELETE /api/journal` - Delete all journal entries

### Mood
- `GET /api/mood` - Get all mood entries
- `POST /api/mood` - Create mood entry
- `DELETE /api/mood/:id` - Delete mood entry
- `DELETE /api/mood` - Delete all mood entries

### Chat
- `POST /api/chat` - Send message to AI
- `GET /api/chat/history` - Get chat history
- `DELETE /api/chat/history` - Clear chat history

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## 📄 License

This project is licensed under the MIT License.

## 🆘 Support

If you encounter any issues:

1. Check the [deployment guides](DEPLOYMENT_CHECKLIST.md)
2. Review the troubleshooting section
3. Open an issue on GitHub

## 🎯 Roadmap

- [ ] Mobile app (React Native)
- [ ] Advanced analytics
- [ ] Export functionality
- [ ] Social features
- [ ] Professional therapy integration
