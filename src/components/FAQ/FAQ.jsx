import { useState } from 'react'
import { Link } from 'react-router-dom'
import './FAQ.css'

function FAQ() {
  const [openIndex, setOpenIndex] = useState(null)

  const toggle = (index) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  const faqs = [
    {
      question: 'Is LumaGuard really free?',
      answer: 'Yes. The Individual plan is completely free — full protection for one device, no ads, no catches. Paid plans are available for families, businesses, and schools that need multiple devices.'
    },
    {
      question: 'Can I override the block if I change my mind?',
      answer: 'No — and that is the point. LumaGuard is designed so you cannot easily bypass it. Disabling protection requires your admin password, and there is no "forgot password" option. We built it this way because willpower alone is not enough.'
    },
    {
      question: 'Does it work on all my devices?',
      answer: 'LumaGuard works on Android, iOS, Windows, and Mac. The free plan covers one device. Family and Business plans support up to 6 devices with synced settings.'
    }
  ]

  return (
    <section className="faq">
      <div className="faq-container">
        <h2 className="faq-heading">Frequently Asked Questions</h2>
        <div className="faq-list">
          {faqs.map((faq, index) => (
            <div
              className={`faq-item ${openIndex === index ? 'faq-open' : ''}`}
              key={index}
            >
              <button className="faq-question" onClick={() => toggle(index)}>
                <span>{faq.question}</span>
                <span className="faq-icon">{openIndex === index ? '−' : '+'}</span>
              </button>
              <div className="faq-answer">
                <p>{faq.answer}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="faq-cta">
          <Link to="/faq" className="faq-link">See all FAQs →</Link>
        </div>
      </div>
    </section>
  )
}

export default FAQ