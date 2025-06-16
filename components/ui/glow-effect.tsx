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
  const [effectiveGlowSize, setEffectiveGlowSize] = useState(glowSize)

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

  useEffect(() => {
    const updateGlowSize = () => {
      if (containerRef.current) {
        const { clientWidth, clientHeight } = containerRef.current
        // Calculate a responsive glow size based on the smaller dimension of the container
        // Clamp it between a minimum (e.g., 100px) and the provided glowSize prop (as max)
        const calculatedSize = Math.min(clientWidth, clientHeight) * 0.8 // 80% of the smaller dimension
        setEffectiveGlowSize(Math.max(100, Math.min(glowSize, calculatedSize)))
      }
    }

    updateGlowSize() // Set initial size
    window.addEventListener("resize", updateGlowSize) // Update on resize

    return () => window.removeEventListener("resize", updateGlowSize)
  }, [glowSize])

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
          background: `radial-gradient(${effectiveGlowSize}px circle at ${position.x}px ${position.y}px, ${isDarkMode ? darkGlowColor : glowColor}, transparent)`,
          opacity: isHovered ? glowOpacity : 0,
        }}
        animate={{ opacity }}
        transition={{ duration: 0.2 }}
      />
      {children}
    </div>
  )
}
