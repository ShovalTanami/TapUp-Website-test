"use client"

import { motion } from "framer-motion"
import { Code, Database, Cpu, Zap, Bot, Settings, Brain, Cloud } from "lucide-react"

export function FloatingIcons() {
  const icons = [
    { Icon: Code, delay: 0, x: "10%", y: "20%" },
    { Icon: Database, delay: 0.5, x: "80%", y: "15%" },
    { Icon: Cpu, delay: 1, x: "15%", y: "70%" },
    { Icon: Zap, delay: 1.5, x: "85%", y: "75%" },
    { Icon: Bot, delay: 2, x: "50%", y: "10%" },
    { Icon: Settings, delay: 2.5, x: "90%", y: "45%" },
    { Icon: Brain, delay: 3, x: "5%", y: "45%" },
    { Icon: Cloud, delay: 3.5, x: "70%", y: "85%" },
  ]

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {icons.map(({ Icon, delay, x, y }, index) => (
        <motion.div
          key={index}
          className="absolute opacity-10 dark:opacity-5"
          style={{ left: x, top: y }}
          initial={{ opacity: 0, scale: 0, rotate: 0 }}
          animate={{
            opacity: [0, 0.1, 0.05, 0.1],
            scale: [0, 1, 1.2, 1],
            rotate: [0, 180, 360],
            y: [0, -20, 0, -10, 0],
          }}
          transition={{
            duration: 8,
            delay,
            repeat: Number.POSITIVE_INFINITY,
            repeatType: "reverse",
            ease: "easeInOut",
          }}
        >
          <Icon className="w-8 h-8 text-purple-500" />
        </motion.div>
      ))}
    </div>
  )
}
