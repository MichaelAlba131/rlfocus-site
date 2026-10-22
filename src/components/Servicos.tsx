import { PRECISAO, SEGURANCA, type Servico } from '../conteudo'
import Balanca from './Balanca'

function Lado({ tom, titulo, sub, itens }: { tom: 'claro' | 'escuro'; titulo: string; sub: string; itens: Servico[] }) {
  return (
    <div className={`lado lado--${tom}`}>
      <div className="lado__titulo"><span className="serif">{titulo}</span><span>{sub}</span></div>
      <ul className="servicos__lista">
        {itens.map(s => (
          <li key={s.titulo}>
            <h3>{s.titulo}{s.etiqueta && <span className="etiqueta">{s.etiqueta}</span>}</h3>
            <p>{s.texto}</p>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default function Servicos() {
  return (
    <section id="servicos" className="servicos">
      <div className="secao-topo secao-topo--centro">
        <p className="rotulo">Serviços</p>
        <h2 className="serif">Dois lados, um equilíbrio.</h2>
        <Balanca />
        <p>A precisão do dia a dia contábil e fiscal, e a segurança de quem audita, controla e responde ao regulador. A RLFOCUS entrega os dois com a mesma equipe.</p>
      </div>
      <div className="lados">
        <Lado tom="claro" titulo="Precisão" sub="Operação e obrigações" itens={PRECISAO} />
        <Lado tom="escuro" titulo="Segurança" sub="Governança e risco" itens={SEGURANCA} />
      </div>
    </section>
  )
}
