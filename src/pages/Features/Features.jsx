import { Link } from 'react-router-dom'
import './Features.css'
import Navbar from '../../components/Navbar/Navbar'

function Features() {
  const coreFeatures = [
    {
      icon: '🔒',
      title: 'VPN-Level Blocking',
      description: 'LumaGuard works at the network level, not just in your browser. Once activated, blocked sites are inaccessible across all apps and browsers on your device. No easy bypass. No incognito loophole.'
    },
    {
      icon: '🛡️',
      title: 'Tamper-Proof Protection',
      description: 'Disabling LumaGuard requires your admin password — and there is no "forgot password" option. We built it this way because real accountability means no emergency exits.'
    },
    {
      icon: '🎨',
      title: 'Custom Blocklists',
      description: 'You decide what gets blocked. Create multiple lists for different contexts — work mode, focus time, or full protection. Total flexibility.'
    },
    {
      icon: '🌐',
      title: 'Cross-Platform Support',
      description: 'LumaGuard works on Android, iOS, Windows, and Mac. Your protection follows you across every device you own.'
    }
  ]

  const supportFeatures = [
    {
      icon: '📊',
      title: 'Activity Dashboard',
      description: 'See your stats at a glance — sites blocked, attempts prevented, and streaks maintained. Watch your progress build over time and stay motivated.'
    },
    {
      icon: '👨‍👩‍👧‍👦',
      title: 'Family & Team Plans',
      description: 'Protect your whole household or team from one dashboard. Set custom policies per device, view activity reports, and manage everything remotely.'
    },
    {
      icon: '🆓',
      title: 'Free Forever',
      description: 'The Individual plan is completely free — full protection, no ads, no time limits. We believe essential protection shouldn\'t come with a price tag.'
    },
    {
      icon: '🔐',
      title: 'Privacy First',
      description: 'We don\'t track your browsing. We don\'t sell your data. We don\'t store logs of what you block. Your journey is yours alone.'
    }
  ]

  return (
    <div className="features-page">
      <Navbar />

      {/* Intro — dark */}
      <section className="features-intro">
        <div className="features-intro-container">
          <span className="features-badge">What's inside</span>
          <h1 className="features-heading">Features</h1>
          <p className="features-subtitle">
            Everything you need to take back control — built with real accountability in mind.
          </p>
        </div>
      </section>

      {/* Core Protection — light */}
      <section className="features-section features-section-light">
        <div className="features-section-container">
          <h2 className="features-section-heading">Core Protection</h2>
          <p className="features-section-lead">The mechanics that make LumaGuard actually hard to bypass.</p>
          <div className="features-grid">
            {coreFeatures.map((feature, index) => (
              <div className="feature-card" key={index}>
                <div className="feature-icon">{feature.icon}</div>
                <h3 className="feature-title">{feature.title}</h3>
                <p className="feature-desc">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Built To Support You — dark */}
      <section className="features-section features-section-dark">
        <div className="features-section-container">
          <h2 className="features-section-heading">Built To Support You</h2>
          <p className="features-section-lead">Beyond blocking — the parts that help you stay the course.</p>
          <div className="features-grid">
            {supportFeatures.map((feature, index) => (
              <div className="feature-card" key={index}>
                <div className="feature-icon">{feature.icon}</div>
                <h3 className="feature-title">{feature.title}</h3>
                <p className="feature-desc">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Closing CTA — dark */}
      <section className="features-cta">
        <div className="features-cta-container">
          <h2 className="features-cta-heading">See it in action</h2>
          <p className="features-cta-text">Start free. No card required. Full protection from day one.</p>
          <Link to="/plans" className="features-cta-btn">Get Started Free</Link>
        </div>
      </section>
    </div>
  )
}

export default Features