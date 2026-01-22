import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { CTASection } from "@/components/cta-section"
import { Shield, Heart, Leaf, AlertTriangle, CheckCircle, Award } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"

const hseAreas = [
  {
    icon: Shield,
    title: "Safety First Culture",
    description:
      "We prioritize safety in every aspect of our operations. Our commitment to creating a safe working environment is unwavering, ensuring all personnel return home safely every day.",
  },
  {
    icon: Heart,
    title: "Health Protection",
    description:
      "Comprehensive health programs including regular health monitoring, occupational health assessments, and wellness initiatives for all workers on-site.",
  },
  {
    icon: Leaf,
    title: "Environmental Stewardship",
    description:
      "Responsible environmental management practices that minimize our ecological footprint while maintaining operational efficiency and regulatory compliance.",
  },
  {
    icon: AlertTriangle,
    title: "Risk Management",
    description:
      "Proactive risk identification, assessment, and mitigation strategies to prevent incidents before they occur and protect our people and assets.",
  },
]

const commitments = [
  "Zero tolerance for safety violations",
  "Continuous HSE training and development",
  "Regular safety audits and inspections",
  "Emergency response preparedness",
  "Incident investigation and learning",
  "Compliance with international standards",
  "Stakeholder engagement on HSE matters",
  "Environmental impact monitoring",
]

const certifications = [
  {
    title: "Quality Assurance",
    description: "Commitment to delivering products and services that meet the highest quality standards.",
  },
  {
    title: "Safety Standards",
    description: "Adherence to international occupational health and safety management guidelines.",
  },
  {
    title: "Environmental Compliance",
    description: "Following environmental management best practices and regulatory requirements.",
  },
]

export default function HSEPage() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main>
        {/* Hero Section */}
        <section className="relative py-24 bg-primary">
          <div className="absolute inset-0 opacity-10">
            <div className="absolute inset-0 bg-[url('/safety-helmet-ppe-protective-equipment-industrial.jpg')] bg-cover"></div>
          </div>
          <div className="relative container mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-primary-foreground mb-4">
              Health, Safety & Environment
            </h1>
            <p className="text-xl text-primary-foreground/90 max-w-2xl mx-auto">
              Our unwavering commitment to protecting people, property, and the planet
            </p>
          </div>
        </section>

        {/* HSE Policy */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full text-primary mb-4">
                  <Shield className="h-4 w-4" />
                  <span className="text-sm font-medium">Our HSE Policy</span>
                </div>
                <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">Safety is Non-Negotiable</h2>
                <p className="text-muted-foreground text-lg leading-relaxed mb-6">
                  Recognizing the high-risk nature of mining and industrial environments, ASSAP General Supply places
                  strong emphasis on health, safety and environmental compliance. Our HSE services include safety
                  equipment supply, safety training, risk assessment support and adherence to HSE standards.
                </p>
                <p className="text-muted-foreground leading-relaxed mb-8">
                  We believe that a safe workplace is a productive workplace. Our comprehensive HSE management system
                  ensures that all operations are conducted in accordance with the highest safety standards, protecting
                  our employees, clients, communities, and the environment.
                </p>
                <div className="grid sm:grid-cols-2 gap-4">
                  {commitments.slice(0, 4).map((item) => (
                    <div key={item} className="flex items-center gap-2">
                      <CheckCircle className="h-5 w-5 text-accent shrink-0" />
                      <span className="text-foreground text-sm">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div className="relative">
                <div className="aspect-square rounded-2xl overflow-hidden">
                  <img
                    src="/industrial-warehouse-workers-professional-team-saf.jpg"
                    alt="HSE at ASSAP - Safety professionals in protective equipment"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* HSE Areas */}
        <section className="py-20 bg-muted/50">
          <div className="container mx-auto px-4">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Our HSE Focus Areas</h2>
              <p className="text-muted-foreground text-lg">
                Comprehensive approach to health, safety, and environmental management
              </p>
            </div>
            <div className="grid md:grid-cols-2 gap-6">
              {hseAreas.map((area) => (
                <Card key={area.title} className="bg-card border-border hover:shadow-lg transition-material">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="inline-flex p-3 bg-primary/10 rounded-xl shrink-0">
                        <area.icon className="h-6 w-6 text-primary" />
                      </div>
                      <div>
                        <h3 className="text-xl font-semibold text-foreground mb-2">{area.title}</h3>
                        <p className="text-muted-foreground">{area.description}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* HSE Commitments */}
        <section className="py-20 bg-primary text-primary-foreground">
          <div className="container mx-auto px-4">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Our HSE Commitments</h2>
              <p className="text-primary-foreground/80 text-lg">
                The principles that guide our safety and environmental practices
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {commitments.map((commitment, index) => (
                <div
                  key={commitment}
                  className="bg-primary-foreground/10 backdrop-blur-sm rounded-xl p-6 text-center border border-primary-foreground/20 hover:bg-primary-foreground/15 transition-material"
                >
                  <div className="w-10 h-10 bg-accent text-accent-foreground rounded-full flex items-center justify-center text-lg font-bold mx-auto mb-4">
                    {index + 1}
                  </div>
                  <p className="text-primary-foreground">{commitment}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Certifications */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Standards & Compliance</h2>
              <p className="text-muted-foreground text-lg">
                Our commitment to meeting and exceeding industry standards
              </p>
            </div>
            <div className="grid md:grid-cols-3 gap-8">
              {certifications.map((cert) => (
                <div key={cert.title} className="text-center p-8 bg-muted/50 rounded-2xl">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Award className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold text-foreground mb-2">{cert.title}</h3>
                  <p className="text-muted-foreground">{cert.description}</p>
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
