"use client"

import { useState } from "react"
import { useTranslation } from "react-i18next"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Mail, Phone, Instagram, Linkedin, Send } from "lucide-react"

export default function ContactPage() {
  const { t } = useTranslation()
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  })
  const [errors, setErrors] = useState({})
  const [isSubmitting, setIsSubmitting] = useState(false)

  const validateForm = () => {
    const newErrors = {}

    if (!formData.name.trim()) {
      newErrors.name = t("contact.form.errors.nameRequired")
    }

    if (!formData.email.trim()) {
      newErrors.email = t("contact.form.errors.emailRequired")
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = t("contact.form.errors.emailInvalid")
    }

    if (!formData.message.trim()) {
      newErrors.message = t("contact.form.errors.messageRequired")
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
        body: JSON.stringify(formData),
      })

      const data = await response.json()

      if (response.ok) {
        alert(t("contact.form.success"))
        setFormData({ name: "", email: "", phone: "", message: "" })
      } else {
        alert(data.error || t("contact.form.error"))
      }
    } catch (error) {
      console.error("Form submission error:", error)
      alert(t("contact.form.error"))
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

  return (
    <div className="min-h-screen py-20 px-4">
      <div className="container mx-auto max-w-4xl">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-gray-800">{t("contact.title")}</h1>
          <p className="text-xl text-gray-600">{t("contact.description")}</p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Contact Form */}
          <Card>
            <CardHeader>
              <CardTitle>{t("contact.form.title")}</CardTitle>
              <CardDescription>{t("contact.form.description")}</CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <Label htmlFor="name">{t("contact.form.name")}</Label>
                  <Input
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className={errors.name ? "border-red-500" : ""}
                  />
                  {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name}</p>}
                </div>

                <div>
                  <Label htmlFor="email">{t("contact.form.email")}</Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    className={errors.email ? "border-red-500" : ""}
                  />
                  {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
                </div>

                <div>
                  <Label htmlFor="phone">{t("contact.form.phone")}</Label>
                  <Input id="phone" name="phone" type="tel" value={formData.phone} onChange={handleChange} />
                </div>

                <div>
                  <Label htmlFor="message">{t("contact.form.message")}</Label>
                  <Textarea
                    id="message"
                    name="message"
                    rows={4}
                    value={formData.message}
                    onChange={handleChange}
                    className={errors.message ? "border-red-500" : ""}
                  />
                  {errors.message && <p className="text-red-500 text-sm mt-1">{errors.message}</p>}
                </div>

                <Button type="submit" className="w-full bg-purple-600 hover:bg-purple-700" disabled={isSubmitting}>
                  {isSubmitting ? t("contact.form.sending") : t("contact.form.send")}
                  <Send className="ml-2 h-4 w-4" />
                </Button>
              </form>
            </CardContent>
          </Card>

          {/* Contact Info */}
          <div className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>{t("contact.info.title")}</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center">
                  <Mail className="h-5 w-5 text-purple-600 mr-3" />
                  <span>info@tapup.co.il</span>
                </div>
                <div className="flex items-center">
                  <Phone className="h-5 w-5 text-purple-600 mr-3" />
                  <span>+972-50-123-4567</span>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>{t("contact.social.title")}</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex space-x-4">
                  <a
                    href="https://instagram.com/tapup"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center w-12 h-12 bg-purple-100 text-purple-600 rounded-full hover:bg-purple-200 transition-colors"
                  >
                    <Instagram className="h-6 w-6" />
                  </a>
                  <a
                    href="https://linkedin.com/company/tapup"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center w-12 h-12 bg-blue-100 text-blue-600 rounded-full hover:bg-blue-200 transition-colors"
                  >
                    <Linkedin className="h-6 w-6" />
                  </a>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-r from-purple-600 to-blue-600 text-white">
              <CardContent className="pt-6">
                <h3 className="text-xl font-semibold mb-2">{t("contact.cta.title")}</h3>
                <p className="opacity-90">{t("contact.cta.description")}</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}
