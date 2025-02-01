import { Oswald, Inter } from 'next/font/google'

export const primaryFont = Oswald({
  subsets: ['latin'],
  weight: ['400', '500', '700'],
  display: 'swap',
  variable: '--font-primary',
})

export const secondaryFont = Inter({
  subsets: ['latin'],
  weight: ['400', '500', '600'],
  display: 'swap',
  variable: '--font-secondary',
})
