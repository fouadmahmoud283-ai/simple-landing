import React from 'react'

export default function Landing() {
  return (
    <div className="landing">
      <div className="card">
        <h2 className="hero">Simple Landing</h2>
        <p className="lead">A minimal Vite + React landing page with light styling.</p>
        <div style={{display:'flex',gap:12,justifyContent:'center',marginTop:16}}>
          <a className="btn" href="#">Get started</a>
          <a className="btn" href="https://vitejs.dev/" target="_blank" rel="noreferrer">Docs</a>
        </div>
      </div>
    </div>
  )
}

