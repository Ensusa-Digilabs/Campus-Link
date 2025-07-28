import React, { useState } from "react";
import "./dms.css";

const MODES = {
  REGULAR: "regular",
  MARKETPLACE: "marketplace",
  DATING: "dating",
};

/* ---------- CHAT LISTS (left column) ---------- */
const chatsRegular = [
  { id: 1, name: "Alice",   avatar: "https://randomuser.me/api/portraits/women/21.jpg", lastMessage: "Hey! Are you coming to the study group?", status: "online" },
  { id: 2, name: "Michael", avatar: "https://randomuser.me/api/portraits/men/42.jpg",   lastMessage: "Don't forget the project deadline!",       status: "offline" },
  { id: 3, name: "Sophia",  avatar: "https://randomuser.me/api/portraits/women/45.jpg", lastMessage: "Let's grab coffee later.",                status: "online" },
  { id: 4, name: "Noah",    avatar: "https://randomuser.me/api/portraits/men/70.jpg",   lastMessage: "Sending the slides!",                     status: "online" },
];

const chatsMarketplace = [
  { id: 101, name: "Textbook Buyer",   avatar: "https://randomuser.me/api/portraits/men/12.jpg",  lastMessage: "Is the Calculus book still available?", status: "online" },
  { id: 102, name: "Chair Seller",     avatar: "https://randomuser.me/api/portraits/women/19.jpg",lastMessage: "Can you pick it up tomorrow?",          status: "offline" },
  { id: 103, name: "Fridge Buyer",     avatar: "https://randomuser.me/api/portraits/men/6.jpg",   lastMessage: "What's your best price?",               status: "online" },
];

const chatsDating = [
  { id: 201, name: "Emily",   avatar: "https://randomuser.me/api/portraits/women/68.jpg", lastMessage: "Nice matching with you! 😊", status: "online" },
  { id: 202, name: "Sophia",  avatar: "https://randomuser.me/api/portraits/women/40.jpg", lastMessage: "Coffee this week?",        status: "online"  },
  { id: 203, name: "Noah",    avatar: "https://randomuser.me/api/portraits/men/70.jpg",   lastMessage: "Hiking plan this weekend?",status: "offline" },
];

/* ---------- INITIAL MESSAGES (right column) ---------- */
const initialMessages = {
  [MODES.REGULAR]: {
    1: [
      { from: "Alice", text: "Hey! Are you coming to the study group?" },
      { from: "You",   text: "Yes, I’ll be there!" },
    ],
  },
  [MODES.MARKETPLACE]: {
    101: [
      { from: "Textbook Buyer", text: "Is the Calculus book still available?" },
      { from: "You",            text: "Yep! In great condition." },
      { from: "Textbook Buyer", text: "Awesome, can you do $25?" },
    ],
  },
  [MODES.DATING]: {
    201: [
      { from: "Emily", text: "Nice matching with you! 😊" },
      { from: "You",   text: "Likewise, Emily!" },
      { from: "Emily", text: "What are you studying?" },
      { from: "You",   text: "CS! You?" },
    ],
  },
};

export default function DMs() {
  const [activeMode, setActiveMode] = useState(MODES.REGULAR);
  const [selected, setSelected] = useState(null); // { id, name }
  const [messages, setMessages] = useState(initialMessages);
  const [input, setInput] = useState("");

  const chatsMap = {
    [MODES.REGULAR]: chatsRegular,
    [MODES.MARKETPLACE]: chatsMarketplace,
    [MODES.DATING]: chatsDating,
  };

  const modeLabel = {
    [MODES.REGULAR]: "Direct Messages",
    [MODES.MARKETPLACE]: "Marketplace Messages",
    [MODES.DATING]: "Dating Messages",
  };

  const currentChats = chatsMap[activeMode];

  const handleOpen = (chat) => {
    setSelected({ id: chat.id, name: chat.name });
    // lazy init thread if doesn't exist
    if (!messages[activeMode]?.[chat.id]) {
      setMessages((m) => ({
        ...m,
        [activeMode]: {
          ...m[activeMode],
          [chat.id]: [{ from: chat.name, text: chat.lastMessage }],
        },
      }));
    }
  };

  const sendMessage = (e) => {
    e.preventDefault();
    if (!input.trim() || !selected) return;

    setMessages((m) => ({
      ...m,
      [activeMode]: {
        ...m[activeMode],
        [selected.id]: [
          ...(m[activeMode]?.[selected.id] || []),
          { from: "You", text: input },
        ],
      },
    }));
    setInput("");
  };

  // reset selected chat when switching modes
  const switchMode = (mode) => {
    setActiveMode(mode);
    setSelected(null);
    setInput("");
  };

  const activeThread =
    (selected && messages[activeMode]?.[selected.id]) || [];

  return (
    <section className="section-glass">
      <h2 className="dm-title">{modeLabel[activeMode]}</h2>

      {/* Top 3-way toggle */}
      <div className="dm-tabs">
        <button
          className={`dm-tab ${activeMode === MODES.REGULAR ? "active" : ""}`}
          onClick={() => switchMode(MODES.REGULAR)}
        >
          DMs
        </button>
        <button
          className={`dm-tab ${activeMode === MODES.MARKETPLACE ? "active" : ""}`}
          onClick={() => switchMode(MODES.MARKETPLACE)}
        >
          Marketplace
        </button>
        <button
          className={`dm-tab ${activeMode === MODES.DATING ? "active" : ""}`}
          onClick={() => switchMode(MODES.DATING)}
        >
          Dating
        </button>
      </div>

      <div className="dm-container">
        {/* Contacts */}
        <aside className="dm-contacts">
          {currentChats.map((c) => (
          <button
            key={c.id}
            onClick={() => handleOpen(c)}
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
        {currentChats.length === 0 && (
          <div className="dm-empty">No conversations here yet.</div>
        )}
        </aside>

        {/* Chat Window */}
        <div className="dm-chat-window">
          {!selected ? (
            <div className="dm-placeholder">Select a chat to start messaging</div>
          ) : (
            <div className="fade-in">
              <header className="dm-header">
                Chat with {selected.name}
              </header>

              <div className="dm-messages">
                {activeThread.map((m, i) => (
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
