import { Link } from 'react-router-dom'
import './HowItWorks.css'

function HowItWorks() {
  const steps = [
    {
      number: '01',
      title: 'Download the App',
      text: 'Install Mindgate on your device. It takes less than a minute.',
      img: '/download.png'
    },
    {
      number: '02',
      title: 'Set Your Blocklist',
      text: 'Choose what you want to block. Sites, apps, keywords — you decide.',
      img: '/tick.png'
    },
    {
      number: '03',
      title: 'Live Your Life',
      text: 'Mindgate runs quietly in the background. You focus on what matters.',
      img: '/celebrate.png'
    }
  ]

  return (
    <section className="how-it-works">
      <div className="how-container">
        <h2 className="how-heading">How It Works</h2>
        <div className="how-list">
          {steps.map((step, index) => (
            <div className="how-item" key={index}>
              <div className="how-number">{step.number}</div>
              <div className="how-info">
                <h3 className="how-title">{step.title}</h3>
                <p className="how-text">{step.text}</p>
              </div>
              <div className="how-image">
                <img src={step.img} alt={step.title} />
              </div>
            </div>
          ))}
        </div>
        <div className="how-cta">
          <Link to="/features" className="how-btn">See All Features →</Link>
        </div>
      </div>
    </section>
  )
}

export default HowItWorks