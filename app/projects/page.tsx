import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { CTASection } from "@/components/cta-section"
import { Card, CardContent } from "@/components/ui/card"
import { FolderOpen, MapPin, Calendar, Building2 } from "lucide-react"
import Image from "next/image"

const projects = [
  {
    title: "Mining Equipment Supply",
    category: "Mining Support",
    location: "Mara Region, Tanzania",
    year: "2024",
    description:
      "Comprehensive supply of mining equipment, spare parts, and safety materials to support ongoing mining operations.",
    image: "/projects/mining-equipment-supply.jpg",
  },
  {
    title: "Industrial Construction Project",
    category: "Construction",
    location: "Tarime, Mara",
    year: "2023",
    description:
      "Site development and construction support including civil works, structural elements, and facility construction.",
    image: "/projects/industrial-construction.jpg",
  },
  {
    title: "Safety Equipment Deployment",
    category: "HSE Services",
    location: "Multiple Sites",
    year: "2024",
    description: "Large-scale deployment of PPE and safety equipment across multiple industrial and mining sites.",
    image: "/projects/safety-deployment.jpg",
  },
  {
    title: "Workforce Solutions Contract",
    category: "Workforce",
    location: "Mara Region",
    year: "2023",
    description: "Skilled workforce deployment for technical and operational support at mining facilities.",
    image: "/projects/workforce-solutions.jpg",
  },
  {
    title: "Electrical Infrastructure Supply",
    category: "Industrial Supply",
    location: "Tanzania",
    year: "2024",
    description: "Supply of electrical equipment, cables, and infrastructure components for industrial installations.",
    image: "/projects/electrical-infrastructure.jpg",
  },
  {
    title: "Plumbing Systems Installation",
    category: "Technical Services",
    location: "Tarime",
    year: "2023",
    description:
      "Complete plumbing materials supply and installation support for commercial and industrial facilities.",
    image: "/projects/plumbing-installation.jpg",
  },
]

const capabilities = [
  {
    icon: Building2,
    title: "Large Scale Projects",
    description: "Capability to support major industrial and mining operations",
  },
  {
    icon: MapPin,
    title: "Regional Coverage",
    description: "Services across Tanzania with focus on Mara and surrounding regions",
  },
  {
    icon: Calendar,
    title: "Timely Delivery",
    description: "Consistent track record of on-time project completion",
  },
]

export default function ProjectsPage() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main>
        {/* Hero Section */}
        <section className="relative py-24 bg-primary">
          <div className="absolute inset-0 opacity-10">
            <div
              className="absolute inset-0 bg-cover bg-center"
              style={{ backgroundImage: "url('/projects/mining-equipment-supply.jpg')" }}
            />
          </div>
          <div className="relative container mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-primary-foreground mb-4">Our Projects</h1>
            <p className="text-xl text-primary-foreground/90 max-w-2xl mx-auto">
              Visual proof of our capability and commitment to excellence
            </p>
          </div>
        </section>

        {/* Capabilities */}
        <section className="py-16 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-3 gap-8">
              {capabilities.map((cap) => (
                <div key={cap.title} className="flex items-center gap-4 p-6 bg-card rounded-xl border border-border">
                  <div className="inline-flex p-3 bg-primary/10 rounded-xl shrink-0">
                    <cap.icon className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground">{cap.title}</h3>
                    <p className="text-muted-foreground text-sm">{cap.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Projects Gallery */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full text-primary mb-4">
                <FolderOpen className="h-4 w-4" />
                <span className="text-sm font-medium">Project Gallery</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Featured Projects</h2>
              <p className="text-muted-foreground text-lg">
                A showcase of our work across various industrial and mining sectors
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {projects.map((project) => (
                <Card
                  key={project.title}
                  className="overflow-hidden group hover:shadow-xl transition-material border-border"
                >
                  <div className="aspect-video relative overflow-hidden">
                    <Image
                      src={project.image || "/placeholder.svg"}
                      alt={project.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-material-slow"
                    />
                    <div className="absolute top-4 left-4">
                      <span className="px-3 py-1 bg-accent text-accent-foreground text-xs font-medium rounded-full">
                        {project.category}
                      </span>
                    </div>
                  </div>
                  <CardContent className="p-6">
                    <h3 className="text-xl font-semibold text-foreground mb-2">{project.title}</h3>
                    <p className="text-muted-foreground text-sm mb-4">{project.description}</p>
                    <div className="flex items-center gap-4 text-sm text-muted-foreground">
                      <div className="flex items-center gap-1">
                        <MapPin className="h-4 w-4" />
                        {project.location}
                      </div>
                      <div className="flex items-center gap-1">
                        <Calendar className="h-4 w-4" />
                        {project.year}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Experience Statement */}
        <section className="py-20 bg-muted/50">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">Proven Track Record</h2>
              <p className="text-muted-foreground text-lg leading-relaxed mb-8">
                ASSAP COMPANY LIMITED has been an important part of many major and well-known national and international
                companies including public sectors by providing solutions and delivering on our promises. Our loyal
                involvement has always been results-oriented and has always matured into stronger relationships that
                have directly benefited our customers and partners.
              </p>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                <div className="p-6 bg-card rounded-xl border border-border">
                  <p className="text-3xl font-bold text-accent">10+</p>
                  <p className="text-muted-foreground text-sm">Years Experience</p>
                </div>
                <div className="p-6 bg-card rounded-xl border border-border">
                  <p className="text-3xl font-bold text-accent">500+</p>
                  <p className="text-muted-foreground text-sm">Projects Completed</p>
                </div>
                <div className="p-6 bg-card rounded-xl border border-border">
                  <p className="text-3xl font-bold text-accent">100+</p>
                  <p className="text-muted-foreground text-sm">Trusted Clients</p>
                </div>
                <div className="p-6 bg-card rounded-xl border border-border">
                  <p className="text-3xl font-bold text-accent">50+</p>
                  <p className="text-muted-foreground text-sm">Expert Team</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <CTASection />
      </main>
      <Footer />
    </div>
  )
}
