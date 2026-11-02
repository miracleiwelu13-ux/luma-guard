import { useState } from 'react'
import { Link } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import './AssessmentPage.css'

const questions = [
  {
    id: 'q1',
    question: 'Have you ever said "this is the last time" and then done it anyway?',
    options: ['Never', 'Once or twice', 'Sometimes', 'Pretty often', 'All the time']
  },
  {
    id: 'q2',
    question: 'Has it messed with your work, school, or relationships?',
    options: ['Not at all', 'A little', 'Sometimes', 'Quite a bit', 'Badly']
  },
  {
    id: 'q3',
    question: 'Do you find you need more, or more extreme stuff, to feel the same?',
    options: ['Never', 'Rarely', 'Sometimes', 'Often', 'Always']
  },
  {
    id: 'q4',
    question: 'How many times have you tried to quit or cut back?',
    options: ['Never tried', 'Once', 'A few times', 'Many times', 'Honestly, lost count']
  },
  {
    id: 'q5',
    question: 'Do you feel guilty or low afterward?',
    options: ['Never', 'Rarely', 'Sometimes', 'Usually', 'Every time']
  }
]

function Assessment() {
  const [step, setStep] = useState(0)
  const [answers, setAnswers] = useState({})
  const [result, setResult] = useState(null)

  const handleAnswer = (index) => {
    setAnswers({ ...answers, [questions[step].id]: index })
    
    // Auto-advance after a short delay for smoothness
    if (step < questions.length - 1) {
      setTimeout(() => setStep(step + 1), 300)
    }
  }

  const calculateResult = () => {
    const total = Object.values(answers).reduce((sum, val) => sum + val, 0)
    const maxScore = (questions.length * 4)
    const percentage = (total / maxScore) * 100

    if (percentage <= 25) {
      setResult({
        level: 'You\'re doing alright',
        desc: 'Nothing here looks like a big problem right now. It\'s still worth checking in with yourself once in a while.',
        color: 'safe'
      })
    } else if (percentage <= 60) {
      setResult({
        level: 'It\'s starting to creep in',
        desc: 'Some of your answers show this is taking up more room than you want it to. That\'s really common, and it\'s way easier to deal with early. LumaGuard can help you put some limits in place.',
        color: 'warning'
      })
    } else {
      setResult({
        level: 'You\'re carrying a lot',
        desc: 'You\'re far from the only one who\'s been here, and it doesn\'t mean you\'re weak or broken. LumaGuard was built for exactly this, and you don\'t have to do it by yourself.',
        color: 'danger'
      })
    }
  }

  const restart = () => {
    setStep(0)
    setAnswers({})
    setResult(null)
  }

  const progress = ((step + 1) / questions.length) * 100
  const currentAnswer = answers[questions[step].id]

  return (
    <section className="assessment-section">
      <div className="assessment-container">
        
        <div className="assessment-header">
          <h2>How are you doing?</h2>
          <p>Just for you. Nothing is saved or shared.</p>
        </div>

        <div className="terminal-window">
          <div className="terminal-header">
            <i className="bi bi-terminal-fill"></i> Check-in
          </div>

          {!result ? (
            <div className="terminal-body">
              
              {/* Progress Bar */}
              <div className="terminal-progress-track">
                <div className="terminal-progress-fill" style={{ width: `${progress}%` }}></div>
              </div>
              
              <div className="question-meta">
                <span>QUESTION {step + 1} OF {questions.length}</span>
                <span>{Math.round(progress)}%</span>
              </div>

              <AnimatePresence mode="wait">
                <motion.div 
                  key={step}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.3 }}
                >
                  <h3 className="question-text">{questions[step].question}</h3>
                  
                  <div className="question-options">
                    {questions[step].options.map((opt, index) => (
                      <button 
                        key={index}
                        className={`option-btn ${currentAnswer === index ? 'selected' : ''}`}
                        onClick={() => handleAnswer(index)}
                      >
                        {opt}
                      </button>
                    ))}
                  </div>
                </motion.div>
              </AnimatePresence>

              {/* Next/Submit button (only shows if they selected an option) */}
              {currentAnswer !== undefined && step === questions.length - 1 && (
                <motion.button 
                  className="btn-submit" 
                  onClick={calculateResult}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                >
                  Show me
                </motion.button>
              )}

            </div>
          ) : (
            <motion.div 
              className="terminal-result"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
            >
              <div className={`result-box result-${result.color}`}>
                <div className="result-icon">
                  {result.color === 'safe' && <i className="bi bi-shield-check"></i>}
                  {result.color === 'warning' && <i className="bi bi-exclamation-triangle"></i>}
                  {result.color === 'danger' && <i className="bi bi-shield-x"></i>}
                </div>
                <h3>{result.level}</h3>
                <p>{result.desc}</p>
                
                <div className="result-actions">
                  <Link to="/resources" className="btn-primary">Get help</Link>
                  <button className="btn-text" onClick={restart}>Retake</button>
                </div>
              </div>
            </motion.div>
          )}
        </div>
      </div>
    </section>
  )
}

export default Assessment