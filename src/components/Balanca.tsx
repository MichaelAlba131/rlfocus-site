// "Dois lados, um equilíbrio": a balança oscila devagar entre o prato claro (precisão) e o escuro (segurança).
export default function Balanca() {
  return (
    <svg className="balanca" width="240" height="120" viewBox="0 0 240 120" fill="none" aria-hidden="true">
      <path d="M120 40 L120 108" stroke="#121212" strokeWidth="2" />
      <path d="M96 110 L144 110" stroke="#121212" strokeWidth="2" />
      <g className="balanca__travessao">
        <path d="M30 40 L210 40" stroke="#121212" strokeWidth="2" />
        <circle cx="120" cy="40" r="5" fill="#f2a96b" />
        <path d="M30 40 L18 70 M30 40 L42 70" stroke="#6b6b6b" strokeWidth="1.2" />
        <path d="M12 70 L48 70 Q30 84 12 70Z" fill="#fbfaf8" stroke="#121212" strokeWidth="1.6" />
        <path d="M210 40 L198 70 M210 40 L222 70" stroke="#6b6b6b" strokeWidth="1.2" />
        <path d="M192 70 L228 70 Q210 84 192 70Z" fill="#0e0e0e" stroke="#0e0e0e" strokeWidth="1.6" />
      </g>
    </svg>
  )
}
