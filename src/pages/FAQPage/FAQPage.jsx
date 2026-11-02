import { useState } from 'react'
import { Link } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import './FAQPage.css'

const faqs = [
  {
    q: "Can I just uninstall LumaGuard when I get an urge?",
    a: "You can try, but we've made it really hard on purpose. First you have to wait out the 60-minute timer. Then, to remove the extension, you have to type a random 250-word paragraph without a single mistake. One typo and the page resets. By the time you finish, the urge has usually passed."
  },
  {
    q: "Is the free version actually useful, or just a demo?",
    a: "It's the real thing. The free version includes the 60-minute timer, the Typo Key, breathing exercises, and a daily allowance of AI messages. We don't put basic safety behind a paywall."
  },
  {
    q: "What happens if I try to visit a blocked site in a new tab?",
    a: "As soon as you try to open a blocked site, the timer starts. If you open a new tab, refresh, or search again, it goes back to 60 minutes. So you either sit with the discomfort or close your browser completely."
  },
  {
    q: "Is my data private?",
    a: "Yes. We don't track which sites you visit or what you search for, and the timer runs locally on your device. The only time anything gets shared is if you link an Accountability Partner, and then it's just the alert we send them."
  },
  {
    q: "How does the Squad plan work?",
    a: "Up to 4 people can link their accounts and see each other's streaks. If someone tries to get around the vault, their Accountability Partner gets an email. Think of it as multiplayer mode for quitting."
  },
  {
    q: "Will this block apps on my phone?",
    a: "The free version blocks Chrome on your computer. Pro and Squad include Multi-Device Sync, so you can lock down Safari on iOS, Chrome on Android, and your desktop browsers all at once."
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
              <p>Can't find what you're looking for? Reach out and a real person will get back to you.</p>
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