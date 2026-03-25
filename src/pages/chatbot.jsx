import React, { useEffect, useRef, useState } from "react";

export default function Chatbot() {
  const [messages, setMessages] = useState([
    {
      role: "bot",
      text: "Hi — I’m Mireqq Assistant. Ask me about Miroslaw Mus, his projects, skills, or experience.",
    },
  ]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);

  const chatBoxRef = useRef(null);

  useEffect(() => {
    if (chatBoxRef.current) {
      chatBoxRef.current.scrollTop = chatBoxRef.current.scrollHeight;
    }
  }, [messages, loading]);

  async function onSend(e) {
    e.preventDefault();
    const text = input.trim();
    if (!text || loading) return;

    const userMessage = { role: "user", text };
    setMessages((m) => [...m, userMessage]);
    setInput("");
    setLoading(true);

    try {
      const res = await fetch("/api/chat", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ message: text }),
      });

      const data = await res.json();

      setMessages((m) => [
        ...m,
        {
          role: "bot",
          text: data.reply || "No reply received.",
        },
      ]);
    } catch (error) {
      setMessages((m) => [
        ...m,
        {
          role: "bot",
          text: "Error connecting to chatbot backend.",
        },
      ]);
    } finally {
      setLoading(false);
    }
  }

  return (
    <main className="page">
      <section className="card">
        <h1>AI Chatbot</h1>
        <p className="muted">
          Ask about my background, projects, technologies, and experience.
        </p>

        <div className="chat">
          <div className="chat-box" ref={chatBoxRef}>
            {messages.map((m, i) => (
              <div key={i} className={`msg ${m.role}`}>
                {m.text}
              </div>
            ))}
            {loading && <div className="msg bot">Thinking...</div>}
          </div>

          <form onSubmit={onSend} className="chat-form">
            <input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Ask me about Miroslaw Mus..."
            />
            <button className="btn" type="submit" disabled={loading}>
              {loading ? "..." : "Send"}
            </button>
          </form>
        </div>
      </section>
    </main>
  );
}
