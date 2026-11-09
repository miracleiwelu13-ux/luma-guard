import { useState } from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { SUPABASE_URL, SUPABASE_PUBLISHABLE_KEY } from '../../config'
import './GetStartedPage.css'

export default function GetStartedPage() {
  const [email, setEmail] = useState('')
  const [submitted, setSubmitted] = useState(false)
  const [sending, setSending] = useState(false)
  const [error, setError] = useState('')

  const handleSubmit = async (e) => {
    e.preventDefault()
    setError('')
    setSending(true)
    try {
      const res = await fetch(`${SUPABASE_URL}/rest/v1/waitlist`, {
        method: 'POST',
        headers: {
          apikey: SUPABASE_PUBLISHABLE_KEY,
          'Content-Type': 'application/json',
          Prefer: 'return=minimal'
        },
        body: JSON.stringify({ email: email.trim() })
      })
      // 409 = this email is already on the list, which is fine for the visitor
      if (res.ok || res.status === 409) setSubmitted(true)
      else setError('Something went wrong. Please try again in a moment.')
    } catch {
      setError('Could not connect. Check your internet and try again.')
    } finally {
      setSending(false)
    }
  }

  return (
    <div className="get-started-page">
      <div className="get-started-container">
        
        {/* Left Side: Copy & Form */}
        <div className="gs-content">
          <div className="problem-badge">Early Access</div>
          <h1>Take back your focus.</h1>
          <p>
            LumaGuard is currently in private beta. Drop your email below to get early access to the Chrome extension before it hits the public store.
          </p>

          {submitted ? (
            <motion.div 
              className="gs-success"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
            >
              <i className="bi bi-check-circle-fill"></i>
              <h3>You're on the list.</h3>
              <p>Keep an eye on your inbox. We'll email you when LumaGuard is available.</p>
            </motion.div>
          ) : (
            <form className="gs-form" onSubmit={handleSubmit}>
              <input 
                type="email" 
                placeholder="Enter your email address" 
                required 
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <button type="submit" className="btn-primary" disabled={sending}>
                {sending ? 'Joining...' : 'Join the Waitlist'}
              </button>
            </form>
          )}

          {error && <p className="gs-error">{error}</p>}

          <div className="gs-features-list">
            <div className="gs-feature">
              <i className="bi bi-shield-check"></i>
              <span>Free forever core protection</span>
            </div>
            <div className="gs-feature">
              <i className="bi bi-lock"></i>
              <span>No credit card required</span>
            </div>
          </div>
        </div>

        {/* Right Side: Computer Mockup */}
        <motion.div 
          className="gs-visual"
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="laptop-mockup">
            <div className="laptop-screen">
              {/* Fake browser UI inside the laptop */}
              <div className="browser-bar">
                <div className="dots"><span></span><span></span><span></span></div>
                <div className="url-bar">chrome://extensions</div>
              </div>
              {/* Extension UI */}
              <div className="extension-ui">
                <div className="ext-status">
                  <i className="bi bi-shield-lock-fill"></i>
                  <div>
                    <h4>LumaGuard Active</h4>
                    <p>Protection is running.</p>
                  </div>
                </div>
                <div className="ext-stats">
                  <div className="stat">
                    <span className="stat-num">14</span>
                    <span className="stat-label">Days safe (example)</span>
                  </div>
                  <div className="stat">
                    <span className="stat-num">0</span>
                    <span className="stat-label">Blocks today (example)</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="laptop-base"></div>
          </div>
        </motion.div>

      </div>
    </div>
  )
}
