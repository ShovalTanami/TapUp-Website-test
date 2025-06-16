"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { CheckCircle, Settings, ArrowLeft, Code, Database, Cloud, Shield } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import { FadeIn, StaggerContainer, StaggerItem } from "@/components/ui/scroll-animations"
import { GlowEffect } from "@/components/ui/glow-effect"
import { ParticleBackground } from "@/components/ui/particle-background"

export default function CustomDevelopmentPage() {
  const features = [
    {
      icon: <Code className="h-8 w-8 text-blue-500" />,
      title: "אפליקציות אינטרנט ומובייל",
      description: "פיתוח אפליקציות מתקדמות לאינטרנט ומובייל המותאמות לצרכים הספציפיים שלכם",
    },
    {
      icon: <Database className="h-8 w-8 text-green-500" />,
      title: "עיצוב ואופטימיזציה של מסדי נתונים",
      description: "תכנון ובניית מסדי נתונים יעילים ומהירים שמתאימים לנפח הנתונים שלכם",
    },
    {
      icon: <Cloud className="h-8 w-8 text-purple-500" />,
      title: "הקמת תשתית ענן",
      description: "בניית תשתית ענן מדרגית ובטוחה שמבטיחה זמינות גבוהה וביצועים מעולים",
    },
    {
      icon: <Shield className="h-8 w-8 text-red-500" />,
      title: "אבטחה ואמינות",
      description: "יישום אמצעי אבטחה מתקדמים והבטחת אמינות המערכת ברמה הגבוהה ביותר",
    },
  ]

  const technologies = [
    "React & Next.js",
    "Node.js & Python",
    "MongoDB & PostgreSQL",
    "AWS & Azure",
    "Docker & Kubernetes",
    "TypeScript & JavaScript",
  ]

  const benefits = [
    "פתרון מותאם 100% לצרכים שלכם",
    "בעלות מלאה על הקוד והמערכת",
    "מדרגיות גמישה לפי צמיחת העסק",
    "תמיכה ותחזוקה מתמשכת",
    "אינטגרציה עם מערכות קיימות",
    "ביצועים מעולים ואמינות גבוהה",
  ]

  return (
    <div className="min-h-screen bg-background text-foreground" dir="rtl">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <ParticleBackground />

        <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 via-purple-500/10 to-background" />

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <FadeIn>
              <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-blue-500/10 to-purple-500/10 border border-blue-500/20 rounded-full text-blue-600 text-sm font-medium mb-8 backdrop-blur-sm">
                <Settings className="w-4 h-4 ml-2" />
                פיתוח מותאם אישית
              </div>
            </FadeIn>

            <FadeIn delay={0.2}>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                <span className="bg-gradient-to-r from-foreground via-blue-600 to-purple-600 bg-clip-text text-transparent">
                  פיתוח מערכות מותאמות אישית
                </span>
              </h1>
            </FadeIn>

            <FadeIn delay={0.4}>
              <p className="text-lg md:text-xl text-muted-foreground mb-10 max-w-3xl mx-auto">
                פתרונות תוכנה מותאמים הבנויים במיוחד לצרכים ולדרישות העסקיות הייחודיות שלכם
              </p>
            </FadeIn>

            <FadeIn delay={0.6}>
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <Link href="/contact">
                  <Button className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-6 rounded-full text-lg font-medium shadow-lg shadow-blue-500/25 hover:shadow-blue-500/40 transition-all duration-300 group">
                    התחל פרויקט
                    <ArrowLeft className="mr-2 h-5 w-5 group-hover:-translate-x-1 transition-transform" />
                  </Button>
                </Link>
                <Link href="/services">
                  <Button
                    variant="outline"
                    className="border-blue-500 text-blue-500 hover:bg-blue-500/10 px-8 py-6 rounded-full text-lg"
                  >
                    חזור לשירותים
                  </Button>
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
                פתרונות פיתוח מקיפים שמותאמים לצרכים הטכנולוגיים הייחודיים שלכם
              </p>
            </FadeIn>
          </div>

          <StaggerContainer>
            <div className="grid md:grid-cols-2 gap-8">
              {features.map((feature, index) => (
                <StaggerItem key={index}>
                  <GlowEffect>
                    <Card className="h-full bg-card/50 backdrop-blur-sm border-border/50 hover:border-blue-500/50 transition-all duration-300">
                      <CardContent className="p-8">
                        <div className="w-16 h-16 bg-gradient-to-br from-blue-500/10 to-purple-500/10 rounded-2xl flex items-center justify-center mb-6">
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

      {/* Technologies Section */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-500/5 to-purple-500/5" />

        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-16">
            <FadeIn>
              <h2 className="text-3xl md:text-4xl font-bold mb-4">הטכנולוגיות שאנחנו משתמשים בהן</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                אנחנו עובדים עם הטכנולוגיות המתקדמות והמוכחות ביותר בתעשייה
              </p>
            </FadeIn>
          </div>

          <FadeIn>
            <div className="flex flex-wrap justify-center gap-4">
              {technologies.map((tech, index) => (
                <div
                  key={index}
                  className="px-6 py-3 bg-card/50 backdrop-blur-sm border border-border/50 rounded-full text-sm font-medium hover:border-blue-500/50 transition-colors"
                >
                  {tech}
                </div>
              ))}
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-24 relative overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <FadeIn direction="right">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">היתרונות שתקבלו</h2>
              <div className="space-y-4">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <CheckCircle className="h-5 w-5 text-blue-500 flex-shrink-0" />
                    <span className="text-muted-foreground">{benefit}</span>
                  </div>
                ))}
              </div>
            </FadeIn>

            <FadeIn direction="left">
              <GlowEffect>
                <div className="relative">
                  <Image
                    src="/images/custom-development.png"
                    alt="Custom Development"
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
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600" />

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center text-white">
            <FadeIn>
              <h2 className="text-3xl md:text-5xl font-bold mb-6">מוכנים לפתח את הפתרון שלכם?</h2>
              <p className="text-xl mb-8 text-white/90">
                בואו נדבר על איך אנחנו יכולים לבנות בדיוק את מה שהעסק שלכם צריך
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/contact">
                  <Button size="lg" className="bg-white text-blue-600 hover:bg-white/90 px-8 py-4 text-lg font-medium">
                    קבל הצעת מחיר
                    <ArrowLeft className="mr-2 h-5 w-5" />
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
