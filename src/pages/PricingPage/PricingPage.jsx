import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import './PricingPage.css'

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

const faqs = [
  {
    q: "Is the free version actually useful?",
    a: "Yes. We don't put basic safety behind a paywall like a lot of other apps do. The 60-minute timer and the 50-word uninstall passage work fully on the free plan. We only charge for the extra tools and the group features."
  },
  {
    q: "Can I cancel anytime?",
    a: "Yes. One click in your settings and you're done. No emails, no hoops."
  },
  {
    q: "How does the Squad plan work?",
    a: "One bill covers up to 4 people. You link your accounts to share a group streak. If someone tries to get around the vault, the alert goes privately to their partner, who decides whether to tell the group."
  },
]

export default function PricingPage() {
  return (
    <div className="pricing-page">
      <div className="pricing-page-container">
        
        {/* Header */}
        <div className="pricing-page-header">
          <div className="problem-badge">Pricing</div>
          <h1>No tricks. <br/>Just real protection.</h1>
          <p>Staying safe shouldn't cost you. The core vault is free, for good.</p>
        </div>

        {/* Pricing Cards */}
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

        {/* FAQ Section */}
        <div className="pricing-faq-section">
          <h2>Common questions</h2>
          <div className="pricing-faq-grid">
            {faqs.map((faq, i) => (
              <div key={i} className="pricing-faq-card">
                <h4>{faq.q}</h4>
                <p>{faq.a}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="pricing-cta-bottom">
          <p>Need a plan for 6 or 10 friends?</p>
          <Link to="/contact" className="btn-secondary">Get in touch about bigger squads</Link>
        </div>

      </div>
    </div>
  )
}