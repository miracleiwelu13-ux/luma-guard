import { useState } from 'react'
import './FAQPage.css'
import Navbar from '../../components/Navbar/Navbar'

function FAQPage() {
  const [openId, setOpenId] = useState(null)

  const toggle = (id) => {
    setOpenId(openId === id ? null : id)
  }

  const categories = [
    {
      name: 'Getting Started',
      faqs: [
        {
          question: 'Is LumaGuard really free?',
          answer: 'Yes. The Individual plan is completely free — full protection for one device, no ads, no catches. We believe essential protection should never be locked behind a paywall. Paid plans exist for families, businesses, and schools that need multi-device management.'
        },
        {
          question: 'Does it work on all my devices?',
          answer: 'LumaGuard works on Android, iOS, Windows, and Mac. The free Individual plan covers one device. Family and Business plans support up to 6 and 20 devices respectively, with synced settings and shared management.'
        },
        {
          question: 'How is LumaGuard different from other blockers?',
          answer: 'Most blockers give you an easy off switch — a toggle, a browser extension you can remove, or a "forgot password" link that undermines the whole point. LumaGuard blocks at the network level through a VPN, making it genuinely difficult to bypass. We do not profit from your relapses. We profit from people who stay protected.'
        },
        {
          question: 'How do I get started?',
          answer: 'Download LumaGuard from the App Store or Google Play, create an account, set your admin password, and build your blocklist. The setup takes under three minutes. After that, protection runs automatically in the background.'
        }
      ]
    },
    {
      name: 'Protection & Access',
      faqs: [
        {
          question: 'Can I override the block if I change my mind?',
          answer: 'No — and that is the point. LumaGuard is designed so you cannot easily bypass it. Disabling protection requires your admin password, and there is no "forgot password" option. We built it this way because willpower alone is not enough. If you genuinely need to disable it, you will need to go through a deliberate process that gives you time to reconsider.'
        },
        {
          question: 'What if I need to access a blocked site for legitimate reasons?',
          answer: "LumaGuard is designed so it can't be turned off on impulse — there's no admin password or quick override. If you have a genuine, ongoing need to adjust what's blocked, you can request a change with us, with a built-in waiting period before it takes effect. This friction is intentional: it's what makes LumaGuard actually work when willpower alone can't."
        },
        {
          question: 'Will LumaGuard slow down my internet?',
          answer: 'The VPN adds minimal overhead — most users report no noticeable difference in speed for everyday browsing, streaming, or work. The blocking itself happens at the DNS level, which is lightweight and fast.'
        }
      ]
    },
    {
      name: 'Privacy & Billing',
      faqs: [
        {
          question: 'Do you track my browsing history?',
          answer: 'No. We do not track, log, or store your browsing activity. We do not sell data. We do not show ads. Your journey is private. The only data stored locally on your device is your blocklist and settings — nothing leaves your phone or computer.'
        },
        {
          question: 'Can I cancel my paid plan anytime?',
          answer: 'Yes. You can cancel anytime from your account settings — no need to contact support. Your protection continues until the end of your current billing period. If you cancel within your first 30 days, you’re eligible for a full refund, no questions asked.'
        }
      ]
    }
  ]

  return (
    <div className="faq-page">
      <Navbar />
      <div className="faq-page-container">
        <span className="faq-page-badge">Got questions?</span>
        <h1 className="faq-page-heading">Frequently Asked Questions</h1>
        <p className="faq-page-subtitle">
          Everything you need to know about Mindgate — answered honestly.
        </p>

        {categories.map((category, catIndex) => (
          <div className="faq-category" key={catIndex}>
            <h2 className="faq-category-name">{category.name}</h2>
            <div className="faq-page-list">
              {category.faqs.map((faq, index) => {
                const id = `${catIndex}-${index}`
                return (
                  <div
                    className={`faq-page-item ${openId === id ? 'faq-page-open' : ''}`}
                    key={id}
                  >
                    <button className="faq-page-question" onClick={() => toggle(id)}>
                      <span>{faq.question}</span>
                      <span className="faq-page-icon">{openId === id ? '−' : '+'}</span>
                    </button>
                    <div className="faq-page-answer">
                      <p>{faq.answer}</p>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        ))}

        <div className="faq-page-footer">
          <h3>Still have questions?</h3>
          <p>We're happy to help with anything not covered here.</p>
          <a href="mailto:hello@mindgate.com" className="faq-page-contact">Contact us →</a>
        </div>
      </div>
    </div>
  )
}

export default FAQPage