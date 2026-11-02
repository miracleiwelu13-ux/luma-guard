import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import './FeaturesPage.css'

// We'll structure the features by category and clearly mark the tier
const features = [
  // --- THE CORE (FREE) ---
  {
    icon: 'bi-hourglass-split',
    title: 'The 60-Minute Timer',
    desc: 'When the urge hits and you try to access a blocked site, a mandatory 60-minute timer starts. If you leave the tab or try to refresh, it resets to zero.',
    tier: 'free'
  },
  {
    icon: 'bi-shield-lock',
    title: 'The 250-Word Typo Key',
    desc: 'The only way to uninstall LumaGuard is to type out a randomized 250-word paragraph perfectly. One typo and it resets. By the time you finish, the urge is gone.',
    tier: 'free'
  },
  {
    icon: 'bi-wind',
    title: 'Basic Breathing & Focus',
    desc: 'Simple, guided breathing exercises to help calm your nervous system while you wait out the timer.',
    tier: 'free'
  },
  {
    icon: 'bi-chat-dots',
    title: 'AI Urge Companion',
    desc: 'Talk to our AI when you are struggling. The free tier includes a daily allowance of messages to help you ride out the wave.',
    tier: 'free'
  },
  
  // --- THE UPGRADES (PREMIUM) ---
  {
    icon: 'bi-cpu',
    title: 'Unlimited AI Companion',
    desc: 'Deep, unlimited conversations with the AI. Track your triggers, analyze patterns over time, and get personalized support whenever you need it.',
    tier: 'premium'
  },
  {
    icon: 'bi-controller',
    title: 'Full Distraction Library',
    desc: 'Access an expanding library of mini-games, puzzles, and high-quality focus soundscapes to break the trance.',
    tier: 'premium'
  },
  {
    icon: 'bi-phone',
    title: 'Multi-Device Sync',
    desc: 'Protect your laptop, your phone, and your tablet. If you try to bypass the block on one device, the others know.',
    tier: 'premium'
  },

  // --- THE MULTIPLAYER (GROUP) ---
  {
    icon: 'bi-people',
    title: 'Joint Streaks',
    desc: 'Link your account with a friend. If either of you slips up, the streak breaks. Recovery is easier when you are accountable to someone else.',
    tier: 'group'
  },
  {
    icon: 'bi-envelope-paper',
    title: 'Accountability Partner Alerts',
    desc: 'Assign a trusted friend or sponsor. If you attempt to bypass the vault, they instantly receive an email notification.',
    tier: 'group'
  }
]

export default function FeaturesPage() {
  return (
    <div className="features-page">
      <div className="features-page-container">
        
        <div className="features-page-header">
          <div className="problem-badge">The Arsenal</div>
          <h1>Everything you need to hold the line.</h1>
          <p>No dark patterns. No hidden paywalls for basic safety. Here is exactly what you get.</p>
        </div>

        <div className="features-page-grid">
          {features.map((feature, index) => (
            <motion.div 
              key={feature.title}
              className="fp-card"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
            >
              {/* Badge Logic */}
              {feature.tier === 'premium' && (
                <div className="tier-badge premium"><i className="bi bi-gem"></i> Premium</div>
              )}
              {feature.tier === 'group' && (
                <div className="tier-badge group"><i className="bi bi-people-fill"></i> Squad Only</div>
              )}

              <div className={`fp-icon ${feature.tier}`}>
                <i className={`bi ${feature.icon}`}></i>
              </div>
              
              <h3>{feature.title}</h3>
              <p>{feature.desc}</p>
            </motion.div>
          ))}
        </div>

        <div className="features-page-cta">
          <h2>Ready to secure your focus?</h2>
          <div className="cta-buttons">
            <Link to="/get-started" className="btn-primary">Get LumaGuard Free</Link>
            <Link to="/pricing" className="btn-secondary">View Pricing</Link>
          </div>
        </div>

      </div>
    </div>
  )
}