"use client"

import { useTranslation } from "react-i18next"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Target, Heart, Lightbulb, Users, Award, Shield, Rocket, ArrowRight } from "lucide-react"
import { GlowEffect } from "@/components/ui/glow-effect"
import { AnimatedCounter } from "@/components/ui/animated-counter"
import { FadeIn, StaggerContainer, StaggerItem } from "@/components/ui/scroll-animations"
import { ParticleBackground } from "@/components/ui/particle-background"
import Link from "next/link"

export default function AboutPage() {
  const { t, i18n } = useTranslation()
  const isRTL = i18n.language === "he"

  const values = [
    { icon: Target, key: "excellence", color: "text-purple-600", bgColor: "bg-purple-100 dark:bg-purple-900/30" },
    { icon: Heart, key: "passion", color: "text-blue-600", bgColor: "bg-blue-100 dark:bg-blue-900/30" },
    { icon: Lightbulb, key: "innovation", color: "text-indigo-600", bgColor: "bg-indigo-100 dark:bg-indigo-900/30" },
    { icon: Users, key: "partnership", color: "text-purple-600", bgColor: "bg-purple-100 dark:bg-purple-900/30" },
  ]

  const achievements = [
    { icon: Award, number: 150, suffix: "+", label: isRTL ? "פרויקטים מוצלחים" : "Successful Projects" },
    { icon: Users, number: 50, suffix: "+", label: isRTL ? "לקוחות מרוצים" : "Happy Clients" },
    { icon: Shield, number: 99, suffix: "%", label: isRTL ? "שביעות רצון לקוחות" : "Client Satisfaction" },
    { icon: Rocket, number: 5, suffix: "+", label: isRTL ? "שנות ניסיון" : "Years Experience" },
  ]

  const team = [
    {
      name: "David Cohen",
      role: isRTL ? 'מנכ"ל ומייסד' : "CEO & Founder",
      image: "https://avatar.vercel.sh/david",
      description: isRTL
        ? "מנהיג חזון עם 10+ שנות ניסיון בחדשנות טכנולוגית"
        : "Visionary leader with 10+ years in tech innovation",
    },
    {
      name: "Sarah Levi",
      role: isRTL ? "מנהלת טכנולוגיות" : "CTO",
      image: "https://avatar.vercel.sh/sarah-levi",
      description: isRTL ? "מומחית בטכנולוגיות בינה מלאכותית ואוטומציה" : "Expert in AI and automation technologies",
    },
    {
      name: "Michael Ben-David",
      role: isRTL ? "מפתח ראשי" : "Lead Developer",
      image: "https://avatar.vercel.sh/michael-ben",
      description: isRTL
        ? "מפתח full-stack המתמחה בפתרונות מדרגיים"
        : "Full-stack developer specializing in scalable solutions",
    },
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
                <Users className="w-4 h-4 mr-2" />
                {t("about.title")}
              </div>
            </FadeIn>

            <FadeIn delay={0.2}>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                <span className="bg-gradient-to-r from-foreground via-purple-600 to-blue-600 bg-clip-text text-transparent">
                  {t("about.title")}
                </span>
              </h1>
            </FadeIn>

            <FadeIn delay={0.4}>
              <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">{t("about.subtitle")}</p>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-24 relative overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <FadeIn direction="left">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">{t("about.story.title")}</h2>
              <div className="space-y-6 text-muted-foreground leading-relaxed">
                <p className="text-lg">{t("about.story.paragraph1")}</p>
                <p className="text-lg">{t("about.story.paragraph2")}</p>
                <p className="text-lg">{t("about.story.paragraph3")}</p>
              </div>
            </FadeIn>

            <FadeIn direction="right">
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
              <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">
                {isRTL ? "ההישגים שלנו" : "Our Achievements"}
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                {isRTL
                  ? "מספרים המשקפים את המחויבות שלנו למצוינות והצלחת לקוחות"
                  : "Numbers that reflect our commitment to excellence and client success"}
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
              <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">{t("about.values.title")}</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                {isRTL
                  ? "העקרונות הבסיסיים המנחים את כל מה שאנחנו עושים"
                  : "The core principles that guide everything we do"}
              </p>
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
                          <h3 className="text-xl font-semibold mb-3 text-foreground">
                            {t(`about.values.items.${value.key}.title`)}
                          </h3>
                          <p className="text-muted-foreground">{t(`about.values.items.${value.key}.description`)}</p>
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
              <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">
                {isRTL ? "הכירו את הצוות שלנו" : "Meet Our Team"}
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                {isRTL
                  ? "האנשי המקצוע הנלהבים מאחורי הצלחת TapUp"
                  : "The passionate professionals behind TapUp's success"}
              </p>
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
                <h2 className="text-3xl md:text-4xl font-bold mb-6">{t("about.vision.title")}</h2>
                <p className="text-xl opacity-90 max-w-3xl mx-auto leading-relaxed">{t("about.vision.description")}</p>
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
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-foreground">
                {isRTL ? "מוכן לעבוד איתנו?" : "Ready to Work with Us?"}
              </h2>
              <p className="text-muted-foreground mb-8 max-w-2xl mx-auto text-lg">
                {isRTL
                  ? "בוא נדבר על איך אנחנו יכולים לעזור לשנות את העסק שלך עם פתרונות טכנולוגיים חדשניים."
                  : "Let's discuss how we can help transform your business with innovative technology solutions."}
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/contact">
                  <Button className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 px-8 py-6 text-lg rounded-full group">
                    {isRTL ? "התחל היום" : "Get Started Today"}
                    <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </Link>
                <Link href="/services">
                  <Button
                    variant="outline"
                    className="border-purple-500 text-purple-500 hover:bg-purple-500/10 px-8 py-6 text-lg rounded-full"
                  >
                    {isRTL ? "השירותים שלנו" : "Our Services"}
                  </Button>
                </Link>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>
    </div>
  )
}
