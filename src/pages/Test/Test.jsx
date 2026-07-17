import { useState } from 'react'
import { Link } from 'react-router-dom'
import './Test.css'
import Navbar from '../../components/Navbar/Navbar'

function Test() {
  const [step, setStep] = useState(0)
  const [answers, setAnswers] = useState({})
  const [result, setResult] = useState(null)

  const questions = [
    {
      id: 'q1',
      question: 'How often do you feel unable to stop watching porn, even when you want to?',
      options: ['Never', 'Rarely', 'Sometimes', 'Often', 'Daily']
    },
    {
      id: 'q2',
      question: 'Has porn use interfered with your work, school, or relationships?',
      options: ['Not at all', 'Once or twice', 'Occasionally', 'Frequently', 'It has caused serious problems']
    },
    {
      id: 'q3',
      question: 'Do you find yourself needing more extreme or longer content to feel the same level of satisfaction?',
      options: ['Never', 'Rarely', 'Sometimes', 'Often', 'Always']
    },
    {
      id: 'q4',
      question: 'How many times have you tried to cut back or quit?',
      options: ['Never tried', 'Once', '2-3 times', '4-6 times', 'More than I can count']
    },
    {
      id: 'q5',
      question: 'Do you feel shame, guilt, or anxiety after watching?',
      options: ['Never', 'Rarely', 'Sometimes', 'Often', 'Every time']
    },
    {
      id: 'q6',
      question: 'Has porn affected how you see real-life intimacy or your partner?',
      options: ['Not at all', 'Slightly', 'Moderately', 'Significantly', 'It has deeply affected me']
    },
    {
      id: 'q7',
      question: 'Do you watch porn at inappropriate times — work, school, or social settings?',
      options: ['Never', 'Once or twice', 'Occasionally', 'Frequently', 'Daily']
    }
  ]

  const handleAnswer = (questionId, value, index) => {
    setAnswers({ ...answers, [questionId]: index })
  }

  const nextStep = () => {
    if (step < questions.length - 1) {
      setStep(step + 1)
    } else {
      calculateResult()
    }
  }

  const prevStep = () => {
    if (step > 0) setStep(step - 1)
  }

  const calculateResult = () => {
    const total = Object.values(answers).reduce((sum, val) => sum + val, 0)
    const maxScore = (questions.length * 4)
    const percentage = (total / maxScore) * 100

    if (percentage <= 25) {
      setResult({
        level: 'You\'re in Control',
        description: 'Your relationship with porn appears balanced. Stay mindful of your habits and check in with yourself regularly.',
        tone: 'steady'
      })
    } else if (percentage <= 60) {
      setResult({
        level: 'Worth a Closer Look',
        description: 'Some patterns here deserve attention. LumaGuard can help you build healthier boundaries before things escalate.',
        tone: 'caution'
      })
    } else {
      setResult({
        level: 'It\'s Time for a Change',
        description: 'You\'re not alone. Many people have been where you are. LumaGuard was built for this exact moment — to give you real tools that actually help.',
        tone: 'urgent'
      })
    }
  }

  const restart = () => {
    setStep(0)
    setAnswers({})
    setResult(null)
  }

  const progress = ((step + 1) / questions.length) * 100

  return (
    <div className="test-page">
      <Navbar />
      <div className="test-page-container">
        <span className="test-page-badge">Private &amp; anonymous</span>
        <h1 className="test-page-heading">Honest Check-In</h1>
        <p className="test-page-subtitle">
          A private self-assessment. Nothing is stored. No judgment.
        </p>

        {!result && (
          <div className="test-trust-row">
            <span>🔒 No data stored</span>
            <span>⏱ Takes 2 minutes</span>
            <span>👤 Fully anonymous</span>
          </div>
        )}

        {!result ? (
          <div className="test-page-card">
            <div className="test-progress-bar">
              <div className="test-progress-fill" style={{ width: `${progress}%` }}></div>
            </div>
            <p className="test-question-count">Question {step + 1} of {questions.length}</p>

            <h2 className="test-question" key={step}>{questions[step].question}</h2>

            <div className="test-options">
              {questions[step].options.map((option, index) => (
                <button
                  key={index}
                  className={`test-option ${answers[questions[step].id] === index ? 'test-option-selected' : ''}`}
                  onClick={() => handleAnswer(questions[step].id, option, index)}
                >
                  {option}
                </button>
              ))}
            </div>

            <div className="test-nav">
              {step > 0 && (
                <button className="test-nav-btn test-nav-back" onClick={prevStep}>← Back</button>
              )}
              <button
                className="test-nav-btn test-nav-next"
                onClick={nextStep}
                disabled={answers[questions[step].id] === undefined}
              >
                {step === questions.length - 1 ? 'See Results' : 'Next →'}
              </button>
            </div>
          </div>
        ) : (
          <div className="test-result">
            <div className={`test-result-card test-tone-${result.tone}`}>
              <div className="test-result-emoji">
                {result.tone === 'steady' && '🟢'}
                {result.tone === 'caution' && '🟡'}
                {result.tone === 'urgent' && '🔴'}
              </div>
              <h2 className="test-result-level">{result.level}</h2>
              <p className="test-result-desc">{result.description}</p>
              <div className="test-result-actions">
                <Link to="/resources" className="test-result-link">Explore Resources →</Link>
                <button className="test-result-restart" onClick={restart}>Take Again</button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

export default Test