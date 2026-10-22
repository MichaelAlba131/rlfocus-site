import { PROVAS } from '../conteudo'
import Marca from './Marca'

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
        <Marca />
        <p className="rotulo rotulo--escuro">Por que a RLFOCUS</p>
        <ul className="provas">
          {PROVAS.map(p => <li key={p.numero}><span className="serif">{p.numero}</span><span>{p.texto}</span></li>)}
        </ul>
      </div>
    </section>
  )
}
