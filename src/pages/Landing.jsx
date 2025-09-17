import React from 'react'

export default function Landing() {
  return (
    <div className="landing-page">
      {/* Navigation Header */}
      <nav className="landing-nav">
        <div className="nav-container">
          <div className="nav-brand">
            <h2 className="brand-title">Luxe Destinations</h2>
          </div>
          <div className="nav-links">
            <a href="#destinations" className="nav-link">Destinations</a>
            <a href="#about-us" className="nav-link">About</a>
            <a href="#contact" className="nav-link">Contact</a>
            <div className="nav-auth">
              <a href="/login" className="nav-auth-link login-link">Sign In</a>
              <a href="/signup" className="btn btn-primary nav-signup-btn">Join Us</a>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="hero" className="hero-section">
        <div className="hero-content">
          <h1 className="hero-title">Discover Extraordinary Destinations</h1>
          <p className="hero-lead">Experience the world's most exclusive locations through our curated luxury travel experiences. From pristine private islands to majestic mountain retreats, we craft unforgettable journeys for the discerning traveler.</p>
          <div className="hero-actions">
            <a className="btn btn-primary" href="#destinations">Explore Destinations</a>
            <a className="btn btn-secondary" href="#contact">Plan Your Journey</a>
          </div>
        </div>
      </section>
      {/* Destinations Section */}
      <section id="destinations" className="destinations-section">
        <h2 className="section-title">Our Top Destinations</h2>
        <div className="destinations-grid">
          {/* Placeholder Destination Card 1 */}
          <div className="destination-card">
            <img src="https://via.placeholder.com/300x200" alt="Destination 1" className="destination-image" />
            <h3 className="destination-title">The Maldives</h3>
            <p className="destination-description">Pristine beaches and crystal-clear waters.</p>
            <a href="#" className="btn btn-small">View Details</a>
          </div>
          {/* Placeholder Destination Card 2 */}
          <div className="destination-card">
            <img src="https://via.placeholder.com/300x200" alt="Destination 2" className="destination-image" />
            <h3 className="destination-title">Swiss Alps</h3>
            <p className="destination-description">Majestic mountains and breathtaking landscapes.</p>
            <a href="#" className="btn btn-small">View Details</a>
          </div>
          {/* Placeholder Destination Card 3 */}
          <div className="destination-card">
            <img src="https://via.placeholder.com/300x200" alt="Destination 3" className="destination-image" />
            <h3 className="destination-title">Kyoto, Japan</h3>
            <p className="destination-description">Ancient traditions and vibrant culture.</p>
            <a href="#" className="btn btn-small">View Details</a>
          </div>
        </div>
      </section>
      {/* About Us Section */}
      <section id="about-us" className="about-us-section">
        <h2 className="section-title">Why Choose Luxe Destinations?</h2>
        <div className="about-us-content">
          <p>At Luxe Destinations, we believe travel should be an art form. We specialize in crafting bespoke luxury experiences that go beyond the ordinary, offering unparalleled service, exclusive access, and meticulous attention to detail.</p>
          <ul>
            <li>Personalized Itineraries</li>
            <li>Exclusive Access & Experiences</li>
            <li>24/7 Concierge Service</li>
            <li>Sustainable & Responsible Tourism</li>
          </ul>
        </div>
      </section>
      {/* Contact Us Section */}
      <section id="contact" className="contact-section">
        <h2 className="section-title">Plan Your Next Adventure</h2>
        <p>Ready to embark on an unforgettable journey? Contact us today to start planning your dream vacation.</p>
        <form className="contact-form">
          <input type="text" placeholder="Your Name" className="form-input" />
          <input type="email" placeholder="Your Email" className="form-input" />
          <textarea placeholder="Your Message" rows="5" className="form-textarea"></textarea>
          <button type="submit" className="btn btn-primary">Send Message</button>
        </form>
      </section>
    </div>
  )
}




