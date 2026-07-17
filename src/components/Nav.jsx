import { useEffect, useState } from 'react'

const TABS = [
  { id: 'inicio', label: 'hero.jsx' },
  { id: 'sobre', label: 'sobre.md' },
  { id: 'projetos', label: 'projetos/' },
  { id: 'skills', label: 'skills.json' },
  { id: 'contato', label: 'contato.sh' },
]

export default function Nav() {
  const [active, setActive] = useState('inicio')
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const sections = TABS.map((t) => document.getElementById(t.id)).filter(Boolean)

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActive(entry.target.id)
          }
        })
      },
      { rootMargin: '-40% 0px -50% 0px', threshold: 0 }
    )

    sections.forEach((s) => observer.observe(s))
    return () => observer.disconnect()
  }, [])

  const handleClick = (id) => {
    setOpen(false)
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <header className="nav">
      <div className="nav-inner container">
        <button
          className="nav-brand"
          onClick={() => handleClick('inicio')}
          aria-label="Ir para o início"
        >
          <span className="nav-brand-bracket">&lt;</span>DS<span className="nav-brand-bracket">/&gt;</span>
        </button>

        <button
          className="nav-toggle"
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          aria-label="Abrir menu"
        >
          <span />
          <span />
          <span />
        </button>

        <nav className={`nav-tabs ${open ? 'nav-tabs-open' : ''}`}>
          {TABS.map((tab) => (
            <button
              key={tab.id}
              className={`nav-tab ${active === tab.id ? 'nav-tab-active' : ''}`}
              onClick={() => handleClick(tab.id)}
            >
              {tab.label}
            </button>
          ))}
        </nav>
      </div>
    </header>
  )
}
