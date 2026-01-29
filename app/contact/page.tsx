"use client"

import type React from "react"

import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Card, CardContent } from "@/components/ui/card"
import { Phone, Mail, MapPin, Clock, Send, Building2, MessageSquare, CheckCircle, AlertCircle } from "lucide-react"
import { useState } from "react"
import { sendQuoteRequest, type QuoteRequestData } from "@/app/actions/send-quote-request"

const contactInfo = [
  {
    icon: Phone,
    title: "Phone",
    details: ["+255 752 026 592", "+255 624 406 592", "+255 788 706 592"],
    action: "tel:+255752026592",
  },
  {
    icon: Mail,
    title: "Email",
    details: ["info@assap.co.tz"],
    action: "mailto:info@assap.co.tz",
  },
  {
    icon: MapPin,
    title: "Address",
    details: ["P.O. Box 68", "Tarime, Mara", "Tanzania"],
    action: null,
  },
  {
    icon: Clock,
    title: "Business Hours",
    details: ["Monday - Friday: 8:00 AM - 5:00 PM", "Sunday: 8:00 AM - 1:00 PM"],
    action: null,
  },
]

export default function ContactPage() {
  const [formData, setFormData] = useState<QuoteRequestData>({
    name: "",
    email: "",
    phone: "",
    company: "",
    subject: "",
    message: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<{
    type: "success" | "error" | null
    message: string
  }>({ type: null, message: "" })

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitStatus({ type: null, message: "" })

    const result = await sendQuoteRequest(formData)

    if (result.success) {
      // Open WhatsApp with pre-filled message
      if (result.whatsappURL) {
        window.open(result.whatsappURL, '_blank')
      }
      setSubmitStatus({
        type: "success",
        message: "Opening WhatsApp...",
      })
      // Reset form
      setFormData({
        name: "",
        email: "",
        phone: "",
        company: "",
        subject: "",
        message: "",
      })
    } else {
      setSubmitStatus({
        type: "error",
        message: result.error || "Something went wrong. Please try again.",
      })
    }

    setIsSubmitting(false)
  }

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main>
        {/* Hero Section */}
        <section className="relative py-24 bg-primary">
          <div className="absolute inset-0 opacity-10">
            <div
              className="absolute inset-0 bg-cover bg-center"
              style={{ backgroundImage: "url('/industrial-pattern-texture.jpg')" }}
            />
          </div>
          <div className="relative container mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-primary-foreground mb-4">Contact Us</h1>
            <p className="text-xl text-primary-foreground/90 max-w-2xl mx-auto">
              Get in touch for inquiries, quotes, and partnership opportunities
            </p>
          </div>
        </section>

        {/* Contact Section */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-3 gap-12">
              {/* Contact Information */}
              <div className="lg:col-span-1">
                <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full text-primary mb-4">
                  <Building2 className="h-4 w-4" />
                  <span className="text-sm font-medium">Get In Touch</span>
                </div>
                <h2 className="text-3xl font-bold text-foreground mb-6">Let's Discuss Your Requirements</h2>
                <p className="text-muted-foreground mb-8">
                  Whether you need industrial supplies, construction support, or workforce solutions, our team is ready
                  to assist you. Share your requirements and we'll get back to you promptly.
                </p>

                <div className="space-y-6">
                  {contactInfo.map((info) => (
                    <div key={info.title} className="flex items-start gap-4">
                      <div className="inline-flex p-3 bg-primary/10 rounded-xl shrink-0">
                        <info.icon className="h-5 w-5 text-primary" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-foreground mb-1">{info.title}</h3>
                        {info.details.map((detail, index) =>
                          info.action && index === 0 ? (
                            <a
                              key={detail}
                              href={info.action}
                              className="block text-muted-foreground hover:text-primary transition-material"
                            >
                              {detail}
                            </a>
                          ) : (
                            <p key={detail} className="text-muted-foreground">
                              {detail}
                            </p>
                          ),
                        )}
                      </div>
                    </div>
                  ))}
                </div>

                {/* Company Registration */}
                <div className="mt-8 p-6 bg-muted/50 rounded-xl">
                  <h3 className="font-semibold text-foreground mb-3">Company Registration</h3>
                  <div className="space-y-2 text-sm text-muted-foreground">
                    <p>
                      <span className="font-medium text-foreground">TIN:</span> 157-357-891
                    </p>
                    <p>
                      <span className="font-medium text-foreground">BRELA:</span> 157357891
                    </p>
                  </div>
                </div>

                {/* Direct Email Note */}
                <div className="mt-6 p-4 bg-accent/10 rounded-xl border border-accent/20">
                  <p className="text-sm text-foreground">
                    <strong>For direct inquiries:</strong> Send your request to{" "}
                    <a href="mailto:info@assap.co.tz" className="text-primary hover:underline font-medium">
                      info@assap.co.tz
                    </a>
                  </p>
                </div>
              </div>

              {/* Contact Form */}
              <div className="lg:col-span-2">
                <Card className="border-border">
                  <CardContent className="p-8">
                    <div className="flex items-center gap-2 mb-6">
                      <MessageSquare className="h-5 w-5 text-primary" />
                      <h3 className="text-xl font-semibold text-foreground">Request a Quote</h3>
                    </div>

                    {/* Status Messages */}
                    {submitStatus.type && (
                      <div
                        className={`mb-6 p-4 rounded-lg flex items-start gap-3 ${
                          submitStatus.type === "success"
                            ? "bg-green-50 text-green-800 border border-green-200"
                            : "bg-red-50 text-red-800 border border-red-200"
                        }`}
                      >
                        {submitStatus.type === "success" ? (
                          <CheckCircle className="h-5 w-5 shrink-0 mt-0.5" />
                        ) : (
                          <AlertCircle className="h-5 w-5 shrink-0 mt-0.5" />
                        )}
                        <div>
                          <p className="font-medium">
                            {submitStatus.type === "success" ? "Request Sent!" : "Error"}
                          </p>
                          <p className="text-sm mt-1">{submitStatus.message}</p>
                        </div>
                      </div>
                    )}

                    <form onSubmit={handleSubmit} className="space-y-6">
                      <div className="grid md:grid-cols-2 gap-6">
                        <div className="space-y-2">
                          <Label htmlFor="name">Full Name *</Label>
                          <Input
                            id="name"
                            value={formData.name}
                            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                            placeholder="Your full name"
                            required
                            className="bg-background"
                          />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="email">Email Address *</Label>
                          <Input
                            id="email"
                            type="email"
                            value={formData.email}
                            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                            placeholder="your.email@example.com"
                            required
                            className="bg-background"
                          />
                        </div>
                      </div>

                      <div className="grid md:grid-cols-2 gap-6">
                        <div className="space-y-2">
                          <Label htmlFor="phone">Phone Number</Label>
                          <Input
                            id="phone"
                            type="tel"
                            value={formData.phone}
                            onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                            placeholder="+255 xxx xxx xxx"
                            className="bg-background"
                          />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="company">Company/Organization</Label>
                          <Input
                            id="company"
                            value={formData.company}
                            onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                            placeholder="Your company name"
                            className="bg-background"
                          />
                        </div>
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="subject">Subject *</Label>
                        <Input
                          id="subject"
                          value={formData.subject}
                          onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                          placeholder="How can we help you?"
                          required
                          className="bg-background"
                        />
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="message">Message *</Label>
                        <Textarea
                          id="message"
                          value={formData.message}
                          onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                          placeholder="Please describe your requirements, including product types, quantities, and delivery location..."
                          rows={6}
                          required
                          className="bg-background resize-none"
                        />
                      </div>

                      <Button
                        type="submit"
                        size="lg"
                        className="w-full bg-primary hover:bg-primary/90 transition-material"
                        disabled={isSubmitting}
                      >
                        {isSubmitting ? (
                          <>
                            <span className="animate-spin mr-2">
                              <svg className="h-4 w-4" viewBox="0 0 24 24">
                                <circle
                                  className="opacity-25"
                                  cx="12"
                                  cy="12"
                                  r="10"
                                  stroke="currentColor"
                                  strokeWidth="4"
                                  fill="none"
                                />
                                <path
                                  className="opacity-75"
                                  fill="currentColor"
                                  d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                                />
                              </svg>
                            </span>
                            Sending Request...
                          </>
                        ) : (
                          <>
                            Submit Quote Request
                            <Send className="ml-2 h-4 w-4" />
                          </>
                        )}
                      </Button>
                    </form>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* Map Section */}
        <section className="py-20 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="text-center max-w-3xl mx-auto mb-12">
              <h2 className="text-3xl font-bold text-foreground mb-4">Our Location</h2>
              <p className="text-muted-foreground">
                Based in Tarime, Mara Region - serving industrial and mining operations across Tanzania
              </p>
            </div>
            <div className="aspect-21/9 bg-muted rounded-2xl overflow-hidden">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d127573.89012376!2d34.30000000000001!3d-1.3500000000000001!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x19d57a1c4d66b0c5%3A0x4f6a3c7e8b9d0e1f!2sTarime%2C%20Mara%2C%20Tanzania!5e0!3m2!1sen!2sus!4v1609459200000!5m2!1sen!2sus"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="ASSAP COMPANY LIMITED Location"
              />
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
