import { CREDENCIAIS } from '../conteudo'

// Faixa laranja rolando com as credenciais e normas. A lista vai duas vezes para o laço não ter emenda.
export default function Credenciais() {
  return (
    <div className="credenciais">
      <p className="sr">Credenciais e normas: {CREDENCIAIS.join(', ')}.</p>
      <div className="ticker" aria-hidden="true">
        {[...CREDENCIAIS, ...CREDENCIAIS].map((c, i) => <span key={i}>{c}</span>)}
      </div>
    </div>
  )
}
