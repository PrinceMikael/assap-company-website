import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { CTASection } from "@/components/cta-section"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Package } from "lucide-react"
import Image from "next/image"

const productCategories = [
  {
    id: "industrial",
    title: "Industrial Supplies",
    description: "Complete range of industrial equipment and supplies",
    image: "/products/industrial-supplies.jpg",
    products: [
      "Valves, Flanges, Pipes and Pipe Fittings (CS/SS/MS/GI)",
      "Bulk Chemicals, Hydraulic Hoses & Fittings",
      "Forged Fittings, Flow Meters",
      "Pressure Measurement Instruments",
      "Power Tools, Containers, Drilling Tools",
      "Precision Machining Items, Gaskets, Pumps",
      "Temperature & Level Measurement Instruments",
      "Drill Bits, Drill Collars, Wellheads",
      "Diesel Generators, Batteries, Battery Chargers",
    ],
  },
  {
    id: "metals",
    title: "Metals & Steel",
    description: "High-quality metals and steel products",
    image: "/products/metals-steel.jpg",
    products: [
      "Galvanized Pipes, MS-Pipes",
      "Square & Rectangular Hollow Sections",
      "Hot Rolled Coils/Sheets/Plates",
      "Mild Steel Chequered Sheets",
      "Cold Rolled Coils/Sheets",
      "Galvanized Steel Coils/Sheets",
      "Aluminum Plain Sheets",
      "Carbon Steel, Stainless Steel Sheets",
      "Stainless Pipes/Tubes",
      "Equal/Unequal Angles, Flat Bars, Round Bars",
      "Square Bars, T-Sections",
      "Channels, Beams (Universal/JIS/IPE/HEA/HEB)",
    ],
  },
  {
    id: "welding",
    title: "Welding & Cutting",
    description: "Professional welding equipment and consumables",
    image: "/products/welding-equipment.jpg",
    products: [
      "Welding Machines",
      "Welding Consumables & Safety Items",
      "Plasma Cutting Machines",
      "Oxy Plasma Profile Cutting Machines",
      "Abrasive Jet Cutting Machines",
      "Thermal Spray Equipment",
      "Welding Torches & Accessories",
      "Welding Automation",
      "Pipe Cutting & Beveling Equipment",
      "Diesel Welders, Power Generators",
      "Special Welding Electrodes",
      "Aluminum & Carbon Steel Welding Wires",
      "Brazing Alloys",
    ],
  },
  {
    id: "fasteners",
    title: "Fasteners",
    description: "Industrial fasteners in all grades and specifications",
    image: "/products/fasteners.jpg",
    products: [
      "HEX Bolts, Allen Bolts",
      "Nuts, Washers, Screws",
      "Threaded Bars, Anchor Bolts",
      "Standards: BS, DIN, ASTM, ISO, EN",
      "Finishes: HDG, Electro Galvanized, Dacromet",
      "Grades: 5, 8.8, 10.9, 12.9, B7-2H, B7M-2HM",
      "Stainless Steel: SS-304, SS-316, SS316L, B8/B8M",
      "Threads: Metric, UNC, UNF, BSF, BSW, Fine Pitch",
    ],
  },
  {
    id: "electrical",
    title: "Electrical Supplies",
    description: "Comprehensive electrical equipment and cables",
    image: "/products/electrical-supplies.jpg",
    products: [
      "Power Cables, Building Wires",
      "LV & MV Cables, LSF/LSOH Cables",
      "Lead Sheathed & Instrumentation Cables",
      "Control & Telephone Cables",
      "Fibre Optic & Fire Resistant Cables",
      "Transformers (1 Phase & 3 Phase)",
      "RMU, MV/LV Switchgear, Panel Boards",
      "MCBs, MCCBs, ELCBs, RCBs",
      "Motor Starters, Contactors, Relays",
      "Cable Trays, Ladders, Glands",
      "LED Lights (Various Types)",
      "Explosion Proof Lightings",
    ],
  },
  {
    id: "safety",
    title: "Safety Equipment",
    description: "Complete PPE and safety solutions",
    image: "/products/safety-equipment.jpg",
    products: [
      "Safety Glasses, Goggles, Face Shields",
      "Safety Shoes, Coveralls, Reflective Jackets",
      "Safety & Welding Helmets",
      "Eye Wash Stations, Showers",
      "Single/Multi Gas Detectors",
      "Breathing Apparatus, Escape Masks",
      "Fall Protection Devices",
      "Safety Harnesses, Lanyards",
      "Fire Blankets, First Aid Kits",
      "Dust Masks, Respirators",
      "Traffic Cones, Warning Lights",
      "Life Jackets, Life Buoys",
    ],
  },
  {
    id: "plumbing",
    title: "Plumbing Materials",
    description: "Professional plumbing solutions and fittings",
    image: "/products/plumbing-materials.jpg",
    products: [
      "uPVC Drainage Pipes & Fittings",
      "High Pressure Pipes & Fittings",
      "HDPE/MDPE Pipes & Fittings",
      "PPR, PEX, GRP Pipes & Fittings",
      "Pre-insulated Pipes & Fittings",
      "Fabricated Plumbing Products",
      "GRP/UPVC Well Casing & Screens",
      "Telecommunication Cable Ducts",
      "Water Heaters, Various Pumps",
      "Pipe Clamps & Plumbing Accessories",
    ],
  },
  {
    id: "sanitary",
    title: "Sanitary Materials",
    description: "Quality sanitary fittings and bathroom solutions",
    image: "/products/sanitary-materials.jpg",
    products: [
      "Luxury Showers, Mixers",
      "Kitchen Sinks, Bathroom Fittings",
      "Faucets & Accessories",
      "Bath Tubs, Urinals",
      "WC Flush System Solutions",
      "Water SPA Solutions",
      "Hand Showers & Shower Sets",
      "Head & Side Showers",
      "Water Saving Products",
      "Thermostatic Shower Mixers",
    ],
  },
  {
    id: "lifting",
    title: "Lifting Equipment",
    description: "Heavy lifting and rigging equipment",
    image: "/products/lifting-equipment.jpg",
    products: [
      "Manual Chain Hoists, Level Hoists",
      "Alloy Shackles, Web Slings",
      "Wire Rope Slings",
      "Plate Lifting Clamps",
      "Pallet Trucks, Chain Blocks",
      "Beam Clamps, Trolleys",
      "Mechanical Jacks, Pipe Benders",
      "Electric Chain Hoists",
      "Cargo Lashings, Tow Straps",
      "Retractable Fall Arrestors",
    ],
  },
]

export default function ProductsPage() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main>
        {/* Hero Section */}
        <section className="relative py-24 bg-primary">
          <div className="absolute inset-0 opacity-10">
            <div
              className="absolute inset-0 bg-cover bg-center"
              style={{ backgroundImage: "url('/products/industrial-supplies.jpg')" }}
            />
          </div>
          <div className="relative container mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-primary-foreground mb-4">Our Products</h1>
            <p className="text-xl text-primary-foreground/90 max-w-2xl mx-auto">
              Quality industrial materials and equipment from trusted manufacturers
            </p>
          </div>
        </section>

        {/* Products Section */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full text-primary mb-4">
                <Package className="h-4 w-4" />
                <span className="text-sm font-medium">Product Categories</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                Comprehensive Industrial Supply Range
              </h2>
              <p className="text-muted-foreground text-lg">
                From industrial equipment to safety gear, we provide everything needed for mining and construction
                operations.
              </p>
            </div>

            <Tabs defaultValue="industrial" className="w-full">
              <TabsList className="flex flex-wrap justify-center gap-2 mb-12 bg-transparent h-auto">
                {productCategories.map((category) => (
                  <TabsTrigger
                    key={category.id}
                    value={category.id}
                    className="px-4 py-2 data-[state=active]:bg-primary data-[state=active]:text-primary-foreground rounded-lg transition-material"
                  >
                    {category.title}
                  </TabsTrigger>
                ))}
              </TabsList>

              {productCategories.map((category) => (
                <TabsContent key={category.id} value={category.id}>
                  <div className="grid lg:grid-cols-2 gap-8 items-start">
                    <div className="aspect-video relative rounded-2xl overflow-hidden shadow-lg">
                      <Image
                        src={category.image || "/placeholder.svg"}
                        alt={category.title}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <Card className="border-border">
                      <CardHeader>
                        <CardTitle className="text-2xl">{category.title}</CardTitle>
                        <p className="text-muted-foreground">{category.description}</p>
                      </CardHeader>
                      <CardContent>
                        <ul className="grid gap-2">
                          {category.products.map((product, index) => (
                            <li key={index} className="flex items-start gap-2 text-foreground">
                              <span className="w-1.5 h-1.5 bg-accent rounded-full mt-2 shrink-0" />
                              <span className="text-sm">{product}</span>
                            </li>
                          ))}
                        </ul>
                      </CardContent>
                    </Card>
                  </div>
                </TabsContent>
              ))}
            </Tabs>
          </div>
        </section>

        {/* All Categories Grid */}
        <section className="py-20 bg-muted/30">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-foreground text-center mb-12">All Product Categories</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {productCategories.map((category) => (
                <Card
                  key={category.id}
                  className="overflow-hidden group hover:shadow-lg transition-material border-border"
                >
                  <div className="aspect-video relative overflow-hidden">
                    <Image
                      src={category.image || "/placeholder.svg"}
                      alt={category.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-material-slow"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-primary/80 to-transparent" />
                    <h3 className="absolute bottom-4 left-4 text-xl font-semibold text-primary-foreground">
                      {category.title}
                    </h3>
                  </div>
                  <CardContent className="p-4">
                    <p className="text-muted-foreground text-sm">{category.description}</p>
                    <p className="text-primary font-medium text-sm mt-2">
                      {category.products.length}+ Products Available
                    </p>
                  </CardContent>
                </Card>
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
