import type { Metadata } from 'next'
import Link from 'next/link'
import PageHero from '@/components/ui/PageHero'
import CertificationCard from '@/components/ui/CertificationCard'
import { awards } from '@/lib/data/awards'

export const metadata: Metadata = {
  title: 'Certificações',
  description:
    'Premiações e certificações de qualidade da NT Engenharia: ANCEC, Quality Prime, Quality Champion e mais.',
}

const qualityPillars = [
  {
    title: 'Processos Certificados',
    description:
      'Nossos processos internos seguem rigorosos padrões de qualidade, validados por certificações independentes.',
  },
  {
    title: 'Equipe Qualificada',
    description:
      'Engenheiros registrados no CREA-SP, com especializações e atualizações constantes nas melhores práticas do mercado.',
  },
  {
    title: 'Tecnologia de Ponta',
    description:
      'Software certificados e workflows documentados garantem rastreabilidade e conformidade em cada projeto.',
  },
  {
    title: 'Melhoria Contínua',
    description:
      'Sistema de avaliação de projetos e feedback de clientes alimenta um ciclo contínuo de aperfeiçoamento.',
  },
]

export default function CertificacoesPage() {
  return (
    <>
      <PageHero
        title="Certificações e Prêmios"
        subtitle="Reconhecimentos que refletem nosso compromisso com a excelência em engenharia."
        image="/assets/hero/hero-principal.svg"
        breadcrumb="Certificações"
      />

      {/* Awards grid */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <p className="text-nt-teal text-sm font-semibold tracking-widest uppercase mb-3">
              Reconhecimentos
            </p>
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Nossas Certificações
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Certificações concedidas por entidades independentes que reconhecem
              a qualidade dos nossos serviços e processos.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {awards.map((award) => (
              <CertificationCard key={award.id} award={award} />
            ))}
          </div>
        </div>
      </section>

      {/* Quality system */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <p className="text-nt-teal text-sm font-semibold tracking-widest uppercase mb-3">
              Sistema de Qualidade
            </p>
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Compromisso com a Excelência
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              A qualidade na NT não é um departamento — é uma cultura que permeia
              todos os projetos e processos.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {qualityPillars.map((pillar) => (
              <div
                key={pillar.title}
                className="bg-white rounded-xl p-6 border border-nt-gray-light hover:border-nt-teal hover:shadow-md transition-all duration-300"
              >
                <div className="w-10 h-10 bg-nt-teal/10 rounded-lg flex items-center justify-center mb-4">
                  <svg
                    className="w-5 h-5 text-nt-teal"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </div>
                <h3 className="font-display font-bold text-gray-900 text-base mb-2">
                  {pillar.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">{pillar.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CREA badge */}
      <section className="py-16 bg-nt-teal-dark text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-display text-3xl font-bold mb-4">
            Empresa Registrada no CREA-SP
          </h2>
          <p className="text-white/80 text-lg mb-8 max-w-2xl mx-auto">
            Todos os nossos engenheiros possuem registro ativo no Conselho Regional de
            Engenharia e Agronomia de São Paulo, garantindo a legalidade e a responsabilidade
            técnica em todos os projetos.
          </p>
          <Link
            href="/contato"
            className="inline-block px-8 py-4 bg-white text-nt-teal font-semibold rounded-xl hover:bg-nt-gray-light transition-colors duration-200"
          >
            Solicitar ART / Proposta
          </Link>
        </div>
      </section>
    </>
  )
}
