"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { usePathname } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { Menu, Phone, Mail } from "lucide-react"
import { cn } from "@/lib/utils"

const navigation = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Services", href: "/services" },
  { name: "Products", href: "/products" },
  { name: "HSE", href: "/hse" },
  { name: "Projects", href: "/projects" },
  { name: "Contact", href: "/contact" },
]

export function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isOpen, setIsOpen] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <>
      {/* Top bar with contact info */}
      <div className="bg-primary text-primary-foreground py-2 hidden md:block">
        <div className="container mx-auto px-4 flex justify-between items-center text-sm">
          <div className="flex items-center gap-6">
            <a href="tel:+255752026592" className="flex items-center gap-2 hover:text-accent transition-material">
              <Phone className="h-4 w-4" />
              +255 752 026 592
            </a>
            <a
              href="mailto:info@assap.co.tz"
              className="flex items-center gap-2 hover:text-accent transition-material"
            >
              <Mail className="h-4 w-4" />
              info@assap.co.tz
            </a>
          </div>
          <div className="text-primary-foreground/80">Tarime, Mara - Tanzania</div>
        </div>
      </div>

      {/* Main navigation */}
      <header
        className={cn(
          "sticky top-0 z-50 w-full transition-material",
          isScrolled ? "bg-background/95 backdrop-blur-md shadow-md border-b border-border" : "bg-background",
        )}
      >
        <nav className="container mx-auto px-4">
          <div className="flex h-20 items-center justify-between">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-3 transition-material hover:opacity-80">
              <Image
                src="/images/img-5438-removebg-preview.png"
                alt="ASSAP Company Limited Logo"
                width={80}
                height={80}
                className="h-20 w-auto"
              />
              <div className="hidden sm:block">
                <p className="font-bold text-lg text-primary leading-tight">ASSAP</p>
                <p className="text-xs text-muted-foreground">COMPANY LIMITED</p>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center gap-1">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className={cn(
                    "px-4 py-2 text-sm font-medium rounded-lg transition-material",
                    pathname === item.href
                      ? "text-primary bg-primary/10"
                      : "text-foreground/80 hover:text-primary hover:bg-primary/5",
                  )}
                >
                  {item.name}
                </Link>
              ))}
            </div>

            {/* CTA Button */}
            <div className="hidden lg:flex items-center gap-4">
              <Button
                asChild
                className="bg-accent hover:bg-accent/90 text-accent-foreground font-semibold transition-material"
              >
                <Link href="/contact">Request a Quote</Link>
              </Button>
            </div>

            {/* Mobile Menu */}
            <Sheet open={isOpen} onOpenChange={setIsOpen}>
              <SheetTrigger asChild className="lg:hidden">
                <Button variant="ghost" size="icon">
                  <Menu className="h-6 w-6" />
                  <span className="sr-only">Open menu</span>
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-[300px] bg-background">
                <div className="flex flex-col gap-6 mt-8">
                  {navigation.map((item) => (
                    <Link
                      key={item.name}
                      href={item.href}
                      onClick={() => setIsOpen(false)}
                      className={cn(
                        "text-lg font-medium transition-material py-2",
                        pathname === item.href ? "text-primary" : "text-foreground/80 hover:text-primary",
                      )}
                    >
                      {item.name}
                    </Link>
                  ))}
                  <Button asChild className="bg-accent hover:bg-accent/90 text-accent-foreground mt-4">
                    <Link href="/contact" onClick={() => setIsOpen(false)}>
                      Request a Quote
                    </Link>
                  </Button>
                  <div className="mt-6 pt-6 border-t border-border">
                    <a
                      href="tel:+255788706592"
                      className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-material mb-3"
                    >
                      <Phone className="h-4 w-4" />
                      +255 788 706 592
                    </a>
                    <a
                      href="mailto:info@assap.co.tz"
                      className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-material"
                    >
                      <Mail className="h-4 w-4" />
                      info@assap.co.tz
                    </a>
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </nav>
      </header>
    </>
  )
}
