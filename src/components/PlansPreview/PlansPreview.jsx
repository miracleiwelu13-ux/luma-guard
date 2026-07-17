import { Link } from 'react-router-dom'
import './PlansPreview.css'

function PlansPreview() {
  const plans = [
    {
      name: 'Individual',
      price: 'Free',
      description: 'Full protection for one child, on us — forever.',
      cta: 'Get Started',
      featured: false
    },
    {
      name: 'Extra Child',
      price: '$3/month',
      description: 'Add protection for each additional child in your household.',
      cta: 'Add a Child',
      featured: false
    },
    {
      name: 'Family',
      price: '$8/month',
      description: 'One flat plan that covers every child in your family.',
      cta: 'Start Free Trial',
      featured: true
    }
  ]

  return (
    <section className="plans-preview">
      <div className="plans-container">
        <h2 className="plans-heading">Choose Your Plan</h2>
        <div className="plans-grid">
          {plans.map((plan, index) => (
            <div className={`plan-card ${plan.featured ? 'plan-featured' : ''}`} key={index}>
              <h3 className="plan-name">{plan.name}</h3>
              <div className="plan-price">{plan.price}</div>
              <p className="plan-desc">{plan.description}</p>
              <Link to="/plans" className="plan-btn">{plan.cta}</Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default PlansPreview