import { Link } from 'react-router-dom'
import './Vision.css'
import Navbar from '../../components/Navbar/Navbar'

function Vision() {
  return (
    <div className="vision-page">
      <Navbar />

      {/* Intro — dark */}
      <section className="vision-intro">
        <div className="vision-intro-container">
          <span className="vision-page-badge">Why we built this</span>
          <h1 className="vision-page-heading">Our Why</h1>
          <p className="vision-page-subtitle">
            The story behind LumaGuard — why we exist, what we believe, and who we're fighting for.
          </p>
          <div className="vision-page-image">
            <img src="/together.png" alt="Togetherness is key" />
          </div>
          <blockquote className="vision-page-quote">
            "We built LumaGuard because willpower alone isn't enough.
            You deserve a tool that actually has your back."
         </blockquote>
         <p className="vision-page-attribution">— The LumaGuard Team</p>
       </div>
      </section>

      {/* The Problem — light */}
      <section className="vision-section vision-section-light">
        <div className="vision-section-container">
          <h2 className="vision-page-subheading">The Problem</h2>
          <p className="vision-page-text">
            Most blockers don't work. They give you an off switch that's way too easy to flip.
            They treat a serious struggle like a minor inconvenience — something you can snooze,
            dismiss, or uninstall in seconds. If you've tried and failed before, it's not your fault.
            The tools were never built for real accountability.
          </p>
          <p className="vision-page-text">
            Every year, millions of people try to quit porn. They download apps, set screen time limits,
            promise themselves "this time is different." But the numbers tell a harder story — over 60%
            relapse within the first week. Not because they're weak. Because the barriers were never real.
          </p>

          <div className="vision-stat-row">
            <div className="vision-stat-item">
              <span className="vision-stat-number">60%</span>
              <span className="vision-stat-label">relapse within week one</span>
            </div>
            <div className="vision-stat-item">
              <span className="vision-stat-number">150K+</span>
              <span className="vision-stat-label">newborns affected yearly in Nigeria</span>
            </div>
            <div className="vision-stat-item">
              <span className="vision-stat-number">1 in 3</span>
              <span className="vision-stat-label">adults report relationship harm</span>
            </div>
          </div>
        </div>
      </section>

      {/* Our Approach — dark */}
      <section className="vision-section vision-section-dark">
        <div className="vision-section-container">
          <h2 className="vision-page-subheading">Our Approach</h2>
          <p className="vision-page-text">
            LumaGuard is different by design. We don't give you an easy way out — because you asked us
            not to. Our blocking works at the network level through a VPN, making it genuinely hard
            to bypass. No simple toggle. No "forgot password" loophole. No uninstall without consequences.
          </p>
          <p className="vision-page-text">
            We believe technology should serve your best self, not your weakest moments. When you set
            up LumaGuard, you're making a commitment to yourself — and we take that commitment seriously.
            The guard stays closed until you're ready to open it the right way.
          </p>
        </div>
      </section>

      {/* Our Promise — light */}
      <section className="vision-section vision-section-light">
        <div className="vision-section-container">
          <h2 className="vision-page-subheading">Our Promise</h2>
          <p className="vision-page-text">
            LumaGuard will always have a free tier that actually works. No hidden fees, no paywalls
            on essential protection. We're not here to profit from your struggle — we're here to build
            something that helps. Paid plans exist for families, schools, and businesses that need
            multi-device management. But the core protection? That's free. Forever.
          </p>
          <p className="vision-page-text">
            We're not a corporation. We're a small team of people who've been where you are.
            We built LumaGuard because we needed it ourselves. And if it helps even one person
            take back control of their time, their focus, and their peace — then it was worth it.
          </p>
        </div>
      </section>

      {/* Closing CTA — dark */}
      <section className="vision-cta">
        <div className="vision-cta-container">
          <h2 className="vision-cta-heading">Ready to see where you stand?</h2>
          <p className="vision-cta-text">Take the honest check-in — no judgment, no data stored.</p>
          <Link to="/test" className="vision-cta-btn">Take the Test</Link>
        </div>
      </section>
    </div>
  )
}

export default Vision