// Todo o texto do site num lugar só: para trocar uma frase, um telefone ou um selo, é aqui.
// Regras do cliente: sem endereço cadastral em material comercial; sem travessão; claims só verdadeiros.

export const WHATSAPP_COMERCIAL = '5512991876712'
export const EMAIL = 'contato@rlfocus.com.br'
export const INSTAGRAM = { usuario: '@rlfocus_', url: 'https://www.instagram.com/rlfocus_/' }

export const MENU = [
  { href: '#servicos', rotulo: 'Serviços' },
  { href: '#sobre', rotulo: 'A RLFOCUS' },
  { href: '#socios', rotulo: 'Sócios' },
  { href: '#contato', rotulo: 'Contato' },
]

export const PROVAS = [
  { numero: '+20', texto: 'anos de auditoria, controles internos e contabilidade em cada um dos sócios' },
  { numero: 'BC', texto: 'responsável técnico cadastrado no Banco Central para conduzir auditoria cooperativa' },
  { numero: '3', texto: 'sócios executivos com passagem por BACEN, SUSEP, bancos, cooperativas e multinacionais' },
]

export type Servico = { titulo: string; texto: string; etiqueta?: string }

export const PRECISAO: Servico[] = [
  { titulo: 'Tributos e Planejamento Fiscal', etiqueta: 'Reforma 2027', texto: 'Otimização da carga tributária, regularização de obrigações e aproveitamento de incentivos legais. Inclui o diagnóstico e a transição para CBS e IBS.' },
  { titulo: 'Contabilidade e Gestão Financeira', texto: 'Contabilidade estratégica e precisa, com relatórios que sustentam a tomada de decisão.' },
  { titulo: 'Folha de Pagamento e Departamento Pessoal', texto: 'Processamento de folha, obrigações acessórias, consultoria em legislação e apoio a cálculos e perícias trabalhistas.' },
]

export const SEGURANCA: Servico[] = [
  { titulo: 'Auditoria Contábil e Auditoria de TI', texto: 'Auditorias detalhadas que asseguram a integridade dos processos e fortalecem a governança corporativa.' },
  { titulo: 'Compliance e Gestão de Riscos', texto: 'Conformidade regulatória, proteção de dados e prevenção a fraudes, integradas ao negócio.' },
  { titulo: 'Consultoria Estratégica e Empresarial', texto: 'Planejamento para fortalecer a governança, otimizar a performance e expandir mercados com segurança.' },
]

export const PRINCIPIOS = [
  { titulo: 'Comprometimento', texto: 'O foco é o sucesso e a tranquilidade de quem confia a empresa a nós.' },
  { titulo: 'Excelência', texto: 'Serviços que superam a expectativa, com segurança e transparência na gestão.' },
  { titulo: 'Inovação', texto: 'Tecnologia e processos modernos, adaptados à realidade de cada cliente.' },
  { titulo: 'Integridade', texto: 'Confidencialidade e ética em cada interação, para relações de confiança duradouras.' },
]

export type Socio = { nome: string; foto: string; largura: number; altura: number; bio: string; selos: string[]; fone: string; whatsapp: string; curto: string }

export const SOCIOS: Socio[] = [
  {
    nome: 'Rafael Cavalheri Alexandre', curto: 'Rafael Cavalheri', foto: '/img/rafael.jpg', largura: 360, altura: 273,
    bio: 'Especialista em governança, risco e compliance, com mais de 19 anos em auditoria contábil e de TI em bancos, cooperativas e seguradoras. Cadastrado no Banco Central como responsável técnico por auditoria cooperativa.',
    selos: ['CNAI QTG', 'BCB', 'COBIT', 'ISO/IEC 27001 Auditor Líder'], fone: '(61) 99171-0638', whatsapp: '5561991710638',
  },
  {
    nome: 'Luis Fernando Cappi Monteiro', curto: 'Luis Fernando Cappi', foto: '/img/cappi.jpg', largura: 360, altura: 342,
    bio: 'Mais de 20 anos em posições de liderança em auditoria, controles internos, finanças e contabilidade. Conduziu auditorias e reestruturou processos financeiros em grandes organizações, em interlocução direta com BACEN e SUSEP.',
    selos: ['Controles internos', 'BACEN', 'SUSEP'], fone: '(12) 99187-6712', whatsapp: '5512991876712',
  },
  {
    nome: 'Luiz Fernando de Paula', curto: 'Luiz Fernando de Paula', foto: '/img/depaula.jpg', largura: 360, altura: 353,
    bio: 'Contador, gestor tributário e controller, com mais de 20 anos nas áreas administrativa, financeira e estratégica de multinacionais. Especialista em controle orçamentário, otimização de custos e demonstrações contábeis.',
    selos: ['Controller', 'Gestão tributária', 'Corretor SUSEP'], fone: '(11) 98140-0879', whatsapp: '5511981400879',
  },
]
