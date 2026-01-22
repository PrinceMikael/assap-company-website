import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ArrowRight, Package } from "lucide-react"

const productCategories = [
  {
    title: "Industrial Supplies",
    image: "/industrial-valves-pipes-machinery-equipment.jpg",
    items: ["Valves & Flanges", "Hydraulic Equipment", "Power Tools", "Drilling Equipment"],
  },
  {
    title: "Metals & Steel",
    image: "/steel-pipes-metal-sheets-galvanized-industrial.jpg",
    items: ["Steel Pipes", "Sheets & Plates", "Structural Steel", "Stainless Steel"],
  },
  {
    title: "Safety Equipment",
    image: "/safety-helmet-ppe-protective-equipment-industrial.jpg",
    items: ["PPE & Workwear", "Safety Harnesses", "Respiratory Equipment", "Fire Safety"],
  },
  {
    title: "Electrical Supplies",
    image: "/electrical-cables-wires-power-equipment-industrial.jpg",
    items: ["Power Cables", "Switchgear", "LED Lighting", "Transformers"],
  },
]

export function ProductsPreview() {
  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full text-primary mb-4">
            <Package className="h-4 w-4" />
            <span className="text-sm font-medium">Product Categories</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Quality Products for Every Industrial Need
          </h2>
          <p className="text-muted-foreground text-lg">
            Comprehensive range of industrial materials, equipment, and supplies from trusted manufacturers worldwide.
          </p>
        </div>

        {/* Products Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {productCategories.map((category) => (
            <Card
              key={category.title}
              className="group overflow-hidden bg-card hover:shadow-xl transition-material border-border"
            >
              <div className="aspect-[4/3] relative overflow-hidden">
                <img
                  src={category.image || "/placeholder.svg"}
                  alt={category.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-material-slow"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/80 to-transparent"></div>
                <h3 className="absolute bottom-4 left-4 right-4 text-xl font-semibold text-primary-foreground">
                  {category.title}
                </h3>
              </div>
              <CardContent className="p-4">
                <ul className="space-y-2">
                  {category.items.map((item) => (
                    <li key={item} className="flex items-center gap-2 text-muted-foreground text-sm">
                      <span className="w-1.5 h-1.5 bg-accent rounded-full"></span>
                      {item}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <Button
            asChild
            size="lg"
            variant="outline"
            className="border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-material bg-transparent"
          >
            <Link href="/products">
              View All Products
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
