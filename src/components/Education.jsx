const educationData = [
  {
    year: '2023 – Present',
    title: 'B.Tech — Computer Science & Engineering',
    institution: 'R. C. Patel Institute of Technology, Shirpur',
    score: 'CGPA: 7.91 (Semester 3)',
  },
  {
    year: '2022 – 2024',
    title: 'HSC — Higher Secondary',
    institution: 'Sardar G.G. High School and Junior College, Raver',
    score: '79.80% | MHT-CET: 86.6 Percentile',
  },
  {
    year: '2022',
    title: 'SSC — Secondary School',
    institution: 'Macro Vision Academy School, Raver (CBSE)',
    score: '86.40%',
  },
]

export default function Education() {
  return (
    <section id="education" style={{ background: 'var(--bg-secondary)' }}>
      <div className="section-header reveal">
        <div className="section-label">🎓 Academic Journey</div>
        <h2 className="section-title">Education</h2>
      </div>
      <div className="timeline">
        {educationData.map((item, index) => (
          <div className="timeline-item reveal" key={index}>
            <div className="timeline-dot" />
            <div className="timeline-card">
              <div className="year">{item.year}</div>
              <h3>{item.title}</h3>
              <div className="institution">{item.institution}</div>
              <div className="score">{item.score}</div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
