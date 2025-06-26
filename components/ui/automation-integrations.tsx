"use client"

import { useState, useEffect, useRef } from "react"
import { motion } from "framer-motion"
import { Mail, Calendar, MessageSquare, FileText, Users, BarChart3, Cloud, Webhook, Bot } from "lucide-react"

export function AutomationIntegrations() {
  const [hoveredNode, setHoveredNode] = useState<string | null>(null)
  const [containerSize, setContainerSize] = useState(400)
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const updateSize = () => {
      if (containerRef.current) {
        const rect = containerRef.current.getBoundingClientRect()
        const size = Math.min(rect.width, 500)
        setContainerSize(size)
      }
    }

    updateSize()
    window.addEventListener("resize", updateSize)
    return () => window.removeEventListener("resize", updateSize)
  }, [])

  const integrations = [
    {
      id: "email",
      name: "אינטגרציית אימייל",
      description: "התחברות לפלטפורמות אימייל כמו Gmail, Outlook ועוד",
      icon: Mail,
      color: "text-blue-500",
      bgColor: "bg-blue-500/10",
    },
    {
      id: "calendar",
      name: "סנכרון יומן",
      description: "אינטגרציה עם Google Calendar, Outlook Calendar וכלי תזמון",
      icon: Calendar,
      color: "text-green-500",
      bgColor: "bg-green-500/10",
    },
    {
      id: "chat",
      name: "פלטפורמות צ'אט",
      description: "התחברות ל-Slack, Teams, Discord ואפליקציות הודעות",
      icon: MessageSquare,
      color: "text-purple-500",
      bgColor: "bg-purple-500/10",
    },
    {
      id: "documents",
      name: "ניהול מסמכים",
      description: "אינטגרציה עם Google Drive, Dropbox, SharePoint ומערכות קבצים",
      icon: FileText,
      color: "text-orange-500",
      bgColor: "bg-orange-500/10",
    },
    {
      id: "crm",
      name: "מערכות CRM",
      description: "התחברות ל-Salesforce, HubSpot, Pipedrive וכלי ניהול לקוחות",
      icon: Users,
      color: "text-pink-500",
      bgColor: "bg-pink-500/10",
    },
    {
      id: "analytics",
      name: "כלי אנליטיקה",
      description: "אינטגרציה עם Google Analytics, Mixpanel ופלטפורמות BI",
      icon: BarChart3,
      color: "text-indigo-500",
      bgColor: "bg-indigo-500/10",
    },
    {
      id: "cloud",
      name: "שירותי ענן",
      description: "התחברות ל-AWS, Azure, Google Cloud ותשתיות ענן",
      icon: Cloud,
      color: "text-cyan-500",
      bgColor: "bg-cyan-500/10",
    },
    {
      id: "webhooks",
      name: "Webhooks ו-APIs",
      description: "אינטגרציות מותאמות עם REST APIs, GraphQL ונקודות webhook",
      icon: Webhook,
      color: "text-yellow-500",
      bgColor: "bg-yellow-500/10",
    },
  ]

  // חישובים מתמטיים מדויקים
  const CENTER = containerSize / 2
  const CIRCLE_RADIUS = containerSize * 0.35 // 35% מגודל הקונטיינר
  const CENTRAL_HUB_SIZE = containerSize * 0.15 // 15% מגודל הקונטיינר
  const ICON_SIZE = containerSize * 0.08 // 8% מגודל הקונטיינר

  return (
    <div className="w-full max-w-4xl mx-auto p-4 sm:p-6 lg:p-8">
      <div
        ref={containerRef}
        className="relative mx-auto bg-gradient-to-br from-purple-500/5 via-blue-500/5 to-transparent rounded-3xl"
        style={{
          width: containerSize,
          height: containerSize,
        }}
      >
        {/* מעגל רקע מסתובב */}
        <motion.div
          className="absolute border border-purple-500/20 rounded-full"
          style={{
            width: CIRCLE_RADIUS * 2,
            height: CIRCLE_RADIUS * 2,
            left: CENTER - CIRCLE_RADIUS,
            top: CENTER - CIRCLE_RADIUS,
          }}
          animate={{ rotate: 360 }}
          transition={{ duration: 60, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
        />

        {/* מעגל רקע נוסף */}
        <motion.div
          className="absolute border border-blue-500/10 rounded-full"
          style={{
            width: CIRCLE_RADIUS * 2,
            height: CIRCLE_RADIUS * 2,
            left: CENTER - CIRCLE_RADIUS,
            top: CENTER - CIRCLE_RADIUS,
          }}
          animate={{ rotate: -360 }}
          transition={{ duration: 45, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
        />

        {/* מרכז TapUp */}
        <motion.div
          className="absolute bg-gradient-to-br from-purple-600 to-blue-600 rounded-3xl flex items-center justify-center shadow-2xl z-20"
          style={{
            width: CENTRAL_HUB_SIZE,
            height: CENTRAL_HUB_SIZE,
            left: CENTER - CENTRAL_HUB_SIZE / 2,
            top: CENTER - CENTRAL_HUB_SIZE / 2,
          }}
          whileHover={{ scale: 1.1 }}
          transition={{ type: "spring", stiffness: 300, damping: 20 }}
        >
          <div
            className="bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center"
            style={{
              width: CENTRAL_HUB_SIZE * 0.7,
              height: CENTRAL_HUB_SIZE * 0.7,
            }}
          >
            <Bot className="text-white" size={CENTRAL_HUB_SIZE * 0.4} />
          </div>
        </motion.div>

        {/* טקסט TapUp */}
        <div
          className="absolute text-center z-20"
          style={{
            left: CENTER,
            top: CENTER + CENTRAL_HUB_SIZE / 2 + 20,
            transform: "translateX(-50%)",
          }}
        >
          <div className="font-bold text-foreground" style={{ fontSize: containerSize * 0.04 }}>
            TapUp
          </div>
          <div className="text-muted-foreground" style={{ fontSize: containerSize * 0.025 }}>
            אוטומציה חכמה
          </div>
        </div>

        {/* אלמנטים על המעגל */}
        {integrations.map((integration, index) => {
          const Icon = integration.icon
          const totalNodes = integrations.length
          const angle = (index * 2 * Math.PI) / totalNodes - Math.PI / 2

          // חישוב מיקום מדויק על המעגל
          const x = CENTER + CIRCLE_RADIUS * Math.cos(angle)
          const y = CENTER + CIRCLE_RADIUS * Math.sin(angle)

          return (
            <div key={integration.id}>
              {/* קו חיבור */}
              <svg className="absolute inset-0 pointer-events-none z-10" width={containerSize} height={containerSize}>
                <motion.line
                  x1={CENTER}
                  y1={CENTER}
                  x2={x}
                  y2={y}
                  stroke={hoveredNode === integration.id ? "rgba(139, 92, 246, 0.8)" : "rgba(139, 92, 246, 0.3)"}
                  strokeWidth={hoveredNode === integration.id ? "2" : "1"}
                  strokeDasharray={hoveredNode === integration.id ? "0" : "4 4"}
                  initial={{ pathLength: 0 }}
                  animate={{ pathLength: 1 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                />
              </svg>

              {/* אלמנט */}
              <motion.div
                className="absolute z-20"
                style={{
                  left: x - ICON_SIZE / 2,
                  top: y - ICON_SIZE / 2,
                  width: ICON_SIZE,
                  height: ICON_SIZE,
                }}
                initial={{ scale: 0, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{
                  type: "spring",
                  stiffness: 260,
                  damping: 20,
                  delay: index * 0.1,
                }}
                whileHover={{ scale: 1.15, zIndex: 30 }}
                onHoverStart={() => setHoveredNode(integration.id)}
                onHoverEnd={() => setHoveredNode(null)}
              >
                <div
                  className={`
                  w-full h-full
                  ${integration.bgColor} 
                  backdrop-blur-sm rounded-2xl 
                  flex flex-col items-center justify-center 
                  shadow-lg border border-border/50 
                  cursor-pointer group relative
                  transition-all duration-200
                  hover:shadow-xl hover:border-purple-500/50
                `}
                >
                  <Icon
                    className={`${integration.color} group-hover:scale-110 transition-transform mb-0.5`}
                    size={ICON_SIZE * 0.35}
                  />
                  <span className="font-medium text-center leading-tight px-1" style={{ fontSize: ICON_SIZE * 0.15 }}>
                    {integration.name.split(" ")[0]}
                  </span>
                </div>

                {/* טולטיפ */}
                {hoveredNode === integration.id && (
                  <motion.div
                    className={`
                      absolute bg-card/95 backdrop-blur-sm border border-border/50 
                      rounded-lg p-3 shadow-xl z-50 min-w-[160px] max-w-[200px]
                      ${x > CENTER ? "right-full mr-2" : "left-full ml-2"}
                      ${y < CENTER ? "top-0" : "bottom-0"}
                    `}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.8 }}
                    transition={{ duration: 0.2 }}
                  >
                    <h4 className="font-semibold text-foreground mb-1 text-sm">{integration.name}</h4>
                    <p className="text-xs text-muted-foreground">{integration.description}</p>
                  </motion.div>
                )}
              </motion.div>
            </div>
          )
        })}
      </div>
    </div>
  )
}
