import { useEffect, useState, type FormEvent } from 'react'
import { EMAIL, INSTAGRAM, SOCIOS, WHATSAPP_COMERCIAL } from '../conteudo'
import Conversa from './Conversa'

// O site é estático (HostGator, sem backend de formulário): a mensagem abre no WhatsApp comercial
// já escrita com os dados preenchidos. O e-mail continua como alternativa na coluna ao lado.
type Campos = { nome: string; email: string; telefone: string; empresa: string; mensagem: string }
const VAZIO: Campos = { nome: '', email: '', telefone: '', empresa: '', mensagem: '' }
const OBRIGATORIOS: (keyof Campos)[] = ['nome', 'email', 'telefone']
const emailValido = (e: string) => /^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(e.trim())

export default function Contato({ assunto }: { assunto: string }) {
  const [c, setC] = useState<Campos>(VAZIO)
  const [erros, setErros] = useState<(keyof Campos)[]>([])
  const [aviso, setAviso] = useState<{ erro: boolean; texto: string } | null>(null)

  useEffect(() => { if (assunto) setC(x => (x.mensagem.trim() ? x : { ...x, mensagem: assunto })) }, [assunto])

  const muda = (k: keyof Campos) => (e: { target: { value: string } }) => setC(x => ({ ...x, [k]: e.target.value }))

  function enviar(e: FormEvent) {
    e.preventDefault()
    const faltando = OBRIGATORIOS.filter(k => !c[k].trim() || (k === 'email' && !emailValido(c.email)))
    setErros(faltando)
    if (faltando.length) {
      setAviso({ erro: true, texto: 'Preencha nome, e-mail válido e telefone para enviar.' })
      document.querySelector<HTMLInputElement>(`#form-contato [name="${faltando[0]}"]`)?.focus()
      return
    }
    setAviso({ erro: false, texto: 'Abrindo o WhatsApp com a sua mensagem.' })
    const texto = ['Olá, vim pelo site da RLFOCUS.', '', `Nome: ${c.nome.trim()}`, `E-mail: ${c.email.trim()}`, `Telefone: ${c.telefone.trim()}`]
      .concat(c.empresa.trim() ? [`Empresa: ${c.empresa.trim()}`] : [])
      .concat(c.mensagem.trim() ? ['', c.mensagem.trim()] : [])
      .join('\n')
    window.open(`https://wa.me/${WHATSAPP_COMERCIAL}?text=${encodeURIComponent(texto)}`, '_blank', 'noopener')
  }

  const campo = (k: keyof Campos, tipo: string, rotulo: string, auto: string) => (
    <label>
      <span className="sr">{rotulo}</span>
      <input type={tipo} name={k} placeholder={OBRIGATORIOS.includes(k) ? `${rotulo} *` : rotulo} autoComplete={auto}
        value={c[k]} onChange={muda(k)} className={erros.includes(k) ? 'campo-erro' : undefined} aria-invalid={erros.includes(k) || undefined} />
    </label>
  )

  return (
    <section id="contato" className="contato">
      <form className="contato__form" id="form-contato" noValidate onSubmit={enviar}>
        <div className="secao-topo">
          <p className="rotulo">Contato</p>
          <h2 className="serif">Vamos conversar sobre a sua empresa.</h2>
          <p>Conte em poucas linhas o que precisa. A mensagem chega no WhatsApp de um sócio, que responde diretamente.</p>
        </div>
        <div className="campos">
          {campo('nome', 'text', 'Nome', 'name')}
          {campo('email', 'email', 'E-mail', 'email')}
          {campo('telefone', 'tel', 'Telefone', 'tel')}
          {campo('empresa', 'text', 'Empresa', 'organization')}
        </div>
        <label><span className="sr">Mensagem</span><textarea name="mensagem" rows={4} placeholder="Mensagem" value={c.mensagem} onChange={muda('mensagem')} /></label>
        <div className="contato__enviar">
          <span className={`contato__aviso${aviso?.erro ? ' erro' : ''}`} role="status">{aviso?.texto ?? 'Campos com * são obrigatórios.'}</span>
          <button type="submit" className="btn btn--dark">Enviar pelo WhatsApp</button>
        </div>
      </form>
      <div className="contato__lado">
      <Conversa />
      <div className="contato__dados">
        <div className="dado"><p className="rotulo">E-mail</p><a className="dado__grande" href={`mailto:${EMAIL}`}>{EMAIL}</a></div>
        <div className="dado">
          <p className="rotulo">Telefones e WhatsApp</p>
          {SOCIOS.map(s => <a key={s.nome} className="dado__fone" href={`https://wa.me/${s.whatsapp}`} target="_blank" rel="noopener"><span>{s.fone}</span><span>{s.curto}</span></a>)}
        </div>
        <div className="dado"><p className="rotulo">Atendimento</p><p>Jacareí, SP, e remoto em todo o Brasil</p></div>
        <div className="dado"><p className="rotulo">Instagram</p><a className="dado__instagram" href={INSTAGRAM.url} target="_blank" rel="noopener">{INSTAGRAM.usuario}</a></div>
      </div>
      </div>
    </section>
  )
}
