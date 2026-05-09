const certifications = [
  { icon: '☕', bg: 'rgba(108,99,255,0.15)', title: 'Java Programming', subtitle: 'CodeChef Certification' },
  { icon: '⚙️', bg: 'rgba(0,212,170,0.15)', title: 'C Programming', subtitle: 'CodeChef Certification' },
  { icon: '📜', bg: 'rgba(255,107,157,0.15)', title: 'NPTEL Certifications', subtitle: 'Java, DSA & Design' },
  { icon: '🏆', bg: 'rgba(108,99,255,0.15)', title: 'SIH 2025', subtitle: 'College Level Selected' },
  { icon: '🎯', bg: 'rgba(0,212,170,0.15)', title: 'CodeChef Rating: 1122', subtitle: 'Active Problem Solver' },
  { icon: '🚀', bg: 'rgba(255,107,157,0.15)', title: 'Agnirva Space Internship', subtitle: 'Hands-on Experience' },
]

export default function Certifications() {
  return (
    <section id="certifications">
      <div className="section-header reveal">
        <div className="section-label">🏅 Recognition</div>
        <h2 className="section-title">Certifications &amp; Achievements</h2>
      </div>
      <div className="certs-grid">
        {certifications.map((cert, i) => (
          <div className="cert-card reveal" key={i}>
            <div className="cert-icon" style={{ background: cert.bg }}>{cert.icon}</div>
            <div>
              <h4>{cert.title}</h4>
              <p>{cert.subtitle}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
