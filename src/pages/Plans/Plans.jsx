import { Link } from 'react-router-dom'
import './Plans.css'
import Navbar from '../../components/Navbar/Navbar'

function Plans() {
  const plans = [
    {
      name: 'Individual',
      price: 'Free',
      period: 'forever',
      description: 'Everything you need to protect one child.',
      features: [
        'Full content blocking',
        'Custom blocklists',
        'Activity dashboard',
        'One child profile',
        'No ads, no catches'
      ],
      cta: 'Get Started',
      featured: false
    },
    {
      name: 'Extra Child',
      price: '$3',
      period: '/month per child',
      description: 'Add another child to your existing plan.',
      features: [
        'Everything in Individual',
        'Separate profile & settings per child',
        'Individual activity reports',
        'Age-specific blocklists',
        'Cancel anytime'
      ],
      cta: 'Add a Child',
      featured: false
    },
    {
      name: 'Family',
      price: '$8',
      period: '/month',
      description: 'One flat plan for your whole family.',
      features: [
        'Everything in Individual',
        'Unlimited children',
        'Shared family settings',
        'Per-child policies & reports',
        'Priority support'
      ],
      cta: 'Start Free Trial',
      featured: true
    }
  ]

  return (
    <div className="plans-page">
      <Navbar />
      <div className="plans-page-container">
        <span className="plans-page-badge">Simple, honest pricing</span>
        <h1 className="plans-page-heading">Choose Your Plan</h1>
        <p className="plans-page-subtitle">
          Start free with one child. Add more, or go Family — your call.
        </p>

        <div className="plans-page-grid">
          {plans.map((plan, index) => (
            <div className={`plan-page-card ${plan.featured ? 'plan-page-featured' : ''}`} key={index}>
              {plan.featured && <div className="plan-badge">Most Popular</div>}
              <h2 className="plan-page-name">{plan.name}</h2>
              <div className="plan-page-price">
                <span className="price-amount">{plan.price}</span>
                <span className="price-period">{plan.period}</span>
              </div>
              <p className="plan-page-desc">{plan.description}</p>
              <ul className="plan-page-features">
                {plan.features.map((feature, i) => (
                  <li key={i} className="plan-feature-item">
                    <span className="plan-check">✓</span>
                    {feature}
                  </li>
                ))}
              </ul>
              <Link to="/app" className="plan-page-btn">{plan.cta}</Link>
            </div>
          ))}
        </div>

        <div className="plans-compare-link">
          <Link to="/features">See full feature comparison →</Link>
        </div>

        <div className="plans-page-guarantee">
          <div className="guarantee-icon">✦</div>
          <h3>30-Day Money-Back Guarantee</h3>
          <p>If LumaGuard doesn't work for you, we'll refund you — no questions asked. But we think you'll want to stay.</p>
        </div>
      </div>
    </div>
  )
}

export default Plans