import { useState } from 'react'
import { REFORMA, TRIBUTO } from '../conteudo'

// Teatro da reforma: o visitante escolhe o ano e vê a composição dos tributos sobre o consumo mudar.
export default function Reforma({ onPedir }: { onPedir: () => void }) {
  const [ano, setAno] = useState('2027')
  const sel = REFORMA.find(r => r.ano === ano) ?? REFORMA[1]
  return (
    <section id="reforma" className="reforma">
      <div className="reforma__intro">
        <p className="rotulo rotulo--escuro">Reforma tributária</p>
        <h2 className="serif">Veja o que muda no seu imposto, ano a ano.</h2>
        <p>Escolha um ano. Quem mapeia agora escolhe o caminho; quem espera, corre atrás.</p>
        <div className="reforma__anos" role="group" aria-label="Ano da reforma">
          {REFORMA.map(r => (
            <button key={r.ano} type="button" className={`btn-ano${r.ano === ano ? ' btn-ano--on' : ''}`} aria-pressed={r.ano === ano} onClick={() => setAno(r.ano)}>{r.ano}</button>
          ))}
        </div>
        <a href="#contato" className="btn btn--accent" onClick={onPedir}>Pedir um diagnóstico da reforma</a>
      </div>
      <div className="reforma__painel">
        <div className="reforma__cabeca"><span className="serif reforma__ano">{sel.ano}</span><span>{sel.rotulo}</span></div>
        <div className="reforma__barra" role="img" aria-label={`Tributos sobre o consumo em ${sel.ano}: ${sel.partes.map(p => TRIBUTO[p[0]].nome).join(', ')}`}>
          {sel.partes.map(([t, peso]) => <div key={t} style={{ flexGrow: peso, background: TRIBUTO[t].cor }} />)}
        </div>
        <div className="reforma__legenda">
          {sel.partes.map(([t]) => <span key={t}><i style={{ background: TRIBUTO[t].cor }} />{TRIBUTO[t].nome}</span>)}
        </div>
        <p className="reforma__texto" aria-live="polite">{sel.texto}</p>
        <p className="reforma__nota">Proporções ilustrativas da composição dos tributos sobre o consumo. O impacto real depende do setor e da operação.</p>
      </div>
    </section>
  )
}
