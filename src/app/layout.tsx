

import type { Metadata, Viewport } from 'next'
import { Be_Vietnam_Pro } from 'next/font/google'
import './globals.css'
import React from 'react';
import { DESCRIPTION, TITLE } from '@/util/constants';

const beVietnamPro = Be_Vietnam_Pro({
    weight: ['100', '300', '400', '500', '700'],
    subsets: ['latin'],
});

export const metadata: Metadata = {
    metadataBase: new URL("https://cdn.taembo.net"),
    title: TITLE,
    icons: "https://cdn.taembo.net/favicon.ico",
    description: DESCRIPTION,
    twitter: {},
    openGraph: {
        images: {
            url: "https://cdn.taembo.net/pfp.png",
            type: "image/png",
        }
    },
}

export const viewport: Viewport = {
    themeColor: "#4023fc",
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
