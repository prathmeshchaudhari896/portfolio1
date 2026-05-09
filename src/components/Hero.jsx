import { useState, useEffect, useRef, useCallback } from 'react'

function GitHubIcon({ size = 18 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
    </svg>
  )
}

const roles = ['Computer Science Student', 'Web Developer', 'Problem Solver', 'Java Developer']

function useTypingEffect(words, typingSpeed = 80, deletingSpeed = 40, pauseDuration = 1500) {
  const [displayText, setDisplayText] = useState('')
  const wordIndexRef = useRef(0)
  const charIndexRef = useRef(0)
  const isDeletingRef = useRef(false)

  const tick = useCallback(() => {
    const currentWord = words[wordIndexRef.current]

    if (isDeletingRef.current) {
      charIndexRef.current--
      setDisplayText(currentWord.substring(0, charIndexRef.current))
      if (charIndexRef.current <= 0) {
        isDeletingRef.current = false
        wordIndexRef.current = (wordIndexRef.current + 1) % words.length
      }
    } else {
      charIndexRef.current++
      setDisplayText(currentWord.substring(0, charIndexRef.current))
      if (charIndexRef.current >= currentWord.length) {
        isDeletingRef.current = true
      }
    }
  }, [words])

  useEffect(() => {
    const getDelay = () => {
      const currentWord = words[wordIndexRef.current]
      if (!isDeletingRef.current && charIndexRef.current >= currentWord.length) {
        return pauseDuration
      }
      return isDeletingRef.current ? deletingSpeed : typingSpeed
    }

    const timer = setTimeout(tick, getDelay())
    return () => clearTimeout(timer)
  }, [displayText, tick, typingSpeed, deletingSpeed, pauseDuration, words])

  return displayText
}

function CounterAnimation({ target, suffix = '' }) {
  const [count, setCount] = useState(0)
  const ref = useRef(null)
  const hasAnimated = useRef(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated.current) {
          hasAnimated.current = true
          let current = 0
          const step = Math.ceil(target / 40)
          const timer = setInterval(() => {
            current += step
            if (current >= target) {
              current = target
              clearInterval(timer)
            }
            setCount(current)
          }, 40)
        }
      },
      { threshold: 0.5 }
    )
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [target])

  return <h3 ref={ref}>{count}{suffix}</h3>
}

export default function Hero() {
  const typingText = useTypingEffect(roles)

  const scrollTo = (href) => {
    const target = document.querySelector(href)
    if (target) target.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section className="hero" id="hero">
      <div className="hero-bg-grid" />
      <div className="hero-content">
        <div className="hero-badge">
          <span className="dot" /> Open to Opportunities
        </div>
        <h1>
          Hi, I'm <span className="gradient-text">Prathmesh</span>
          <br />Chaudhari
        </h1>
        <p className="hero-description">
          <span id="typing-text">{typingText}</span>
          <span style={{ color: 'var(--accent)', animation: 'pulse 1s infinite' }}>|</span>
          <br />
          Computer Science student passionate about building elegant web solutions,
          solving complex problems, and contributing to innovative projects.
        </p>
        <div className="hero-buttons">
          <a className="btn-primary" onClick={(e) => { e.preventDefault(); scrollTo('#projects') }}>
            View My Work ↓
          </a>
          <a href="https://github.com/prathmeshchaudhari896" target="_blank" rel="noopener noreferrer" className="btn-outline">
            <GitHubIcon /> GitHub
          </a>
        </div>
        <div className="hero-stats">
          <div className="stat-item">
            <CounterAnimation target={3} suffix="+" />
            <p>Projects</p>
          </div>
          <div className="stat-item">
            <CounterAnimation target={7} suffix=".9" />
            <p>CGPA</p>
          </div>
          <div className="stat-item">
            <CounterAnimation target={1122} />
            <p>CodeChef Rating</p>
          </div>
        </div>
      </div>
    </section>
  )
}
