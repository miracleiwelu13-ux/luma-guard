import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import './FeaturesPage.css'

const features = [
  // --- AVAILABLE NOW (FREE) ---
  {
    icon: 'bi-hourglass-split',
    title: 'The 60-Minute Wall',
    desc: 'Try to open a blocked site and a 60-minute timer kicks in. Leave the tab, refresh, or search again, and it starts over from zero.',
    tier: 'free'
  },
  {
    icon: 'bi-keyboard',
    title: 'The 100-Word Key',
    desc: 'To uninstall LumaGuard, you first type out a 100-word passage by hand. Pasting is blocked. Just enough friction to break the trance.',
    tier: 'free'
  },
  {
    icon: 'bi-incognito',
    title: 'Incognito Covered',
    desc: 'Blocked sites are closed in incognito windows too. (Turn on "Allow in Incognito" for LumaGuard in Chrome.)',
    tier: 'free'
  },
  {
    icon: 'bi-chat-dots',
    title: 'AI Companion',
    desc: 'When a block hits, talk it through with a supportive AI coach while the timer runs. Free, with a generous daily message limit.',
    tier: 'free'
  },
  {
    icon: 'bi-calendar-check',
    title: 'Days Safe Streak',
    desc: 'A streak that resets if you get blocked, so it reflects real progress. Your best streak is always saved.',
    tier: 'free'
  },
  {
    icon: 'bi-wind',
    title: 'Breathing Screen',
    desc: 'A calm, guided breathing screen on our website, one tap away whenever you need to settle.',
    tier: 'free'
  },

  // --- PREMIUM ---
  {
    icon: 'bi-shield-check',
    title: 'Accountability Partner',
    desc: "Link a friend you trust. They're emailed if you open the uninstall page, finish the uninstall steps, remove them, or if LumaGuard goes silent for 12 hours.",
    tier: 'premium'
  },

  // --- ON THE ROADMAP ---
  {
    icon: 'bi-calendar-heart',
    title: 'Grace Days',
    desc: "1 or 2 free misses a month, so one rough night doesn't wipe out your streak.",
    tier: 'free',
    soon: true
  },
  {
    icon: 'bi-controller',
    title: 'Full Distraction Library',
    desc: 'A growing library of mini-games, puzzles, and focus soundscapes to pull your attention somewhere else.',
    tier: 'premium',
    soon: true
  },
  {
    icon: 'bi-phone',
    title: 'Multi-Device Sync',
    desc: 'Cover your laptop, phone, and tablet together. If you try to get around the block on one, the others know.',
    tier: 'premium',
    soon: true
  },
  {
    icon: 'bi-people',
    title: 'Private & Joint Streaks',
    desc: 'Your personal streak never resets when a friend slips. The group streak only counts days when everyone stays clean.',
    tier: 'group',
    soon: true
  },
  {
    icon: 'bi-envelope-paper',
    title: 'Squad Accountability',
    desc: "Up to 4 people, each with a designated partner. Everyone else only sees an overall status, like '3 of 4 clean today.'",
    tier: 'group',
    soon: true
  },
  {
    icon: 'bi-chat-heart',
    title: 'Group Check-Ins',
    desc: 'Check in together, run shared breathing sessions, and cheer each other on.',
    tier: 'group',
    soon: true
  },
  {
    icon: 'bi-trophy',
    title: 'Milestone Rewards',
    desc: 'Earn badges and cosmetics at 5 days, 1 week, and 1 month.',
    tier: 'group',
    soon: true
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
              {feature.soon ? (
                <div className="tier-badge soon"><i className="bi bi-clock"></i> Coming soon</div>
              ) : feature.tier === 'premium' ? (
                <div className="tier-badge premium"><i className="bi bi-gem"></i> Premium</div>
              ) : null}

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
