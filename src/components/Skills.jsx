import { useRef } from 'react'

const skillCategories = [
  {
    title: 'Programming Languages',
    skills: [
      { icon: '☕', name: 'Java' },
      { icon: '⚙️', name: 'C' },
    ],
  },
  {
    title: 'Web Technologies',
    skills: [
      { icon: '🌐', name: 'HTML5' },
      { icon: '🎨', name: 'CSS3' },
      { icon: '⚡', name: 'JavaScript' },
    ],
  },
  {
    title: 'Database',
    skills: [
      { icon: '🗄️', name: 'MySQL' },
    ],
  },
  {
    title: 'Tools & Platforms',
    skills: [
      { icon: '💻', name: 'VS Code' },
      { icon: '🔀', name: 'Git' },
      { icon: '🐙', name: 'GitHub' },
      { icon: '🏆', name: 'CodeChef' },
      { icon: '💡', name: 'HackerRank' },
    ],
  },
  {
    title: 'Core Subjects',
    skills: [
      { icon: '📊', name: 'Data Structures' },
      { icon: '🗃️', name: 'DBMS' },
      { icon: '🖥️', name: 'Operating Systems' },
      { icon: '🌍', name: 'Computer Networks' },
    ],
  },
]

function SkillCard({ icon, name }) {
  const cardRef = useRef(null)

  const handleMouseMove = (e) => {
    const rect = cardRef.current.getBoundingClientRect()
    const x = (e.clientX - rect.left) / rect.width - 0.5
    const y = (e.clientY - rect.top) / rect.height - 0.5
    cardRef.current.style.transform = `translateY(-4px) perspective(800px) rotateX(${-y * 5}deg) rotateY(${x * 5}deg)`
  }

  const handleMouseLeave = () => {
    cardRef.current.style.transform = ''
  }

  return (
    <div
      ref={cardRef}
      className="skill-card"
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      <div className="skill-icon">{icon}</div>
      <span>{name}</span>
    </div>
  )
}

export default function Skills() {
  return (
    <section id="skills" style={{ background: 'var(--bg-secondary)' }}>
      <div className="section-header reveal">
        <div className="section-label">⚡ What I Work With</div>
        <h2 className="section-title">Technical Skills</h2>
      </div>
      <div className="skills-container">
        {skillCategories.map((cat) => (
          <div className="skills-category reveal" key={cat.title}>
            <h3>{cat.title}</h3>
            <div className="skills-grid">
              {cat.skills.map((skill) => (
                <SkillCard key={skill.name} icon={skill.icon} name={skill.name} />
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
