"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { CheckCircle, Code, ArrowLeft, Building, Users, Shield, Headphones, Rocket } from "lucide-react"
import Link from "next/link"
import { FadeIn, StaggerContainer, StaggerItem } from "@/components/ui/scroll-animations"
import { GlowEffect } from "@/components/ui/glow-effect"
import { ParticleBackground } from "@/components/ui/particle-background"

export default function BusinessSoftwarePage() {
  const services = [
    {
      icon: <Code className="h-8 w-8 text-purple-500" />,
      title: "פיתוח תוכנה מותאמת",
      description: "פתרונות תוכנה מקצה לקצה המותאמים לתהליכים העסקיים הייחודיים שלכם",
    },
    {
      icon: <Headphones className="h-8 w-8 text-blue-500" />,
      title: "תחזוקה שוטפת",
      description: "תחזוקה מתמשכת, עדכונים ושיפורים כדי להבטיח שהמערכת תמיד פועלת בצורה מיטבית",
    },
    {
      icon: <Shield className="h-8 w-8 text-purple-500" />,
      title: "תמיכה טכנית 24/7",
      description: "תמיכה טכנית מקצועית זמינה בכל עת להבטיח רציפות עסקית ללא הפרעות",
    },
    {
      icon: <Rocket className="h-8 w-8 text-blue-500" />,
      title: "שדרוגים וחדשנות",
      description: "שדרוגים טכנולוגיים מתמידים והטמעת חדשנות לשמירה על יתרון תחרותי",
    },
  ]

  const businessTypes = [
    {
      icon: <Building className="h-6 w-6 text-purple-500" />,
      title: "חברות גדולות",
      description: "פתרונות ארגוניים מדרגיים",
    },
    {
      icon: <Users className="h-6 w-6 text-blue-500" />,
      title: "עסקים בינוניים",
      description: "מערכות גמישות וחסכוניות",
    },
    {
      icon: <Rocket className="h-6 w-6 text-purple-500" />,
      title: "סטארט-אפים",
      description: "פתרונות מהירים ומותאמים לצמיחה",
    },
  ]

  const benefits = [
    "פתרון מותאם 100% לתהליכים שלכם",
    "חיסכון בעלויות תפעול ארוכות טווח",
    "שיפור יעילות ופרודוקטיביות",
    "אינטגרציה חלקה עם מערכות קיימות",
    "מדרגיות גמישה לפי צמיחת העסק",
    "תמיכה מקצועית ואמינה",
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
                <Building className="w-4 h-4 ml-2" />
                שירותי תוכנה לעסקים
              </div>
            </FadeIn>

            <FadeIn delay={0.2}>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                <span className="bg-gradient-to-r from-foreground via-purple-600 to-blue-600 bg-clip-text text-transparent">
                  שירותי תוכנה לעסקים וחברות
                </span>
              </h1>
            </FadeIn>

            <FadeIn delay={0.4}>
              <p className="text-lg md:text-xl text-muted-foreground mb-10 max-w-3xl mx-auto">
                פתרונות תוכנה מקצה לקצה לעסקים וחברות בכל הגדלים - מפיתוח ועד תמיכה מתמשכת
              </p>
            </FadeIn>

            <FadeIn delay={0.6}>
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <Link href="/contact">
                  <Button className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white px-8 py-6 rounded-full text-lg font-medium shadow-lg shadow-blue-500/25 hover:shadow-blue-500/40 transition-all duration-300 group">
                    התחל פרויקט
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
                מעגל שירותים מלא שמלווה אתכם מהרעיון ועד היישום והתמיכה המתמשכת
              </p>
            </FadeIn>
          </div>

          <StaggerContainer>
            <div className="grid md:grid-cols-2 gap-8">
              {services.map((service, index) => (
                <StaggerItem key={index}>
                  <GlowEffect>
                    <Card className="h-full bg-card/50 backdrop-blur-sm border-border/50 hover:border-blue-500/50 transition-all duration-300">
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

      {/* Business Types Section */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-500/5 to-blue-500/5" />

        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-16">
            <FadeIn>
              <h2 className="text-3xl md:text-4xl font-bold mb-4">מתאים לכל סוג עסק</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">פתרונות מותאמים לעסקים בכל הגדלים ובכל התחומים</p>
            </FadeIn>
          </div>

          <StaggerContainer>
            <div className="grid md:grid-cols-3 gap-8">
              {businessTypes.map((type, index) => (
                <StaggerItem key={index}>
                  <GlowEffect>
                    <Card className="text-center p-8 bg-card/50 backdrop-blur-sm border-border/50 hover:border-blue-500/50 transition-all duration-300">
                      <div className="w-16 h-16 bg-gradient-to-br from-purple-500/10 to-blue-500/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
                        {type.icon}
                      </div>
                      <h3 className="text-lg font-semibold mb-2">{type.title}</h3>
                      <p className="text-muted-foreground text-sm">{type.description}</p>
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
                <h2 className="text-3xl md:text-4xl font-bold mb-4">היתרונות שתקבלו</h2>
                <p className="text-muted-foreground max-w-2xl mx-auto">למה כדאי לכם לבחור בשירותי התוכנה שלנו</p>
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
              <h2 className="text-3xl md:text-5xl font-bold mb-6">מוכנים לשדרג את התוכנה שלכם?</h2>
              <p className="text-xl mb-8 text-white/90">
                בואו נדבר על איך אנחנו יכולים לעזור לכם עם פתרונות תוכנה מתקדמים
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/contact">
                  <Button
                    size="lg"
                    className="bg-white text-purple-600 hover:bg-white/90 px-8 py-4 text-lg font-medium"
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
