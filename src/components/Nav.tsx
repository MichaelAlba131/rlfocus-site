import { useState } from 'react'
import { MENU } from '../conteudo'

export default function Nav() {
  const [aberto, setAberto] = useState(false)
  return (
    <header className="nav">
      <a href="#topo" className="nav__logo"><img src="/img/logo.png" alt="RLFOCUS Auditoria e Soluções Contábeis" width={900} height={258} /></a>
      <button className="nav__toggle" type="button" aria-expanded={aberto} aria-controls="menu" aria-label={aberto ? 'Fechar menu' : 'Abrir menu'} onClick={() => setAberto(a => !a)}>
        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" aria-hidden="true">
          {aberto ? <path d="M6 6l12 12M18 6L6 18" /> : <path d="M4 7h16M4 12h16M4 17h16" />}
        </svg>
      </button>
      <nav id="menu" className={`nav__menu${aberto ? ' aberto' : ''}`} aria-label="Principal" onClick={e => { if ((e.target as HTMLElement).closest('a')) setAberto(false) }}>
        {MENU.map(m => <a key={m.href} href={m.href}>{m.rotulo}</a>)}
        <a href="#contato" className="btn btn--light">Falar com um sócio</a>
      </nav>
    </header>
  )
}
