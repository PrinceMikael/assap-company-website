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
    // Format the message for WhatsApp
    const whatsappMessage = `*New Quote Request from ASSAP Website*

*Contact Details:*
Name: ${data.name}
Email: ${data.email}
Phone: ${data.phone || "Not provided"}
Company: ${data.company || "Not provided"}

*Subject:* ${data.subject}

*Message:*
${data.message}

---
Sent from ASSAP Company Website`

    // Encode the message for WhatsApp URL
    const encodedMessage = encodeURIComponent(whatsappMessage)
    const whatsappNumber = "255752026592" // ASSAP WhatsApp number
    const whatsappURL = `https://wa.me/${whatsappNumber}?text=${encodedMessage}`

    return {
      success: true,
      message: "Redirecting to WhatsApp...",
      whatsappURL: whatsappURL,
    }
  } catch (error) {
    console.error("Error processing quote request:", error)
    return {
      success: false,
      error: "Failed to process your request. Please try again.",
    }
  }
}
