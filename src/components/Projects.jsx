const PROJECTS = [
  {
    file: 'Mainflix.jsx',
    name: 'Mainflix',
    description:
      'Site de streaming pensado para entusiastas de anime e manga, com interface intuitiva para pesquisar e assistir séries e coleções favoritas.',
    stack: ['HTML', 'CSS', 'JavaScript'],
    link: 'https://darleisantana.github.io/Mainflix.github.io/',
  },
  {
    file: 'Snake.jsx',
    name: 'Jogo Snake',
    description:
      'Implementação do clássico jogo da cobrinha: ela cresce a cada comida consumida e o objetivo é sobreviver sem colidir com as paredes ou com o próprio corpo.',
    stack: ['HTML', 'CSS', 'JavaScript'],
    link: 'https://darleisantana.github.io/Snake/',
  },
  {
    file: 'JogoDaVelha.jsx',
    name: 'Jogo da Velha',
    description:
      'Clássico jogo da velha desenvolvido em par, com lógica de vitória, empate e reinício de partida.',
    stack: ['HTML', 'CSS', 'JavaScript'],
    link: 'https://darleisantana.github.io/Jogo_da_velha/',
  },
  {
    file: 'SpaceShooter.jsx',
    name: 'Space Shooter',
    description:
      'Jogo de tiro espacial em que o jogador controla uma nave, desvia de obstáculos e abate inimigos. Controles: seta para cima/baixo e barra de espaço para atirar.',
    stack: ['HTML', 'CSS', 'JavaScript'],
    link: 'https://darleisantana.github.io/spaceShooter/',
  },
]

export default function Projects() {
  return (
    <section id="projetos" className="section">
      <div className="container">
        <p className="eyebrow">projetos/</p>
        <h2 className="section-title" style={{ marginBottom: 32 }}>Projetos</h2>

        <div className="projects-grid">
          {PROJECTS.map((p) => (
            <a
              key={p.file}
              href={p.link}
              target="_blank"
              rel="noreferrer"
              className="editor-window project-card"
            >
              <div className="editor-titlebar">
                <span className="window-dots"><span /><span /><span /></span>
                <span className="editor-filename">{p.file}</span>
              </div>
              <div className="project-body">
                <h3 className="project-name">{p.name}</h3>
                <p className="project-desc">{p.description}</p>
                <div className="project-footer">
                  <div className="project-stack">
                    {p.stack.map((s) => (
                      <span className="pill" key={s}>{s}</span>
                    ))}
                  </div>
                  <span className="project-link">abrir →</span>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
