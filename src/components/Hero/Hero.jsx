import { Link } from 'react-router-dom'
import './Hero.css'

function Hero() {
  return (
    <section className="hero">
      <video className="hero-video" autoPlay muted loop playsInline>
        <source src="/keyboard.mp4" type="video/mp4" />
      </video>
      <div className="hero-overlay"></div>

      <div className="hero-nav">
        <div className="nav-brand">
          <img src="/favicon.png" alt="LumaGuard" className="logo-icon" />
          <h1 className="logo"><span className="logo-black">Luma</span><span className="logo-purple">Guard</span></h1>
        </div>
        <div className="nav-links">
          <Link to="/" className="nav-link">Home</Link>
          <div className="dropdown">
            <button className="dropdown-btn">More</button>
            <div className="dropdown-content">
              <Link to="/vision">Vision</Link>
              <Link to="/features">Features</Link>
              <Link to="/plans">Plans</Link>
              <Link to="/test">Take the Test</Link>
              <Link to="/resources">Resources</Link>
              <Link to="/faq">FAQ</Link>
            </div>
          </div>
          <Link to="/app" className="nav-link">App</Link>
          <Link to="/plans" className="nav-cta">Get Started</Link>
        </div>
      </div>

      <div className="hero-main">
        “<h1 className="hero-title">
The Guard to a <span className="hero-highlight">Clearer Mind</span>

        </h1>
          <p className="hero-subtitle">
           Block what holds you back. LumaGuard protects your focus, your time, 
           and your peace — without giving you an easy way out.
          </p>”
        <div className="hero-cta">
          <Link to="/plans" className="hero-btn-primary">Get Started Free</Link>
          <Link to="/features" className="hero-btn-secondary">Learn More</Link>
        </div>
      </div>
    </section>
  )
}

export default Hero