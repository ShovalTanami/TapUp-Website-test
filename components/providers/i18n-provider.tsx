"use client"

import type React from "react"

import { useEffect } from "react"
import i18n from "@/lib/i18n"
import { I18nextProvider } from "react-i18next"

export function I18nProvider({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    // Set initial direction based on language
    const currentLang = i18n.language || "he" // Change from "en" to "he"
    document.documentElement.dir = currentLang === "he" ? "rtl" : "ltr"
    document.documentElement.lang = currentLang
  }, [])

  return <I18nextProvider i18n={i18n}>{children}</I18nextProvider>
}
