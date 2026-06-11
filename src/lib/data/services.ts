export interface Service {
  id: string
  title: string
  description: string
  icon: string
  items: string[]
}

export const services: Service[] = [
  {
    id: 'consultoria',
    title: 'Consultoria em Engenharia',
    description:
      'Assessoria técnica especializada para tomada de decisão em todas as fases do empreendimento, desde a concepção até a operação.',
    icon: 'consulting',
    items: [
      'Due diligence técnica de empreendimentos',
      'Avaliação e perícia de estruturas existentes',
      'Análise de viabilidade estrutural',
      'Laudo técnico e parecer de engenharia',
      'Acompanhamento e supervisão de obras',
      'Gestão de projetos multidisciplinares',
    ],
  },
  {
    id: 'projetos',
    title: 'Projetos de Engenharia',
    description:
      'Desenvolvimento de projetos estruturais completos para edificações industriais, comerciais e de infraestrutura, utilizando tecnologia BIM.',
    icon: 'projects',
    items: [
      'Projetos estruturais em concreto armado',
      'Projetos em estruturas metálicas',
      'Pré-moldados e pré-fabricados',
      'Estruturas mistas aço-concreto',
      'Fundações especiais e contenções',
      'Projetos com metodologia BIM',
    ],
  },
  {
    id: 'calculo',
    title: 'Cálculo Estrutural',
    description:
      'Cálculo e dimensionamento estrutural com análise avançada, verificação de normas técnicas e otimização de materiais.',
    icon: 'calculation',
    items: [
      'Dimensionamento por normas ABNT NBR',
      'Análise dinâmica e modal de estruturas',
      'Verificação de fadiga em estruturas metálicas',
      'Análise não-linear e pós-crítica',
      'Verificação de estado limite último (ELU)',
      'Verificação de estado limite de serviço (ELS)',
    ],
  },
]

export interface FelPhase {
  id: string
  name: string
  title: string
  description: string
  deliverables: string[]
}

export const felPhases: FelPhase[] = [
  {
    id: 'fel2',
    name: 'FEL 2',
    title: 'Desenvolvimento do Conceito',
    description:
      'Definição das alternativas de projeto e seleção da solução mais adequada. Avaliação preliminar de custo e cronograma.',
    deliverables: [
      'Estudo de alternativas estruturais',
      'Estimativa de custo classe 3',
      'Cronograma preliminar',
      'Análise de risco inicial',
    ],
  },
  {
    id: 'fel3',
    name: 'FEL 3',
    title: 'Definição do Projeto',
    description:
      'Desenvolvimento do projeto básico com definição completa do escopo, especificações técnicas e estimativa de custo refinada.',
    deliverables: [
      'Projeto básico estrutural',
      'Especificações técnicas',
      'Estimativa de custo classe 2',
      'Plano de execução do projeto',
    ],
  },
  {
    id: 'fel4',
    name: 'FEL 4',
    title: 'Projeto Executivo',
    description:
      'Projeto executivo completo com todos os detalhamentos, memoriais de cálculo e documentação para licitação e execução.',
    deliverables: [
      'Projeto executivo completo',
      'Memorial de cálculo',
      'Especificações para contratação',
      'Estimativa de custo classe 1',
    ],
  },
]
