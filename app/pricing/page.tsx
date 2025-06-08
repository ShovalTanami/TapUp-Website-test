"use client"

import { useState } from "react"
import { useTranslation } from "react-i18next"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  ArrowRight,
  Check,
  Star,
  Zap,
  Settings,
  Bot,
  Database,
  Smartphone,
  Clock,
  Users,
  Shield,
  Target,
  MessageSquare,
  Phone,
} from "lucide-react"
import Link from "next/link"
import { FadeIn, StaggerContainer, StaggerItem } from "@/components/ui/scroll-animations"
import { GlowEffect } from "@/components/ui/glow-effect"
import { ParticleBackground } from "@/components/ui/particle-background"

export default function PricingPage() {
  const { t, i18n } = useTranslation()
  const [billingCycle, setBillingCycle] = useState<"monthly" | "yearly">("monthly")

  const plans = [
    {
      name: "Starter",
      description: "Perfect for small businesses getting started with automation",
      price: { monthly: 999, yearly: 9990 },
      originalPrice: { monthly: 1299, yearly: 12990 },
      icon: <Zap className="h-8 w-8 text-purple-500" />,
      color: "from-purple-500 to-purple-600",
      bgColor: "bg-purple-500/10",
      borderColor: "border-purple-500/20",
      popular: false,
      features: [
        "Basic Process Automation",
        "Up to 5 Workflows",
        "Email Support",
        "Basic Analytics Dashboard",
        "API Integration (3 services)",
        "Monthly Performance Reports",
        "Standard Security Features",
        "Community Access",
      ],
      included: ["Setup & Configuration", "Basic Training (2 hours)", "Documentation", "30-day Support"],
      notIncluded: ["Custom Development", "Advanced AI Features", "Priority Support", "Dedicated Account Manager"],
    },
    {
      name: "Professional",
      description: "Ideal for growing businesses with complex automation needs",
      price: { monthly: 2499, yearly: 24990 },
      originalPrice: { monthly: 3199, yearly: 31990 },
      icon: <Settings className="h-8 w-8 text-blue-500" />,
      color: "from-blue-500 to-blue-600",
      bgColor: "bg-blue-500/10",
      borderColor: "border-blue-500/20",
      popular: true,
      features: [
        "Advanced Process Automation",
        "Up to 20 Workflows",
        "Priority Email & Chat Support",
        "Advanced Analytics & Reporting",
        "API Integration (Unlimited)",
        "Custom Dashboard Design",
        "Advanced Security & Compliance",
        "Team Collaboration Tools",
        "Mobile App Access",
        "Webhook Support",
      ],
      included: [
        "Complete Setup & Migration",
        "Comprehensive Training (8 hours)",
        "Custom Documentation",
        "90-day Priority Support",
        "Monthly Strategy Calls",
      ],
      notIncluded: ["AI Agent Development", "24/7 Phone Support", "Dedicated Infrastructure"],
    },
    {
      name: "Enterprise",
      description: "Complete solution for large organizations with custom requirements",
      price: { monthly: 4999, yearly: 49990 },
      originalPrice: { monthly: 6499, yearly: 64990 },
      icon: <Bot className="h-8 w-8 text-indigo-500" />,
      color: "from-indigo-500 to-indigo-600",
      bgColor: "bg-indigo-500/10",
      borderColor: "border-indigo-500/20",
      popular: false,
      features: [
        "Custom AI Agent Development",
        "Unlimited Workflows",
        "24/7 Phone & Chat Support",
        "Real-time Analytics & Monitoring",
        "Enterprise API Access",
        "Custom Integrations",
        "Enterprise Security & Compliance",
        "Dedicated Account Manager",
        "White-label Solutions",
        "Advanced AI & ML Features",
        "Custom Mobile Apps",
        "Dedicated Infrastructure",
      ],
      included: [
        "Full Custom Development",
        "Dedicated Implementation Team",
        "Unlimited Training & Support",
        "Custom SLA Agreement",
        "Weekly Strategy Sessions",
        "Priority Feature Requests",
      ],
      notIncluded: [],
    },
  ]

  const addOns = [
    {
      name: "AI Chatbot Development",
      description: "Custom AI chatbot for customer service",
      price: 1999,
      icon: <MessageSquare className="h-6 w-6 text-green-500" />,
    },
    {
      name: "Mobile App Development",
      description: "Native mobile app for iOS and Android",
      price: 4999,
      icon: <Smartphone className="h-6 w-6 text-orange-500" />,
    },
    {
      name: "Data Analytics Dashboard",
      description: "Custom analytics and reporting dashboard",
      price: 2499,
      icon: <Database className="h-6 w-6 text-blue-500" />,
    },
    {
      name: "24/7 Priority Support",
      description: "Round-the-clock priority technical support",
      price: 499,
      icon: <Phone className="h-6 w-6 text-purple-500" />,
    },
  ]

  const faqs = [
    {
      question: "What's included in the setup process?",
      answer:
        "Our setup process includes initial consultation, system configuration, data migration, team training, and comprehensive testing to ensure everything works perfectly.",
    },
    {
      question: "Can I upgrade or downgrade my plan?",
      answer:
        "Yes, you can change your plan at any time. Upgrades take effect immediately, while downgrades take effect at the next billing cycle.",
    },
    {
      question: "Do you offer custom solutions?",
      answer:
        "We specialize in custom solutions tailored to your specific business needs. Contact us to discuss your requirements.",
    },
    {
      question: "What kind of support do you provide?",
      answer:
        "We offer various levels of support depending on your plan, from email support to 24/7 phone support with dedicated account managers.",
    },
    {
      question: "Is there a money-back guarantee?",
      answer:
        "Yes, we offer a 30-day money-back guarantee for all our plans. If you're not satisfied, we'll refund your payment.",
    },
    {
      question: "How long does implementation take?",
      answer:
        "Implementation time varies by plan complexity. Starter plans typically take 1-2 weeks, Professional plans 2-4 weeks, and Enterprise solutions 4-8 weeks.",
    },
  ]

  const benefits = [
    {
      icon: <Clock className="h-8 w-8 text-purple-500" />,
      title: "Fast Implementation",
      description: "Get up and running quickly with our streamlined setup process",
    },
    {
      icon: <Shield className="h-8 w-8 text-blue-500" />,
      title: "Enterprise Security",
      description: "Bank-level security and compliance standards for all plans",
    },
    {
      icon: <Users className="h-8 w-8 text-green-500" />,
      title: "Expert Support",
      description: "Dedicated support team with deep technical expertise",
    },
    {
      icon: <Target className="h-8 w-8 text-orange-500" />,
      title: "Proven Results",
      description: "Track record of successful implementations across industries",
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
                <Star className="w-4 h-4 mr-2" />
                Transparent Pricing
              </div>
            </FadeIn>

            <FadeIn delay={0.2}>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                <span className="bg-gradient-to-r from-foreground via-purple-600 to-blue-600 bg-clip-text text-transparent">
                  Simple, Transparent Pricing
                </span>
              </h1>
            </FadeIn>

            <FadeIn delay={0.4}>
              <p className="text-lg md:text-xl text-muted-foreground mb-10 max-w-3xl mx-auto">
                Choose the perfect plan for your business. All plans include our core features with no hidden fees.
              </p>
            </FadeIn>

            <FadeIn delay={0.6}>
              <div className="flex items-center justify-center gap-4 mb-12">
                <span
                  className={`text-sm font-medium ${billingCycle === "monthly" ? "text-foreground" : "text-muted-foreground"}`}
                >
                  Monthly
                </span>
                <button
                  onClick={() => setBillingCycle(billingCycle === "monthly" ? "yearly" : "monthly")}
                  className={`relative w-16 h-8 rounded-full transition-colors duration-300 ${
                    billingCycle === "yearly" ? "bg-purple-600" : "bg-muted"
                  }`}
                >
                  <div
                    className={`absolute top-1 w-6 h-6 bg-white rounded-full transition-transform duration-300 ${
                      billingCycle === "yearly" ? "translate-x-9" : "translate-x-1"
                    }`}
                  />
                </button>
                <span
                  className={`text-sm font-medium ${billingCycle === "yearly" ? "text-foreground" : "text-muted-foreground"}`}
                >
                  Yearly
                </span>
                {billingCycle === "yearly" && (
                  <Badge className="bg-green-500/10 text-green-600 border-green-500/20">Save 20%</Badge>
                )}
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Pricing Plans */}
      <section className="py-24 relative overflow-hidden">
        <div className="container mx-auto px-4">
          <StaggerContainer>
            <div className="grid lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
              {plans.map((plan, index) => (
                <StaggerItem key={index}>
                  <GlowEffect>
                    <Card
                      className={`h-full bg-card/50 backdrop-blur-sm border-border/50 hover:${plan.borderColor} transition-all duration-300 relative ${
                        plan.popular ? "ring-2 ring-purple-500/50 scale-105" : ""
                      }`}
                    >
                      {plan.popular && (
                        <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                          <Badge className="bg-gradient-to-r from-purple-600 to-blue-600 text-white px-6 py-2">
                            Most Popular
                          </Badge>
                        </div>
                      )}

                      <CardHeader className="text-center pb-8">
                        <div
                          className={`w-16 h-16 ${plan.bgColor} rounded-2xl flex items-center justify-center mx-auto mb-4`}
                        >
                          {plan.icon}
                        </div>
                        <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                        <p className="text-muted-foreground mb-6">{plan.description}</p>

                        <div className="space-y-2">
                          <div className="flex items-center justify-center gap-2">
                            <span className="text-4xl font-bold">
                              $
                              {billingCycle === "monthly"
                                ? plan.price.monthly.toLocaleString()
                                : plan.price.yearly.toLocaleString()}
                            </span>
                            <div className="text-left">
                              <div className="text-sm text-muted-foreground line-through">
                                $
                                {billingCycle === "monthly"
                                  ? plan.originalPrice.monthly.toLocaleString()
                                  : plan.originalPrice.yearly.toLocaleString()}
                              </div>
                              <div className="text-sm text-muted-foreground">
                                /{billingCycle === "monthly" ? "month" : "year"}
                              </div>
                            </div>
                          </div>
                          {billingCycle === "yearly" && (
                            <div className="text-sm text-green-600 font-medium">
                              Save ${((plan.originalPrice.yearly - plan.price.yearly) / 100).toFixed(0)}% annually
                            </div>
                          )}
                        </div>
                      </CardHeader>

                      <CardContent className="pt-0">
                        <div className="space-y-6">
                          <div>
                            <h4 className="font-semibold mb-4 text-green-600">What's included:</h4>
                            <ul className="space-y-3">
                              {plan.features.map((feature, i) => (
                                <li key={i} className="flex items-start gap-3">
                                  <Check className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                                  <span className="text-sm text-muted-foreground">{feature}</span>
                                </li>
                              ))}
                            </ul>
                          </div>

                          <div>
                            <h4 className="font-semibold mb-4 text-blue-600">Setup & Support:</h4>
                            <ul className="space-y-3">
                              {plan.included.map((item, i) => (
                                <li key={i} className="flex items-start gap-3">
                                  <Check className="h-5 w-5 text-blue-500 flex-shrink-0 mt-0.5" />
                                  <span className="text-sm text-muted-foreground">{item}</span>
                                </li>
                              ))}
                            </ul>
                          </div>

                          {plan.notIncluded.length > 0 && (
                            <div>
                              <h4 className="font-semibold mb-4 text-muted-foreground">Not included:</h4>
                              <ul className="space-y-3">
                                {plan.notIncluded.map((item, i) => (
                                  <li key={i} className="flex items-start gap-3">
                                    <div className="h-5 w-5 flex items-center justify-center flex-shrink-0 mt-0.5">
                                      <div className="h-1 w-1 bg-muted-foreground rounded-full"></div>
                                    </div>
                                    <span className="text-sm text-muted-foreground">{item}</span>
                                  </li>
                                ))}
                              </ul>
                            </div>
                          )}

                          <Link href="/contact" className="block mt-8">
                            <Button
                              className={`w-full bg-gradient-to-r ${plan.color} hover:opacity-90 text-white`}
                              size="lg"
                            >
                              Get Started
                              <ArrowRight className="ml-2 h-5 w-5" />
                            </Button>
                          </Link>
                        </div>
                      </CardContent>
                    </Card>
                  </GlowEffect>
                </StaggerItem>
              ))}
            </div>
          </StaggerContainer>
        </div>
      </section>

      {/* Add-ons Section */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-500/5 to-blue-500/5 dark:from-purple-900/10 dark:to-blue-900/10" />

        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-16">
            <FadeIn>
              <div className="inline-flex items-center px-4 py-2 bg-blue-500/10 text-blue-600 rounded-full text-sm font-medium mb-6">
                <Zap className="w-4 h-4 mr-2" />
                Enhance Your Plan
              </div>
              <h2 className="text-3xl md:text-5xl font-bold mb-4">Additional Services</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Customize your solution with these powerful add-ons to meet your specific business needs
              </p>
            </FadeIn>
          </div>

          <StaggerContainer>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
              {addOns.map((addon, index) => (
                <StaggerItem key={index}>
                  <GlowEffect>
                    <Card className="h-full bg-card/50 backdrop-blur-sm border-border/50 hover:border-purple-500/50 transition-all duration-300">
                      <CardContent className="p-8">
                        <div className="w-12 h-12 bg-muted rounded-xl flex items-center justify-center mb-6">
                          {addon.icon}
                        </div>
                        <h3 className="text-lg font-semibold mb-2">{addon.name}</h3>
                        <p className="text-muted-foreground text-sm mb-6">{addon.description}</p>
                        <div className="flex items-center justify-between">
                          <span className="text-xl font-bold">${addon.price.toLocaleString()}</span>
                          <Button variant="outline" size="sm">
                            Add to Plan
                          </Button>
                        </div>
                      </CardContent>
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
          <div className="text-center mb-16">
            <FadeIn>
              <div className="inline-flex items-center px-4 py-2 bg-green-500/10 text-green-600 rounded-full text-sm font-medium mb-6">
                <Star className="w-4 h-4 mr-2" />
                Why Choose Us
              </div>
              <h2 className="text-3xl md:text-5xl font-bold mb-4">The TapUp Advantage</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Experience the difference with our proven approach to technology solutions
              </p>
            </FadeIn>
          </div>

          <StaggerContainer>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
              {benefits.map((benefit, index) => (
                <StaggerItem key={index}>
                  <GlowEffect>
                    <Card className="text-center p-8 bg-card/50 backdrop-blur-sm border-border/50 hover:border-purple-500/30 transition-all duration-300 h-full">
                      <div className="w-16 h-16 bg-gradient-to-br from-purple-500/10 to-blue-500/10 rounded-2xl flex items-center justify-center mx-auto mb-6">
                        {benefit.icon}
                      </div>
                      <h3 className="text-lg font-semibold mb-4">{benefit.title}</h3>
                      <p className="text-muted-foreground text-sm leading-relaxed">{benefit.description}</p>
                    </Card>
                  </GlowEffect>
                </StaggerItem>
              ))}
            </div>
          </StaggerContainer>
        </div>
      </section>

      {/* FAQs Section */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-muted/30 to-background dark:from-muted/10 dark:to-background" />

        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-16">
            <FadeIn>
              <div className="inline-flex items-center px-4 py-2 bg-orange-500/10 text-orange-600 rounded-full text-sm font-medium mb-6">
                <MessageSquare className="w-4 h-4 mr-2" />
                Common Questions
              </div>
              <h2 className="text-3xl md:text-5xl font-bold mb-4">Frequently Asked Questions</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Find answers to common questions about our pricing and services
              </p>
            </FadeIn>
          </div>

          <div className="max-w-4xl mx-auto">
            <StaggerContainer>
              <div className="grid md:grid-cols-2 gap-8">
                {faqs.map((faq, index) => (
                  <StaggerItem key={index}>
                    <GlowEffect>
                      <Card className="bg-card/50 backdrop-blur-sm border-border/50 hover:border-purple-500/30 transition-all duration-300">
                        <CardContent className="p-6">
                          <h3 className="text-lg font-semibold mb-3">{faq.question}</h3>
                          <p className="text-muted-foreground text-sm leading-relaxed">{faq.answer}</p>
                        </CardContent>
                      </Card>
                    </GlowEffect>
                  </StaggerItem>
                ))}
              </div>
            </StaggerContainer>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-blue-600" />
        <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-20" />

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center text-white">
            <FadeIn>
              <h2 className="text-3xl md:text-5xl font-bold mb-6">Need a Custom Solution?</h2>
              <p className="text-xl mb-8 text-white/90">
                Contact us for a personalized quote tailored to your specific business requirements
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/contact">
                  <Button
                    size="lg"
                    className="bg-white text-purple-600 hover:bg-white/90 px-8 py-4 text-lg font-medium"
                  >
                    Contact Sales
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </Link>
                <Link href="/portfolio">
                  <Button
                    variant="outline"
                    size="lg"
                    className="border-white text-white hover:bg-white/10 px-8 py-4 text-lg"
                  >
                    View Our Work
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
