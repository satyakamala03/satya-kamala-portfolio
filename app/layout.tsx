import type { Metadata } from 'next'
import { Poppins, Playfair_Display, Cormorant_Garamond, DM_Serif_Display, Dancing_Script } from 'next/font/google'
import './globals.css'

const poppins = Poppins({ 
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-poppins',
})

const playfair = Playfair_Display({ 
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800', '900'],
  variable: '--font-playfair',
})

const cormorant = Cormorant_Garamond({ 
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-cormorant',
})

const dmSerifDisplay = DM_Serif_Display({ 
  subsets: ['latin'],
  weight: ['400'],
  variable: '--font-dm-serif-display',
})

const dancingScript = Dancing_Script({ 
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-dancing-script',
})

export const metadata: Metadata = {
  title: 'Satya Kamala Immidisetty | Full Stack Developer | AI Enthusiast',
  description: 'Portfolio website of Satya Kamala Immidisetty - Full Stack Developer, AI Enthusiast, and Software Engineer',
  keywords: ['portfolio', 'full stack developer', 'software engineer', 'AI enthusiast', 'web developer'],
  authors: [{ name: 'Satya Kamala Immidisetty' }],
  openGraph: {
    title: 'Satya Kamala Immidisetty | Portfolio',
    description: 'Full Stack Developer | AI Enthusiast',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body className={`${poppins.variable} ${playfair.variable} ${cormorant.variable} ${dmSerifDisplay.variable} ${dancingScript.variable} ${poppins.className}`}>{children}</body>
    </html>
  )
}
