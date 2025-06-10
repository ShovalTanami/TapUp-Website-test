"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { useTranslation } from "react-i18next"
import { Mail, Calendar, MessageSquare, FileText, Users, BarChart3, Cloud, Webhook, Bot } from "lucide-react"

export function AutomationIntegrations() {
  const { t } = useTranslation()
  const [hoveredNode, setHoveredNode] = useState<string | null>(null)
  const [containerSize, setContainerSize] = useState({ width: 600, height: 600 })

  useEffect(() => {
    const updateSize = () => {
      const width = window.innerWidth
      if (width < 640) {
        setContainerSize({ width: 400, height: 400 })
      } else if (width < 1024) {
        setContainerSize({ width: 500, height: 500 })
      } else {
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
      name: "Email Integration",
      description: "Connect with email platforms like Gmail, Outlook, and more",
      icon: Mail,
      color: "text-blue-500",
      bgColor: "bg-blue-500/10",
    },
    {
      id: "calendar",
      name: "Calendar Sync",
      description: "Integrate with Google Calendar, Outlook Calendar, and scheduling tools",
      icon: Calendar,
      color: "text-green-500",
      bgColor: "bg-green-500/10",
    },
    {
      id: "chat",
      name: "Chat Platforms",
      description: "Connect with Slack, Teams, Discord, and messaging apps",
      icon: MessageSquare,
      color: "text-purple-500",
      bgColor: "bg-purple-500/10",
    },
    {
      id: "documents",
      name: "Document Management",
      description: "Integrate with Google Drive, Dropbox, SharePoint, and file systems",
      icon: FileText,
      color: "text-orange-500",
      bgColor: "bg-orange-500/10",
    },
    {
      id: "crm",
      name: "CRM Systems",
      description: "Connect with Salesforce, HubSpot, Pipedrive, and customer management tools",
      icon: Users,
      color: "text-pink-500",
      bgColor: "bg-pink-500/10",
    },
    {
      id: "analytics",
      name: "Analytics Tools",
      description: "Integrate with Google Analytics, Mixpanel, and business intelligence platforms",
      icon: BarChart3,
      color: "text-indigo-500",
      bgColor: "bg-indigo-500/10",
    },
    {
      id: "cloud",
      name: "Cloud Services",
      description: "Connect with AWS, Azure, Google Cloud, and cloud infrastructure",
      icon: Cloud,
      color: "text-cyan-500",
      bgColor: "bg-cyan-500/10",
    },
    {
      id: "webhooks",
      name: "Webhooks & APIs",
      description: "Custom integrations with REST APIs, GraphQL, and webhook endpoints",
      icon: Webhook,
      color: "text-yellow-500",
      bgColor: "bg-yellow-500/10",
    },
  ]

  // Calculate responsive radius based on container size
  const radius = Math.min(containerSize.width, containerSize.height) * 0.28
  const centerX = containerSize.width / 2
  const centerY = containerSize.height / 2

  return (
    <div
      className="relative mx-auto bg-gradient-to-br from-purple-500/5 via-blue-500/5 to-transparent rounded-3xl overflow-visible"
      style={{
        width: containerSize.width,
        height: containerSize.height,
        minHeight: "400px",
      }}
    >
      {/* Orbital rings - positioned to match the icon circle */}
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

      {/* Central hub */}
      <motion.div
        className="absolute bg-gradient-to-br from-purple-600 to-blue-600 rounded-3xl flex items-center justify-center shadow-2xl z-10"
        style={{
          width: containerSize.width < 640 ? 96 : 128,
          height: containerSize.width < 640 ? 96 : 128,
          left: centerX - (containerSize.width < 640 ? 48 : 64),
          top: centerY - (containerSize.width < 640 ? 48 : 64),
        }}
        whileHover={{ scale: 1.1 }}
        transition={{ type: "spring", stiffness: 300, damping: 20 }}
      >
        <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center">
          <Bot className="w-8 h-8 text-white" />
        </div>
        <div className="absolute inset-0 bg-gradient-to-br from-purple-600/50 to-blue-600/50 rounded-3xl animate-pulse" />
      </motion.div>

      {/* Central label */}
      <div
        className="absolute text-center z-20"
        style={{
          left: centerX,
          top: centerY + (containerSize.width < 640 ? 70 : 90),
          transform: "translateX(-50%)",
        }}
      >
        <h3 className={`font-semibold text-foreground ${containerSize.width < 640 ? "text-base" : "text-lg"}`}>
          Automation Hub
        </h3>
        <p className={`text-muted-foreground ${containerSize.width < 640 ? "text-xs" : "text-sm"}`}>
          Connect all your tools
        </p>
      </div>

      {/* Integration nodes */}
      {integrations.map((integration, index) => {
        const Icon = integration.icon
        const isHovered = hoveredNode === integration.id

        // Perfect circle calculation
        const angleStep = (2 * Math.PI) / integrations.length
        const angle = index * angleStep - Math.PI / 2 // Start from top

        // Calculate exact position
        const x = centerX + Math.cos(angle) * radius
        const y = centerY + Math.sin(angle) * radius

        const nodeSize = containerSize.width < 640 ? 64 : 80

        return (
          <motion.div
            key={integration.id}
            className="absolute z-20"
            style={{
              left: x - nodeSize / 2,
              top: y - nodeSize / 2,
              width: nodeSize,
              height: nodeSize,
            }}
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{
              type: "spring",
              stiffness: 260,
              damping: 20,
              delay: index * 0.1,
            }}
            whileHover={{ scale: 1.2, zIndex: 30 }}
            onHoverStart={() => setHoveredNode(integration.id)}
            onHoverEnd={() => setHoveredNode(null)}
          >
            {/* Connection line */}
            <motion.div
              className="absolute bg-gradient-to-r from-purple-500/30 to-transparent z-10"
              style={{
                width: radius,
                height: 2,
                left: nodeSize / 2,
                top: nodeSize / 2 - 1,
                transformOrigin: "0 50%",
                transform: `rotate(${angle + Math.PI}rad)`,
              }}
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ delay: 0.5 + index * 0.1, duration: 0.8 }}
            />

            {/* Node */}
            <motion.div
              className={`w-full h-full ${integration.bgColor} backdrop-blur-sm rounded-2xl flex items-center justify-center shadow-lg border border-border/50 cursor-pointer group relative z-20`}
              whileHover={{
                boxShadow: "0 20px 40px rgba(139, 92, 246, 0.3)",
                borderColor: "rgba(139, 92, 246, 0.5)",
              }}
            >
              <Icon
                className={`${containerSize.width < 640 ? "w-6 h-6" : "w-8 h-8"} ${integration.color} group-hover:scale-110 transition-transform`}
              />
            </motion.div>

            {/* Smart tooltip positioning */}
            {isHovered && (
              <motion.div
                className="absolute bg-card/95 backdrop-blur-sm border border-border/50 rounded-lg p-3 shadow-xl z-50 min-w-[200px] max-w-[250px]"
                style={{
                  left: x > centerX ? -210 : nodeSize + 10,
                  top: y < centerY ? nodeSize + 10 : -80,
                }}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.2 }}
              >
                <h4 className="font-semibold text-foreground mb-1 text-sm">{integration.name}</h4>
                <p className="text-xs text-muted-foreground">{integration.description}</p>
              </motion.div>
            )}

            {/* Floating particles */}
            <motion.div
              className={`absolute w-2 h-2 ${integration.color.replace("text-", "bg-")} rounded-full z-10`}
              style={{
                left: nodeSize / 2 - 4,
                top: nodeSize / 2 - 4,
              }}
              animate={{
                x: [0, 15, -15, 0],
                y: [0, -15, 15, 0],
                opacity: [0.3, 1, 0.3],
              }}
              transition={{
                duration: 4,
                delay: index * 0.5,
                repeat: Number.POSITIVE_INFINITY,
                ease: "easeInOut",
              }}
            />
          </motion.div>
        )
      })}
    </div>
  )
}
