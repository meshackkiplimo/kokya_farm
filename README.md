# Farmec Equipment Rental System 🚜

A full-stack web application for renting and managing farm equipment. This platform enables farmers to rent various agricultural machinery and equipment while providing administrators with tools to manage rentals, orders, and user interactions.

## Features 🌟

- **Equipment Rental**: Browse and rent various farming equipment
- **User Authentication**: Secure login and registration system
- **Order Management**: Track and manage equipment rental orders
- **User Profiles**: Manage user information and rental history
- **Admin Dashboard**: Manage equipment listings and rental requests
- **Real-time Status Updates**: Track rental status and availability
- **Responsive Design**: Works seamlessly on desktop and mobile devices

## Tech Stack 💻

### Frontend
- React with TypeScript
- Vite for build tooling
- Tailwind CSS for styling
- shadcn/ui component library
- React Router for navigation
- Auth0 for authentication

### Backend
- Node.js with TypeScript
- Express.js framework
- MongoDB for database
- JWT for authentication
- RESTful API architecture

## Project Structure 📁

```
├── Farmec.com-backend/        # Backend server code
│   ├── src/
│   │   ├── config/           # Database & app configuration
│   │   ├── controllers/      # Request handlers
│   │   ├── middleware/       # Custom middleware
│   │   ├── models/          # Database models
│   │   └── routes/          # API routes
│
├── farmec.com-frontend/      # Frontend application
│   ├── public/              # Static assets
│   └── src/
│       ├── api/            # API integration
│       ├── assets/         # Images and media
│       ├── auth/           # Authentication logic
│       ├── components/     # Reusable components
│       ├── forms/          # Form components
│       ├── layouts/        # Page layouts
│       └── pages/          # Application pages
```

## Getting Started 🚀

### Prerequisites
- Node.js (v16 or higher)
- npm or yarn
- MongoDB instance

### Backend Setup

1. Navigate to backend directory:
```bash
cd Farmec.com-backend
```

2. Install dependencies:
```bash
npm install
```

3. Create .env file from example:
```bash
cp .env.example .env
```

4. Start development server:
```bash
npm run dev
```

### Frontend Setup

1. Navigate to frontend directory:
```bash
cd farmec.com-frontend
```

2. Install dependencies:
```bash
npm install
```

3. Create .env file from example:
```bash
cp .env.example .env
```

4. Start development server:
```bash
npm run dev
```

## Available Scripts 📝

### Backend
- `npm run dev`: Start development server
- `npm run build`: Build for production
- `npm start`: Start production server

### Frontend
- `npm run dev`: Start development server
- `npm run build`: Build for production
- `npm run preview`: Preview production build
- `npm run lint`: Run ESLint

## Contributing 🤝

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## License 📄

This project is licensed under the MIT License - see the LICENSE file for details.
