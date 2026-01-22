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
    // Format the email content
    const emailContent = `
New Quote Request from ASSAP COMPANY LIMITED Website

CONTACT DETAILS
================
Name: ${data.name}
Email: ${data.email}
Phone: ${data.phone || "Not provided"}
Company: ${data.company || "Not provided"}

INQUIRY DETAILS
================
Subject: ${data.subject}

Message:
${data.message}

---
This message was sent from the ASSAP COMPANY LIMITED website contact form.
Please respond to: ${data.email}
    `.trim()

    // In production, you would integrate with an email service like:
    // - Resend (resend.com)
    // - SendGrid
    // - AWS SES
    // - Nodemailer with SMTP
    
    // For now, we'll log the request and simulate success
    // The email would be sent to: info@assap.co.tz
    
    console.log("Quote Request to info@assap.co.tz:")
    console.log(emailContent)

    // Simulate email sending delay
    await new Promise((resolve) => setTimeout(resolve, 1000))

    return {
      success: true,
      message: "Your quote request has been sent successfully. We will contact you shortly at " + data.email,
    }
  } catch (error) {
    console.error("Error sending quote request:", error)
    return {
      success: false,
      error: "Failed to send your request. Please try again or contact us directly at info@assap.co.tz",
    }
  }
}
