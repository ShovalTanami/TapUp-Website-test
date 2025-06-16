"use client"
import { Button, type ButtonProps } from "@/components/ui/button"
import { cn } from "@/lib/utils"

type BaseButtonProps = ButtonProps & {
  variant?: "primary" | "secondary"
}

export function BaseButton({ children, className, variant = "primary", ...props }: BaseButtonProps) {
  const baseClasses = "rounded-full font-medium transition-all duration-300"

  const variantClasses = {
    primary:
      "bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white shadow-lg shadow-purple-500/25 hover:shadow-purple-500/40",
    secondary: "border-purple-500 text-purple-500 hover:bg-purple-500/10 border",
  }

  const sizeClasses = props.size === "lg" ? "text-lg px-8 py-3" : "px-6 py-2"

  return (
    <Button
      className={cn(baseClasses, variantClasses[variant], sizeClasses, className)}
      variant={variant === "primary" ? "default" : "outline"}
      {...props}
    >
      {children}
    </Button>
  )
}
