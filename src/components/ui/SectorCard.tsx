import type { Sector } from '@/lib/data/sectors'

const icons: Record<string, React.ReactNode> = {
  factory: (
    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
    </svg>
  ),
  flask: (
    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 3v10.5l-3.5 6A1 1 0 006.382 21h11.236a1 1 0 00.882-1.5L15 13.5V3M9 3h6M9 3H7m8 0h2" />
    </svg>
  ),
  beverage: (
    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 3h6l1 9H8L9 3zM8 12v9h8v-9M3 8h18" />
    </svg>
  ),
  foundation: (
    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 21h18M3 18h18M7 18V10m5 8V6m5 12V10" />
    </svg>
  ),
  building: (
    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 14v3m4-3v3m4-3v3M3 21h18M3 10h18M3 7l9-4 9 4M4 10h16v11H4V10z" />
    </svg>
  ),
  bridge: (
    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 12h18M5 12V7m14 5V7m-7 5V4M5 7C5 5.343 8.134 4 12 4s7 1.343 7 3" />
    </svg>
  ),
  heritage: (
    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 2L2 7h20L12 2zM4 7v13h16V7M9 21V12h6v9" />
    </svg>
  ),
}

interface SectorCardProps {
  sector: Sector
}

export default function SectorCard({ sector }: SectorCardProps) {
  return (
    <div className="group p-6 rounded-xl border border-nt-gray-light bg-white hover:border-nt-teal hover:shadow-lg transition-all duration-300">
      <div className="text-nt-teal mb-4 group-hover:scale-110 transition-transform duration-300 w-fit">
        {icons[sector.icon] ?? icons.building}
      </div>
      <h3 className="font-display font-semibold text-gray-900 text-lg mb-2">
        {sector.name}
      </h3>
      <p className="text-gray-600 text-sm leading-relaxed">{sector.description}</p>
    </div>
  )
}
