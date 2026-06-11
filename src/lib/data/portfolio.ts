export type PortfolioCategory =
  | 'industrial'
  | 'quimica-cervejaria'
  | 'contencoes'
  | 'comercio-servicos'
  | 'bim'
  | 'arquitetura'

export interface PortfolioItem {
  id: string
  title: string
  subtitle: string
  category: PortfolioCategory
  image: string
  imageAlt: string
  description: string
  year?: string
  location?: string
}

export const portfolioItems: PortfolioItem[] = [
  {
    id: 'colunas-premoldadas',
    title: 'Fábrica com Colunas Pré-moldadas',
    subtitle: 'Estrutura industrial de grande porte',
    category: 'industrial',
    image: '/assets/portfolio/industrial/colunas-premoldadas.png',
    imageAlt: 'Colunas pré-moldadas de concreto',
    description:
      'Projeto e execução de estrutura industrial com colunas pré-moldadas de concreto armado, vãos de até 30m e cobertura metálica.',
    year: '2022',
    location: 'São Paulo, SP',
  },
  {
    id: 'canteiro-aereo',
    title: 'Complexo Logístico — Vista Aérea',
    subtitle: 'Implantação e estrutura completa',
    category: 'industrial',
    image: '/assets/portfolio/industrial/canteiro-aereo.jpg',
    imageAlt: 'Vista aérea de canteiro industrial',
    description:
      'Implantação de complexo logístico com galpões modulares, portaria, refeitório e infraestrutura completa.',
    year: '2021',
    location: 'Guarulhos, SP',
  },
  {
    id: 'estrutura-premoldada-1',
    title: 'Estrutura Pré-moldada — Preparação de Piso',
    subtitle: 'Industrial com piso de alta resistência',
    category: 'industrial',
    image: '/assets/portfolio/industrial/estrutura-premoldada-1.jpg',
    imageAlt: 'Preparação de piso industrial',
    description:
      'Projeto estrutural com piso industrial de alta resistência, preparado para cargas dinâmicas de empilhadeiras e equipamentos pesados.',
    year: '2020',
    location: 'Campinas, SP',
  },
  {
    id: 'estrutura-premoldada-2',
    title: 'Galpão Industrial Pré-moldado',
    subtitle: 'Estrutura pré-moldada de concreto',
    category: 'industrial',
    image: '/assets/portfolio/industrial/estrutura-premoldada-1.jpg',
    imageAlt: 'Estrutura pré-moldada de concreto',
    description:
      'Estrutura pré-moldada de concreto para galpão industrial, com montagem rápida e alta precisão dimensional.',
    year: '2019',
    location: 'ABC Paulista, SP',
  },
  {
    id: 'escavacao-contencao-industrial',
    title: 'Escavação e Contenção Industrial',
    subtitle: 'Contenção de escavação 22,80×17,70m h=8,0m',
    category: 'industrial',
    image: '/assets/portfolio/contencoes/escavacao-contencao.jpg',
    imageAlt: 'Contenção de escavação industrial',
    description:
      'Projeto e execução de contenção de escavação de 22,80×17,70m com altura de 8,0m, utilizando cortina de estacas e ancoragens.',
    year: '2021',
    location: 'São Paulo, SP',
  },
  {
    id: 'torre-concreto-1',
    title: 'Torre de Concreto Armado',
    subtitle: 'Estrutura vertical de alto padrão',
    category: 'industrial',
    image: '/assets/portfolio/industrial/torre-concreto-1.png',
    imageAlt: 'Torre de concreto armado',
    description:
      'Projeto estrutural de torre de concreto armado para instalações industriais, com análise modal e verificação sísmica.',
    year: '2020',
    location: 'São Paulo, SP',
  },
  {
    id: 'torre-concreto-2',
    title: 'Torre Industrial — Vista de Detalhe',
    subtitle: 'Detalhamento estrutural completo',
    category: 'industrial',
    image: '/assets/portfolio/industrial/torre-concreto-1.png',
    imageAlt: 'Detalhe de torre de concreto',
    description:
      'Detalhamento executivo completo de torre industrial com armação especial e concretagem em etapas.',
    year: '2020',
    location: 'São Paulo, SP',
  },
  {
    id: 'complexo-industrial',
    title: 'Complexo Industrial Integrado',
    subtitle: 'Projeto completo de grande porte',
    category: 'industrial',
    image: '/assets/portfolio/industrial/complexo-industrial.jpg',
    imageAlt: 'Complexo industrial integrado',
    description:
      'Desenvolvimento completo de complexo industrial com múltiplos galpões, utilidades e infraestrutura de suporte.',
    year: '2022',
    location: 'Interior de SP',
  },
  {
    id: 'galpao-metalico',
    title: 'Galpão em Estrutura Metálica',
    subtitle: 'Estrutura metálica de grande vão',
    category: 'industrial',
    image: '/assets/portfolio/industrial/complexo-industrial.jpg',
    imageAlt: 'Galpão em estrutura metálica',
    description:
      'Projeto e detalhamento de galpão em estrutura metálica com vão livre de 40m e cobertura em telha sanduíche.',
    year: '2019',
    location: 'Sorocaba, SP',
  },
  {
    id: 'planta-industrial-aerea',
    title: 'Planta Industrial — Implantação Geral',
    subtitle: 'Vista aérea do empreendimento',
    category: 'industrial',
    image: '/assets/portfolio/industrial/canteiro-aereo.jpg',
    imageAlt: 'Planta industrial vista aérea',
    description:
      'Implantação geral de planta industrial com layout otimizado, circulação de veículos pesados e áreas de expansão.',
    year: '2023',
    location: 'São Paulo, SP',
  },
  {
    id: 'passarela-ferroviaria',
    title: 'Passarela Ferroviária',
    subtitle: 'Estrutura sobre linha férrea',
    category: 'industrial',
    image: '/assets/portfolio/industrial/complexo-industrial.jpg',
    imageAlt: 'Passarela ferroviária',
    description:
      'Projeto e execução de passarela metálica sobre linha férrea, com lançamento sem interrupção do tráfego ferroviário.',
    year: '2018',
    location: 'São Paulo, SP',
  },
  {
    id: 'tanques-industriais',
    title: 'Tanques Industriais — Planta Química',
    subtitle: 'Fundações e suportes para tanques',
    category: 'quimica-cervejaria',
    image: '/assets/portfolio/quimica-cervejaria/planta-quimica.png',
    imageAlt: 'Tanques industriais em planta química',
    description:
      'Projeto de fundações e estruturas de suporte para tanques industriais de grande volume em planta química.',
    year: '2022',
    location: 'São Paulo, SP',
  },
  {
    id: 'planta-quimica',
    title: 'Planta de Processamento Químico',
    subtitle: 'Estruturas para indústria química',
    category: 'quimica-cervejaria',
    image: '/assets/portfolio/quimica-cervejaria/planta-quimica.png',
    imageAlt: 'Planta de processamento químico',
    description:
      'Desenvolvimento de estruturas para planta de processamento químico, com considerações de cargas especiais e resistência a agentes agressivos.',
    year: '2021',
    location: 'Cubatão, SP',
  },
  {
    id: 'contencao-escavacao',
    title: 'Contenção de Escavação Profunda',
    subtitle: 'Contenção 22,80×17,70m — h=8,0m',
    category: 'contencoes',
    image: '/assets/portfolio/contencoes/escavacao-contencao.jpg',
    imageAlt: 'Contenção de escavação profunda',
    description:
      'Projeto e execução de contenção de escavação com cortina de estacas tipo raiz, tirantes protendidos e monitoramento contínuo.',
    year: '2021',
    location: 'São Paulo, SP',
  },
  {
    id: 'arena-villa-lobos-1',
    title: 'Arena Villa Lobos',
    subtitle: 'Projeto estrutural de arena multiuso',
    category: 'comercio-servicos',
    image: '/assets/portfolio/comercio-servicos/arena-villa-lobos-1.png',
    imageAlt: 'Arena Villa Lobos vista externa',
    description:
      'Projeto estrutural de arena multiuso com cobertura tensionada, arquibancadas e estruturas de palco.',
    year: '2023',
    location: 'São Paulo, SP',
  },
  {
    id: 'arena-villa-lobos-2',
    title: 'Arena Villa Lobos — Interior',
    subtitle: 'Detalhes internos e estruturais',
    category: 'comercio-servicos',
    image: '/assets/portfolio/comercio-servicos/arena-villa-lobos-2.png',
    imageAlt: 'Arena Villa Lobos interior',
    description:
      'Detalhamento das estruturas internas da Arena Villa Lobos, incluindo fundações, pilares e vigas de cobertura.',
    year: '2023',
    location: 'São Paulo, SP',
  },
  {
    id: 'arena-concha-acustica',
    title: 'Arena Concha Acústica',
    subtitle: 'Estrutura para eventos ao ar livre',
    category: 'comercio-servicos',
    image: '/assets/portfolio/comercio-servicos/arena-concha-acustica.png',
    imageAlt: 'Arena Concha Acústica',
    description:
      'Projeto estrutural de arena para eventos com concha acústica metálica e plataforma de palco em concreto.',
    year: '2022',
    location: 'São Paulo, SP',
  },
  {
    id: 'bim-fundacoes',
    title: 'Modelagem BIM — Fundações Isométrico',
    subtitle: 'Modelo 3D completo de fundações',
    category: 'bim',
    image: '/assets/bim-renders/bim-implantacao-geral.jpg',
    imageAlt: 'Modelo BIM de fundações isométrico',
    description:
      'Modelagem BIM completa de sistema de fundações com visualização isométrica, detecção de interferências e extração automática de quantitativos.',
    year: '2024',
    location: 'São Paulo, SP',
  },
  {
    id: 'bim-implantacao',
    title: 'BIM — Implantação Geral',
    subtitle: 'Modelo integrado de implantação',
    category: 'bim',
    image: '/assets/bim-renders/bim-implantacao-geral.jpg',
    imageAlt: 'Modelo BIM de implantação geral',
    description:
      'Modelo BIM de implantação geral integrando estrutura, instalações e arquitetura para coordenação multidisciplinar.',
    year: '2024',
    location: 'São Paulo, SP',
  },
]

export const categories: { value: PortfolioCategory | 'todos'; label: string }[] = [
  { value: 'todos', label: 'Todos' },
  { value: 'industrial', label: 'Industrial' },
  { value: 'quimica-cervejaria', label: 'Química e Cervejaria' },
  { value: 'contencoes', label: 'Contenções' },
  { value: 'comercio-servicos', label: 'Comércio e Serviços' },
  { value: 'bim', label: 'BIM' },
]
