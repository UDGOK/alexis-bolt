import { NextResponse } from 'next/server'
import { Resend } from 'resend'
import { getEnvVar } from '@/app/lib/env'

// Define interface for email response
interface EmailResponse {
  data?: {
    id: string;
  } | null;
  error?: any;
}

export async function POST() {
  try {
    const resendApiKey = getEnvVar('RESEND_API_KEY')
    const resend = new Resend(resendApiKey)

    const response: EmailResponse = await resend.emails.send({
      from: 'Alexis Concrete and Asphalt <onboarding@resend.dev>',
      to: 'yasir@futonix.com',
      subject: 'Test Email',
      html: '<p>This is a test email from your website.</p>',
    })

    if (response.error) {
      console.error('Error sending test email:', response.error)
      return NextResponse.json(
        { success: false, error: 'Failed to send test email' },
        { status: 500 }
      )
    }

    if (!response.data) {
      return NextResponse.json(
        { success: false, error: 'No email data received' },
        { status: 500 }
      )
    }

    return NextResponse.json({
      success: true,
      message: 'Test email sent successfully',
      emailId: response.data?.id ?? 'unknown'
    })

  } catch (error) {
    console.error('Error in test email route:', error)
    return NextResponse.json(
      { 
        success: false, 
        error: 'An unexpected error occurred', 
        details: error 
      }, 
      { status: 500 }
    )
  }
}
