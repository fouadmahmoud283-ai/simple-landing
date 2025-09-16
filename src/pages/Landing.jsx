import React from 'react'

export default function Landing() {
  return (
    <div className="landing">
      <div className="card">
        <h1 className="hero">Discover Extraordinary Destinations</h1>
        <p className="lead">Experience the world's most exclusive locations through our curated luxury travel experiences. From pristine private islands to majestic mountain retreats, we craft unforgettable journeys for the discerning traveler.</p>
        <div style={{display:'flex',gap:16,justifyContent:'center',marginTop:24,flexWrap:'wrap'}}>
          <a className="btn btn-primary" href="#destinations">Explore Destinations</a>
          <a className="btn btn-secondary" href="#contact">Plan Your Journey</a>
        </div>
      </div>
    </div>
  )
}


