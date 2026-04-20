# Cognitia AI Assistant

## Project Overview

Cognitia AI Assistant is a full-stack conversational AI web application developed for the Cognitia Round 2 project submission.

The platform allows users to ask one question at a time and receive one intelligent AI-generated response using the Groq API.

The application follows a clean single-query interaction model without continuous chat history.

---

## Live Demo

Frontend: https://YOUR-FRONTEND-URL.vercel.app

Backend API: https://ai-assistant-cognitia.vercel.app

---

## Features

- Single question → single AI response
- Clean modern landing page
- Voice input using browser speech recognition
- Copy AI response button
- Return to home page button
- Markdown formatted AI responses
- Loading states
- Input validation
- API request rate limiting
- Secure backend API integration

---

## Tech Stack

### Frontend
- React
- Vite
- Axios
- React Markdown

### Backend
- Node.js
- Express.js
- Groq API
- Express Rate Limit

### Deployment
- Vercel (Frontend)
- Vercel (Backend)

---

## Project Structure

cognitia-project/
├── frontend/
└── backend/

---

## Setup Instructions

### Backend

cd backend  
npm install  
npm run dev

### Frontend

cd frontend  
npm install  
npm run dev

---

## Environment Variables

Create `backend/.env`

PORT=5000  
GROQ_API_KEY=your_api_key

---

## API Endpoint

POST /api/ask

Request:

{
  "question": "What is Artificial Intelligence?"
}

Response:

{
  "answer": "AI generated response"
}

---

## Security Practices

- Environment variables for API keys
- Backend-only AI API access
- Input length validation
- Rate limiting for API abuse prevention

---

## Future Improvements

- User authentication
- Saved chat history
- Theme toggle
- Multi-language support

---

## Author

Aritrika Das
