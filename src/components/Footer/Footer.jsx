import { Link } from 'react-router-dom'
import './Footer.css'

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-container">
        
        {/* Top Section: Links & Info */}
        <div className="footer-grid">
          
          {/* Brand Column */}
          <div className="footer-brand">
            <Link to="/" className="footer-logo">
              <i className="bi bi-shield-lock-fill"></i> LUMA GUARD
            </Link>
            <p className="footer-tagline">
              Protect your mind. Protect your focus.
            </p>
          </div>

          {/* Product Links */}
          <div className="footer-col">
            <h4>Product</h4>
            <Link to="/features">Features</Link>
            <Link to="/pricing">Pricing</Link>
            <Link to="/assessment">Take the Assessment</Link>
          </div>

          {/* Support Links */}
          <div className="footer-col">
            <h4>Support</h4>
            <Link to="/resources">Resources</Link>
            <Link to="/faq">FAQ</Link>
            <Link to="/contact">Contact Us</Link>
            <a href="mailto:support@lumaguard.com">Email Support</a>
          </div>

          {/* Contact Info */}
          <div className="footer-col">
            <h4>Get in Touch</h4>
            <p><i className="bi bi-envelope"></i> hello@lumaguard.com</p>
            <p><i className="bi bi-telephone"></i> +1 (555) 000-0000</p>
            <p><i className="bi bi-geo-alt"></i> Remote / Online</p>
          </div>

        </div>

        {/* Bottom Section: Copyright & Socials */}
        <div className="footer-bottom">
          <p>&copy; {new Date().getFullYear()} Luma Guard. All rights reserved.</p>
          
          <div className="footer-legal">
            <Link to="/privacy">Privacy Policy</Link>
            <Link to="/terms">Terms of Service</Link>
          </div>

                   <div className="footer-socials">
            <a href="#discord" aria-label="Discord"><i className="bi bi-discord"></i></a>
            <a href="#reddit" aria-label="Reddit"><i className="bi bi-reddit"></i></a>
            <a href="#github" aria-label="GitHub"><i className="bi bi-github"></i></a>
          </div>
        </div>

      </div>
    </footer>
  )
}