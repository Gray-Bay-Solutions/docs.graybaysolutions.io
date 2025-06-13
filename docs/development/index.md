# Development Documentation

Welcome to the development documentation hub. This section contains all technical documentation, coding standards, deployment guides, and development workflows.

## Tech Stack Overview

### Frontend Technologies
- **Next.js 14** - React framework with App Router
- **TypeScript** - Type-safe JavaScript
- **Tailwind CSS** - Utility-first CSS framework
- **Framer Motion** - Animation library
- **Lucide React** - Icon library

### Backend Technologies
- **Node.js** - Server runtime
- **MDX** - Markdown with React components
- **Prism.js** - Syntax highlighting

### Development Tools
- **ESLint** - Code linting
- **Prettier** - Code formatting
- **Git** - Version control
- **PM2** - Process management
- **Nginx** - Web server

## Quick Links

### 📋 Standards & Guidelines
- [Coding Standards](./coding-standards.md) - Code style and best practices
- [Git Workflow](./git-workflow.md) - Branching strategy and commit conventions
- [Code Review Process](./code-review.md) - PR guidelines and review checklist

### 🚀 Deployment & Infrastructure
- [Deployment Guide](./deployment.md) - Step-by-step deployment process
- [Environment Setup](./environment-setup.md) - Local development setup
- [CI/CD Pipeline](./cicd.md) - Automated deployment pipeline

### 🔧 Development Workflows
- [Feature Development](./feature-development.md) - How to develop new features
- [Bug Fixes](./bug-fixes.md) - Bug reporting and fixing process
- [Testing Guidelines](./testing.md) - Testing standards and practices

### 📚 API & Architecture
- [API Documentation](./api.md) - Internal API endpoints and usage
- [Architecture Overview](./architecture.md) - System architecture and design patterns
- [Database Schema](./database.md) - Data models and relationships

## Getting Started for New Developers

1. **Environment Setup**
   - Clone the repository
   - Install Node.js (v18+)
   - Run `npm install`
   - Copy `.env.example` to `.env.local`

2. **Development Workflow**
   - Create feature branch from `main`
   - Follow coding standards
   - Write tests for new features
   - Submit PR for review

3. **Key Resources**
   - [Local Development Setup](./environment-setup.md)
   - [Coding Standards](./coding-standards.md)
   - [Git Workflow](./git-workflow.md)

## Common Commands

```bash
# Development
npm run dev          # Start development server
npm run build        # Build for production  
npm run lint         # Run ESLint
npm run type-check   # Check TypeScript

# Deployment
./deploy.sh          # Deploy to production
pm2 restart app      # Restart application
```

## Need Help?

- **Code Questions**: Ask in #development channel
- **Deployment Issues**: Check [Deployment Guide](./deployment.md)
- **Architecture Decisions**: Review [Architecture Overview](./architecture.md)
- **Standards Clarification**: See [Coding Standards](./coding-standards.md)

---

*Keep this documentation updated as our tech stack and processes evolve.* 