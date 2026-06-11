import type { Metadata } from 'next'

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? 'https://novotempoengenharia.com.br'
import { DM_Sans, Syne } from 'next/font/google'
import './globals.css'
import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'
import WhatsAppFloat from '@/components/layout/WhatsAppFloat'

const dmSans = DM_Sans({
  subsets: ['latin'],
  variable: '--font-dm-sans',
  display: 'swap',
})

const syne = Syne({
  subsets: ['latin'],
  variable: '--font-syne',
  display: 'swap',
})

export const metadata: Metadata = {
  title: {
    default: 'NT Engenharia | Soluções em Engenharia Civil',
    template: '%s | NT Engenharia',
  },
  description:
    'Especialistas em projetos de engenharia civil para indústrias e estruturas de grande porte. Atuamos em concreto armado, estruturas metálicas, fundações e BIM LOD 300, com mais de 35 anos de experiência.',
  keywords: [
    'engenharia estrutural',
    'projetos de concreto',
    'BIM',
    'consultoria de engenharia',
    'estruturas metálicas',
    'cálculo estrutural',
    'São Paulo',
  ],
  openGraph: {
    type: 'website',
    locale: 'pt_BR',
    url: siteUrl,
    siteName: 'NT Engenharia',
    title: 'NT Engenharia | Soluções em Engenharia Civil',
    description:
      'Projetos de engenharia civil para indústrias de grande porte. Concreto armado, estruturas metálicas, BIM LOD 300 e ATP conforme NBR 6118.',
    images: [{ url: '/assets/og-image.svg', width: 1200, height: 630, alt: 'NT Engenharia' }],
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="pt-BR" className={`${dmSans.variable} ${syne.variable}`}>
      <body className="antialiased font-sans bg-white text-gray-900">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'Organization',
              name: 'Novo Tempo Soluções em Engenharia',
              alternateName: 'NT Engenharia',
              url: siteUrl,
              logo: `${siteUrl}/assets/logo/logo-nt-color.svg`,
              description:
    'Especialistas em projetos de engenharia civil para indústrias e estruturas de grande porte. Atuamos em concreto armado, estruturas metálicas, fundações e BIM LOD 300, com mais de 35 anos de experiência.',
              address: {
                '@type': 'PostalAddress',
                addressLocality: 'São Paulo',
                addressRegion: 'SP',
                addressCountry: 'BR',
              },
              contactPoint: {
                '@type': 'ContactPoint',
                telephone: '+55-11-98261-2500',
                contactType: 'customer service',
                availableLanguage: 'Portuguese',
              },
            }),
          }}
        />
        <Navbar />
        <main>{children}</main>
        <Footer />
        <WhatsAppFloat />
      </body>
    </html>
  )
}




