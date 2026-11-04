import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import './FeaturesPage.css'

const features = [
  // --- THE CORE (FREE) ---
  {
    icon: 'bi-hourglass-split',
    title: 'The 60-Minute Wall',
    desc: 'Try to open a blocked site and a 60-minute timer kicks in. Leave the tab, refresh, or search again, and it starts over from zero.',
    tier: 'free'
  },
  {
    icon: 'bi-keyboard',
    title: 'The 50-Word Free Key',
    desc: "To uninstall the Free version, you first type a short self-help passage. Just enough friction to break the trance. Then a 24-hour cooldown begins, and when it ends we check in: 'You asked to remove LumaGuard yesterday. Still want to go ahead?'",
    tier: 'free'
  },
  {
    icon: 'bi-incognito',
    title: 'Incognito Covered',
    desc: 'Private browsing is no way around it. The 60-minute wall applies in incognito windows too.',
    tier: 'free'
  },
  {
    icon: 'bi-calendar-heart',
    title: 'Grace Days',
    desc: "You get 1 or 2 free misses a month, so one rough night doesn't wipe out your streak.",
    tier: 'free'
  },
  {
    icon: 'bi-wind',
    title: 'Zero-Cost Breathing',
    desc: 'Guided breathing exercises, ready whenever you need them, to help you settle while the timer runs. Works without internet.',
    tier: 'free'
  },
  
  // --- THE UPGRADES (PREMIUM) ---
  {
    icon: 'bi-chat-dots',
    title: 'Unlimited AI Companion',
    desc: 'Free has breathing exercises for urge moments. Premium adds deeper, unlimited conversations, so you can work out your triggers and get support that fits you.',
    tier: 'premium'
  },
  {
    icon: 'bi-shield-check',
    title: 'The Partner Uninstall Flow',
    desc: "Instead of typing a passage, hitting 'Uninstall' on Premium sends a private message to your Accountability Partner: 'I am trying to uninstall. Talk me down?' The 24-hour cooldown still applies.",
    tier: 'premium'
  },
  {
    icon: 'bi-controller',
    title: 'Full Distraction Library',
    desc: 'A growing library of mini-games, puzzles, and focus soundscapes to pull your attention somewhere else.',
    tier: 'premium'
  },
  {
    icon: 'bi-phone',
    title: 'Multi-Device Sync',
    desc: 'Cover your laptop, phone, and tablet together. If you try to get around the block on one, the others know.',
    tier: 'premium'
  },

  // --- THE MULTIPLAYER (GROUP) ---
  {
    icon: 'bi-people',
    title: 'Private & Joint Streaks',
    desc: 'Your personal streak never resets when a friend slips. The group streak only counts days when everyone stays clean. No shame in either one.',
    tier: 'group'
  },
  {
    icon: 'bi-envelope-paper',
    title: 'Accountability Alerts',
    desc: "Pick a friend you trust. If you try to bypass the vault, your designated partner gets a private notification right away, and they decide whether to tell the group. Everyone else only sees an overall status, like '3 of 4 clean today.'",
    tier: 'group'
  },
  {
    icon: 'bi-chat-heart',
    title: 'Group Check-Ins',
    desc: 'Check in together, run shared breathing sessions, and cheer each other on. Squad stays worth it even in a rough week.',
    tier: 'group'
  },
  {
    icon: 'bi-trophy',
    title: 'Milestone Rewards',
    desc: 'Earn badges and cosmetics at 5 days, 1 week, and 1 month. Your personal best is always saved, even if you slip.',
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