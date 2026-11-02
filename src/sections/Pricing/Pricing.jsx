import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import './Pricing.css'

const plans = [
  {
    name: "Lifeline",
    price: "Free",
    period: "forever",
    desc: "The core protection. No paywalls to keep you safe.",
    features: [
      "1 Device (Chrome)",
      "60-Minute Vault Timer",
      "250-Word Typo Key",
      "Basic AI coping (Daily limit)",
      "Breathing & Focus tools"
    ],
    cta: "Get LumaGuard",
    highlight: false
  },
  {
    name: "Pro",
    price: "$6",
    period: "/ month",
    desc: "For the days you need an unlimited backup.",
    features: [
      "Unlimited Devices (Phone + PC)",
      "Unlimited AI Companion",
      "Full game & audio library",
      "Priority support",
      "Everything in Lifeline"
    ],
    cta: "Start 7-Day Free Trial",
    highlight: true
  },
  {
    name: "Squad",
    price: "$16.80",
    originalPrice: "$24",
    period: "/ month",
    desc: "For friends fighting the battle together.",
    features: [
      "Up to 4 People",
      "Joint Streaks",
      "Accountability Partner alerts",
      "Everything in Pro for everyone",
      "30% Group Discount"
    ],
    cta: "Start a Squad",
    highlight: false
  }
]

function Pricing() {
  return (
    <section className="pricing-section" id="pricing">
      <div className="pricing-container">
        
        <div className="pricing-header">
          <div className="problem-badge">Pricing</div>
          <h2>No dark patterns. <br/>Just real protection.</h2>
          <p>Your safety shouldn't be held hostage. The core vault is free forever.</p>
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
          Need a plan for 6 or 10 friends? <Link to="/contact" className="btn-secondary">Contact us for large squad discounts</Link>
        </p>

      </div>
    </section>
  )
}

export default Pricing