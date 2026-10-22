import { SOCIOS } from '../conteudo'

export default function Socios() {
  return (
    <section id="socios" className="socios">
      <div className="socios__topo">
        <div>
          <p className="rotulo rotulo--escuro">Sócios executivos</p>
          <h2 className="serif">Quem assina o trabalho.</h2>
        </div>
        <p>Sem camadas entre você e quem decide. Cada projeto é conduzido diretamente por um dos sócios.</p>
      </div>
      <div className="socios__grade">
        {SOCIOS.map(s => (
          <article key={s.nome} className="socio">
            <div className="socio__foto"><img src={s.foto} alt={s.nome} width={s.largura} height={s.altura} loading="lazy" /></div>
            <h3>{s.nome}</h3>
            <p className="socio__cargo">Sócio executivo</p>
            <p>{s.bio}</p>
            <ul className="selos">{s.selos.map(x => <li key={x}>{x}</li>)}</ul>
          </article>
        ))}
      </div>
    </section>
  )
}
