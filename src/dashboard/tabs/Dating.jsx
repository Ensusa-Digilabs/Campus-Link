import React, { useState } from "react";

const profilesData = [
  {
    id: 1,
    name: "Emily",
    age: 21,
    photo: "https://randomuser.me/api/portraits/women/68.jpg",
    bio: "Mathematics major, coffee lover, and gamer 🎮",
    hobbies: ["Coffee", "Gaming", "Hiking"],
  },
  {
    id: 2,
    name: "Liam",
    age: 23,
    photo: "https://randomuser.me/api/portraits/men/32.jpg",
    bio: "Physics nerd and foodie 🍕",
    hobbies: ["Physics", "Foodie", "Running"],
  },
  {
    id: 3,
    name: "Sophia",
    age: 22,
    photo: "https://randomuser.me/api/portraits/women/40.jpg",
    bio: "Loves art, design and traveling ✈️",
    hobbies: ["Art", "Travel", "Design"],
  },
  {
    id: 4,
    name: "Ethan",
    age: 20,
    photo: "https://randomuser.me/api/portraits/men/56.jpg",
    bio: "Basketball player and tech enthusiast 🏀",
    hobbies: ["Basketball", "Coding", "Movies"],
  },
  {
    id: 5,
    name: "Olivia",
    age: 21,
    photo: "https://randomuser.me/api/portraits/women/65.jpg",
    bio: "Music lover and part-time singer 🎶",
    hobbies: ["Music", "Singing", "Yoga"],
  },
  {
    id: 6,
    name: "Noah",
    age: 24,
    photo: "https://randomuser.me/api/portraits/men/70.jpg",
    bio: "Outdoor adventurer and photographer 📷",
    hobbies: ["Photography", "Hiking", "Travel"],
  },
  {
    id: 7,
    name: "Ava",
    age: 22,
    photo: "https://randomuser.me/api/portraits/women/30.jpg",
    bio: "Bookworm and tea enthusiast 📚",
    hobbies: ["Reading", "Tea", "Writing"],
  },
  {
    id: 8,
    name: "James",
    age: 23,
    photo: "https://randomuser.me/api/portraits/men/15.jpg",
    bio: "Tech geek and gamer 🎮",
    hobbies: ["Tech", "Gaming", "Sci-Fi"],
  },
];

export default function Dating() {
  const [likes, setLikes] = useState({});
  const [dislikes, setDislikes] = useState({});
  const [ignored, setIgnored] = useState({});

  const handleLike = (id) => {
    setLikes((p) => ({ ...p, [id]: true }));
    setDislikes((p) => {
      const copy = { ...p };
      delete copy[id];
      return copy;
    });
    setIgnored((p) => {
      const copy = { ...p };
      delete copy[id];
      return copy;
    });
  };

  const handleDislike = (id) => {
    setDislikes((p) => ({ ...p, [id]: true }));
    setLikes((p) => {
      const copy = { ...p };
      delete copy[id];
      return copy;
    });
    setIgnored((p) => {
      const copy = { ...p };
      delete copy[id];
      return copy;
    });
  };

  const handleIgnore = (id) => {
    setIgnored((p) => ({ ...p, [id]: true }));
    setLikes((p) => {
      const copy = { ...p };
      delete copy[id];
      return copy;
    });
    setDislikes((p) => {
      const copy = { ...p };
      delete copy[id];
      return copy;
    });
  };

  return (
    <section className="section-glass">
      <h2 style={{ marginBottom: 16 }}>Campus Dating</h2>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
          gap: "22px",
        }}
      >
        {profilesData
          .filter((p) => !ignored[p.id])
          .map(({ id, name, age, photo, bio, hobbies }) => (
            <div
              key={id}
              className="float-card"
              style={{ padding: 16, display: "flex", flexDirection: "column", alignItems: "center" }}
            >
              <img
                src={photo}
                alt={name}
                style={{
                  width: "100%",
                  height: 260,
                  objectFit: "cover",
                  borderRadius: 18,
                  marginBottom: 12,
                  filter: likes[id]
                    ? "drop-shadow(0 0 12px rgba(127,90,240,.8))"
                    : dislikes[id]
                    ? "grayscale(100%) opacity(0.5)"
                    : "none",
                }}
                onError={(e) => (e.target.style.display = "none")}
              />
              <h3 style={{ margin: "6px 0" }}>
                {name}, {age}
              </h3>
              <p
                style={{
                  fontSize: "0.95rem",
                  opacity: 0.85,
                  textAlign: "center",
                  marginBottom: 8,
                }}
              >
                {bio}
              </p>

              <div
                style={{
                  display: "flex",
                  gap: 8,
                  flexWrap: "wrap",
                  justifyContent: "center",
                  marginBottom: 12,
                }}
              >
                {hobbies.map((h, i) => (
                  <span
                    key={i}
                    style={{
                      background: "rgba(127,90,240,.22)",
                      color: "#000",  // <-- updated text color here
                      padding: "6px 10px",
                      borderRadius: 16,
                      fontSize: "0.85rem",
                    }}
                  >
                    {h}
                  </span>
                ))}
              </div>

              <div className="btn-group">
                <button
                  className="btn btn--primary"
                  style={likes[id] ? { background: "rgba(127,90,240,.6)" } : {}}
                  onClick={() => handleLike(id)}
                  aria-label={`Like ${name}`}
                >
                  ❤️ Like
                </button>
                <button
                  className="btn btn--danger"
                  style={dislikes[id] ? { background: "rgba(239,68,68,.6)" } : {}}
                  onClick={() => handleDislike(id)}
                  aria-label={`Dislike ${name}`}
                >
                  👎 Dislike
                </button>
                <button
                  className="btn btn--ghost"
                  style={{ color: "#888" }}
                  onClick={() => handleIgnore(id)}
                  aria-label={`Ignore ${name}`}
                >
                  🙈 Ignore
                </button>
              </div>
            </div>
          ))}
      </div>
    </section>
  );
}
