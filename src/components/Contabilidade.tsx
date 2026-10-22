import { useEffect, useState } from 'react'
import { ABERTURA, CONTABILIDADE } from '../conteudo'

// Contabilidade do dia a dia: teatro da abertura do CNPJ (etapas se completam em sequência),
// os serviços e "para quem é", cada perfil com a sua dor e a sua chamada.
const PERFIS = [
  { titulo: 'Vai abrir a empresa', dor: 'O regime tributário escolhido no primeiro dia vale para o ano inteiro. Errar ali custa caro e não tem volta até janeiro.', chamada: 'Quero abrir minha empresa', assunto: 'Quero abrir uma empresa e gostaria de ajuda com a abertura do CNPJ.' },
  { titulo: 'Cresceu e a contabilidade ficou pequena', dor: 'Se o único relatório que você olha é o extrato do banco, a contabilidade está entregando guia, não informação.', chamada: 'Quero trocar de contador', assunto: 'Quero trocar de contador e entender como funciona a migração.' },
  { titulo: 'Opera em setor regulado', dor: 'Banco, cooperativa, seguradora ou empresa que presta contas a regulador não pode ter número que alguém não consiga explicar.', chamada: 'Falar com um sócio', assunto: 'Atuamos em setor regulado e gostaria de conversar sobre contabilidade e controles.' },
]

// Um passo por segundo: as etapas se completam em ordem, o selo aparece e o ciclo recomeça.
// Quem pede menos movimento vê tudo concluído, parado.
const PASSOS = ABERTURA.length + 3
function usePassoDaAbertura() {
  const parado = typeof window !== 'undefined' && window.matchMedia?.('(prefers-reduced-motion: reduce)').matches
  const [passo, setPasso] = useState(parado ? PASSOS - 1 : 0)
  useEffect(() => {
    if (parado) return
    const t = window.setInterval(() => setPasso(p => (p + 1) % PASSOS), 1000)
    return () => window.clearInterval(t)
  }, [parado])
  return passo
}

export default function Contabilidade({ onPedir }: { onPedir: (assunto: string) => void }) {
  const passo = usePassoDaAbertura()
  return (
    <section id="contabilidade" className="contab">
      <div className="contab__topo">
        <div className="secao-topo">
          <p className="rotulo">Contabilidade</p>
          <h2 className="serif">Da abertura do CNPJ ao balanço do ano.</h2>
          <p>Contabilidade que vai além da guia de imposto: impostos em dia, relatórios que mostram margem e caixa, e um sócio que atende o telefone. Em todo o Brasil, com atendimento remoto.</p>
        </div>
        <div className="abertura" role="img" aria-label="Etapas da abertura de uma empresa, da consulta de viabilidade até a primeira nota fiscal">
          <p className="abertura__titulo">Abrindo a sua empresa</p>
          <ol>
            {ABERTURA.map((etapa, i) => (
              <li key={etapa} className={i < passo ? 'feita' : undefined}>
                <span className="abertura__marca" aria-hidden="true">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="square"><path d="M4 12.5l5 5L20 6.5" /></svg>
                </span>
                {etapa}
              </li>
            ))}
          </ol>
          <p className={`abertura__selo${passo > ABERTURA.length ? ' visivel' : ''}`}>Empresa aberta</p>
        </div>
      </div>

      <ul className="contab__servicos">
        {CONTABILIDADE.map(s => <li key={s.titulo}><h3>{s.titulo}</h3><p>{s.texto}</p></li>)}
      </ul>

      <div className="perfis">
        <p className="rotulo">Para quem é</p>
        <div className="perfis__grade">
          {PERFIS.map(p => (
            <article key={p.titulo} className="perfil">
              <h3 className="serif">{p.titulo}</h3>
              <p>{p.dor}</p>
              <a href="#contato" className="link-sublinhado" onClick={() => onPedir(p.assunto)}>{p.chamada}</a>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
