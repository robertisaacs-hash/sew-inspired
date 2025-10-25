import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { Providers } from './providers'
import { Header } from '@/components/layout/Header'
import { Footer } from '@/components/layout/Footer'
import { Toaster } from 'react-hot-toast'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Sew Inspired Embroidery and More | Custom Embroidery Services',
  description: 'Professional embroidery services with custom design capabilities. Upload your design and see it on our products before you buy.',
  keywords: 'embroidery, custom embroidery, apparel, clothing, personalized, designs',
  authors: [{ name: 'Sew Inspired Embroidery' }],
  openGraph: {
    title: 'Sew Inspired Embroidery and More',
    description: 'Professional embroidery services with custom design capabilities',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Providers>
          <div className="min-h-screen flex flex-col">
            <Header />
            <main className="flex-1">
              {children}
            </main>
            <Footer />
          </div>
          <Toaster 
            position="top-right"
            toastOptions={{
              duration: 4000,
              style: {
                background: '#363636',
                color: '#fff',
              },
            }}
          />
        </Providers>
      </body>
    </html>
  )
}