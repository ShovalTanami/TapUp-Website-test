"use client"

import { useState } from "react"
import { testSupabaseConnection } from "@/lib/supabase"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export function SupabaseTest() {
  const [isLoading, setIsLoading] = useState(false)
  const [result, setResult] = useState<string | null>(null)

  const handleTest = async () => {
    setIsLoading(true)
    setResult(null)

    try {
      const isConnected = await testSupabaseConnection()
      setResult(isConnected ? "✅ חיבור ל-Supabase הצליח!" : "❌ חיבור ל-Supabase נכשל")
    } catch (error) {
      setResult(`❌ שגיאה: ${error.message}`)
    } finally {
      setIsLoading(false)
    }
  }

  // Only show in development
  if (process.env.NODE_ENV !== "development") {
    return null
  }

  return (
    <Card className="max-w-md mx-auto mt-8">
      <CardHeader>
        <CardTitle>בדיקת חיבור Supabase</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <Button onClick={handleTest} disabled={isLoading} className="w-full">
          {isLoading ? "בודק..." : "בדוק חיבור"}
        </Button>
        {result && <div className="p-3 bg-muted rounded-lg text-center">{result}</div>}
      </CardContent>
    </Card>
  )
}
