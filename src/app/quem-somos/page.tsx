'use client'

import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'
import PageHero from '@/components/ui/PageHero'
import { timeline } from '@/lib/data/timeline'

const values = [
  {
    title: 'Excelência Técnica',
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
    description:
      'Comprometidos com a mais alta qualidade técnica em cada projeto, utilizando as melhores práticas e metodologias da engenharia moderna.',
  },
  {
    title: 'Inovação',
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
      </svg>
    ),
    description:
      'Pioneiros na adoção de tecnologia BIM no Brasil, constantemente buscamos novas soluções para desafios complexos de engenharia.',
  },
  {
    title: 'Confiança',
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
    description:
      'Construída ao longo de 35 anos de relacionamentos duradouros com clientes que retornam projeto após projeto.',
  },
  {
    title: 'Responsabilidade',
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
      </svg>
    ),
    description:
      'Compromisso com prazos, orçamentos e a segurança de todas as estruturas que projetamos e avaliamos.',
  },
]

export default function QuemSomosPage() {
  return (
    <>
      <PageHero
        title="Quem Somos"
        subtitle="Mais de 35 anos construindo a engenharia do futuro com raízes sólidas no passado."
        image="/assets/hero/hero-alternativo.svg"
        breadcrumb="Sobre a NT"
      />

      {/* Mission + CEO */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start">
            <div>
              <p className="text-nt-teal text-sm font-semibold tracking-widest uppercase mb-3">
                Nossa Missão
              </p>
              <h2 className="font-display text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
                Engenharia que Transforma
              </h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                A Novo Tempo Soluções em Engenharia foi fundada com a missão de
                oferecer soluções de engenharia estrutural de excelência, combinando
                rigor técnico com criatividade e inovação.
              </p>
              <p className="text-gray-600 leading-relaxed mb-4">
                Ao longo de mais de três décadas, construímos um portfólio diversificado
                que inclui desde complexos industriais e plantas petroquímicas até arenas
                de eventos e obras de patrimônio histórico.
              </p>
              <p className="text-gray-600 leading-relaxed mb-8">
                Nossa abordagem integrada — unindo consultoria, projeto e cálculo
                estrutural — nos posiciona como parceiros estratégicos dos nossos
                clientes, não apenas fornecedores de serviço.
              </p>

              {/* CEO Quote */}
              <div className="bg-gray-50 rounded-2xl p-6 border-l-4 border-nt-teal">
                <p className="text-gray-700 italic leading-relaxed mb-4">
                  &quot;Engenharia não é apenas cálculo. É a arte de transformar ideias em estruturas
                  que resistem ao tempo, servem Á s pessoas e honram a profissão.&quot;
                </p>
                <div className="flex items-center gap-3">
                  <div className="relative w-12 h-12 rounded-full overflow-hidden bg-nt-teal/20">
                    <Image
                      src="/assets/institucional/ceo-carlos-henrique.jpg"
                      alt="Carlos Henrique — CEO"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900 text-sm">Carlos Henrique</p>
                    <p className="text-nt-gray-mid text-xs">Fundador e CEO · Eng.Âº Civil CREA-SP</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="space-y-6">
              <div className="relative h-72 rounded-2xl overflow-hidden shadow-xl">
                <Image
                  src="/assets/historia/wtc-sp-anos90-1.jpg"
                  alt="WTC São Paulo — projeto histórico NT"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-nt-teal rounded-xl p-5 text-white text-center">
                  <p className="font-display text-3xl font-bold">35+</p>
                  <p className="text-white/80 text-xs mt-1">Anos de Experiência</p>
                </div>
                <div className="bg-nt-teal-dark rounded-xl p-5 text-white text-center">
                  <p className="font-display text-3xl font-bold">500+</p>
                  <p className="text-white/80 text-xs mt-1">Projetos Entregues</p>
                </div>
                <div className="bg-gray-50 rounded-xl p-5 text-center border border-nt-gray-light">
                  <p className="font-display text-3xl font-bold text-nt-teal">7</p>
                  <p className="text-gray-500 text-xs mt-1">Setores Atendidos</p>
                </div>
                <div className="bg-gray-50 rounded-xl p-5 text-center border border-nt-gray-light">
                  <p className="font-display text-3xl font-bold text-nt-teal">19+</p>
                  <p className="text-gray-500 text-xs mt-1">Clientes de Referência</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <p className="text-nt-teal text-sm font-semibold tracking-widest uppercase mb-3">
              Cultura
            </p>
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-gray-900">
              Nossos Valores
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value) => (
              <div
                key={value.title}
                className="bg-white rounded-xl p-6 border border-nt-gray-light hover:border-nt-teal hover:shadow-md transition-all duration-300"
              >
                <div className="text-nt-teal mb-4">{value.icon}</div>
                <h3 className="font-display font-bold text-gray-900 text-lg mb-2">
                  {value.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <p className="text-nt-teal text-sm font-semibold tracking-widest uppercase mb-3">
              Nossa Trajetória
            </p>
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-gray-900">
              Uma História de Excelência
            </h2>
          </div>

          <div className="relative">
            {/* Vertical line */}
            <div className="absolute left-1/2 -translate-x-0.5 top-0 bottom-0 w-0.5 bg-nt-gray-light hidden lg:block" />

            <div className="flex flex-col gap-12 lg:gap-0">
              {timeline.map((event, i) => {
                const isLeft = i % 2 === 0
                return (
                  <motion.div
                    key={event.id}
                    initial={{ opacity: 0, x: isLeft ? -30 : 30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: '-80px' }}
                    transition={{ duration: 0.5, delay: 0.1 }}
                    className={`lg:flex lg:items-center lg:gap-8 ${
                      isLeft ? 'lg:flex-row' : 'lg:flex-row-reverse'
                    }`}
                  >
                    {/* Content */}
                    <div className={`lg:w-1/2 ${isLeft ? 'lg:text-right lg:pr-8' : 'lg:pl-8'}`}>
                      <div
                        className={`bg-white border rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow duration-300 ${
                          event.highlight ? 'border-nt-teal' : 'border-nt-gray-light'
                        }`}
                      >
                        <span
                          className={`inline-block text-xs font-bold px-3 py-1 rounded-full mb-3 ${
                            event.highlight
                              ? 'bg-nt-teal text-white'
                              : 'bg-nt-gray-light text-gray-600'
                          }`}
                        >
                          {event.year}
                        </span>
                        <h3 className="font-display font-bold text-gray-900 text-lg mb-2">
                          {event.title}
                        </h3>
                        <p className="text-gray-600 text-sm leading-relaxed">
                          {event.description}
                        </p>
                      </div>
                    </div>

                    {/* Center dot (desktop) */}
                    <div className="hidden lg:flex w-4 h-4 rounded-full bg-nt-teal border-2 border-white shadow-md flex-shrink-0 relative z-10" />

                    {/* Empty half */}
                    <div className="lg:w-1/2" />
                  </motion.div>
                )
              })}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-nt-teal">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-white mb-4">
            Vamos trabalhar juntos?
          </h2>
          <p className="text-white/80 text-lg mb-8">
            Entre em contato e descubra como a NT pode ser parceira do seu próximo projeto.
          </p>
          <Link
            href="/contato"
            className="inline-block px-8 py-4 bg-white text-nt-teal font-semibold rounded-xl hover:bg-nt-gray-light transition-colors duration-200"
          >
            Entrar em Contato
          </Link>
        </div>
      </section>
    </>
  )
}
