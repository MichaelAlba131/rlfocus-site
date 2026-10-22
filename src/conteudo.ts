// Todo o texto do site num lugar só: para trocar uma frase, um telefone ou um selo, é aqui.
// Regras do cliente: sem endereço cadastral em material comercial; sem travessão; claims só verdadeiros.

export const WHATSAPP_COMERCIAL = '5512991876712'
export const EMAIL = 'contato@rlfocus.com.br'
export const INSTAGRAM = { usuario: '@rlfocus_', url: 'https://www.instagram.com/rlfocus_/' }

export const MENU = [
  { href: '#servicos', rotulo: 'Serviços' },
  { href: '#contabilidade', rotulo: 'Contabilidade' },
  { href: '#como', rotulo: 'Como trabalhamos' },
  { href: '#socios', rotulo: 'Sócios' },
  { href: '#contato', rotulo: 'Contato' },
]

export const PROVAS = [
  { numero: '+20', texto: 'anos de carreira de cada sócio' },
  { numero: 'BC', texto: 'responsável técnico em auditoria cooperativa' },
  { numero: '3', texto: 'sócios, sem pirâmide de juniores' },
]

// Teatro do topo: o balancete "em conferência". Valores de DEMONSTRAÇÃO (marcados assim na tela).
export const BALANCETE = [
  { conta: 'Receita bruta', valor: '4.812.300,00' },
  { conta: 'Tributos sobre vendas', valor: '(886.150,00)' },
  { conta: 'Custo dos produtos vendidos', valor: '(2.104.900,00)' },
  { conta: 'Despesas operacionais', valor: '(1.032.480,00)' },
]
export const RESULTADO = { conta: 'Resultado do período', valor: '788.770,00' }

export const CREDENCIAIS = ['CNAI QTG', 'ISO/IEC 27001 Auditor Líder', 'COBIT', 'BACEN', 'SUSEP', 'IFRS e CPC', 'SPED · ECD · ECF', 'LGPD', 'Lei do Bem']

// Reforma ano a ano. Proporções ILUSTRATIVAS da composição dos tributos sobre o consumo (aviso na tela).
export type Tributo = 'pis' | 'icms' | 'iss' | 'cbs' | 'ibs'
export const TRIBUTO: Record<Tributo, { nome: string; cor: string }> = {
  pis: { nome: 'PIS e Cofins', cor: '#6b6b6b' },
  icms: { nome: 'ICMS', cor: '#9a9a9a' },
  iss: { nome: 'ISS', cor: '#cfc8bc' },
  cbs: { nome: 'CBS', cor: '#f2a96b' },
  ibs: { nome: 'IBS', cor: '#b8763a' },
}
export const REFORMA: { ano: string; rotulo: string; partes: [Tributo, number][]; texto: string }[] = [
  { ano: '2026', rotulo: 'Ano de teste', partes: [['pis', 34], ['icms', 44], ['iss', 18], ['cbs', 3], ['ibs', 1]], texto: 'Tudo como hoje, mais a CBS e o IBS em alíquota de teste nas notas. É o ano de ajustar sistemas e cadastros sem custo extra.' },
  { ano: '2027', rotulo: 'Entra a CBS', partes: [['cbs', 36], ['icms', 46], ['iss', 18]], texto: 'PIS e Cofins deixam de existir e a CBS entra no lugar, junto com o Imposto Seletivo. Muda o crédito nas compras e a conta do preço de venda.' },
  { ano: '2029', rotulo: 'Começa a transição do IBS', partes: [['cbs', 36], ['icms', 41], ['iss', 16], ['ibs', 7]], texto: 'O IBS começa a ocupar o espaço de ICMS e ISS, ano a ano, até 2032. Por alguns anos convivem dois sistemas: atenção redobrada a crédito e caixa.' },
  { ano: '2033', rotulo: 'Sistema novo completo', partes: [['cbs', 36], ['ibs', 64]], texto: 'ICMS e ISS deixam de existir. Ficam CBS e IBS, cobrados no destino e com crédito amplo. Quem se preparou chega aqui com preço e contratos ajustados.' },
]

export const ETAPAS = [
  { titulo: 'Diagnóstico', texto: 'Conversa com os sócios, leitura dos números e dos controles atuais.' },
  { titulo: 'Plano', texto: 'Escopo, prazos e responsável definidos por escrito antes de começar.' },
  { titulo: 'Execução', texto: 'Trabalho de campo, testes e ajustes, com pontos de controle combinados.' },
  { titulo: 'Parecer e acompanhamento', texto: 'Relatório assinado por um sócio e acompanhamento das recomendações.' },
]

export type Servico = { titulo: string; texto: string; etiqueta?: string }

export const PRECISAO: Servico[] = [
  { titulo: 'Tributos e Planejamento Fiscal', etiqueta: 'Reforma 2027', texto: 'Otimização da carga tributária, regularização de obrigações e aproveitamento de incentivos legais. Inclui o diagnóstico e a transição para CBS e IBS.' },
  { titulo: 'Contabilidade e Gestão Financeira', texto: 'Contabilidade estratégica e precisa, com relatórios que sustentam a tomada de decisão.' },
  { titulo: 'Folha de Pagamento e Departamento Pessoal', etiqueta: 'Escala 5x2', texto: 'Processamento de folha, obrigações acessórias, consultoria em legislação e apoio a cálculos e perícias trabalhistas.' },
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

export type Socio = { nome: string; foto: string; largura: number; altura: number; bio: string; selos: string[]; fone: string; whatsapp: string; curto: string; traco: string }

export const SOCIOS: Socio[] = [
  {
    nome: 'Rafael Cavalheri Alexandre', curto: 'Rafael Cavalheri', foto: '/img/rafael.jpg', largura: 360, altura: 273,
    bio: 'Especialista em governança, risco e compliance, com mais de 19 anos em auditoria contábil e de TI em bancos, cooperativas e seguradoras. Cadastrado no Banco Central como responsável técnico por auditoria cooperativa.',
    selos: ['CNAI QTG', 'BCB', 'COBIT', 'ISO/IEC 27001 Auditor Líder'], fone: '(61) 99171-0638', whatsapp: '5561991710638',
    traco: 'M4 24 C30 4, 46 32, 70 16 S110 6, 128 20 S170 30, 216 10',
  },
  {
    nome: 'Luis Fernando Cappi Monteiro', curto: 'Luis Fernando Cappi', foto: '/img/cappi.jpg', largura: 360, altura: 342,
    bio: 'Mais de 20 anos em posições de liderança em auditoria, controles internos, finanças e contabilidade. Conduziu auditorias e reestruturou processos financeiros em grandes organizações, em interlocução direta com BACEN e SUSEP.',
    selos: ['Controles internos', 'BACEN', 'SUSEP'], fone: '(12) 99187-6712', whatsapp: '5512991876712',
    traco: 'M4 18 C24 30, 40 4, 66 18 S104 30, 132 12 S176 6, 216 22',
  },
  {
    nome: 'Luiz Fernando de Paula', curto: 'Luiz Fernando de Paula', foto: '/img/depaula.jpg', largura: 360, altura: 353,
    bio: 'Contador, gestor tributário e controller, com mais de 20 anos nas áreas administrativa, financeira e estratégica de multinacionais. Especialista em controle orçamentário, otimização de custos e demonstrações contábeis.',
    selos: ['Controller', 'Gestão tributária', 'Corretor SUSEP'], fone: '(11) 98140-0879', whatsapp: '5511981400879',
    traco: 'M4 22 C28 8, 52 30, 76 14 S118 4, 142 22 S182 26, 216 8',
  },
]

// Escala 5x2 (fim da 6x1, Emenda Constitucional 141, promulgada em 16/10/2026). Dias: true = trabalho.
export const ESCALA = [
  { id: 'hoje', chip: 'Hoje', horas: 44, rotulo: 'Escala 6x1', dias: [true, true, true, true, true, true, false], texto: 'Até 44 horas por semana, com um dia de descanso. A escala 6x1 ainda é comum em indústria, varejo, saúde e logística.' },
  { id: '42', chip: 'Dez/2026', horas: 42, rotulo: 'Dois dias de descanso', dias: [true, true, true, true, true, false, false], texto: 'Em meados de dezembro a jornada máxima cai para 42 horas e o descanso passa a ser de dois dias por semana, sem redução de salário. Escalas, turnos e banco de horas precisam ser refeitos.' },
  { id: '40', chip: 'Fim de 2027', horas: 40, rotulo: 'Até 8 horas por dia', dias: [true, true, true, true, true, false, false], texto: 'A jornada chega a 40 horas por semana. O custo por hora trabalhada sobe; quem simulou antes escolhe a saída mais barata entre escala nova, banco de horas e contratação.' },
]
export const DIAS = ['Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sáb', 'Dom']

// Contabilidade do dia a dia (pedido do Fernando, 22/10/2026: "faltou conteúdo de contabilidade, abertura de CNPJ").
export const ABERTURA = [
  'Consulta de viabilidade do nome e do endereço',
  'Contrato social e registro na Junta Comercial',
  'CNPJ na Receita Federal',
  'Inscrições estadual e municipal',
  'Alvará e licenças',
  'Pronta para emitir nota fiscal',
]
export const CONTABILIDADE: Servico[] = [
  { titulo: 'Abertura de empresa', texto: 'Tipo de sociedade, regime tributário, contrato social, CNPJ, inscrições e alvará, até a primeira nota fiscal.' },
  { titulo: 'Contabilidade mensal', texto: 'Escrituração, impostos e obrigações em dia, com relatórios de margem e caixa todo mês.' },
  { titulo: 'Troca de contador', texto: 'Conduzimos a migração junto com o contador atual. Você não precisa fazer a ponte.' },
  { titulo: 'Regime tributário', texto: 'Simples Nacional, Lucro Presumido ou Lucro Real: a conta de qual sai mais barato para a sua empresa, revista todo ano.' },
  { titulo: 'Alteração e encerramento', texto: 'Mudança de sócios, endereço, atividade ou capital, e a baixa da empresa quando for a hora.' },
  { titulo: 'Certidões e regularização', texto: 'CND, parcelamentos e regularização de pendências na Receita, no estado e no município.' },
]
