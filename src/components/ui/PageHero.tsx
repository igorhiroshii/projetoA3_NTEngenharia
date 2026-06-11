import Image from 'next/image'

interface PageHeroProps {
  title: string
  subtitle?: string
  image?: string
  imageAlt?: string
  breadcrumb?: string
}

export default function PageHero({
  title,
  subtitle,
  image = '/assets/hero/hero-principal.svg',
  imageAlt = 'NT Engenharia',
  breadcrumb,
}: PageHeroProps) {
  return (
    <section className="relative h-64 sm:h-80 lg:h-96 flex items-end overflow-hidden">
      <Image
        src={image}
        alt={imageAlt}
        fill
        className="object-cover"
        priority
      />
      <div className="absolute inset-0 bg-gradient-to-r from-nt-teal-dark/90 to-nt-teal/60" />
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full pb-10 lg:pb-14">
        {breadcrumb && (
          <p className="text-nt-gray-light text-sm mb-2 font-sans">{breadcrumb}</p>
        )}
        <h1 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight">
          {title}
        </h1>
        {subtitle && (
          <p className="mt-3 text-nt-gray-light text-lg max-w-2xl font-sans">
            {subtitle}
          </p>
        )}
      </div>
    </section>
  )
}
