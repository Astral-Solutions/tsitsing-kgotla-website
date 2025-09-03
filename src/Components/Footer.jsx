import React from "react";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer>
      <div className="container">
        <div className="footer-content">
          <div className="footer-section">
            <h4>Kgotla ya Rakhudu</h4>
            <p>
              Preserving tradition, building community, and honoring the wisdom of our ancestors for future generations.
            </p>
          </div>
          <div className="footer-section">
            <h4>Services</h4>
            <p>Traditional Leadership</p>
            <p>Cultural Events</p>
            <p>Community Mediation</p>
            <p>Heritage Preservation</p>
          </div>
        </div>

        <div className="footer-bottom">
          <div className="quick-links">
            <Link to="/about">About</Link>
            <Link to="/heritage">Heritage</Link>
            <Link to="/events">Events</Link>
            <Link to="/notices">Notices</Link>
            <Link to="/contact">Contact</Link>
          </div>
          <p>
            &copy; 2025 Kgotla ya Rakhudu. All rights reserved. | Built with respect for tradition and community.
          </p>
        </div>
      </div>
    </footer>
  );
}