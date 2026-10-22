export default function Reforma({ onPedir }: { onPedir: () => void }) {
  return (
    <section id="reforma" className="reforma">
      <div className="reforma__data">
        <p className="rotulo rotulo--escuro">Reforma tributária</p>
        <p className="serif reforma__ano">Jan 2027</p>
      </div>
      <div className="reforma__texto">
        <h2 className="serif">A CBS substitui PIS e Cofins. Sua empresa já sabe o que muda no caixa, no preço e no sistema?</h2>
        <p>2026 é o ano de teste. Em 2027 entram a CBS e o Imposto Seletivo. De 2029 a 2032 o IBS assume o lugar de ICMS e ISS, extintos em 2033. Quem mapeia agora escolhe o caminho; quem espera, corre atrás.</p>
      </div>
      <a href="#contato" className="btn btn--accent" onClick={onPedir}>Pedir um diagnóstico da reforma</a>
    </section>
  )
}
