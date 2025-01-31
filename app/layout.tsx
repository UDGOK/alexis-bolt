import './globals.css'
import { font } from './fonts'
import { Navigation } from "../components/navigation"
import { Footer } from "../components/footer"
import { AnnouncementBanner } from "../components/announcement-banner"
import { LocalBusinessSchema } from "../components/local-business-schema"
import { validateEnv } from './lib/env'
import { Metadata } from 'next'

const locations = [
  'Tulsa', 'Bixby', 'Owasso', 'Stillwater', 'Jenks', 'Enid', 'Broken Arrow', 'Haskell'
]

const keywords = [
  'asphalt sealer', 'asphalt coating', 'parking lot asphalt', 'asphalt wholesale',
  'concrete services', 'asphalt services', 'resurfacing', 'building erection'
]

export const metadata: Metadata = {
  title: 'Alexis Concrete and Asphalt | Professional Services in Tulsa Area',
  description: `Expert concrete and asphalt services including ${keywords.join(', ')} in ${locations.join(', ')} and surrounding areas. Quality workmanship for commercial and residential projects.`,
  keywords: [...keywords, ...locations].join(', '),
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://www.alexisconcreteandasphalttulsa.com/',
    siteName: 'Alexis Concrete and Asphalt',
  },
  other: {
    'geo.region': 'US-OK',
    'geo.placename': 'Tulsa',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const { isValid, missingEnvVars } = validateEnv()
  return (
    <html lang="en" className={`scroll-smooth ${font.variable}`}>
      <body className={`min-h-screen antialiased ${font.variable} font-primary`}>
        <LocalBusinessSchema
          name="Alexis Concrete and Asphalt"
          description="Expert concrete and asphalt services in Tulsa and surrounding areas. Quality workmanship for commercial and residential projects."
          telephone="918.861.6776"
          address={{
            streetAddress: "123 Main St",
            addressLocality: "Tulsa",
            addressRegion: "OK",
            postalCode: "74103"
          }}
          geo={{
            latitude: 36.1540,
            longitude: -95.9928
          }}
          url="https://www.alexisconcreteandasphalttulsa.com/"
          image="/images/alexis-logo-new.png"
          priceRange="$$"
          openingHours={[
            "Mo-Fr 08:00-17:00",
            "Sa 09:00-13:00"
          ]}
        />
        {!isValid && (
          <div className="bg-red-500 text-white p-4 text-center">
            Warning: Some required environment variables are missing: {missingEnvVars.join(', ')}.
            Please check your configuration. If you've recently added these variables, you may need to redeploy your application.
          </div>
        )}
        <AnnouncementBanner />
        <Navigation />
        <main className="pt-[calc(6rem+32px)]"> {/* Adjust this value based on your navigation height */}
          {children}
        </main>
        <Footer />
      </body>
    </html>
  )
}
