import { motion } from 'framer-motion'
import './Problem.css'

function Problem() {
  return (
    <section className="problem-section">
      <div className="problem-container">
        
        {/* LEFT SIDE: The Glitch Visual */}
        <motion.div 
          className="problem-visual"
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
        >
          <div className="glitch-window">
            <div className="window-header">
              <div className="dot red"></div>
              <div className="dot yellow"></div>
              <div className="dot green"></div>
              <div className="window-title">Extensions</div>
            </div>
            <div className="window-body">
              <div className="extension-row">
                <span className="ext-name">LumaGuard Protection</span>
                <span className="ext-toggle active">ON</span>
              </div>
              <div className="glitch-overlay">
                <i className="bi bi-exclamation-triangle-fill"></i>
                <span>OVERRIDE BLOCKED</span>
              </div>
            </div>
            {/* The glitch line effect */}
            <div className="scanline"></div>
          </div>
        </motion.div>

                {/* RIGHT SIDE: Text */}
        <motion.div 
          className="problem-content"
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <div className="problem-badge">
            The Loophole Problem
          </div>
          
          <h2 className="problem-headline">
            Built to stay on. <br />
            <span className="text-glow">Even when you want it off.</span>
          </h2>

          <p className="problem-text">
            The second the urge hits, you shouldn't be able to just go to your settings, click "Disable," and turn off your protection. 
          </p>

          <p className="problem-text">
            LumaGuard is designed to hold the line when your willpower can't. No easy overrides. No hidden bypasses. Just a secure vault for your focus.
          </p>
        </motion.div>

      </div>
    </section>
  )
}

export default Problem