import { useState } from 'react'
import Nav from './components/Nav'
import Hero from './components/Hero'
import Credenciais from './components/Credenciais'
import Reforma from './components/Reforma'
import Servicos from './components/Servicos'
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
        <Servicos />
        <ComoTrabalhamos />
        <Sobre />
        <Socios />
        <Contato assunto={assunto} />
      </main>
      <Rodape />
    </>
  )
}
