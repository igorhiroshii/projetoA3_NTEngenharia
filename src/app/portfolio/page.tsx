import type { Metadata } from 'next'
import PageHero from '@/components/ui/PageHero'
import PortfolioGrid from '@/components/sections/PortfolioGrid'

export const metadata: Metadata = {
  title: 'Portfólio',
  description:
    'Conheça os projetos da NT Engenharia: estruturas industriais, contenções, arenas, BIM e muito mais.',
}

export default function PortfolioPage() {
  return (
    <>
      <PageHero
        title="Portfólio"
        subtitle="Mais de 500 projetos em 7 setores. Conheça alguns dos nossos trabalhos mais relevantes."
        image="/assets/hero/hero-aereo.svg"
        breadcrumb="Portfólio"
      />

      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-8">
            <h2 className="font-display text-2xl sm:text-3xl font-bold text-gray-900 mb-2">
              Projetos em Destaque
            </h2>
            <p className="text-gray-600">
              Filtre por setor para encontrar projetos relevantes ao seu segmento.
            </p>
          </div>
          <PortfolioGrid />
        </div>
      </section>
    </>
  )
}
