import React from "react";

export default function Contact() {
  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Message sent!");
  };

  return (
    <section id="contact">
      <div className="container">
        <h2 className="fade-in">Contact Us</h2>
        <div className="contact-grid fade-in">
          <div className="contact-info">
            <h3>Get in Touch</h3>

            <div className="contact-item">
              <div className="icon">📍</div>
              <div>
                <strong>Address</strong><br />
                Tsitsing Village<br />
                Kgotla Grounds<br />
                North West Province, South Africa
              </div>
            </div>

            <div className="contact-item">
              <div className="icon">📞</div>
              <div>
                <strong>Phone</strong><br />
                {/* Add number here */}
              </div>
            </div>

            <div className="contact-item">
              <div className="icon">✉️</div>
              <div>
                <strong>Email</strong><br />
                Admin@kgotlayarakhudu.org
              </div>
            </div>

            <div className="contact-item">
              <div className="icon">🕒</div>
              <div>
                <strong>Office Hours</strong><br />
                Mon - Fri: 08:00 - 16:00<br />
                Sat: 08:00 - 12:00
              </div>
            </div>
          </div>

          <div className="contact-form">
            <h3>Send us a Message</h3>
            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <label>Name</label>
                <input type="text" required />
              </div>
              <div className="form-group">
                <label>Email</label>
                <input type="email" required />
              </div>
              <div className="form-group">
                <label>Subject</label>
                <input type="text" required />
              </div>
              <div className="form-group">
                <label>Message</label>
                <textarea rows="5" required></textarea>
              </div>
              <button type="submit" className="submit-btn">Send Message</button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
