

import type { Metadata } from 'next'
import { Be_Vietnam_Pro } from 'next/font/google'
import './globals.css'

const beVietnamPro = Be_Vietnam_Pro({
    weight: ['100', '300', '400', '500', '700'],
    subsets: ['latin'],
})

export const metadata: Metadata = {
  title: 'TÆMBØ',
  icons: "https://cdn.taembo.net/favicon.ico"
}

export const viewport = {
    width: 'device-width',
    initialScale: 1,
    minimumScale: 1,
}


export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={beVietnamPro.className}>{children}</body>
    </html>
  )
}
