import { useState, useEffect } from 'react'
import { useLocation, Link } from 'react-router-dom'
import './ResourcesPage.css'
import Navbar from '../../components/Navbar/Navbar'

function ResourcesPage() {
  const [activeTab, setActiveTab] = useState('effects')
  const location = useLocation()

  useEffect(() => {
    const hash = location.hash.replace('#', '')
    if (hash && ['effects', 'stop', 'instead', 'benefits'].includes(hash)) {
      setActiveTab(hash)
    }
  }, [location.hash])

  const tabs = [
    { id: 'effects', label: 'Effects of Porn', icon: '🧠' },
    { id: 'stop', label: 'How to Stop', icon: '🛑' },
    { id: 'instead', label: 'What to Do Instead', icon: '🔄' },
    { id: 'benefits', label: 'Benefits of Quitting', icon: '✨' }
  ]

  const content = {
    effects: {
      heading: 'How Porn Affects You',
      intro: 'Understanding the impact is the first step toward change. Here is what research tells us about how pornography affects the brain, relationships, and mental health.',
      sections: [
        {
          title: 'The Brain',
          body: 'Porn triggers a dopamine surge similar to addictive substances. Over time, your brain builds tolerance — you need more extreme or frequent content to feel the same level of satisfaction. This rewires your reward system, making everyday pleasures feel dull by comparison. Studies using fMRI scans show that heavy porn users have reduced grey matter in the prefrontal cortex — the part of the brain responsible for decision-making and impulse control.'
        },
        {
          title: 'Relationships',
          body: 'Regular porn use is linked to decreased relationship satisfaction, lower sexual intimacy, and unrealistic expectations about sex and body image. Partners often report feeling betrayed, inadequate, or disconnected. A 2020 study published in the Journal of Sex & Marital Therapy found that couples where one partner consumed porn regularly reported significantly lower relationship quality than those who did not.'
        },
        {
          title: 'Mental Health',
          body: 'Heavy porn use correlates with increased rates of depression, anxiety, and social isolation. The shame cycle — use, guilt, promise to quit, relapse — creates a loop that erodes self-esteem. Research from the American Psychological Association links compulsive porn use to higher levels of stress, poor sleep quality, and difficulty concentrating on daily tasks.'
        }
      ]
    },
    stop: {
      heading: 'How to Stop',
      intro: 'Quitting is hard — but it is possible. Here are strategies that actually work, backed by research and real experience.',
      sections: [
        {
          title: 'Install Real Barriers',
          body: 'Willpower alone fails most people. The most effective approach is to install blockers that are genuinely hard to bypass — like LumaGuard. When the barrier is real and the friction is high, you give your future self fewer opportunities to slip. VPN-level blocking works across all apps and browsers, not just one. Combined with an admin password you cannot easily retrieve, this creates genuine accountability.'
        },
        {
          title: 'Identify Your Triggers',
          body: 'Keep a simple log for one week. What time of day do urges hit? What emotions precede them — boredom, stress, loneliness, rejection? Once you map your patterns, you can plan alternatives. If you always slip up late at night, set your phone to lock at 10pm. If stress is a trigger, have a workout or walk queued up. Knowing the enemy makes it beatable.'
        },
        {
          title: 'Replace the Habit',
          body: 'You cannot simply remove a habit — you must replace it. Identify what need porn was filling (escape, comfort, excitement) and find healthier substitutes. Exercise, creative projects, learning an instrument, or even calling a friend can satisfy the same underlying need. The key is having the replacement ready before the urge hits.'
        },
        {
          title: 'Build Accountability',
          body: 'Tell someone you trust. This is uncomfortable, but accountability dramatically increases success rates. Whether it is a friend, partner, therapist, or online support group — knowing someone else knows removes the secrecy that addiction thrives in. Apps like Fortify and communities like NoFap provide structured accountability frameworks.'
        }
      ]
    },
    instead: {
      heading: 'What to Do Instead',
      intro: 'When the urge hits, have these ready. The goal is not to resist — it is to redirect.',
      sections: [
        {
          title: 'Physical Alternatives',
          body: 'Do 20 pushups. Go for a 10-minute walk. Take a cold shower. Physical movement shifts your nervous system out of craving mode and into action mode. Cold exposure in particular has been shown to spike dopamine naturally — giving you a healthy hit that replaces the artificial one you were seeking. Keep a kettlebell by your desk. Make movement the default response.'
        },
        {
          title: 'Mental Alternatives',
          body: 'Open a book. Start a puzzle. Write in a journal. Call a friend. The urge typically peaks for 5-15 minutes and then subsides — you do not need to fight it forever, just long enough for it to pass. Having a "distraction menu" taped to your wall removes the decision fatigue in the moment. Pick one item and do it immediately.'
        },
        {
          title: 'Creative Alternatives',
          body: 'Channel that energy into making something. Draw, code, play music, cook a meal, build something with your hands. Creativity engages the same dopamine pathways but produces something meaningful instead of regret. Many former users report that discovering a creative outlet was the single most important factor in their recovery.'
        },
        {
          title: 'Social Alternatives',
          body: 'Isolation feeds addiction. When you feel the urge, go where people are — a coffee shop, a gym, a library, or just the living room where your family is. Being physically around others makes acting out nearly impossible and reminds you what you are fighting for. Join a club, a sports team, or a volunteer group to build regular social rhythms.'
        }
      ]
    },
    benefits: {
      heading: 'Benefits of Quitting',
      intro: 'Here is what changes when you stop. These are not abstract promises — they are documented outcomes reported by people who quit.',
      sections: [
        {
          title: 'Mental Clarity',
          body: 'Within weeks of quitting, most people report sharper focus, better memory, and less brain fog. Your dopamine receptors begin to reset, and everyday activities — work, conversation, nature — start to feel rewarding again. Tasks that felt impossible become manageable. Decisions become easier. Your mind feels like yours again.'
        },
        {
          title: 'Better Relationships',
          body: 'Intimacy improves. You become more present with your partner. Attraction to real people — with all their beautiful imperfections — returns. Many couples report a complete turnaround in their emotional and physical connection within months. Eye contact stops feeling awkward. Touch becomes meaningful again rather than transactional.'
        },
        {
          title: 'More Energy & Time',
          body: 'The average person spends 40+ hours per month on porn. Reclaiming that time means more sleep, more exercise, more hobbies, more real connection. Energy levels rise as guilt and shame lift. You stop staying up late and waking up drained. Weekends feel longer. Life expands into the space that porn used to occupy.'
        },
        {
          title: 'Self-Respect',
          body: 'Perhaps the most important change. You start keeping promises to yourself again. The shame cycle breaks. You become someone you trust. Self-esteem is not given — it is built through repeated acts of integrity. Every day you choose differently, you prove to yourself that you are in control. That confidence spills into every area of your life.'
        }
      ]
    }
  }

  const active = content[activeTab]

  return (
    <div className="resources-page">
      <Navbar />
      <div className="resources-page-container">
        <span className="resources-page-badge">Learn &amp; recover</span>
        <h1 className="resources-page-heading">Resources</h1>
        <p className="resources-page-subtitle">
          Everything you need to understand, act, and recover — all in one place.
        </p>

        <div className="resources-tabs">
          {tabs.map(tab => (
            <button
              key={tab.id}
              className={`resources-tab ${activeTab === tab.id ? 'resources-tab-active' : ''}`}
              onClick={() => setActiveTab(tab.id)}
            >
              <span className="resources-tab-icon">{tab.icon}</span>
              {tab.label}
            </button>
          ))}
        </div>

        <div className="resources-content">
          <h2 className="resources-content-heading">{active.heading}</h2>
          <p className="resources-content-intro">{active.intro}</p>

          <div className="resources-sections">
            {active.sections.map((section, index) => (
              <div className="resources-section-card" key={index}>
                <span className="resources-section-number">{String(index + 1).padStart(2, '0')}</span>
                <div>
                  <h3 className="resources-section-title">{section.title}</h3>
                  <p className="resources-section-body">{section.body}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="resources-cta">
          <h3>Not sure where you stand?</h3>
          <p>Take the honest check-in to see what's worth paying attention to.</p>
          <Link to="/test" className="resources-cta-btn">Take the Test</Link>
        </div>
      </div>
    </div>
  )
}

export default ResourcesPage