"use client"

import type React from "react"

import { useEffect } from "react"
import { motion, useAnimation, useScroll, useTransform } from "framer-motion"
import { useInView } from "react-intersection-observer"

// Fade in animation for sections
export function FadeIn({
  children,
  delay = 0,
  direction = null,
  distance = 50,
  duration = 0.8,
  className = "",
  once = true,
}: {
  children: React.ReactNode
  delay?: number
  direction?: "up" | "down" | "left" | "right" | null
  distance?: number
  duration?: number
  className?: string
  once?: boolean
}) {
  const controls = useAnimation()
  const [ref, inView] = useInView({
    triggerOnce: once,
    threshold: 0.1,
  })

  useEffect(() => {
    if (inView) {
      controls.start("visible")
    }
  }, [controls, inView])

  // Set initial and animate values based on direction
  let initial = { opacity: 0 }
  if (direction === "up") initial = { ...initial, y: distance }
  if (direction === "down") initial = { ...initial, y: -distance }
  if (direction === "left") initial = { ...initial, x: distance }
  if (direction === "right") initial = { ...initial, x: -distance }

  let animate = { opacity: 1 }
  if (direction === "up" || direction === "down") animate = { ...animate, y: 0 }
  if (direction === "left" || direction === "right") animate = { ...animate, x: 0 }

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={controls}
      variants={{
        hidden: initial,
        visible: {
          ...animate,
          transition: {
            duration: duration,
            delay: delay,
            ease: [0.22, 1, 0.36, 1],
          },
        },
      }}
      className={className}
    >
      {children}
    </motion.div>
  )
}

// Parallax effect for images and backgrounds
export function Parallax({
  children,
  speed = 0.5,
  className = "",
}: {
  children: React.ReactNode
  speed?: number
  className?: string
}) {
  const { scrollYProgress } = useScroll()
  const y = useTransform(scrollYProgress, [0, 1], [0, speed * 100])

  return (
    <motion.div style={{ y }} className={className}>
      {children}
    </motion.div>
  )
}

// Staggered animation for lists
export function StaggerContainer({
  children,
  delay = 0.1,
  staggerDelay = 0.1,
  className = "",
}: {
  children: React.ReactNode
  delay?: number
  staggerDelay?: number
  className?: string
}) {
  const controls = useAnimation()
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  useEffect(() => {
    if (inView) {
      controls.start("visible")
    }
  }, [controls, inView])

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={controls}
      variants={{
        hidden: {},
        visible: {
          transition: {
            staggerChildren: staggerDelay,
            delayChildren: delay,
          },
        },
      }}
      className={className}
    >
      {children}
    </motion.div>
  )
}

// Stagger item for use with StaggerContainer
export function StaggerItem({
  children,
  direction = "up",
  distance = 20,
  className = "",
}: {
  children: React.ReactNode
  direction?: "up" | "down" | "left" | "right"
  distance?: number
  className?: string
}) {
  // Set initial and animate values based on direction
  let initial = { opacity: 0 }
  if (direction === "up") initial = { ...initial, y: distance }
  if (direction === "down") initial = { ...initial, y: -distance }
  if (direction === "left") initial = { ...initial, x: distance }
  if (direction === "right") initial = { ...initial, x: -distance }

  let animate = { opacity: 1 }
  if (direction === "up" || direction === "down") animate = { ...animate, y: 0 }
  if (direction === "left" || direction === "right") animate = { ...animate, x: 0 }

  return (
    <motion.div
      variants={{
        hidden: initial,
        visible: {
          ...animate,
          transition: {
            duration: 0.6,
            ease: [0.22, 1, 0.36, 1],
          },
        },
      }}
      className={className}
    >
      {children}
    </motion.div>
  )
}

// Text reveal animation
export function TextReveal({
  children,
  delay = 0,
  className = "",
}: {
  children: React.ReactNode
  delay?: number
  className?: string
}) {
  const controls = useAnimation()
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  useEffect(() => {
    if (inView) {
      controls.start("visible")
    }
  }, [controls, inView])

  return (
    <motion.div ref={ref} className={`relative overflow-hidden ${className}`}>
      <motion.div
        initial="hidden"
        animate={controls}
        variants={{
          hidden: { y: "100%" },
          visible: {
            y: 0,
            transition: {
              duration: 0.8,
              delay: delay,
              ease: [0.22, 1, 0.36, 1],
            },
          },
        }}
      >
        {children}
      </motion.div>
    </motion.div>
  )
}

// Smooth scroll progress indicator
export function ScrollProgress() {
  const { scrollYProgress } = useScroll()

  return (
    <motion.div
      className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-purple-600 to-blue-600 z-50 origin-left"
      style={{ scaleX: scrollYProgress }}
    />
  )
}
