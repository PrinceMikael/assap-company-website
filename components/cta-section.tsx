import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Phone, Mail, ArrowRight } from "lucide-react"

export function CTASection() {
  return (
    <section className="relative py-20 overflow-hidden">
      {/* Background */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: `url('/industrial-mining-operation-equipment-professional.jpg')`,
        }}
      >
        <div className="absolute inset-0 bg-primary/90"></div>
      </div>

      {/* Content */}
      <div className="relative container mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary-foreground mb-6 max-w-3xl mx-auto text-balance">
          Ready to Partner with Tanzania's Leading Industrial Supplier?
        </h2>
        <p className="text-xl text-primary-foreground/90 mb-8 max-w-2xl mx-auto">
          Get in touch today for competitive quotes, reliable delivery, and exceptional service for all your industrial
          and mining needs.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
          <Button
            asChild
            size="lg"
            className="bg-accent hover:bg-accent/90 text-accent-foreground font-semibold text-base px-8 transition-material"
          >
            <Link href="/contact">
              Request a Quote
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
          <Button
            asChild
            size="lg"
            variant="outline"
            className="border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10 font-semibold text-base px-8 transition-material bg-transparent"
          >
            <a href="tel:+255788706592">
              <Phone className="mr-2 h-5 w-5" />
              Call Us Now
            </a>
          </Button>
        </div>

        {/* Quick Contact */}
        <div className="flex flex-wrap justify-center gap-8 text-primary-foreground/80">
          <a href="tel:+255788706592" className="flex items-center gap-2 hover:text-accent transition-material">
            <Phone className="h-5 w-5" />
            +255 788 706 592
          </a>
          <a
            href="mailto:info@assap.co.tz"
            className="flex items-center gap-2 hover:text-accent transition-material"
          >
            <Mail className="h-5 w-5" />
            info@assap.co.tz
          </a>
        </div>
      </div>
    </section>
  )
}
