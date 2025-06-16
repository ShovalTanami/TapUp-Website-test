"use client"
import { Card, CardContent } from "@/components/ui/card"
import { CheckCircle, Zap, ArrowLeft, BarChart3, Settings, Workflow, Database } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import { FadeIn, StaggerContainer, StaggerItem } from "@/components/ui/scroll-animations"
import { GlowEffect } from "@/components/ui/glow-effect"
import { ParticleBackground } from "@/components/ui/particle-background"
import { BaseButton } from "@/components/ui/base-button"

export default function AutomationPage() {
  const features = [
    {
      icon: <Workflow className="h-8 w-8 text-purple-500" />,
      title: "עיצוב ויישום זרימות עבודה",
      description: "תכנון ובניית תהליכי עבודה אוטומטיים המותאמים לצרכים הספציפיים של העסק שלכם",
    },
    {
      icon: <Database className="h-8 w-8 text-blue-500" />,
      title: "אינטגרציה של API וסנכרון נתונים",
      description: "חיבור בין מערכות שונות והבטחת זרימת נתונים חלקה ומדויקת",
    },
    {
      icon: <BarChart3 className="h-8 w-8 text-indigo-500" />,
      title: "ניטור וניתוח בזמן אמת",
      description: "מעקב מתמיד אחר ביצועי התהליכים וקבלת תובנות לשיפור מתמיד",
    },
    {
      icon: <Settings className="h-8 w-8 text-purple-500" />,
      title: "אוטומציה של משימות חוזרות",
      description: "הפחתת עבודה ידנית והגדלת יעילות באמצעות אוטומציה חכמה",
    },
  ]

  const benefits = [
    "חיסכון של עד 70% בזמן ביצוע משימות",
    "הפחתת שגיאות אנוש ב-95%",
    "שיפור דיוק הנתונים והדיווחים",
    "זמינות 24/7 ללא התערבות אנושית",
    "מדרגיות גמישה לפי צרכי העסק",
    "ROI מוכח תוך 3-6 חודשים",
  ]

  return (
    <div className="min-h-screen bg-background text-foreground" dir="rtl">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <ParticleBackground />

        <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 via-blue-500/10 to-background" />

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <FadeIn>
              <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-purple-500/10 to-blue-500/10 border border-purple-500/20 rounded-full text-purple-600 text-sm font-medium mb-8 backdrop-blur-sm">
                <Zap className="w-4 h-4 ml-2" />
                אוטומציה ואינטגרציה
              </div>
            </FadeIn>

            <FadeIn delay={0.2}>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                <span className="bg-gradient-to-r from-foreground via-purple-600 to-blue-600 bg-clip-text text-transparent">
                  פיתוח אוטומציות ואינטגרציות
                </span>
              </h1>
            </FadeIn>

            <FadeIn delay={0.4}>
              <p className="text-lg md:text-xl text-muted-foreground mb-10 max-w-3xl mx-auto">
                ייעול תהליכים עסקיים והפחתת עבודה ידנית באמצעות פתרונות אוטומציה חכמים ומתקדמים
              </p>
            </FadeIn>

            <FadeIn delay={0.6}>
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <Link href="/contact">
                  <BaseButton variant="primary" size="lg" className="group">
                    התחל פרויקט
                    <ArrowLeft className="mr-2 h-5 w-5 group-hover:-translate-x-1 transition-transform" />
                  </BaseButton>
                </Link>
                <Link href="/services">
                  <BaseButton variant="secondary" size="lg">
                    חזור לשירותים
                  </BaseButton>
                </Link>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24 relative overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <FadeIn>
              <h2 className="text-3xl md:text-5xl font-bold mb-4">מה כלול בשירות?</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                פתרונות אוטומציה מקיפים שמותאמים לצרכים הייחודיים של העסק שלכם
              </p>
            </FadeIn>
          </div>

          <StaggerContainer>
            <div className="grid md:grid-cols-2 gap-8">
              {features.map((feature, index) => (
                <StaggerItem key={index}>
                  <GlowEffect>
                    <Card className="h-full bg-card/50 backdrop-blur-sm border-border/50 hover:border-purple-500/50 transition-all duration-300">
                      <CardContent className="p-8">
                        <div className="w-16 h-16 bg-gradient-to-br from-purple-500/10 to-blue-500/10 rounded-2xl flex items-center justify-center mb-6">
                          {feature.icon}
                        </div>
                        <h3 className="text-xl font-bold mb-4">{feature.title}</h3>
                        <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
                      </CardContent>
                    </Card>
                  </GlowEffect>
                </StaggerItem>
              ))}
            </div>
          </StaggerContainer>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-500/5 to-blue-500/5" />

        <div className="container mx-auto px-4 relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <FadeIn direction="right">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">היתרונות שתקבלו</h2>
              <div className="space-y-4">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <CheckCircle className="h-5 w-5 text-purple-500 flex-shrink-0" />
                    <span className="text-muted-foreground">{benefit}</span>
                  </div>
                ))}
              </div>
            </FadeIn>

            <FadeIn direction="left">
              <GlowEffect>
                <div className="relative">
                  <Image
                    src="/images/automation-service.png"
                    alt="Automation Service"
                    width={600}
                    height={400}
                    className="rounded-2xl shadow-2xl w-full h-auto"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-2xl" />
                </div>
              </GlowEffect>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-blue-600" />

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center text-white">
            <FadeIn>
              <h2 className="text-3xl md:text-5xl font-bold mb-6">מוכנים לייעל את התהליכים שלכם?</h2>
              <p className="text-xl mb-8 text-white/90">
                בואו נדבר על איך אוטומציה יכולה לשנות את הדרך שבה העסק שלכם פועל
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/contact">
                  <BaseButton variant="primary" size="lg" className="bg-white text-purple-600 hover:bg-white/90">
                    קבל הצעת מחיר
                    <ArrowLeft className="mr-2 h-5 w-5" />
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
