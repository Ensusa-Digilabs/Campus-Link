import React, { useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import "./EventsCalendar.css";

const events = [
  {
    date: "2025-08-02",
    title: "Freshers Orientation",
    time: "10:00 AM - 1:00 PM",
    location: "Main Auditorium",
    description:
      "Welcome the new batch of students with fun activities, campus tours, and info sessions.",
  },
  {
    date: "2025-08-05",
    title: "Math Club Workshop",
    time: "3:00 PM - 5:00 PM",
    location: "Room 204, Science Building",
    description:
      "Dive deep into problem-solving techniques and math puzzles with fellow enthusiasts.",
  },
  {
    date: "2025-08-10",
    title: "Hackathon 2025",
    time: "9:00 AM - 9:00 PM",
    location: "Tech Lab",
    description:
      "Join teams to build innovative projects over 12 hours with prizes and networking.",
  },
  {
    date: "2025-08-15",
    title: "Campus Clean-up Drive",
    time: "8:00 AM - 12:00 PM",
    location: "Campus Grounds",
    description:
      "Help keep our campus beautiful by joining the clean-up crew. Supplies provided.",
  },
  {
    date: "2025-08-20",
    title: "Art Exhibition",
    time: "11:00 AM - 6:00 PM",
    location: "Art Gallery",
    description:
      "Showcasing artwork from students and local artists. Refreshments available.",
  },
  {
    date: "2025-08-25",
    title: "Sports Day",
    time: "10:00 AM - 4:00 PM",
    location: "Sports Complex",
    description:
      "Participate or cheer on your favorite teams in a variety of sports and games.",
  },
];

export default function EventsCalendar() {
  const [value, setValue] = useState(new Date());
  const [selectedEvent, setSelectedEvent] = useState(null);

  // Get events on selected date
  const eventList = events.filter(
    (e) => e.date === value.toISOString().split("T")[0]
  );

  // When user clicks an event from list
  const handleSelectEvent = (event) => {
    setSelectedEvent(event);
  };

  return (
    <section
      className="section-glass calendar-container"
      style={{
        display: "flex",
        gap: 24,
        maxWidth: 900,
        margin: "40px auto",
      }}
    >
      <div style={{ flex: 1, maxWidth: 400 }}>
        <h2 className="calendar-title">Upcoming Events</h2>
        <Calendar
          onChange={(date) => {
            setValue(date);
            setSelectedEvent(null); // reset selected event when date changes
          }}
          value={value}
          tileClassName={({ date }) =>
            events.some((e) => e.date === date.toISOString().split("T")[0])
              ? "event-day"
              : ""
          }
        />
        <div className="events-panel" style={{ marginTop: 20 }}>
          <h3>Events on {value.toDateString()}</h3>
          {eventList.length > 0 ? (
            <ul style={{ paddingLeft: 0, listStyle: "none" }}>
              {eventList.map((e, i) => (
                <li
                  key={i}
                  className="event-item"
                  onClick={() => handleSelectEvent(e)}
                  style={{
                    cursor: "pointer",
                    padding: "8px 12px",
                    borderRadius: 10,
                    marginBottom: 8,
                    backgroundColor:
                      selectedEvent && selectedEvent.title === e.title
                        ? "#7f5af0"
                        : "transparent",
                    color:
                      selectedEvent && selectedEvent.title === e.title
                        ? "#fff"
                        : "#222",
                    transition: "background-color 0.3s ease",
                  }}
                >
                  <span className="event-dot"></span> {e.title}
                </li>
              ))}
            </ul>
          ) : (
            <p className="no-events">No events for this day.</p>
          )}
        </div>
      </div>

      <div
        style={{
          flex: 1,
          background: "#fff",
          borderRadius: 16,
          padding: 24,
          boxShadow: "0 4px 12px rgba(0,0,0,0.05)",
          textAlign: "left",
          minWidth: 300,
          height: 450,
          overflowY: "auto",
        }}
      >
        {selectedEvent ? (
          <>
            <h2 style={{ color: "#7f5af0", marginBottom: 12 }}>
              {selectedEvent.title}
            </h2>
            <p style={{ fontWeight: "600", color: "#555", marginBottom: 6 }}>
              {new Date(selectedEvent.date).toLocaleDateString(undefined, {
                month: "short",
                day: "numeric",
                year: "numeric",
              })}
            </p>
            <p style={{ marginBottom: 12 }}>
              <strong>Time:</strong> {selectedEvent.time}
            </p>
            <p style={{ marginBottom: 12 }}>
              <strong>Location:</strong> {selectedEvent.location}
            </p>
            <p>{selectedEvent.description}</p>
          </>
        ) : (
          <p
            style={{
              color: "#888",
              fontSize: "1.1rem",
              marginTop: "40%",
              textAlign: "center",
            }}
          >
            Select an event to view details.
          </p>
        )}
      </div>
    </section>
  );
}
