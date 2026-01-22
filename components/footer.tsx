import Link from "next/link"
import Image from "next/image"
import { Phone, Mail, MapPin, ArrowRight, Facebook, Linkedin, Twitter, Instagram } from "lucide-react"

const quickLinks = [
  { name: "About Us", href: "/about" },
  { name: "Our Services", href: "/services" },
  { name: "Products", href: "/products" },
  { name: "HSE Commitment", href: "/hse" },
  { name: "Projects", href: "/projects" },
  { name: "Contact", href: "/contact" },
]

const services = [
  "Industrial Supply",
  "Mining Support",
  "Construction Materials",
  "Safety Equipment",
  "Workforce Solutions",
  "HSE Services",
]

export function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground">
      {/* Main Footer */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Company Info */}
          <div className="space-y-6">
            <div className="flex items-center gap-3">
              <Image
                src="/images/img-5438-removebg-preview.png"
                alt="ASSAP Company Limited"
                width={50}
                height={50}
                className="h-12 w-auto brightness-0 invert"
              />
              <div>
                <p className="font-bold text-lg">ASSAP</p>
                <p className="text-xs text-primary-foreground/70">COMPANY LIMITED</p>
              </div>
            </div>
            <p className="text-primary-foreground/80 text-sm leading-relaxed">
              Your trusted partner for industrial, mining and general supply solutions in Tanzania. ASSAP COMPANY LIMITED delivers quality,
              reliability and excellence since establishment.
            </p>
            <div className="flex gap-4">
              <a
                href="#"
                className="p-2 bg-primary-foreground/10 rounded-lg hover:bg-accent hover:text-accent-foreground transition-material"
              >
                <Facebook className="h-5 w-5" />
              </a>
              <a
                href="https://www.instagram.com/assap_limited?igsh=MXNpdDYyOTRmMmM5Nw%3D%3D"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-primary-foreground/10 rounded-lg hover:bg-accent hover:text-accent-foreground transition-material"
              >
                <Instagram className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="p-2 bg-primary-foreground/10 rounded-lg hover:bg-accent hover:text-accent-foreground transition-material"
              >
                <Linkedin className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="p-2 bg-primary-foreground/10 rounded-lg hover:bg-accent hover:text-accent-foreground transition-material"
              >
                <Twitter className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-lg mb-6 flex items-center gap-2">
              <span className="w-8 h-0.5 bg-accent"></span>
              Quick Links
            </h3>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-primary-foreground/80 hover:text-accent transition-material flex items-center gap-2 group"
                  >
                    <ArrowRight className="h-4 w-4 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-material" />
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-semibold text-lg mb-6 flex items-center gap-2">
              <span className="w-8 h-0.5 bg-accent"></span>
              Our Services
            </h3>
            <ul className="space-y-3">
              {services.map((service) => (
                <li key={service} className="text-primary-foreground/80 flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-accent rounded-full"></span>
                  {service}
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-semibold text-lg mb-6 flex items-center gap-2">
              <span className="w-8 h-0.5 bg-accent"></span>
              Contact Us
            </h3>
            <ul className="space-y-4">
              <li>
                <a
                  href="tel:+255788706592"
                  className="flex items-start gap-3 text-primary-foreground/80 hover:text-accent transition-material"
                >
                  <Phone className="h-5 w-5 mt-0.5 shrink-0" />
                  <div>
                    <p>+255 788 706 592</p>
                    <p>+255 624 406 592</p>
                  </div>
                </a>
              </li>
              <li>
                <a
                  href="mailto:info@assap.co.tz"
                  className="flex items-start gap-3 text-primary-foreground/80 hover:text-accent transition-material"
                >
                  <Mail className="h-5 w-5 mt-0.5 shrink-0" />
                  <span>info@assap.co.tz</span>
                </a>
              </li>
              <li className="flex items-start gap-3 text-primary-foreground/80">
                <MapPin className="h-5 w-5 mt-0.5 shrink-0" />
                <div>
                  <p>P.O. Box 68</p>
                  <p>Tarime, Mara - Tanzania</p>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-primary-foreground/20">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-primary-foreground/70 text-sm">
              © {new Date().getFullYear()} ASSAP COMPANY LIMITED. All rights reserved.
            </p>
            <div className="flex gap-6 text-sm text-primary-foreground/70">
              <span>TIN: 157-357-891</span>
              <span>BRELA: 157357891</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
