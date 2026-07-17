import { useState } from 'react'
import { Link } from 'react-router-dom'
import './Resources.css'

function Resources() {
  const [current, setCurrent] = useState(0)

  const resources = [
    {
      icon: '🧠',
      title: 'Effects of Porn',
      description: 'Understand how porn impacts your brain, relationships, and mental health over time.',
      link: '/resources#effects'
    },
    {
      icon: '🛑',
      title: 'How to Stop',
      description: 'Practical strategies to break free — from accountability tools to habit replacement.',
      link: '/resources#stop'
    },
    {
      icon: '🌱',
      title: 'What to Do Instead',
      description: 'Healthy alternatives that fill the gap and rebuild your focus and self-control.',
      link: '/resources#instead'
    },
    {
      icon: '✨',
      title: 'Benefits of Quitting',
      description: 'More energy, better relationships, clearer mind — what changes when you stop.',
      link: '/resources#benefits'
    }
  ]

  const next = () => {
    setCurrent((prev) => (prev + 1) % resources.length)
  }

  const prev = () => {
    setCurrent((prev) => (prev - 1 + resources.length) % resources.length)
  }

  return (
    <section className="resources">
      <div className="resources-container">
        <h2 className="resources-heading">Resources</h2>

        <div className="carousel">
          <button className="carousel-arrow carousel-left" onClick={prev}>
            ←
          </button>

          <div className="carousel-track">
            {resources.map((item, index) => (
              <div
                className={`carousel-card ${index === current ? 'active' : ''}`}
                key={index}
              >
                <div className="card-icon">{item.icon}</div>
                <h3 className="card-title">{item.title}</h3>
                <p className="card-desc">{item.description}</p>
                <Link to={item.link} className="card-link">Read More →</Link>
              </div>
            ))}
          </div>

          <button className="carousel-arrow carousel-right" onClick={next}>
            →
          </button>
        </div>

        <div className="carousel-dots">
          {resources.map((_, index) => (
            <button
              key={index}
              className={`dot ${index === current ? 'dot-active' : ''}`}
              onClick={() => setCurrent(index)}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

export default Resources