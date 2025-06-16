"use client"

import Link from "next/link"
import { Input } from "@/components/ui/input"
import { Mail, Phone, MapPin, Instagram, Linkedin, ArrowLeft } from "lucide-react"
import { BaseButton } from "@/components/ui/base-button"

export function Footer() {
  const currentYear = new Date().getFullYear()

  const services = [
    { name: "אוטומציה ואינטגרציה", href: "/services#automation" },
    { name: "פיתוח מותאם אישית", href: "/services#development" },
    { name: "סוכני AI", href: "/services#ai-agents" },
    { name: "ניתוח נתונים", href: "/services#analytics" },
  ]

  const company = [
    { name: "אודות", href: "/about" },
    { name: "שירותים", href: "/services" },
    { name: "יצירת קשר", href: "/contact" },
  ]

  return (
    <footer className="bg-muted/30 border-t border-border/50" dir="rtl">
      <div className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2 space-x-reverse">
              <div className="w-8 h-8 bg-gradient-to-r from-purple-600 to-blue-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-lg">T</span>
              </div>
              <span className="text-xl font-bold">TapUp</span>
            </div>
            <p className="text-muted-foreground text-sm leading-relaxed">
              אנחנו מובילים בפיתוח פתרונות טכנולוגיים מתקדמים שמשנים את הדרך שבה עסקים פועלים ומצליחים.
            </p>
            <div className="flex space-x-4 space-x-reverse">
              <a
                href="https://instagram.com/tapup"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-muted rounded-lg flex items-center justify-center hover:bg-purple-500/10 hover:text-purple-600 transition-colors"
              >
                <Instagram className="h-5 w-5" />
              </a>
              <a
                href="https://linkedin.com/company/tapup"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-muted rounded-lg flex items-center justify-center hover:bg-blue-500/10 hover:text-blue-600 transition-colors"
              >
                <Linkedin className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-semibold mb-4">השירותים שלנו</h3>
            <ul className="space-y-3">
              {services.map((service) => (
                <li key={service.name}>
                  <Link
                    href={service.href}
                    className="text-muted-foreground hover:text-foreground transition-colors text-sm"
                  >
                    {service.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="font-semibold mb-4">החברה</h3>
            <ul className="space-y-3">
              {company.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="text-muted-foreground hover:text-foreground transition-colors text-sm"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact & Newsletter */}
          <div>
            <h3 className="font-semibold mb-4">יצירת קשר</h3>
            <div className="space-y-3 mb-6">
              <div className="flex items-center space-x-3 space-x-reverse">
                <Mail className="h-4 w-4 text-muted-foreground" />
                <span className="text-sm text-muted-foreground">info@tapup.co.il</span>
              </div>
              <div className="flex items-center space-x-3 space-x-reverse">
                <Phone className="h-4 w-4 text-muted-foreground" />
                <span className="text-sm text-muted-foreground">050-123-4567</span>
              </div>
              <div className="flex items-center space-x-3 space-x-reverse">
                <MapPin className="h-4 w-4 text-muted-foreground" />
                <span className="text-sm text-muted-foreground">תל אביב, ישראל</span>
              </div>
            </div>

            <div>
              <h4 className="font-medium mb-3 text-sm">הירשמו לעדכונים</h4>
              <div className="flex gap-2">
                <Input type="email" placeholder="כתובת אימייל" className="text-sm" />
                <BaseButton variant="primary" size="sm">
                  <ArrowLeft className="h-4 w-4" />
                </BaseButton>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-border/50 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-muted-foreground text-sm">© {currentYear} TapUp. כל הזכויות שמורות.</p>
            <div className="flex space-x-6 space-x-reverse text-sm">
              <Link href="/privacy" className="text-muted-foreground hover:text-foreground transition-colors">
                מדיניות פרטיות
              </Link>
              <Link href="/terms" className="text-muted-foreground hover:text-foreground transition-colors">
                תנאי שימוש
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
