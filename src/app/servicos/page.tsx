import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import PageHero from '@/components/ui/PageHero'
import ServiceCard from '@/components/ui/ServiceCard'
import SectorCard from '@/components/ui/SectorCard'
import { services, felPhases } from '@/lib/data/services'
import { sectors } from '@/lib/data/sectors'

export const metadata: Metadata = {
  title: 'Serviços',
  description:
    'Consultoria, projetos e cálculo estrutural. Soluções completas de engenharia para os setores industrial, químico, comercial e de infraestrutura.',
}

export default function ServicosPage() {
  return (
    <>
      <PageHero
        title="Nossos Serviços"
        subtitle="Soluções completas de engenharia estrutural, do conceito ao detalhamento executivo."
        image="/assets/bim-renders/bim-implantacao-geral.svg"
        breadcrumb="Serviços"
      />

      {/* Services grid */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <p className="text-nt-teal text-sm font-semibold tracking-widest uppercase mb-3">
              O que oferecemos
            </p>
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              {'Á'}reas de Atua{'ç'}{'ã'}o
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Nossa equipe multidisciplinar cobre todas as etapas do ciclo de vida
              de um projeto estrutural.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {services.map((service, i) => (
              <ServiceCard key={service.id} service={service} featured={i === 1} />
            ))}
          </div>
        </div>
      </section>

      {/* BIM highlight */}
      <section className="py-20 lg:py-28 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <div className="relative h-80 lg:h-96 rounded-2xl overflow-hidden shadow-xl">
              <Image
                src="/assets/bim-renders/bim-fundacoes-isometrico.svg"
                alt="Modelo BIM NT Engenharia"
                fill
                className="object-cover"
              />
            </div>
            <div>
              <p className="text-nt-teal text-sm font-semibold tracking-widest uppercase mb-3">
                Tecnologia BIM
              </p>
              <h2 className="font-display text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
                Pioneiros em BIM no Brasil
              </h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                Desde 2005, a NT Engenharia adota Building Information Modeling (BIM)
                em seus projetos. Nossa equipe é certificada e utiliza as principais
                plataformas do mercado — Revit Structure, Tekla Structures e Robot
                Structural Analysis.
              </p>
              <p className="text-gray-600 leading-relaxed mb-6">
                A metodologia BIM garante coordenação multidisciplinar, detecção
                automática de interferências, extração precisa de quantitativos e
                visualização 3D completa antes da execução.
              </p>
              <ul className="flex flex-col gap-3">
                {[
                  'Modelagem 3D completa da estrutura',
                  'Coordenação com arquitetura e instalações',
                  'Detecção de interferências (clash detection)',
                  'Extração automática de quantitativos',
                  'Entrega em LOD 300–500',
                ].map((item) => (
                  <li key={item} className="flex items-center gap-2 text-sm text-gray-700">
                    <svg
                      className="w-5 h-5 text-nt-teal flex-shrink-0"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* FEL Phases */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <p className="text-nt-teal text-sm font-semibold tracking-widest uppercase mb-3">
              Metodologia
            </p>
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Fases do Projeto — FEL
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Adotamos a metodologia Front End Loading (FEL) para garantir a maturidade
              progressiva do projeto, reduzindo riscos e otimizando custos.
            </p>
          </div>

          {/* Stepper */}
          <div className="relative">
            {/* Connector line (desktop) */}
            <div className="hidden lg:block absolute top-10 left-1/6 right-1/6 h-0.5 bg-nt-gray-light z-0" />

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 relative z-10">
              {felPhases.map((phase, i) => (
                <div key={phase.id} className="flex flex-col items-center text-center">
                  {/* Step badge */}
                  <div
                    className={`w-20 h-20 rounded-full flex items-center justify-center text-white font-display font-bold text-lg mb-6 shadow-lg ${
                      i === 0
                        ? 'bg-nt-gray-mid'
                        : i === 1
                        ? 'bg-nt-teal'
                        : 'bg-nt-teal-dark'
                    }`}
                  >
                    {phase.name}
                  </div>

                  {/* Arrow between steps (desktop) */}
                  {i < felPhases.length - 1 && (
                    <div className="hidden lg:block absolute" style={{ left: `${(i + 1) * 33.33}%`, top: '2.2rem' }}>
                      <svg className="w-6 h-6 text-nt-teal" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </div>
                  )}

                  <div className="bg-white border border-nt-gray-light rounded-xl p-6 w-full shadow-sm">
                    <h3 className="font-display font-bold text-gray-900 text-lg mb-2">
                      {phase.title}
                    </h3>
                    <p className="text-gray-600 text-sm leading-relaxed mb-4">
                      {phase.description}
                    </p>
                    <ul className="flex flex-col gap-2 text-left">
                      {phase.deliverables.map((d) => (
                        <li key={d} className="flex items-start gap-2 text-xs text-gray-600">
                          <svg
                            className="w-4 h-4 text-nt-teal flex-shrink-0 mt-0.5"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                          >
                            <path
                              fillRule="evenodd"
                              d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                              clipRule="evenodd"
                            />
                          </svg>
                          {d}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Sectors */}
      <section className="py-20 lg:py-28 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <p className="text-nt-teal text-sm font-semibold tracking-widest uppercase mb-3">
              Especialização
            </p>
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Setores que Atendemos
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {sectors.map((sector) => (
              <SectorCard key={sector.id} sector={sector} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-nt-teal-dark">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-white mb-4">
            Precisa de uma proposta?
          </h2>
          <p className="text-white/80 text-lg mb-8">
            Conte-nos sobre seu projeto e nossa equipe entrará em contato em até 24 horas.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://wa.me/5511982612500?text=Olá%2C%20vim%20pelo%20site%20e%20gostaria%20de%20conversar%20sobre%20um%20projeto."
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 bg-green-500 hover:bg-green-400 text-white font-semibold rounded-xl transition-colors duration-200"
            >
              Falar no WhatsApp
            </a>
            <Link
              href="/contato"
              className="px-8 py-4 border-2 border-white/40 hover:border-white text-white font-semibold rounded-xl transition-colors duration-200"
            >
              Formulário de Contato
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
