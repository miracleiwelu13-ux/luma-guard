import { useState } from 'react'
import { Link } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import './FAQPage.css'

const faqs = [
  {
    q: "Can I just uninstall LumaGuard when I get an urge?",
    a: "Not in a split second. To uninstall, you first type a 100-word passage by hand (pasting is blocked). If you have an accountability partner, they're emailed when you open the uninstall page or finish it, and also if LumaGuard goes silent for 12 hours. To be honest, Chrome never lets an extension fully stop you from removing it, so LumaGuard works by adding friction and people, not force."
  },
  {
    q: "Is the free version actually useful, or just a demo?",
    a: "It's the real thing. Free includes the 60-minute timer, incognito coverage, the AI companion (with a daily message limit), the Days Safe streak, and the uninstall passage. We don't put basic safety behind a paywall."
  },
  {
    q: "What happens if I try to visit a blocked site in a new tab?",
    a: "As soon as you try to open a blocked site, the timer starts. If you open a new tab, refresh, or search again, it goes back to 60 minutes. So you either sit with the discomfort or close your browser completely."
  },
  {
    q: "Is my data private?",
    a: "We never collect which sites you visit or what you search for. Those checks happen on your device. If you create an account, we store your email and your streak dates. AI chat messages are processed by our AI provider and we don't store them. Accountability partners only get the alerts described above. The full details are in our Privacy Policy."
  },
  {
    q: "How will the Squad plan work?",
    a: "Squads are coming soon. Up to 4 people will be able to link their accounts. Your personal streak never resets because of anyone else, and the group streak only counts days when everyone stays clean. If someone tries to bypass the vault, the alert goes privately to their partner, who decides whether to tell the group."
  },
  {
    q: "Will this block apps on my phone?",
    a: "Not yet. Today LumaGuard blocks Chrome on your computer. Multi-device support, including Safari on iOS, Chrome on Android, and other desktop browsers, is planned for a future update."
  }
]

export default function FAQPage() {
  const [openIndex, setOpenIndex] = useState(null)

  const toggle = (index) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <div className="faq-page">
      <div className="faq-page-container">
        
        <div className="faq-layout">
          
          {/* Left Column */}
          <div className="faq-sidebar">
            <div className="problem-badge">Support</div>
            <h1>Frequently Asked Questions</h1>
            <p>Quick answers about how LumaGuard works, billing, and your privacy.</p>
            
            <div className="faq-contact-box">
              <h4>Still have questions?</h4>
              <p>Can't find what you're looking for? Reach out and our team will get back to you.</p>
              <Link to="/contact" className="btn-secondary">Get in touch</Link>
            </div>
          </div>

          {/* Right Column */}
          <div className="faq-accordion">
            {faqs.map((faq, index) => (
              <div 
                key={index} 
                className={`faq-item ${openIndex === index ? 'open' : ''}`}
              >
                <button className="faq-question" onClick={() => toggle(index)}>
                  <span>{faq.q}</span>
                  <i className={`bi bi-plus-lg faq-icon`}></i>
                </button>
                
                <AnimatePresence>
                  {openIndex === index && (
                    <motion.div 
                      className="faq-answer-wrapper"
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                    >
                      <div className="faq-answer">
                        <p>{faq.a}</p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>

        </div>

      </div>
    </div>
  )
}
