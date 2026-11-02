import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import './PanicPage.css'

const quotes = [
  "This urge is temporary. It will pass.",
  "You're not your thoughts. You're the one watching them.",
  "Every time you ride this out, the habit loses a little of its grip.",
  "You've gotten through every hard day so far. You can get through the next 10 minutes.",
  "It's just a surge of dopamine. You don't have to act on it."
]

export default function PanicPage() {
  const [quote, setQuote] = useState('')
  const [isBreathingIn, setIsBreathingIn] = useState(true)

  // Pick a random quote on load
  useEffect(() => {
    setQuote(quotes[Math.floor(Math.random() * quotes.length)])
    
    // Swap breathing text every 4 seconds
    const interval = setInterval(() => {
      setIsBreathingIn((prev) => !prev)
    }, 4000)
    return () => clearInterval(interval)
  }, [])

  return (
    <div className="panic-page">
      <div className="panic-container">
        
        <Link to="/" className="panic-close">
          <i className="bi bi-x-lg"></i>
        </Link>

        <div className="panic-header">
          <h2>You're safe.</h2>
          <p>Just watch the circle and breathe.</p>
        </div>

        {/* Breathing Circle */}
        <div className="breathing-wrapper">
          <motion.div 
            className="breathing-circle"
            animate={{
              scale: isBreathingIn ? 1.5 : 1,
              opacity: isBreathingIn ? 0.8 : 0.3,
            }}
            transition={{ duration: 4, ease: "easeInOut" }}
          />
          <div className="breathing-text">
            {isBreathingIn ? 'Breathe in...' : 'Breathe out...'}
          </div>
        </div>

        {/* Distraction Quote */}
        <div className="panic-quote">
          <p>"{quote}"</p>
        </div>

      </div>
    </div>
  )
}