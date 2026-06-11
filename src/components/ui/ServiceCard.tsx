import type { Service } from '@/lib/data/services'
import Link from 'next/link'

const icons: Record<string, React.ReactNode> = {
  consulting: (
    <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
    </svg>
  ),
  projects: (
    <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 17V7m0 10a2 2 0 01-2 2H5a2 2 0 01-2-2V7a2 2 0 012-2h2a2 2 0 012 2m0 10a2 2 0 002 2h2a2 2 0 002-2M9 7a2 2 0 012-2h2a2 2 0 012 2m0 10V7m0 10a2 2 0 002 2h2a2 2 0 002-2V7a2 2 0 00-2-2h-2a2 2 0 00-2 2" />
    </svg>
  ),
  calculation: (
    <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
    </svg>
  ),
}

interface ServiceCardProps {
  service: Service
  featured?: boolean
}

export default function ServiceCard({ service, featured = false }: ServiceCardProps) {
  return (
    <div
      className={`rounded-2xl p-8 flex flex-col gap-4 ${
        featured
          ? 'bg-nt-teal text-white'
          : 'bg-white border border-nt-gray-light hover:border-nt-teal hover:shadow-lg transition-all duration-300'
      }`}
    >
      <div className={featured ? 'text-white/80' : 'text-nt-teal'}>
        {icons[service.icon] ?? icons.consulting}
      </div>
      <h3
        className={`font-display font-bold text-xl ${
          featured ? 'text-white' : 'text-gray-900'
        }`}
      >
        {service.title}
      </h3>
      <p className={`text-sm leading-relaxed flex-1 ${featured ? 'text-white/80' : 'text-gray-600'}`}>
        {service.description}
      </p>
      <ul className="flex flex-col gap-2">
        {service.items.map((item) => (
          <li key={item} className="flex items-center gap-2 text-sm">
            <svg
              className={`w-4 h-4 flex-shrink-0 ${featured ? 'text-white/60' : 'text-nt-teal'}`}
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path
                fillRule="evenodd"
                d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                clipRule="evenodd"
              />
            </svg>
            <span className={featured ? 'text-white/90' : 'text-gray-700'}>{item}</span>
          </li>
        ))}
      </ul>
      <Link
        href="/contato"
        className={`mt-2 inline-flex items-center gap-1 text-sm font-semibold transition-colors duration-200 ${
          featured ? 'text-white hover:text-white/80' : 'text-nt-teal hover:text-nt-teal-dark'
        }`}
      >
        Solicitar Proposta
        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      </Link>
    </div>
  )
}
