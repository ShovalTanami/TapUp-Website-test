"use client"

import type React from "react"

import { useRef } from "react"
import { motion, useScroll, useTransform, useSpring, useInView } from "framer-motion"

export function FadeIn({
  children,
  delay = 0,
  direction = "up",
  className = "",
  threshold = 0.1,
  duration = 0.5,
  distance = 50,
}: {
  children: React.ReactNode
  delay?: number
  direction?: "up" | "down" | "left" | "right" | "none"
  className?: string
  threshold?: number
  duration?: number
  distance?: number
}) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: threshold })

  let initialX = 0
  let initialY = 0

  switch (direction) {
    case "up":
      initialY = distance
      break
    case "down":
      initialY = -distance
      break
    case "left":
      initialX = distance
      break
    case "right":
      initialX = -distance
      break
  }

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x: initialX, y: initialY }}
      animate={isInView ? { opacity: 1, x: 0, y: 0 } : { opacity: 0, x: initialX, y: initialY }}
      transition={{ duration, delay, ease: "easeOut" }}
      className={className}
    >
      {children}
    </motion.div>
  )
}

export function TextReveal({
  children,
  delay = 0,
  className = "",
  threshold = 0.1,
  duration = 0.5,
}: {
  children: React.ReactNode
  delay?: number
  className?: string
  threshold?: number
  duration?: number
}) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: threshold })

  return (
    <div ref={ref} className={`relative overflow-hidden ${className}`}>
      <motion.div
        initial={{ y: "100%" }}
        animate={isInView ? { y: 0 } : { y: "100%" }}
        transition={{ duration, delay, ease: "easeOut" }}
      >
        {children}
      </motion.div>
    </div>
  )
}

export function Parallax({
  children,
  speed = 0.5,
  className = "",
}: {
  children: React.ReactNode
  speed?: number
  className?: string
}) {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  })

  const y = useTransform(scrollYProgress, [0, 1], [0, speed * 100])

  return (
    <motion.div ref={ref} style={{ y }} className={className}>
      {children}
    </motion.div>
  )
}

export function StaggerContainer({
  children,
  className = "",
  delay = 0.1,
}: {
  children: React.ReactNode
  className?: string
  delay?: number
}) {
  return (
    <motion.div
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.1 }}
      variants={{
        visible: {
          transition: {
            staggerChildren: delay,
          },
        },
      }}
    >
      {children}
    </motion.div>
  )
}

export function StaggerItem({
  children,
  className = "",
  duration = 0.5,
  distance = 50,
}: {
  children: React.ReactNode
  className?: string
  duration?: number
  distance?: number
}) {
  return (
    <motion.div
      className={className}
      variants={{
        hidden: { opacity: 0, y: distance },
        visible: {
          opacity: 1,
          y: 0,
          transition: {
            duration,
            ease: "easeOut",
          },
        },
      }}
    >
      {children}
    </motion.div>
  )
}

export function ScrollProgress() {
  const { scrollYProgress } = useScroll()
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  })

  return (
    <motion.div
      className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-purple-600 to-blue-600 origin-left z-50"
      style={{ scaleX }}
    />
  )
}
