import Link from 'next/link'

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 px-4">
      <div className="text-center max-w-md">
        <p className="font-display text-8xl font-bold text-nt-teal mb-4">404</p>
        <h1 className="font-display text-2xl font-bold text-gray-900 mb-4">
          Página não encontrada
        </h1>
        <p className="text-gray-600 mb-8">
          A página que você está procurando não existe ou foi movida.
        </p>
        <Link
          href="/"
          className="inline-block px-6 py-3 bg-nt-teal hover:bg-nt-teal-dark text-white font-semibold rounded-xl transition-colors duration-200"
        >
          Voltar ao Início
        </Link>
      </div>
    </div>
  )
}
