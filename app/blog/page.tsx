"use client"

import { useState } from "react"
import { useTranslation } from "react-i18next"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ArrowRight, Calendar, Clock, Search, Filter, Tag, MessageSquare } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import { FadeIn, StaggerContainer, StaggerItem } from "@/components/ui/scroll-animations"
import { GlowEffect } from "@/components/ui/glow-effect"
import { ParticleBackground } from "@/components/ui/particle-background"

export default function BlogPage() {
  const { t, i18n } = useTranslation()
  const [selectedCategory, setSelectedCategory] = useState("All")
  const [searchTerm, setSearchTerm] = useState("")

  const categories = [
    { name: "All", count: 12 },
    { name: "Automation", count: 5 },
    { name: "AI", count: 4 },
    { name: "Development", count: 3 },
    { name: "Business", count: 2 },
    { name: "Technology", count: 6 },
  ]

  const posts = [
    {
      id: 1,
      title: "The Future of AI in Business Automation",
      excerpt:
        "Discover how artificial intelligence is transforming business processes and creating new opportunities for automation and efficiency.",
      date: "2024-01-15",
      category: "AI",
      readTime: "5 min read",
      author: {
        name: "Sarah Johnson",
        image: "https://avatar.vercel.sh/sarah",
      },
      image: "/images/ai-agents.png",
      featured: true,
    },
    {
      id: 2,
      title: "Building Scalable Web Applications",
      excerpt:
        "Best practices for developing applications that can grow with your business needs and handle increasing user loads.",
      date: "2024-01-10",
      category: "Development",
      readTime: "7 min read",
      author: {
        name: "Michael Chen",
        image: "https://avatar.vercel.sh/michael",
      },
      image: "/images/custom-development.png",
      featured: false,
    },
    {
      id: 3,
      title: "Digital Transformation Strategies",
      excerpt: "A comprehensive guide to successful digital transformation for businesses of all sizes.",
      date: "2024-01-05",
      category: "Business",
      readTime: "6 min read",
      author: {
        name: "Emma Davis",
        image: "https://avatar.vercel.sh/emma",
      },
      image: "/images/automation-service.png",
      featured: false,
    },
    {
      id: 4,
      title: "Workflow Automation Best Practices",
      excerpt:
        "Learn how to identify, design, and implement effective workflow automation solutions for your organization.",
      date: "2023-12-28",
      category: "Automation",
      readTime: "8 min read",
      author: {
        name: "David Wilson",
        image: "https://avatar.vercel.sh/david",
      },
      image: "/images/automation-service.png",
      featured: false,
    },
    {
      id: 5,
      title: "The Rise of AI Agents in Customer Service",
      excerpt: "How AI-powered agents are revolutionizing customer service and support operations across industries.",
      date: "2023-12-20",
      category: "AI",
      readTime: "5 min read",
      author: {
        name: "Jennifer Lee",
        image: "https://avatar.vercel.sh/jennifer",
      },
      image: "/images/ai-agents.png",
      featured: false,
    },
    {
      id: 6,
      title: "Data-Driven Decision Making",
      excerpt: "Leveraging big data and analytics to make smarter business decisions and drive growth.",
      date: "2023-12-15",
      category: "Technology",
      readTime: "6 min read",
      author: {
        name: "Robert Brown",
        image: "https://avatar.vercel.sh/robert",
      },
      image: "/images/bigdata-analytics.png",
      featured: false,
    },
    {
      id: 7,
      title: "The Impact of Machine Learning on Business",
      excerpt: "Exploring how machine learning is changing the business landscape and creating new opportunities.",
      date: "2023-12-10",
      category: "AI",
      readTime: "7 min read",
      author: {
        name: "Sarah Johnson",
        image: "https://avatar.vercel.sh/sarah",
      },
      image: "/images/ai-integration.png",
      featured: false,
    },
    {
      id: 8,
      title: "Modern Web Development Frameworks",
      excerpt: "A comparison of popular web development frameworks and how to choose the right one for your project.",
      date: "2023-12-05",
      category: "Development",
      readTime: "8 min read",
      author: {
        name: "Michael Chen",
        image: "https://avatar.vercel.sh/michael",
      },
      image: "/images/custom-development.png",
      featured: false,
    },
  ]

  const filteredPosts = posts.filter((post) => {
    const matchesCategory = selectedCategory === "All" || post.category === selectedCategory
    const matchesSearch =
      post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      post.excerpt.toLowerCase().includes(searchTerm.toLowerCase())
    return matchesCategory && matchesSearch
  })

  const featuredPost = posts.find((post) => post.featured)

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
                <MessageSquare className="w-4 h-4 mr-2" />
                TapUp Blog
              </div>
            </FadeIn>

            <FadeIn delay={0.2}>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                <span className="bg-gradient-to-r from-foreground via-purple-600 to-blue-600 bg-clip-text text-transparent">
                  Insights & Expertise
                </span>
              </h1>
            </FadeIn>

            <FadeIn delay={0.4}>
              <p className="text-lg md:text-xl text-muted-foreground mb-10 max-w-3xl mx-auto">
                Stay updated with the latest trends and insights in technology, automation, and digital transformation
              </p>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Featured Post */}
      {featuredPost && (
        <section className="py-12 relative overflow-hidden">
          <div className="container mx-auto px-4">
            <FadeIn>
              <div className="max-w-7xl mx-auto">
                <GlowEffect>
                  <Card className="bg-card/50 backdrop-blur-sm border-border/50 hover:border-purple-500/50 transition-all duration-300 overflow-hidden">
                    <div className="grid md:grid-cols-2 gap-8">
                      <div className="relative h-64 md:h-auto">
                        <Image
                          src={featuredPost.image || "/placeholder.svg"}
                          alt={featuredPost.title}
                          fill
                          className="object-cover"
                        />
                        <div className="absolute top-4 left-4">
                          <Badge className="bg-purple-500/90 text-white">Featured</Badge>
                        </div>
                      </div>
                      <div className="p-8 flex flex-col justify-center">
                        <div className="flex items-center gap-4 mb-4 text-sm text-muted-foreground">
                          <span className="px-3 py-1 bg-purple-500/10 text-purple-600 rounded-full text-xs font-medium">
                            {featuredPost.category}
                          </span>
                          <div className="flex items-center">
                            <Calendar className="h-4 w-4 mr-1" />
                            {new Date(featuredPost.date).toLocaleDateString()}
                          </div>
                          <div className="flex items-center">
                            <Clock className="h-4 w-4 mr-1" />
                            {featuredPost.readTime}
                          </div>
                        </div>
                        <h2 className="text-2xl md:text-3xl font-bold mb-4">{featuredPost.title}</h2>
                        <p className="text-muted-foreground mb-6">{featuredPost.excerpt}</p>
                        <div className="flex items-center justify-between mt-auto">
                          <div className="flex items-center gap-3">
                            <div className="relative w-8 h-8 rounded-full overflow-hidden">
                              <Image
                                src={featuredPost.author.image || "/placeholder.svg"}
                                alt={featuredPost.author.name}
                                fill
                                className="object-cover"
                              />
                            </div>
                            <span className="text-sm font-medium">{featuredPost.author.name}</span>
                          </div>
                          <Button variant="outline" className="group">
                            Read Article
                            <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                          </Button>
                        </div>
                      </div>
                    </div>
                  </Card>
                </GlowEffect>
              </div>
            </FadeIn>
          </div>
        </section>
      )}

      {/* Filter and Search */}
      <section className="py-12 relative overflow-hidden">
        <div className="container mx-auto px-4">
          <FadeIn>
            <div className="max-w-4xl mx-auto">
              {/* Search Bar */}
              <div className="relative mb-8">
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-muted-foreground h-5 w-5" />
                <input
                  type="text"
                  placeholder="Search articles..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-12 pr-4 py-4 bg-card/50 backdrop-blur-sm border border-border rounded-2xl focus:outline-none focus:ring-2 focus:ring-purple-500 text-foreground placeholder-muted-foreground"
                />
              </div>

              {/* Category Filters */}
              <div className="flex flex-wrap gap-3 justify-center">
                {categories.map((category) => (
                  <button
                    key={category.name}
                    onClick={() => setSelectedCategory(category.name)}
                    className={`flex items-center gap-2 px-6 py-3 rounded-full text-sm font-medium transition-all duration-300 ${
                      selectedCategory === category.name
                        ? "bg-gradient-to-r from-purple-600 to-blue-600 text-white shadow-lg shadow-purple-500/25"
                        : "bg-card/50 backdrop-blur-sm border border-border text-muted-foreground hover:text-foreground hover:border-purple-500/50"
                    }`}
                  >
                    {category.name === "All" ? <Filter className="h-4 w-4" /> : <Tag className="h-4 w-4" />}
                    {category.name}
                    <span className="ml-1 text-xs">({category.count})</span>
                  </button>
                ))}
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className="py-12 relative overflow-hidden">
        <div className="container mx-auto px-4">
          <StaggerContainer>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredPosts.map((post) => (
                <StaggerItem key={post.id}>
                  <GlowEffect>
                    <Card className="h-full bg-card/50 backdrop-blur-sm border-border/50 hover:border-purple-500/50 transition-all duration-300 overflow-hidden group">
                      <div className="relative h-48 overflow-hidden">
                        <Image
                          src={post.image || "/placeholder.svg"}
                          alt={post.title}
                          fill
                          className="object-cover group-hover:scale-105 transition-transform duration-300"
                        />
                        <div className="absolute top-4 left-4">
                          <Badge className="bg-purple-500/90 text-white">{post.category}</Badge>
                        </div>
                      </div>
                      <CardContent className="p-6">
                        <div className="flex items-center gap-4 mb-4 text-sm text-muted-foreground">
                          <div className="flex items-center">
                            <Calendar className="h-4 w-4 mr-1" />
                            {new Date(post.date).toLocaleDateString()}
                          </div>
                          <div className="flex items-center">
                            <Clock className="h-4 w-4 mr-1" />
                            {post.readTime}
                          </div>
                        </div>
                        <h3 className="text-lg font-semibold mb-3 group-hover:text-purple-600 transition-colors line-clamp-2">
                          {post.title}
                        </h3>
                        <p className="text-muted-foreground mb-6 line-clamp-3">{post.excerpt}</p>
                        <div className="flex items-center justify-between mt-auto">
                          <div className="flex items-center gap-3">
                            <div className="relative w-8 h-8 rounded-full overflow-hidden">
                              <Image
                                src={post.author.image || "/placeholder.svg"}
                                alt={post.author.name}
                                fill
                                className="object-cover"
                              />
                            </div>
                            <span className="text-sm font-medium">{post.author.name}</span>
                          </div>
                          <Button
                            variant="ghost"
                            size="sm"
                            className="p-0 h-auto text-purple-600 hover:text-purple-700"
                          >
                            Read More
                            <ArrowRight className="ml-2 h-4 w-4" />
                          </Button>
                        </div>
                      </CardContent>
                    </Card>
                  </GlowEffect>
                </StaggerItem>
              ))}
            </div>
          </StaggerContainer>

          {filteredPosts.length === 0 && (
            <div className="text-center py-16">
              <div className="w-24 h-24 bg-muted rounded-full flex items-center justify-center mx-auto mb-6">
                <Search className="h-12 w-12 text-muted-foreground" />
              </div>
              <h3 className="text-xl font-semibold mb-2">No articles found</h3>
              <p className="text-muted-foreground">Try adjusting your search or filter criteria</p>
            </div>
          )}
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-muted/30 to-background dark:from-muted/10 dark:to-background" />

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto">
            <FadeIn>
              <GlowEffect>
                <Card className="bg-card/50 backdrop-blur-sm border-border/50">
                  <CardContent className="p-8 md:p-12">
                    <div className="text-center mb-8">
                      <h2 className="text-3xl font-bold mb-4">Subscribe to Our Newsletter</h2>
                      <p className="text-muted-foreground max-w-2xl mx-auto">
                        Get the latest insights and updates delivered straight to your inbox
                      </p>
                    </div>
                    <div className="flex flex-col sm:flex-row gap-4 max-w-xl mx-auto">
                      <input
                        type="email"
                        placeholder="Enter your email"
                        className="flex-1 px-4 py-3 bg-background border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
                      />
                      <Button className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white">
                        Subscribe
                      </Button>
                    </div>
                    <p className="text-xs text-muted-foreground text-center mt-4">
                      By subscribing, you agree to our Privacy Policy and Terms of Service
                    </p>
                  </CardContent>
                </Card>
              </GlowEffect>
            </FadeIn>
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
              <h2 className="text-3xl md:text-5xl font-bold mb-6">Ready to Transform Your Business?</h2>
              <p className="text-xl mb-8 text-white/90">
                Let's discuss how our services can help you achieve your goals and drive growth
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/contact">
                  <Button
                    size="lg"
                    className="bg-white text-purple-600 hover:bg-white/90 px-8 py-4 text-lg font-medium"
                  >
                    Get Started Today
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </Link>
                <Link href="/services">
                  <Button
                    variant="outline"
                    size="lg"
                    className="border-white text-white hover:bg-white/10 px-8 py-4 text-lg"
                  >
                    Explore Services
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
