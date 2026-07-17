const CODE_LINES = [
  { code: <><span className="syn-comment">// portfolio.js</span></> },
  { code: <>&nbsp;</> },
  { code: <><span className="syn-keyword">const</span> darlei = {'{'}</> },
  { code: <>&nbsp;&nbsp;<span className="syn-prop">name</span>: <span className="syn-string">"Darlei Santos Santana"</span>,</> },
  { code: <>&nbsp;&nbsp;<span className="syn-prop">role</span>: <span className="syn-string">"Desenvolvedor Full Stack"</span>,</> },
  { code: <>&nbsp;&nbsp;<span className="syn-prop">formacao</span>: <span className="syn-string">"Análise e Desenvolvimento de Sistemas"</span>,</> },
  { code: <>&nbsp;&nbsp;<span className="syn-prop">foco</span>: [<span className="syn-string">"web"</span>, <span className="syn-string">"mobile"</span>, <span className="syn-string">"games"</span>],</> },
  { code: <>&nbsp;&nbsp;<span className="syn-prop">stack</span>: [<span className="syn-string">"React"</span>, <span className="syn-string">"Kotlin"</span>, <span className="syn-string">"Firebase"</span>, <span className="syn-string">"SQL"</span>],</> },
  { code: <>{'};'}</> },
  { code: <>&nbsp;</> },
  { code: <><span className="syn-prop">darlei</span>.<span className="syn-keyword">status</span>()</> },
]

export default function Hero() {
  return (
    <section id="inicio" className="section hero">
      <div className="container hero-grid">
        <div>
          <p className="eyebrow">online — disponível para novos projetos</p>
          <h1 className="hero-title">
            Transformo ideias em <span className="hero-highlight">software</span>.
          </h1>
          <p className="hero-sub">
            Desenvolvedor Full Stack focado em aplicações web, mobile e games —
            do protótipo à entrega.
          </p>
          <div className="hero-actions">
            <a href="#projetos" className="btn btn-primary">Ver projetos</a>
            <a href="#contato" className="btn btn-ghost">Falar comigo</a>
          </div>
        </div>

        <div className="editor-window hero-code">
          <div className="editor-titlebar">
            <span className="window-dots"><span /><span /><span /></span>
            <span className="editor-filename">portfolio.js</span>
          </div>
          <div className="hero-code-body">
            <pre className="code-block">
              {CODE_LINES.map((line, i) => (
                <div className="code-line" key={i}>
                  <span className="line-number">{i + 1}</span>
                  <span className="line-content">{line.code}</span>
                </div>
              ))}
            </pre>
            <div className="terminal-output">
              <span className="syn-comment">&gt;</span> Desenvolvedor Full Stack
              <br />
              <span className="syn-comment">&gt;</span> pronto para o próximo desafio
              <span className="cursor-blink">_</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
