import { useState } from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import './ResourcesTeaser.css'

const resources = [
  {
    id: "dopamine-loop",
    tag: "The Science",
    title: "Why your brain craves it",
    desc: "How the dopamine loop works, and why your brain pushes back when you try to quit.",
    color: "#ff453a" // Red warning
  },
  {
    id: "5-minute-reset",
    tag: "Breaking the Urge",
    title: "The 5-Minute Panic Button",
    desc: "When an urge hits, do these 3 physical things right away to snap out of it.",
    color: "#0A84FF" // Blue action
  },
  {
    id: "shame-spiral",
    tag: "Mindset & Recovery",
    title: "Why shame makes it worse",
    desc: "Feeling guilty usually makes things worse, not better. Here's how to get out of that loop.",
    color: "#ffbd2e" // Yellow mind
  }
]

export default function ResourcesTeaser() {
  const [currentIndex, setCurrentIndex] = useState(0)

  const nextCard = () => {
    if (currentIndex < resources.length - 1) {
      setCurrentIndex(currentIndex + 1)
    }
  }

  const prevCard = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1)
    }
  }

  return (
    <section className="resources-section">
      <div className="resources-container">
        
        <div className="resources-header">
          <div className="problem-badge">The Library</div>
          <h2>You don't have to figure this out alone.</h2>
          <p>Learn what's really going on, spot your triggers, and have a plan ready for the hard moments.</p>
        </div>

        {/* The Carousel */}
        <div className="carousel-wrapper">
          <div className="carousel-track">
            {resources.map((resource, index) => {
              // Determine position relative to current index
              const offset = index - currentIndex;
              const isCenter = offset === 0;
              const isLeft = offset === -1;
              const isRight = offset === 1;

              // Hide cards that are further than 1 step away
              if (Math.abs(offset) > 1) return null;

              return (
                <motion.div
                  key={index}
                  className={`resource-card ${isCenter ? 'active' : ''}`}
                  initial={false}
                  animate={{
                    x: offset * 60 + '%', // Spreads them out
                    scale: isCenter ? 1 : 0.85, // Shrink side cards
                    opacity: isCenter ? 1 : 0.4, // Fade side cards
                    zIndex: isCenter ? 10 : 5,
                    filter: isCenter ? 'blur(0px)' : 'blur(2px)'
                  }}
                  transition={{ duration: 0.4, ease: "easeInOut" }}
                  onClick={() => {
                    if (isLeft) prevCard();
                    if (isRight) nextCard();
                  }}
                >
                  <div className="resource-tag" style={{ color: resource.color }}>
                    {resource.tag}
                  </div>
                  <h3>{resource.title}</h3>
                  <p>{resource.desc}</p>
                  <Link to={`/article/${resource.id}`} className="resource-link">
                    Read it <i className="bi bi-arrow-right"></i>
                  </Link>
                </motion.div>
              )
            })}
          </div>

          {/* Navigation Arrows */}
          <button 
            className={`carousel-btn prev ${currentIndex === 0 ? 'disabled' : ''}`} 
            onClick={prevCard}
            disabled={currentIndex === 0}
          >
            <i className="bi bi-chevron-left"></i>
          </button>
          <button 
            className={`carousel-btn next ${currentIndex === resources.length - 1 ? 'disabled' : ''}`} 
            onClick={nextCard}
            disabled={currentIndex === resources.length - 1}
          >
            <i className="bi bi-chevron-right"></i>
          </button>
        </div>

        <div className="resources-cta">
          <Link to="/resources" className="btn-secondary">Browse the full library</Link>
        </div>

      </div>
    </section>
  )
}