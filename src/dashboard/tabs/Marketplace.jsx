import React from "react";
import "./marketplace.css";

const listings = [
  {
    id: 1,
    title: "Calculus Textbook - 8th Edition",
    price: "$30",
    image:
      "https://images.unsplash.com/photo-1584697964231-f87e8e84f5fd?auto=format&fit=crop&w=800&q=80",
    description: "Like new condition, great for second semester calculus.",
  },
  {
    id: 2,
    title: "Gaming Chair",
    price: "$120",
    image:
      "https://images.unsplash.com/photo-1598300051400-2923ce19bfaf?auto=format&fit=crop&w=800&q=80",
    description: "Comfortable chair with adjustable height and recline.",
  },
  {
    id: 3,
    title: "Laptop Backpack",
    price: "$45",
    image:
      "https://images.unsplash.com/photo-1563298723-dcfebaa392e3?auto=format&fit=crop&w=800&q=80",
    description:
      "Spacious with padded compartments for laptops up to 17 inches.",
  },
  {
    id: 4,
    title: "Bluetooth Headphones",
    price: "$60",
    image:
      "https://images.unsplash.com/photo-1519671482749-fd09be7ccebf?auto=format&fit=crop&w=800&q=80",
    description: "Noise-cancelling, wireless headphones with 20hr battery.",
  },
  {
    id: 5,
    title: "Used iPad",
    price: "$250",
    image:
      "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?auto=format&fit=crop&w=800&q=80",
    description: "iPad Air, 64GB, good condition, with charger.",
  },
  {
    id: 6,
    title: "Textbooks Bundle",
    price: "$80",
    image:
      "https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?auto=format&fit=crop&w=800&q=80",
    description: "Bundle of 4 science and math textbooks.",
  },
  {
    id: 7,
    title: "Second-hand Bike",
    price: "$75",
    image:
      "https://images.unsplash.com/photo-1507838153414-b4b713384a76?auto=format&fit=crop&w=800&q=80",
    description: "Great for campus rides, minor wear.",
  },
  {
    id: 8,
    title: "Mini Fridge",
    price: "$90",
    image:
      "https://images.unsplash.com/photo-1593508512255-86ab42a8e620?auto=format&fit=crop&w=800&q=80",
    description: "Perfect for dorm rooms, energy efficient.",
  },
  {
    id: 9,
    title: "Mechanical Keyboard",
    price: "$70",
    image:
      "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?auto=format&fit=crop&w=800&q=80",
    description: "RGB backlit, blue switches, barely used.",
  },
  {
    id: 10,
    title: "Monitor 24\" 144Hz",
    price: "$140",
    image:
      "https://images.unsplash.com/photo-1587202372775-98927b65c064?auto=format&fit=crop&w=800&q=80",
    description: "Great for gaming and productivity.",
  },
  {
    id: 11,
    title: "Dorm Lamp",
    price: "$20",
    image:
      "https://images.unsplash.com/photo-1524758631624-e2822e304c36?auto=format&fit=crop&w=800&q=80",
    description: "Warm lighting, perfect for studying late nights.",
  },
  {
    id: 12,
    title: "Whiteboard + Markers",
    price: "$25",
    image:
      "https://images.unsplash.com/photo-1588062433064-5d86a0e0f1d1?auto=format&fit=crop&w=800&q=80",
    description: "Ideal for planning and group work.",
  },
  {
    id: 13,
    title: "Portable Projector",
    price: "$210",
    image:
      "https://images.unsplash.com/photo-1633681926047-3ac3efa47ce1?auto=format&fit=crop&w=800&q=80",
    description: "Mini projector for movie nights.",
  },
  {
    id: 14,
    title: "Foldable Table",
    price: "$35",
    image:
      "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=800&q=80",
    description: "Compact and lightweight.",
  },
  {
    id: 15,
    title: "Desk Plant (Succulent)",
    price: "$12",
    image:
      "https://images.unsplash.com/photo-1501004318641-b39e6451bec6?auto=format&fit=crop&w=800&q=80",
    description: "Low maintenance, bring life to your desk.",
  },
  {
    id: 16,
    title: "Graphing Calculator (TI-84)",
    price: "$60",
    image:
      "https://images.unsplash.com/photo-1581091012124-7c9ab70f3b5b?auto=format&fit=crop&w=800&q=80",
    description: "Works perfectly, used for one semester.",
  },
];

export default function Marketplace() {
  return (
    <section className="section-glass">
      <h2 style={{ marginBottom: 16 }}>Marketplace</h2>

      <div className="market-grid">
        {listings.map(({ id, title, price, image, description }) => (
          <div key={id} className="float-card market-card">
            <img
              src={image}
              alt={title}
              className="market-image"
              onError={(e) => (e.target.style.display = "none")}
            />
            <h3 className="market-title">{title}</h3>
            <div className="market-price">{price}</div>
            <p className="market-desc">{description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
