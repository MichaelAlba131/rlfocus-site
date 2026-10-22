// Teatro do contato: a conversa que o formulário abre no WhatsApp, acontecendo sozinha (exemplo).
export default function Conversa() {
  return (
    <div className="conversa" role="img" aria-label="Exemplo: um visitante pergunta sobre a CBS pelo WhatsApp e o sócio Luis responde">
      <div className="conversa__topo">
        <img src="/img/cappi.jpg" alt="" width={40} height={40} />
        <div><strong>RLFOCUS · Luis Cappi</strong><span>WhatsApp comercial</span></div>
      </div>
      <div className="conversa__msg conversa__msg--eu msg1">Olá, vim pelo site. Somos uma indústria em São José dos Campos e queremos entender o impacto da CBS em 2027.</div>
      <div className="conversa__digitando digitando"><span className="dot" /><span className="dot" /><span className="dot" /></div>
      <div className="conversa__msg msg2">Olá! Aqui é o Luis, sócio da RLFOCUS. Vamos marcar 30 minutos para olhar os seus números?</div>
    </div>
  )
}
