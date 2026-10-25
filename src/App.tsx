import { useState } from "react";

const missions = [
  {
    tag: "POUPAR",
    title: "Meu cofrinho",
    text: "Descubra como guardar um pouquinho de cada vez.",
    color: "yellow",
  },
  {
    tag: "ESCOLHER",
    title: "Escolhas espertas",
    text: "Aprenda a pensar antes de escolher o que comprar.",
    color: "coral",
  },
  {
    tag: "PLANEJAR",
    title: "Minha meta",
    text: "Crie um plano simples para realizar um desejo.",
    color: "green",
  },
];

export default function App() {
  const [selectedMission, setSelectedMission] = useState<number | null>(null);
  const [menuOpen, setMenuOpen] = useState(false);
  const [view, setView] = useState<"home" | "missions" | "mission" | "family">("home");
  const [completed, setCompleted] = useState<number[]>([]);
  const [goal, setGoal] = useState("Bicicleta nova");
  const [saved, setSaved] = useState(65);

  function startMission(index = 0) {
    setSelectedMission(index);
    setView("mission");
    setMenuOpen(false);
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  function navigate(nextView: "home" | "missions" | "family") {
    setView(nextView);
    setMenuOpen(false);
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  return (
    <main>
      <header className="site-header">
        <button className="brand brand-button" onClick={() => navigate("home")} aria-label="Clube da Moeda, início">
          <span className="coin-logo" aria-hidden="true">$</span>
          <span>CLUBE<br /><strong>DA MOEDA</strong></span>
        </button>
        <button
          className="menu-button"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-expanded={menuOpen}
          aria-label="Abrir menu"
        >
          <span /><span /><span />
        </button>
        <nav className={menuOpen ? "open" : ""} aria-label="Navegação principal">
          <button onClick={() => navigate("missions")}>Missões</button>
          <button onClick={() => navigate("home")}>Como funciona</button>
          <button onClick={() => navigate("family")}>Para famílias</button>
          <button className="family-button" onClick={() => navigate("family")}>Área da família</button>
        </nav>
      </header>

      {view === "home" && <>
      <section className="hero" id="inicio">
        <div className="hero-copy">
          <span className="eyebrow">APRENDER • ESCOLHER • CRESCER</span>
          <h1>Dinheiro também se aprende <em>brincando!</em></h1>
          <p>Missões divertidas para você aprender a escolher, planejar e guardar — no seu ritmo.</p>
          <button className="primary-button" onClick={() => startMission()}>
            Começar minha missão <span aria-hidden="true">→</span>
          </button>
          <small>Grátis, seguro e sempre com um adulto por perto.</small>
        </div>
        <div className="hero-art" aria-label="Ilustração de uma criança guardando moedas em um cofrinho">
          <span className="spark spark-one">+</span>
          <span className="spark spark-two">+</span>
          <div className="child">
            <div className="hair" />
            <div className="face"><i /><b /></div>
            <div className="body" />
            <div className="arm" />
          </div>
          <div className="pig">
            <div className="pig-ear" />
            <div className="pig-body">
              <i className="pig-eye" />
              <i className="pig-nose" />
            </div>
            <div className="pig-leg left" />
            <div className="pig-leg right" />
            <div className="coin-slot" />
          </div>
          <div className="art-coin coin-a">$</div>
          <div className="art-coin coin-b">$</div>
          <div className="ground" />
        </div>
      </section>

      <section className="how" id="como-funciona">
        <span className="section-kicker">É FÁCIL E DIVERTIDO</span>
        <h2>Como funciona?</h2>
        <div className="steps">
          <article>
            <span className="step-number">1</span>
            <div className="step-icon book" aria-hidden="true">Aa</div>
            <h3>Aprenda</h3>
            <p>Histórias curtas e dicas fáceis de entender.</p>
          </article>
          <article>
            <span className="step-number">2</span>
            <div className="step-icon target" aria-hidden="true"><i /></div>
            <h3>Pratique</h3>
            <p>Complete missões usando situações do dia a dia.</p>
          </article>
          <article>
            <span className="step-number">3</span>
            <div className="step-icon star" aria-hidden="true">★</div>
            <h3>Comemore</h3>
            <p>Acompanhe cada avanço, sem pressa e sem ranking.</p>
          </article>
        </div>
      </section>

      <section className="missions" id="missoes">
        <div className="section-heading">
          <div>
            <span className="section-kicker">ESCOLHA SUA AVENTURA</span>
            <h2>Qual missão vamos começar?</h2>
          </div>
          <p>Cada missão tem atividades rápidas para fazer sozinho ou com a família.</p>
        </div>
        <div className="mission-grid">
          {missions.map((mission, index) => (
            <article className={`mission-card ${mission.color}`} key={mission.title}>
              <div className="mission-visual" aria-hidden="true">
                <span>{index === 0 ? "$" : index === 1 ? "?" : "✓"}</span>
              </div>
              <span className="mission-tag">{mission.tag}</span>
              <h3>{mission.title}</h3>
              <p>{mission.text}</p>
              <button onClick={() => startMission(index)}>Explorar missão <span>→</span></button>
            </article>
          ))}
        </div>
      </section>

      <section className="families" id="familias">
        <div className="family-seal"><span>✓</span><strong>Juntos é<br />mais seguro</strong></div>
        <div>
          <span className="section-kicker">PARA QUEM CUIDA</span>
          <h2>Família por perto,<br />autonomia aos poucos.</h2>
          <p>O Clube da Moeda não tem compras, anúncios nem comparações. Responsáveis acompanham as metas e ajudam nas conversas importantes.</p>
          <button className="text-link" onClick={() => navigate("family")}>Conhecer a área da família <span>→</span></button>
        </div>
        <ul>
          <li><span>✓</span> Conteúdo adequado para cada idade</li>
          <li><span>✓</span> Privacidade em primeiro lugar</li>
          <li><span>✓</span> Sem ranking ou pressão</li>
        </ul>
      </section>
      </>}

      {view === "missions" && (
        <section className="inside-page">
          <div className="page-intro">
            <button className="back-link" onClick={() => navigate("home")}>← Voltar ao início</button>
            <span className="section-kicker">TRILHA DE APRENDIZADO</span>
            <h1>Missões para aprender<br /><em>fazendo.</em></h1>
            <p>Escolha uma aventura. Cada uma tem três passos curtos e uma conversa para fazer em família.</p>
          </div>
          <div className="mission-list">
            {missions.map((mission, index) => (
              <article className={`mission-row ${mission.color}`} key={mission.title}>
                <div className="row-number">0{index + 1}</div>
                <div className="row-icon">{index === 0 ? "$" : index === 1 ? "?" : "✓"}</div>
                <div>
                  <span className="mission-tag">{mission.tag}</span>
                  <h2>{mission.title}</h2>
                  <p>{mission.text}</p>
                  <small>3 atividades • cerca de 10 minutos</small>
                </div>
                <div className="row-action">
                  {completed.includes(index) && <span className="done-label">Concluída</span>}
                  <button className="primary-button" onClick={() => startMission(index)}>
                    {completed.includes(index) ? "Fazer de novo" : "Começar"} <span>→</span>
                  </button>
                </div>
              </article>
            ))}
          </div>
        </section>
      )}

      {view === "mission" && selectedMission !== null && (
        <section className="inside-page lesson-page">
          <button className="back-link" onClick={() => navigate("missions")}>← Todas as missões</button>
          <div className="lesson-layout">
            <aside>
              <span className="section-kicker">MISSÃO {selectedMission + 1}</span>
              <h2>{missions[selectedMission].title}</h2>
              <ol>
                <li className="current"><span>1</span> Descobrir</li>
                <li><span>2</span> Praticar</li>
                <li><span>3</span> Conversar</li>
              </ol>
            </aside>
            <div className="activity-card">
              <span className="activity-label">ATIVIDADE RÁPIDA</span>
              <h1>{selectedMission === 0 ? "Para que você quer guardar?" : selectedMission === 1 ? "É desejo ou necessidade?" : "Qual é a sua próxima meta?"}</h1>
              <p>
                {selectedMission === 0
                  ? "Escolha algo importante para você. Pode ser um passeio, um brinquedo ou um presente para alguém."
                  : selectedMission === 1
                    ? "Antes de comprar, pare e pense: eu preciso disso agora ou posso esperar um pouco?"
                    : "Uma meta fica mais fácil quando sabemos quanto custa e quanto podemos guardar por semana."}
              </p>
              <div className="choice-grid">
                {["Quero agora", "Posso planejar", "Vou conversar"].map((choice) => (
                  <button key={choice}>{choice}<span>○</span></button>
                ))}
              </div>
              <div className="lesson-footer">
                <span>Passo 1 de 3</span>
                <button
                  className="primary-button"
                  onClick={() => {
                    setCompleted((items) => items.includes(selectedMission) ? items : [...items, selectedMission]);
                    navigate("missions");
                  }}
                >
                  Concluir missão <span>→</span>
                </button>
              </div>
            </div>
          </div>
        </section>
      )}

      {view === "family" && (
        <section className="inside-page family-dashboard">
          <div className="dashboard-head">
            <div>
              <button className="back-link" onClick={() => navigate("home")}>← Voltar ao início</button>
              <span className="section-kicker">ÁREA DA FAMÍLIA</span>
              <h1>Olá, família da Lia.</h1>
              <p>Acompanhe os aprendizados e combine pequenas metas sem pressão.</p>
            </div>
            <div className="child-profile"><span>L</span><div><strong>Lia</strong><small>10 anos • nível exploradora</small></div></div>
          </div>

          <div className="dashboard-grid">
            <article className="dashboard-card goal-card">
              <div className="card-title"><span>01</span><div><small>META ATUAL</small><h2>{goal}</h2></div></div>
              <label>Nome da meta<input value={goal} onChange={(event) => setGoal(event.target.value)} /></label>
              <div className="money-row"><strong>R$ {saved}</strong><span>de R$ 200</span></div>
              <div className="goal-progress"><i style={{ width: `${Math.min(saved / 2, 100)}%` }} /></div>
              <div className="goal-actions">
                <button onClick={() => setSaved(Math.max(0, saved - 5))}>− R$ 5</button>
                <button onClick={() => setSaved(Math.min(200, saved + 5))}>+ R$ 5 guardados</button>
              </div>
            </article>

            <article className="dashboard-card">
              <div className="card-title"><span>02</span><div><small>APRENDIZADO</small><h2>Progresso da Lia</h2></div></div>
              <div className="stats">
                <div><strong>{completed.length}</strong><span>missões concluídas</span></div>
                <div><strong>{completed.length * 3}</strong><span>atividades feitas</span></div>
              </div>
              <ul className="progress-list">
                {missions.map((mission, index) => <li key={mission.title}><span className={completed.includes(index) ? "checked" : ""}>{completed.includes(index) ? "✓" : index + 1}</span>{mission.title}<small>{completed.includes(index) ? "Concluída" : "Ainda não iniciada"}</small></li>)}
              </ul>
            </article>

            <article className="dashboard-card conversation-card">
              <div className="card-title"><span>03</span><div><small>DICA DA SEMANA</small><h2>Conversem sobre escolhas</h2></div></div>
              <blockquote>“Se você tivesse R$ 20 hoje, guardaria uma parte ou usaria tudo? Por quê?”</blockquote>
              <p>Não existe resposta errada. Escute e ajude a criança a pensar nas consequências de cada escolha.</p>
            </article>

            <article className="dashboard-card safety-card">
              <div className="card-title"><span>✓</span><div><small>AMBIENTE SEGURO</small><h2>Privacidade da criança</h2></div></div>
              <p>O Clube da Moeda não exibe anúncios, não possui compras e não compara crianças. Os dados desta demonstração ficam apenas nesta sessão.</p>
            </article>
          </div>
        </section>
      )}

      <footer>
        <div className="brand footer-brand"><span className="coin-logo">$</span><span>CLUBE<br /><strong>DA MOEDA</strong></span></div>
        <p>Pequenas escolhas. Grandes aprendizados.</p>
        <span>Feito para aprender em família.</span>
      </footer>
    </main>
  );
}
