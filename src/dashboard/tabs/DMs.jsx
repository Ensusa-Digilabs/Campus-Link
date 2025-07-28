import React, { useState } from "react";
import "./dms.css";

const chatsList = [
  { id: 1, name: "Alice", avatar: "https://randomuser.me/api/portraits/women/21.jpg", lastMessage: "Hey! Are you coming to the study group?", status: "online" },
  { id: 2, name: "Michael", avatar: "https://randomuser.me/api/portraits/men/42.jpg", lastMessage: "Don't forget the project deadline!", status: "offline" },
  { id: 3, name: "Sophia", avatar: "https://randomuser.me/api/portraits/women/45.jpg", lastMessage: "Let's grab coffee later.", status: "online" },
  { id: 4, name: "Noah", avatar: "https://randomuser.me/api/portraits/men/70.jpg", lastMessage: "Sending the slides!", status: "online" },
  { id: 5, name: "Emma", avatar: "https://randomuser.me/api/portraits/women/36.jpg", lastMessage: "Can we meet tomorrow?", status: "offline" },
  { id: 6, name: "Liam", avatar: "https://randomuser.me/api/portraits/men/50.jpg", lastMessage: "Game night on Friday?", status: "online" },
  { id: 7, name: "Olivia", avatar: "https://randomuser.me/api/portraits/women/12.jpg", lastMessage: "I just sent you the notes.", status: "online" },
];

export default function DMs() {
  const [selected, setSelected] = useState(null);
  const [messages, setMessages] = useState({
    1: [
      { from: "Alice", text: "Hey! Are you coming to the study group?" },
      { from: "You", text: "Yes, I’ll be there!" },
      { from: "Alice", text: "Great! Don’t forget to bring your laptop." },
    ],
    2: [
      { from: "Michael", text: "Don't forget the project deadline!" },
      { from: "You", text: "Thanks for the reminder. I'm almost done." },
      { from: "Michael", text: "Awesome, let me know if you want to review it together." },
    ],
    3: [
      { from: "Sophia", text: "Let's grab coffee later." },
      { from: "You", text: "Sounds good! What time?" },
      { from: "Sophia", text: "How about 4 PM at the campus cafe?" },
    ],
  });
  const [input, setInput] = useState("");

  const handleOpen = (id, name, lastMessage) => {
    setSelected({ id, name });
    if (!messages[id]) {
      setMessages((m) => ({
        ...m,
        [id]: [{ from: name, text: lastMessage }],
      }));
    }
  };

  const sendMessage = (e) => {
    e.preventDefault();
    if (!input.trim() || !selected) return;
    setMessages((m) => ({
      ...m,
      [selected.id]: [...(m[selected.id] || []), { from: "You", text: input }],
    }));
    setInput("");
  };

  return (
    <section className="section-glass">
      <h2 className="dm-title">Direct Messages</h2>

      <div className="dm-container">
        <aside className="dm-contacts">
          {chatsList.map((c) => (
            <button
              key={c.id}
              onClick={() => handleOpen(c.id, c.name, c.lastMessage)}
              className={`dm-contact ${selected?.id === c.id ? "active" : ""}`}
            >
              <div className="dm-avatar-wrapper">
                <img src={c.avatar} alt={c.name} className="dm-avatar" />
                <span className={`status-dot ${c.status}`}></span>
              </div>
              <div className="dm-info">
                <strong>{c.name}</strong>
                <div className="dm-last-msg">{c.lastMessage}</div>
              </div>
            </button>
          ))}
        </aside>

        <div className="dm-chat-window">
          {!selected ? (
            <div className="dm-placeholder">
              Select a chat to start messaging
            </div>
          ) : (
            <div className="fade-in">
              <header className="dm-header">Chat with {selected.name}</header>
              <div className="dm-messages">
                {(messages[selected.id] || []).map((m, i) => (
                  <div
                    key={i}
                    className={`dm-bubble ${
                      m.from === "You" ? "from-you" : "from-them"
                    }`}
                  >
                    {m.text}
                  </div>
                ))}
              </div>

              <form className="dm-input-form" onSubmit={sendMessage}>
                <input
                  type="text"
                  placeholder="Type a message…"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  className="dm-input"
                  autoFocus
                />
                <button className="btn btn--primary" type="submit">
                  📩 Send
                </button>
              </form>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
