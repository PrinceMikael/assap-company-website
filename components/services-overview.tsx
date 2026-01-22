import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Wrench, HardHat, Users, Factory, ShieldCheck, ArrowRight, Cog, Building2 } from "lucide-react"

const services = [
  {
    icon: Factory,
    title: "Industrial & Mining Supply",
    description:
      "Comprehensive range of industrial equipment, mining tools, spare parts, and operational materials for daily site activities.",
    href: "/services#industrial",
  },
  {
    icon: Building2,
    title: "Construction Support",
    description:
      "Civil works, structural construction, site infrastructure development, and ongoing maintenance services.",
    href: "/services#construction",
  },
  {
    icon: Users,
    title: "Workforce Solutions",
    description:
      "Skilled and semi-skilled personnel including technical staff, construction crews, and maintenance teams.",
    href: "/services#workforce",
  },
  {
    icon: Cog,
    title: "Mining Operations Support",
    description:
      "Equipment installation, maintenance, shutdown assistance, logistics coordination, and material handling.",
    href: "/services#operations",
  },
  {
    icon: ShieldCheck,
    title: "HSE Services",
    description:
      "Safety equipment supply, training, risk assessment, and comprehensive health, safety & environmental compliance.",
    href: "/services#hse",
  },
  {
    icon: Wrench,
    title: "Technical Services",
    description: "Expert technical support, equipment servicing, repairs, and specialized industrial solutions.",
    href: "/services#technical",
  },
]

export function ServicesOverview() {
  return (
    <section className="py-20 bg-muted/50">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full text-primary mb-4">
            <HardHat className="h-4 w-4" />
            <span className="text-sm font-medium">Our Core Services</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Comprehensive Industrial Solutions</h2>
          <p className="text-muted-foreground text-lg">
            We provide end-to-end support for industrial and mining operations, from material supply to workforce
            deployment and HSE compliance.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <Card
              key={service.title}
              className="group bg-card hover:shadow-lg transition-material border-border hover:border-accent/50 overflow-hidden"
            >
              <CardContent className="p-6">
                <div className="mb-4 inline-flex p-3 bg-primary/10 rounded-xl group-hover:bg-accent/20 transition-material">
                  <service.icon className="h-6 w-6 text-primary group-hover:text-accent transition-material" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-3">{service.title}</h3>
                <p className="text-muted-foreground mb-4 leading-relaxed">{service.description}</p>
                <Link
                  href={service.href}
                  className="inline-flex items-center text-primary font-medium group-hover:text-accent transition-material"
                >
                  Learn More
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-material" />
                </Link>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <Button asChild size="lg" className="bg-primary hover:bg-primary/90 transition-material">
            <Link href="/services">
              View All Services
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
