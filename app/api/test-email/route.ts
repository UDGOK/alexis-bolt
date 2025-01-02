import { NextResponse } from 'next/server'
import { Resend } from 'resend'
import { getEnvVar } from '@/app/lib/env'

export async function GET() {
  try {
    const resendApiKey = getEnvVar('RESEND_API_KEY')
    console.log('RESEND_API_KEY is set and retrieved successfully')

    const resend = new Resend(resendApiKey)

    const { data, error } = await resend.emails.send({
      from: 'Alexis Concrete and Asphalt <onboarding@resend.dev>',
      to: 'yasir@futonix.com',
      subject: 'Test Email',
      html: '<p>This is a test email from your Alexis Concrete and Asphalt website.</p>'
    })

    if (error) {
      console.error('Error sending test email:', error)
      return NextResponse.json({ success: false, error: 'Failed to send test email', details: error }, { status: 500 })
    }

    return NextResponse.json({ success: true, message: 'Test email sent successfully', emailId: data.id })
  } catch (error) {
    console.error('Error in test email route:', error)
    return NextResponse.json({ success: false, error: 'An unexpected error occurred', details: error }, { status: 500 })
  }
}
