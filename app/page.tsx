"use client"

import { useState, useEffect } from "react"
import { useTranslation } from "react-i18next"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import {
  ArrowRight,
  CheckCircle,
  Zap,
  Settings,
  Bot,
  Target,
  Users,
  Clock,
  Star,
  Play,
  Award,
  Shield,
  Rocket,
  Globe,
  Code,
  MessageSquare,
  Calendar,
  ExternalLink,
  Mail,
  Phone,
} from "lucide-react"
import Link from "next/link"
import { motion, useScroll, useTransform } from "framer-motion"
import { AnimatedCounter } from "@/components/ui/animated-counter"
import { FloatingIcons } from "@/components/ui/floating-icons"
import { AnimatedTechColumns } from "@/components/ui/animated-tech-columns"
import { ParticleBackground } from "@/components/ui/particle-background"
import { GlowEffect } from "@/components/ui/glow-effect"
import { AutomationIntegrations } from "@/components/ui/automation-integrations"
import {
  FadeIn,
  Parallax,
  StaggerContainer,
  StaggerItem,
  TextReveal,
  ScrollProgress,
} from "@/components/ui/scroll-animations"

// Import the new ServicesGrid component at the top
import { ServicesGrid } from "@/components/ui/services-grid"

export default function HomePage() {
  const { t, i18n } = useTranslation()
  const [scrollY, setScrollY] = useState(0)
  const { scrollYProgress } = useScroll()
  const y = useTransform(scrollYProgress, [0, 1], [0, -50])
  const currentLanguage = i18n.language

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const stats = [
    { number: 150, label: t("home:stats.projects"), icon: Target, suffix: "+" },
    { number: 99, label: t("home:stats.satisfaction"), icon: Star, suffix: "%" },
    { number: 24, label: t("home:stats.support"), icon: Clock, suffix: "/7" },
    { number: 50, label: t("home:stats.clients"), icon: Users, suffix: "+" },
  ]

  const services = [
    {
      icon: <Zap className="h-10 w-10 text-purple-500" />,
      title: t("services:automation.title"),
      description: t("services:automation.description"),
      features: t("services:automation.features", { returnObjects: true }) as string[],
      href: "/services/automation",
    },
    {
      icon: <Settings className="h-10 w-10 text-blue-500" />,
      title: t("services:custom.title"),
      description: t("services:custom.description"),
      features: t("services:custom.features", { returnObjects: true }) as string[],
      href: "/services/custom-development",
    },
    {
      icon: <Bot className="h-10 w-10 text-indigo-500" />,
      title: t("services:aiAgents.title"),
      description: t("services:aiAgents.description"),
      features: t("services:aiAgents.features", { returnObjects: true }) as string[],
      href: "/services/ai-agents",
    },
  ]

  const testimonials = [
    {
      name: t("home:testimonials.client1.name"),
      role: t("home:testimonials.client1.role"),
      content: t("home:testimonials.client1.text"),
      image: "https://avatar.vercel.sh/sarah",
      rating: 5,
    },
    {
      name: t("home:testimonials.client2.name"),
      role: t("home:testimonials.client2.role"),
      content: t("home:testimonials.client2.text"),
      image: "https://avatar.vercel.sh/michael",
      rating: 5,
    },
    {
      name: t("home:testimonials.client3.name"),
      role: t("home:testimonials.client3.role"),
      content: t("home:testimonials.client3.text"),
      image: "https://avatar.vercel.sh/emma",
      rating: 5,
    },
  ]

  const recentProjects = [
    {
      title: "AI Customer Service Platform",
      client: "TechCorp",
      category: "AI Automation",
      image: "https://images.unsplash.com/photo-1551434678-e076c223a692?w=500&h=300&fit=crop",
      status: t("common:status.completed"),
    },
    {
      title: "E-commerce Integration System",
      client: "RetailPlus",
      category: "Custom Development",
      image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=500&h=300&fit=crop",
      status: t("common:status.inProgress"),
    },
    {
      title: "Data Analytics Dashboard",
      client: "DataFlow",
      category: "Big Data",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=500&h=300&fit=crop",
      status: t("common:status.completed"),
    },
  ]

  const recentPosts = [
    {
      title:
        currentLanguage === "he" ? "עתיד הבינה המלאכותית באוטומציה עסקית" : "The Future of AI in Business Automation",
      excerpt:
        currentLanguage === "he"
          ? "גלה איך בינה מלאכותית משנה תהליכים עסקיים ויוצרת הזדמנויות חדשות"
          : "Discover how AI is transforming business processes and creating new opportunities",
      date: "2024-01-15",
      category: "AI",
      readTime: currentLanguage === "he" ? "5 דקות קריאה" : "5 min read",
    },
    {
      title: currentLanguage === "he" ? "בניית אפליקציות אינטרנט מדרגיות" : "Building Scalable Web Applications",
      excerpt:
        currentLanguage === "he"
          ? "שיטות עבודה מומלצות לפיתוח אפליקציות שגדלות עם העסק שלך"
          : "Best practices for developing applications that grow with your business",
      date: "2024-01-10",
      category: currentLanguage === "he" ? "פיתוח" : "Development",
      readTime: currentLanguage === "he" ? "7 דקות קריאה" : "7 min read",
    },
    {
      title: currentLanguage === "he" ? "אסטרטגיות טרנספורמציה דיגיטלית" : "Digital Transformation Strategies",
      excerpt:
        currentLanguage === "he"
          ? "מדריך מקיף לטרנספורמציה דיגיטלית מוצלחת"
          : "A comprehensive guide to successful digital transformation",
      date: "2024-01-05",
      category: currentLanguage === "he" ? "אסטרטגיה" : "Strategy",
      readTime: currentLanguage === "he" ? "6 דקות קריאה" : "6 min read",
    },
  ]

  return (
    <div className="min-h-screen bg-background text-foreground overflow-hidden">
      <ScrollProgress />

      {/* Hero Section */}
      <section className="section-hero">
        <ParticleBackground />

        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 via-blue-500/5 to-background dark:from-purple-900/20 dark:to-background" />
          <motion.div
            className="absolute top-20 right-20 w-96 h-96 bg-gradient-to-br from-purple-500/20 to-blue-500/20 rounded-full blur-3xl"
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.3, 0.6, 0.3],
            }}
            transition={{
              duration: 8,
              repeat: Number.POSITIVE_INFINITY,
              ease: "easeInOut",
            }}
          />
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-5xl mx-auto text-center">
            <FadeIn delay={0.2}>
              <div className="badge-style mb-8">
                <Zap className="w-4 h-4 ml-2" />
                {t("home:hero.badge") || "פתרונות טכנולוגיים מתקדמים"}
              </div>
            </FadeIn>

            <TextReveal delay={0.4}>
              <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold mb-6 leading-tight">
                <span className="text-gradient">{t("home:hero.title") || "פתרונות טכנולוגיים מתקדמים לעסק שלכם"}</span>
              </h1>
            </TextReveal>

            <FadeIn delay={0.6}>
              <p className="text-lg md:text-xl text-muted-foreground mb-10 max-w-3xl mx-auto leading-relaxed">
                {t("home:hero.description") ||
                  "אנחנו מתמחים בפיתוח פתרונות טכנולוגיים מותאמים אישית, אוטומציה עסקית ובינה מלאכותית שיעזרו לעסק שלכם לצמוח ולהתפתח"}
              </p>
            </FadeIn>

            <FadeIn delay={0.8}>
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
                <Link href="/contact">
                  <Button className="btn-primary group">
                    {t("common:buttons.getStarted") || "בואו נתחיל"}
                    <ArrowRight className="mr-2 h-5 w-5 group-hover:translate-x-1 transition-transform rotate-180" />
                  </Button>
                </Link>

                <Button variant="outline" className="btn-secondary group">
                  <Play className="ml-2 h-5 w-5 group-hover:scale-110 transition-transform" />
                  {t("common:buttons.watchDemo") || "צפו בהדגמה"}
                </Button>
              </div>
            </FadeIn>

            {/* Trust Indicators */}
            <FadeIn delay={1.0}>
              <div className="flex flex-wrap items-center justify-center gap-8 text-muted-foreground mb-16">
                <div className="flex items-center">
                  <CheckCircle className="w-5 h-5 ml-2 text-green-500" />
                  <span className="text-sm">{t("home:trusted") || "מהימן על ידי מאות עסקים"}</span>
                </div>
                <div className="flex items-center">
                  <Star className="w-5 h-5 ml-1 text-yellow-400 fill-current" />
                  <span className="text-sm">4.9/5 {t("home:rating") || "דירוג"}</span>
                </div>
                <div className="flex items-center">
                  <Globe className="w-5 h-5 ml-2 text-blue-500" />
                  <span className="text-sm">{t("home:globalReach") || "פתרונות גלובליים"}</span>
                </div>
              </div>
            </FadeIn>

            {/* Automation Integrations */}
            <FadeIn delay={1.2}>
              <GlowEffect>
                <AutomationIntegrations />
              </GlowEffect>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="section-standard">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <FadeIn direction="left">
              <div className="badge-style mb-6">
                <Users className="w-4 h-4 mr-2" />
                {t("home:about.badge")}
              </div>
              <h2 className="text-3xl md:text-5xl font-bold mb-6">
                <span className="text-gradient">{t("home:about.title")}</span>
              </h2>
              <p className="text-muted-foreground mb-8 text-lg leading-relaxed">{t("home:about.description")}</p>
              <div className="grid md:grid-cols-2 gap-6 mb-8">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-blue-600 rounded-xl flex items-center justify-center">
                    <Award className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold">{t("home:about.expertTeam")}</h3>
                    <p className="text-sm text-muted-foreground">{t("home:about.expertTeamDesc")}</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-emerald-600 rounded-xl flex items-center justify-center">
                    <Shield className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold">{t("home:about.provenResults")}</h3>
                    <p className="text-sm text-muted-foreground">{t("home:about.provenResultsDesc")}</p>
                  </div>
                </div>
              </div>
              <Link href="/about">
                <Button variant="outline" className="group">
                  {t("common:buttons.learnMore")}
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
            </FadeIn>

            <FadeIn direction="right">
              <Parallax speed={-0.2}>
                <GlowEffect>
                  <div className="relative">
                    <img
                      src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=600&h=400&fit=crop"
                      alt="TapUp Team"
                      className="rounded-2xl shadow-2xl w-full h-auto"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-2xl" />
                  </div>
                </GlowEffect>
              </Parallax>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-500/5 to-blue-500/5 dark:from-purple-900/10 dark:to-blue-900/10" />

        <div className="container mx-auto px-4 relative z-10">
          <FadeIn>
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-5xl font-bold mb-4">
                {currentLanguage === "he" ? "מהימן על ידי מובילי התעשייה" : "Trusted by Industry Leaders"}
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                {currentLanguage === "he"
                  ? "הצטרף לאלפי חברות ששינו את הפעילות שלהן עם הפתרונות שלנו"
                  : "Join thousands of companies that have transformed their operations with our solutions"}
              </p>
            </div>
          </FadeIn>

          <StaggerContainer>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {stats.map((stat, index) => {
                const Icon = stat.icon
                return (
                  <StaggerItem key={index}>
                    <GlowEffect>
                      <Card className="card-hover text-center p-8">
                        <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg">
                          <Icon className="w-8 h-8 text-white" />
                        </div>
                        <div className="text-4xl font-bold mb-2">
                          <AnimatedCounter end={stat.number} suffix={stat.suffix} />
                        </div>
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

      {/* Services Section */}
      <section id="services" className="section-standard">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(120,50,255,0.1),transparent_50%)] dark:bg-[radial-gradient(circle_at_top_right,rgba(120,50,255,0.2),transparent_50%)]" />

        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-16 max-w-4xl mx-auto">
            <FadeIn>
              <div className="badge-style mb-6">
                <Settings className="w-4 h-4 ml-2" />
                {t("home:services.badge") || "השירותים שלנו"}
              </div>
              <h2 className="text-3xl md:text-5xl font-bold mb-6">
                {t("home:services.title") || "פתרונות מתקדמים לכל צורך"}
              </h2>
              <p className="text-muted-foreground text-lg leading-relaxed">
                {t("home:services.subtitle") ||
                  "אנחנו מציעים מגוון רחב של שירותים טכנולוגיים מתקדמים שיעזרו לעסק שלכם להגיע ליעדים"}
              </p>
            </FadeIn>
          </div>

          <FadeIn delay={0.3}>
            <ServicesGrid />
          </FadeIn>
        </div>
      </section>

      {/* Recent Projects */}
      <section className="section-standard">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <FadeIn>
              <div className="badge-style mb-6">
                <Rocket className="w-4 h-4 mr-2" />
                {t("home:projects.badge")}
              </div>
              <h2 className="text-3xl md:text-5xl font-bold mb-4">{t("home:projects.title")}</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">{t("home:projects.subtitle")}</p>
            </FadeIn>
          </div>

          <StaggerContainer>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
              {recentProjects.map((project, index) => (
                <StaggerItem key={index}>
                  <GlowEffect>
                    <Card className="card-hover overflow-hidden">
                      <div className="relative h-48 overflow-hidden">
                        <img
                          src={project.image || "/placeholder.svg"}
                          alt={project.title}
                          className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                        />
                        <div className="absolute top-4 left-4">
                          <span className="px-3 py-1 bg-purple-500/90 text-white rounded-full text-xs font-medium">
                            {project.category}
                          </span>
                        </div>
                        <div className="absolute top-4 right-4">
                          <span
                            className={`px-3 py-1 rounded-full text-xs font-medium ${
                              project.status === t("common:status.completed")
                                ? "bg-green-500/90 text-white"
                                : "bg-blue-500/90 text-white"
                            }`}
                          >
                            {project.status}
                          </span>
                        </div>
                      </div>
                      <CardContent className="p-6">
                        <h3 className="text-lg font-semibold mb-2">{project.title}</h3>
                        <p className="text-muted-foreground text-sm mb-4">
                          {t("common:client")}: {project.client}
                        </p>
                        <Button variant="ghost" size="sm" className="p-0 h-auto text-purple-600 hover:text-purple-700">
                          {t("common:buttons.viewDetails")}
                          <ExternalLink className="ml-2 h-4 w-4" />
                        </Button>
                      </CardContent>
                    </Card>
                  </GlowEffect>
                </StaggerItem>
              ))}
            </div>
          </StaggerContainer>

          <div className="text-center">
            <Link href="/portfolio">
              <Button variant="outline" className="group">
                {t("common:buttons.viewAll")} {currentLanguage === "he" ? "הפרויקטים" : "Projects"}
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Technology Stack */}
      <section className="section-standard">
        <div className="absolute inset-0 bg-gradient-to-b from-muted/30 to-background dark:from-muted/10 dark:to-background" />

        <div className="container mx-auto px-4 relative z-10">
          <FadeIn>
            <div className="text-center mb-16">
              <div className="badge-style mb-6">
                <Code className="w-4 h-4 mr-2" />
                {t("home:technology.badge")}
              </div>
              <h2 className="text-3xl md:text-5xl font-bold mb-4">{t("home:technology.title")}</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">{t("home:technology.subtitle")}</p>
            </div>
          </FadeIn>

          <FadeIn>
            <AnimatedTechColumns />
          </FadeIn>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="section-standard">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-500/5 to-blue-500/5 dark:from-purple-900/10 dark:to-blue-900/10" />

        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-16">
            <FadeIn>
              <div className="badge-style mb-6">
                <Star className="w-4 h-4 mr-2" />
                {t("home:testimonials.badge")}
              </div>
              <h2 className="text-3xl md:text-5xl font-bold mb-4">{t("home:testimonials.title")}</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">{t("home:testimonials.subtitle")}</p>
            </FadeIn>
          </div>

          <StaggerContainer>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {testimonials.map((testimonial, index) => (
                <StaggerItem key={index}>
                  <GlowEffect>
                    <Card className="card-hover h-full">
                      <CardContent className="p-8">
                        <div className="flex items-center mb-6">
                          <div className="relative w-12 h-12 rounded-full overflow-hidden mr-4">
                            <img
                              src={testimonial.image || "/placeholder.svg"}
                              alt={testimonial.name}
                              className="w-full h-full object-cover"
                            />
                          </div>
                          <div>
                            <h4 className="font-bold">{testimonial.name}</h4>
                            <p className="text-muted-foreground text-sm">{testimonial.role}</p>
                          </div>
                        </div>

                        <div className="flex mb-4">
                          {[...Array(testimonial.rating)].map((_, i) => (
                            <Star key={i} className="h-4 w-4 text-yellow-400 fill-current" />
                          ))}
                        </div>

                        <p className="text-muted-foreground italic leading-relaxed">"{testimonial.content}"</p>
                      </CardContent>
                    </Card>
                  </GlowEffect>
                </StaggerItem>
              ))}
            </div>
          </StaggerContainer>
        </div>
      </section>

      {/* Recent Blog Posts */}
      <section className="section-standard">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <FadeIn>
              <div className="badge-style mb-6">
                <MessageSquare className="w-4 h-4 mr-2" />
                {t("home:blog.badge")}
              </div>
              <h2 className="text-3xl md:text-5xl font-bold mb-4">{t("home:blog.title")}</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">{t("home:blog.subtitle")}</p>
            </FadeIn>
          </div>

          <StaggerContainer>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
              {recentPosts.map((post, index) => (
                <StaggerItem key={index}>
                  <GlowEffect>
                    <Card className="card-hover h-full">
                      <CardContent className="p-6">
                        <div className="flex items-center gap-4 mb-4 text-sm text-muted-foreground">
                          <span className="px-3 py-1 bg-purple-500/10 text-purple-600 rounded-full text-xs font-medium">
                            {post.category}
                          </span>
                          <div className="flex items-center">
                            <Calendar className="h-4 w-4 mr-1" />
                            {new Date(post.date).toLocaleDateString(currentLanguage === "he" ? "he-IL" : "en-US")}
                          </div>
                        </div>
                        <h3 className="text-lg font-semibold mb-3 hover:text-purple-600 transition-colors line-clamp-2">
                          {post.title}
                        </h3>
                        <p className="text-muted-foreground mb-4 line-clamp-3">{post.excerpt}</p>
                        <div className="flex items-center justify-between">
                          <span className="text-sm text-muted-foreground">{post.readTime}</span>
                          <Button
                            variant="ghost"
                            size="sm"
                            className="p-0 h-auto text-purple-600 hover:text-purple-700"
                          >
                            {t("common:buttons.readMore")}
                            <ArrowRight className="ml-2 h-4 w-4" />
                          </Button>
                        </div>
                      </CardContent>
                    </Card>
                  </GlowEffect>
                </StaggerItem>
              ))}
            </div>
          </StaggerContainer>

          <div className="text-center">
            <Link href="/blog">
              <Button variant="outline" className="group">
                {t("common:buttons.viewAll")} {currentLanguage === "he" ? "המאמרים" : "Articles"}
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="section-standard">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 via-blue-500/10 to-background dark:from-purple-900/20 dark:to-background" />

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <FadeIn>
                <div className="badge-style mb-6">
                  <MessageSquare className="w-4 h-4 mr-2" />
                  {t("home:contact.badge")}
                </div>
                <h2 className="text-3xl md:text-5xl font-bold mb-4">{t("home:contact.title")}</h2>
                <p className="text-muted-foreground max-w-2xl mx-auto">{t("home:contact.subtitle")}</p>
              </FadeIn>
            </div>

            <FadeIn>
              <GlowEffect>
                <Card className="card-hover">
                  <CardContent className="p-8 md:p-12">
                    <div className="grid md:grid-cols-2 gap-12">
                      <div>
                        <h3 className="text-2xl font-bold mb-6">{t("home:contact.formTitle")}</h3>
                        <div className="space-y-6">
                          <div className="flex items-center gap-4">
                            <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-blue-600 rounded-xl flex items-center justify-center">
                              <Mail className="w-6 h-6 text-white" />
                            </div>
                            <div>
                              <h4 className="font-semibold">{t("home:contact.emailUs")}</h4>
                              <p className="text-muted-foreground">hello@tapup.co.il</p>
                            </div>
                          </div>
                          <div className="flex items-center gap-4">
                            <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-emerald-600 rounded-xl flex items-center justify-center">
                              <Phone className="w-6 h-6 text-white" />
                            </div>
                            <div>
                              <h4 className="font-semibold">{t("home:contact.callUs")}</h4>
                              <p className="text-muted-foreground">+972-50-123-4567</p>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className="space-y-6">
                        <div>
                          <label className="block text-sm font-medium mb-2">{t("home:contact.nameLabel")}</label>
                          <input
                            type="text"
                            className="w-full px-4 py-3 bg-background border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
                            placeholder={t("home:contact.namePlaceholder")}
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-medium mb-2">{t("home:contact.emailLabel")}</label>
                          <input
                            type="email"
                            className="w-full px-4 py-3 bg-background border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
                            placeholder={t("home:contact.emailPlaceholder")}
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-medium mb-2">{t("home:contact.messageLabel")}</label>
                          <textarea
                            rows={4}
                            className="w-full px-4 py-3 bg-background border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
                            placeholder={t("home:contact.messagePlaceholder")}
                          />
                        </div>
                        <Button className="btn-primary w-full py-3">{t("common:buttons.sendMessage")}</Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </GlowEffect>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-standard">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-blue-600" />
        <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-20" />

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center text-white">
            <FadeIn>
              <h2 className="text-3xl md:text-5xl font-bold mb-6">{t("home:cta.title")}</h2>
              <p className="text-xl mb-8 text-white/90">{t("home:cta.description")}</p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/contact">
                  <Button
                    size="lg"
                    className="bg-white text-purple-600 hover:bg-white/90 px-8 py-4 text-lg font-medium"
                  >
                    {t("home:cta.button")}
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </Link>
                <Link href="/portfolio">
                  <Button
                    variant="outline"
                    size="lg"
                    className="border-white text-white hover:bg-white/10 px-8 py-4 text-lg"
                  >
                    {t("common:buttons.viewWork")}
                  </Button>
                </Link>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      <FloatingIcons />
    </div>
  )
}
