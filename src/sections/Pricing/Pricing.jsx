import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import './Pricing.css'

const plans = [
  {
    name: "Lifeline",
    price: "Free",
    period: "forever",
    desc: "The core protection. Nothing that keeps you safe is behind a paywall.",
    features: [
      "1 device (Chrome)",
      "60-minute vault timer",
      "Incognito mode covered",
      "50-word passage and 24-hour uninstall cooldown",
      "Breathing exercises",
      "Private personal streaks"
    ],
    cta: "Get LumaGuard",
    highlight: false
  },
  {
    name: "Pro",
    price: "$6",
    period: "/ month",
    desc: "For the days you want unlimited backup.",
    features: [
      "Unlimited devices (phone and PC)",
      "Partner uninstall alerts",
      "Unlimited AI Companion",
      "Full game and audio library",
      "Everything in Lifeline"
    ],
    cta: "Start 7-day free trial",
    highlight: true
  },
  {
    name: "Squad",
    price: "$16",
    originalPrice: "$24",
    period: "/ month",
    desc: "For friends who want to tackle this together.",
    features: [
      "Up to 4 people",
      "Private accountability alerts",
      "Joint group streaks",
      "Group check-ins and shared breathing",
      "Milestone badges and rewards",
      "30% group discount"
    ],
    cta: "Start a Squad",
    highlight: false
  }
]

export default function Pricing() {
  return (
    <section className="pricing-section" id="pricing">
      <div className="pricing-container">
        
        <div className="pricing-header">
          <div className="problem-badge">Pricing</div>
          <h2>No tricks. <br/>Just real protection.</h2>
          <p>Staying safe shouldn't cost you. The core vault is free, for good.</p>
        </div>

        <div className="pricing-grid">
          {plans.map((plan, i) => (
            <motion.div 
              key={plan.name}
              className={`pricing-card ${plan.highlight ? 'highlight' : ''}`}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
            >
              {plan.highlight && <div className="popular-tag">Most Popular</div>}
              
              <h3 className="plan-name">{plan.name}</h3>
              
              <div className="plan-price-group">
                {plan.originalPrice && (
                  <span className="original-price">{plan.originalPrice}</span>
                )}
                <div className="plan-price">
                  {plan.price}<span className="plan-period">{plan.period}</span>
                </div>
              </div>

              <p className="plan-desc">{plan.desc}</p>

              <ul className="plan-features">
                {plan.features.map(feature => (
                  <li key={feature}>
                    <i className="bi bi-check2"></i> {feature}
                  </li>
                ))}
              </ul>

              <Link to="/get-started" className={`btn-plan ${plan.highlight ? 'btn-primary' : 'btn-secondary'}`}>
                {plan.cta}
              </Link>
            </motion.div>
          ))}
        </div>

        <p className="pricing-note">
          Need a plan for 6 or 10 friends? <Link to="/contact">Get in touch about bigger squads.</Link>
        </p>

      </div>
    </section>
  )
}