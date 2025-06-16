"use client"

import { motion } from "framer-motion"
import { BarChart3, TrendingUp, Bot, Code, Cpu, Activity, CheckCircle, Workflow } from "lucide-react"

interface ServiceDashboardProps {
  type: "automation" | "development" | "ai" | "business" | "implementation" | "analytics"
}

export function ServiceDashboard({ type }: ServiceDashboardProps) {
  const renderAutomationDashboard = () => (
    <div className="absolute inset-0 p-6 flex flex-col justify-center">
      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 bg-purple-500 rounded-lg flex items-center justify-center">
            <Workflow className="w-4 h-4 text-white" />
          </div>
          <span className="text-sm font-medium">Automation Hub</span>
        </div>
        <div className="flex gap-1">
          <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
          <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
          <div className="w-2 h-2 bg-indigo-500 rounded-full"></div>
        </div>
      </div>

      {/* Workflow Steps */}
      <div className="flex items-center justify-between mb-6">
        {[1, 2, 3, 4, 5].map((step, i) => (
          <motion.div
            key={i}
            className="flex items-center"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: i * 0.2 }}
          >
            <div className="w-8 h-8 bg-purple-500 rounded-full flex items-center justify-center text-white text-xs font-bold">
              {step}
            </div>
            {i < 4 && (
              <motion.div
                className="w-8 h-0.5 bg-purple-300 mx-1"
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ delay: i * 0.2 + 0.1 }}
              />
            )}
          </motion.div>
        ))}
      </div>

      {/* Progress Bars */}
      <div className="space-y-3">
        {[
          { label: "API Integration", progress: 85, color: "bg-purple-500" },
          { label: "Data Sync", progress: 92, color: "bg-blue-500" },
          { label: "Workflow Active", progress: 78, color: "bg-indigo-500" },
        ].map((item, i) => (
          <div key={i} className="space-y-1">
            <div className="flex justify-between text-xs">
              <span>{item.label}</span>
              <span>{item.progress}%</span>
            </div>
            <div className="w-full h-2 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
              <motion.div
                className={`h-full ${item.color} rounded-full`}
                initial={{ width: 0 }}
                animate={{ width: `${item.progress}%` }}
                transition={{ delay: i * 0.3, duration: 1 }}
              />
            </div>
          </div>
        ))}
      </div>

      {/* Status Indicators */}
      <div className="flex justify-between mt-4">
        <div className="flex items-center gap-1 text-xs">
          <CheckCircle className="w-3 h-3 text-purple-500" />
          <span>5 Active</span>
        </div>
        <div className="flex items-center gap-1 text-xs">
          <Activity className="w-3 h-3 text-blue-500" />
          <span>Real-time</span>
        </div>
      </div>
    </div>
  )

  const renderDevelopmentDashboard = () => (
    <div className="absolute inset-0 p-6 flex flex-col justify-center">
      {/* Code Editor Header */}
      <div className="flex items-center justify-between mb-4">
        <div className="flex gap-1.5">
          <div className="w-3 h-3 bg-purple-400 rounded-full"></div>
          <div className="w-3 h-3 bg-blue-400 rounded-full"></div>
          <div className="w-3 h-3 bg-indigo-400 rounded-full"></div>
        </div>
        <Code className="w-4 h-4 text-blue-500" />
      </div>

      {/* Code Lines */}
      <div className="space-y-2 mb-4">
        {[
          { width: "w-full", color: "bg-blue-500" },
          { width: "w-4/5", color: "bg-gray-300 dark:bg-gray-600" },
          { width: "w-3/5", color: "bg-purple-500" },
          { width: "w-5/6", color: "bg-gray-300 dark:bg-gray-600" },
          { width: "w-2/3", color: "bg-indigo-500" },
          { width: "w-1/2", color: "bg-gray-300 dark:bg-gray-600" },
        ].map((line, i) => (
          <motion.div
            key={i}
            className={`h-1.5 ${line.color} rounded ${line.width}`}
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ delay: i * 0.1 }}
          />
        ))}
      </div>

      {/* Development Stats */}
      <div className="grid grid-cols-2 gap-3">
        <div className="bg-blue-500/10 rounded-lg p-3">
          <div className="text-lg font-bold text-blue-600">150+</div>
          <div className="text-xs text-muted-foreground">Projects</div>
        </div>
        <div className="bg-purple-500/10 rounded-lg p-3">
          <div className="text-lg font-bold text-purple-600">99%</div>
          <div className="text-xs text-muted-foreground">Uptime</div>
        </div>
      </div>
    </div>
  )

  const renderAIDashboard = () => (
    <div className="absolute inset-0 p-6 flex flex-col justify-center">
      {/* AI Network */}
      <div className="relative h-32 mb-4">
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-8 h-8 bg-indigo-600 rounded-full border-2 border-white shadow-lg z-10">
          <Bot className="w-4 h-4 text-white m-auto mt-1" />
        </div>

        {/* Surrounding nodes */}
        {[
          { x: "20%", y: "20%", size: "w-4 h-4", color: "bg-indigo-400" },
          { x: "80%", y: "20%", size: "w-3 h-3", color: "bg-indigo-500" },
          { x: "20%", y: "80%", size: "w-3 h-3", color: "bg-indigo-500" },
          { x: "80%", y: "80%", size: "w-4 h-4", color: "bg-indigo-400" },
        ].map((node, i) => (
          <motion.div
            key={i}
            className={`absolute ${node.size} ${node.color} rounded-full`}
            style={{ left: node.x, top: node.y }}
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: i * 0.2 }}
          />
        ))}

        {/* Connection lines */}
        <svg className="absolute inset-0 w-full h-full">
          {[
            { x1: "50%", y1: "50%", x2: "20%", y2: "20%" },
            { x1: "50%", y1: "50%", x2: "80%", y2: "20%" },
            { x1: "50%", y1: "50%", x2: "20%", y2: "80%" },
            { x1: "50%", y1: "50%", x2: "80%", y2: "80%" },
          ].map((line, i) => (
            <motion.line
              key={i}
              x1={line.x1}
              y1={line.y1}
              x2={line.x2}
              y2={line.y2}
              stroke="rgb(99 102 241)"
              strokeWidth="1"
              opacity="0.6"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ delay: i * 0.1 + 0.5 }}
            />
          ))}
        </svg>
      </div>

      {/* AI Metrics */}
      <div className="space-y-2">
        <div className="flex justify-between items-center">
          <span className="text-xs">Processing Power</span>
          <span className="text-xs font-bold text-indigo-600">94%</span>
        </div>
        <div className="w-full h-1.5 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
          <motion.div
            className="h-full bg-indigo-500 rounded-full"
            initial={{ width: 0 }}
            animate={{ width: "94%" }}
            transition={{ delay: 1, duration: 1 }}
          />
        </div>
      </div>
    </div>
  )

  const renderBusinessDashboard = () => (
    <div className="absolute inset-0 p-6 flex flex-col justify-center">
      {/* Business Metrics Header */}
      <div className="flex items-center justify-between mb-4">
        <div className="text-sm font-medium">Business Analytics</div>
        <TrendingUp className="w-4 h-4 text-blue-500" />
      </div>

      {/* Chart */}
      <div className="flex items-end justify-center gap-1 h-16 mb-4">
        {[12, 19, 15, 25, 22, 18, 28].map((height, i) => (
          <motion.div
            key={i}
            className="w-3 bg-blue-500 rounded-sm"
            style={{ height: `${height}px` }}
            initial={{ height: 0 }}
            animate={{ height: `${height}px` }}
            transition={{ delay: i * 0.1 }}
          />
        ))}
      </div>

      {/* KPIs */}
      <div className="grid grid-cols-2 gap-2 text-xs">
        <div className="text-center">
          <div className="font-bold text-blue-600">10x</div>
          <div className="text-muted-foreground">ROI</div>
        </div>
        <div className="text-center">
          <div className="font-bold text-blue-600">24/7</div>
          <div className="text-muted-foreground">Support</div>
        </div>
      </div>
    </div>
  )

  const renderImplementationDashboard = () => (
    <div className="absolute inset-0 p-6 flex flex-col justify-center">
      {/* Implementation Progress */}
      <div className="flex items-center justify-between mb-4">
        <div className="text-sm font-medium">AI Implementation</div>
        <Cpu className="w-4 h-4 text-purple-500" />
      </div>

      {/* Progress Steps */}
      <div className="space-y-3 mb-4">
        {[
          { step: "Strategy", progress: 100, color: "bg-purple-500" },
          { step: "Training", progress: 85, color: "bg-purple-400" },
          { step: "Deployment", progress: 60, color: "bg-purple-300" },
        ].map((item, i) => (
          <div key={i} className="space-y-1">
            <div className="flex justify-between text-xs">
              <span>{item.step}</span>
              <span>{item.progress}%</span>
            </div>
            <div className="w-full h-1.5 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
              <motion.div
                className={`h-full ${item.color} rounded-full`}
                initial={{ width: 0 }}
                animate={{ width: `${item.progress}%` }}
                transition={{ delay: i * 0.3, duration: 1 }}
              />
            </div>
          </div>
        ))}
      </div>

      {/* Success Rate */}
      <div className="text-center">
        <div className="text-2xl font-bold text-purple-600">99%</div>
        <div className="text-xs text-muted-foreground">Success Rate</div>
      </div>
    </div>
  )

  const renderAnalyticsDashboard = () => (
    <div className="absolute inset-0 p-6 flex flex-col justify-center">
      {/* Analytics Header */}
      <div className="flex items-center justify-between mb-4">
        <div className="text-sm font-medium">Data Analytics</div>
        <BarChart3 className="w-4 h-4 text-cyan-500" />
      </div>

      {/* Data Visualization */}
      <div className="relative h-20 mb-4">
        <svg className="w-full h-full">
          <motion.path
            d="M 0 60 Q 20 40 40 45 T 80 35 T 120 40 T 160 30"
            stroke="rgb(6 182 212)"
            strokeWidth="2"
            fill="none"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 2 }}
          />
          {/* Data points */}
          {[20, 40, 80, 120, 160].map((x, i) => (
            <motion.circle
              key={i}
              cx={x}
              cy={[40, 45, 35, 40, 30][i]}
              r="3"
              fill="rgb(6 182 212)"
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: i * 0.2 + 1 }}
            />
          ))}
        </svg>
      </div>

      {/* Data Stats */}
      <div className="grid grid-cols-2 gap-2 text-xs">
        <div className="text-center">
          <div className="font-bold text-cyan-600">TB+</div>
          <div className="text-muted-foreground">Data</div>
        </div>
        <div className="text-center">
          <div className="font-bold text-cyan-600">Real-time</div>
          <div className="text-muted-foreground">Processing</div>
        </div>
      </div>
    </div>
  )

  const dashboardComponents = {
    automation: renderAutomationDashboard,
    development: renderDevelopmentDashboard,
    ai: renderAIDashboard,
    business: renderBusinessDashboard,
    implementation: renderImplementationDashboard,
    analytics: renderAnalyticsDashboard,
  }

  return (
    <div className="relative w-full h-full min-h-[300px] bg-white/90 dark:bg-gray-800/90 rounded-xl border border-gray-200/50 dark:border-gray-700/50 shadow-lg overflow-hidden">
      {dashboardComponents[type]()}
    </div>
  )
}
