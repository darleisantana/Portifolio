const CATEGORIES = [
  { key: 'linguagens', items: ['Java', 'JavaScript', 'C#', 'C', 'Python', 'PHP', 'Kotlin'] },
  { key: 'frontend', items: ['React', 'HTML', 'CSS', 'Bootstrap'] },
  { key: 'bancoDeDados', items: ['SQL', 'NoSQL'] },
  { key: 'metodologias', items: ['Scrum', 'Kanban'] },
  { key: 'ferramentas', items: ['Git', 'GitHub', 'Cursor AI'] },
]

export default function Skills() {
  return (
    <section id="skills" className="section">
      <div className="container">
        <p className="eyebrow">skills.json</p>
        <h2 className="section-title" style={{ marginBottom: 32 }}>Habilidades &amp; Stack</h2>

        <div className="editor-window">
          <div className="editor-titlebar">
            <span className="window-dots"><span /><span /><span /></span>
            <span className="editor-filename">skills.json</span>
          </div>
          <div className="skills-body">
            <div className="code-line skills-brace">
              <span className="line-number">1</span>
              <span className="line-content">{'{'}</span>
            </div>

            {CATEGORIES.map((cat, i) => (
              <div className="code-line skills-row" key={cat.key}>
                <span className="line-number">{i + 2}</span>
                <span className="line-content skills-row-content">
                  <span className="syn-prop">"{cat.key}"</span>
                  <span className="syn-punct">: [</span>
                  <span className="skills-pills">
                    {cat.items.map((it) => (
                      <span className="pill pill-skill" key={it}>{it}</span>
                    ))}
                  </span>
                  <span className="syn-punct">]{i < CATEGORIES.length - 1 ? ',' : ''}</span>
                </span>
              </div>
            ))}

            <div className="code-line skills-brace">
              <span className="line-number">{CATEGORIES.length + 2}</span>
              <span className="line-content">{'}'}</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
