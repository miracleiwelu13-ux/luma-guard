import { Link } from 'react-router-dom'
import './AssessmentTeaser.css'

export default function AssessmentTeaser() {
  return (
    <section className="teaser-section">
      <div className="teaser-container terminal-window">
        <div className="teaser-body">
          <h2>Where do you actually stand?</h2>
          <p>Two minutes, completely anonymous. Answer a few honest questions and see where things really are.</p>
          <Link to="/assessment" className="btn-primary">Start Check-In</Link>
        </div>
      </div>
    </section>
  )
}