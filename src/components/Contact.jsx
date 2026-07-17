const LINKS = [
  { label: 'github', value: 'darleisantana', href: 'https://github.com/darleisantana' },
  { label: 'linkedin', value: 'darleisantana', href: 'https://www.linkedin.com/in/darleisantana/' },
  { label: 'email', value: 'darleyhyuga@gmail.com', href: 'mailto:darleyhyuga@gmail.com' },
]

export default function Contact() {
  return (
    <section id="contato" className="section">
      <div className="container">
        <p className="eyebrow">contato.sh</p>
        <h2 className="section-title" style={{ marginBottom: 32 }}>Vamos conversar</h2>

        <div className="editor-window terminal-window">
          <div className="editor-titlebar">
            <span className="window-dots"><span /><span /><span /></span>
            <span className="editor-filename">zsh — contato.sh</span>
          </div>
          <div className="terminal-body">
            <p className="terminal-line">
              <span className="syn-green">$</span> whoami
            </p>
            <p className="terminal-line terminal-result">Darlei Santos Santana</p>

            <p className="terminal-line" style={{ marginTop: 18 }}>
              <span className="syn-green">$</span> contatos --list
            </p>

            {LINKS.map((l) => (
              <a
                key={l.label}
                href={l.href}
                target="_blank"
                rel="noreferrer"
                className="terminal-line terminal-result terminal-link"
              >
                <span className="syn-prop">{l.label}</span>
                <span className="syn-punct">:</span> {l.value}
              </a>
            ))}

            <p className="terminal-line" style={{ marginTop: 18 }}>
              <span className="syn-green">$</span> <span className="cursor-blink">_</span>
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
