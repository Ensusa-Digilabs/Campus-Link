import React from "react";
import "./profile.css";

const userPosts = [
  {
    id: 1,
    content: "Join our study group this Friday!",
    image:
      "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=800&q=60",
  },
  {
    id: 2,
    content: "Anyone interested in a hackathon team?",
    image:
      "https://images.unsplash.com/photo-1517433456452-f9633a875f6f?auto=format&fit=crop&w=800&q=60",
  },
];

const userListings = [
  {
    id: 1,
    title: "Calculus Textbook",
    price: "$25",
    image:
      "https://images.unsplash.com/photo-1585079545803-c32e5c4b1582?auto=format&fit=crop&w=800&q=60",
  },
  {
    id: 2,
    title: "Gaming Chair",
    price: "$100",
    image:
      "https://images.unsplash.com/photo-1519710164239-da123dc03ef4?auto=format&fit=crop&w=800&q=60",
  },
];

export default function Profile({ userEmail }) {
  const user = {
    name: "Suproteek Banerjee",
    photo: "https://randomuser.me/api/portraits/men/75.jpg",
    bio: "Computer Science student passionate about fintech and AI.",
    major: "Computer Science",
    year: "Senior (Class of 2025)",
    classes: ["CS 201", "Digital Systems", "Probability", "CS 100", "Biology 105"],
    email: userEmail,
    stats: {
      posts: userPosts.length,
      listings: userListings.length,
      followers: 842,
      following: 321,
    },
  };

  return (
    <section className="section-glass">
      {/* Profile Header */}
      <div className="float-card profile-header" style={{ padding: 24, marginBottom: 24 }}>
        <div style={{ display: "flex", gap: 24, alignItems: "center", flexWrap: "wrap" }}>
          <img
            src={user.photo}
            alt={user.name}
            style={{
              width: 140,
              height: 140,
              borderRadius: "50%",
              objectFit: "cover",
              boxShadow: "0 6px 24px rgba(0,0,0,.2)",
            }}
            onError={(e) => (e.target.style.display = "none")}
          />

          <div style={{ flex: 1, minWidth: 240 }}>
            <h2 style={{ margin: 0 }}>{user.name}</h2>
            <p style={{ margin: "4px 0 12px", opacity: 0.8 }}>{user.bio}</p>

            <div style={{ display: "flex", gap: 18, flexWrap: "wrap" }}>
              <div><strong>Major:</strong> {user.major}</div>
              <div><strong>Year:</strong> {user.year}</div>
              <div><strong>Email:</strong> {user.email}</div>
            </div>

            <div className="profile-stats">
              <span>Posts: {user.stats.posts}</span>
              <span>Listings: {user.stats.listings}</span>
              <span>Followers: {user.stats.followers}</span>
              <span>Following: {user.stats.following}</span>
            </div>

            <div className="profile-classes">
              <strong>Classes this semester:</strong> {user.classes.join(", ")}
            </div>
          </div>
        </div>
      </div>

      {/* Community Posts */}
      <h3 style={{ margin: "12px 0" }}>Community Posts</h3>
      <div className="profile-grid">
        {userPosts.map(({ id, content, image }) => (
          <div key={id} className="float-card" style={{ overflow: "hidden" }}>
            <img
              src={image}
              alt="post"
              style={{ width: "100%", height: 180, objectFit: "cover" }}
              onError={(e) => (e.target.style.display = "none")}
            />
            <p style={{ padding: "12px 14px", margin: 0 }}>{content}</p>
          </div>
        ))}
      </div>

      {/* Marketplace Listings */}
      <h3 style={{ margin: "12px 0" }}>Marketplace Listings</h3>
      <div className="profile-grid-sm">
        {userListings.map(({ id, title, price, image }) => (
          <div key={id} className="float-card" style={{ overflow: "hidden" }}>
            <img
              src={image}
              alt={title}
              style={{ width: "100%", height: 160, objectFit: "cover" }}
              onError={(e) => (e.target.style.display = "none")}
            />
            <div style={{ padding: "12px 14px" }}>
              <h4 style={{ margin: "0 0 4px" }}>{title}</h4>
              <div style={{ color: "#7f5af0", fontWeight: 700 }}>{price}</div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
