import { useState } from 'react'
import './AppPage.css'
import Navbar from '../../components/Navbar/Navbar'

function AppPage() {
  const [email, setEmail] = useState('')
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    if (email) {
      setSubmitted(true)
    }
  }

  return (
    <div className="app-page">
      <Navbar />
      <div className="app-page-container">
        <div className="app-page-content">
          <span className="app-page-badge">In development</span>

          <div className="app-page-icon">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round">
              <rect x="5" y="2" width="14" height="20" rx="2" ry="2"/>
              <line x1="12" y1="18" x2="12.01" y2="18"/>
            </svg>
          </div>

          <h1 className="app-page-heading">Coming Soon</h1>

          <p className="app-page-subtitle">
            We're building something powerful. LumaGuard for Android and iOS is on the way —
            a blocker that actually works, right on your phone.
          </p>

          <div className="app-platform-row">
            <span className="app-platform-pill">📱 iOS</span>
            <span className="app-platform-pill">🤖 Android</span>
          </div>

          <div className="app-page-features">
            <div className="app-feature-item">
              <span className="app-feature-check">✓</span>
              VPN-level protection across all apps
            </div>
            <div className="app-feature-item">
              <span className="app-feature-check">✓</span>
              Tamper-proof — no easy uninstall
            </div>
            <div className="app-feature-item">
              <span className="app-feature-check">✓</span>
              Syncs with your desktop protection
            </div>
          </div>

          {!submitted ? (
            <form className="app-page-form" onSubmit={handleSubmit}>
              <p className="app-form-label">Get notified when we launch:</p>
              <div className="app-form-row">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="app-form-input"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
                <button type="submit" className="app-form-btn">Notify Me</button>
              </div>
              <p className="app-waitlist-count">Join 1,200+ people already on the list</p>
            </form>
          ) : (
            <div className="app-page-success">
              <span className="app-success-icon">✓</span>
              <p>You're on the list! We'll email you when Mindgate launches.</p>
            </div>
          )}

          <p className="app-page-note">
            In the meantime, the Chrome extension is available for desktop.
          </p>
        </div>
      </div>
    </div>
  )
}

export default AppPage