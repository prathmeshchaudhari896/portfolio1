import { useState } from 'react'

const contactCards = [
  { icon: '📧', title: 'Email', value: 'prathmeshchaudhari816@gmail.com', href: 'mailto:prathmeshchaudhari816@gmail.com' },
  { icon: '📱', title: 'Phone', value: '+91 9545221024', href: 'tel:+919545221024' },
  { icon: '💼', title: 'LinkedIn', value: 'prathmesh-chaudhari', href: 'https://linkedin.com/in/prathmesh-chaudhari-010b7532b' },
  { icon: '🐙', title: 'GitHub', value: 'prathmeshchaudhari896', href: 'https://github.com/prathmeshchaudhari896' },
]

export default function Contact() {
  const [btnText, setBtnText] = useState('Send Message →')
  const [btnStyle, setBtnStyle] = useState({})

  const handleSubmit = (e) => {
    e.preventDefault()
    setBtnText('✓ Message Sent!')
    setBtnStyle({ background: 'linear-gradient(135deg, #00d4aa, #00b894)' })
    setTimeout(() => {
      setBtnText('Send Message →')
      setBtnStyle({})
      e.target.reset()
    }, 3000)
  }

  return (
    <section id="contact" style={{ background: 'var(--bg-secondary)' }}>
      <div className="section-header reveal">
        <div className="section-label">📬 Let's Connect</div>
        <h2 className="section-title">Get In Touch</h2>
        <p className="section-subtitle">Feel free to reach out for collaborations, opportunities, or just a friendly chat.</p>
      </div>
      <div className="contact-container">
        <div className="contact-grid reveal">
          {contactCards.map((card) => (
            <a
              key={card.title}
              href={card.href}
              target={card.href.startsWith('http') ? '_blank' : undefined}
              rel={card.href.startsWith('http') ? 'noopener noreferrer' : undefined}
              className="contact-card"
            >
              <div className="icon">{card.icon}</div>
              <h4>{card.title}</h4>
              <p>{card.value}</p>
            </a>
          ))}
        </div>
        <div className="contact-form reveal">
          <h3>Send me a message</h3>
          <form id="contact-form" onSubmit={handleSubmit}>
            <div className="form-row">
              <div className="form-group">
                <label htmlFor="name">Your Name</label>
                <input type="text" id="name" placeholder="John Doe" required />
              </div>
              <div className="form-group">
                <label htmlFor="email">Your Email</label>
                <input type="email" id="email" placeholder="john@example.com" required />
              </div>
            </div>
            <div className="form-group">
              <label htmlFor="subject">Subject</label>
              <input type="text" id="subject" placeholder="What's this about?" />
            </div>
            <div className="form-group">
              <label htmlFor="message">Message</label>
              <textarea id="message" placeholder="Tell me about your project or opportunity..." required />
            </div>
            <button type="submit" className="btn-primary" style={{ width: '100%', justifyContent: 'center', ...btnStyle }}>
              {btnText}
            </button>
          </form>
        </div>
      </div>
    </section>
  )
}
