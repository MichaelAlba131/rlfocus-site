// A marca do logo (check + 3 barras) redesenhada em SVG, como fundo discreto do hero escuro.
export default function Marca() {
  return (
    <svg className="marca" viewBox="0 0 120 100" fill="none" aria-hidden="true">
      <path d="M6 46 L34 90 L118 6" stroke="#f2a96b" strokeWidth="10" strokeLinecap="square" strokeLinejoin="miter" />
      <rect x="62" y="56" width="16" height="34" fill="#f2a96b" />
      <rect x="86" y="40" width="16" height="50" fill="#f2a96b" />
      <rect x="110" y="24" width="10" height="66" fill="#f2a96b" />
    </svg>
  )
}
