import { useState } from "react";
import axios from "axios";
import ReactMarkdown from "react-markdown";
import "./App.css";

function App() {
  const [question, setQuestion] = useState("");
  const [answer, setAnswer] = useState("");
  const [loading, setLoading] = useState(false);

  const askAI = async () => {
    if (!question.trim()) return;

    try {
      setLoading(true);
      setAnswer("");

      const res = await axios.post("http://localhost:5000/api/ask", {
        question,
      });

      setAnswer(res.data.answer);
    } catch (error) {
      setAnswer("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="container">
      <h1>Cognitia AI Assistant</h1>

      <textarea
        rows="5"
        placeholder="Ask one question..."
        value={question}
        onChange={(e) => setQuestion(e.target.value)}
      />

      <button onClick={askAI}>
        {loading ? "Thinking..." : "Ask AI"}
      </button>

      {answer && (
        <div className="response">
          <h3>Response:</h3>
          <ReactMarkdown>{answer}</ReactMarkdown>
        </div>
      )}
    </div>
  );
}

export default App;