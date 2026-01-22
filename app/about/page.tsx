import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { CTASection } from "@/components/cta-section"
import Image from "next/image"
import { Award, Target, Heart, Shield, Lightbulb, Handshake, Users, Building2 } from "lucide-react"

const values = [
  {
    icon: Handshake,
    title: "Service",
    description: "We understand, determine and deliver highest standards of services.",
  },
  {
    icon: Shield,
    title: "Trust",
    description: "We build trust authentically by delivering quality.",
  },
  {
    icon: Heart,
    title: "Relationship",
    description: "We believe in maintaining long-term relationships and fairness in all our dealings.",
  },
  {
    icon: Target,
    title: "Integrity",
    description: "We are committed to keeping our word and honouring our commitments.",
  },
  {
    icon: Lightbulb,
    title: "Value",
    description: "We create value in our work through innovative thinking and ideas.",
  },
  {
    icon: Award,
    title: "Excellence",
    description: "We passionately pursue the highest standards and strive to always excel.",
  },
]

const philosophy = [
  {
    title: "Human Resource Management",
    description:
      "We believe that the future of our company depends on the attitude and competence of each member, perseverance, self-development, and creating a corporate culture of respect for talent.",
  },
  {
    title: "Customer Satisfaction",
    description:
      "We ensure that our company renders best satisfactory service to our clients with high value on competitive fields. Our clients' demands will be guaranteed with best quality and services we provide.",
  },
  {
    title: "Sustainability Management",
    description:
      "We can only be realized in harmony with the balance of responsibility for economic, environmental and social aspects in order to grow continuously.",
  },
]

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main>
        {/* Hero Section */}
        <section className="relative py-24 bg-primary">
          <div className="absolute inset-0 opacity-10">
            <div className="absolute inset-0 bg-[url('/industrial-pattern-texture.jpg')] bg-cover"></div>
          </div>
          <div className="relative container mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-primary-foreground mb-4">About ASSAP</h1>
            <p className="text-xl text-primary-foreground/90 max-w-2xl mx-auto">
              A trusted partner for industrial and mining excellence in Tanzania
            </p>
          </div>
        </section>

        {/* Company Overview */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full text-primary mb-4">
                  <Building2 className="h-4 w-4" />
                  <span className="text-sm font-medium">Company Overview</span>
                </div>
                <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                  Professional General Suppliers in Tanzania
                </h2>
                <div className="space-y-4 text-muted-foreground leading-relaxed">
                  <p>
                    ASSAP COMPANY LIMITED is a multidisciplinary industrial, mining and general supply
                    firm providing end-to-end support to large-scale projects across Tanzania. We operate at the
                    intersection of material supply, construction, workforce deployment and operational support.
                  </p>
                  <p>
                    Rather than acting solely as a supplier, the company positions itself as a solutions partner,
                    capable of delivering both physical resources and on-site services required to sustain industrial
                    and mining operations.
                  </p>
                  <p>
                    Our experience and knowledge in this field has given us the pleasure of doing business with some of
                    the leading companies all over Tanzania. We pride on consistently offering HIGH QUALITY, COMPETITIVE
                    PRICES and EXPEDIENT SERVICES.
                  </p>
                </div>
              </div>
              <div className="relative">
                <div className="aspect-[4/3] rounded-2xl overflow-hidden">
                  <Image src="/industrial-warehouse-team-professional-business-me.jpg" alt="ASSAP Team" fill className="object-cover" />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Mission & Vision */}
        <section className="py-20 bg-muted/50">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-card p-8 rounded-2xl shadow-sm border border-border">
                <div className="inline-flex p-3 bg-primary/10 rounded-xl mb-4">
                  <Target className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-2xl font-bold text-foreground mb-4">Our Mission</h3>
                <p className="text-muted-foreground leading-relaxed">
                  ASSAP COMPANY LIMITED plans to continue to expand business prospects while meeting challenges of the
                  new century via exceptional client relations, marketing, shipping, logistics and finance practices.
                </p>
              </div>
              <div className="bg-card p-8 rounded-2xl shadow-sm border border-border">
                <div className="inline-flex p-3 bg-accent/20 rounded-xl mb-4">
                  <Lightbulb className="h-8 w-8 text-accent" />
                </div>
                <h3 className="text-2xl font-bold text-foreground mb-4">Our Vision</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Our experience and knowledge in this field has given us the pleasure of doing business with some of
                  the leading companies in all over Tanzania. We pride on consistently offering HIGH QUALITY,
                  COMPETITIVE PRICES and EXPEDIENT SERVICES.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Core Values */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Our Core Values</h2>
              <p className="text-muted-foreground text-lg">The principles that guide everything we do</p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {values.map((value) => (
                <div
                  key={value.title}
                  className="p-6 bg-card rounded-xl border border-border hover:border-accent/50 hover:shadow-lg transition-material"
                >
                  <div className="inline-flex p-3 bg-primary/10 rounded-xl mb-4">
                    <value.icon className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold text-foreground mb-2">{value.title}</h3>
                  <p className="text-muted-foreground">{value.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Management Philosophy */}
        <section className="py-20 bg-primary text-primary-foreground">
          <div className="container mx-auto px-4">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Management Philosophy</h2>
              <p className="text-primary-foreground/80 text-lg">Our approach to building lasting success</p>
            </div>
            <div className="grid md:grid-cols-3 gap-8">
              {philosophy.map((item, index) => (
                <div key={item.title} className="text-center">
                  <div className="w-16 h-16 bg-accent text-accent-foreground rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                    {index + 1}
                  </div>
                  <h3 className="text-xl font-semibold mb-3">{item.title}</h3>
                  <p className="text-primary-foreground/80">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Leadership */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Our Leadership</h2>
              <p className="text-muted-foreground text-lg">Experienced professionals guiding our mission</p>
            </div>
            <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              <div className="bg-card p-8 rounded-2xl border border-border text-center">
                <div className="w-24 h-24 bg-muted rounded-full mx-auto mb-4 flex items-center justify-center">
                  <Users className="h-10 w-10 text-muted-foreground" />
                </div>
                <h3 className="text-xl font-bold text-foreground">Agnes Joseph Bega</h3>
                <p className="text-accent font-medium mb-4">Managing Director</p>
                <p className="text-muted-foreground text-sm">
                  Leading ASSAP COMPANY LIMITED with a commitment to excellence, integrity, and customer satisfaction.
                </p>
              </div>
              <div className="bg-card p-8 rounded-2xl border border-border text-center">
                <div className="w-24 h-24 bg-muted rounded-full mx-auto mb-4 flex items-center justify-center">
                  <Users className="h-10 w-10 text-muted-foreground" />
                </div>
                <h3 className="text-xl font-bold text-foreground">Penina Josephat Bega</h3>
                <p className="text-accent font-medium mb-4">Board Chairman</p>
                <p className="text-muted-foreground text-sm">
                  Bringing vision, common sense, and professionalism to guide the company's strategic direction.
                </p>
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
