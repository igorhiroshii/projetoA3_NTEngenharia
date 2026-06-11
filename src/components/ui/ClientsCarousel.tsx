import { clients } from '@/lib/data/clients'

export default function ClientsCarousel() {
  // Duplicate for seamless loop
  const doubled = [...clients, ...clients]

  return (
    <div className="relative overflow-hidden py-4" aria-label="Clientes atendidos">
      {/* Fade edges */}
      <div className="absolute left-0 top-0 bottom-0 w-16 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none" />
      <div className="absolute right-0 top-0 bottom-0 w-16 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none" />

      <div className="flex animate-scroll whitespace-nowrap gap-0">
        {doubled.map((client, i) => (
          <span
            key={`${client}-${i}`}
            className="inline-flex items-center mx-8 text-nt-gray-mid font-medium text-sm tracking-wide uppercase flex-shrink-0"
          >
            <span className="mr-8 text-nt-teal/40 select-none">·</span>
            {client}
          </span>
        ))}
      </div>
    </div>
  )
}
