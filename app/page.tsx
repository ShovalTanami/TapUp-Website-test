"use client"

import { useState, useEffect } from "react"
import { BaseButton } from "@/components/ui/base-button"
import { Card, CardContent } from "@/components/ui/card"
import {
  Zap,
  Settings,
  Bot,
  Target,
  Users,
  Clock,
  Star,
  Award,
  Shield,
  Rocket,
  Code,
  MessageSquare,
  Calendar,
  ExternalLink,
  Mail,
  Phone,
  ArrowLeft,
  Cpu,
} from "lucide-react"
import Link from "next/link"
import { motion, useScroll, useTransform } from "framer-motion"
import { AnimatedCounter } from "@/components/ui/animated-counter"
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
import { ServicesGrid } from "@/components/ui/services-grid"

export default function HomePage() {
  const [scrollY, setScrollY] = useState(0)
  const { scrollYProgress } = useScroll()
  const y = useTransform(scrollYProgress, [0, 1], [0, -50])

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const stats = [
    { number: 150, label: "פרויקטים מוצלחים", icon: Target, suffix: "+" },
    { number: 99, label: "שביעות רצון לקוחות", icon: Star, suffix: "%" },
    { number: 24, label: "תמיכה זמינה", icon: Clock, suffix: "/7" },
    { number: 50, label: "לקוחות מרוצים", icon: Users, suffix: "+" },
  ]

  const services = [
    {
      icon: <Zap className="h-10 w-10 text-purple-500" />,
      title: "פיתוח אוטומציות ואינטגרציות",
      description: "ייעול תהליכים עסקיים והפחתת עבודה ידנית באמצעות פתרונות אוטומציה חכמים",
      features: ["עיצוב ויישום זרימות עבודה", "אינטגרציה של API וסנכרון נתונים", "ניטור וניתוח בזמן אמת"],
      href: "/services/automation",
    },
    {
      icon: <Settings className="h-10 w-10 text-blue-500" />,
      title: "פיתוח מערכות מותאמות אישית",
      description: "פתרונות תוכנה מותאמים הבנויים במיוחד לצרכים ולדרישות העסקיות שלכם",
      features: ["אפליקציות אינטרנט ומובייל", "עיצוב ואופטימיזציה של מסדי נתונים", "הקמת תשתית ענן"],
      href: "/services/custom",
    },
    {
      icon: <Bot className="h-10 w-10 text-indigo-500" />,
      title: "פיתוח סוכני AI ומודלי AI",
      description: "סוכני בינה מלאכותית חכמים המשפרים את הפעילות שלכם ומספקים יכולות קבלת החלטות אוטומטיות",
      features: ["עיבוד שפה טבעית", "מודלים של למידת מכונה", "קבלת החלטות אוטומטית"],
      href: "/services/ai-agents",
    },
    {
      icon: <Code className="h-10 w-10 text-purple-500" />,
      title: "שירותי תוכנה לעסקים וחברות",
      description: "פתרונות תוכנה מקצה לקצה לעסקים וחברות בכל הגדלים",
      features: ["פיתוח תוכנה", "תחזוקה שוטפת", "תמיכה טכנית"],
      href: "/services/business",
    },
    {
      icon: <Cpu className="h-10 w-10 text-blue-500" />,
      title: "הטמעת AI בארגונים",
      description: "ליווי מקצועי בהטמעת טכנולוגיות AI בארגונים",
      features: ["אסטרטגיית AI", "הדרכות צוות", "פיתוח יכולות"],
      href: "/services/ai-implementation",
    },
  ]

  const testimonials = [
    {
      name: "שרה כהן",
      role: 'מנכ"לית, TechStart',
      content: "TapUp שינתה לחלוטין את התהליכים העסקיים שלנו. פתרונות האוטומציה שהם יישמו חסכו לנו 40% מהזמן התפעולי.",
      image: "https://avatar.vercel.sh/sarah",
      rating: 5,
    },
    {
      name: "מיכאל לוי",
      role: "מנהל טכנולוגיות, DataFlow",
      content:
        "האינטגרציה של הבינה המלאכותית שהם פיתחו הגדילה את הפרודוקטיביות שלנו ב-60%. צוות מקצועי עם תוצאות יוצאות דופן.",
      image: "https://avatar.vercel.sh/michael",
      rating: 5,
    },
    {
      name: "רחל דוד",
      role: "מנהלת תפעול, RetailPlus",
      content: "עבודה מעולה על פרויקט הפיתוח המותאם שלנו. הם סיפקו בדיוק מה שהיינו צריכים, בזמן ובתקציב.",
      image: "https://avatar.vercel.sh/emma",
      rating: 5,
    },
  ]

  const recentProjects = [
    {
      title: "פלטפורמת שירות לקוחות AI",
      client: "TechCorp",
      category: "אוטומציה AI",
      image: "https://images.unsplash.com/photo-1551434678-e076c223a692?w=500&h=300&fit=crop",
      status: "הושלם",
    },
    {
      title: "מערכת אינטגרציה לאי-קומרס",
      client: "RetailPlus",
      category: "פיתוח מותאם",
      image: "https://images.unsplash.com/photo-1556742049-bebda4e38f71?w=500&h=300&fit=crop",
      status: "בתהליך",
    },
    {
      title: "דשבורד ניתוח נתונים",
      client: "DataFlow",
      category: "ביג דאטה",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=500&h=300&fit=crop",
      status: "הושלם",
    },
  ]

  const recentPosts = [
    {
      title: "עתיד הבינה המלאכותית באוטומציה עסקית",
      excerpt: "גלו איך בינה מלאכותית משנה תהליכים עסקיים ויוצרת הזדמנויות חדשות",
      date: "2024-01-15",
      category: "AI",
      readTime: "5 דקות קריאה",
    },
    {
      title: "בניית אפליקציות אינטרנט מדרגיות",
      excerpt: "שיטות עבודה מומלצות לפיתוח אפליקציות שגדלות עם העסק שלכם",
      date: "2024-01-10",
      category: "פיתוח",
      readTime: "7 דקות קריאה",
    },
    {
      title: "אסטרטגיות טרנספורמציה דיגיטלית",
      excerpt: "מדריך מקיף לטרנספורמציה דיגיטלית מוצלחת",
      date: "2024-01-05",
      category: "אסטרטגיה",
      readTime: "6 דקות קריאה",
    },
  ]

  return (
    <div className="min-h-screen bg-background text-foreground overflow-hidden" dir="rtl">
      <ScrollProgress />

      {/* Hero Section */}
      <section className="section-hero">
        <ParticleBackground />

        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 via-blue-500/5 to-background dark:from-purple-900/20 dark:to-background" />
          <motion.div
            className="absolute top-20 left-20 w-96 h-96 bg-gradient-to-br from-purple-500/20 to-blue-500/20 rounded-full blur-3xl"
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
                <Zap className="w-4 h-4 mr-2" />
                פתרונות טכנולוגיים מתקדמים
              </div>
            </FadeIn>

            <TextReveal delay={0.4}>
              <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold mb-6 leading-tight">
                <span className="text-gradient">פתרונות טכנולוגיים מתקדמים לעסק שלכם</span>
              </h1>
            </TextReveal>

            <FadeIn delay={0.6}>
              <p className="text-lg md:text-xl text-muted-foreground mb-10 max-w-3xl mx-auto leading-relaxed">
                אנחנו מתמחים בפיתוח פתרונות טכנולוגיים מותאמים אישית, אוטומציה עסקית ובינה מלאכותית שיעזרו לעסק שלכם
                לצמוח ולהתפתח
              </p>
            </FadeIn>

            <FadeIn delay={0.8}>
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
                <Link href="/contact">
                  <BaseButton variant="primary" size="lg" className="group">
                    בואו נתחיל
                    <ArrowLeft className="mr-2 h-5 w-5 group-hover:-translate-x-1 transition-transform" />
                  </BaseButton>
                </Link>

                <Link href="/services">
                  <BaseButton variant="secondary" size="lg" className="group">
                    <Settings className="ml-2 h-5 w-5" />
                    השירותים שלנו
                  </BaseButton>
                </Link>
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
            <FadeIn direction="right">
              <div className="badge-style mb-6">
                <Users className="w-4 h-4 mr-2" />
                אודותינו
              </div>
              <h2 className="text-3xl md:text-5xl font-bold mb-6">
                <span className="text-gradient">משנים עסקים באמצעות חדשנות</span>
              </h2>
              <p className="text-muted-foreground mb-8 text-lg leading-relaxed">
                אנחנו צוות של טכנולוגים נלהבים שמתמחים בעזרה לעסקים לנצל טכנולוגיה מתקדמת כדי להשיג את המטרות שלהם. עם
                שנות ניסיון באוטומציה, בינה מלאכותית ופיתוח מותאם, אנחנו מספקים פתרונות שמניעים תוצאות אמיתיות.
              </p>
              <div className="grid md:grid-cols-2 gap-6 mb-8">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-blue-600 rounded-xl flex items-center justify-center">
                    <Award className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold">צוות מומחים</h3>
                    <p className="text-sm text-muted-foreground">אנשי מקצוע מוסמכים</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-blue-600 rounded-xl flex items-center justify-center">
                    <Shield className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold">תוצאות מוכחות</h3>
                    <p className="text-sm text-muted-foreground">150+ פרויקטים מוצלחים</p>
                  </div>
                </div>
              </div>
              <Link href="/about">
                <BaseButton variant="secondary" className="group">
                  למד עוד
                  <ArrowLeft className="mr-2 h-4 w-4 group-hover:-translate-x-1 transition-transform" />
                </BaseButton>
              </Link>
            </FadeIn>

            <FadeIn direction="left">
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
                הצטרפו לאלפי חברות ששינו את הפעילות שלהן עם הפתרונות שלנו
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                הצטרפו לאלפי חברות ששינו את הפעילות שלהן עם הפתרונות שלנו
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
                <Settings className="w-4 h-4 mr-2" />
                השירותים שלנו
              </div>
              <h2 className="text-3xl md:text-5xl font-bold mb-6">פתרונות מתקדמים לכל צורך</h2>
              <p className="text-muted-foreground text-lg leading-relaxed">
                אנחנו מציעים מגוון רחב של שירותים טכנולוגיים מתקדמים שיעזרו לעסק שלכם להגיע ליעדים
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
                פרויקטים אחרונים
              </div>
              <h2 className="text-3xl md:text-5xl font-bold mb-4">העבודות האחרונות שלנו</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                גלו איך עזרנו לעסקים לשנות את הפעילות שלהם עם פתרונות חדשניים
              </p>
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
                          src="/placeholder.svg?height=300&width=500"
                          alt={project.title}
                          className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                        />
                        <div className="absolute top-4 right-4">
                          <span className="px-3 py-1 bg-purple-500/90 text-white rounded-full text-xs font-medium">
                            {project.category}
                          </span>
                        </div>
                        <div className="absolute top-4 left-4">
                          <span
                            className={`px-3 py-1 rounded-full text-xs font-medium ${
                              project.status === "הושלם" ? "bg-purple-500/90 text-white" : "bg-blue-500/90 text-white"
                            }`}
                          >
                            {project.status}
                          </span>
                        </div>
                      </div>
                      <CardContent className="p-6">
                        <h3 className="text-lg font-semibold mb-2">{project.title}</h3>
                        <p className="text-muted-foreground text-sm mb-4">לקוח: {project.client}</p>
                        <BaseButton
                          variant="ghost"
                          size="sm"
                          className="p-0 h-auto text-purple-600 hover:text-purple-700"
                        >
                          צפה בפרטים
                          <ExternalLink className="mr-2 h-4 w-4" />
                        </BaseButton>
                      </CardContent>
                    </Card>
                  </GlowEffect>
                </StaggerItem>
              ))}
            </div>
          </StaggerContainer>

          <div className="text-center">
            <Link href="/portfolio">
              <BaseButton variant="secondary" className="group">
                צפה בכל הפרויקטים
                <ArrowLeft className="mr-2 h-4 w-4 group-hover:-translate-x-1 transition-transform" />
              </BaseButton>
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
                הטכנולוגיות שלנו
              </div>
              <h2 className="text-3xl md:text-5xl font-bold mb-4">בנוי עם טכנולוגיות מודרניות</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                אנחנו משתמשים בטכנולוגיות מתקדמות כדי לספק פתרונות חזקים, מדרגיים ועמידים בפני עתיד
              </p>
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
                סיפורי הצלחה של לקוחות
              </div>
              <h2 className="text-3xl md:text-5xl font-bold mb-4">מה הלקוחות שלנו אומרים</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">אל תסתמכו רק על המילים שלנו</p>
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
                          <div className="relative w-12 h-12 rounded-full overflow-hidden ml-4">
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
                            <Star key={i} className="h-4 w-4 text-purple-400 fill-current" />
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
                תובנות אחרונות
              </div>
              <h2 className="text-3xl md:text-5xl font-bold mb-4">מהבלוג שלנו</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                הישאר מעודכן עם הטרנדים והתובנות האחרונים בטכנולוגיה ואוטומציה עסקית
              </p>
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
                            <Calendar className="h-4 w-4 ml-1" />
                            {new Date(post.date).toLocaleDateString("he-IL")}
                          </div>
                        </div>
                        <h3 className="text-lg font-semibold mb-3 hover:text-purple-600 transition-colors line-clamp-2">
                          {post.title}
                        </h3>
                        <p className="text-muted-foreground mb-4 line-clamp-3">{post.excerpt}</p>
                        <div className="flex items-center justify-between">
                          <span className="text-sm text-muted-foreground">{post.readTime}</span>
                          <BaseButton
                            variant="ghost"
                            size="sm"
                            className="p-0 h-auto text-purple-600 hover:text-purple-700"
                          >
                            קרא עוד
                            <ArrowLeft className="mr-2 h-4 w-4" />
                          </BaseButton>
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
              <BaseButton variant="secondary" className="group">
                צפה בכל המאמרים
                <ArrowLeft className="mr-2 h-4 w-4 group-hover:-translate-x-1 transition-transform" />
              </BaseButton>
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
                  צור קשר
                </div>
                <h2 className="text-3xl md:text-5xl font-bold mb-4">מוכן לשנות את העסק שלך?</h2>
                <p className="text-muted-foreground max-w-2xl mx-auto">
                  בוא נדבר על איך אנחנו יכולים לעזור לך להשיג את המטרות שלך עם הפתרונות החדשניים שלנו
                </p>
              </FadeIn>
            </div>

            <FadeIn>
              <GlowEffect>
                <Card className="card-hover">
                  <CardContent className="p-8 md:p-12">
                    <div className="grid md:grid-cols-2 gap-12">
                      <div>
                        <h3 className="text-2xl font-bold mb-6">בוא נתחיל שיחה</h3>
                        <div className="space-y-6">
                          <div className="flex items-center gap-4">
                            <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-blue-600 rounded-xl flex items-center justify-center">
                              <Mail className="w-6 h-6 text-white" />
                            </div>
                            <div>
                              <h4 className="font-semibold">שלח לנו אימייל</h4>
                              <p className="text-muted-foreground">hello@tapup.co.il</p>
                            </div>
                          </div>
                          <div className="flex items-center gap-4">
                            <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-blue-600 rounded-xl flex items-center justify-center">
                              <Phone className="w-6 h-6 text-white" />
                            </div>
                            <div>
                              <h4 className="font-semibold">התקשר אלינו</h4>
                              <p className="text-muted-foreground">+972-50-123-4567</p>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className="space-y-6">
                        <div>
                          <label className="block text-sm font-medium mb-2">שם</label>
                          <input
                            type="text"
                            className="w-full px-4 py-3 bg-background border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
                            placeholder="השם שלך"
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-medium mb-2">אימייל</label>
                          <input
                            type="email"
                            className="w-full px-4 py-3 bg-background border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
                            placeholder="האימייל שלך"
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-medium mb-2">הודעה</label>
                          <textarea
                            rows={4}
                            className="w-full px-4 py-3 bg-background border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
                            placeholder="ספר לנו על הפרויקט שלך..."
                          />
                        </div>
                        <BaseButton variant="primary" className="w-full">
                          שלח הודעה
                        </BaseButton>
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
              <h2 className="text-3xl md:text-5xl font-bold mb-6">מוכן להתחיל?</h2>
              <p className="text-xl mb-8 text-white/90">
                הצטרף למאות עסקים ששינו את הפעילות שלהם עם הפתרונות החדשניים שלנו
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/contact">
                  <BaseButton variant="primary" size="lg">
                    התחל את הפרויקט שלך
                    <ArrowLeft className="mr-2 h-5 w-5" />
                  </BaseButton>
                </Link>
                <Link href="/portfolio">
                  <BaseButton
                    variant="secondary"
                    size="lg"
                    className="bg-white text-purple-600 hover:bg-white/90 px-8 py-4 text-lg font-medium"
                  >
                    צפה בעבודות שלנו
                  </BaseButton>
                </Link>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>
    </div>
  )
}
