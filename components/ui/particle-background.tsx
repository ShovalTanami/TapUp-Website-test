"use client"

import { useEffect, useRef } from "react"
import { useTheme } from "next-themes"

export function ParticleBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const { theme } = useTheme()

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    const resizeCanvas = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }

    resizeCanvas()
    window.addEventListener("resize", resizeCanvas)

    // Reduce number of particles
    const particles: Array<{
      x: number
      y: number
      vx: number
      vy: number
      size: number
      opacity: number
    }> = []

    // Create fewer particles
    for (let i = 0; i < 30; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 0.2, // Slower movement
        vy: (Math.random() - 0.5) * 0.2, // Slower movement
        size: Math.random() * 1.5 + 0.5, // Smaller particles
        opacity: Math.random() * 0.3 + 0.1, // Lower opacity
      })
    }

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      particles.forEach((particle, index) => {
        // Update position
        particle.x += particle.vx
        particle.y += particle.vy

        // Bounce off edges
        if (particle.x < 0 || particle.x > canvas.width) particle.vx *= -1
        if (particle.y < 0 || particle.y > canvas.height) particle.vy *= -1

        // Draw particle
        ctx.beginPath()
        ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2)

        // Use theme-appropriate colors
        const particleColor = theme === "dark" ? "rgba(120, 50, 255, " : "rgba(90, 30, 200, "
        ctx.fillStyle = `${particleColor}${particle.opacity})`
        ctx.fill()

        // Draw connections - fewer connections
        particles.slice(index + 1).forEach((otherParticle) => {
          const dx = particle.x - otherParticle.x
          const dy = particle.y - otherParticle.y
          const distance = Math.sqrt(dx * dx + dy * dy)

          // Increase distance threshold for connections
          if (distance < 120) {
            ctx.beginPath()
            ctx.moveTo(particle.x, particle.y)
            ctx.lineTo(otherParticle.x, otherParticle.y)

            // Use theme-appropriate colors with lower opacity
            const lineColor = theme === "dark" ? "rgba(120, 50, 255, " : "rgba(90, 30, 200, "
            ctx.strokeStyle = `${lineColor}${0.05 * (1 - distance / 120)})`
            ctx.lineWidth = 0.3
            ctx.stroke()
          }
        })
      })

      requestAnimationFrame(animate)
    }

    animate()

    return () => {
      window.removeEventListener("resize", resizeCanvas)
    }
  }, [theme])

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 pointer-events-none opacity-20 dark:opacity-30"
      style={{ zIndex: 1 }}
    />
  )
}
