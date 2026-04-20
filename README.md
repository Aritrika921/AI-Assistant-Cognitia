# Cognitia AI Assistant

## Project Overview
A full-stack AI web application built for Cognitia Round 2.

Users can ask one question at a time and receive one AI-generated response using Groq API. Each query and response is stored in MongoDB Atlas.

## Tech Stack

### Frontend
- React
- Vite
- Axios

### Backend
- Node.js
- Express.js
- MongoDB Atlas
- Mongoose
- Groq API

## Features

- Single question input
- Single response output
- No continuous chat history
- MongoDB storage for question and answer

## Folder Structure

cognitia-project/
├── frontend/
└── backend/

## Setup Instructions

### Backend

cd backend
npm install
npm run dev

### Frontend

cd frontend
npm install
npm run dev

## Environment Variables

Create backend/.env

PORT=5000
MONGO_URI=your_mongodb_uri
GROQ_API_KEY=your_groq_api_key

## API Endpoint

POST /api/ask

Request:
{
  "question": "What is AI?"
}

Response:
{
  "answer": "AI generated response"
}

## Deployment

Frontend and backend are deployed separately on Vercel.