"use client"

import { motion } from "framer-motion"
import Image from "next/image"

export function TechStack() {
  const technologies = [
    { name: "React", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
    { name: "Next.js", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg" },
    {
      name: "TypeScript",
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg",
    },
    { name: "Python", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" },
    { name: "Node.js", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" },
    { name: "MongoDB", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg" },
    {
      name: "PostgreSQL",
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg",
    },
    {
      name: "AWS",
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original.svg",
    },
  ]

  return (
    <div className="flex flex-wrap justify-center items-center gap-8">
      {technologies.map((tech, index) => (
        <motion.div
          key={tech.name}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: index * 0.1 }}
          whileHover={{ scale: 1.1, y: -5 }}
          className="flex flex-col items-center gap-2 p-4 rounded-lg bg-card/50 backdrop-blur-sm border border-border/50 hover:border-purple-500/50 transition-all duration-300"
        >
          <div className="w-12 h-12 relative">
            <Image
              src={tech.logo || "/placeholder.svg"}
              alt={tech.name}
              fill
              className="object-contain filter dark:invert-0 invert-0"
            />
          </div>
          <span className="text-sm font-medium text-muted-foreground">{tech.name}</span>
        </motion.div>
      ))}
    </div>
  )
}
