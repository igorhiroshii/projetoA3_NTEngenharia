export interface Sector {
  id: string
  name: string
  description: string
  icon: string
}

export const sectors: Sector[] = [
  {
    id: 'industrial',
    name: 'Industrial',
    description:
      'Galpões, fábricas, plantas industriais e complexos logísticos com estruturas de concreto armado, pré-moldados e metálicas.',
    icon: 'factory',
  },
  {
    id: 'quimica-petroquimica',
    name: 'Química e Petroquímica',
    description:
      'Estruturas para indústria química e petroquímica, suportes de equipamentos, plataformas e estruturas offshore.',
    icon: 'flask',
  },
  {
    id: 'cervejaria-bebidas',
    name: 'Cervejaria e Bebidas',
    description:
      'Projetos especializados para indústrias de bebidas, incluindo fundações de tanques, tubovias e estruturas de suporte.',
    icon: 'beverage',
  },
  {
    id: 'contencoes-fundacoes',
    name: 'Contenções e Fundações',
    description:
      'Cortinas de estacas, paredes diafragma, tirantes, jet grouting e fundações profundas em condições geotécnicas adversas.',
    icon: 'foundation',
  },
  {
    id: 'comercio-servicos',
    name: 'Comércio e Serviços',
    description:
      'Shoppings, arenas, centros logísticos e edificações comerciais com soluções estruturais inovadoras e eficientes.',
    icon: 'building',
  },
  {
    id: 'infraestrutura',
    name: 'Infraestrutura',
    description:
      'Pontes, viadutos, passarelas, contenções rodoviárias e obras de arte especiais para o setor público e privado.',
    icon: 'bridge',
  },
  {
    id: 'patrimonio-historico',
    name: 'Patrimônio Histórico',
    description:
      'Restauração e reforço estrutural de edificações históricas, com técnicas especializadas e respeito Á s características originais.',
    icon: 'heritage',
  },
]
