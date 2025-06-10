"use client"

import { useEffect, useState } from "react"
import { motion } from "framer-motion"
import { useTranslation } from "react-i18next"
import {
  Code,
  Database,
  Cloud,
  Bot,
  Zap,
  Settings,
  Globe,
  Cpu,
  Layers,
  GitBranch,
  Shield,
  Palette,
  Server,
  Workflow,
  Brain,
  Lock,
  Rocket,
  Monitor,
  FileCode,
} from "lucide-react"

// Technology items with modern icons and colors
const techItems = [
  { icon: Code, name: "React", color: "text-blue-500" },
  { icon: Globe, name: "Next.js", color: "text-gray-700" },
  { icon: FileCode, name: "TypeScript", color: "text-blue-600" },
  { icon: Palette, name: "Tailwind", color: "text-cyan-500" },
  { icon: Zap, name: "Framer Motion", color: "text-pink-500" },
  { icon: Server, name: "Node.js", color: "text-green-600" },
  { icon: Cpu, name: "Python", color: "text-yellow-600" },
  { icon: Database, name: "MongoDB", color: "text-green-500" },
  { icon: Database, name: "PostgreSQL", color: "text-blue-700" },
  { icon: Cloud, name: "AWS", color: "text-orange-500" },
  { icon: GitBranch, name: "GitHub", color: "text-gray-800" },
  { icon: Layers, name: "Docker", color: "text-blue-500" },
  { icon: Bot, name: "OpenAI", color: "text-green-400" },
  { icon: Brain, name: "TensorFlow", color: "text-orange-600" },
  { icon: Workflow, name: "Automation", color: "text-purple-500" },
  { icon: Shield, name: "Security", color: "text-red-500" },
  { icon: Monitor, name: "Analytics", color: "text-indigo-500" },
  { icon: Rocket, name: "Performance", color: "text-emerald-500" },
  { icon: Lock, name: "Auth", color: "text-amber-500" },
  { icon: Settings, name: "DevOps", color: "text-gray-600" },
]

// Create column-based tech icons
const ColumnTechIcon = ({
  item,
  index,
  columnIndex,
}: { item: (typeof techItems)[0]; index: number; columnIndex: number }) => {
  const Icon = item.icon
  const direction = columnIndex % 2 === 0 ? -1 : 1 // Alternate direction for each column

  return (
    <motion.div
      className="mb-6"
      initial={{ opacity: 0, y: 50 }}
      animate={{
        opacity: [0.6, 1, 0.6],
        y: [0, direction * 20, 0],
      }}
      transition={{
        opacity: { duration: 3, repeat: Number.POSITIVE_INFINITY, repeatType: "reverse" },
        y: { duration: 4 + columnIndex, repeat: Number.POSITIVE_INFINITY, repeatType: "reverse" },
        delay: index * 0.2,
      }}
    >
      <div className="flex flex-col items-center justify-center p-3 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-xl border border-gray-200/50 dark:border-gray-700/50 shadow-lg hover:shadow-xl transition-all duration-300 group">
        <Icon className={`w-6 h-6 ${item.color} mb-1 group-hover:scale-110 transition-transform`} />
        <span className="text-xs font-medium text-gray-700 dark:text-gray-300 opacity-80 group-hover:opacity-100 transition-opacity">
          {item.name}
        </span>
      </div>
    </motion.div>
  )
}

export function AnimatedTechColumns() {
  const { t, i18n } = useTranslation()
  const [isMounted, setIsMounted] = useState(false)
  const currentLanguage = i18n.language

  useEffect(() => {
    setIsMounted(true)
  }, [])

  if (!isMounted) {
    return null
  }

  return (
    <div className="relative min-h-[500px] overflow-hidden rounded-3xl bg-gradient-to-br from-purple-50/50 via-blue-50/30 to-indigo-50/50 dark:from-purple-900/10 dark:via-blue-900/10 dark:to-indigo-900/10">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(120,50,255,0.1),transparent_50%)] dark:bg-[radial-gradient(circle_at_30%_20%,rgba(120,50,255,0.2),transparent_50%)]" />

      <div className="container mx-auto px-4 py-16 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                <span className="text-gradient">
                  {currentLanguage === "he"
                    ? "התחבר לכל הכלים המועדפים עליך"
                    : "Connect with all of your favourite tools"}
                </span>
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                {currentLanguage === "he"
                  ? "אינטגרציה חלקה עם כל הטכנולוגיות המתקדמות ביותר, ללא מאמץ מיותר"
                  : "Seamless integration with all the latest technologies, without unnecessary complexity"}
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <button className="btn-primary px-8 py-3 text-lg font-medium">
                {currentLanguage === "he" ? "התחל בחינם" : "Get Started for Free"}
              </button>
              <button className="btn-secondary px-8 py-3 text-lg font-medium">
                {currentLanguage === "he" ? "צור קשר" : "Contact Sales"}
              </button>
            </div>

            <p className="text-sm text-muted-foreground italic">
              "
              {currentLanguage === "he"
                ? "התחבר למאות כלים מבלי לעזוב את האתר"
                : "Connect with 100's of tools without leaving the site"}
              "
            </p>
          </div>

          {/* Right Side - Organized Columns */}
          <div className="relative h-[400px] lg:h-[500px] overflow-hidden">
            <div className="flex justify-between h-full">
              {/* Column 1 */}
              <div className="flex flex-col justify-start">
                {techItems.slice(0, 4).map((item, index) => (
                  <ColumnTechIcon key={item.name} item={item} index={index} columnIndex={0} />
                ))}
              </div>

              {/* Column 2 */}
              <div className="flex flex-col justify-center">
                {techItems.slice(4, 8).map((item, index) => (
                  <ColumnTechIcon key={item.name} item={item} index={index} columnIndex={1} />
                ))}
              </div>

              {/* Column 3 */}
              <div className="flex flex-col justify-end">
                {techItems.slice(8, 12).map((item, index) => (
                  <ColumnTechIcon key={item.name} item={item} index={index} columnIndex={2} />
                ))}
              </div>
            </div>

            {/* Gradient Overlays for smooth edges */}
            <div className="absolute top-0 left-0 w-full h-20 bg-gradient-to-b from-background/50 to-transparent pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-full h-20 bg-gradient-to-t from-background/50 to-transparent pointer-events-none" />
          </div>
        </div>
      </div>

      {/* Bottom Tech Stack Grid */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
        <div className="flex flex-wrap justify-center gap-3 max-w-2xl">
          {techItems.slice(12).map((item, index) => {
            const Icon = item.icon
            return (
              <motion.div
                key={item.name}
                className="flex items-center gap-2 px-3 py-2 bg-white/60 dark:bg-gray-800/60 backdrop-blur-sm rounded-full border border-gray-200/50 dark:border-gray-700/50"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 + 1 }}
                whileHover={{ scale: 1.05 }}
              >
                <Icon className={`w-4 h-4 ${item.color}`} />
                <span className="text-xs font-medium text-gray-700 dark:text-gray-300">{item.name}</span>
              </motion.div>
            )
          })}
        </div>
      </div>
    </div>
  )
}
