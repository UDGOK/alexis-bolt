import { list } from '@vercel/blob'
import { NextResponse } from 'next/server'
import { Resend } from 'resend'
import { getEnvVar } from '@/app/lib/env'

// Define types for better type safety
interface EmailResponse {
  data?: {
    id: string;
  } | null;
  error?: any;
}

export async function GET() {
  try {
    const resendApiKey = getEnvVar('RESEND_API_KEY')
    const resend = new Resend(resendApiKey)

    const date = new Date().toISOString().split('T')[0]
    const { blobs } = await list({ prefix: `subscriptions/${date}/` })

    const emails = blobs.map(blob => blob.pathname.split('/').pop()!.replace('.txt', ''))

    const emailContent = `
      <h1>Daily Newsletter Subscription Summary</h1>
      <p>New subscribers for ${date}:</p>
      <ul>
        ${emails.map(email => `<li>${email}</li>`).join('')}
      </ul>
    `

    if (emails.length > 0) {
      const response: EmailResponse = await resend.emails.send({
        from: 'Alexis Concrete and Asphalt <onboarding@resend.dev>',
        to: 'yasir@futonix.com',
        subject: `Daily Newsletter Subscription Summary - ${date}`,
        html: emailContent,
      })

      if (response.error) {
        console.error('Error sending email:', response.error)
        return NextResponse.json(
          { success: false, error: 'Failed to send email' },
          { status: 500 }
        )
      }

      return NextResponse.json({
        success: true,
        count: emails.length,
        emailId: response.data?.id ?? 'unknown'
      })
    } else {
      console.log('No new subscribers today')
      return NextResponse.json({
        success: true,
        count: 0,
        message: 'No new subscribers today.'
      })
    }
  } catch (error) {
    console.error('Error processing daily summary:', error)
    return NextResponse.json(
      { success: false, error: 'Failed to process daily summary' },
      { status: 500 }
    )
  }
}
