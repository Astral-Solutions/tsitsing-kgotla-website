import React from "react";
import fatherImg from "../assets/images/KgosanasFather.jpeg";
import groundsImg from "../assets/images/KgotlaGrounds.jpeg";
import koketsoImg from "../assets/images/KgosanaKoketso.jpeg";

export default function Heritage() {
  return (
    <section id="heritage" className="heritage-stories">
      <div className="container">
        <h2 className="fade-in">Heritage Stories</h2>

        <div className="heritage-overview fade-in">
          <h3>Our Heritage Content Overview</h3>
          <p>
            The heritage section of our Kgotla preserves and shares the rich cultural tapestry of our community.
            Here you will find:
          </p>
          <ul>
            <li><strong>Oral Traditions:</strong> Ancient stories, proverbs, and wisdom passed down through generations.</li>
            <li><strong>Historical Chronicles:</strong> Documentation of significant events and milestones.</li>
            <li><strong>Cultural Practices:</strong> Traditional ceremonies, rituals, and customs.</li>
            <li><strong>Leadership Legacy:</strong> Stories of past and present traditional leaders.</li>
            <li><strong>Community Heroes:</strong> Recognition of cultural preservation champions.</li>
            <li><strong>Sacred Sites:</strong> Historical significance of important locations.</li>
            <li><strong>Traditional Knowledge:</strong> Indigenous systems including medicine and agriculture.</li>
          </ul>
        </div>

        <div className="fade-in">
          <div className="story-card">
            <div className="story-quote">
              The tree that would grow high must send its roots deep. Our traditions are the roots that nourish the growth of our people.
            </div>
            <div className="story-author">— Elder Maipelo Rakhudu</div>
          </div>
          <div className="story-card">
            <div className="story-quote">
              In the Kgotla, we learn that wisdom is not the privilege of age alone, but the gift of those who listen with respect and speak with purpose.
            </div>
            <div className="story-author">— Kgosi Tebogo Moeng</div>
          </div>
          <div className="story-card">
            <div className="story-quote">
              Our ancestors built this place not with stones alone, but with the hopes and dreams of generations. We are the guardians of their legacy.
            </div>
            <div className="story-author">— Traditional Healer Nomsa Setlhare</div>
          </div>
        </div>

        <div className="cards-grid fade-in">
          <div className="card">
            <h3>Oral Traditions</h3>
            <p>Preserving our stories, proverbs, and wisdom through the spoken word.</p>
            <img src={fatherImg} alt="Kgosana's Father - Elder of Oral Traditions" className="heritage-img" />
          </div>
          <div className="card">
            <h3>Cultural Ceremonies</h3>
            <p>Celebrating heritage through traditional ceremonies, dances, and rituals.</p>
            <img src={groundsImg} alt="Kgotla Grounds - Center of Cultural Activities" className="heritage-img" />
          </div>
          <div className="card">
            <h3>Traditional Justice</h3>
            <p>Upholding fair and restorative justice practices that heal communities.</p>
            <img src={koketsoImg} alt="Kgosana Koketso - Traditional Leader" className="heritage-img" />
          </div>
        </div>
      </div>
    </section>
  );
}
