import { NextResponse } from 'next/server'
import { Resend } from 'resend'

const resend = process.env.RESEND_API_KEY 
  ? new Resend(process.env.RESEND_API_KEY)
  : null

export async function GET() {
  if (!resend) {
    return NextResponse.json({ success: false, error: 'Resend API key is missing' }, { status: 500 })
  }

  try {
    const data = await resend.emails.send({
      from: 'Alexis Concrete and Asphalt <onboarding@resend.dev>',
      to: 'yasir@futonix.com',
      subject: 'Test Email',
      html: '<p>This is a test email from your Alexis Concrete and Asphalt website.</p>'
    })

    return NextResponse.json({ success: true, data })
  } catch (error) {
    return NextResponse.json({ success: false, error: 'Failed to send test email' }, { status: 500 })
  }
}
