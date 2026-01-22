import type React from "react"
import type { Metadata, Viewport } from "next"
import { Inter, Geist_Mono } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"

const _inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
})
const _geistMono = Geist_Mono({
  subsets: ["latin"],
  display: "swap",
})

export const metadata: Metadata = {
  title: "ASSAP COMPANY LIMITED | Industrial & Mining Solutions Tanzania",
  description:
    "Professional industrial, mining and general supply company in Tanzania. Providing integrated services including industrial supply, construction support, workforce deployment, and HSE services.",
  keywords: [
    "industrial supply",
    "mining supply",
    "Tanzania",
    "construction",
    "safety equipment",
    "PPE",
    "heavy equipment",
    "ASSAP COMPANY LIMITED",
  ],
  authors: [{ name: "ASSAP COMPANY LIMITED" }],
  generator: "v0.app",
  icons: {
    icon: [
      {
        url: "/images/img-5438-removebg-preview.png",
        sizes: "any",
      },
    ],
    apple: "/images/img-5438-removebg-preview.png",
  },
}

export const viewport: Viewport = {
  themeColor: "#0B3C5D",
  width: "device-width",
  initialScale: 1,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className="font-sans antialiased">
        {children}
        <Analytics />
      </body>
    </html>
  )
}
