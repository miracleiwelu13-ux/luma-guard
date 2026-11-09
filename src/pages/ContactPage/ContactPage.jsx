import { useState } from 'react'
import { Link } from 'react-router-dom'
import { CONTACT_EMAIL } from '../../config'
import './ContactPage.css'

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false)
  const [formData, setFormData] = useState({ name: '', email: '', message: '' })

  // No server yet, so this opens the visitor's email app with the message filled in.
  const handleSubmit = (e) => {
    e.preventDefault()
    const subject = encodeURIComponent(`LumaGuard message from ${formData.name}`)
    const body = encodeURIComponent(`${formData.message}\n\nFrom: ${formData.name} <${formData.email}>`)
    window.location.href = `mailto:${CONTACT_EMAIL}?subject=${subject}&body=${body}`
    setSubmitted(true)
  }

  return (
    <div className="contact-page">
      <div className="contact-page-container">
        
        <div className="contact-header">
          <div className="problem-badge">Contact</div>
          <h1>We're here to help.</h1>
          <p>Whether you need support or just have a question, we read every message.</p>
        </div>

        <div className="contact-grid">
          
          {/* Left Side: Info & Links */}
          <div className="contact-info">
            <div className="info-block">
              <h3>Email us directly</h3>
              <p>For the fastest response, drop us an email.</p>
              <a href={`mailto:${CONTACT_EMAIL}`} className="contact-email">
                {CONTACT_EMAIL} <i className="bi bi-arrow-up-right"></i>
              </a>
            </div>

            <div className="info-block">
              <h3>Looking for something specific?</h3>
              <ul className="contact-links">
                <li><Link to="/faq">Read the FAQ <i className="bi bi-chevron-right"></i></Link></li>
                <li><Link to="/pricing">See pricing <i className="bi bi-chevron-right"></i></Link></li>
                <li><Link to="/assessment">Take the Assessment <i className="bi bi-chevron-right"></i></Link></li>
              </ul>
            </div>
          </div>

          {/* Right Side: Form */}
          <div className="contact-form-wrapper">
            {submitted ? (
              <div className="form-success">
                <i className="bi bi-check-circle-fill"></i>
                <h3>Almost there.</h3>
                <p>Your email app should have opened with your message ready. Press send there. If nothing opened, write to {CONTACT_EMAIL} directly.</p>
                <button onClick={() => setSubmitted(false)} className="btn-secondary" style={{ marginTop: '20px' }}>
                  Send another
                </button>
              </div>
            ) : (
              <form className="contact-form" onSubmit={handleSubmit}>
                <div className="input-group">
                  <label>Name</label>
                  <input 
                    type="text" 
                    required 
                    placeholder="Your name"
                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                  />
                </div>
                
                <div className="input-group">
                  <label>Email</label>
                  <input 
                    type="email" 
                    required 
                    placeholder="you@example.com"
                    onChange={(e) => setFormData({...formData, email: e.target.value})}
                  />
                </div>

                <div className="input-group">
                  <label>Message</label>
                  <textarea 
                    required 
                    rows="5" 
                    placeholder="How can we help?"
                    onChange={(e) => setFormData({...formData, message: e.target.value})}
                  ></textarea>
                </div>

                <button type="submit" className="btn-primary">Send Message</button>
              </form>
            )}
          </div>

        </div>
      </div>
    </div>
  )
}
