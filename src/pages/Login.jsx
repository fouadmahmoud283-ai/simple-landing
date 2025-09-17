import React, { useState } from 'react'

export default function Login() {
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  })

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // TODO: Implement login logic
    console.log('Login attempt:', formData)
  }

  return (
    <div className="auth-page">
      <div className="auth-container">
        {/* Header Section */}
        <div className="auth-header">
          <h1 className="auth-title">Welcome Back</h1>
          <p className="auth-subtitle">Sign in to continue your luxury travel journey</p>
        </div>

        {/* Login Form */}
        <form className="auth-form" onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="email" className="form-label">Email Address</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              className="form-input"
              placeholder="Enter your email"
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="password" className="form-label">Password</label>
            <input
              type="password"
              id="password"
              name="password"
              value={formData.password}
              onChange={handleInputChange}
              className="form-input"
              placeholder="Enter your password"
              required
            />
          </div>

          <div className="form-options">
            <label className="checkbox-label">
              <input type="checkbox" className="checkbox-input" />
              <span className="checkbox-text">Remember me</span>
            </label>
            <a href="#" className="forgot-password">Forgot password?</a>
          </div>

          <button type="submit" className="btn btn-primary auth-submit">
            Sign In
          </button>
        </form>

        {/* Footer Links */}
        <div className="auth-footer">
          <p className="auth-footer-text">
            Don't have an account? 
            <a href="/signup" className="auth-link"> Create one here</a>
          </p>
          <a href="/" className="auth-back-link">← Back to Home</a>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="auth-decoration">
        <div className="decoration-circle decoration-circle-1"></div>
        <div className="decoration-circle decoration-circle-2"></div>
        <div className="decoration-line decoration-line-1"></div>
        <div className="decoration-line decoration-line-2"></div>
      </div>
    </div>
  )
}
