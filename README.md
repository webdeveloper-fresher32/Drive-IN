# 🚘 Car Rental Pro - Modern Dashboard

A professional **Next.js 14** car rental management dashboard using **TypeScript**, **shadcn/ui**, **NextAuth.js**, and **TailwindCSS**. Features a modern UI with dark/light theme support, comprehensive car listing management, and detailed audit logging.

## ✨ Features

- 🚗 **Complete Car Rental Management**
  - Car listing approval workflow
  - Detailed car information tracking
  - Location and pricing management
  - Status tracking (pending/approved/rejected)
- 📊 **Real-time Dashboard**
  - Fleet status overview
  - Comprehensive audit logs
  - Quick actions for car approvals/rejections
- 🔐 **Secure Authentication**
  - NextAuth.js integration
  - Role-based access control
  - Demo credentials available
- 🎨 **Modern UI/UX**
  - Dark/Light theme support
  - Responsive design
  - Toast notifications
  - Optimized table rendering
- ⚡ **Performance Optimized**
  - React.memo for table components
  - Selective row re-rendering
  - Efficient state management
  - Scroll position preservation

## 🛠 Tech Stack

- [Next.js 14](https://nextjs.org) - React framework
- [TypeScript](https://www.typescriptlang.org) - Type safety
- [NextAuth.js](https://next-auth.js.org) - Authentication
- [shadcn/ui](https://ui.shadcn.com) - UI components
- [TailwindCSS](https://tailwindcss.com) - Styling
- [SQLite](https://www.sqlite.org) - Local development database
- **In-memory data** for demo deployment

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ and npm

### Local Development

1. Clone the repository:

   ```bash
   git clone [your-repo-url]
   cd NextJS-bare-repo-hex
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Set up environment variables:

   ```bash
   cp .env.example .env.local
   ```

4. Run the development server:
   ```bash
   npm run dev
   ```

Visit [http://localhost:3000](http://localhost:3000) and use these demo credentials:

- Email: admin@carrental.com
- Password: demo123

### Production Build

```bash
npm run build
npm start
```

## 🚀 Deployment

### Vercel Deployment

1. Push your code to GitHub

2. Import to Vercel and set these environment variables:
   ```env
   NEXTAUTH_SECRET=your-secret-here
   NEXTAUTH_URL=https://your-app-url.vercel.app
   ```

The app uses in-memory data storage, so no additional database setup is required for the demo.

## 📱 Features In Detail

### Car Management

- Complete CRUD operations for car listings
- Detailed car information:
  - Model and year
  - Rental price per day
  - Location
  - Submission details
  - Status tracking

### Audit System

- Comprehensive action logging
- Track all car-related operations:
  - Approvals/Rejections
  - Edits
  - Creations/Deletions
- Detailed audit information:
  - Admin details
  - Timestamp
  - IP address
  - User agent
  - Previous/New values

### Dashboard Analytics

- Fleet status overview
- Status distribution
- Quick action capabilities
- Filterable audit logs

### Authentication & Security

- Secure credential-based auth
- Protected API routes
- Session management
- Demo user accounts

## 🎨 Theme System

The application supports both light and dark themes:

- System preference detection
- Runtime theme switching
- Persistent theme selection
- Smooth theme transitions

## 📁 Project Structure

```
/components          # React components
  /auth             # Authentication components
  /dashboard        # Dashboard-specific components
  /layout           # Layout components
  /ui               # shadcn/ui components
/contexts           # React contexts
/db                 # Database mock and samples
/hooks              # Custom React hooks
/pages              # Next.js pages
/public             # Static assets
/styles             # Global styles
/types              # TypeScript types
/utils              # Utility functions
```

## 🔐 API Routes

- `/api/cars` - Car management endpoints
- `/api/auth` - Authentication endpoints
- `/api/audit` - Audit log endpoints

## 💡 Future Enhancements

- [ ] Add real database integration
- [ ] Implement file upload for car images
- [ ] Add user management system
- [ ] Enhance analytics dashboard
- [ ] Add booking management
- [ ] Implement email notifications
- [ ] Add multi-language support
- [ ] Enhance search capabilities

## 📜 License

This project is licensed under the MIT License.

## 🤝 Contributing

Contributions are welcome! Please feel free to submit issues and pull requests.

---

Built with ❤️ using Next.js and shadcn/ui
