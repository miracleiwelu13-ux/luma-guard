import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { plans } from '../../data/plans'
import './PricingPage.css'

const faqs = [
  {
    q: "Is the free version actually useful?",
    a: "Yes. We don't put basic safety behind a paywall like a lot of other apps do. The 60-minute timer, incognito coverage and the 100-word uninstall passage work fully on the free plan. We only plan to charge for the extra tools and the group features."
  },
  {
    q: "When can I buy Pro or Squad?",
    a: "Not yet. Paid plans are still being built. Join the waitlist and we'll email you when they open. When they do, you'll be able to cancel any time."
  },
  {
    q: "How will the Squad plan work?",
    a: "One bill will cover up to 4 people. You'll link your accounts to share a group streak. If someone tries to get around the vault, the alert goes privately to their partner, who decides whether to tell the group."
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
              {plan.soon && <div className="popular-tag">Coming soon</div>}
              
              <h3 className="plan-name">{plan.name}</h3>
              
              <div className="plan-price-group">
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
          <p>Need a plan for 6 or 10 friends later on?</p>
          <Link to="/contact" className="btn-secondary">Get in touch about bigger squads</Link>
        </div>

      </div>
    </div>
  )
}
