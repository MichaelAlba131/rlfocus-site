import { ETAPAS } from '../conteudo'

// Teatro das etapas: um ponto percorre a linha e acende cada etapa em sequência.
export default function ComoTrabalhamos() {
  return (
    <section id="como" className="como">
      <div className="como__topo">
        <div>
          <p className="rotulo">Como trabalhamos</p>
          <h2 className="serif">Do primeiro número ao parecer.</h2>
        </div>
        <p>Um sócio acompanha cada etapa. Você sabe sempre em que ponto o trabalho está e quem responde por ele.</p>
      </div>
      <div className="como__linha" aria-hidden="true"><div className="como__ponto" /></div>
      <ol className="como__etapas">
        {ETAPAS.map((e, i) => (
          <li key={e.titulo}>
            <span className="serif como__num" style={{ animationDelay: `${i * 2.5}s` }}>{i + 1}</span>
            <h3>{e.titulo}</h3>
            <p>{e.texto}</p>
          </li>
        ))}
      </ol>
    </section>
  )
}
