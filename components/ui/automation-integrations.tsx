"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { useTranslation } from "react-i18next"
import { Mail, Calendar, MessageSquare, FileText, Users, BarChart3, Cloud, Webhook, Bot } from "lucide-react"

export function AutomationIntegrations() {
  const { t } = useTranslation()
  const [hoveredNode, setHoveredNode] = useState<string | null>(null)

  const integrations = [
    {
      id: "email",
      name: t("integrations.email.name"),
      description: t("integrations.email.description"),
      icon: Mail,
      color: "text-blue-500",
      bgColor: "bg-blue-500/10",
      position: { x: 0, y: -180 },
    },
    {
      id: "calendar",
      name: t("integrations.calendar.name"),
      description: t("integrations.calendar.description"),
      icon: Calendar,
      color: "text-green-500",
      bgColor: "bg-green-500/10",
      position: { x: 127, y: -127 },
    },
    {
      id: "chat",
      name: t("integrations.chat.name"),
      description: t("integrations.chat.description"),
      icon: MessageSquare,
      color: "text-purple-500",
      bgColor: "bg-purple-500/10",
      position: { x: 180, y: 0 },
    },
    {
      id: "documents",
      name: t("integrations.documents.name"),
      description: t("integrations.documents.description"),
      icon: FileText,
      color: "text-orange-500",
      bgColor: "bg-orange-500/10",
      position: { x: 127, y: 127 },
    },
    {
      id: "crm",
      name: t("integrations.crm.name"),
      description: t("integrations.crm.description"),
      icon: Users,
      color: "text-pink-500",
      bgColor: "bg-pink-500/10",
      position: { x: 0, y: 180 },
    },
    {
      id: "analytics",
      name: t("integrations.analytics.name"),
      description: t("integrations.analytics.description"),
      icon: BarChart3,
      color: "text-indigo-500",
      bgColor: "bg-indigo-500/10",
      position: { x: -127, y: 127 },
    },
    {
      id: "cloud",
      name: t("integrations.cloud.name"),
      description: t("integrations.cloud.description"),
      icon: Cloud,
      color: "text-cyan-500",
      bgColor: "bg-cyan-500/10",
      position: { x: -180, y: 0 },
    },
    {
      id: "webhooks",
      name: t("integrations.webhooks.name"),
      description: t("integrations.webhooks.description"),
      icon: Webhook,
      color: "text-yellow-500",
      bgColor: "bg-yellow-500/10",
      position: { x: -127, y: -127 },
    },
  ]

  return (
    <div className="relative w-full h-[600px] flex items-center justify-center">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 via-blue-500/5 to-transparent rounded-3xl" />

      {/* Central hub */}
      <motion.div
        className="relative z-10 w-32 h-32 bg-gradient-to-br from-purple-600 to-blue-600 rounded-3xl flex items-center justify-center shadow-2xl"
        whileHover={{ scale: 1.1 }}
        transition={{ type: "spring", stiffness: 300, damping: 20 }}
      >
        <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center">
          <Bot className="w-8 h-8 text-white" />
        </div>
        <div className="absolute inset-0 bg-gradient-to-br from-purple-600/50 to-blue-600/50 rounded-3xl animate-pulse" />
      </motion.div>

      {/* Central label */}
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 translate-y-20 text-center z-20">
        <h3 className="text-lg font-semibold text-foreground">{t("integrations.hub.title")}</h3>
        <p className="text-sm text-muted-foreground">{t("integrations.hub.description")}</p>
      </div>

      {/* Integration nodes */}
      {integrations.map((integration, index) => {
        const Icon = integration.icon
        const angle = (index * 360) / integrations.length
        const isHovered = hoveredNode === integration.id

        return (
          <motion.div
            key={integration.id}
            className="absolute z-10"
            style={{
              left: `calc(50% + ${integration.position.x}px)`,
              top: `calc(50% + ${integration.position.y}px)`,
              transform: "translate(-50%, -50%)",
            }}
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{
              type: "spring",
              stiffness: 260,
              damping: 20,
              delay: index * 0.1,
            }}
            whileHover={{ scale: 1.2, z: 20 }}
            onHoverStart={() => setHoveredNode(integration.id)}
            onHoverEnd={() => setHoveredNode(null)}
          >
            {/* Connection line */}
            <motion.div
              className="absolute top-1/2 left-1/2 origin-left h-0.5 bg-gradient-to-r from-purple-500/30 to-transparent"
              style={{
                width: Math.sqrt(integration.position.x ** 2 + integration.position.y ** 2),
                transform: `translate(-100%, -50%) rotate(${Math.atan2(
                  integration.position.y,
                  integration.position.x,
                )}rad)`,
              }}
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ delay: 0.5 + index * 0.1, duration: 0.8 }}
            />

            {/* Node */}
            <motion.div
              className={`w-20 h-20 ${integration.bgColor} backdrop-blur-sm rounded-2xl flex items-center justify-center shadow-lg border border-border/50 cursor-pointer group`}
              whileHover={{
                boxShadow: "0 20px 40px rgba(139, 92, 246, 0.3)",
                borderColor: "rgba(139, 92, 246, 0.5)",
              }}
            >
              <Icon className={`w-8 h-8 ${integration.color} group-hover:scale-110 transition-transform`} />
            </motion.div>

            {/* Tooltip */}
            {isHovered && (
              <motion.div
                className="absolute top-full mt-4 left-1/2 transform -translate-x-1/2 bg-card/95 backdrop-blur-sm border border-border/50 rounded-lg p-3 shadow-xl z-30 min-w-[200px]"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 10 }}
              >
                <h4 className="font-semibold text-foreground mb-1">{integration.name}</h4>
                <p className="text-sm text-muted-foreground">{integration.description}</p>
              </motion.div>
            )}

            {/* Floating particles */}
            <motion.div
              className={`absolute w-2 h-2 ${integration.color.replace("text-", "bg-")} rounded-full`}
              animate={{
                x: [0, 20, -20, 0],
                y: [0, -20, 20, 0],
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

      {/* Orbital rings */}
      <div className="absolute inset-0 flex items-center justify-center">
        <motion.div
          className="w-96 h-96 border border-purple-500/20 rounded-full"
          animate={{ rotate: 360 }}
          transition={{ duration: 60, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
        />
        <motion.div
          className="absolute w-80 h-80 border border-blue-500/10 rounded-full"
          animate={{ rotate: -360 }}
          transition={{ duration: 45, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
        />
      </div>
    </div>
  )
}
