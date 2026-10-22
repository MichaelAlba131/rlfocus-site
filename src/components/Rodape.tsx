import { MENU } from '../conteudo'

export default function Rodape() {
  return (
    <footer className="rodape">
      <div>
        <p className="rodape__nome">RLFOCUS AUDITORIA E SOLUÇÕES CONTÁBEIS LTDA</p>
        <p>CNPJ 38.244.866/0001-10 · Jacareí, SP</p>
      </div>
      <nav aria-label="Rodapé">{MENU.map(m => <a key={m.href} href={m.href}>{m.rotulo}</a>)}</nav>
      <p>© {new Date().getFullYear()} RLFOCUS LTDA. Todos os direitos reservados.</p>
    </footer>
  )
}
