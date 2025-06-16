"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { BaseButton } from "@/components/ui/base-button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Mail, Phone, Instagram, Linkedin, Send, MapPin, Clock, ArrowLeft } from "lucide-react"
import { FadeIn, StaggerContainer, StaggerItem } from "@/components/ui/scroll-animations"
import { GlowEffect } from "@/components/ui/glow-effect"
import { ParticleBackground } from "@/components/ui/particle-background"
import Link from "next/link"

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    message: "",
  })
  const [errors, setErrors] = useState({})
  const [isSubmitting, setIsSubmitting] = useState(false)

  const services = [
    { value: "automation", label: "פיתוח אוטומציות ואינטגרציות" },
    { value: "custom", label: "פיתוח מערכות מותאמות אישית" },
    { value: "ai-agents", label: "פיתוח סוכני AI ומודלי AI" },
    { value: "business", label: "שירותי תוכנה לעסקים וחברות" },
    { value: "ai-implementation", label: "הטמעת AI בארגונים" },
    { value: "big-data", label: "ביג דאטה ואנליטיקה" },
    { value: "consultation", label: "ייעוץ טכנולוגי" },
    { value: "other", label: "אחר" },
  ]

  const validateForm = () => {
    const newErrors = {}

    if (!formData.name.trim()) {
      newErrors.name = "שם מלא נדרש"
    }

    if (!formData.email.trim()) {
      newErrors.email = "כתובת אימייל נדרשת"
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "כתובת אימייל לא תקינה"
    }

    if (!formData.service) {
      newErrors.service = "בחירת שירות נדרשת"
    }

    if (!formData.message.trim()) {
      newErrors.message = "הודעה נדרשת"
    }

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = async (e) => {
    e.preventDefault()

    if (!validateForm()) return

    setIsSubmitting(true)

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          service: formData.service,
          message: formData.message,
        }),
      })

      const data = await response.json()

      if (response.ok) {
        alert("ההודעה נשלחה בהצלחה! נחזור אליכם בהקדם.")
        setFormData({ name: "", email: "", phone: "", service: "", message: "" })
        setErrors({})
      } else {
        alert(data.error || "אירעה שגיאה בשליחת ההודעה")
      }
    } catch (error) {
      console.error("Form submission error:", error)
      alert("אירעה שגיאה בשליחת ההודעה. אנא נסו שוב.")
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: "" }))
    }
  }

  const handleServiceChange = (value) => {
    setFormData((prev) => ({ ...prev, service: value }))
    if (errors.service) {
      setErrors((prev) => ({ ...prev, service: "" }))
    }
  }

  const contactInfo = [
    {
      icon: <Mail className="h-6 w-6 text-purple-600" />,
      title: "אימייל",
      value: "info@tapup.co.il",
      description: "שלחו לנו הודעה ונחזור אליכם תוך 24 שעות",
    },
    {
      icon: <Phone className="h-6 w-6 text-blue-600" />,
      title: "טלפון",
      value: "050-123-4567",
      description: "זמינים לשיחה בימי א'-ה' 9:00-18:00",
    },
    {
      icon: <MapPin className="h-6 w-6 text-green-600" />,
      title: "כתובת",
      value: "תל אביב, ישראל",
      description: "נפגש במשרדינו או בזום לפי העדפתכם",
    },
    {
      icon: <Clock className="h-6 w-6 text-orange-600" />,
      title: "שעות פעילות",
      value: "א'-ה' 9:00-18:00",
      description: "תמיכה טכנית זמינה 24/7",
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
                <Mail className="w-4 h-4 ml-2" />
                יצירת קשר
              </div>
            </FadeIn>

            <FadeIn delay={0.2}>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                <span className="bg-gradient-to-r from-foreground via-purple-600 to-blue-600 bg-clip-text text-transparent">
                  בואו נתחיל לעבוד יחד
                </span>
              </h1>
            </FadeIn>

            <FadeIn delay={0.4}>
              <p className="text-lg md:text-xl text-muted-foreground mb-10 max-w-3xl mx-auto">
                מוכנים לשנות את העסק שלכם? צרו איתנו קשר ונתחיל לתכנן את הפתרון הטכנולוגי המושלם עבורכם
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

      {/* Contact Info Cards */}
      <section className="py-20 relative overflow-hidden">
        <div className="container mx-auto px-4">
          <StaggerContainer>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
              {contactInfo.map((info, index) => (
                <StaggerItem key={index}>
                  <GlowEffect>
                    <Card className="text-center p-6 bg-card/50 backdrop-blur-sm border-border/50 hover:border-purple-500/50 transition-all duration-300 h-full">
                      <div className="w-16 h-16 bg-gradient-to-br from-purple-500/10 to-blue-500/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
                        {info.icon}
                      </div>
                      <h3 className="text-lg font-semibold mb-2">{info.title}</h3>
                      <p className="text-foreground font-medium mb-2">{info.value}</p>
                      <p className="text-muted-foreground text-sm">{info.description}</p>
                    </Card>
                  </GlowEffect>
                </StaggerItem>
              ))}
            </div>
          </StaggerContainer>
        </div>
      </section>

      {/* Contact Form and Info */}
      <section className="py-20 relative overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
            {/* Contact Form */}
            <FadeIn direction="right">
              <GlowEffect>
                <Card className="bg-card/50 backdrop-blur-sm border-border/50">
                  <CardHeader>
                    <CardTitle className="text-2xl">שלחו לנו הודעה</CardTitle>
                    <CardDescription>מלאו את הטופס ונחזור אליכם תוך 24 שעות עם הצעה מותאמת אישית</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <form onSubmit={handleSubmit} className="space-y-6">
                      <div>
                        <Label htmlFor="name">שם מלא *</Label>
                        <Input
                          id="name"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          className={`mt-2 ${errors.name ? "border-red-500" : ""}`}
                          placeholder="הכניסו את השם המלא שלכם"
                        />
                        {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name}</p>}
                      </div>

                      <div>
                        <Label htmlFor="email">כתובת אימייל *</Label>
                        <Input
                          id="email"
                          name="email"
                          type="email"
                          value={formData.email}
                          onChange={handleChange}
                          className={`mt-2 ${errors.email ? "border-red-500" : ""}`}
                          placeholder="example@email.com"
                        />
                        {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
                      </div>

                      <div>
                        <Label htmlFor="phone">מספר טלפון</Label>
                        <Input
                          id="phone"
                          name="phone"
                          type="tel"
                          value={formData.phone}
                          onChange={handleChange}
                          className="mt-2"
                          placeholder="050-123-4567"
                        />
                      </div>

                      <div>
                        <Label htmlFor="service">שירות מעוניין *</Label>
                        <Select value={formData.service} onValueChange={handleServiceChange}>
                          <SelectTrigger className={`mt-2 ${errors.service ? "border-red-500" : ""}`}>
                            <SelectValue placeholder="בחרו את השירות המעניין אתכם" />
                          </SelectTrigger>
                          <SelectContent>
                            {services.map((service) => (
                              <SelectItem key={service.value} value={service.value}>
                                {service.label}
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                        {errors.service && <p className="text-red-500 text-sm mt-1">{errors.service}</p>}
                      </div>

                      <div>
                        <Label htmlFor="message">הודעה *</Label>
                        <Textarea
                          id="message"
                          name="message"
                          rows={5}
                          value={formData.message}
                          onChange={handleChange}
                          className={`mt-2 ${errors.message ? "border-red-500" : ""}`}
                          placeholder="ספרו לנו על הפרויקט שלכם ואיך אנחנו יכולים לעזור..."
                        />
                        {errors.message && <p className="text-red-500 text-sm mt-1">{errors.message}</p>}
                      </div>

                      <BaseButton type="submit" variant="primary" className="w-full" disabled={isSubmitting}>
                        {isSubmitting ? "שולח..." : "שלח הודעה"}
                        <Send className="mr-2 h-5 w-5" />
                      </BaseButton>
                    </form>
                  </CardContent>
                </Card>
              </GlowEffect>
            </FadeIn>

            {/* Additional Info */}
            <FadeIn direction="left">
              <div className="space-y-8">
                <div>
                  <h2 className="text-3xl font-bold mb-6">למה לבחור ב-TapUp?</h2>
                  <div className="space-y-4">
                    <div className="flex items-start gap-4">
                      <div className="w-8 h-8 bg-purple-500/10 rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                        <span className="text-purple-600 font-bold">1</span>
                      </div>
                      <div>
                        <h3 className="font-semibold mb-2">ייעוץ חינם</h3>
                        <p className="text-muted-foreground text-sm">קבלו ייעוץ מקצועי חינם לפני תחילת הפרויקט</p>
                      </div>
                    </div>

                    <div className="flex items-start gap-4">
                      <div className="w-8 h-8 bg-blue-500/10 rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                        <span className="text-blue-600 font-bold">2</span>
                      </div>
                      <div>
                        <h3 className="font-semibold mb-2">פתרונות מותאמים</h3>
                        <p className="text-muted-foreground text-sm">כל פתרון מותאם אישית לצרכים הספציפיים שלכם</p>
                      </div>
                    </div>

                    <div className="flex items-start gap-4">
                      <div className="w-8 h-8 bg-green-500/10 rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                        <span className="text-green-600 font-bold">3</span>
                      </div>
                      <div>
                        <h3 className="font-semibold mb-2">תמיכה מתמשכת</h3>
                        <p className="text-muted-foreground text-sm">תמיכה טכנית ותחזוקה לאחר השקת הפרויקט</p>
                      </div>
                    </div>
                  </div>
                </div>

                <GlowEffect>
                  <Card className="bg-gradient-to-r from-purple-600 to-blue-600 text-white border-0">
                    <CardContent className="p-8">
                      <h3 className="text-xl font-semibold mb-4">מוכנים להתחיל?</h3>
                      <p className="opacity-90 mb-6">
                        בואו נקבע פגישת ייעוץ חינם ונתחיל לתכנן את הפתרון הטכנולוגי שלכם
                      </p>
                      <div className="flex gap-4">
                        <a
                          href="https://instagram.com/tapup"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center justify-center w-12 h-12 bg-white/20 rounded-full hover:bg-white/30 transition-colors"
                        >
                          <Instagram className="h-6 w-6" />
                        </a>
                        <a
                          href="https://linkedin.com/company/tapup"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center justify-center w-12 h-12 bg-white/20 rounded-full hover:bg-white/30 transition-colors"
                        >
                          <Linkedin className="h-6 w-6" />
                        </a>
                      </div>
                    </CardContent>
                  </Card>
                </GlowEffect>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>
    </div>
  )
}
