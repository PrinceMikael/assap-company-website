"use server"

export interface QuoteRequestData {
  name: string
  email: string
  phone: string
  company: string
  subject: string
  message: string
}

export async function sendQuoteRequest(data: QuoteRequestData) {
  // Validate required fields
  if (!data.name || !data.email || !data.subject || !data.message) {
    return {
      success: false,
      error: "Please fill in all required fields",
    }
  }

  // Validate email format
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  if (!emailRegex.test(data.email)) {
    return {
      success: false,
      error: "Please provide a valid email address",
    }
  }

  try {
    // Send to Web3Forms API
    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        access_key: process.env.WEB3FORMS_ACCESS_KEY,
        subject: `New Quote Request: ${data.subject}`,
        from_name: data.name,
        email: data.email,
        phone: data.phone || "Not provided",
        company: data.company || "Not provided",
        message: data.message,
      }),
    })

    const result = await response.json()

    if (result.success) {
      return {
        success: true,
        message: "Your quote request has been sent successfully. We will contact you shortly at " + data.email,
      }
    } else {
      console.error("Web3Forms error:", result)
      return {
        success: false,
        error: "Failed to send your request. Please try again or contact us directly at info@assap.co.tz",
      }
    }
  } catch (error) {
    console.error("Error sending quote request:", error)
    return {
      success: false,
      error: "Failed to send your request. Please try again or contact us directly at info@assap.co.tz",
    }
  }
}
