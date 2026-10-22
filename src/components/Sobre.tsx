import { PRINCIPIOS } from '../conteudo'

export default function Sobre() {
  return (
    <section id="sobre" className="sobre">
      <div className="secao-topo">
        <p className="rotulo">A RLFOCUS</p>
        <h2 className="serif">Números viram inteligência quando alguém responde por eles.</h2>
        <p>Somos uma firma de auditoria e soluções contábeis fundada por três sócios que passaram duas décadas dentro de bancos, cooperativas, seguradoras e multinacionais. Trazemos para o seu negócio o rigor que aprendemos diante do regulador, com soluções contábeis, fiscais e financeiras integradas, para decisões mais assertivas e crescimento sustentável.</p>
      </div>
      <ul className="principios">
        {PRINCIPIOS.map(p => <li key={p.titulo}><h3 className="serif">{p.titulo}</h3><p>{p.texto}</p></li>)}
      </ul>
    </section>
  )
}
