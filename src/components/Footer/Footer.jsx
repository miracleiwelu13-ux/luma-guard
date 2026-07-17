import { Link } from 'react-router-dom'
import './Footer.css'

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-top">
          <div className="footer-brand">
            <h3 className="footer-name">LumaGuard</h3>
            <p className="footer-tagline">The guard to a clearer mind.</p>
          </div>

          <div className="footer-links">
            <div className="footer-col">
              <h4>Product</h4>
              <Link to="/features">Features</Link>
              <Link to="/plans">Plans</Link>
              <Link to="/app" className="download-link">Download</Link>
            </div>
            <div className="footer-col">
              <h4>Resources</h4>
              <Link to="/resources">Resources</Link>
              <Link to="/faq">FAQ</Link>
              <Link to="/test">Take the Test</Link>
            </div>
            <div className="footer-col">
              <h4>Company</h4>
              <Link to="/vision">Our Why</Link>
              <a href="mailto:hello@mindgate.com">Contact</a>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <p>&copy; 2026 LumaGuard. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer