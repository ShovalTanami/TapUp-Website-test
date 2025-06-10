import type React from "react"
import type { Metadata } from "next"
import { Heebo } from "next/font/google"
import "./globals.css"
import { I18nProvider } from "@/components/providers/i18n-provider"
import { ThemeProvider } from "@/components/providers/theme-provider"
import Header from "@/components/layout/header"
import Footer from "@/components/layout/footer"

const heebo = Heebo({
  subsets: ["latin", "hebrew"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
  display: "swap",
})

export const metadata: Metadata = {
  title: "TapUp - Smart Technology Solutions",
  description:
    "TapUp provides smart technological solutions for businesses including automation, custom systems, and AI integration.",
  generator: "v0.dev",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="he" suppressHydrationWarning>
      <body className={heebo.className}>
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem disableTransitionOnChange={false}>
          <I18nProvider>
            <Header />
            <main>{children}</main>
            <Footer />
          </I18nProvider>
        </ThemeProvider>
      </body>
    </html>
  )
}
