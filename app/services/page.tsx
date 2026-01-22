import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { CTASection } from "@/components/cta-section"
import { Factory, Building2, Users, Cog, ShieldCheck, Wrench, CheckCircle, ArrowRight } from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"

const services = [
  {
    id: "industrial",
    icon: Factory,
    title: "Industrial & Mining Supply",
    description:
      "Comprehensive range of industrial equipment, mining tools, spare parts, and operational materials for daily site activities.",
    features: [
      "Valves, flanges, pipes and pipe fittings",
      "Bulk chemicals and hydraulic equipment",
      "Power tools and precision instruments",
      "Drilling tools and equipment",
      "Pumps and measurement instruments",
      "Diesel generators and batteries",
    ],
    image: "/industrial-mining-equipment-machinery-warehouse.jpg",
  },
  {
    id: "construction",
    icon: Building2,
    title: "Construction & Site Development",
    description:
      "Civil works, structural construction, site infrastructure development, facility construction, and ongoing maintenance services.",
    features: [
      "Civil engineering works",
      "Structural construction",
      "Site infrastructure development",
      "Facility construction",
      "Building maintenance services",
      "Project management support",
    ],
    image: "/construction-site-building-development-workers.jpg",
  },
  {
    id: "workforce",
    icon: Users,
    title: "Workforce Solutions",
    description:
      "Skilled and semi-skilled personnel deployment tailored to project requirements, including technical staff and operational teams.",
    features: [
      "Technical staff deployment",
      "Construction crews",
      "Maintenance teams",
      "Operational support personnel",
      "Project-based workforce",
      "Skilled labor sourcing",
    ],
    image: "/professional-workforce-team-industrial-workers.jpg",
  },
  {
    id: "operations",
    icon: Cog,
    title: "Mining Operations Support",
    description:
      "Equipment installation, maintenance support, shutdown assistance, logistics coordination, and material handling services.",
    features: [
      "Equipment installation",
      "Maintenance support",
      "Shutdown assistance",
      "Logistics coordination",
      "Material handling",
      "Productivity optimization",
    ],
    image: "/mining-operations-heavy-equipment-excavator.jpg",
  },
  {
    id: "hse",
    icon: ShieldCheck,
    title: "HSE Services",
    description:
      "Comprehensive health, safety, and environmental services including equipment supply, training, and compliance support.",
    features: [
      "Safety equipment supply",
      "HSE training programs",
      "Risk assessment support",
      "Compliance management",
      "Environmental services",
      "Safety audits",
    ],
    image: "/safety-helmet-ppe-protective-equipment-industrial.jpg",
  },
  {
    id: "technical",
    icon: Wrench,
    title: "Technical Services",
    description:
      "Expert technical support, equipment servicing, repairs, and specialized industrial solutions for complex requirements.",
    features: [
      "Equipment servicing",
      "Technical repairs",
      "Specialized solutions",
      "Installation support",
      "Preventive maintenance",
      "Technical consultation",
    ],
    image: "/industrial-valves-pipes-machinery-equipment.jpg",
  },
]

export default function ServicesPage() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main>
        {/* Hero Section */}
        <section className="relative py-24 bg-primary">
          <div className="absolute inset-0 opacity-10">
            <div className="absolute inset-0 bg-[url('/industrial-mining-operation-equipment-professional.jpg')] bg-cover"></div>
          </div>
          <div className="relative container mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-primary-foreground mb-4">Our Services</h1>
            <p className="text-xl text-primary-foreground/90 max-w-2xl mx-auto">
              Comprehensive industrial solutions for mining, construction, and operational excellence
            </p>
          </div>
        </section>

        {/* Services List */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="space-y-24">
              {services.map((service, index) => (
                <div
                  key={service.id}
                  id={service.id}
                  className={`grid lg:grid-cols-2 gap-12 items-center ${index % 2 === 1 ? "lg:flex-row-reverse" : ""}`}
                >
                  <div className={index % 2 === 1 ? "lg:order-2" : ""}>
                    <div className="inline-flex p-3 bg-primary/10 rounded-xl mb-4">
                      <service.icon className="h-8 w-8 text-primary" />
                    </div>
                    <h2 className="text-3xl font-bold text-foreground mb-4">{service.title}</h2>
                    <p className="text-muted-foreground text-lg mb-6 leading-relaxed">{service.description}</p>
                    <div className="grid sm:grid-cols-2 gap-3 mb-8">
                      {service.features.map((feature) => (
                        <div key={feature} className="flex items-center gap-2">
                          <CheckCircle className="h-5 w-5 text-accent shrink-0" />
                          <span className="text-foreground text-sm">{feature}</span>
                        </div>
                      ))}
                    </div>
                    <Button asChild className="bg-primary hover:bg-primary/90 transition-material">
                      <Link href="/contact">
                        Get a Quote
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Link>
                    </Button>
                  </div>
                  <div className={`relative ${index % 2 === 1 ? "lg:order-1" : ""}`}>
                    <div className="aspect-[4/3] rounded-2xl overflow-hidden">
                      <img
                        src={service.image || "/placeholder.svg"}
                        alt={service.title}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <CTASection />
      </main>
      <Footer />
    </div>
  )
}
