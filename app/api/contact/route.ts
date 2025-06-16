import { type NextRequest, NextResponse } from "next/server"
import { supabase } from "@/lib/supabase"

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { name, email, phone, service, message } = body

    console.log("Received form data:", { name, email, phone, service, message })

    // Validate required fields
    if (!name || !email || !message || !service) {
      return NextResponse.json(
        {
          error: "שם, אימייל, שירות והודעה הם שדות חובה",
          received: { name: !!name, email: !!email, service: !!service, message: !!message },
        },
        { status: 400 },
      )
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(email)) {
      return NextResponse.json({ error: "כתובת אימייל לא תקינה" }, { status: 400 })
    }

    // Prepare data for Supabase
    const submissionData = {
      name: name.trim(),
      email: email.trim().toLowerCase(),
      phone: phone?.trim() || null,
      service: service.trim(),
      message: message.trim(),
      created_at: new Date().toISOString(),
    }

    console.log("Inserting to Supabase:", submissionData)

    // Insert into Supabase
    const { data, error } = await supabase.from("contact_submissions").insert([submissionData]).select()

    if (error) {
      console.error("Supabase error:", error)
      return NextResponse.json(
        {
          error: "אירעה שגיאה בשמירת ההודעה. אנא נסו שוב.",
          details: error.message,
        },
        { status: 500 },
      )
    }

    console.log("Successfully saved to Supabase:", data)

    return NextResponse.json(
      {
        message: "ההודעה נשלחה בהצלחה! נחזור אליכם בהקדם.",
        data: data[0],
      },
      { status: 200 },
    )
  } catch (error) {
    console.error("Contact form error:", error)
    return NextResponse.json(
      {
        error: "אירעה שגיאה בשליחת ההודעה. אנא נסו שוב.",
        details: error.message,
      },
      { status: 500 },
    )
  }
}
