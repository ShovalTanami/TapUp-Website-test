"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { CheckCircle, Cpu, ArrowLeft, BookOpen, Target, BarChart3, Lightbulb } from "lucide-react"
import Link from "next/link"
import { FadeIn, StaggerContainer, StaggerItem } from "@/components/ui/scroll-animations"
import { GlowEffect } from "@/components/ui/glow-effect"
import { ParticleBackground } from "@/components/ui/particle-background"

export default function AIImplementationPage() {
  const services = [
    {
      icon: <Target className="h-8 w-8 text-purple-500" />,
      title: "אסטרטגיית AI",
      description: "פיתוח אסטרטגיה מקיפה להטמעת בינה מלאכותית בהתאם למטרות העסק שלכם",
    },
    {
      icon: <BookOpen className="h-8 w-8 text-blue-500" />,
      title: "הדרכות צוות",
      description: "הכשרה מקצועית של הצוות שלכם לעבודה עם כלי AI ומערכות חכמות",
    },
    {
      icon: <Lightbulb className="h-8 w-8 text-indigo-500" />,
      title: "פיתוח יכולות",
      description: "בניית יכולות פנימיות בארגון לניהול ופיתוח פתרונות AI עצמאיים",
    },
    {
      icon: <BarChart3 className="h-8 w-8 text-purple-500" />,
      title: "מדידה והערכה",
      description: "מערכות מדידה ובקרה להערכת הצלחת יישום ה-AI וה-ROI שלו",
    },
  ]

  const phases = [
    {
      number: "01",
      title: "הערכה וניתוח",
      description: "ניתוח מעמיק של הארגון וזיהוי הזדמנויות ליישום AI",
    },
    {
      number: "02",
      title: "תכנון אסטרטגי",
      description: "פיתוח תוכנית עבודה מפורטת והגדרת יעדים מדידים",
    },
    {
      number: "03",
      title: "יישום הדרגתי",
      description: "הטמעה שלבית של פתרונות AI עם ליווי צמוד",
    },
    {
      number: "04",
      title: "הדרכה ותמיכה",
      description: "הכשרת הצוות ומתן תמיכה מתמשכת",
    },
  ]

  const benefits = [
    "הטמעה מוצלחת של AI בארגון",
    "צוות מיומן ומוכן לעבודה עם AI",
    "תהליכים מותאמים ויעילים",
    "תשואה מדידה על ההשקעה",
    "יכולות פנימיות לפיתוח עתידי",
    "יתרון תחרותי משמעותי",
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
                <Cpu className="w-4 h-4 ml-2" />
                הטמעת AI בארגונים
              </div>
            </FadeIn>

            <FadeIn delay={0.2}>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                <span className="bg-gradient-to-r from-foreground via-purple-600 to-blue-600 bg-clip-text text-transparent">
                  הטמעת AI בארגונים
                </span>
              </h1>
            </FadeIn>

            <FadeIn delay={0.4}>
              <p className="text-lg md:text-xl text-muted-foreground mb-10 max-w-3xl mx-auto">
                ליווי מקצועי בהטמעת טכנולוגיות בינה מלאכותית בארגונים - מהאסטרטגיה ועד היישום המלא
              </p>
            </FadeIn>

            <FadeIn delay={0.6}>
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <Link href="/contact">
                  <Button className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white px-8 py-6 rounded-full text-lg font-medium shadow-lg shadow-purple-500/25 hover:shadow-purple-500/40 transition-all duration-300 group">
                    התחל תהליך הטמעה
                    <ArrowLeft className="mr-2 h-5 w-5 group-hover:-translate-x-1 transition-transform" />
                  </Button>
                </Link>
                <Link href="/services">
                  <Button
                    variant="outline"
                    className="border-purple-500 text-purple-500 hover:bg-purple-500/10 px-8 py-6 rounded-full text-lg"
                  >
                    חזור לשירותים
                  </Button>
                </Link>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-24 relative overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <FadeIn>
              <h2 className="text-3xl md:text-5xl font-bold mb-4">השירותים שלנו</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                ליווי מקיף בכל שלבי הטמעת הבינה המלאכותית בארגון שלכם
              </p>
            </FadeIn>
          </div>

          <StaggerContainer>
            <div className="grid md:grid-cols-2 gap-8">
              {services.map((service, index) => (
                <StaggerItem key={index}>
                  <GlowEffect>
                    <Card className="h-full bg-card/50 backdrop-blur-sm border-border/50 hover:border-purple-500/50 transition-all duration-300">
                      <CardContent className="p-8">
                        <div className="w-16 h-16 bg-gradient-to-br from-purple-500/10 to-blue-500/10 rounded-2xl flex items-center justify-center mb-6">
                          {service.icon}
                        </div>
                        <h3 className="text-xl font-bold mb-4">{service.title}</h3>
                        <p className="text-muted-foreground leading-relaxed">{service.description}</p>
                      </CardContent>
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
              <h2 className="text-3xl md:text-4xl font-bold mb-4">תהליך ההטמעה</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">תהליך מובנה ומוכח להטמעה מוצלחת של AI בארגון</p>
            </FadeIn>
          </div>

          <StaggerContainer>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {phases.map((phase, index) => (
                <StaggerItem key={index}>
                  <GlowEffect>
                    <Card className="text-center p-6 bg-card/50 backdrop-blur-sm border-border/50 hover:border-purple-500/50 transition-all duration-300 h-full">
                      <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-4 text-white font-bold text-lg">
                        {phase.number}
                      </div>
                      <h3 className="text-lg font-semibold mb-3">{phase.title}</h3>
                      <p className="text-muted-foreground text-sm leading-relaxed">{phase.description}</p>
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
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <FadeIn>
                <h2 className="text-3xl md:text-4xl font-bold mb-4">התוצאות שתקבלו</h2>
                <p className="text-muted-foreground max-w-2xl mx-auto">היתרונות המדידים של הטמעת AI מוצלחת בארגון</p>
              </FadeIn>
            </div>

            <FadeIn>
              <div className="grid md:grid-cols-2 gap-6">
                {benefits.map((benefit, index) => (
                  <div
                    key={index}
                    className="flex items-center gap-3 p-4 bg-card/50 backdrop-blur-sm border border-border/50 rounded-lg"
                  >
                    <CheckCircle className="h-5 w-5 text-purple-500 flex-shrink-0" />
                    <span className="text-muted-foreground">{benefit}</span>
                  </div>
                ))}
              </div>
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
              <h2 className="text-3xl md:text-5xl font-bold mb-6">מוכנים להטמיע AI בארגון שלכם?</h2>
              <p className="text-xl mb-8 text-white/90">
                בואו נדבר על איך אנחנו יכולים לעזור לכם להטמיע בינה מלאכותית בהצלחה
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/contact">
                  <Button
                    size="lg"
                    className="bg-white text-purple-600 hover:bg-white/90 px-8 py-4 text-lg font-medium"
                  >
                    קבל ייעוץ חינם
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
