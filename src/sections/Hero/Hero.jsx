import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import './Hero.css'

function Hero() {
  return (
    <section className="hero-section">
      {/* Background glow */}
      <div className="hero-glow"></div>

      <div className="hero-container">
        {/* LEFT SIDE: Text */}
        <motion.div 
          className="hero-content"
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <div className="hero-badge">
            <i className="bi bi-shield-lock-fill"></i> Luma Guard
          </div>
          
          <h1 className="hero-headline">
            Protect your mind. <br />
            <span className="text-glow">Protect your focus.</span>
          </h1>

          <h2 className="hero-subhead">
            Don't drop your guard.
          </h2>

          <p className="hero-small-text">
            LumaGuard reclaims your freedom, your time, and your peace — without giving you an easy way out.
          </p>

          <div className="hero-actions">
            <Link to="/get-started" className="btn-primary">
              Get Started Free
            </Link>
          </div>
        </motion.div>

        {/* RIGHT SIDE: Visual */}
        <motion.div 
          className="hero-visual"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
        >
          <div className="vault-shield">
            <i className="bi bi-shield-lock"></i>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Hero