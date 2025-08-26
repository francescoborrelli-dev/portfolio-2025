import { NextRequest, NextResponse } from 'next/server'

export async function POST(request: NextRequest) {
  try {
    const { name, email, message } = await request.json()

    // Basic validation
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: 'Tutti i campi sono obbligatori' },
        { status: 400 }
      )
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: 'Email non valida' },
        { status: 400 }
      )
    }

    // Here you would typically send the email
    // For now, we'll just log it and return success
    console.log('Contact form submission:', { name, email, message })

    // In a real implementation, you might use:
    // - SendGrid
    // - Resend
    // - Nodemailer
    // - Or any other email service

    return NextResponse.json({
      success: true,
      message: 'Messaggio inviato con successo! Ti risponderò presto.'
    })

  } catch (error) {
    console.error('Contact form error:', error)
    return NextResponse.json(
      { error: 'Errore interno del server' },
      { status: 500 }
    )
  }
}
