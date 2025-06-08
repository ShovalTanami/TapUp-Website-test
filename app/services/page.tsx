"use client"

import { useTranslation } from "react-i18next"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import {
  ArrowRight,
  CheckCircle,
  Zap,
  Settings,
  Bot,
  Database,
  Brain,
  Smartphone,
  Shield,
  Clock,
  Users,
  Star,
  Target,
} from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import { FadeIn, StaggerContainer, StaggerItem } from "@/components/ui/scroll-animations"
import { GlowEffect } from "@/components/ui/glow-effect"
import { ParticleBackground } from "@/components/ui/particle-background"

export default function ServicesPage() {
  const { t, i18n } = useTranslation()
  const isRTL = i18n.language === "he"

  const services = [
    {
      icon: <Zap className="h-12 w-12 text-purple-500" />,
      title: t("services.items.automation.title"),
      description: t("services.items.automation.description"),
      features: [
        t("services.items.automation.features.0"),
        t("services.items.automation.features.1"),
        t("services.items.automation.features.2"),
        "API Integration & Webhooks",
        "Real-time Monitoring & Analytics",
        "Custom Workflow Design",
      ],
      href: "/services/automation",
      image: "/images/automation-service.png",
      color: "from-purple-500 to-purple-600",
      bgColor: "bg-purple-500/10",
      borderColor: "border-purple-500/20",
    },
    {
      icon: <Settings className="h-12 w-12 text-blue-500" />,
      title: t("services.items.custom.title"),
      description: t("services.items.custom.description"),
      features: [
        t("services.items.custom.features.0"),
        t("services.items.custom.features.1"),
        t("services.items.custom.features.2"),
        "Cloud Infrastructure Setup",
        "Performance Optimization",
        "Security Implementation",
      ],
      href: "/services/custom-development",
      image: "/images/custom-development.png",
      color: "from-blue-500 to-blue-600",
      bgColor: "bg-blue-500/10",
      borderColor: "border-blue-500/20",
    },
    {
      icon: <Bot className="h-12 w-12 text-indigo-500" />,
      title: t("services.items.aiAgents.title"),
      description: t("services.items.aiAgents.description"),
      features: [
        t("services.items.aiAgents.features.0"),
        t("services.items.aiAgents.features.1"),
        t("services.items.aiAgents.features.2"),
        "Natural Language Processing",
        "Machine Learning Models",
        "Intelligent Decision Making",
      ],
      href: "/services/ai-agents",
      image: "/images/ai-agents.png",
      color: "from-indigo-500 to-indigo-600",
      bgColor: "bg-indigo-500/10",
      borderColor: "border-indigo-500/20",
    },
    {
      icon: <Database className="h-12 w-12 text-green-500" />,
      title: "Big Data & Analytics",
      description:
        "Transform your data into actionable insights with advanced analytics and machine learning solutions.",
      features: [
        "Data Pipeline Development",
        "Real-time Analytics Dashboards",
        "Predictive Analytics Models",
        "Data Warehouse Solutions",
        "Business Intelligence Tools",
        "Custom Reporting Systems",
      ],
      href: "/services/big-data",
      image: "/images/bigdata-analytics.png",
      color: "from-green-500 to-green-600",
      bgColor: "bg-green-500/10",
      borderColor: "border-green-500/20",
    },
    {
      icon: <Brain className="h-12 w-12 text-pink-500" />,
      title: "AI Integration",
      description: "Seamlessly integrate artificial intelligence into your existing systems and workflows.",
      features: [
        "AI Model Development",
        "Computer Vision Solutions",
        "Natural Language Processing",
        "Recommendation Systems",
        "Fraud Detection Systems",
        "Automated Content Generation",
      ],
      href: "/services/ai-integration",
      image: "/images/ai-integration.png",
      color: "from-pink-500 to-pink-600",
      bgColor: "bg-pink-500/10",
      borderColor: "border-pink-500/20",
    },
    {
      icon: <Smartphone className="h-12 w-12 text-orange-500" />,
      title: "Mobile App Development",
      description: "Create powerful mobile applications that engage users and drive business growth.",
      features: [
        "Native iOS & Android Apps",
        "Cross-platform Development",
        "UI/UX Design",
        "App Store Optimization",
        "Push Notifications",
        "Offline Functionality",
      ],
      href: "/services/mobile-development",
      image: "/images/custom-development.png",
      color: "from-orange-500 to-orange-600",
      bgColor: "bg-orange-500/10",
      borderColor: "border-orange-500/20",
    },
  ]

  const benefits = [
    {
      icon: <Clock className="h-8 w-8 text-purple-500" />,
      title: "Faster Time to Market",
      description: "Accelerate your product development with our proven methodologies and expert team.",
    },
    {
      icon: <Shield className="h-8 w-8 text-blue-500" />,
      title: "Enterprise Security",
      description: "Built-in security measures and compliance standards to protect your business data.",
    },
    {
      icon: <Users className="h-8 w-8 text-green-500" />,
      title: "Dedicated Support",
      description: "24/7 technical support and maintenance to ensure your systems run smoothly.",
    },
    {
      icon: <Target className="h-8 w-8 text-orange-500" />,
      title: "Scalable Solutions",
      description: "Future-proof solutions that grow with your business and adapt to changing needs.",
    },
  ]

  const stats = [
    { number: "150+", label: "Projects Completed", icon: Target },
    { number: "99%", label: "Client Satisfaction", icon: Star },
    { number: "24/7", label: "Support Available", icon: Clock },
    { number: "50+", label: "Happy Clients", icon: Users },
  ]

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <ParticleBackground />

        <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 via-blue-500/10 to-background dark:from-purple-900/20 dark:to-background" />

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <FadeIn>
              <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-purple-500/10 to-blue-500/10 border border-purple-500/20 rounded-full text-purple-600 dark:text-purple-300 text-sm font-medium mb-8 backdrop-blur-sm">
                <Settings className="w-4 h-4 mr-2" />
                {t("services.badge")}
              </div>
            </FadeIn>

            <FadeIn delay={0.2}>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                <span className="bg-gradient-to-r from-foreground via-purple-600 to-blue-600 bg-clip-text text-transparent">
                  {t("services.title")}
                </span>
              </h1>
            </FadeIn>

            <FadeIn delay={0.4}>
              <p className="text-lg md:text-xl text-muted-foreground mb-10 max-w-3xl mx-auto">
                {t("services.description")}
              </p>
            </FadeIn>

            <FadeIn delay={0.6}>
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <Link href="/contact">
                  <Button className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white px-8 py-6 rounded-full text-lg font-medium shadow-lg shadow-purple-500/25 hover:shadow-purple-500/40 transition-all duration-300 group">
                    {t("services.cta")}
                    <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </Link>
                <Link href="/portfolio">
                  <Button
                    variant="outline"
                    className="border-purple-500 text-purple-500 hover:bg-purple-500/10 px-8 py-6 rounded-full text-lg"
                  >
                    {t("services.viewWork")}
                  </Button>
                </Link>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-500/5 to-blue-500/5 dark:from-purple-900/10 dark:to-blue-900/10" />

        <div className="container mx-auto px-4 relative z-10">
          <StaggerContainer>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {stats.map((stat, index) => {
                const Icon = stat.icon
                return (
                  <StaggerItem key={index}>
                    <GlowEffect>
                      <Card className="text-center p-8 bg-card/50 backdrop-blur-sm border-border/50 hover:border-purple-500/50 transition-all duration-300">
                        <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg">
                          <Icon className="w-8 h-8 text-white" />
                        </div>
                        <div className="text-4xl font-bold mb-2 text-foreground">{stat.number}</div>
                        <p className="text-muted-foreground">{stat.label}</p>
                      </Card>
                    </GlowEffect>
                  </StaggerItem>
                )
              })}
            </div>
          </StaggerContainer>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-24 relative overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <FadeIn>
              <h2 className="text-3xl md:text-5xl font-bold mb-4">Our Service Portfolio</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Comprehensive solutions designed to transform your business operations and drive growth
              </p>
            </FadeIn>
          </div>

          <StaggerContainer>
            <div className="grid lg:grid-cols-2 gap-8">
              {services.map((service, index) => (
                <StaggerItem key={index}>
                  <Link href={service.href}>
                    <GlowEffect>
                      <Card
                        className={`h-full bg-card/50 backdrop-blur-sm border-border/50 hover:${service.borderColor} transition-all duration-300 overflow-hidden group`}
                      >
                        <CardContent className="p-0">
                          <div className="grid md:grid-cols-2 h-full">
                            <div className="p-8 flex flex-col justify-between">
                              <div>
                                <div
                                  className={`mb-6 p-4 ${service.bgColor} rounded-2xl inline-block group-hover:scale-110 transition-transform duration-300`}
                                >
                                  {service.icon}
                                </div>
                                <h3 className="text-2xl font-bold mb-4 group-hover:text-purple-600 transition-colors">
                                  {service.title}
                                </h3>
                                <p className="text-muted-foreground mb-6 leading-relaxed">{service.description}</p>
                                <ul className="space-y-3 mb-6">
                                  {service.features.slice(0, 3).map((feature, i) => (
                                    <li key={i} className="flex items-center gap-3">
                                      <CheckCircle className="h-4 w-4 text-purple-500 flex-shrink-0" />
                                      <span className="text-sm text-muted-foreground">{feature}</span>
                                    </li>
                                  ))}
                                </ul>
                              </div>
                              <div className="flex items-center text-purple-600 font-medium group-hover:gap-3 gap-2 transition-all duration-300">
                                Learn More
                                <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                              </div>
                            </div>
                            <div className="relative h-64 md:h-full">
                              <Image
                                src={service.image || "/placeholder.svg"}
                                alt={service.title}
                                fill
                                className="object-cover group-hover:scale-105 transition-transform duration-300"
                              />
                              <div
                                className={`absolute inset-0 bg-gradient-to-t ${service.color} opacity-20 group-hover:opacity-30 transition-opacity duration-300`}
                              />
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    </GlowEffect>
                  </Link>
                </StaggerItem>
              ))}
            </div>
          </StaggerContainer>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-muted/30 to-background dark:from-muted/10 dark:to-background" />

        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-16">
            <FadeIn>
              <div className="inline-flex items-center px-4 py-2 bg-green-500/10 text-green-600 rounded-full text-sm font-medium mb-6">
                <Star className="w-4 h-4 mr-2" />
                Why Choose TapUp
              </div>
              <h2 className="text-3xl md:text-5xl font-bold mb-4">The TapUp Advantage</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Experience the difference with our proven approach to technology solutions
              </p>
            </FadeIn>
          </div>

          <StaggerContainer>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {benefits.map((benefit, index) => (
                <StaggerItem key={index}>
                  <GlowEffect>
                    <Card className="text-center p-8 bg-card/50 backdrop-blur-sm border-border/50 hover:border-purple-500/30 transition-all duration-300 h-full">
                      <div className="w-16 h-16 bg-gradient-to-br from-purple-500/10 to-blue-500/10 rounded-2xl flex items-center justify-center mx-auto mb-6">
                        {benefit.icon}
                      </div>
                      <h3 className="text-lg font-semibold mb-4">{benefit.title}</h3>
                      <p className="text-muted-foreground text-sm leading-relaxed">{benefit.description}</p>
                    </Card>
                  </GlowEffect>
                </StaggerItem>
              ))}
            </div>
          </StaggerContainer>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-blue-600" />
        <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-20" />

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center text-white">
            <FadeIn>
              <h2 className="text-3xl md:text-5xl font-bold mb-6">Ready to Transform Your Business?</h2>
              <p className="text-xl mb-8 text-white/90">
                Let's discuss how our services can help you achieve your goals and drive growth
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/contact">
                  <Button
                    size="lg"
                    className="bg-white text-purple-600 hover:bg-white/90 px-8 py-4 text-lg font-medium"
                  >
                    Get Started Today
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </Link>
                <Link href="/portfolio">
                  <Button
                    variant="outline"
                    size="lg"
                    className="border-white text-white hover:bg-white/10 px-8 py-4 text-lg"
                  >
                    View Our Portfolio
                  </Button>
                </Link>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>
    </div>
  )
}
