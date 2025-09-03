import React from "react";
import { Link } from "react-router-dom";

export default function About() {
  return (
    <section id="about" className="section-active">
      <div className="container">
        <h2 className="fade-in">About Our Kgotla</h2>
        <div className="about-content fade-in">
          <div className="about-text">
            <p>Kgotla ya Rakhudu stands as a beacon of traditional governance and cultural preservation...</p>
            <p>Our Kgotla operates under the guidance of traditional leaders who carry forward the customs...</p>
            <p>Here, every voice matters, every tradition is honored, and every gathering strengthens the bonds...</p>
          </div>
        </div>
      </div>
    </section>
  );
}
