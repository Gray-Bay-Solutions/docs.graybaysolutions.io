import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { ThemeProvider } from '@/components/theme-provider'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Gray Bay Solutions - Documentation Hub',
  description: 'Professional documentation website for Gray Bay Solutions services and APIs',
  keywords: ['documentation', 'API', 'guides', 'Gray Bay Solutions'],
  authors: [{ name: 'Gray Bay Solutions' }],
  openGraph: {
    title: 'Gray Bay Solutions - Documentation Hub',
    description: 'Professional documentation website for Gray Bay Solutions services and APIs',
    url: 'https://docs.graybaysolutions.io',
    siteName: 'Gray Bay Solutions Docs',
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Gray Bay Solutions - Documentation Hub',
    description: 'Professional documentation website for Gray Bay Solutions services and APIs',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
} 