export interface TimelineEvent {
  id: string
  year: string
  title: string
  description: string
  image?: string
  highlight?: boolean
}

export const timeline: TimelineEvent[] = [
  {
    id: '1988',
    year: '1988',
    title: 'Fundação da Empresa',
    description:
      'Carlos Henrique funda a Novo Tempo Soluções em Engenharia em São Paulo, iniciando com projetos residenciais e pequenas obras industriais no ABC Paulista.',
    highlight: true,
  },
  {
    id: '1993',
    year: '1993',
    title: 'Primeiro Grande Projeto',
    description:
      'Participação no projeto estrutural do World Trade Center São Paulo, um dos maiores complexos comerciais da cidade. Marco que consolidou a empresa no mercado de alto padrão.',
    image: '/assets/historia/wtc-sp-anos90-1.jpg',
    highlight: true,
  },
  {
    id: '1998',
    year: '1998',
    title: 'Expansão para o Setor Industrial',
    description:
      'Expansão das atividades para o setor industrial, com o desenvolvimento de projetos para plantas químicas, cervejarias e complexos logísticos no interior de São Paulo.',
  },
  {
    id: '2005',
    year: '2005',
    title: 'Implementação de Tecnologia BIM',
    description:
      'Pioneiros na adoção de Building Information Modeling (BIM) no segmento de estruturas no Brasil. A tecnologia transformou a forma de projetar e coordenar projetos complexos.',
    highlight: true,
  },
  {
    id: '2012',
    year: '2012',
    title: 'Certificação de Qualidade',
    description:
      'Obtenção das primeiras certificações de qualidade, consolidando processos internos e estabelecendo padrões de excelência que guiam a empresa até hoje.',
  },
  {
    id: '2019',
    year: '2019',
    title: 'Portfólio de 500 Projetos',
    description:
      'Marco de 500 projetos concluídos com sucesso. A equipe cresceu para mais de 20 profissionais especializados, atuando em todo o território nacional.',
    highlight: true,
  },
  {
    id: '2025',
    year: '2025',
    title: 'Presente e Futuro',
    description:
      'Mais de 35 anos de história, com reconhecimento nacional por excelência técnica. A NT segue na vanguarda da engenharia estrutural, integrando BIM, análise avançada e sustentabilidade em cada projeto.',
    highlight: true,
  },
]
