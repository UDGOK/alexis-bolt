import React from 'react'

interface LocalBusinessSchemaProps {
  name: string
  description: string
  telephone: string
  address: {
    streetAddress: string
    addressLocality: string
    addressRegion: string
    postalCode: string
  }
  geo: {
    latitude: number
    longitude: number
  }
  url: string
  image: string
  priceRange: string
  openingHours: string[]
}

export function LocalBusinessSchema({
  name,
  description,
  telephone,
  address,
  geo,
  url,
  image,
  priceRange,
  openingHours
}: LocalBusinessSchemaProps) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name,
    description,
    telephone,
    address: {
      "@type": "PostalAddress",
      ...address
    },
    geo: {
      "@type": "GeoCoordinates",
      ...geo
    },
    url,
    image,
    priceRange,
    openingHours
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  )
}