import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { plans } from '../../data/plans'
import './Pricing.css'

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

        <p className="pricing-note">
          Paid plans are not open yet. Join the waitlist and we'll tell you first. Questions? <Link to="/contact">Get in touch.</Link>
        </p>

      </div>
    </section>
  )
}
