"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { CheckCircle, Bot, ArrowLeft, Brain, MessageSquare, Cpu, Target, BarChart3 } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import { FadeIn, StaggerContainer, StaggerItem } from "@/components/ui/scroll-animations"
import { GlowEffect } from "@/components/ui/glow-effect"
import { ParticleBackground } from "@/components/ui/particle-background"

export default function AIAgentsPage() {
  const features = [
    {
      icon: <MessageSquare className="h-8 w-8 text-indigo-500" />,
      title: "עיבוד שפה טבעית",
      description: "יכולות מתקדמות להבנה ועיבוד של שפה טבעית לאינטראקציה חלקה עם משתמשים",
    },
    {
      icon: <Brain className="h-8 w-8 text-purple-500" />,
      title: "מודלים של למידת מכונה",
      description: "פיתוח מודלי AI מותאמים שלומדים ומשתפרים מהנתונים והאינטראקציות",
    },
    {
      icon: <Target className="h-8 w-8 text-blue-500" />,
      title: "קבלת החלטות אוטומטית",
      description: "מערכות חכמות שמקבלות החלטות מבוססות נתונים באופן אוטומטי ומדויק",
    },
    {
      icon: <BarChart3 className="h-8 w-8 text-indigo-500" />,
      title: "ניתוח ותובנות מתקדמות",
      description: "יכולות ניתוח מתקדמות שמספקות תובנות עמוקות ומדידות ביצועים",
    },
  ]

  const useCases = [
    "צ'אטבוטים לשירות לקוחות 24/7",
    "מערכות המלצות מותאמות אישית",
    "ניתוח רגשות ומשוב לקוחות",
    "אוטומציה של תהליכי מכירות",
    "זיהוי הונאות ואיומי אבטחה",
    "ניתוח נתונים ודוחות אוטומטיים",
  ]

  const benefits = [
    "זמינות 24/7 ללא הפסקה",
    "הפחתת עלויות תפעול ב-60%",
    "שיפור חוויית הלקוח משמעותית",
    "עיבוד כמויות גדולות של נתונים",
    "תגובה מיידית ומדויקת",
    "למידה והשתפרות מתמידה",
  ]

  return (
    <div className="min-h-screen bg-background text-foreground" dir="rtl">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <ParticleBackground />

        <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/10 via-purple-500/10 to-background" />

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <FadeIn>
              <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-indigo-500/10 to-purple-500/10 border border-indigo-500/20 rounded-full text-indigo-600 text-sm font-medium mb-8 backdrop-blur-sm">
                <Bot className="w-4 h-4 ml-2" />
                סוכני AI ומודלי AI
              </div>
            </FadeIn>

            <FadeIn delay={0.2}>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                <span className="bg-gradient-to-r from-foreground via-indigo-600 to-purple-600 bg-clip-text text-transparent">
                  פיתוח סוכני AI ומודלי AI
                </span>
              </h1>
            </FadeIn>

            <FadeIn delay={0.4}>
              <p className="text-lg md:text-xl text-muted-foreground mb-10 max-w-3xl mx-auto">
                סוכני בינה מלאכותית חכמים המשפרים את הפעילות שלכם ומספקים יכולות קבלת החלטות אוטומטיות
              </p>
            </FadeIn>

            <FadeIn delay={0.6}>
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <Link href="/contact">
                  <Button className="bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white px-8 py-6 rounded-full text-lg font-medium shadow-lg shadow-indigo-500/25 hover:shadow-indigo-500/40 transition-all duration-300 group">
                    התחל פרויקט
                    <ArrowLeft className="mr-2 h-5 w-5 group-hover:-translate-x-1 transition-transform" />
                  </Button>
                </Link>
                <Link href="/services">
                  <Button
                    variant="outline"
                    className="border-indigo-500 text-indigo-500 hover:bg-indigo-500/10 px-8 py-6 rounded-full text-lg"
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
              <h2 className="text-3xl md:text-5xl font-bold mb-4">יכולות AI מתקדמות</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                פתרונות בינה מלאכותית מתקדמים שמביאים אוטומציה חכמה לעסק שלכם
              </p>
            </FadeIn>
          </div>

          <StaggerContainer>
            <div className="grid md:grid-cols-2 gap-8">
              {features.map((feature, index) => (
                <StaggerItem key={index}>
                  <GlowEffect>
                    <Card className="h-full bg-card/50 backdrop-blur-sm border-border/50 hover:border-indigo-500/50 transition-all duration-300">
                      <CardContent className="p-8">
                        <div className="w-16 h-16 bg-gradient-to-br from-indigo-500/10 to-purple-500/10 rounded-2xl flex items-center justify-center mb-6">
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

      {/* Use Cases Section */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-indigo-500/5 to-purple-500/5" />

        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-16">
            <FadeIn>
              <h2 className="text-3xl md:text-4xl font-bold mb-4">תחומי יישום</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                דוגמאות לאופן שבו סוכני AI יכולים לשפר את הפעילות העסקית שלכם
              </p>
            </FadeIn>
          </div>

          <FadeIn>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
              {useCases.map((useCase, index) => (
                <div
                  key={index}
                  className="flex items-center gap-3 p-4 bg-card/50 backdrop-blur-sm border border-border/50 rounded-lg hover:border-indigo-500/50 transition-colors"
                >
                  <Cpu className="h-5 w-5 text-indigo-500 flex-shrink-0" />
                  <span className="text-sm">{useCase}</span>
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
                    <CheckCircle className="h-5 w-5 text-indigo-500 flex-shrink-0" />
                    <span className="text-muted-foreground">{benefit}</span>
                  </div>
                ))}
              </div>
            </FadeIn>

            <FadeIn direction="left">
              <GlowEffect>
                <div className="relative">
                  <Image
                    src="/images/ai-integration.png"
                    alt="AI Agents"
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
        <div className="absolute inset-0 bg-gradient-to-r from-indigo-600 to-purple-600" />

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center text-white">
            <FadeIn>
              <h2 className="text-3xl md:text-5xl font-bold mb-6">מוכנים להכניס AI לעסק שלכם?</h2>
              <p className="text-xl mb-8 text-white/90">
                בואו נדבר על איך סוכני AI יכולים לשנות את הדרך שבה אתם עובדים עם לקוחות
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/contact">
                  <Button
                    size="lg"
                    className="bg-white text-indigo-600 hover:bg-white/90 px-8 py-4 text-lg font-medium"
                  >
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
