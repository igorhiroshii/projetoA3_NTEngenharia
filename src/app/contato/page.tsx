'use client'

import { useState } from 'react'
import { useForm } from 'react-hook-form'
import PageHero from '@/components/ui/PageHero'

interface ContactFormData {
  name: string
  email: string
  phone: string
  company: string
  service: string
  message: string
}

const serviceOptions = [
  'Consultoria em Engenharia',
  'Projeto Estrutural',
  'Cálculo Estrutural',
  'Modelagem BIM',
  'Avaliação de Estruturas',
  'Outro',
]

export default function ContatoPage() {
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ContactFormData>()

  const onSubmit = async (data: ContactFormData) => {
    setStatus('loading')
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      })
      if (res.ok) {
        setStatus('success')
        reset()
      } else {
        setStatus('error')
      }
    } catch {
      setStatus('error')
    }
  }

  return (
    <>
      <PageHero
        title="Fale com a NT"
        subtitle="Nossa equipe está pronta para ouvir sobre seu projeto e apresentar a melhor solução."
        image="/assets/hero/hero-alternativo.svg"
        breadcrumb="Contato"
      />

      <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
            {/* Contact info */}
            <div>
              <p className="text-nt-teal text-sm font-semibold tracking-widest uppercase mb-3">
                Contato
              </p>
              <h2 className="font-display text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
                Como podemos ajudar?
              </h2>
              <p className="text-gray-600 leading-relaxed mb-8">
                Seja para uma nova demanda de projeto, consultoria técnica, revisão
                de estruturas existentes ou orçamento, estamos {'à'} disposi{'ç'}{'ã'}o.
              </p>

              <div className="flex flex-col gap-6">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-nt-teal/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <svg className="w-5 h-5 text-nt-teal" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900 text-sm">Telefone / WhatsApp</p>
                    <a
                      href="tel:+5511982612500"
                      className="text-gray-600 text-sm hover:text-nt-teal transition-colors duration-200"
                    >
                      (11) 98261-2500
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-nt-teal/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <svg className="w-5 h-5 text-nt-teal" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900 text-sm">Localização</p>
                    <p className="text-gray-600 text-sm">São Paulo, SP — Brasil</p>
                    <p className="text-gray-400 text-xs mt-0.5">Atendimento em todo o território nacional</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-nt-teal/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <svg className="w-5 h-5 text-nt-teal" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900 text-sm">Horário de Atendimento</p>
                    <p className="text-gray-600 text-sm">Segunda a Sexta: 8h{'–'}18h</p>
                    <p className="text-gray-400 text-xs mt-0.5">Retorno em até 24 horas úteis</p>
                  </div>
                </div>
              </div>

              {/* WhatsApp CTA */}
              <div className="mt-8 p-5 bg-green-50 rounded-xl border border-green-100">
                <p className="font-semibold text-gray-900 text-sm mb-2">
                  Prefere falar agora?
                </p>
                <p className="text-gray-600 text-sm mb-4">
                  Clique no botão abaixo para iniciar uma conversa direta pelo WhatsApp.
                </p>
                <a
                  href="https://wa.me/5511982612500?text=Olá%2C%20vim%20pelo%20site%20e%20gostaria%20de%20conversar%20sobre%20um%20projeto."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-2.5 bg-green-600 text-white rounded-lg text-sm font-semibold hover:bg-green-700 transition-colors duration-200"
                >
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
                    <path d="M12 0C5.373 0 0 5.373 0 12c0 2.123.554 4.118 1.527 5.849L.057 23.886l6.198-1.446A11.946 11.946 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 22c-1.885 0-3.651-.513-5.163-1.407l-.371-.22-3.838.895.914-3.738-.243-.385A9.953 9.953 0 012 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10z" />
                  </svg>
                  Abrir WhatsApp
                </a>
              </div>
            </div>

            {/* Form */}
            <div>
              <div className="bg-gray-50 rounded-2xl p-8 border border-nt-gray-light">
                <h3 className="font-display font-bold text-gray-900 text-xl mb-6">
                  Envie uma Mensagem
                </h3>

                {status === 'success' ? (
                  <div className="text-center py-10">
                    <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                      <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <h4 className="font-display font-bold text-gray-900 text-lg mb-2">
                      Mensagem enviada!
                    </h4>
                    <p className="text-gray-600 text-sm mb-6">
                      Obrigado pelo contato. Nossa equipe retornará em até 24 horas úteis.
                    </p>
                    <button
                      onClick={() => setStatus('idle')}
                      className="px-6 py-2 border border-nt-teal text-nt-teal rounded-lg text-sm font-medium hover:bg-nt-teal hover:text-white transition-colors duration-200"
                    >
                      Enviar Nova Mensagem
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-4" noValidate>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                          Nome *
                        </label>
                        <input
                          id="name"
                          type="text"
                          {...register('name', { required: 'Nome é obrigatório' })}
                          className="w-full px-4 py-2.5 rounded-lg border border-nt-gray-light bg-white text-gray-900 text-sm focus:outline-none focus:ring-2 focus:ring-nt-teal focus:border-transparent transition-colors duration-200"
                          placeholder="Seu nome"
                        />
                        {errors.name && (
                          <p className="text-red-500 text-xs mt-1">{errors.name.message}</p>
                        )}
                      </div>
                      <div>
                        <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                          E-mail *
                        </label>
                        <input
                          id="email"
                          type="email"
                          {...register('email', {
                            required: 'E-mail é obrigatório',
                            pattern: { value: /\S+@\S+\.\S+/, message: 'E-mail inválido' },
                          })}
                          className="w-full px-4 py-2.5 rounded-lg border border-nt-gray-light bg-white text-gray-900 text-sm focus:outline-none focus:ring-2 focus:ring-nt-teal focus:border-transparent transition-colors duration-200"
                          placeholder="seu@email.com"
                        />
                        {errors.email && (
                          <p className="text-red-500 text-xs mt-1">{errors.email.message}</p>
                        )}
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                          Telefone
                        </label>
                        <input
                          id="phone"
                          type="tel"
                          {...register('phone')}
                          className="w-full px-4 py-2.5 rounded-lg border border-nt-gray-light bg-white text-gray-900 text-sm focus:outline-none focus:ring-2 focus:ring-nt-teal focus:border-transparent transition-colors duration-200"
                          placeholder="(11) 99999-9999"
                        />
                      </div>
                      <div>
                        <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-1">
                          Empresa
                        </label>
                        <input
                          id="company"
                          type="text"
                          {...register('company')}
                          className="w-full px-4 py-2.5 rounded-lg border border-nt-gray-light bg-white text-gray-900 text-sm focus:outline-none focus:ring-2 focus:ring-nt-teal focus:border-transparent transition-colors duration-200"
                          placeholder="Nome da empresa"
                        />
                      </div>
                    </div>

                    <div>
                      <label htmlFor="service" className="block text-sm font-medium text-gray-700 mb-1">
                        Serviço de Interesse
                      </label>
                      <select
                        id="service"
                        {...register('service')}
                        className="w-full px-4 py-2.5 rounded-lg border border-nt-gray-light bg-white text-gray-900 text-sm focus:outline-none focus:ring-2 focus:ring-nt-teal focus:border-transparent transition-colors duration-200"
                      >
                        <option value="">Selecione um serviço</option>
                        {serviceOptions.map((opt) => (
                          <option key={opt} value={opt}>
                            {opt}
                          </option>
                        ))}
                      </select>
                    </div>

                    <div>
                      <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                        Mensagem *
                      </label>
                      <textarea
                        id="message"
                        rows={5}
                        {...register('message', { required: 'Mensagem é obrigatória' })}
                        className="w-full px-4 py-2.5 rounded-lg border border-nt-gray-light bg-white text-gray-900 text-sm focus:outline-none focus:ring-2 focus:ring-nt-teal focus:border-transparent transition-colors duration-200 resize-none"
                        placeholder="Descreva seu projeto ou necessidade..."
                      />
                      {errors.message && (
                        <p className="text-red-500 text-xs mt-1">{errors.message.message}</p>
                      )}
                    </div>

                    {status === 'error' && (
                      <p className="text-red-500 text-sm text-center">
                        Erro ao enviar. Tente novamente ou entre em contato pelo WhatsApp.
                      </p>
                    )}

                    <button
                      type="submit"
                      disabled={status === 'loading'}
                      className="w-full py-3 bg-nt-teal hover:bg-nt-teal-dark disabled:bg-nt-teal/50 text-white font-semibold rounded-xl transition-colors duration-200 flex items-center justify-center gap-2"
                    >
                      {status === 'loading' ? (
                        <>
                          <svg className="w-4 h-4 animate-spin" fill="none" viewBox="0 0 24 24">
                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                          </svg>
                          Enviando...
                        </>
                      ) : (
                        'Enviar Mensagem'
                      )}
                    </button>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
