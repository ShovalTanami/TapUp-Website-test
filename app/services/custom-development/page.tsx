"use client"

import { useTranslation } from "react-i18next"
import { motion } from "framer-motion"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ArrowRight, Code, CheckCircle, Smartphone, Globe, Database, Shield } from "lucide-react"
import Link from "next/link"

export default function CustomDevelopmentPage() {
  const { t } = useTranslation()

  const services = [
    {
      icon: <Globe className="w-8 h-8 text-blue-500" />,
      title: "Web Applications",
      description: "Modern, responsive web applications built with cutting-edge technologies",
      technologies: ["React", "Next.js", "Vue.js", "Angular"],
    },
    {
      icon: <Smartphone className="w-8 h-8 text-green-500" />,
      title: "Mobile Apps",
      description: "Native and cross-platform mobile applications for iOS and Android",
      technologies: ["React Native", "Flutter", "Swift", "Kotlin"],
    },
    {
      icon: <Database className="w-8 h-8 text-purple-500" />,
      title: "Backend Systems",
      description: "Scalable backend infrastructure and API development",
      technologies: ["Node.js", "Python", "PostgreSQL", "MongoDB"],
    },
    {
      icon: <Shield className="w-8 h-8 text-red-500" />,
      title: "Enterprise Solutions",
      description: "Large-scale enterprise applications with advanced security",
      technologies: ["Microservices", "Docker", "Kubernetes", "AWS"],
    },
  ]

  const features = [
    "Custom architecture design",
    "Scalable and maintainable code",
    "Modern UI/UX design",
    "API integration and development",
    "Database design and optimization",
    "Security best practices",
    "Performance optimization",
    "Ongoing support and maintenance",
  ]

  const process = [
    {
      step: "01",
      title: "Discovery & Planning",
      description: "We analyze your requirements and create a detailed project roadmap",
    },
    {
      step: "02",
      title: "Design & Prototyping",
      description: "UI/UX design and interactive prototypes for validation",
    },
    {
      step: "03",
      title: "Development & Testing",
      description: "Agile development with continuous testing and quality assurance",
    },
    {
      step: "04",
      title: "Deployment & Support",
      description: "Production deployment with ongoing maintenance and support",
    },
  ]

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Hero Section */}
      <section className="pt-32 pb-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 via-purple-500/5 to-background" />

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="inline-flex items-center px-6 py-3 bg-blue-500/10 text-blue-600 rounded-full text-sm font-medium mb-8"
            >
              <Code className="w-4 h-4 mr-2" />
              Custom Development Solutions
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-4xl md:text-6xl font-bold mb-6"
            >
              Build Your Vision with
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                {" "}
                Custom Software
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-xl text-muted-foreground mb-10 max-w-2xl mx-auto"
            >
              From concept to deployment, we create tailored software solutions that perfectly fit your business needs
              and drive growth.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="flex flex-col sm:flex-row gap-4 justify-center"
            >
              <Link href="/contact">
                <Button className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 px-8 py-6 text-lg rounded-full">
                  Start Your Project
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
              <Button variant="outline" className="px-8 py-6 text-lg rounded-full">
                View Portfolio
              </Button>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 relative">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Development Services</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Comprehensive software development services covering all aspects of modern application development.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -5 }}
              >
                <Card className="h-full text-center p-6 bg-card/50 backdrop-blur-sm border-border/50 hover:border-purple-500/50 transition-all duration-300">
                  <div className="mb-4 p-3 bg-muted/30 rounded-xl inline-block">{service.icon}</div>
                  <h3 className="text-lg font-semibold mb-3">{service.title}</h3>
                  <p className="text-muted-foreground text-sm mb-4">{service.description}</p>
                  <div className="flex flex-wrap gap-1 justify-center">
                    {service.technologies.map((tech, i) => (
                      <span key={i} className="px-2 py-1 bg-purple-500/10 text-purple-600 rounded text-xs">
                        {tech}
                      </span>
                    ))}
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Development Process</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              A proven methodology that ensures successful project delivery from start to finish.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {process.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="text-center relative"
              >
                {index < process.length - 1 && (
                  <div className="hidden lg:block absolute top-8 left-full w-full h-0.5 bg-gradient-to-r from-purple-500/50 to-transparent z-0" />
                )}

                <div className="relative z-10">
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl flex items-center justify-center text-white text-xl font-bold shadow-xl mx-auto mb-4">
                    {item.step}
                  </div>
                  <h3 className="text-lg font-bold mb-3">{item.title}</h3>
                  <p className="text-muted-foreground text-sm">{item.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Why Choose Our Development Team?</h2>
              <p className="text-muted-foreground mb-8">
                Our experienced developers use the latest technologies and best practices to deliver high-quality,
                scalable solutions.
              </p>

              <div className="grid md:grid-cols-2 gap-4">
                {features.map((feature, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="flex items-center gap-3"
                  >
                    <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                    <span className="text-sm">{feature}</span>
                  </motion.div>
                ))}
              </div>

              <div className="mt-8">
                <Link href="/contact">
                  <Button className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700">
                    Discuss Your Project
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <div className="bg-card/50 backdrop-blur-sm border border-border/50 rounded-2xl p-8">
                <h3 className="text-xl font-semibold mb-6">Development Stats</h3>

                <div className="space-y-6">
                  <div>
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-sm">Code Quality</span>
                      <span className="text-sm font-medium">98%</span>
                    </div>
                    <div className="w-full bg-muted rounded-full h-2">
                      <div className="bg-gradient-to-r from-green-500 to-blue-500 h-2 rounded-full w-[98%]"></div>
                    </div>
                  </div>

                  <div>
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-sm">On-Time Delivery</span>
                      <span className="text-sm font-medium">95%</span>
                    </div>
                    <div className="w-full bg-muted rounded-full h-2">
                      <div className="bg-gradient-to-r from-blue-500 to-purple-500 h-2 rounded-full w-[95%]"></div>
                    </div>
                  </div>

                  <div>
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-sm">Client Satisfaction</span>
                      <span className="text-sm font-medium">99%</span>
                    </div>
                    <div className="w-full bg-muted rounded-full h-2">
                      <div className="bg-gradient-to-r from-purple-500 to-pink-500 h-2 rounded-full w-[99%]"></div>
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4 mt-6">
                  <div className="text-center p-4 bg-muted/30 rounded-xl">
                    <div className="text-2xl font-bold text-blue-600">50+</div>
                    <div className="text-sm text-muted-foreground">Projects</div>
                  </div>
                  <div className="text-center p-4 bg-muted/30 rounded-xl">
                    <div className="text-2xl font-bold text-purple-600">5+</div>
                    <div className="text-sm text-muted-foreground">Years</div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600/10 to-purple-600/10">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Build Something Amazing?</h2>
            <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
              Let's turn your ideas into reality with custom software solutions that drive your business forward.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact">
                <Button className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 px-8 py-6 text-lg rounded-full">
                  Get Started Today
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
              <Link href="/portfolio">
                <Button variant="outline" className="px-8 py-6 text-lg rounded-full">
                  View Our Work
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
