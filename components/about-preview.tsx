import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { CheckCircle, Award, Target, Heart, ArrowRight } from "lucide-react"

const values = [
  { icon: Award, title: "Excellence", description: "Pursuing highest standards" },
  { icon: Target, title: "Integrity", description: "Honoring commitments" },
  { icon: Heart, title: "Trust", description: "Building authentic relationships" },
]

export function AboutPreview() {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Image Side */}
          <div className="relative">
            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden">
              <Image src="/industrial-warehouse-workers-professional-team-saf.jpg" alt="ASSAP Team at Work" fill className="object-cover" />
            </div>
            {/* Experience Badge */}
            <div className="absolute -bottom-6 -right-6 bg-accent text-accent-foreground p-6 rounded-2xl shadow-xl">
              <p className="text-4xl font-bold">5+</p>
              <p className="text-sm">Years of Excellence</p>
            </div>
          </div>

          {/* Content Side */}
          <div className="space-y-6">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full text-primary">
              <span className="text-sm font-medium">About ASSAP</span>
            </div>

            <h2 className="text-3xl md:text-4xl font-bold text-foreground">
              Your Trusted Partner for Industrial Excellence
            </h2>

            <p className="text-muted-foreground text-lg leading-relaxed">
              ASSAP COMPANY LIMITED is a multidisciplinary industrial, mining, and general supply firm
              providing end-to-end support to large-scale projects across Tanzania. We operate at the intersection of
              material supply, construction, workforce deployment, and operational support.
            </p>

            <div className="space-y-3">
              {[
                "Full-service industrial contractor",
                "Comprehensive supply chain solutions",
                "Experienced workforce deployment",
                "Strict HSE compliance standards",
              ].map((item) => (
                <div key={item} className="flex items-center gap-3">
                  <CheckCircle className="h-5 w-5 text-accent shrink-0" />
                  <span className="text-foreground">{item}</span>
                </div>
              ))}
            </div>

            {/* Core Values Preview */}
            <div className="grid grid-cols-3 gap-4 pt-6">
              {values.map((value) => (
                <div key={value.title} className="text-center p-4 bg-muted/50 rounded-xl">
                  <value.icon className="h-6 w-6 text-primary mx-auto mb-2" />
                  <p className="font-semibold text-foreground text-sm">{value.title}</p>
                </div>
              ))}
            </div>

            <Button asChild size="lg" className="bg-primary hover:bg-primary/90 transition-material">
              <Link href="/about">
                Learn More About Us
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
