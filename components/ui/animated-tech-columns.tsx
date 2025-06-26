"use client"

import { useEffect, useState } from "react"
import { motion } from "framer-motion"
import {
  Code,
  Database,
  Cloud,
  Globe,
  Cpu,
  Layers,
  GitBranch,
  Workflow,
  Brain,
  FileCode,
  Server,
  Shield,
  Settings,
  Monitor,
  Lock,
  Rocket,
} from "lucide-react"
import Link from "next/link"
import { ArrowLeft } from "lucide-react"
import { BaseButton } from "@/components/ui/base-button"

const techItems = [
  { icon: Code, name: "React", color: "text-blue-500" },
  { icon: Globe, name: "Next.js", color: "text-gray-700" },
  { icon: FileCode, name: "TypeScript", color: "text-blue-600" },
  { icon: FileCode, name: "JavaScript", color: "text-purple-500" },
  { icon: Code, name: "Angular", color: "text-indigo-600" },
  { icon: Cpu, name: "Java", color: "text-blue-600" },
  { icon: Cpu, name: "Python", color: "text-blue-700" },
  { icon: Server, name: "Node.js", color: "text-green-600" },
  { icon: Workflow, name: "n8n", color: "text-blue-500" },
  { icon: Workflow, name: "Make", color: "text-indigo-600" },
  { icon: Workflow, name: "Zapier", color: "text-purple-500" },
  { icon: Cloud, name: "AWS", color: "text-orange-500" },
  { icon: Cloud, name: "GCP", color: "text-blue-500" },
  { icon: Database, name: "MongoDB", color: "text-green-500" },
  { icon: Database, name: "PostgreSQL", color: "text-blue-700" },
  { icon: Brain, name: "OpenAI", color: "text-green-400" },
  { icon: Brain, name: "LangChain", color: "text-purple-600" },
  { icon: GitBranch, name: "GitHub", color: "text-gray-800" },
  { icon: Layers, name: "Docker", color: "text-blue-500" },
  { icon: Shield, name: "Security", color: "text-red-500" },
  { icon: Monitor, name: "Analytics", color: "text-indigo-500" },
  { icon: Lock, name: "Auth", color: "text-amber-500" },
  { icon: Rocket, name: "Performance", color: "text-emerald-500" },
  { icon: Settings, name: "DevOps", color: "text-gray-600" },
]

const TechIcon = ({ item, delay = 0 }: { item: (typeof techItems)[0]; delay?: number }) => {
  const Icon = item.icon

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay, duration: 0.3 }}
      className="flex flex-col items-center justify-center p-2 sm:p-3 bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm rounded-lg sm:rounded-xl border border-gray-200/50 dark:border-gray-700/50 shadow-md hover:shadow-lg transition-all duration-300 group w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 flex-shrink-0"
    >
      <Icon
        className={`w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 ${item.color} mb-1 group-hover:scale-110 transition-transform`}
      />
      <span className="text-[0.5rem] sm:text-[0.6rem] md:text-xs font-medium text-gray-700 dark:text-gray-300 opacity-80 group-hover:opacity-100 transition-opacity text-center leading-tight">
        {item.name}
      </span>
    </motion.div>
  )
}

const AnimatedColumn = ({
  items,
  direction = "up",
  delay = 0,
}: {
  items: typeof techItems
  direction?: "up" | "down"
  delay?: number
}) => {
  // Create duplicated items for seamless loop
  const duplicatedItems = [...items, ...items, ...items]

  // Calculate animation properties
  const itemHeight = 80 // Base height including margin
  const totalHeight = items.length * itemHeight
  const duration = totalHeight / 30 // Adjust speed here

  return (
    <div className="relative h-full overflow-hidden">
      <motion.div
        className="flex flex-col items-center gap-2 sm:gap-3 md:gap-4"
        initial={{ y: direction === "up" ? 0 : -totalHeight }}
        animate={{ y: direction === "up" ? -totalHeight : 0 }}
        transition={{
          duration,
          ease: "linear",
          repeat: Number.POSITIVE_INFINITY,
          repeatType: "loop",
          delay,
        }}
      >
        {duplicatedItems.map((item, index) => (
          <div key={`${item.name}-${index}`} className="flex-shrink-0">
            <TechIcon item={item} />
          </div>
        ))}
      </motion.div>
    </div>
  )
}

export function AnimatedTechColumns() {
  const [isMounted, setIsMounted] = useState(false)

  useEffect(() => {
    setIsMounted(true)
  }, [])

  if (!isMounted) {
    return null
  }

  // Split items into columns
  const itemsPerColumn = Math.ceil(techItems.length / 3)
  const column1 = techItems.slice(0, itemsPerColumn)
  const column2 = techItems.slice(itemsPerColumn, itemsPerColumn * 2)
  const column3 = techItems.slice(itemsPerColumn * 2)

  return (
    <div className="relative w-full min-h-[400px] sm:min-h-[500px] lg:min-h-[600px] overflow-hidden rounded-2xl sm:rounded-3xl bg-gradient-to-br from-purple-50/50 via-blue-50/30 to-indigo-50/50 dark:from-purple-900/10 dark:via-blue-900/10 dark:to-indigo-900/10">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(120,50,255,0.1),transparent_50%)] dark:bg-[radial-gradient(circle_at_30%_20%,rgba(120,50,255,0.2),transparent_50%)]" />

      <div className="container mx-auto px-4 py-8 sm:py-12 lg:py-16 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-6 lg:space-y-8 text-center lg:text-right">
            <div>
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 leading-tight">
                <span className="text-gradient">הטכנולוגיות שלנו</span>
              </h2>
              <p className="text-base sm:text-lg text-muted-foreground leading-relaxed max-w-2xl mx-auto lg:mx-0">
                אנחנו עובדים עם הטכנולוגיות המתקדמות ביותר כדי לספק לכם פתרונות מושלמים ומתקדמים
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Link href="/contact">
                <BaseButton variant="primary" size="lg" className="group w-full sm:w-auto">
                  התחל היום
                  <ArrowLeft className="mr-2 h-5 w-5 group-hover:-translate-x-1 transition-transform" />
                </BaseButton>
              </Link>
              <Link href="/services">
                <BaseButton variant="secondary" size="lg" className="w-full sm:w-auto">
                  השירותים שלנו
                </BaseButton>
              </Link>
            </div>

            <p className="text-sm text-muted-foreground italic">"התחבר למאות כלים מבלי לעזוב את האתר"</p>
          </div>

          {/* Right Side - Animated Columns */}
          <div className="relative h-[300px] sm:h-[400px] lg:h-[500px] overflow-hidden">
            <div className="flex justify-center lg:justify-around items-center h-full gap-4 sm:gap-6 lg:gap-8">
              {/* Column 1 - Scrolls Up */}
              <div className="flex-1 max-w-[80px] sm:max-w-[100px] md:max-w-[120px]">
                <AnimatedColumn items={column1} direction="up" delay={0} />
              </div>

              {/* Column 2 - Scrolls Down */}
              <div className="flex-1 max-w-[80px] sm:max-w-[100px] md:max-w-[120px]">
                <AnimatedColumn items={column2} direction="down" delay={1} />
              </div>

              {/* Column 3 - Scrolls Up */}
              <div className="flex-1 max-w-[80px] sm:max-w-[100px] md:max-w-[120px]">
                <AnimatedColumn items={column3} direction="up" delay={2} />
              </div>
            </div>

            {/* Gradient overlays for smooth fade effect */}
            <div className="absolute top-0 left-0 w-full h-16 sm:h-20 bg-gradient-to-b from-background/80 to-transparent pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-full h-16 sm:h-20 bg-gradient-to-t from-background/80 to-transparent pointer-events-none" />
          </div>
        </div>
      </div>

      {/* Bottom floating tech items for mobile */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 lg:hidden">
        <div className="flex flex-wrap justify-center gap-2 max-w-xs sm:max-w-sm">
          {techItems.slice(-6).map((item, index) => {
            const Icon = item.icon
            return (
              <motion.div
                key={item.name}
                className="flex items-center gap-1 px-2 py-1 bg-white/70 dark:bg-gray-800/70 backdrop-blur-sm rounded-full border border-gray-200/50 dark:border-gray-700/50 text-xs"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 + 1 }}
                whileHover={{ scale: 1.05 }}
              >
                <Icon className={`w-3 h-3 ${item.color}`} />
                <span className="text-[0.6rem] font-medium text-gray-700 dark:text-gray-300">{item.name}</span>
              </motion.div>
            )
          })}
        </div>
      </div>
    </div>
  )
}
