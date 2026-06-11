export interface Award {
  id: string
  year: string
  institution: string
  title: string
  description: string
  pdfPath?: string
  badgeColor: string
}

export const awards: Award[] = [
  {
    id: 'ancec-2025',
    year: '2025',
    institution: 'ANCEC',
    title: 'Certificado de Qualidade ANCEC',
    description:
      'Certificação de excelência em serviços de engenharia pela Associação Nacional de Consultores e Especialistas em Construção.',
    pdfPath: '/certificados/CERTIFICADO_QUALIDADE_ANCEC_2025.pdf',
    badgeColor: 'gold',
  },
  {
    id: 'quality-prime-2025',
    year: '2025',
    institution: 'Quality Brasil',
    title: 'Quality Prime',
    description:
      'Reconhecimento máximo de excelência em qualidade, concedido Á s empresas que atingem os mais altos padrões de desempenho e satisfação.',
    pdfPath: '/certificados/CERTIFICADO_QUALITY_PRIME_2025_-_NOVO_TEMPO.pdf',
    badgeColor: 'platinum',
  },
  {
    id: 'quality-champion-2024',
    year: '2024',
    institution: 'Quality Brasil',
    title: 'Quality Champion',
    description:
      'Prêmio de champion de qualidade, destacando a empresa entre as melhores do setor de engenharia no Brasil.',
    pdfPath: '/certificados/CERTIFICADO_QUALITY_CHAMPION_2024_-_NOVO_TEMPO.pdf',
    badgeColor: 'silver',
  },
  {
    id: 'quality-brasil-2021',
    year: '2021',
    institution: 'Quality Brasil',
    title: 'Quality Brasil',
    description:
      'Certificação de qualidade conferida Á s empresas que demonstram compromisso com a melhoria contínua e excelência no atendimento.',
    pdfPath: '/certificados/CERTIFICADO_QUALITY_Brasil_2021_-_NOVO_TEMPO.pdf',
    badgeColor: 'bronze',
  },
  {
    id: 'destaque-engenharia-2020',
    year: '2020',
    institution: 'CREA-SP',
    title: 'Empresa Destaque em Engenharia',
    description:
      'Reconhecimento do CREA-SP pela contribuição ao desenvolvimento da engenharia estrutural no estado de São Paulo.',
    badgeColor: 'teal',
  },
]
