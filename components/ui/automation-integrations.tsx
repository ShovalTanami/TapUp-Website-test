"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { Mail, Calendar, MessageSquare, FileText, Users, BarChart3, Cloud, Webhook, Bot } from "lucide-react"

export function AutomationIntegrations() {
  const [hoveredNode, setHoveredNode] = useState<string | null>(null)
  const [containerSize, setContainerSize] = useState({ width: 600, height: 600 })

  useEffect(() => {
    const updateSize = () => {
      const width = window.innerWidth
      // Adjust container size based on viewport width
      if (width < 480) {
        // Very small screens
        setContainerSize({ width: 320, height: 320 })
      } else if (width < 640) {
        // Small screens (mobile)
        setContainerSize({ width: 380, height: 380 })
      } else if (width < 1024) {
        // Medium screens (tablet)
        setContainerSize({ width: 500, height: 500 })
      } else {
        // Large screens (desktop)
        setContainerSize({ width: 600, height: 600 })
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

  // Increased radius factor for mobile to spread out icons more
  const baseRadiusFactor = containerSize.width < 640 ? 0.48 : 0.28
  const radius = Math.min(containerSize.width, containerSize.height) * baseRadiusFactor
  const centerX = containerSize.width / 2
  const centerY = containerSize.height / 2

  // Determine icon size based on container width
  const iconSize = containerSize.width < 640 ? 72 : 80 // Slightly larger for mobile
  const iconOffset = iconSize / 2

  // Determine central element size based on container width
  const centralElementSize = containerSize.width < 640 ? 100 : 128
  const centralElementOffset = centralElementSize / 2

  return (
    <div
      className="relative mx-auto bg-gradient-to-br from-purple-500/5 via-blue-500/5 to-transparent rounded-3xl overflow-visible"
      style={{
        width: containerSize.width,
        height: containerSize.height,
        minHeight: "400px",
      }}
    >
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <motion.div
          className="border border-purple-500/20 rounded-full"
          style={{
            width: radius * 2 + 80,
            height: radius * 2 + 80,
          }}
          animate={{ rotate: 360 }}
          transition={{ duration: 60, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
        />
        <motion.div
          className="absolute border border-blue-500/10 rounded-full"
          style={{
            width: radius * 2 + 60,
            height: radius * 2 + 60,
          }}
          animate={{ rotate: -360 }}
          transition={{ duration: 45, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
        />
      </div>

      <motion.div
        className="absolute bg-gradient-to-br from-purple-600 to-blue-600 rounded-3xl flex items-center justify-center shadow-2xl z-10"
        style={{
          width: centralElementSize,
          height: centralElementSize,
          left: centerX - centralElementOffset,
          top: centerY - centralElementOffset,
        }}
        whileHover={{ scale: 1.1 }}
        transition={{ type: "spring", stiffness: 300, damping: 20 }}
      >
        <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center">
          <Bot className="w-8 h-8 text-white" />
        </div>
        <div className="absolute inset-0 bg-gradient-to-br from-purple-600/50 to-blue-600/50 rounded-3xl animate-pulse" />
      </motion.div>

      <div
        className="absolute text-center z-20"
        style={{
          left: centerX,
          top: centerY + (centralElementOffset + 20), // Adjusted offset for text below central element
          transform: "translateX(-50%)",
        }}
      >
        <div className="text-lg md:text-xl font-bold text-foreground">TapUp</div>
        <div className="text-xs md:text-sm text-muted-foreground">אוטומציה חכמה</div>
      </div>

      {integrations.map((integration, index) => {
        const angle = (index * (2 * Math.PI)) / integrations.length
        const x = centerX + radius * Math.cos(angle)
        const y = centerY + radius * Math.sin(angle)
        const Icon = integration.icon

        // Determine if the icon is in the bottom half of the container
        const isBottomHalf = y > centerY

        return (
          <motion.div
            key={integration.id}
            className={`absolute ${integration.bgColor} backdrop-blur-sm border border-white/10 rounded-2xl shadow-lg flex flex-col items-center justify-center cursor-pointer z-10`}
            style={{
              width: iconSize,
              height: iconSize,
              left: x - iconOffset,
              top: y - iconOffset,
            }}
            whileHover={{ scale: 1.1 }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
            onHoverStart={() => setHoveredNode(integration.id)}
            onHoverEnd={() => setHoveredNode(null)}
          >
            <Icon className={`w-6 h-6 ${integration.color}`} />
            <span className="text-xs font-medium mt-1 text-center">{integration.name}</span>

            {hoveredNode === integration.id && (
              <motion.div
                className={`absolute bg-white dark:bg-gray-800 rounded-lg shadow-lg p-3 text-sm w-48 z-50 text-center`}
                style={{
                  left: "50%",
                  transform: "translateX(-50%)",
                  // Position tooltip above if in bottom half, otherwise below
                  [isBottomHalf ? "bottom" : "top"]: "100%",
                  [isBottomHalf ? "marginBottom" : "marginTop"]: "8px", // Add some margin
                }}
                initial={{ opacity: 0, y: isBottomHalf ? 5 : -5 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: isBottomHalf ? 5 : -5 }}
              >
                <p className="text-foreground max-w-[180px] mx-auto">{integration.description}</p>
              </motion.div>
            )}
          </motion.div>
        )
      })}

      {integrations.map((integration, index) => {
        const angle = (index * (2 * Math.PI)) / integrations.length
        const x = centerX + radius * Math.cos(angle)
        const y = centerY + radius * Math.sin(angle)

        return (
          <motion.div
            key={`line-${integration.id}`}
            className="absolute left-0 top-0 pointer-events-none"
            style={{
              width: containerSize.width,
              height: containerSize.height,
            }}
          >
            <svg width="100%" height="100%" className="absolute left-0 top-0">
              <motion.line
                x1={centerX}
                y1={centerY}
                x2={x}
                y2={y}
                stroke={`url(#gradient-${integration.id})`}
                strokeWidth={hoveredNode === integration.id ? 2 : 1}
                strokeDasharray={hoveredNode === integration.id ? "0" : "4 4"}
                initial={{ pathLength: 0, opacity: 0.3 }}
                animate={{
                  pathLength: hoveredNode === integration.id ? [0, 1, 1] : 1,
                  opacity: hoveredNode === integration.id ? 1 : 0.3,
                }}
                transition={{ duration: hoveredNode === integration.id ? 0.5 : 0 }}
              />
              <defs>
                <linearGradient id={`gradient-${integration.id}`} x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#8b5cf6" />
                  <stop offset="100%" stopColor="#3b82f6" />
                </linearGradient>
              </defs>
            </svg>
          </motion.div>
        )
      })}
    </div>
  )
}
