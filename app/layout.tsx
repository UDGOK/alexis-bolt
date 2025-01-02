import './globals.css'
import { font } from './fonts'
import { Navigation } from '@/components/navigation'
import { Footer } from '@/components/footer'
import { AnnouncementBanner } from '@/components/announcement-banner'
import { validateEnv } from './lib/env'

export const metadata = {
  title: 'Alexis Concrete and Asphalt',
  description: 'Professional concrete and asphalt services for commercial and residential projects',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const { isValid, missingEnvVars } = validateEnv()
  return (
    <html lang="en" className={`scroll-smooth ${font.variable}`}>
      <body className="min-h-screen antialiased font-sans">
        {!isValid && (
          <div className="bg-red-500 text-white p-4 text-center">
            Warning: Some required environment variables are missing: {missingEnvVars.join(', ')}. 
            Please check your configuration. If you've recently added these variables, you may need to redeploy your application.
          </div>
        )}
        <AnnouncementBanner />
        <Navigation />
        {children}
        <Footer />
      </body>
    </html>
  )
}
