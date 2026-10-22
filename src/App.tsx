import { useState } from 'react'
import Nav from './components/Nav'
import Hero from './components/Hero'
import Credenciais from './components/Credenciais'
import Reforma from './components/Reforma'
import Escala from './components/Escala'
import Servicos from './components/Servicos'
import Contabilidade from './components/Contabilidade'
import ComoTrabalhamos from './components/ComoTrabalhamos'
import Sobre from './components/Sobre'
import Socios from './components/Socios'
import Contato from './components/Contato'
import Rodape from './components/Rodape'

export default function App() {
  // "Pedir um diagnóstico da reforma" já deixa o assunto escrito na mensagem do formulário.
  const [assunto, setAssunto] = useState('')
  return (
    <>
      <Nav />
      <main id="topo">
        <Hero />
        <Credenciais />
        <Reforma onPedir={() => setAssunto('Gostaria de um diagnóstico da reforma tributária.')} />
        <Escala onPedir={() => setAssunto('Gostaria de uma simulação do impacto da escala 5x2 na nossa folha.')} />
        <Servicos />
        <Contabilidade onPedir={setAssunto} />
        <ComoTrabalhamos />
        <Sobre />
        <Socios />
        <Contato assunto={assunto} />
      </main>
      <Rodape />
    </>
  )
}
