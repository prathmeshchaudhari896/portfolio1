import { useMemo } from 'react'

export default function Particles() {
  const particles = useMemo(() => {
    return Array.from({ length: 30 }, (_, i) => ({
      id: i,
      left: Math.random() * 100 + '%',
      animationDuration: (Math.random() * 20 + 15) + 's',
      animationDelay: (Math.random() * 15) + 's',
      size: (Math.random() * 3 + 1) + 'px',
    }))
  }, [])

  return (
    <div className="particles">
      {particles.map((p) => (
        <div
          key={p.id}
          className="particle"
          style={{
            left: p.left,
            animationDuration: p.animationDuration,
            animationDelay: p.animationDelay,
            width: p.size,
            height: p.size,
          }}
        />
      ))}
    </div>
  )
}
