import type { Award } from '@/lib/data/awards'

const badgeStyles: Record<string, string> = {
  gold: 'bg-yellow-400 text-yellow-900',
  platinum: 'bg-gray-200 text-gray-700',
  silver: 'bg-gray-300 text-gray-800',
  bronze: 'bg-amber-600 text-amber-100',
  teal: 'bg-nt-teal text-white',
}

interface CertificationCardProps {
  award: Award
}

export default function CertificationCard({ award }: CertificationCardProps) {
  return (
    <div className="bg-white rounded-2xl border border-nt-gray-light shadow-sm hover:shadow-lg transition-shadow duration-300 p-6 flex flex-col gap-4">
      <div className="flex items-start justify-between gap-4">
        <div>
          <span className="text-sm font-medium text-nt-gray-mid">{award.institution}</span>
          <h3 className="font-display font-bold text-gray-900 text-lg leading-snug mt-0.5">
            {award.title}
          </h3>
        </div>
        <span
          className={`flex-shrink-0 px-3 py-1 rounded-full text-xs font-bold ${
            badgeStyles[award.badgeColor] ?? badgeStyles.teal
          }`}
        >
          {award.year}
        </span>
      </div>
      <p className="text-gray-600 text-sm leading-relaxed flex-1">{award.description}</p>
      {award.pdfPath && (
        <a
          href={award.pdfPath} download
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 text-nt-teal text-sm font-medium hover:text-nt-teal-dark transition-colors duration-200"
        >
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
            />
          </svg>
          Ver Certificado (PDF)
        </a>
      )}
    </div>
  )
}
