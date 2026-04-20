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

  const startListening = () => {
    const SpeechRecognition =
      window.SpeechRecognition || window.webkitSpeechRecognition;

    if (!SpeechRecognition) {
      alert("Voice recognition not supported in this browser.");
      return;
    }

    const recognition = new SpeechRecognition();
    recognition.lang = "en-US";
    recognition.start();

    recognition.onresult = (event) => {
      const transcript = event.results[0][0].transcript;
      setQuestion(transcript);
    };
  };

  if (!started) {
    return (
      <div className="page">
        <div className="hero">
          <p className="tag">AI Powered Query Platform</p>
          <h1>Cognitia AI Assistant</h1>
          <p className="subtitle">
            Your smart AI companion for instant answers, ideas, and learning.
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
        <div className="top-bar">
          <button className="back-btn" onClick={() => setStarted(false)}>
            ← Home
          </button>
        </div>

        <p className="tag">AI Powered Query Platform</p>
        <h1>Cognitia AI Assistant</h1>

        <textarea
          rows="5"
          placeholder="Ask one question..."
          value={question}
          onChange={(e) => setQuestion(e.target.value)}
        />

        <div className="btn-group">
          <button onClick={askAI} disabled={loading}>
            {loading ? "Thinking..." : "Ask AI"}
          </button>

          <button className="mic-btn" onClick={startListening}>
            🎤 Voice
          </button>
        </div>

        {answer && (
          <div className="response">
            <div className="response-top">
              <h3>Response</h3>

              <button
                className="copy-btn"
                onClick={() => navigator.clipboard.writeText(answer)}
              >
                Copy
              </button>
            </div>

            <ReactMarkdown>{answer}</ReactMarkdown>
          </div>
        )}
      </div>
    </div>
  );
}

export default App;