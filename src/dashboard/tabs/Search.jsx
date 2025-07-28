import React, { useState } from "react";
import "./search.css";

const DATA = [
  {
    id: 1,
    name: "Computer Science Club",
    type: "Organization",
    desc: "Coding challenges, hackathons, and tech talks.",
    img: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=800&q=60",
  },
  {
    id: 2,
    name: "Math Study Group",
    type: "Study Group",
    desc: "Weekly advanced math problem sessions.",
    img: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=800&q=60",
  },
  {
    id: 3,
    name: "Entrepreneurship Club",
    type: "Organization",
    desc: "For founders & startup enthusiasts.",
    img: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=800&q=60",
  },
  {
    id: 4,
    name: "CS 201 Study Group",
    type: "Study Group",
    desc: "Collaborate on CS 201 projects and homework.",
    img: "https://images.unsplash.com/photo-1581090700227-8799e2a1f428?auto=format&fit=crop&w=800&q=60",
  },
  {
    id: 5,
    name: "MATH 475 Probability Club",
    type: "Study Group",
    desc: "Discuss probability theory and problem-solving.",
    img: "https://images.unsplash.com/photo-1554224154-22dec7ec8818?auto=format&fit=crop&w=800&q=60",
  },
  {
    id: 6,
    name: "ECE 218 Digital Systems Group",
    type: "Study Group",
    desc: "Practice digital systems design and labs.",
    img: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=800&q=60",
  },
];

export default function Search() {
  const [q, setQ] = useState("");
  const filtered = DATA.filter(
    (x) =>
      x.name.toLowerCase().includes(q.toLowerCase()) ||
      x.type.toLowerCase().includes(q.toLowerCase()) ||
      x.desc.toLowerCase().includes(q.toLowerCase())
  );

  return (
    <section className="section-glass">
      <h2 style={{ marginBottom: 12, color: "#222" }}>Search Campus</h2>

      <input
        type="text"
        placeholder="Search organizations, study groups, events..."
        value={q}
        onChange={(e) => setQ(e.target.value)}
        className="search-input"
      />

      <div className="search-grid">
        {filtered.map((o) => (
          <div className="float-card search-card" key={o.id}>
            <img
              src={o.img}
              alt={o.name}
              className="search-image"
              onError={(e) => (e.target.style.display = "none")}
            />
            <h3 className="search-name">{o.name}</h3>
            <p className="search-type">{o.type}</p>
            <p className="search-desc">{o.desc}</p>
          </div>
        ))}
        {filtered.length === 0 && <p>No results</p>}
      </div>
    </section>
  );
}
