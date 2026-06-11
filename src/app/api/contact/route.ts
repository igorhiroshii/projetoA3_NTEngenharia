import { NextRequest, NextResponse } from 'next/server'

interface ContactPayload {
  name: string
  email: string
  phone?: string
  company?: string
  service?: string
  message: string
}

export async function POST(request: NextRequest) {
  try {
    const body: ContactPayload = await request.json()

    const { name, email, message } = body
    if (!name?.trim() || !email?.trim() || !message?.trim()) {
      return NextResponse.json(
        { error: 'Campos obrigatórios: nome, email e mensagem.' },
        { status: 400 },
      )
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(email)) {
      return NextResponse.json({ error: 'E-mail inválido.' }, { status: 400 })
    }

    // Log for now — wire up email (Resend / Nodemailer) or CRM here later
    console.log('[contact-form]', {
      timestamp: new Date().toISOString(),
      name,
      email,
      phone: body.phone,
      company: body.company,
      service: body.service,
      message,
    })

    return NextResponse.json({ success: true }, { status: 200 })
  } catch {
    return NextResponse.json({ error: 'Erro interno do servidor.' }, { status: 500 })
  }
}
