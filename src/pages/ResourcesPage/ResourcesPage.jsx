import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import './ResourcesPage.css'

const categories = [
  {
    title: "The Science",
    color: "blue",
    articles: [
      { id: "dopamine-loop", title: "Why your brain keeps craving it", time: "4 min read" },
      { id: "reward-system", title: "How porn changes the brain's reward system", time: "7 min read" }
    ]
  },
  {
    title: "Breaking the Urge",
    color: "green",
    articles: [
      { id: "5-minute-reset", title: "The 5-minute panic button", time: "3 min read" },
      { id: "physical-resets", title: "Cold showers and other physical resets", time: "4 min read" }
    ]
  },
  {
    title: "Mindset & Recovery",
    color: "yellow",
    articles: [
      { id: "shame-spiral", title: "Why shame backfires", time: "5 min read" },
      { id: "after-relapse", title: "What to do after a slip", time: "4 min read" }
    ]
  }
]

export default function ResourcesPage() {
  return (
    <div className="resources-page">
      <div className="resources-page-container">
        
        {/* Header */}
        <div className="resources-page-header">
          <div className="problem-badge">The Library</div>
          <h1>You don't have to figure this out alone.</h1>
          <p>Learn what's going on in your brain, build better habits, and get ready for the hard moments.</p>
        </div>

        {/* SOS Emergency Section */}
        <motion.div 
          className="sos-banner"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="sos-content">
            <div className="sos-icon">
              <i className="bi bi-life-preserver"></i>
            </div>
            <div>
              <h2>Struggling right now?</h2>
              <p>If the urge is strong, skip the reading. Go straight to the reset tools.</p>
            </div>
          </div>
          <Link to="/panic" className="sos-btn">Open Panic Button</Link>
        </motion.div>

        {/* Article Grids */}
        <div className="resources-grid-container">
          {categories.map((cat, i) => (
            <motion.div 
              key={cat.title}
              className="resource-category"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
            >
              <div className="category-header">
                <h3 className={`cat-title ${cat.color}`}>{cat.title}</h3>
              </div>
              
              <div className="article-list">
                {cat.articles.map((article, j) => (
                  <Link to={`/article/${article.id}`} key={j} className="article-item">
                    <div className="article-info">
                      <h4>{article.title}</h4>
                      <span>{article.time}</span>
                    </div>
                    <i className="bi bi-arrow-right"></i>
                  </Link>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="resources-cta-bottom">
          <h2>Want to talk to someone?</h2>
          <p>Our AI companion is there when a block hits, or you can link a friend as your accountability partner.</p>
          <div className="cta-buttons">
            <Link to="/get-started" className="btn-primary">Get LumaGuard</Link>
            <Link to="/pricing" className="btn-secondary">See Pricing</Link>
          </div>
        </div>

      </div>
    </div>
  )
}
