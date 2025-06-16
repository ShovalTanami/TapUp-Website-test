import { createClient } from "@supabase/supabase-js"

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY

if (!supabaseUrl || !supabaseAnonKey) {
  throw new Error("Missing Supabase environment variables")
}

export const supabase = createClient(supabaseUrl, supabaseAnonKey)

export type ContactSubmission = {
  id?: string
  name: string
  email: string
  phone?: string | null
  service: string
  message: string
  created_at?: string
}

// Test connection function
export async function testSupabaseConnection() {
  try {
    const { data, error } = await supabase.from("contact_submissions").select("count", { count: "exact", head: true })

    if (error) {
      console.error("Supabase connection test failed:", error)
      return false
    }

    console.log("Supabase connection successful")
    return true
  } catch (error) {
    console.error("Supabase connection error:", error)
    return false
  }
}
