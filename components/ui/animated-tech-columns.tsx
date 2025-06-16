"use client"

import { useEffect, useState } from "react"
import { motion } from "framer-motion"
import { Code, Database, Cloud, Bot, Globe, Cpu, Layers, GitBranch, Workflow, Brain, FileCode } from "lucide-react"
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
  { icon: Workflow, name: "n8n", color: "text-blue-500" },
  { icon: Workflow, name: "Make", color: "text-indigo-600" },
  { icon: Workflow, name: "Zapier", color: "text-purple-500" },
  { icon: Cloud, name: "GCP", color: "text-blue-500" },
  { icon: Database, name: "NoSQL", color: "text-indigo-700" },
  { icon: Database, name: "MongoDB", color: "text-indigo-500" },
  { icon: Database, name: "PostgreSQL", color: "text-blue-700" },
  { icon: Brain, name: "LangChain", color: "text-purple-600" },
  { icon: Brain, name: "PyTorch", color: "text-blue-600" },
  { icon: Cloud, name: "AWS", color: "text-purple-500" },
  { icon: GitBranch, name: "GitHub", color: "text-gray-800" },
  { icon: Layers, name: "Docker", color: "text-blue-500" },
  { icon: Bot, name: "OpenAI", color: "text-indigo-400" },
]

const ColumnTechIcon = ({ item }: { item: (typeof techItems)[0] }) => {
  const Icon = item.icon
  return (
    <motion.div
      className="flex flex-col items-center justify-center p-3 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-xl border border-gray-200/50 dark:border-gray-700/50 shadow-lg hover:shadow-xl transition-all duration-300 group mb-6"
      initial={{ opacity: 0.6 }}
      animate={{
        opacity: [0.6, 1, 0.6],
      }}
      transition={{
        opacity: { duration: 3, repeat: Number.POSITIVE_INFINITY, repeatType: "reverse" },
      }}
    >
      <Icon className={`w-6 h-6 ${item.color} mb-1 group-hover:scale-110 transition-transform`} />
      <span className="text-xs font-medium text-gray-700 dark:text-gray-300 opacity-80 group-hover:opacity-100 transition-opacity">
        {item.name}
      </span>
    </motion.div>
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

  // Distribute techItems into 3 columns
  const itemsPerColumn = Math.ceil(techItems.length / 3)
  const column1Items = techItems.slice(0, itemsPerColumn)
  const column2Items = techItems.slice(itemsPerColumn, itemsPerColumn * 2)
  const column3Items = techItems.slice(itemsPerColumn * 2)

  // Duplicate items to create a seamless loop.
  // We need at least two sets of items for a seamless loop.
  const duplicationFactor = 2

  const duplicatedColumn1 = Array(duplicationFactor).fill(column1Items).flat()
  const duplicatedColumn2 = Array(duplicationFactor).fill(column2Items).flat()
  const duplicatedColumn3 = Array(duplicationFactor).fill(column3Items).flat()

  // Approximate height of one ColumnTechIcon block including its margin-bottom
  // p-3 (12px top/bottom) + icon (24px) + text (12px) + mb-1 (4px) + mb-6 (24px) = 76px
  const measuredItemHeight = 76

  // Calculate the total height of one *original* set of items for the animation range
  const animationHeight1 = column1Items.length * measuredItemHeight
  const animationHeight2 = column2Items.length * measuredItemHeight
  const animationHeight3 = column3Items.length * measuredItemHeight

  // Speed factor: higher value means faster scroll
  const speedFactor = 15 // Items per second, roughly

  return (
    <div className="relative min-h-[500px] overflow-hidden rounded-3xl bg-gradient-to-br from-purple-50/50 via-blue-50/30 to-indigo-50/50 dark:from-purple-900/10 dark:via-blue-900/10 dark:to-indigo-900/10">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(120,50,255,0.1),transparent_50%)] dark:bg-[radial-gradient(circle_at_30%_20%,rgba(120,50,255,0.2),transparent_50%)]" />

      <div className="container mx-auto px-4 py-16 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                <span className="text-gradient">הטכנולוגיות שלנו</span>
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                אנחנו עובדים עם הטכנולוגיות המתקדמות ביותר כדי לספק לכם פתרונות מושלמים
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/contact">
                <BaseButton variant="primary" size="lg" className="group">
                  התחל היום
                  <ArrowLeft className="mr-2 h-5 w-5 group-hover:-translate-x-1 transition-transform" />
                </BaseButton>
              </Link>
              <Link href="/services">
                <BaseButton variant="secondary" size="lg">
                  השירותים שלנו
                </BaseButton>
              </Link>
            </div>

            <p className="text-sm text-muted-foreground italic">"התחבר למאות כלים מבלי לעזוב את האתר"</p>
          </div>

          <div className="relative h-[400px] lg:h-[500px] overflow-hidden">
            <div className="flex justify-between h-full">
              {/* Column 1 - Scrolls Up */}
              <motion.div
                className="flex flex-col"
                initial={{ y: 0 }}
                animate={{ y: -animationHeight1 }}
                transition={{
                  duration: animationHeight1 / speedFactor,
                  ease: "linear",
                  repeat: Number.POSITIVE_INFINITY,
                  repeatType: "loop",
                  delay: 0, // Start immediately
                }}
              >
                {duplicatedColumn1.map((item, index) => (
                  <ColumnTechIcon key={`${item.name}-${index}-col1`} item={item} />
                ))}
              </motion.div>

              {/* Column 2 - Scrolls Down */}
              <motion.div
                className="flex flex-col"
                initial={{ y: -animationHeight2 }} // Start from the "end" of the loop to scroll down
                animate={{ y: 0 }} // Scroll down to the top of the duplicated list
                transition={{
                  duration: animationHeight2 / speedFactor,
                  ease: "linear",
                  repeat: Number.POSITIVE_INFINITY,
                  repeatType: "loop",
                  delay: animationHeight1 / speedFactor / 2, // Stagger start
                }}
              >
                {duplicatedColumn2.map((item, index) => (
                  <ColumnTechIcon key={`${item.name}-${index}-col2`} item={item} />
                ))}
              </motion.div>

              {/* Column 3 - Scrolls Up */}
              <motion.div
                className="flex flex-col"
                initial={{ y: 0 }}
                animate={{ y: -animationHeight3 }}
                transition={{
                  duration: animationHeight3 / speedFactor,
                  ease: "linear",
                  repeat: Number.POSITIVE_INFINITY,
                  repeatType: "loop",
                  delay: animationHeight1 / speedFactor, // Stagger start further
                }}
              >
                {duplicatedColumn3.map((item, index) => (
                  <ColumnTechIcon key={`${item.name}-${index}-col3`} item={item} />
                ))}
              </motion.div>
            </div>

            {/* Gradient overlays to fade out items at top/bottom */}
            <div className="absolute top-0 left-0 w-full h-20 bg-gradient-to-b from-background/50 to-transparent pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-full h-20 bg-gradient-to-t from-background/50 to-transparent pointer-events-none" />
          </div>
        </div>
      </div>
    </div>
  )
}
