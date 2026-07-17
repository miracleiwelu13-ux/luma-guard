import { Link } from 'react-router-dom'
import './Navbar.css'

function Navbar({ visible = true }) {
  return (
    <nav className={`navbar ${visible ? 'navbar-visible' : 'navbar-hidden'}`}>
        <div className="nav-brand">
        <img src="/favicon.png" alt="LumaGuard" className="logo-icon" />
        <Link to="/" className="logo"><span className="logo-black">Luma</span><span className="logo-purple">Guard</span></Link>
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
    </nav>
  )
}

export default Navbar