"use client"

import { Card, CardContent } from "@/components/ui/card"
import { BaseButton } from "@/components/ui/base-button"
import { Target, Heart, Lightbulb, Users, Award, Shield, Rocket, ArrowLeft } from "lucide-react"
import { GlowEffect } from "@/components/ui/glow-effect"
import { AnimatedCounter } from "@/components/ui/animated-counter"
import { FadeIn, StaggerContainer, StaggerItem } from "@/components/ui/scroll-animations"
import { ParticleBackground } from "@/components/ui/particle-background"
import Link from "next/link"

export default function AboutPage() {
  const values = [
    { icon: Target, key: "excellence", color: "text-purple-600", bgColor: "bg-purple-100 dark:bg-purple-900/30" },
    { icon: Heart, key: "passion", color: "text-blue-600", bgColor: "bg-blue-100 dark:bg-blue-900/30" },
    { icon: Lightbulb, key: "innovation", color: "text-indigo-600", bgColor: "bg-indigo-100 dark:bg-indigo-900/30" },
    { icon: Users, key: "partnership", color: "text-purple-600", bgColor: "bg-purple-100 dark:bg-purple-900/30" },
  ]

  const achievements = [
    { icon: Award, number: 150, suffix: "+", label: "פרויקטים מוצלחים" },
    { icon: Users, number: 50, suffix: "+", label: "לקוחות מרוצים" },
    { icon: Shield, number: 99, suffix: "%", label: "שביעות רצון לקוחות" },
    { icon: Rocket, number: 5, suffix: "+", label: "שנות ניסיון" },
  ]

  const team = [
    {
      name: "דוד כהן",
      role: 'מנכ"ל ומייסד',
      image: "https://avatar.vercel.sh/david",
      description: "מנהיג חזון עם 10+ שנות ניסיון בחדשנות טכנולוגית",
    },
    {
      name: "שרה לוי",
      role: "מנהלת טכנולוגיות",
      image: "https://avatar.vercel.sh/sarah-levi",
      description: "מומחית בטכנולוגיות בינה מלאכותית ואוטומציה",
    },
    {
      name: "מיכאל בן-דוד",
      role: "מפתח ראשי",
      image: "https://avatar.vercel.sh/michael-ben",
      description: "מפתח full-stack המתמחה בפתרונות מדרגיים",
    },
  ]

  const valuesData = [
    {
      title: "מצוינות",
      description: "אנחנו שואפים למצוינות בכל מה שאנחנו עושים, מהפיתוח ועד השירות ללקוח",
    },
    {
      title: "תשוקה",
      description: "התשוקה שלנו לטכנולוגיה ולחדשנות מניעה אותנו ליצור פתרונות מדהימים",
    },
    {
      title: "חדשנות",
      description: "אנחנו תמיד מחפשים דרכים חדשות ויצירתיות לפתור אתגרים טכנולוגיים",
    },
    {
      title: "שותפות",
      description: "אנחנו רואים בלקוחות שלנו שותפים ועובדים יחד להשגת המטרות המשותפות",
    },
  ]

  return (
    <div className="min-h-screen bg-background text-foreground" dir="rtl">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <ParticleBackground />

        <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 via-blue-500/10 to-background dark:from-purple-900/20 dark:to-background" />

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <FadeIn>
              <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-purple-500/10 to-blue-500/10 border border-purple-500/20 rounded-full text-purple-600 dark:text-purple-300 text-sm font-medium mb-8 backdrop-blur-sm">
                <Users className="w-4 h-4 ml-2" />
                אודותינו
              </div>
            </FadeIn>

            <FadeIn delay={0.2}>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                <span className="bg-gradient-to-r from-foreground via-purple-600 to-blue-600 bg-clip-text text-transparent">
                  הסיפור שלנו
                </span>
              </h1>
            </FadeIn>

            <FadeIn delay={0.4}>
              <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
                אנחנו TapUp - חברת טכנולוגיה ישראלית המתמחה בפתרונות אוטומציה ובינה מלאכותית מתקדמים
              </p>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-24 relative overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <FadeIn direction="right">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">המסע שלנו</h2>
              <div className="space-y-6 text-muted-foreground leading-relaxed">
                <p className="text-lg">
                  TapUp נוסדה מתוך חזון ברור: להפוך טכנולוגיה מתקדמת לנגישה ופרקטית עבור עסקים בכל הגדלים. אנחנו מאמינים
                  שכל עסק ראוי לטכנולוגיה שמניעה אותו קדימה.
                </p>
                <p className="text-lg">
                  הצוות שלנו מורכב ממפתחים מנוסים, מהנדסי AI ויועצי טכנולוגיה שמביאים ניסיון רב שנים מהתעשייה הישראלית
                  והבינלאומית. אנחנו מתמחים בפתרונות אוטומציה, בינה מלאכותית ופיתוח מותאם אישית.
                </p>
                <p className="text-lg">
                  המטרה שלנו היא לעזור לעסקים לחסוך זמן, להגדיל יעילות ולהשיג תוצאות מדידות באמצעות טכנולוגיה חכמה
                  ומותאמת אישית.
                </p>
              </div>
            </FadeIn>

            <FadeIn direction="left">
              <GlowEffect>
                <div className="relative">
                  <img
                    src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=600&h=400&fit=crop"
                    alt="TapUp Story"
                    className="rounded-2xl shadow-2xl w-full h-auto"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-2xl" />
                </div>
              </GlowEffect>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Achievements Section */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-500/5 to-blue-500/5 dark:from-purple-900/10 dark:to-blue-900/10" />

        <div className="container mx-auto px-4 relative z-10">
          <FadeIn>
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">ההישגים שלנו</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                מספרים המשקפים את המחויבות שלנו למצוינות והצלחת לקוחות
              </p>
            </div>
          </FadeIn>

          <StaggerContainer>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {achievements.map((achievement, index) => {
                const Icon = achievement.icon
                return (
                  <StaggerItem key={index}>
                    <GlowEffect>
                      <Card className="text-center p-8 bg-card/50 backdrop-blur-sm border-border/50 hover:border-purple-500/50 transition-all duration-300">
                        <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg">
                          <Icon className="w-8 h-8 text-white" />
                        </div>
                        <div className="text-4xl font-bold mb-2 text-foreground">
                          <AnimatedCounter end={achievement.number} suffix={achievement.suffix} />
                        </div>
                        <p className="text-muted-foreground">{achievement.label}</p>
                      </Card>
                    </GlowEffect>
                  </StaggerItem>
                )
              })}
            </div>
          </StaggerContainer>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-24 relative overflow-hidden">
        <div className="container mx-auto px-4">
          <FadeIn>
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">הערכים שלנו</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">העקרונות הבסיסיים המנחים את כל מה שאנחנו עושים</p>
            </div>
          </FadeIn>

          <StaggerContainer>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {values.map((value, index) => {
                const Icon = value.icon
                return (
                  <StaggerItem key={value.key}>
                    <GlowEffect>
                      <Card className="text-center p-8 bg-card/50 backdrop-blur-sm border-border/50 hover:border-purple-500/50 transition-all duration-300 h-full">
                        <CardContent className="pt-6">
                          <div
                            className={`w-16 h-16 ${value.bgColor} rounded-2xl flex items-center justify-center mx-auto mb-4`}
                          >
                            <Icon className={`h-8 w-8 ${value.color}`} />
                          </div>
                          <h3 className="text-xl font-semibold mb-3 text-foreground">{valuesData[index].title}</h3>
                          <p className="text-muted-foreground">{valuesData[index].description}</p>
                        </CardContent>
                      </Card>
                    </GlowEffect>
                  </StaggerItem>
                )
              })}
            </div>
          </StaggerContainer>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-muted/30 to-background dark:from-muted/10 dark:to-background" />

        <div className="container mx-auto px-4 relative z-10">
          <FadeIn>
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">הכירו את הצוות שלנו</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">האנשי המקצוע הנלהבים מאחורי הצלחת TapUp</p>
            </div>
          </FadeIn>

          <StaggerContainer>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {team.map((member, index) => (
                <StaggerItem key={index}>
                  <GlowEffect>
                    <Card className="text-center p-8 bg-card/50 backdrop-blur-sm border-border/50 hover:border-purple-500/50 transition-all duration-300">
                      <div className="relative w-24 h-24 mx-auto mb-6">
                        <img
                          src={member.image || "/placeholder.svg"}
                          alt={member.name}
                          className="w-full h-full rounded-full object-cover"
                        />
                      </div>
                      <h3 className="text-xl font-bold mb-2 text-foreground">{member.name}</h3>
                      <p className="text-purple-600 dark:text-purple-400 font-medium mb-3">{member.role}</p>
                      <p className="text-muted-foreground text-sm">{member.description}</p>
                    </Card>
                  </GlowEffect>
                </StaggerItem>
              ))}
            </div>
          </StaggerContainer>
        </div>
      </section>

      {/* Vision Section */}
      <section className="py-24 relative overflow-hidden">
        <div className="container mx-auto px-4">
          <FadeIn>
            <GlowEffect>
              <div className="bg-gradient-to-r from-purple-600 to-blue-600 dark:from-purple-700 dark:to-blue-700 text-white rounded-3xl p-12 text-center shadow-2xl">
                <h2 className="text-3xl md:text-4xl font-bold mb-6">החזון שלנו</h2>
                <p className="text-xl opacity-90 max-w-3xl mx-auto leading-relaxed">
                  להיות החברה המובילה בישראל בתחום פתרונות האוטומציה והבינה המלאכותית, ולעזור לעסקים להשיג את המטרות
                  שלהם באמצעות טכנולוגיה חכמה ומותאמת אישית.
                </p>
              </div>
            </GlowEffect>
          </FadeIn>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 relative overflow-hidden">
        <div className="container mx-auto px-4">
          <FadeIn>
            <div className="text-center">
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-foreground">מוכן לעבוד איתנו?</h2>
              <p className="text-muted-foreground mb-8 max-w-2xl mx-auto text-lg">
                בוא נדבר על איך אנחנו יכולים לעזור לשנות את העסק שלך עם פתרונות טכנולוגיים חדשניים.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/contact">
                  <BaseButton variant="primary" size="lg" className="group">
                    התחל היום
                    <ArrowLeft className="mr-2 h-5 w-5 group-hover:-translate-x-1 transition-transform" />
                  </BaseButton>
                </Link>
                <Link href="/services">
                  <BaseButton variant="secondary" size="lg">
                    השירותים שלנו
                  </BaseButton>
                </Link>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>
    </div>
  )
}
