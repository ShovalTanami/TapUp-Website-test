"use client"

import { useState, useEffect } from "react"
import { useTranslation } from "react-i18next"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Button } from "@/components/ui/button"
import { ThemeToggle } from "@/components/ui/theme-toggle"
import { Menu, X, Globe, Cpu, ChevronDown, ChevronUp } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"

export default function Header() {
  const { t, i18n } = useTranslation()
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [scrollY, setScrollY] = useState(0)
  const [servicesOpen, setServicesOpen] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  // הוספת קוד להגדרת כיוון האתר בטעינה ראשונית
  useEffect(() => {
    // קביעת כיוון האתר בהתאם לשפה הנוכחית
    document.documentElement.dir = i18n.language === "he" ? "rtl" : "ltr"
    document.documentElement.lang = i18n.language
  }, [i18n.language])

  const navigation = [
    { name: t("nav.home"), href: "/" },
    {
      name: t("nav.services"),
      href: "/services",
      submenu: [
        { name: t("nav.automation"), href: "/services/automation" },
        { name: t("nav.customDevelopment"), href: "/services/custom-development" },
        { name: t("nav.aiAgents"), href: "/services/ai-agents" },
      ],
    },
    { name: t("nav.portfolio"), href: "/portfolio" },
    { name: t("nav.pricing"), href: "/pricing" },
    { name: t("nav.about"), href: "/about" },
    { name: t("nav.blog"), href: "/blog" },
    { name: t("nav.contact"), href: "/contact" },
  ]

  const toggleLanguage = () => {
    const newLang = i18n.language === "he" ? "en" : "he"
    i18n.changeLanguage(newLang)
    document.documentElement.dir = newLang === "he" ? "rtl" : "ltr"
    document.documentElement.lang = newLang
  }

  const headerClass =
    scrollY > 50 ? "py-4 bg-background/80 backdrop-blur-md border-b border-border/50" : "py-6 bg-transparent"

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${headerClass}`}>
      <div className="container mx-auto px-4 flex justify-between items-center">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="flex items-center gap-2"
        >
          <Cpu className="h-6 w-6 text-purple-500" />
          <Link href="/" className="font-bold text-xl text-foreground">
            TapUp
          </Link>
        </motion.div>

        <nav className="hidden md:flex items-center gap-8">
          {navigation.map((item, i) => (
            <motion.div
              key={item.href}
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 + i * 0.1 }}
              className="relative"
            >
              {item.submenu ? (
                <div className="relative">
                  <button
                    onClick={() => setServicesOpen(!servicesOpen)}
                    className={`flex items-center text-muted-foreground hover:text-foreground transition-colors text-sm font-medium ${
                      pathname.startsWith(item.href) ? "text-purple-500" : ""
                    }`}
                  >
                    {item.name}
                    {servicesOpen ? <ChevronUp className="ml-1 h-4 w-4" /> : <ChevronDown className="ml-1 h-4 w-4" />}
                  </button>

                  <AnimatePresence>
                    {servicesOpen && (
                      <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 10 }}
                        transition={{ duration: 0.2 }}
                        className="absolute top-full left-0 mt-2 bg-background border border-border rounded-lg shadow-lg py-2 min-w-[200px] z-50"
                      >
                        {item.submenu.map((subitem) => (
                          <Link
                            key={subitem.href}
                            href={subitem.href}
                            className={`block px-4 py-2 text-sm hover:bg-muted transition-colors ${
                              pathname === subitem.href ? "text-purple-500" : "text-muted-foreground"
                            }`}
                            onClick={() => setServicesOpen(false)}
                          >
                            {subitem.name}
                          </Link>
                        ))}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ) : (
                <Link
                  href={item.href}
                  className={`text-muted-foreground hover:text-foreground transition-colors text-sm font-medium ${
                    pathname === item.href ? "text-purple-500" : ""
                  }`}
                >
                  {item.name}
                </Link>
              )}
            </motion.div>
          ))}
        </nav>

        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="flex items-center gap-2"
        >
          <ThemeToggle />

          <Button
            variant="ghost"
            size="sm"
            onClick={toggleLanguage}
            className="text-muted-foreground hover:text-foreground hidden md:flex"
          >
            <Globe className="h-4 w-4 mr-2" />
            {i18n.language === "he" ? "EN" : "עב"}
          </Button>

          <Link href="/contact" className="hidden md:block">
            <Button variant="outline" className="border-purple-500 text-purple-500 hover:bg-purple-500/10">
              {t("nav.contact")}
            </Button>
          </Link>

          <Button
            variant="ghost"
            size="icon"
            className="md:hidden text-foreground"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </Button>
        </motion.div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden bg-background/95 backdrop-blur-md border-b border-border"
          >
            <div className="container mx-auto px-4 py-6 flex flex-col gap-6">
              {navigation.map((item) => (
                <div key={item.href} className="flex flex-col">
                  {item.submenu ? (
                    <>
                      <button
                        onClick={() => setServicesOpen(!servicesOpen)}
                        className={`flex items-center justify-between text-muted-foreground hover:text-foreground transition-colors text-lg font-medium ${
                          pathname.startsWith(item.href) ? "text-purple-500" : ""
                        }`}
                      >
                        {item.name}
                        {servicesOpen ? (
                          <ChevronUp className="ml-1 h-4 w-4" />
                        ) : (
                          <ChevronDown className="ml-1 h-4 w-4" />
                        )}
                      </button>

                      <AnimatePresence>
                        {servicesOpen && (
                          <motion.div
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: "auto" }}
                            exit={{ opacity: 0, height: 0 }}
                            transition={{ duration: 0.2 }}
                            className="pl-4 mt-2 border-l border-border"
                          >
                            {item.submenu.map((subitem) => (
                              <Link
                                key={subitem.href}
                                href={subitem.href}
                                className={`block py-2 text-base ${
                                  pathname === subitem.href ? "text-purple-500" : "text-muted-foreground"
                                }`}
                                onClick={() => setIsMenuOpen(false)}
                              >
                                {subitem.name}
                              </Link>
                            ))}
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </>
                  ) : (
                    <Link
                      href={item.href}
                      className={`text-muted-foreground hover:text-foreground transition-colors text-lg font-medium ${
                        pathname === item.href ? "text-purple-500" : ""
                      }`}
                      onClick={() => setIsMenuOpen(false)}
                    >
                      {item.name}
                    </Link>
                  )}
                </div>
              ))}
              <div className="flex flex-col gap-4 pt-4 border-t border-border">
                <Button
                  variant="ghost"
                  onClick={toggleLanguage}
                  className="text-muted-foreground hover:text-foreground justify-start"
                >
                  <Globe className="h-4 w-4 mr-2" />
                  {i18n.language === "he" ? "English" : "עברית"}
                </Button>
                <Link href="/contact">
                  <Button
                    className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 w-full"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {t("nav.contact")}
                  </Button>
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
