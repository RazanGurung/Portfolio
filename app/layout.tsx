import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Rajan Gurung - Data Scientist & ML Engineer',
  description: 'Data Scientist and ML Engineer with 4+ years of experience developing AI-driven solutions, NLP pipelines, and big data applications. Skilled in deploying ML models into production, optimizing pipelines at scale, and delivering measurable business impact.',
  keywords: 'Data Scientist, ML Engineer, Machine Learning, Python, AWS, Big Data, NLP, Deep Learning',
  authors: [{ name: 'Rajan Gurung' }],
  openGraph: {
    title: 'Rajan Gurung - Data Scientist & ML Engineer',
    description: 'Data Scientist and ML Engineer specializing in AI-driven solutions and production ML systems.',
    type: 'website',
    locale: 'en_US',
    images: [
      {
        url: '/og.png',
        width: 1200,
        height: 630,
        alt: 'Rajan Gurung Portfolio',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Rajan Gurung - Data Scientist & ML Engineer',
    description: 'Data Scientist and ML Engineer specializing in AI-driven solutions and production ML systems.',
    images: ['/og.png'],
  },
  robots: {
    index: true,
    follow: true,
  },
  viewport: {
    width: 'device-width',
    initialScale: 1,
  }
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <meta name="theme-color" content="#000000" />
      </head>
      <body className={`${inter.className} antialiased`} suppressHydrationWarning>
        <div className="min-h-screen bg-background">
          {children}
        </div>
      </body>
    </html>
  )
}