export default function About() {
  return (
    <section id="sobre" className="section">
      <div className="container">
        <p className="eyebrow">sobre.md</p>
        <h2 className="section-title" style={{ marginBottom: 32 }}>Sobre mim</h2>

        <div className="editor-window about-window">
          <div className="editor-titlebar">
            <span className="window-dots"><span /><span /><span /></span>
            <span className="editor-filename">sobre.md — preview</span>
          </div>
          <div className="about-body">
            <p className="about-text">
              Sou <strong>Darlei Santos Santana</strong>, Desenvolvedor Full Stack formado em{' '}
              <span className="syn-string-inline">Análise e Desenvolvimento de Sistemas</span> e
              pós-graduando em <span className="syn-string-inline">Desenvolvimento com Ênfase em
              Aplicações Móveis e Games</span>. Desenvolvo aplicações web e mobile utilizando
              React, JavaScript, Kotlin, Firebase e SQL, com foco em boas práticas, arquitetura de
              software e criação de soluções escaláveis.
            </p>

            <div className="about-tags">
              <span className="pill">🎓 ADS</span>
              <span className="pill">📚 Pós em Mobile &amp; Games</span>
              <span className="pill">🌐 Web</span>
              <span className="pill">📱 Mobile</span>
              <span className="pill">🎮 Games</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
