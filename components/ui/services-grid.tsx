"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Zap, Settings, Bot, CheckCircle, ArrowLeft, Sparkles, Code, Cpu } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export function ServicesGrid() {
  const [hoveredCard, setHoveredCard] = useState<number | null>(null)

  const services = [
    {
      id: 1,
      icon: <Zap className="h-8 w-8" />,
      title: "פיתוח אוטומציות ואינטגרציות",
      description: "אוטומציה מתקדמת לתהליכים עסקיים המאיצה את הפרודוקטיביות",
      features: ["אוטומציה של תהליכים", "אינטגרציות API", "ניטור בזמן אמת"],
      href: "/services/automation",
      size: "large",
      color: "bg-gradient-to-br from-slate-50 to-blue-50 dark:from-slate-900 dark:to-blue-900/20",
      borderColor: "border-blue-200 dark:border-blue-800",
      iconColor: "text-blue-600 dark:text-blue-400",
      stats: { value: "95%", label: "יעילות", color: "text-blue-600 dark:text-blue-400" },
      visual: "automation-dashboard",
    },
    {
      id: 2,
      icon: <Settings className="h-6 w-6" />,
      title: "פיתוח מערכות מותאמות אישית",
      description: "פתרונות טכנולוגיים מותאמים לצרכים הייחודיים שלכם",
      features: ["פיתוח אפליקציות", "אתרי אינטרנט", "מערכות ניהול"],
      href: "/services/custom",
      size: "medium",
      color: "bg-gradient-to-br from-slate-50 to-purple-50 dark:from-slate-900 dark:to-purple-900/20",
      borderColor: "border-purple-200 dark:border-purple-800",
      iconColor: "text-purple-600 dark:text-purple-400",
      stats: { value: "150+", label: "פרויקטים", color: "text-purple-600 dark:text-purple-400" },
      visual: "development-dashboard",
    },
    {
      id: 3,
      icon: <Bot className="h-6 w-6" />,
      title: "פיתוח סוכני AI ומודלי AI",
      description: "בינה מלאכותית מתקדמת לשיפור חוויית הלקוח",
      features: ["צ'אטבוטים חכמים", "עיבוד שפה טבעית", "למידת מכונה"],
      href: "/services/ai-agents",
      size: "tall",
      color: "bg-gradient-to-br from-slate-50 to-indigo-50 dark:from-slate-900 dark:to-indigo-900/20",
      borderColor: "border-indigo-200 dark:border-indigo-800",
      iconColor: "text-indigo-600 dark:text-indigo-400",
      stats: { value: "24/7", label: "זמינות", color: "text-indigo-600 dark:text-indigo-400" },
      visual: "ai-dashboard",
    },
    {
      id: 4,
      icon: <Code className="h-6 w-6" />,
      title: "שירותי תוכנה לעסקים וחברות",
      description: "פתרונות תוכנה מקצה לקצה לעסקים וחברות בכל הגדלים",
      features: ["פיתוח תוכנה", "תחזוקה שוטפת", "תמיכה טכנית"],
      href: "/services/business",
      size: "small",
      color: "bg-gradient-to-br from-slate-50 to-blue-50 dark:from-slate-900 dark:to-blue-900/20",
      borderColor: "border-blue-200 dark:border-blue-800",
      iconColor: "text-blue-600 dark:text-blue-400",
      stats: { value: "10x", label: "תשואה", color: "text-blue-600 dark:text-blue-400" },
      visual: "business-dashboard",
    },
    {
      id: 5,
      icon: <Cpu className="h-6 w-6" />,
      title: "הטמעת AI בארגונים",
      description: "ליווי מקצועי בהטמעת טכנולוגיות AI בארגונים",
      features: ["אסטרטגיית AI", "הדרכות צוות", "פיתוח יכולות"],
      href: "/services/ai-implementation",
      size: "small",
      color: "bg-gradient-to-br from-slate-50 to-purple-50 dark:from-slate-900 dark:to-purple-900/20",
      borderColor: "border-purple-200 dark:border-purple-800",
      iconColor: "text-purple-600 dark:text-purple-400",
      stats: { value: "99%", label: "הצלחה", color: "text-purple-600 dark:text-purple-400" },
      visual: "ai-implementation",
    },
  ]

  const renderVisualElement = (visual: string, size: string, iconColor: string) => {
    const isLarge = size === "large"
    const isTall = size === "tall"
    const position = isLarge ? "bottom-8 left-8" : isTall ? "bottom-6 left-6" : "bottom-4 left-4"

    switch (visual) {
      case "automation-dashboard":
        return (
          <div className={`absolute ${position} opacity-80`}>
            <div
              className={`${isLarge ? "w-40 h-24" : "w-32 h-20"} bg-white/90 dark:bg-slate-800/90 rounded-xl p-4 backdrop-blur-sm border border-blue-200/50 dark:border-blue-700/50 shadow-lg`}
            >
              <div className="flex justify-between items-center mb-3">
                <div className="flex gap-1.5">
                  <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                  <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                  <div className="w-2 h-2 bg-indigo-500 rounded-full"></div>
                </div>
                <Zap className="w-4 h-4 text-blue-500" />
              </div>
              <div className="flex items-center justify-between mb-3">
                {[1, 2, 3, 4, 5].map((step, i) => (
                  <div key={i} className="flex items-center">
                    <div className="w-3 h-3 bg-blue-500 rounded-full flex items-center justify-center">
                      <div className="w-1.5 h-1.5 bg-white rounded-full"></div>
                    </div>
                    {i < 4 && <div className="w-3 h-0.5 bg-blue-300 mx-1"></div>}
                  </div>
                ))}
              </div>
              <div className="space-y-1">
                <div className="w-full h-1.5 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
                  <div className="h-full w-4/5 bg-blue-500 rounded-full"></div>
                </div>
                <div className="w-full h-1.5 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
                  <div className="h-full w-3/5 bg-purple-500 rounded-full"></div>
                </div>
              </div>
            </div>
          </div>
        )

      case "development-dashboard":
        return (
          <div className={`absolute ${position} opacity-80`}>
            <div
              className={`${isTall ? "w-28 h-20" : "w-24 h-16"} bg-white/90 dark:bg-slate-800/90 rounded-xl p-3 backdrop-blur-sm border border-purple-200/50 dark:border-purple-700/50 shadow-lg`}
            >
              <div className="flex gap-1.5 mb-2">
                <div className="w-2 h-2 bg-red-400 rounded-full"></div>
                <div className="w-2 h-2 bg-purple-400 rounded-full"></div>
                <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
              </div>
              <div className="space-y-1">
                <div className="w-full h-1 bg-purple-500 rounded"></div>
                <div className="w-4/5 h-1 bg-gray-300 dark:bg-gray-600 rounded"></div>
                <div className="w-3/5 h-1 bg-purple-400 rounded"></div>
                <div className="w-5/6 h-1 bg-gray-300 dark:bg-gray-600 rounded"></div>
                <div className="w-2/3 h-1 bg-purple-500 rounded"></div>
                <div className="w-1/2 h-1 bg-gray-300 dark:bg-gray-600 rounded"></div>
              </div>
            </div>
          </div>
        )

      case "ai-dashboard":
        return (
          <div className={`absolute ${position} opacity-80`}>
            <div
              className={`${isTall ? "w-28 h-32" : "w-24 h-20"} bg-white/90 dark:bg-slate-800/90 rounded-xl p-4 backdrop-blur-sm border border-indigo-200/50 dark:border-indigo-700/50 shadow-lg`}
            >
              <div className="relative h-full flex items-center justify-center">
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-4 h-4 bg-indigo-600 rounded-full border-2 border-white shadow-lg"></div>
                <div className="absolute top-2 left-2 w-3 h-3 bg-indigo-400 rounded-full"></div>
                <div className="absolute top-2 right-2 w-2.5 h-2.5 bg-indigo-500 rounded-full"></div>
                <div className="absolute bottom-2 left-2 w-2.5 h-2.5 bg-indigo-500 rounded-full"></div>
                <div className="absolute bottom-2 right-2 w-3 h-3 bg-indigo-400 rounded-full"></div>
                <div className="absolute inset-0">
                  <svg className="w-full h-full" viewBox="0 0 100 100">
                    <line x1="20" y1="20" x2="50" y2="50" stroke="rgb(99 102 241)" strokeWidth="1" opacity="0.6" />
                    <line x1="80" y1="20" x2="50" y2="50" stroke="rgb(99 102 241)" strokeWidth="1" opacity="0.6" />
                    <line x1="20" y1="80" x2="50" y2="50" stroke="rgb(99 102 241)" strokeWidth="1" opacity="0.6" />
                    <line x1="80" y1="80" x2="50" y2="50" stroke="rgb(99 102 241)" strokeWidth="1" opacity="0.6" />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        )

      case "business-dashboard":
        return (
          <div className={`absolute ${position} opacity-80`}>
            <div className="w-24 h-16 bg-white/90 dark:bg-slate-800/90 rounded-xl p-3 backdrop-blur-sm border border-blue-200/50 dark:border-blue-700/50 shadow-lg">
              <div className="flex justify-between items-center mb-2">
                <div className="text-xs text-blue-600 font-medium">Business</div>
                <Code className="w-3 h-3 text-blue-500" />
              </div>
              <div className="flex items-end justify-center gap-1 h-6">
                {[8, 12, 16, 10, 18, 14, 11].map((height, i) => (
                  <div key={i} className="w-1.5 bg-blue-500 rounded-sm" style={{ height: `${height}px` }} />
                ))}
              </div>
            </div>
          </div>
        )

      case "ai-implementation":
        return (
          <div className={`absolute ${position} opacity-80`}>
            <div className="w-24 h-16 bg-white/90 dark:bg-slate-800/90 rounded-xl p-3 backdrop-blur-sm border border-purple-200/50 dark:border-purple-700/50 shadow-lg">
              <div className="flex justify-between items-center mb-2">
                <div className="text-xs text-purple-600 font-medium">AI</div>
                <Cpu className="w-3 h-3 text-purple-500" />
              </div>
              <div className="space-y-1.5">
                <div className="w-full h-2 bg-purple-500 rounded-full relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-r from-purple-400 to-purple-600"></div>
                </div>
                <div className="w-full h-2 bg-purple-400 rounded-full relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-r from-purple-300 to-purple-500"></div>
                </div>
                <div className="w-full h-2 bg-purple-500 rounded-full relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-r from-purple-400 to-purple-600"></div>
                </div>
              </div>
            </div>
          </div>
        )

      default:
        return null
    }
  }

  const getGridClass = (size: string) => {
    switch (size) {
      case "large":
        return "md:col-span-2 md:row-span-2"
      case "tall":
        return "md:col-span-1 md:row-span-2"
      case "medium":
        return "md:col-span-1 md:row-span-1"
      case "small":
        return "md:col-span-1 md:row-span-1"
      default:
        return "md:col-span-1 md:row-span-1"
    }
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-fr">
      {services.map((service, index) => (
        <motion.div
          key={service.id}
          className={`${getGridClass(service.size)} group`}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: index * 0.1 }}
          onHoverStart={() => setHoveredCard(service.id)}
          onHoverEnd={() => setHoveredCard(null)}
        >
          <Link href={service.href} className="block h-full">
            <Card
              className={`h-full overflow-hidden ${service.color} ${service.borderColor} border-2 relative group hover:shadow-xl transition-shadow duration-300`}
            >
              <CardContent
                className={`relative z-10 h-full flex flex-col text-slate-800 dark:text-slate-200 ${
                  service.size === "large" ? "p-8" : service.size === "tall" ? "p-6" : "p-5"
                }`}
              >
                <div className="flex items-start justify-between mb-4">
                  <div
                    className={`p-3 bg-white/60 dark:bg-slate-800/60 rounded-xl backdrop-blur-sm ${
                      service.size === "large" ? "p-4" : "p-3"
                    }`}
                  >
                    <div className={service.iconColor}>{service.icon}</div>
                  </div>
                  <div className="text-left">
                    <div
                      className={`font-bold opacity-[0.02] opacity-20 opacity-[0.02] ${service.size === "large" ? "text-2xl" : "text-lg"} ${service.stats.color}`}
                    >
                      {service.stats.value}
                    </div>
                    <div className="text-xs text-slate-600 dark:text-slate-400">{service.stats.label}</div>
                  </div>
                </div>

                <div className="flex-1">
                  <h3
                    className={`font-bold mb-3 text-slate-900 dark:text-slate-100 ${
                      service.size === "large"
                        ? "text-2xl md:text-3xl"
                        : service.size === "tall"
                          ? "text-xl"
                          : "text-lg"
                    } text-right`}
                  >
                    {service.title}
                  </h3>

                  <p
                    className={`text-slate-700 dark:text-slate-300 mb-4 ${
                      service.size === "large" ? "text-base" : "text-sm"
                    } text-right leading-relaxed`}
                  >
                    {service.description}
                  </p>

                  {(service.size === "large" || service.size === "tall") && (
                    <div className="space-y-2 mb-4">
                      {service.features.slice(0, service.size === "large" ? 3 : 2).map((feature, i) => (
                        <div key={i} className="flex items-center gap-2 flex-row-reverse">
                          <CheckCircle className={`h-4 w-4 flex-shrink-0 ${service.iconColor}`} />
                          <span className="text-sm text-slate-700 dark:text-slate-300">{feature}</span>
                        </div>
                      ))}
                    </div>
                  )}
                </div>

                <div className="flex items-center justify-between mt-auto flex-row-reverse">
                  <Button
                    variant="ghost"
                    size="sm"
                    className={`${service.iconColor} hover:bg-white/20 dark:hover:bg-slate-800/20 p-0 h-auto gap-1 transition-colors`}
                  >
                    למד עוד
                    <ArrowLeft className="h-4 w-4" />
                  </Button>

                  {service.size === "large" && (
                    <div className="flex items-center gap-1 flex-row-reverse">
                      <Sparkles className={`h-4 w-4 ${service.iconColor}`} />
                      <span className={`text-xs ${service.stats.color}`}>מומלץ</span>
                    </div>
                  )}
                </div>

                {renderVisualElement(service.visual, service.size, service.iconColor)}
              </CardContent>
            </Card>
          </Link>
        </motion.div>
      ))}
    </div>
  )
}
