# Hisab - Workshop Salary Management System

A React-based application for managing workshop workers, attendance, and salaries using MongoDB.

## Features

- Worker management
- Attendance tracking
- Salary calculation
- Dashboard with statistics
- Responsive design

## Setup

1. Clone the repository
2. Install dependencies: `npm install`
3. Set up MongoDB:
   - Create a MongoDB Atlas account
   - Create a cluster
   - Get the connection string
   - Create `.env.local` with `MONGODB_URI=your_connection_string`
4. Run development server: `npm run dev`

## Deployment

1. Push to GitHub
2. Connect to Vercel
3. Add environment variables in Vercel dashboard
4. Deploy

## MongoDB Setup

1. Go to [MongoDB Atlas](https://www.mongodb.com/atlas)
2. Create account and cluster
3. Create database user
4. Whitelist IP (0.0.0.0/0 for development)
5. Get connection string: `mongodb+srv://username:password@cluster.mongodb.net/database`
6. Replace <password> and <database>

## Hosting on Vercel

1. Create GitHub repository
2. Push code
3. Go to Vercel, import project
4. Add MONGODB_URI in environment variables
5. Deploy