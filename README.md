# Frontend Developer Task

A full-stack authentication application built as part of an internship assignment.  
The project implements a complete login/signup flow with JWT-based authentication and a protected dashboard.

---

## Tech Stack

### Frontend
- Next.js (App Router)
- TypeScript
- Axios
- Tailwind CSS

### Backend
- Node.js
- Express.js
- MongoDB
- JWT Authentication
- bcrypt

---

## Features

- User Signup
- User Login
- Password hashing
- JWT token-based authentication
- Protected Dashboard route
- Logout functionality
- Clean separation of frontend and backend

---

## Project Structure

frontend-developer-task/
├── backend/
│ ├── models/
│ ├── routes/
│ ├── middleware/
│ ├── server.js
│ └── package.json
│
├── frontend/
│ ├── src/app/
│ │ ├── login/
│ │ ├── signup/
│ │ └── dashboard/
│ ├── public/
│ └── package.json
│
└── README.md

## Setup Instructions

### Backend
cd backend
npm install
npm start

Create a .env file in the backend directory with:
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret


### Frontend
cd frontend
npm install
npm run dev

# Usage
Open http://localhost:3000/login
Signup with a new account
Login using the same credentials
Access the dashboard after successful authentication
Logout to clear the session


Best wishes,
Soumya
