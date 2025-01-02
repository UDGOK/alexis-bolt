'use server'

import { put } from '@vercel/blob'
import { Resend } from 'resend'

const resend = new Resend(process.env.RESEND_API_KEY)

export async function subscribeToNewsletter(email: string) {
  if (!process.env.BLOB_READ_WRITE_TOKEN) {
    console.error('BLOB_READ_WRITE_TOKEN is not set')
    return { success: false, error: 'Newsletter subscription is currently unavailable' }
  }

  try {
    // Store the email in Vercel Blob
    const date = new Date().toISOString().split('T')[0]
    const filename = `subscriptions/${date}/${email}.txt`
    
    const blob = await put(filename, email, {
      access: 'public',
    })

    // Send welcome email using Resend
    if (process.env.RESEND_API_KEY) {
      try {
        await resend.emails.send({
          from: 'Alexis Concrete and Asphalt <onboarding@resend.dev>',
          to: email,
          subject: 'Welcome to AC&A Newsletter',
          html: `
            <h1>Welcome to the AC&A Newsletter!</h1>
            <p>Thank you for subscribing to our newsletter. We're excited to keep you updated with our latest news, insights, and developments in concrete and asphalt solutions.</p>
            <p>You'll receive our updates directly to this email address.</p>
            <br>
            <p>Best regards,</p>
            <p>The AC&A Team</p>
          `
        })
      } catch (emailError) {
        console.error('Error sending welcome email:', emailError)
        // Continue execution even if email fails
      }
    }

    console.log('Subscription successful:', blob.url)
    return { success: true, message: `Subscription added for ${email}` }
  } catch (error) {
    console.error('Error subscribing to newsletter:', error)
    return { success: false, error: error instanceof Error ? error.message : 'An unknown error occurred' }
  }
}
