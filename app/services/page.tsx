"use client"

import { Card, CardContent } from "@/components/ui/card"
import { BaseButton } from "@/components/ui/base-button"
import {
  ArrowLeft,
  CheckCircle,
  Zap,
  Settings,
  Bot,
  Database,
  Shield,
  Clock,
  Users,
  Star,
  Target,
  Code,
  Cpu,
  Layers,
  Rocket,
  TrendingUp,
  Award,
  Lightbulb,
} from "lucide-react"
import Link from "next/link"
import { FadeIn, StaggerContainer, StaggerItem } from "@/components/ui/scroll-animations"
import { GlowEffect } from "@/components/ui/glow-effect"
import { ParticleBackground } from "@/components/ui/particle-background"
import { ServiceDashboard } from "@/components/ui/service-dashboard"
import { AnimatedCounter } from "@/components/ui/animated-counter"

export default function ServicesPage() {
  const services = [
    {
      icon: <Zap className="h-8 w-8 text-purple-500" />,
      title: "פיתוח אוטומציות ואינטגרציות",
      description: "ייעול תהליכים עסקיים והפחתת עבודה ידנית באמצעות פתרונות אוטומציה חכמים ומתקדמים",
      features: [
        "עיצוב ויישום זרימות עבודה אוטומטיות",
        "אינטגרציה של API וסנכרון נתונים בזמן אמת",
        "ניטור וניתוח ביצועים מתמיד",
      ],
      href: "/services/automation",
      dashboardType: "automation",
      color: "from-purple-500 to-purple-600",
      bgColor: "bg-purple-500/10",
      borderColor: "border-purple-500/20",
      stats: { value: "95%", label: "יעילות", color: "text-purple-600" },
    },
    {
      icon: <Settings className="h-8 w-8 text-blue-500" />,
      title: "פיתוח מערכות מותאמות אישית",
      description: "פתרונות תוכנה מותאמים הבנויים במיוחד לצרכים ולדרישות העסקיות הייחודיות שלכם",
      features: [
        "אפליקציות אינטרנט ומובייל מתקדמות",
        "עיצוב ואופטימיזציה של מסדי נתונים",
        "הקמת תשתית ענן מדרגית ובטוחה",
      ],
      href: "/services/custom",
      dashboardType: "development",
      color: "from-blue-500 to-blue-600",
      bgColor: "bg-blue-500/10",
      borderColor: "border-blue-500/20",
      stats: { value: "150+", label: "פרויקטים", color: "text-blue-600" },
    },
    {
      icon: <Bot className="h-8 w-8 text-indigo-500" />,
      title: "פיתוח סוכני AI ומודלי AI",
      description: "סוכני בינה מלאכותית חכמים המשפרים את הפעילות שלכם ומספקים יכולות קבלת החלטות אוטומטיות",
      features: [
        "עיבוד שפה טבעית ומערכות שיחה חכמות",
        "מודלים של למידת מכונה מותאמים אישית",
        "קבלת החלטות אוטומטית מבוססת נתונים",
      ],
      href: "/services/ai-agents",
      dashboardType: "ai",
      color: "from-indigo-500 to-indigo-600",
      bgColor: "bg-indigo-500/10",
      borderColor: "border-indigo-500/20",
      stats: { value: "24/7", label: "זמינות", color: "text-indigo-600" },
    },
    {
      icon: <Code className="h-8 w-8 text-blue-500" />,
      title: "שירותי תוכנה לעסקים וחברות",
      description: "פתרונות תוכנה מקצה לקצה לעסקים וחברות בכל הגדלים עם תמיכה מתמשכת ותחזוקה מקצועית",
      features: ["פיתוח תוכנה מקצועי ואמין", "תחזוקה שוטפת ועדכונים קבועים", "תמיכה טכנית מקצועית 24/7"],
      href: "/services/business",
      dashboardType: "business",
      color: "from-blue-500 to-blue-600",
      bgColor: "bg-blue-500/10",
      borderColor: "border-blue-500/20",
      stats: { value: "10x", label: "תשואה", color: "text-blue-600" },
    },
    {
      icon: <Cpu className="h-8 w-8 text-purple-500" />,
      title: "הטמעת AI בארגונים",
      description: "ליווי מקצועי בהטמעת טכנולוגיות בינה מלאכותית בארגונים עם אסטרטגיה מותאמת ותמיכה מלאה",
      features: ["פיתוח אסטרטגיית AI מותאמת לארגון", "הדרכות צוות מקיפות ומקצועיות", "פיתוח יכולות פנימיות בארגון"],
      href: "/services/ai-implementation",
      dashboardType: "implementation",
      color: "from-purple-500 to-purple-600",
      bgColor: "bg-purple-500/10",
      borderColor: "border-purple-500/20",
      stats: { value: "99%", label: "הצלחה", color: "text-purple-600" },
    },
    {
      icon: <Database className="h-8 w-8 text-cyan-500" />,
      title: "ביג דאטה ואנליטיקה",
      description: "הפיכת הנתונים שלכם לתובנות פעולה עם פתרונות אנליטיקה ולמידת מכונה מתקדמים ומדויקים",
      features: ["פיתוח צינורות נתונים מתקדמים", "דשבורדים אנליטיים בזמן אמת", "מודלי אנליטיקה חזויה מדויקים"],
      href: "/services/big-data",
      dashboardType: "analytics",
      color: "from-cyan-500 to-cyan-600",
      bgColor: "bg-cyan-500/10",
      borderColor: "border-cyan-500/20",
      stats: { value: "TB+", label: "נתונים", color: "text-cyan-600" },
    },
  ]

  const benefits = [
    {
      icon: <Clock className="h-8 w-8 text-purple-500" />,
      title: "זמן מהיר יותר לשוק",
      description: "האצת פיתוח המוצר שלכם עם המתודולוגיות המוכחות והצוות המומחה שלנו.",
    },
    {
      icon: <Shield className="h-8 w-8 text-blue-500" />,
      title: "אבטחה ארגונית",
      description: "אמצעי אבטחה מובנים ותקני ציות להגנה על נתוני העסק שלכם.",
    },
    {
      icon: <Users className="h-8 w-8 text-indigo-500" />,
      title: "תמיכה ייעודית",
      description: "תמיכה טכנית ותחזוקה 24/7 כדי להבטיח שהמערכות שלכם פועלות בצורה חלקה.",
    },
    {
      icon: <Target className="h-8 w-8 text-purple-500" />,
      title: "פתרונות מדרגיים",
      description: "פתרונות עמידים בפני עתיד שגדלים עם העסק שלכם ומתאימים לצרכים משתנים.",
    },
  ]

  const stats = [
    { number: 150, label: "פרויקטים שהושלמו", icon: Target, suffix: "+" },
    { number: 99, label: "שביעות רצון לקוחות", icon: Star, suffix: "%" },
    { number: 24, label: "תמיכה זמינה", icon: Clock, suffix: "/7" },
    { number: 50, label: "לקוחות מרוצים", icon: Users, suffix: "+" },
  ]

  return (
    <div className="min-h-screen bg-background text-foreground" dir="rtl">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <ParticleBackground />

        <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 via-blue-500/10 to-background dark:from-purple-900/20 dark:to-background" />

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-5xl mx-auto text-center">
            <FadeIn>
              <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-purple-500/10 to-blue-500/10 border border-purple-500/20 rounded-full text-purple-600 dark:text-purple-300 text-sm font-medium mb-8 backdrop-blur-sm">
                <Settings className="w-4 h-4 ml-2" />
                השירותים שלנו
              </div>
            </FadeIn>

            <FadeIn delay={0.2}>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                <span className="bg-gradient-to-r from-foreground via-purple-600 to-blue-600 bg-clip-text text-transparent">
                  פתרונות טכנולוגיים מתקדמים לכל עסק
                </span>
              </h1>
            </FadeIn>

            <FadeIn delay={0.4}>
              <p className="text-lg md:text-xl text-muted-foreground mb-10 max-w-4xl mx-auto leading-relaxed">
                אנחנו מספקים מגוון רחב של שירותים טכנולוגיים מותאמים אישית - מאוטומציה ופיתוח מותאם אישית ועד בינה
                מלאכותית ואנליטיקה מתקדמת. כל פתרון נבנה במיוחד כדי להניע את העסק שלכם קדימה ולהשיג תוצאות מדידות.
              </p>
            </FadeIn>

            <FadeIn delay={0.6}>
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <Link href="/contact">
                  <BaseButton variant="primary" size="lg" className="group">
                    בואו נתחיל לעבוד יחד
                    <ArrowLeft className="mr-2 h-5 w-5 group-hover:-translate-x-1 transition-transform" />
                  </BaseButton>
                </Link>
                <Link href="/portfolio">
                  <BaseButton variant="secondary" size="lg">
                    הצגת עבודות קודמות
                  </BaseButton>
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
          <div className="text-center mb-12">
            <FadeIn>
              <h2 className="text-2xl md:text-3xl font-bold mb-4">המספרים מדברים בעד עצמם</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                אלפי עסקים כבר בחרו בנו כדי לשנות את הפעילות שלהם ולהשיג תוצאות מרשימות
              </p>
            </FadeIn>
          </div>

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
                        <div className="text-4xl font-bold mb-2 text-foreground">
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

      {/* Services Introduction */}
      <section className="py-16 relative overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <FadeIn>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                <span className="bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
                  תיק השירותים המקיף שלנו
                </span>
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed mb-8">
                אנחנו מציעים פתרונות טכנולוגיים מתקדמים בכל התחומים הרלוונטיים לעסק המודרני. מאוטומציה חכמה ופיתוח מותאם
                אישית, דרך בינה מלאכותית מתקדמת ועד ניתוח נתונים מעמיק - אנחנו כאן כדי לעזור לכם להשיג את המטרות שלכם.
              </p>
              <div className="flex items-center justify-center gap-8 text-sm text-muted-foreground">
                <div className="flex items-center gap-2">
                  <Award className="w-4 h-4 text-purple-500" />
                  <span>פתרונות מוכחים</span>
                </div>
                <div className="flex items-center gap-2">
                  <Lightbulb className="w-4 h-4 text-blue-500" />
                  <span>טכנולוגיה מתקדמת</span>
                </div>
                <div className="flex items-center gap-2">
                  <TrendingUp className="w-4 h-4 text-indigo-500" />
                  <span>תוצאות מדידות</span>
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-24 relative overflow-hidden">
        <div className="container mx-auto px-4">
          <StaggerContainer>
            <div className="grid gap-12">
              {services.map((service, index) => (
                <StaggerItem key={index}>
                  <Link href={service.href}>
                    <GlowEffect>
                      <Card
                        className={`bg-card/50 backdrop-blur-sm border-border/50 hover:${service.borderColor} transition-all duration-300 overflow-hidden group`}
                      >
                        <CardContent className="p-0">
                          <div
                            className={`grid lg:grid-cols-2 gap-0 min-h-[400px] ${index % 2 === 1 ? "lg:grid-flow-col-dense" : ""}`}
                          >
                            {/* Content Side */}
                            <div
                              className={`p-8 lg:p-12 flex flex-col justify-center ${index % 2 === 1 ? "lg:col-start-2" : ""}`}
                            >
                              <div className="flex items-center justify-between mb-6">
                                <div
                                  className={`p-4 ${service.bgColor} rounded-2xl inline-block group-hover:scale-110 transition-transform duration-300`}
                                >
                                  {service.icon}
                                </div>
                                <div className="text-left">
                                  <div className={`text-3xl font-bold ${service.stats.color}`}>
                                    {service.stats.value}
                                  </div>
                                  <div className="text-sm text-muted-foreground">{service.stats.label}</div>
                                </div>
                              </div>

                              <h3 className="text-2xl lg:text-3xl font-bold mb-4 group-hover:text-purple-600 transition-colors leading-tight">
                                {service.title}
                              </h3>

                              <p className="text-muted-foreground mb-8 text-lg leading-relaxed">
                                {service.description}
                              </p>

                              <div className="space-y-4 mb-8">
                                {service.features.map((feature, i) => (
                                  <div key={i} className="flex items-start gap-3">
                                    <CheckCircle className="h-5 w-5 text-purple-500 flex-shrink-0 mt-0.5" />
                                    <span className="text-muted-foreground">{feature}</span>
                                  </div>
                                ))}
                              </div>

                              <div className="flex items-center text-purple-600 font-medium group-hover:gap-3 gap-2 transition-all duration-300">
                                <span className="text-lg">למידע נוסף ופרטים</span>
                                <ArrowLeft className="h-5 w-5 group-hover:-translate-x-1 transition-transform" />
                              </div>
                            </div>

                            {/* Dashboard Side */}
                            <div
                              className={`relative bg-gradient-to-br from-muted/30 to-background p-8 flex items-center justify-center ${index % 2 === 1 ? "lg:col-start-1" : ""}`}
                            >
                              <div className="w-full max-w-md h-80">
                                <ServiceDashboard type={service.dashboardType} />
                              </div>
                              <div
                                className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-5 group-hover:opacity-10 transition-opacity duration-300`}
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
              <div className="inline-flex items-center px-4 py-2 bg-purple-500/10 text-purple-600 rounded-full text-sm font-medium mb-6">
                <Star className="w-4 h-4 ml-2" />
                למה לבחור ב-TapUp
              </div>
              <h2 className="text-3xl md:text-4xl font-bold mb-4">היתרון התחרותי שלנו</h2>
              <p className="text-muted-foreground max-w-3xl mx-auto text-lg leading-relaxed">
                אנחנו לא רק מפתחים פתרונות טכנולוגיים - אנחנו שותפים לצמיחה שלכם. הגישה המוכחת שלנו, הצוות המומחה
                והתמיכה המתמשכת הופכים אותנו לבחירה הטובה ביותר עבור העסק שלכם.
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
                      <h3 className="text-xl font-semibold mb-4">{benefit.title}</h3>
                      <p className="text-muted-foreground leading-relaxed">{benefit.description}</p>
                    </Card>
                  </GlowEffect>
                </StaggerItem>
              ))}
            </div>
          </StaggerContainer>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-500/5 to-blue-500/5" />

        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-16">
            <FadeIn>
              <h2 className="text-3xl md:text-4xl font-bold mb-4">איך אנחנו עובדים איתכם</h2>
              <p className="text-muted-foreground max-w-3xl mx-auto text-lg leading-relaxed">
                תהליך עבודה מובנה ומוכח שמבטיח הצלחת הפרויקט מהרגע הראשון ועד ההשקה והתמיכה המתמשכת. אנחנו מלווים אתכם
                בכל שלב ומבטיחים שתקבלו בדיוק מה שאתם צריכים.
              </p>
            </FadeIn>
          </div>

          <StaggerContainer>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                {
                  number: "01",
                  title: "ייעוץ וניתוח מעמיק",
                  description: "פגישת היכרות מעמיקה, ניתוח הצרכים והגדרת מטרות ברורות ומדידות לפרויקט",
                  icon: <Target className="w-6 h-6" />,
                },
                {
                  number: "02",
                  title: "תכנון ועיצוב מפורט",
                  description: "פיתוח אסטרטגיה מפורטת, עיצוב הפתרון המותאם ותכנון לוח זמנים מדויק",
                  icon: <Layers className="w-6 h-6" />,
                },
                {
                  number: "03",
                  title: "פיתוח ויישום מקצועי",
                  description: "בניית הפתרון עם עדכונים שוטפים, בדיקות איכות מתמידות ושיתוף מלא",
                  icon: <Code className="w-6 h-6" />,
                },
                {
                  number: "04",
                  title: "השקה ותמיכה מתמשכת",
                  description: "השקת הפרויקט בהצלחה, הדרכת הצוות ותמיכה טכנית מתמשכת לאחר ההשקה",
                  icon: <Rocket className="w-6 h-6" />,
                },
              ].map((phase, index) => (
                <StaggerItem key={index}>
                  <GlowEffect>
                    <Card className="text-center p-8 bg-card/50 backdrop-blur-sm border-border/50 hover:border-purple-500/50 transition-all duration-300 h-full">
                      <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-4 text-white font-bold text-lg">
                        {phase.number}
                      </div>
                      <div className="w-12 h-12 bg-purple-500/10 rounded-xl flex items-center justify-center mx-auto mb-6 text-purple-500">
                        {phase.icon}
                      </div>
                      <h3 className="text-xl font-semibold mb-4">{phase.title}</h3>
                      <p className="text-muted-foreground leading-relaxed">{phase.description}</p>
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
              <h2 className="text-3xl md:text-5xl font-bold mb-6">מוכנים לקחת את העסק שלכם לשלב הבא?</h2>
              <p className="text-xl mb-8 text-white/90 leading-relaxed">
                בואו נקבע פגישת ייעוץ חינם ונתחיל לתכנן יחד את הפתרון הטכנולוגי שישנה את העסק שלכם לטובה. אנחנו כאן כדי
                להפוך את החזון שלכם למציאות.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/contact">
                  <BaseButton variant="primary" size="lg" className="bg-white text-purple-600 hover:bg-white/90">
                    בואו נתחיל לעבוד יחד
                    <ArrowLeft className="mr-2 h-5 w-5" />
                  </BaseButton>
                </Link>
                <Link href="/portfolio">
                  <BaseButton variant="secondary" size="lg" className="border-white text-white hover:bg-white/10">
                    הצגת התיק שלנו
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
