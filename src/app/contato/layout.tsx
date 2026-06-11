import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Contato | Novo Tempo Soluções em Engenharia',
  description:
    'Entre em contato com a Novo Tempo Engenharia. Formulário técnico, WhatsApp, telefone e endereço. Osasco, SP.',
  openGraph: {
    title: 'Contato | Novo Tempo Soluções em Engenharia',
    description:
      'Entre em contato para discutir seu projeto industrial. Especialistas em engenharia civil de grande porte.',
  },
}

export default function ContatoLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
