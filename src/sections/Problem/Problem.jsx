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
                <span>PAUSE. THINK. THEN DECIDE.</span>
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
            Built to slow you down. <br />
            <span className="text-glow">Right when it matters.</span>
          </h2>

          <p className="problem-text">
            When an urge hits, the easiest move is to switch your protection off. LumaGuard puts time, effort and people between you and that move.
          </p>

          <p className="problem-text">
            A 60-minute vault. A 100-word passage you have to type by hand to uninstall. An optional accountability partner who is told if you try. It is not unbreakable, but it makes sure a weak moment doesn't get the final say.
          </p>
        </motion.div>

      </div>
    </section>
  )
}

export default Problem
