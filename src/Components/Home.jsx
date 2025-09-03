import React from "react";

export default function Home() {
  return (
    <div className="home">
      {/* Hero Section */}
      <section className="hero">
        <div className="container">
          <div className="hero-content">
            <h1>Kgotla ya Rakhudu</h1>
            <p className="hero-subtitle">
              Where Tradition Meets Community - Preserving Our Heritage, Building Our Future
            </p>
            <p className="hero-description">
              Welcome to the heart of our community. Here, ancient wisdom guides modern decisions, 
              and every voice contributes to the harmony of our people.
            </p>
            <div className="hero-buttons">
              <a href="/about" className="btn btn-primary">Learn About Us</a>
              <a href="/events" className="btn btn-secondary">Upcoming Events</a>
            </div>
          </div>
        </div>
      </section>

      {/* About Preview Section */}
      <section className="about-preview">
        <div className="container">
          <div className="section-content">
            <div className="text-content">
              <h2>The Spirit of Ubuntu</h2>
              <p>
                The Kgotla has been the cornerstone of African community life for centuries. 
                It is a place where decisions are made through consensus, disputes are resolved 
                with wisdom, and the voice of every community member is heard and respected.
              </p>
              <p>
                At Kgotla ya Rakhudu, we continue this proud tradition, serving as a bridge 
                between our ancestral wisdom and the needs of our modern community.
              </p>
              <a href="/about" className="btn btn-outline">Discover Our Story</a>
            </div>
            <div className="image-content">
              <div className="placeholder-image">
                <p>Traditional Meeting Place</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services/Functions Section */}
      <section className="services">
        <div className="container">
          <h2 className="section-title">Our Community Functions</h2>
          <div className="services-grid">
            <div className="service-card">
              <div className="service-icon">⚖️</div>
              <h3>Traditional Leadership</h3>
              <p>
                Guided by ancestral wisdom and community values, we provide leadership 
                that honors our traditions while addressing contemporary challenges.
              </p>
            </div>
            <div className="service-card">
              <div className="service-icon">🤝</div>
              <h3>Community Mediation</h3>
              <p>
                Through dialogue and mutual respect, we help resolve conflicts and 
                strengthen the bonds that hold our community together.
              </p>
            </div>
            <div className="service-card">
              <div className="service-icon">🎭</div>
              <h3>Cultural Preservation</h3>
              <p>
                We safeguard our rich heritage through storytelling, ceremonies, 
                and the passing of traditional knowledge to future generations.
              </p>
            </div>
            <div className="service-card">
              <div className="service-icon">📅</div>
              <h3>Community Events</h3>
              <p>
                From traditional ceremonies to modern celebrations, we bring 
                people together to strengthen our collective spirit and identity.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Heritage Preview Section */}
      <section className="heritage-preview">
        <div className="container">
          <div className="section-content reverse">
            <div className="image-content">
              <div className="placeholder-image">
                <p>Cultural Heritage</p>
              </div>
            </div>
            <div className="text-content">
              <h2>Our Rich Heritage</h2>
              <p>
                For generations, the Kgotla has been more than just a meeting place - 
                it has been the living heart of our community, where stories are shared, 
                wisdom is passed down, and our cultural identity is strengthened.
              </p>
              <div className="heritage-highlights">
                <div className="highlight">
                  <strong>Traditional Governance:</strong> Democratic decision-making through consensus
                </div>
                <div className="highlight">
                  <strong>Oral Traditions:</strong> Stories, proverbs, and ancestral wisdom
                </div>
                <div className="highlight">
                  <strong>Cultural Ceremonies:</strong> Celebrations that connect us to our roots
                </div>
              </div>
              <a href="/heritage" className="btn btn-outline">Explore Our Heritage</a>
            </div>
          </div>
        </div>
      </section>

      {/* Recent Updates Section */}
      <section className="recent-updates">
        <div className="container">
          <h2 className="section-title">Recent Updates</h2>
          <div className="updates-grid">
            <div className="update-card">
              <div className="update-date">
                <span className="day">15</span>
                <span className="month">Jan</span>
              </div>
              <div className="update-content">
                <h3>Community Meeting Scheduled</h3>
                <p>Join us for our monthly community gathering to discuss important matters affecting our area.</p>
                <a href="/notices" className="read-more">Read More →</a>
              </div>
            </div>
            <div className="update-card">
              <div className="update-date">
                <span className="day">20</span>
                <span className="month">Jan</span>
              </div>
              <div className="update-content">
                <h3>Cultural Festival Planning</h3>
                <p>We are organizing our annual cultural festival. Community participation and volunteers needed.</p>
                <a href="/events" className="read-more">View Events →</a>
              </div>
            </div>
            <div className="update-card">
              <div className="update-date">
                <span className="day">25</span>
                <span className="month">Jan</span>
              </div>
              <div className="update-content">
                <h3>Heritage Documentation Project</h3>
                <p>Help us preserve our oral traditions by sharing your family stories and cultural knowledge.</p>
                <a href="/heritage" className="read-more">Learn More →</a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="cta">
        <div className="container">
          <div className="cta-content">
            <h2>Be Part of Our Community</h2>
            <p>
              Whether you're seeking guidance, want to contribute to our community, 
              or simply wish to connect with your heritage, you are welcome at Kgotla ya Rakhudu.
            </p>
            <div className="cta-buttons">
              <a href="/contact" className="btn btn-primary">Get In Touch</a>
              <a href="/events" className="btn btn-secondary">Join Our Events</a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}