import React from "react";

export default function Events() {
  return (
    <section id="events">
      <div className="container">
        <h2 className="fade-in">Upcoming Events</h2>

        <div className="fade-in">
          <div className="event-item">
            <div className="event-date">
              <span className="day">28</span>
              <span className="month">Jun</span>
            </div>
            <div className="event-details">
              <h4>Community Gathering</h4>
              <p>Monthly community meeting to discuss local matters and share updates.</p>
              <small>Main Kgotla Grounds | 14:00 - 17:00</small>
            </div>
          </div>

          <div className="event-item">
            <div className="event-date">
              <span className="day">05</span>
              <span className="month">Jul</span>
            </div>
            <div className="event-details">
              <h4>Heritage Day Celebration</h4>
              <p>Annual celebration of our cultural heritage with music, dance, and storytelling.</p>
              <small>Community Grounds | 10:00 - 18:00</small>
            </div>
          </div>

          <div className="event-item">
            <div className="event-date">
              <span className="day">12</span>
              <span className="month">Jul</span>
            </div>
            <div className="event-details">
              <h4>Youth Leadership Workshop</h4>
              <p>Training session for young leaders on traditional values and modern governance.</p>
              <small>Kgotla Hall | 09:00 - 16:00</small>
            </div>
          </div>
        </div>

        <div className="previous-events fade-in">
          <h3>Previous Events</h3>
          <p>Explore our history of gatherings, celebrations, and ceremonies.</p>
          <a href="#previous-events" className="previous-events-link">View Previous Events</a>
        </div>
      </div>
    </section>
  );
}
