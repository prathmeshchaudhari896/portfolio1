export default function About() {
  const details = [
    { label: 'Name', value: 'Prathmesh Chaudhari' },
    { label: 'Location', value: 'Shirpur, Maharashtra' },
    { label: 'Education', value: 'B.Tech CSE (Pursuing)' },
    { label: 'Internship', value: 'Agnirva Space' },
  ]

  return (
    <section id="about">
      <div className="section-header reveal">
        <div className="section-label">✦ Get to Know Me</div>
        <h2 className="section-title">About Me</h2>
      </div>
      <div className="about-grid">
        <div className="about-image-wrapper reveal">
          <div className="about-image">👨‍💻</div>
        </div>
        <div className="about-text reveal">
          <h3>A Passionate Developer from Maharashtra</h3>
          <p>
            I'm a B.Tech Computer Science student at R. C. Patel Institute of Technology, Shirpur.
            I'm deeply interested in Java, Data Structures, Web Development, and problem solving.
          </p>
          <p>
            I'm looking for opportunities to apply my technical skills in real-world projects and
            contribute to innovative solutions. With experience in hackathons like SIH 2025 and an
            internship at Agnirva Space, I bring both academic knowledge and practical exposure.
          </p>
          <div className="about-details">
            {details.map((d) => (
              <div className="about-detail" key={d.label}>
                <div className="label">{d.label}</div>
                <div className="value">{d.value}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
