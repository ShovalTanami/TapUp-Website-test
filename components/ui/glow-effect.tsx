"use client"

import type React from "react"

import { useRef, useState, useEffect } from "react"
import { motion } from "framer-motion"

export function GlowEffect({
  children,
  className = "",
  glowColor = "rgba(120, 50, 255, 0.4)",
  darkGlowColor = "rgba(120, 50, 255, 0.3)",
  glowSize = 300,
  glowOpacity = 0.6,
  disabled = false,
}: {
  children: React.ReactNode
  className?: string
  glowColor?: string
  darkGlowColor?: string
  glowSize?: number
  glowOpacity?: number
  disabled?: boolean
}) {
  const containerRef = useRef<HTMLDivElement>(null)
  const [position, setPosition] = useState({ x: 0, y: 0 })
  const [opacity, setOpacity] = useState(0)
  const [isHovered, setIsHovered] = useState(false)
  const [isDarkMode, setIsDarkMode] = useState(false)

  // Check for dark mode
  useEffect(() => {
    const isDark = document.documentElement.classList.contains("dark")
    setIsDarkMode(isDark)

    const observer = new MutationObserver((mutations) => {
      mutations.forEach((mutation) => {
        if (mutation.attributeName === "class") {
          const isDark = document.documentElement.classList.contains("dark")
          setIsDarkMode(isDark)
        }
      })
    })

    observer.observe(document.documentElement, { attributes: true })
    return () => observer.disconnect()
  }, [])

  // Skip effect if disabled
  if (disabled) {
    return <div className={className}>{children}</div>
  }

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!containerRef.current) return

    const rect = containerRef.current.getBoundingClientRect()
    const x = e.clientX - rect.left
    const y = e.clientY - rect.top

    setPosition({ x, y })
    setOpacity(1)
  }

  const handleMouseEnter = () => {
    setIsHovered(true)
    setOpacity(1)
  }

  const handleMouseLeave = () => {
    setIsHovered(false)
    setOpacity(0)
  }

  return (
    <div
      ref={containerRef}
      className={`relative overflow-hidden ${className}`}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <motion.div
        className="pointer-events-none absolute -inset-px rounded-[inherit] opacity-0"
        style={{
          background: `radial-gradient(${glowSize}px circle at ${position.x}px ${position.y}px, ${isDarkMode ? darkGlowColor : glowColor}, transparent)`,
          opacity: isHovered ? glowOpacity : 0,
        }}
        animate={{ opacity }}
        transition={{ duration: 0.2 }}
      />
      {children}
    </div>
  )
}
