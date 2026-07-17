import { Link } from 'react-router-dom'
import './VisionPreview.css'

function VisionPreview() {
  return (
    <section className="vision-preview">
      <div className="vision-container">
        <div className="vision-image">
          <img src="/together.png" alt="Togetherness is key" />
        </div>
        <div className="vision-content">
          <span className="vision-badge">Why we built this</span>
          <h2 className="vision-heading">Our Why</h2>
          <blockquote className="vision-quote">
            "We built LumaGuard because willpower alone isn't enough. 
            You deserve a tool that actually has your back."
          </blockquote>
          <p className="vision-attribution">— The LumaGuard Team</p>
          <Link to="/vision" className="vision-link">Read our full story →</Link>
        </div>
      </div>
    </section>
  )
}

export default VisionPreview