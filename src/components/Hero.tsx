import { BALANCETE, PROVAS, RESULTADO } from '../conteudo'

// Teatro do topo: o balancete passa por conferência (linha de leitura, um ✓ por conta, carimbo do sócio).
const Check = ({ atraso }: { atraso: number }) => (
  <span className="chk" style={{ animationDelay: `${atraso}s` }} aria-hidden="true">
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#f2a96b" strokeWidth="2.4" strokeLinecap="square"><path d="M4 12.5l5 5L20 6.5" /></svg>
  </span>
)

export default function Hero() {
  return (
    <section className="hero">
      <div className="hero__claro">
        <p className="rotulo">Auditoria e soluções contábeis</p>
        <h1 className="serif">Precisão nos números.<br />Segurança nas decisões.</h1>
        <p className="hero__texto">Auditoria, contabilidade e compliance para empresas que operam em setores regulados e não podem errar. Conduzido por sócios com mais de vinte anos em bancos, cooperativas e seguradoras.</p>
        <div className="hero__acoes">
          <a href="#contato" className="btn btn--dark">Agendar uma conversa</a>
          <a href="#servicos" className="link-sublinhado">Conhecer os serviços</a>
        </div>
      </div>
      <div className="hero__escuro">
        <div className="balancete__topo"><span>Balancete em conferência</span><span>demonstração</span></div>
        <div className="balancete" role="img" aria-label="Demonstração: um balancete sendo conferido linha a linha e carimbado por um sócio">
          <div className="scan" />
          {BALANCETE.map((l, i) => (
            <div key={l.conta} className="balancete__linha">
              <span>{l.conta}</span><span className="balancete__valor">{l.valor}</span><Check atraso={0.4 + i * 0.8} />
            </div>
          ))}
          <div className="balancete__linha balancete__linha--total">
            <span className="serif">{RESULTADO.conta}</span><span className="serif balancete__valor">{RESULTADO.valor}</span><Check atraso={0.4 + BALANCETE.length * 0.8} />
          </div>
          <div className="carimbo">Conferido por um sócio</div>
        </div>
        <ul className="provas">
          {PROVAS.map(p => <li key={p.numero}><span className="serif">{p.numero}</span><span>{p.texto}</span></li>)}
        </ul>
      </div>
    </section>
  )
}
