"use client"

import { useTranslation } from "react-i18next"
import { ChevronLeft, ChevronRight, ArrowLeft, ArrowRight, type LucideIcon } from "lucide-react"

type DirectionalIconProps = {
  type: "chevron" | "arrow"
  direction: "next" | "previous"
  className?: string
  size?: number
}

/**
 * A component that renders directional icons (arrows, chevrons) that automatically
 * adjust their direction based on the current language direction (RTL/LTR)
 */
export function DirectionalIcon({ type, direction, className = "", size = 16 }: DirectionalIconProps) {
  const { i18n } = useTranslation()
  const isRTL = i18n.language === "he"

  // בעברית (RTL) הופכים את הכיוונים
  const actualDirection = isRTL ? (direction === "next" ? "previous" : "next") : direction

  // בוחרים את האייקון המתאים בהתאם לסוג ולכיוון
  let Icon: LucideIcon

  if (type === "chevron") {
    Icon = actualDirection === "next" ? ChevronRight : ChevronLeft
  } else {
    Icon = actualDirection === "next" ? ArrowRight : ArrowLeft
  }

  return <Icon className={className} size={size} />
}
