import { useState } from "react";
import axios from "axios";
import ReactMarkdown from "react-markdown";
import "./App.css";

function App() {
  const [started, setStarted] = useState(false);
  const [question, setQuestion] = useState("");
  const [answer, setAnswer] = useState("");
  const [loading, setLoading] = useState(false);

  const askAI = async () => {
    if (!question.trim()) return;

    try {
      setLoading(true);
      setAnswer("");

      const res = await axios.post(
        "https://ai-assistant-cognitia.vercel.app/api/ask",
        { question }
      );

      setAnswer(res.data.answer);
    } catch (error) {
      setAnswer("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  if (!started) {
    return (
      <div className="page">
        <div className="hero">
          <p className="tag">AI Powered Query Platform</p>
          <h1>Cognitia AI Assistant</h1>
          <p className="subtitle">
            Ask one question. Get one powerful AI response instantly.
          </p>

          <button className="start-btn" onClick={() => setStarted(true)}>
            Get Started
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="page">
      <div className="container">
        <p className="tag">AI Powered Query Platform</p>
        <h1>Cognitia AI Assistant</h1>

        <textarea
          rows="5"
          placeholder="Ask one question..."
          value={question}
          onChange={(e) => setQuestion(e.target.value)}
        />

        <button onClick={askAI} disabled={loading}>
          {loading ? "Thinking..." : "Ask AI"}
        </button>

        {answer && (
          <div className="response">
            <h3>Response</h3>
            <ReactMarkdown>{answer}</ReactMarkdown>
          </div>
        )}
      </div>
    </div>
  );
}

export default App;