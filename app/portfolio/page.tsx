"use client"

import { useState } from "react"
import { useTranslation } from "react-i18next"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  ArrowRight,
  ExternalLink,
  Github,
  Users,
  Clock,
  Star,
  Filter,
  Search,
  Zap,
  Settings,
  Bot,
  Database,
  Brain,
  Smartphone,
} from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import { FadeIn, StaggerContainer, StaggerItem } from "@/components/ui/scroll-animations"
import { GlowEffect } from "@/components/ui/glow-effect"
import { ParticleBackground } from "@/components/ui/particle-background"

export default function PortfolioPage() {
  const { t, i18n } = useTranslation()
  const [selectedCategory, setSelectedCategory] = useState("All")
  const [searchTerm, setSearchTerm] = useState("")

  const categories = [
    { name: "All", icon: Filter },
    { name: "Automation", icon: Zap },
    { name: "Custom Development", icon: Settings },
    { name: "AI Agents", icon: Bot },
    { name: "Big Data", icon: Database },
    { name: "AI Integration", icon: Brain },
    { name: "Mobile Apps", icon: Smartphone },
  ]

  const projects = [
    {
      id: 1,
      title: "AI-Powered Customer Service Platform",
      client: "TechCorp Solutions",
      category: "AI Agents",
      description:
        "Developed an intelligent customer service platform that reduced response time by 80% and improved customer satisfaction scores.",
      image: "/images/ai-agents.png",
      technologies: ["React", "Node.js", "OpenAI", "MongoDB"],
      duration: "4 months",
      team: "5 developers",
      status: "Completed",
      results: [
        "80% reduction in response time",
        "95% customer satisfaction rate",
        "60% cost savings on support operations",
      ],
      features: [
        "Natural Language Processing",
        "Multi-language Support",
        "Real-time Analytics Dashboard",
        "Integration with CRM Systems",
      ],
      testimonial: {
        text: "TapUp transformed our customer service operations completely. The AI platform they built is incredibly intuitive and has significantly improved our customer experience.",
        author: "Sarah Johnson",
        role: "CTO, TechCorp Solutions",
      },
    },
    {
      id: 2,
      title: "E-commerce Automation Suite",
      client: "RetailPlus",
      category: "Automation",
      description:
        "Built a comprehensive automation system for inventory management, order processing, and customer communications.",
      image: "/images/automation-service.png",
      technologies: ["Python", "Django", "PostgreSQL", "Redis"],
      duration: "3 months",
      team: "4 developers",
      status: "Completed",
      results: ["90% reduction in manual tasks", "50% faster order processing", "99.9% system uptime"],
      features: [
        "Automated Inventory Management",
        "Order Processing Workflows",
        "Customer Communication Automation",
        "Real-time Reporting",
      ],
      testimonial: {
        text: "The automation suite has revolutionized our operations. We can now handle 3x more orders with the same team size.",
        author: "Michael Chen",
        role: "Operations Manager, RetailPlus",
      },
    },
    {
      id: 3,
      title: "Data Analytics Dashboard",
      client: "DataFlow Analytics",
      category: "Big Data",
      description:
        "Created a real-time analytics dashboard for processing and visualizing large datasets with interactive charts and reports.",
      image: "/images/bigdata-analytics.png",
      technologies: ["React", "D3.js", "Python", "Apache Spark"],
      duration: "5 months",
      team: "6 developers",
      status: "Completed",
      results: ["Real-time data processing", "Interactive visualizations", "Custom reporting capabilities"],
      features: [
        "Real-time Data Processing",
        "Interactive Visualizations",
        "Custom Report Builder",
        "Multi-source Data Integration",
      ],
      testimonial: {
        text: "The dashboard provides incredible insights into our data. The visualizations are beautiful and the performance is outstanding.",
        author: "Emma Davis",
        role: "Data Director, DataFlow Analytics",
      },
    },
    {
      id: 4,
      title: "Healthcare Management System",
      client: "MedCare Hospital",
      category: "Custom Development",
      description:
        "Developed a comprehensive hospital management system with patient records, appointment scheduling, and billing integration.",
      image: "/images/custom-development.png",
      technologies: ["React", "Node.js", "MySQL", "AWS"],
      duration: "6 months",
      team: "8 developers",
      status: "Completed",
      results: ["Streamlined patient management", "Reduced appointment wait times", "Improved billing accuracy"],
      features: [
        "Patient Record Management",
        "Appointment Scheduling",
        "Billing Integration",
        "Medical History Tracking",
      ],
      testimonial: {
        text: "The system has transformed how we manage our hospital operations. Everything is now digital and much more efficient.",
        author: "Dr. Robert Wilson",
        role: "Chief Medical Officer, MedCare Hospital",
      },
    },
    {
      id: 5,
      title: "Smart Home Mobile App",
      client: "HomeAuto Inc",
      category: "Mobile Apps",
      description:
        "Built a mobile application for controlling smart home devices with voice commands and automated scheduling.",
      image: "/images/custom-development.png",
      technologies: ["React Native", "Firebase", "IoT", "Voice API"],
      duration: "4 months",
      team: "5 developers",
      status: "Completed",
      results: ["Seamless device control", "Voice command integration", "Energy savings optimization"],
      features: ["Voice Control Integration", "Automated Scheduling", "Energy Monitoring", "Multi-device Support"],
      testimonial: {
        text: "The app is incredibly user-friendly and has made managing our smart home devices effortless.",
        author: "Lisa Thompson",
        role: "Product Manager, HomeAuto Inc",
      },
    },
    {
      id: 6,
      title: "AI Content Generation Platform",
      client: "ContentCorp",
      category: "AI Integration",
      description:
        "Integrated AI models for automated content generation, editing, and optimization for marketing campaigns.",
      image: "/images/ai-integration.png",
      technologies: ["Python", "OpenAI", "FastAPI", "PostgreSQL"],
      duration: "3 months",
      team: "4 developers",
      status: "Completed",
      results: ["10x faster content creation", "Consistent brand voice", "Improved engagement rates"],
      features: ["AI Content Generation", "Brand Voice Consistency", "SEO Optimization", "Multi-format Output"],
      testimonial: {
        text: "The AI platform has revolutionized our content creation process. We can now produce high-quality content at scale.",
        author: "James Rodriguez",
        role: "Marketing Director, ContentCorp",
      },
    },
  ]

  const filteredProjects = projects.filter((project) => {
    const matchesCategory = selectedCategory === "All" || project.category === selectedCategory
    const matchesSearch =
      project.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      project.client.toLowerCase().includes(searchTerm.toLowerCase()) ||
      project.description.toLowerCase().includes(searchTerm.toLowerCase())
    return matchesCategory && matchesSearch
  })

  const stats = [
    { number: "150+", label: "Projects Completed", icon: Star },
    { number: "50+", label: "Happy Clients", icon: Users },
    { number: "99%", label: "Success Rate", icon: Clock },
    { number: "24/7", label: "Support", icon: Settings },
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
                <Star className="w-4 h-4 mr-2" />
                Our Success Stories
              </div>
            </FadeIn>

            <FadeIn delay={0.2}>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                <span className="bg-gradient-to-r from-foreground via-purple-600 to-blue-600 bg-clip-text text-transparent">
                  Portfolio of Excellence
                </span>
              </h1>
            </FadeIn>

            <FadeIn delay={0.4}>
              <p className="text-lg md:text-xl text-muted-foreground mb-10 max-w-3xl mx-auto">
                Discover how we've helped businesses transform their operations with innovative technology solutions
              </p>
            </FadeIn>

            <FadeIn delay={0.6}>
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <Link href="/contact">
                  <Button className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white px-8 py-6 rounded-full text-lg font-medium shadow-lg shadow-purple-500/25 hover:shadow-purple-500/40 transition-all duration-300 group">
                    Start Your Project
                    <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </Link>
                <Link href="/services">
                  <Button
                    variant="outline"
                    className="border-purple-500 text-purple-500 hover:bg-purple-500/10 px-8 py-6 rounded-full text-lg"
                  >
                    View Services
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

      {/* Filter and Search */}
      <section className="py-12 relative overflow-hidden">
        <div className="container mx-auto px-4">
          <FadeIn>
            <div className="max-w-4xl mx-auto">
              {/* Search Bar */}
              <div className="relative mb-8">
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-muted-foreground h-5 w-5" />
                <input
                  type="text"
                  placeholder="Search projects..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-12 pr-4 py-4 bg-card/50 backdrop-blur-sm border border-border rounded-2xl focus:outline-none focus:ring-2 focus:ring-purple-500 text-foreground placeholder-muted-foreground"
                />
              </div>

              {/* Category Filters */}
              <div className="flex flex-wrap gap-3 justify-center">
                {categories.map((category) => {
                  const Icon = category.icon
                  return (
                    <button
                      key={category.name}
                      onClick={() => setSelectedCategory(category.name)}
                      className={`flex items-center gap-2 px-6 py-3 rounded-full text-sm font-medium transition-all duration-300 ${
                        selectedCategory === category.name
                          ? "bg-gradient-to-r from-purple-600 to-blue-600 text-white shadow-lg shadow-purple-500/25"
                          : "bg-card/50 backdrop-blur-sm border border-border text-muted-foreground hover:text-foreground hover:border-purple-500/50"
                      }`}
                    >
                      <Icon className="h-4 w-4" />
                      {category.name}
                    </button>
                  )
                })}
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-12 relative overflow-hidden">
        <div className="container mx-auto px-4">
          <StaggerContainer>
            <div className="grid lg:grid-cols-2 gap-8">
              {filteredProjects.map((project, index) => (
                <StaggerItem key={project.id}>
                  <GlowEffect>
                    <Card className="h-full bg-card/50 backdrop-blur-sm border-border/50 hover:border-purple-500/50 transition-all duration-300 overflow-hidden group">
                      <div className="relative h-64 overflow-hidden">
                        <Image
                          src={project.image || "/placeholder.svg"}
                          alt={project.title}
                          fill
                          className="object-cover group-hover:scale-105 transition-transform duration-300"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                        <div className="absolute top-4 left-4">
                          <Badge className="bg-purple-500/90 text-white">{project.category}</Badge>
                        </div>
                        <div className="absolute top-4 right-4">
                          <Badge
                            variant="outline"
                            className={`${
                              project.status === "Completed"
                                ? "bg-green-500/90 text-white border-green-500"
                                : "bg-blue-500/90 text-white border-blue-500"
                            }`}
                          >
                            {project.status}
                          </Badge>
                        </div>
                        <div className="absolute bottom-4 left-4 right-4">
                          <h3 className="text-xl font-bold text-white mb-2">{project.title}</h3>
                          <p className="text-white/80 text-sm">{project.client}</p>
                        </div>
                      </div>

                      <CardContent className="p-8">
                        <p className="text-muted-foreground mb-6 leading-relaxed">{project.description}</p>

                        <div className="grid md:grid-cols-2 gap-6 mb-6">
                          <div className="flex items-center gap-3">
                            <Clock className="h-5 w-5 text-purple-500" />
                            <div>
                              <p className="text-sm font-medium">Duration</p>
                              <p className="text-sm text-muted-foreground">{project.duration}</p>
                            </div>
                          </div>
                          <div className="flex items-center gap-3">
                            <Users className="h-5 w-5 text-blue-500" />
                            <div>
                              <p className="text-sm font-medium">Team Size</p>
                              <p className="text-sm text-muted-foreground">{project.team}</p>
                            </div>
                          </div>
                        </div>

                        <div className="mb-6">
                          <h4 className="font-semibold mb-3">Key Results</h4>
                          <ul className="space-y-2">
                            {project.results.map((result, i) => (
                              <li key={i} className="flex items-center gap-3">
                                <Star className="h-4 w-4 text-yellow-500 flex-shrink-0" />
                                <span className="text-sm text-muted-foreground">{result}</span>
                              </li>
                            ))}
                          </ul>
                        </div>

                        <div className="mb-6">
                          <h4 className="font-semibold mb-3">Technologies Used</h4>
                          <div className="flex flex-wrap gap-2">
                            {project.technologies.map((tech, i) => (
                              <Badge key={i} variant="outline" className="text-xs">
                                {tech}
                              </Badge>
                            ))}
                          </div>
                        </div>

                        <div className="bg-muted/30 rounded-lg p-4 mb-6">
                          <p className="text-sm italic text-muted-foreground mb-3">"{project.testimonial.text}"</p>
                          <div className="flex items-center gap-3">
                            <div className="w-8 h-8 bg-gradient-to-br from-purple-500 to-blue-600 rounded-full flex items-center justify-center">
                              <span className="text-white text-xs font-bold">
                                {project.testimonial.author
                                  .split(" ")
                                  .map((n) => n[0])
                                  .join("")}
                              </span>
                            </div>
                            <div>
                              <p className="text-sm font-medium">{project.testimonial.author}</p>
                              <p className="text-xs text-muted-foreground">{project.testimonial.role}</p>
                            </div>
                          </div>
                        </div>

                        <div className="flex gap-3">
                          <Button variant="outline" size="sm" className="flex-1">
                            <ExternalLink className="h-4 w-4 mr-2" />
                            View Details
                          </Button>
                          <Button variant="outline" size="sm">
                            <Github className="h-4 w-4" />
                          </Button>
                        </div>
                      </CardContent>
                    </Card>
                  </GlowEffect>
                </StaggerItem>
              ))}
            </div>
          </StaggerContainer>

          {filteredProjects.length === 0 && (
            <div className="text-center py-16">
              <div className="w-24 h-24 bg-muted rounded-full flex items-center justify-center mx-auto mb-6">
                <Search className="h-12 w-12 text-muted-foreground" />
              </div>
              <h3 className="text-xl font-semibold mb-2">No projects found</h3>
              <p className="text-muted-foreground">Try adjusting your search or filter criteria</p>
            </div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-blue-600" />
        <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-20" />

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center text-white">
            <FadeIn>
              <h2 className="text-3xl md:text-5xl font-bold mb-6">Ready to Start Your Project?</h2>
              <p className="text-xl mb-8 text-white/90">
                Let's create something amazing together. Contact us to discuss your next project.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/contact">
                  <Button
                    size="lg"
                    className="bg-white text-purple-600 hover:bg-white/90 px-8 py-4 text-lg font-medium"
                  >
                    Start Your Project
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </Link>
                <Link href="/services">
                  <Button
                    variant="outline"
                    size="lg"
                    className="border-white text-white hover:bg-white/10 px-8 py-4 text-lg"
                  >
                    View Our Services
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
