import { useState } from 'react'
import { DIAS, ESCALA } from '../conteudo'

// Teatro da escala 5x2: o visitante escolhe o momento e vê a semana de trabalho e as horas mudarem.
export default function Escala({ onPedir }: { onPedir: () => void }) {
  const [id, setId] = useState('42')
  const sel = ESCALA.find(e => e.id === id) ?? ESCALA[1]
  return (
    <section id="escala" className="escala">
      <div className="escala__intro">
        <p className="rotulo">Fim da escala 6x1</p>
        <h2 className="serif">A semana de trabalho mudou. A sua folha já sabe disso?</h2>
        <p>A Emenda Constitucional 141 reduz a jornada sem reduzir o salário. Quem tem equipe em turno precisa refazer escalas, banco de horas e a conta do custo por hora antes de dezembro.</p>
        <div className="escala__chips" role="group" aria-label="Momento da mudança">
          {ESCALA.map(e => (
            <button key={e.id} type="button" className={`btn-ano btn-ano--claro${e.id === id ? ' btn-ano--on' : ''}`} aria-pressed={e.id === id} onClick={() => setId(e.id)}>{e.chip}</button>
          ))}
        </div>
        <a href="#contato" className="btn btn--dark" onClick={onPedir}>Pedir uma simulação da folha</a>
      </div>
      <div className="escala__painel">
        <div className="escala__horas"><span className="serif">{sel.horas}h</span><span>por semana · {sel.rotulo}</span></div>
        <ol className="escala__semana" aria-label={`Semana: ${sel.dias.filter(Boolean).length} dias de trabalho e ${sel.dias.filter(d => !d).length} de descanso`}>
          {DIAS.map((d, i) => (
            <li key={d} className={sel.dias[i] ? 'dia dia--trabalho' : 'dia dia--folga'}>
              <span>{d}</span><small>{sel.dias[i] ? 'trabalho' : 'descanso'}</small>
            </li>
          ))}
        </ol>
        <p className="escala__texto" aria-live="polite">{sel.texto}</p>
        <p className="escala__nota">Emenda Constitucional 141, promulgada em 16/10/2026. O texto prevê exceções; a regra exata para a sua empresa entra na simulação.</p>
      </div>
    </section>
  )
}
