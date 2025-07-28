import React, { useState } from "react";

const initialPosts = [
  {
    id: 1,
    author: "John Doe",
    content: "Welcome to campus! Join the hiking club this Saturday.",
    image:
      "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 2,
    author: "Emily Clark",
    content: "Anyone interested in forming a study group for Math 221?",
    image:
      "https://images.unsplash.com/photo-1581091215367-1447f02b1d24?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 3,
    author: "Alex Johnson",
    content: "Looking for teammates for the upcoming robotics competition.",
    image:
      "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=800&q=60",
  },
  {
    id: 4,
    author: "Rachel Green",
    content: "Campus clean-up drive next week. Volunteers needed!",
  },
  {
    id: 5,
    author: "David Lee",
    content: "Selling old textbooks, DM me if interested.",
    image:
      "https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?auto=format&fit=crop&w=800&q=80",
  },
];

export default function Home() {
  const [posts, setPosts] = useState(initialPosts);
  const [text, setText] = useState("");

  function addPost(e) {
    e.preventDefault();
    if (!text.trim()) return;
    setPosts((p) => [
      {
        id: Date.now(),
        author: "You",
        content: text.trim(),
        image: null,
      },
      ...p,
    ]);
    setText("");
  }

  return (
    <section className="section-glass">
      <h2 style={{ marginBottom: 16 }}>Campus Feed</h2>

      <form onSubmit={addPost} className="float-card" style={{ padding: 12, marginBottom: 20 }}>
        <textarea
          rows={2}
          placeholder="Share something with your campus..."
          value={text}
          onChange={(e) => setText(e.target.value)}
          style={{
            width: "98%",
            padding: "10px",
            borderRadius: "12px",
            border: "1px solid rgba(255,255,255,0.12)",
            resize: "none",
            marginBottom: 8,
            fontSize: "0.9rem",
          }}
        />

        {/* Attachment buttons */}
        <div style={{ display: "flex", gap: "10px", marginBottom: 12 }}>
          <button
            type="button"
            className="btn btn--ghost"
            aria-label="Add Image"
            style={{ padding: "6px 12px" }}
          >
            📷 Image
          </button>
          <button
            type="button"
            className="btn btn--ghost"
            aria-label="Add Document"
            style={{ padding: "6px 12px" }}
          >
            📄 Document
          </button>
          <button
            type="button"
            className="btn btn--ghost"
            aria-label="Add Video"
            style={{ padding: "6px 12px" }}
          >
            🎥 Video
          </button>
        </div>

        <button
          type="submit"
          className="btn btn--primary"
          style={{ color: "#000", fontSize: "0.95rem" }}
        >
          📝 Post
        </button>
      </form>

      <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
        {posts.map(({ id, author, content, image }) => (
          <article
            key={id}
            className="float-card"
            style={{ padding: 12, fontSize: "0.9rem" }}
          >
            <strong style={{ fontSize: "1rem" }}>{author}</strong>
            <p style={{ marginTop: 6, whiteSpace: "pre-wrap" }}>{content}</p>
            {image && (
              <img
                src={image}
                alt="post"
                style={{ width: "100%", borderRadius: 12, marginTop: 8, height: 140, objectFit: "cover" }}
                onError={(e) => (e.target.style.display = "none")}
              />
            )}
          </article>
        ))}
      </div>
    </section>
  );
}
