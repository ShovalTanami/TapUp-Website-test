"use client"

import { useTranslation } from "react-i18next"
import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ArrowRight, Bot, CheckCircle, Brain, MessageSquare, Zap, Users } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

export default function AIAgentsPage() {
  const { t } = useTranslation()

  const capabilities = [
    {
      icon: <MessageSquare className="w-8 h-8 text-blue-500" />,
      title: "Conversational AI",
      description: "Natural language processing for human-like interactions",
      features: ["Multi-language support", "Context awareness", "Sentiment analysis"],
    },
    {
      icon: <Brain className="w-8 h-8 text-purple-500" />,
      title: "Decision Making",
      description: "Intelligent decision-making based on data and rules",
      features: ["Machine learning", "Pattern recognition", "Predictive analytics"],
    },
    {
      icon: <Zap className="w-8 h-8 text-yellow-500" />,
      title: "Task Automation",
      description: "Autonomous execution of complex business processes",
      features: ["Workflow automation", "API integrations", "Real-time processing"],
    },
    {
      icon: <Users className="w-8 h-8 text-green-500" />,
      title: "Customer Service",
      description: "24/7 customer support with human-level understanding",
      features: ["Ticket routing", "Issue resolution", "Escalation handling"],
    },
  ]

  const useCases = [
    {
      title: "Customer Support Agent",
      description: "AI-powered chatbot that handles customer inquiries with 95% accuracy",
      image: "/images/ai-agents.png",
      benefits: ["24/7 availability", "Instant responses", "Multilingual support", "Cost reduction"],
    },
    {
      title: "Sales Assistant",
      description: "Intelligent agent that qualifies leads and schedules meetings",
      image: "/images/ai-integration.png",
      benefits: ["Lead qualification", "Meeting scheduling", "Follow-up automation", "CRM integration"],
    },
    {
      title: "Data Analyst Agent",
      description: "AI agent that analyzes data and generates insights automatically",
      image: "/images/bigdata-analytics.png",
      benefits: ["Automated reporting", "Trend analysis", "Anomaly detection", "Predictive insights"],
    },
  ]

  const benefits = [
    "Reduce response time by 90%",
    "Handle 1000+ conversations simultaneously",
    "Available 24/7 without breaks",
    "Learn and improve over time",
    "Integrate with existing systems",
    "Multilingual capabilities",
    "Cost-effective scaling",
    "Human-like interactions",
  ]

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Hero Section */}
      <section className="pt-32 pb-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 via-blue-500/5 to-background" />

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="inline-flex items-center px-6 py-3 bg-purple-500/10 text-purple-600 rounded-full text-sm font-medium mb-8"
            >
              <Bot className="w-4 h-4 mr-2" />
              AI Agents Development
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-4xl md:text-6xl font-bold mb-6"
            >
              Intelligent AI Agents for
              <span className="bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
                {" "}
                Your Business
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-xl text-muted-foreground mb-10 max-w-2xl mx-auto"
            >
              Deploy sophisticated AI agents that understand, learn, and act autonomously to transform your business
              operations.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="flex flex-col sm:flex-row gap-4 justify-center"
            >
              <Link href="/contact">
                <Button className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 px-8 py-6 text-lg rounded-full">
                  Build Your AI Agent
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
              <Button variant="outline" className="px-8 py-6 text-lg rounded-full">
                See Demo
              </Button>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Capabilities Section */}
      <section className="py-20 relative">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">AI Agent Capabilities</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Our AI agents are equipped with advanced capabilities to handle complex tasks and interactions.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {capabilities.map((capability, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -5 }}
              >
                <Card className="h-full p-6 bg-card/50 backdrop-blur-sm border-border/50 hover:border-purple-500/50 transition-all duration-300">
                  <div className="mb-4 p-3 bg-muted/30 rounded-xl inline-block">{capability.icon}</div>
                  <h3 className="text-lg font-semibold mb-3">{capability.title}</h3>
                  <p className="text-muted-foreground text-sm mb-4">{capability.description}</p>
                  <ul className="space-y-2">
                    {capability.features.map((feature, i) => (
                      <li key={i} className="flex items-center gap-2">
                        <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0" />
                        <span className="text-xs text-muted-foreground">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Use Cases Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">AI Agent Use Cases</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Discover how AI agents can transform different aspects of your business operations.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {useCases.map((useCase, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -5 }}
              >
                <Card className="h-full overflow-hidden bg-card/50 backdrop-blur-sm border-border/50 hover:border-purple-500/50 transition-all duration-300">
                  <div className="relative h-48 overflow-hidden">
                    <Image
                      src={useCase.image || "/placeholder.svg"}
                      alt={useCase.title}
                      fill
                      className="object-cover hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <CardContent className="p-6">
                    <h3 className="text-xl font-semibold mb-3">{useCase.title}</h3>
                    <p className="text-muted-foreground mb-4">{useCase.description}</p>
                    <div className="space-y-2">
                      {useCase.benefits.map((benefit, i) => (
                        <div key={i} className="flex items-center gap-2">
                          <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0" />
                          <span className="text-sm">{benefit}</span>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Transform Your Business with AI Agents</h2>
              <p className="text-muted-foreground mb-8">
                Our AI agents deliver measurable results that directly impact your business efficiency and customer
                satisfaction.
              </p>

              <div className="grid md:grid-cols-2 gap-4">
                {benefits.map((benefit, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="flex items-center gap-3"
                  >
                    <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                    <span className="text-sm">{benefit}</span>
                  </motion.div>
                ))}
              </div>

              <div className="mt-8">
                <Link href="/contact">
                  <Button className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700">
                    Start Your AI Journey
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <div className="bg-card/50 backdrop-blur-sm border border-border/50 rounded-2xl p-8">
                <h3 className="text-xl font-semibold mb-6">AI Agent Performance</h3>

                <div className="grid grid-cols-2 gap-4 mb-6">
                  <div className="text-center p-4 bg-muted/30 rounded-xl">
                    <div className="text-2xl font-bold text-green-600">95%</div>
                    <div className="text-sm text-muted-foreground">Accuracy</div>
                  </div>
                  <div className="text-center p-4 bg-muted/30 rounded-xl">
                    <div className="text-2xl font-bold text-blue-600">90%</div>
                    <div className="text-sm text-muted-foreground">Faster Response</div>
                  </div>
                  <div className="text-center p-4 bg-muted/30 rounded-xl">
                    <div className="text-2xl font-bold text-purple-600">24/7</div>
                    <div className="text-sm text-muted-foreground">Availability</div>
                  </div>
                  <div className="text-center p-4 bg-muted/30 rounded-xl">
                    <div className="text-2xl font-bold text-orange-600">1000+</div>
                    <div className="text-sm text-muted-foreground">Concurrent Users</div>
                  </div>
                </div>

                <div className="space-y-4">
                  <div>
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-sm">Customer Satisfaction</span>
                      <span className="text-sm font-medium">98%</span>
                    </div>
                    <div className="w-full bg-muted rounded-full h-2">
                      <div className="bg-gradient-to-r from-green-500 to-blue-500 h-2 rounded-full w-[98%]"></div>
                    </div>
                  </div>

                  <div>
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-sm">Task Completion Rate</span>
                      <span className="text-sm font-medium">94%</span>
                    </div>
                    <div className="w-full bg-muted rounded-full h-2">
                      <div className="bg-gradient-to-r from-purple-500 to-pink-500 h-2 rounded-full w-[94%]"></div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-purple-600/10 to-blue-600/10">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Deploy Your AI Agent?</h2>
            <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
              Let's create an intelligent AI agent that understands your business and delivers exceptional results.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact">
                <Button className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 px-8 py-6 text-lg rounded-full">
                  Get Started Now
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
              <Link href="/portfolio">
                <Button variant="outline" className="px-8 py-6 text-lg rounded-full">
                  See AI Agents in Action
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
