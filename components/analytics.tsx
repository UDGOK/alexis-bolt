'use client'

export function Analytics() {
  return (
    <script
      dangerouslySetInnerHTML={{
        __html: `
          // Add your analytics code here
        `,
      }}
    />
  )
}
