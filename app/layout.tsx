import type { Metadata } from "next"
import { DM_Sans, Libre_Baskerville, Oswald } from "next/font/google"
import "./globals.css"

const dmSans = DM_Sans({
  variable: "--font-dmsans",
  subsets: ["latin"],
  weight: ["400", "500", "700"],
})

const libreBaskerville = Libre_Baskerville({
  variable: "--font-librebaskerville",
  subsets: ["latin"],
  weight: ["400", "700"],
})
const oswald = Oswald({
  variable: "--font-oswald",
  subsets: ["latin"],
  weight: ["200", "300", "400", "500", "600", "700"],
})

export const metadata: Metadata = {
  title: "Tayler Burke - PSWE",
  description:
    "Portfolio website for Tayler Burke, a product-minded software engineer with a passion for building products that provide true value to real people.",
  icons: {
    icon: "/favicon.ico",
  },
  openGraph: {
    title: "Tayler Burke - PSWE",
    description:
      "Portfolio website for Tayler Burke, a product-minded software engineer with a passion for building products that provide true value to real people.",
  },
  keywords: [
    "Tayler Burke",
    "Product-minded software engineer",
    "Building products that provide true value to real people",
    "Software engineer",
    "Software developer",
    "Product engineer",
    "Product developer",
    "Product manager",
    "Product owner",
    "Product analyst",
    "Product",
    "Product design",
  ],
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body
        className={`${dmSans.variable} ${libreBaskerville.variable} ${oswald.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  )
}
