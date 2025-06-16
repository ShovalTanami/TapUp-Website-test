import type React from "react"
import type { Metadata } from "next"
import { Heebo } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/providers/theme-provider"
import { Header } from "@/components/layout/header"
import { Footer } from "@/components/layout/footer"
import { ScrollToTop } from "@/components/ui/scroll-to-top"

const heebo = Heebo({
  subsets: ["hebrew", "latin"],
  variable: "--font-heebo",
})

export const metadata: Metadata = {
  title: "TapUp - פתרונות טכנולוגיים מתקדמים",
  description: "אוטומציה, פיתוח מותאם אישית וסוכני AI לעסקים. TapUp מובילה בחדשנות טכנולוגית בישראל.",
  keywords: "אוטומציה, פיתוח תוכנה, AI, סוכני בינה מלאכותית, פתרונות טכנולוגיים",
  authors: [{ name: "TapUp" }],
  openGraph: {
    title: "TapUp - פתרונות טכנולוגיים מתקדמים",
    description: "אוטומציה, פיתוח מותאם אישית וסוכני AI לעסקים",
    type: "website",
    locale: "he_IL",
  },
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="he" dir="rtl" suppressHydrationWarning>
      <body className={`${heebo.variable} font-sans antialiased`}>
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem disableTransitionOnChange>
          <div className="relative flex min-h-screen flex-col">
            <Header />
            <main className="flex-1">{children}</main>
            <Footer />
            <ScrollToTop />
          </div>
        </ThemeProvider>
      </body>
    </html>
  )
}
