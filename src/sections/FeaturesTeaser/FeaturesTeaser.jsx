import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import './FeaturesTeaser.css'

const topFeatures = [
  // --- FREE TIER ---
  {
    icon: 'bi-hourglass-split',
    title: 'The 60-Minute Wall',
    desc: 'Try to open a blocked site and a 60-minute timer kicks in. Leave the tab or refresh, and it starts over from zero.',
    color: 'blue',
    paid: false
  },
  {
    icon: 'bi-incognito',
    title: 'Incognito Covered',
    desc: 'Private browsing is no way around it. The 60-minute wall applies in incognito windows too.',
    color: 'blue',
    paid: false
  },
  {
    icon: 'bi-calendar-heart',
    title: 'Grace Days',
    desc: "You get 1 or 2 free misses a month, so one rough night doesn't wipe out your entire streak.",
    color: 'blue',
    paid: false
  },

  // --- PREMIUM TIER ---
  {
    icon: 'bi-shield-check',
    title: 'Partner Uninstall Flow',
    desc: "Instead of typing a passage, hitting 'Uninstall' sends a private alert to your Accountability Partner.",
    color: 'green',
    paid: true
  },
  {
    icon: 'bi-chat-dots',
    title: 'Unlimited AI Companion',
    desc: 'Free has basic breathing. Premium unlocks deeper, unlimited conversations to help you understand your triggers.',
    color: 'green',
    paid: true
  },
  {
    icon: 'bi-phone',
    title: 'Multi-Device Sync',
    desc: 'Cover your laptop, phone, and tablet together. If you try to bypass the block on one, the others know.',
    color: 'green',
    paid: true
  }
]

export default function FeaturesTeaser() {
  return (
    <section className="features-section">
      <div className="features-container">
        
        <div className="features-header">
          <div className="problem-badge">What's inside</div>
          <h2>Built for the hard moments.</h2>
          <p>The core protection is free, and always will be. Upgrade only if you want extra support.</p>
        </div>

        <div className="features-grid">
          {topFeatures.map((feature, index) => (
            <motion.div 
              key={feature.title}
              className="feature-card"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              {feature.paid && (
                <div className="paid-badge">
                  <i className="bi bi-gem"></i> Premium
                </div>
              )}
              
              <div className={`feature-icon-wrapper ${feature.color}`}>
                <i className={`bi ${feature.icon}`}></i>
              </div>
              <h3>{feature.title}</h3>
              <p>{feature.desc}</p>
            </motion.div>
          ))}
        </div>

        <div className="features-cta">
          <Link to="/features" className="btn-secondary">See all features</Link>
        </div>

      </div>
    </section>
  )
}