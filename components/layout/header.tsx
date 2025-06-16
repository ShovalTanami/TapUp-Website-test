"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { BaseButton } from "@/components/ui/base-button"
import { ThemeToggle } from "@/components/ui/theme-toggle"
import { Menu, X, ChevronDown, ChevronUp } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isServicesOpen, setIsServicesOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const services = [
    { name: "פיתוח אוטומציות ואינטגרציות", href: "/services/automation" },
    { name: "פיתוח מערכות מותאמות אישית", href: "/services/custom" },
    { name: "פיתוח סוכני AI ומודלי AI", href: "/services/ai-agents" },
    { name: "שירותי תוכנה לעסקים וחברות", href: "/services/business" },
    { name: "הטמעת AI בארגונים", href: "/services/ai-implementation" },
  ]

  return (
    <header
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled ? "bg-background/80 backdrop-blur-md border-b border-border/50" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2 space-x-reverse">
            <div className="w-8 h-8 bg-gradient-to-r from-purple-600 to-blue-600 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-lg">T</span>
            </div>
            <span className="text-xl font-bold">TapUp</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8 space-x-reverse">
            <Link href="/" className="text-foreground hover:text-purple-600 transition-colors font-medium">
              בית
            </Link>

            <div className="relative group">
              <button
                className="flex items-center text-foreground hover:text-purple-600 transition-colors font-medium"
                onMouseEnter={() => setIsServicesOpen(true)}
                onMouseLeave={() => setIsServicesOpen(false)}
              >
                שירותים
                {isServicesOpen ? <ChevronUp className="ml-1 h-4 w-4" /> : <ChevronDown className="ml-1 h-4 w-4" />}
              </button>

              <AnimatePresence>
                {isServicesOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    transition={{ duration: 0.2 }}
                    className="absolute top-full right-0 mt-2 w-64 bg-background/95 backdrop-blur-md border border-border/50 rounded-lg shadow-lg py-2"
                    onMouseEnter={() => setIsServicesOpen(true)}
                    onMouseLeave={() => setIsServicesOpen(false)}
                  >
                    {services.map((service) => (
                      <Link
                        key={service.name}
                        href={service.href}
                        className="block px-4 py-2 text-sm text-foreground hover:text-purple-600 hover:bg-muted/50 transition-colors"
                      >
                        {service.name}
                      </Link>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            <Link href="/about" className="text-foreground hover:text-purple-600 transition-colors font-medium">
              אודות
            </Link>

            <Link href="/contact" className="text-foreground hover:text-purple-600 transition-colors font-medium">
              יצירת קשר
            </Link>
          </nav>

          {/* Desktop CTA */}
          <div className="hidden md:flex items-center space-x-4 space-x-reverse">
            <ThemeToggle />
            <Link href="/contact">
              <BaseButton variant="primary">בואו נתחיל</BaseButton>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center space-x-2 space-x-reverse">
            <ThemeToggle />
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="p-2 rounded-full hover:bg-muted/50 transition-colors"
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="md:hidden bg-background/95 backdrop-blur-md border-t border-border/50 py-4"
            >
              <nav className="flex flex-col space-y-4">
                <Link
                  href="/"
                  className="text-foreground hover:text-purple-600 transition-colors font-medium px-4 py-2"
                  onClick={() => setIsMenuOpen(false)}
                >
                  בית
                </Link>

                <div className="px-4">
                  <button
                    className="flex items-center justify-between w-full text-foreground hover:text-purple-600 transition-colors font-medium py-2"
                    onClick={() => setIsServicesOpen(!isServicesOpen)}
                  >
                    שירותים
                    {isServicesOpen ? <ChevronUp className="ml-1 h-4 w-4" /> : <ChevronDown className="ml-1 h-4 w-4" />}
                  </button>

                  <AnimatePresence>
                    {isServicesOpen && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.2 }}
                        className="mr-4 mt-2 space-y-2"
                      >
                        {services.map((service) => (
                          <Link
                            key={service.name}
                            href={service.href}
                            className="block text-sm text-muted-foreground hover:text-purple-600 transition-colors py-1"
                            onClick={() => setIsMenuOpen(false)}
                          >
                            {service.name}
                          </Link>
                        ))}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>

                <Link
                  href="/about"
                  className="text-foreground hover:text-purple-600 transition-colors font-medium px-4 py-2"
                  onClick={() => setIsMenuOpen(false)}
                >
                  אודות
                </Link>

                <Link
                  href="/contact"
                  className="text-foreground hover:text-purple-600 transition-colors font-medium px-4 py-2"
                  onClick={() => setIsMenuOpen(false)}
                >
                  יצירת קשר
                </Link>

                <div className="px-4 pt-4">
                  <Link href="/contact" onClick={() => setIsMenuOpen(false)}>
                    <BaseButton variant="primary" className="w-full">
                      בואו נתחיל
                    </BaseButton>
                  </Link>
                </div>
              </nav>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </header>
  )
}
