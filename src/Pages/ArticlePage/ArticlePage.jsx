import { useEffect } from 'react'
import { useParams, Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { articles } from '../../data/articles'
import './ArticlePage.css'

export default function ArticlePage() {
  const { id } = useParams()
  const article = articles.find(a => a.id === id)

  // Scroll to top when the page loads
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  if (!article) {
    return (
      <div className="article-page">
        <div className="article-container">
          <h2>Article not found.</h2>
          <Link to="/resources" className="btn-primary">Back to Library</Link>
        </div>
      </div>
    )
  }

  return (
    <div className="article-page">
      <div className="article-container">
        
        <Link to="/resources" className="article-back">
          <i className="bi bi-arrow-left"></i> Back to Library
        </Link>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="article-meta">
            <span className="article-category">{article.category}</span>
            <span className="article-time">{article.time}</span>
          </div>
          
          <h1 className="article-title">{article.title}</h1>
          <p className="article-subtitle">{article.subtitle}</p>
          
          <div className="article-divider"></div>

          <div className="article-content">
            {article.content.map((paragraph, index) => (
              <p key={index}>{paragraph}</p>
            ))}
          </div>
        </motion.div>

      </div>
    </div>
  )
}