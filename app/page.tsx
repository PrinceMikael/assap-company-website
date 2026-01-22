import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { HeroSection } from "@/components/hero-section"
import { ServicesOverview } from "@/components/services-overview"
import { AboutPreview } from "@/components/about-preview"
import { ProductsPreview } from "@/components/products-preview"
import { CTASection } from "@/components/cta-section"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main>
        <HeroSection />
        <ServicesOverview />
        <AboutPreview />
        <ProductsPreview />
        <CTASection />
      </main>
      <Footer />
    </div>
  )
}
