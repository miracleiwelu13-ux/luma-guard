import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import './FeaturesTeaser.css'

const topFeatures = [
  // --- AVAILABLE NOW ---
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
    desc: 'Blocked sites are closed in incognito windows too. Private browsing is no way around it.',
    color: 'blue',
    paid: false
  },
  {
    icon: 'bi-chat-dots',
    title: 'AI Companion',
    desc: 'When a block hits, talk it through with a supportive AI coach while the timer runs. Free to use.',
    color: 'blue',
    paid: false
  },

  // --- PREMIUM ---
  {
    icon: 'bi-shield-check',
    title: 'Accountability Partner',
    desc: "Link a friend you trust. They're emailed if you try to uninstall LumaGuard or if it goes silent for 12 hours.",
    color: 'green',
    paid: true
  },

  // --- ON THE ROADMAP ---
  {
    icon: 'bi-phone',
    title: 'Multi-Device Sync',
    desc: 'Cover your laptop, phone, and tablet together. If you try to bypass the block on one, the others know.',
    color: 'green',
    soon: true
  },
  {
    icon: 'bi-people',
    title: 'Squads',
    desc: 'Tackle this with up to 4 friends, with joint streaks and private accountability alerts.',
    color: 'green',
    soon: true
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
              {feature.soon ? (
                <div className="paid-badge soon">
                  <i className="bi bi-clock"></i> Coming soon
                </div>
              ) : feature.paid ? (
                <div className="paid-badge">
                  <i className="bi bi-gem"></i> Premium
                </div>
              ) : null}
              
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
