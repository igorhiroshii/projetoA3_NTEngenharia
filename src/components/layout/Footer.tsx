import Link from 'next/link'
import Image from 'next/image'

const navLinks = [
  { href: '/', label: 'Início' },
  { href: '/quem-somos', label: 'Quem Somos' },
  { href: '/servicos', label: 'Serviços' },
  { href: '/portfolio', label: 'Portfólio' },
  { href: '/certificacoes', label: 'Certificações' },
  { href: '/contato', label: 'Contato' },
]

export default function Footer() {
  return (
    <footer className="bg-nt-teal-dark text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {/* Brand */}
          <div className="lg:col-span-1">
            <Image
              src="/assets/logo/logo-nt-color.png"
              alt="NT Engenharia"
              width={220}
              height={56}
              className="h-10 w-auto mb-4"
            />
            <p className="text-nt-gray-light text-sm leading-relaxed">
              Mais de 15 anos de experiência em engenharia estrutural.
              Transformamos projetos em realidade com excelência técnica e
              inovação.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="font-display font-semibold text-white mb-4">
              Navegação
            </h3>
            <ul className="flex flex-col gap-2">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-nt-gray-light text-sm hover:text-white transition-colors duration-200"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-display font-semibold text-white mb-4">
              Serviços
            </h3>
            <ul className="flex flex-col gap-2">
              <li>
                <Link
                  href="/servicos"
                  className="text-nt-gray-light text-sm hover:text-white transition-colors duration-200"
                >
                  Consultoria em Engenharia
                </Link>
              </li>
              <li>
                <Link
                  href="/servicos"
                  className="text-nt-gray-light text-sm hover:text-white transition-colors duration-200"
                >
                  Projetos Estruturais
                </Link>
              </li>
              <li>
                <Link
                  href="/servicos"
                  className="text-nt-gray-light text-sm hover:text-white transition-colors duration-200"
                >
                  Cálculo Estrutural
                </Link>
              </li>
              <li>
                <Link
                  href="/servicos"
                  className="text-nt-gray-light text-sm hover:text-white transition-colors duration-200"
                >
                  Modelagem BIM
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-display font-semibold text-white mb-4">
              Contato
            </h3>
            <ul className="flex flex-col gap-3 text-sm text-nt-gray-light">
              <li className="flex items-start gap-2">
                <svg
                  className="w-4 h-4 mt-0.5 flex-shrink-0 text-nt-teal"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                </svg>
                <span>São Paulo, SP — Brasil</span>
              </li>
              <li className="flex items-center gap-2">
                <svg
                  className="w-4 h-4 flex-shrink-0 text-nt-teal"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                  />
                </svg>
                <a
                  href="tel:+5511982612500"
                  className="hover:text-white transition-colors duration-200"
                >
                  (11) 98261-2500
                </a>
              </li>
              <li>
                <a
                  href="https://wa.me/5511982612500?text=Olá%2C%20vim%20pelo%20site%20e%20gostaria%20de%20conversar%20sobre%20um%20projeto."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 mt-2 px-4 py-2 bg-green-600 text-white rounded-lg text-sm font-medium hover:bg-green-700 transition-colors duration-200"
                >
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
                    <path d="M12 0C5.373 0 0 5.373 0 12c0 2.123.554 4.118 1.527 5.849L.057 23.886l6.198-1.446A11.946 11.946 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 22c-1.885 0-3.651-.513-5.163-1.407l-.371-.22-3.838.895.914-3.738-.243-.385A9.953 9.953 0 012 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10z" />
                  </svg>
                  WhatsApp
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-nt-gray-mid text-sm">
            &copy; {new Date().getFullYear()} Novo Tempo Solu{'ç'}{'õ'}es em Engenharia. Todos os direitos reservados.
          </p>
          <p className="text-nt-gray-mid text-sm">
            CREA-SP · Membro ABECE · ABTCP
          </p>
        </div>
      </div>
    </footer>
  )
}
