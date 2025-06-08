"use client"

import { useTranslation } from "react-i18next"
import Link from "next/link"
import { Instagram, Facebook, Mail, Phone, Cpu } from "lucide-react"

export default function Footer() {
  const { t } = useTranslation()

  const navigation = [
    { name: t("nav.home"), href: "/" },
    { name: t("nav.services"), href: "/services" },
    { name: t("nav.portfolio"), href: "/portfolio" },
    { name: t("nav.pricing"), href: "/pricing" },
    { name: t("nav.about"), href: "/about" },
    { name: t("nav.blog"), href: "/blog" },
    { name: t("nav.contact"), href: "/contact" },
  ]

  return (
    <footer className="py-16 border-t border-border relative overflow-hidden bg-background">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom,rgba(120,50,255,0.05),transparent_70%)]" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
          <div>
            <div className="flex items-center gap-2 mb-6">
              <Cpu className="h-6 w-6 text-purple-500" />
              <span className="font-bold text-xl text-foreground">TapUp</span>
            </div>
            <p className="text-muted-foreground mb-6 max-w-md">{t("footer.description")}</p>
            <div className="flex space-x-4">
              <a
                href="https://instagram.com/tapup.il"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-purple-500 transition-colors"
              >
                <Instagram className="h-5 w-5" />
              </a>
              <a
                href="https://www.facebook.com/tapuplabs"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-blue-500 transition-colors"
              >
                <Facebook className="h-5 w-5" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-bold text-lg mb-6 text-foreground">{t("footer.navigation")}</h4>
            <ul className="space-y-4">
              {navigation.map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className="text-muted-foreground hover:text-foreground transition-colors">
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-lg mb-6 text-foreground">Services</h4>
            <ul className="space-y-4">
              {[
                t("services.items.automation.title"),
                t("services.items.custom.title"),
                t("services.items.aiAgents.title"),
                t("services.items.bigdata.title"),
              ].map((item) => (
                <li key={item}>
                  <Link href="/services" className="text-muted-foreground hover:text-foreground transition-colors">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-lg mb-6 text-foreground">{t("footer.contact")}</h4>
            <div className="space-y-4">
              <div className="flex items-center text-muted-foreground">
                <Mail className="h-4 w-4 mr-2" />
                <span>info@tapup.co.il</span>
              </div>
              <div className="flex items-center text-muted-foreground">
                <Phone className="h-4 w-4 mr-2" />
                <span>+972-50-123-4567</span>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-border flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-muted-foreground text-sm">
            &copy; {new Date().getFullYear()} TapUp. {t("footer.copyright", { year: new Date().getFullYear() })}
          </p>
          <div className="flex gap-6">
            <Link href="/privacy" className="text-muted-foreground hover:text-foreground text-sm transition-colors">
              Privacy Policy
            </Link>
            <Link href="/terms" className="text-muted-foreground hover:text-foreground text-sm transition-colors">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
