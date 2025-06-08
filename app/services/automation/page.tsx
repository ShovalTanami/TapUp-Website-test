"use client"

import { useTranslation } from "react-i18next"
import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ArrowRight, Zap, CheckCircle, Clock, TrendingUp, Users, Shield } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

export default function AutomationPage() {
  const { t } = useTranslation()

  const features = [
    {
      icon: <Clock className="w-6 h-6 text-blue-500" />,
      title: "Time Savings",
      description: "Reduce manual work by up to 80% with intelligent automation",
    },
    {
      icon: <TrendingUp className="w-6 h-6 text-green-500" />,
      title: "Increased Efficiency",
      description: "Boost productivity and eliminate human errors",
    },
    {
      icon: <Users className="w-6 h-6 text-purple-500" />,
      title: "Team Focus",
      description: "Free your team to focus on strategic initiatives",
    },
    {
      icon: <Shield className="w-6 h-6 text-red-500" />,
      title: "Reliable Operations",
      description: "24/7 automated processes with built-in monitoring",
    },
  ]

  const solutions = [
    {
      title: "Workflow Automation",
      description: "Streamline complex business processes with intelligent workflow automation",
      technologies: ["Zapier", "Microsoft Power Automate", "Custom APIs"],
      image: "/images/automation-service.png",
    },
    {
      title: "Data Processing",
      description: "Automate data collection, processing, and reporting tasks",
      technologies: ["Python", "Apache Airflow", "ETL Pipelines"],
      image: "/images/bigdata-analytics.png",
    },
    {
      title: "System Integration",
      description: "Connect disparate systems and automate data synchronization",
      technologies: ["REST APIs", "GraphQL", "Webhooks"],
      image: "/images/custom-development.png",
    },
  ]

  const benefits = [
    "Reduce operational costs by 40-60%",
    "Eliminate 95% of manual errors",
    "24/7 automated operations",
    "Real-time monitoring and alerts",
    "Scalable automation solutions",
    "Custom workflow design",
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
              <Zap className="w-4 h-4 mr-2" />
              Automation & Integration Solutions
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-4xl md:text-6xl font-bold mb-6"
            >
              Transform Your Business with
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                {" "}
                Smart Automation
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-xl text-muted-foreground mb-10 max-w-2xl mx-auto"
            >
              Streamline your workflows, eliminate repetitive tasks, and boost productivity with our intelligent
              automation solutions.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="flex flex-col sm:flex-row gap-4 justify-center"
            >
              <Link href="/contact">
                <Button className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 px-8 py-6 text-lg rounded-full">
                  Start Your Automation Journey
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
              <Button variant="outline" className="px-8 py-6 text-lg rounded-full">
                View Case Studies
              </Button>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 relative">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Why Choose Our Automation Solutions?</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Our automation solutions are designed to deliver measurable results and transform your business
              operations.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -5 }}
              >
                <Card className="h-full text-center p-6 bg-card/50 backdrop-blur-sm border-border/50 hover:border-purple-500/50 transition-all duration-300">
                  <div className="mb-4 p-3 bg-muted/30 rounded-xl inline-block">{feature.icon}</div>
                  <h3 className="text-lg font-semibold mb-2">{feature.title}</h3>
                  <p className="text-muted-foreground text-sm">{feature.description}</p>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Solutions Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Automation Solutions</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Comprehensive automation services tailored to your specific business needs and industry requirements.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {solutions.map((solution, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -5 }}
              >
                <Card className="h-full overflow-hidden bg-card/50 backdrop-blur-sm border-border/50 hover:border-purple-500/50 transition-all duration-300">
                  <div className="relative h-48 overflow-hidden">
                    <Image
                      src={solution.image || "/placeholder.svg"}
                      alt={solution.title}
                      fill
                      className="object-cover hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <CardContent className="p-6">
                    <h3 className="text-xl font-semibold mb-3">{solution.title}</h3>
                    <p className="text-muted-foreground mb-4">{solution.description}</p>
                    <div className="flex flex-wrap gap-2">
                      {solution.technologies.map((tech, i) => (
                        <span
                          key={i}
                          className="px-3 py-1 bg-purple-500/10 text-purple-600 rounded-full text-xs font-medium"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Measurable Results You Can Count On</h2>
              <p className="text-muted-foreground mb-8">
                Our automation solutions deliver tangible benefits that directly impact your bottom line and operational
                efficiency.
              </p>

              <div className="space-y-4">
                {benefits.map((benefit, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="flex items-center gap-3"
                  >
                    <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                    <span>{benefit}</span>
                  </motion.div>
                ))}
              </div>

              <div className="mt-8">
                <Link href="/contact">
                  <Button className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700">
                    Get Your Free Consultation
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
                <h3 className="text-xl font-semibold mb-6">Automation Impact Dashboard</h3>

                <div className="grid grid-cols-2 gap-4 mb-6">
                  <div className="text-center p-4 bg-muted/30 rounded-xl">
                    <div className="text-2xl font-bold text-green-600">80%</div>
                    <div className="text-sm text-muted-foreground">Time Saved</div>
                  </div>
                  <div className="text-center p-4 bg-muted/30 rounded-xl">
                    <div className="text-2xl font-bold text-blue-600">95%</div>
                    <div className="text-sm text-muted-foreground">Error Reduction</div>
                  </div>
                  <div className="text-center p-4 bg-muted/30 rounded-xl">
                    <div className="text-2xl font-bold text-purple-600">60%</div>
                    <div className="text-sm text-muted-foreground">Cost Savings</div>
                  </div>
                  <div className="text-center p-4 bg-muted/30 rounded-xl">
                    <div className="text-2xl font-bold text-orange-600">24/7</div>
                    <div className="text-sm text-muted-foreground">Operations</div>
                  </div>
                </div>

                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    <span className="text-sm">Process Efficiency</span>
                    <span className="text-sm font-medium">92%</span>
                  </div>
                  <div className="w-full bg-muted rounded-full h-2">
                    <div className="bg-gradient-to-r from-blue-500 to-purple-500 h-2 rounded-full w-[92%]"></div>
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
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Automate Your Business?</h2>
            <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
              Let's discuss how our automation solutions can transform your operations and drive growth.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact">
                <Button className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 px-8 py-6 text-lg rounded-full">
                  Start Your Project
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
