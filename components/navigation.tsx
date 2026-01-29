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
      {/* Top bar with contact info - Enhanced for mobile */}
      <div className="bg-gradient-to-r from-primary via-primary to-primary/90 text-primary-foreground py-2.5 shadow-sm">
        <div className="container mx-auto px-4">
          {/* Mobile: Single line with icon */}
          <div className="flex md:hidden items-center justify-center gap-2 text-xs">
            <Phone className="h-3 w-3" />
            <a href="tel:+255752026592" className="hover:text-accent transition-all">
              +255 752 026 592
            </a>
            <span className="text-primary-foreground/50">•</span>
            <Mail className="h-3 w-3" />
            <a href="mailto:info@assap.co.tz" className="hover:text-accent transition-all">
              info@assap.co.tz
            </a>
          </div>
          
          {/* Desktop: Original layout */}
          <div className="hidden md:flex justify-between items-center text-sm">
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
      </div>

      {/* Main navigation */}
      <header
        className={cn(
          "sticky top-0 z-50 w-full transition-material",
          isScrolled 
            ? "bg-background/98 backdrop-blur-xl shadow-lg border-b border-border" 
            : "bg-gradient-to-b from-background via-background to-background/50 shadow-sm",
        )}
      >
        <nav className="container mx-auto px-4">
          <div className="flex h-20 items-center justify-between">
            {/* Logo - Enhanced for mobile */}
            <Link href="/" className="flex items-center gap-3 transition-all duration-300 hover:opacity-80 group">
              <div className="relative">
                <div className="absolute inset-0 bg-primary/20 rounded-full blur-md opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <Image
                  src="/images/img-5438-removebg-preview.png"
                  alt="ASSAP Company Limited Logo"
                  width={80}
                  height={80}
                  className="h-16 sm:h-20 w-auto relative z-10"
                />
              </div>
              <div className="hidden sm:block">
                <p className="font-bold text-lg text-primary leading-tight">ASSAP</p>
                <p className="text-xs text-muted-foreground">COMPANY LIMITED</p>
              </div>
              {/* Mobile: Compact text */}
              <div className="sm:hidden">
                <p className="font-bold text-sm text-primary leading-tight">ASSAP</p>
                <p className="text-[9px] text-muted-foreground uppercase tracking-wide">Co. Limited</p>
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
                <Button variant="ghost" size="icon" className="hover:bg-primary/10">
                  <Menu className="h-6 w-6 text-primary" />
                  <span className="sr-only">Open menu</span>
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-[85vw] sm:w-[350px] bg-gradient-to-br from-background via-background to-primary/5 border-l-2 border-primary/20">
                <div className="flex flex-col h-full">
                  {/* Mobile Logo Header */}
                  <div className="flex items-center gap-3 pb-6 border-b border-border/50">
                    <Image
                      src="/images/img-5438-removebg-preview.png"
                      alt="ASSAP Logo"
                      width={50}
                      height={50}
                      className="h-12 w-auto"
                    />
                    <div>
                      <p className="font-bold text-base text-primary leading-tight">ASSAP</p>
                      <p className="text-[10px] text-muted-foreground uppercase tracking-wide">Company Limited</p>
                    </div>
                  </div>

                  {/* Navigation Links */}
                  <div className="flex flex-col gap-1 mt-6 flex-1">
                    {navigation.map((item, index) => (
                      <Link
                        key={item.name}
                        href={item.href}
                        onClick={() => setIsOpen(false)}
                        className={cn(
                          "text-base font-medium transition-all duration-300 py-3.5 px-4 rounded-lg border border-transparent",
                          "hover:border-primary/20 hover:bg-primary/5 hover:translate-x-1",
                          pathname === item.href 
                            ? "text-primary bg-primary/10 border-primary/30 shadow-sm" 
                            : "text-foreground/80"
                        )}
                        style={{
                          animationDelay: `${index * 50}ms`
                        }}
                      >
                        <span className="flex items-center gap-3">
                          <span className={cn(
                            "w-1.5 h-1.5 rounded-full transition-all",
                            pathname === item.href ? "bg-primary w-2" : "bg-muted-foreground/30"
                          )} />
                          {item.name}
                        </span>
                      </Link>
                    ))}
                  </div>

                  {/* CTA Button */}
                  <Button 
                    asChild 
                    className="bg-accent hover:bg-accent/90 text-accent-foreground font-semibold shadow-lg hover:shadow-xl transition-all duration-300 py-6"
                  >
                    <Link href="/contact" onClick={() => setIsOpen(false)}>
                      Request a Quote →
                    </Link>
                  </Button>

                  {/* Contact Info */}
                  <div className="mt-6 pt-6 border-t border-border/50 space-y-3">
                    <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-3">Get in Touch</p>
                    <a
                      href="tel:+255788706592"
                      className="flex items-center gap-3 text-sm text-foreground/80 hover:text-primary transition-all duration-300 hover:translate-x-1 p-2 rounded-lg hover:bg-primary/5"
                    >
                      <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center">
                        <Phone className="h-3.5 w-3.5 text-primary" />
                      </div>
                      <span>+255 788 706 592</span>
                    </a>
                    <a
                      href="mailto:info@assap.co.tz"
                      className="flex items-center gap-3 text-sm text-foreground/80 hover:text-primary transition-all duration-300 hover:translate-x-1 p-2 rounded-lg hover:bg-primary/5"
                    >
                      <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center">
                        <Mail className="h-3.5 w-3.5 text-primary" />
                      </div>
                      <span>info@assap.co.tz</span>
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
