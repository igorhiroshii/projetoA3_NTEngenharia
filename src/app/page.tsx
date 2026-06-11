import Image from 'next/image'
import Link from 'next/link'
import type { Metadata } from 'next'
import AnimatedCounter from '@/components/ui/AnimatedCounter'
import ClientsCarousel from '@/components/ui/ClientsCarousel'
import ServiceCard from '@/components/ui/ServiceCard'
import SectorCard from '@/components/ui/SectorCard'
import PortfolioCard from '@/components/ui/PortfolioCard'
import { services } from '@/lib/data/services'
import { sectors } from '@/lib/data/sectors'
import { portfolioItems } from '@/lib/data/portfolio'

export const metadata: Metadata = {
  title: 'NT Engenharia | Novo Tempo Soluções em Engenharia',
  description:
    'Especialistas em engenharia estrutural, projetos BIM e consultoria técnica. Mais de 15 anos de experiência transformando projetos em realidade.',
}

const stats = [
  { value: 15, suffix: '+', label: 'Anos de Experiência' },
  { value: 500, suffix: '+', label: 'Projetos Entregues' },
  { value: 7, suffix: '', label: 'Prêmios de Qualidade' },
  { value: 19, suffix: '+', label: 'Clientes de Grande Porte' },
]

const featuredProjects = portfolioItems.slice(0, 6)

export default function HomePage() {
  return (
    <>
      {/* Hero */}
      <section className="relative min-h-screen flex items-center overflow-hidden">
        {/* Hero background video — place hero-video.mp4 in public/assets/video/ */}
        <video
          autoPlay
          muted
          loop
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
          poster="/assets/hero/hero-principal.svg"
        >
          <source src="/assets/video/hero-video.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-gradient-to-r from-nt-teal-dark/95 via-nt-teal-dark/75 to-transparent" />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full pt-24 pb-16">
          <div className="max-w-2xl">
            <p className="text-nt-gray-light text-sm font-medium tracking-widest uppercase mb-4">
              Engenharia Estrutural · BIM · Consultoria
            </p>
            <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight text-balance mb-6">
              Engenharia civil de grande porte.{' '}
              <span className="text-nt-teal">
                Da pré-engenharia à entrega em BIM LOD 300.
              </span>
            </h1>
            <p className="text-nt-gray-light text-lg sm:text-xl leading-relaxed mb-8 max-w-xl">
              Projetos industriais com 15 anos de experiência. Para quem não pode errar.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="https://wa.me/5511982612500?text=Olá%2C%20vim%20pelo%20site%20e%20gostaria%20de%20conversar%20sobre%20um%20projeto."
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-4 bg-nt-teal hover:bg-nt-teal-dark text-white font-semibold rounded-xl transition-colors duration-200 text-center"
              >
                Fale com um Especialista
              </a>
              <Link
                href="/portfolio"
                className="px-8 py-4 border-2 border-white/40 hover:border-white text-white font-semibold rounded-xl transition-colors duration-200 text-center backdrop-blur-sm"
              >
                Ver Portfólio
              </Link>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-white/60">
          <div className="w-0.5 h-12 bg-gradient-to-b from-white/60 to-transparent animate-pulse" />
        </div>
      </section>

      {/* Stats */}
      <section className="bg-nt-teal py-12 lg:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat) => (
              <div key={stat.label} className="text-center">
                <p className="font-display text-4xl lg:text-5xl font-bold text-white">
                  <AnimatedCounter target={stat.value} suffix={stat.suffix} />
                </p>
                <p className="text-white/70 text-sm mt-1 font-medium">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About teaser */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <div>
              <p className="text-nt-teal text-sm font-semibold tracking-widest uppercase mb-3">
                Sobre a NT
              </p>
              <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight mb-6">
                Excelência Técnica há mais de 15 Anos
              </h2>
              <p className="text-gray-600 text-lg leading-relaxed mb-6">
                Fundada em 1988, a Novo Tempo Soluções em Engenharia se tornou
                referência nacional em projetos estruturais complexos, atendendo
                desde indústrias petroquímicas até grandes arenas e complexos
                logísticos.
              </p>
              <p className="text-gray-600 leading-relaxed mb-8">
                Nossa equipe multidisciplinar combina décadas de experiência com
                as mais modernas ferramentas de projeto BIM, garantindo precisão,
                eficiência e qualidade em cada entrega.
              </p>
              <Link
                href="/quem-somos"
                className="inline-flex items-center gap-2 text-nt-teal font-semibold hover:text-nt-teal-dark transition-colors duration-200"
              >
                Conheça Nossa História
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </div>
            <div className="relative">
              <div className="relative h-80 lg:h-96 rounded-2xl overflow-hidden shadow-xl">
                <Image
                  src="/assets/hero/hero-aereo.svg"
                  alt="Complexo industrial NT Engenharia"
                  fill
                  className="object-cover"
                />
              </div>
              {/* Floating badge */}
              <div className="absolute -bottom-6 -left-6 bg-white rounded-xl shadow-lg p-4 border border-nt-gray-light">
                <p className="font-display font-bold text-nt-teal text-2xl">+500</p>
                <p className="text-gray-600 text-xs">Projetos entregues</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-20 lg:py-28 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <p className="text-nt-teal text-sm font-semibold tracking-widest uppercase mb-3">
              O Que Fazemos
            </p>
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Nossos Serviços
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Soluções completas de engenharia estrutural, do conceito ao detalhamento executivo.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {services.map((service, i) => (
              <ServiceCard key={service.id} service={service} featured={i === 1} />
            ))}
          </div>
          <div className="text-center mt-10">
            <Link
              href="/servicos"
              className="inline-flex items-center gap-2 px-6 py-3 border-2 border-nt-teal text-nt-teal rounded-xl font-semibold hover:bg-nt-teal hover:text-white transition-colors duration-200"
            >
              Ver Todos os Serviços
            </Link>
          </div>
        </div>
      </section>

      {/* Sectors */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <p className="text-nt-teal text-sm font-semibold tracking-widest uppercase mb-3">
              Atuação
            </p>
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Setores que Atendemos
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Experiência comprovada em 7 setores da indústria e serviços.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {sectors.map((sector) => (
              <SectorCard key={sector.id} sector={sector} />
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio highlight */}
      <section className="py-20 lg:py-28 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-12">
            <div>
              <p className="text-nt-teal text-sm font-semibold tracking-widest uppercase mb-3">
                Portfólio
              </p>
              <h2 className="font-display text-3xl sm:text-4xl font-bold text-gray-900">
                Projetos em Destaque
              </h2>
            </div>
            <Link
              href="/portfolio"
              className="inline-flex items-center gap-2 text-nt-teal font-semibold hover:text-nt-teal-dark transition-colors duration-200 flex-shrink-0"
            >
              Ver Portfólio Completo
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {featuredProjects.map((item) => (
              <PortfolioCard key={item.id} item={item} />
            ))}
          </div>
        </div>
      </section>

      {/* Clients marquee */}
      <section className="py-12 bg-white border-y border-nt-gray-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-6">
          <p className="text-center text-gray-400 text-sm font-medium uppercase tracking-widest">
            Clientes que confiam na NT
          </p>
        </div>
        <ClientsCarousel />
      </section>

      {/* CTA */}
      <section className="py-20 lg:py-28 bg-nt-teal-dark">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6">
            Pronto para começar seu projeto?
          </h2>
          <p className="text-white/80 text-xl leading-relaxed mb-10">
            Entre em contato com nossa equipe de especialistas e descubra como a
            NT pode transformar sua ideia em realidade.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://wa.me/5511982612500?text=Olá%2C%20vim%20pelo%20site%20e%20gostaria%20de%20conversar%20sobre%20um%20projeto."
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 bg-green-500 hover:bg-green-400 text-white font-semibold rounded-xl transition-colors duration-200 inline-flex items-center justify-center gap-2"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
                <path d="M12 0C5.373 0 0 5.373 0 12c0 2.123.554 4.118 1.527 5.849L.057 23.886l6.198-1.446A11.946 11.946 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 22c-1.885 0-3.651-.513-5.163-1.407l-.371-.22-3.838.895.914-3.738-.243-.385A9.953 9.953 0 012 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10z" />
              </svg>
              Falar no WhatsApp
            </a>
            <Link
              href="/contato"
              className="px-8 py-4 border-2 border-white/40 hover:border-white text-white font-semibold rounded-xl transition-colors duration-200 text-center"
            >
              Enviar Mensagem
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
