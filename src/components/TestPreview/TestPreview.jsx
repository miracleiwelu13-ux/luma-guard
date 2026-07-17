import { Link } from 'react-router-dom'
import './TestPreview.css'

function TestPreview() {
  return (
    <section className="test-preview">
      <div className="test-card">
        <h2 className="test-heading">Honest Check-In</h2>
        <p className="test-text">
          A quick, private self-assessment to understand your relationship 
          with porn. No judgment. No data stored.
        </p>
        <Link to="/test" className="test-btn">Take the Test</Link>
      </div>
    </section>
  )
}

export default TestPreview