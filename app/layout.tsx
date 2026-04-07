import type { Metadata } from 'next'
import { Cinzel_Decorative, Cormorant_Garamond, Space_Mono } from 'next/font/google'
import './globals.css'

const cinzel = Cinzel_Decorative({
  subsets: ['latin'],
  weight: ['400', '700', '900'],
  variable: '--font-cinzel',
  display: 'swap',
})

const cormorant = Cormorant_Garamond({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  style: ['normal', 'italic'],
  variable: '--font-cormorant',
  display: 'swap',
})

const spaceMono = Space_Mono({
  subsets: ['latin'],
  weight: ['400', '700'],
  variable: '--font-mono',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Nefi.ink — Ramon Néfi | Tatuagem Anime & Blackwork',
  description:
    'Estúdio de tatuagem especializado em arte anime, manga e blackwork japonês por Ramon Néfi.',
  keywords: 'tatuagem, tattoo, anime, manga, blackwork, japonês, nefi.ink, ramon nefi',
  openGraph: {
    title: 'Nefi.ink — Ramon Néfi',
    description: 'Arte que vive na pele.',
    images: [{ url: '/image1.jpg' }],
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="pt-BR"
      className={`${cinzel.variable} ${cormorant.variable} ${spaceMono.variable}`}
    >
      <body>{children}</body>
    </html>
  )
}
