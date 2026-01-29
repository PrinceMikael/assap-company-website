"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { usePathname } from "next/navigation"
import { motion, AnimatePresence } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger, SheetTitle } from "@/components/ui/sheet"
import { Menu, Phone, Mail, X } from "lucide-react"
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
      <div className="bg-linear-to-r from-primary via-primary to-primary/90 text-primary-foreground py-2.5 shadow-sm">
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
            : "bg-linear-to-b from-background via-background to-background/50 shadow-sm",
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
                    "relative px-4 py-2 text-sm font-medium rounded-lg transition-all duration-300 group",
                    pathname === item.href
                      ? "text-primary"
                      : "text-foreground/80 hover:text-primary",
                  )}
                >
                  <span className="relative z-10">{item.name}</span>
                  {pathname === item.href ? (
                    <motion.div
                      layoutId="activeTab"
                      className="absolute inset-0 bg-primary/10 rounded-lg"
                      transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                    />
                  ) : (
                    <motion.div
                      className="absolute inset-0 bg-primary/5 rounded-lg opacity-0 group-hover:opacity-100"
                      transition={{ duration: 0.2 }}
                    />
                  )}
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
                <Button variant="ghost" size="icon" className="hover:bg-primary/10 relative group">
                  <motion.div
                    animate={isOpen ? { rotate: 180, scale: 0.8 } : { rotate: 0, scale: 1 }}
                    transition={{ duration: 0.3 }}
                  >
                    <Menu className="h-6 w-6 text-primary" />
                  </motion.div>
                  <span className="sr-only">Open menu</span>
                </Button>
              </SheetTrigger>
              <SheetContent 
                side="right" 
                className="w-70 sm:w-80 bg-background/98 backdrop-blur-xl border-l border-primary/20 p-0 overflow-hidden"
              >
                {/* Accessibility Title */}
                <SheetTitle className="sr-only">Navigation Menu</SheetTitle>
                
                {/* Animated Background Gradient */}
                <div className="absolute inset-0 bg-linear-to-br from-primary/5 via-background to-accent/5 opacity-50" />
                
                <div className="relative flex flex-col h-full p-6">
                  {/* Mobile Logo Header */}
                  <motion.div 
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1 }}
                    className="flex items-center gap-3 pb-6 mb-6 border-b border-primary/10"
                  >
                    <div className="relative">
                      <div className="absolute inset-0 bg-primary/20 rounded-full blur-md" />
                      <Image
                        src="/images/img-5438-removebg-preview.png"
                        alt="ASSAP Logo"
                        width={45}
                        height={45}
                        className="h-11 w-auto relative z-10"
                      />
                    </div>
                    <div>
                      <p className="font-bold text-base text-primary leading-tight">ASSAP</p>
                      <p className="text-[10px] text-muted-foreground uppercase tracking-wider">Company Limited</p>
                    </div>
                  </motion.div>

                  {/* Navigation Links */}
                  <nav className="flex flex-col gap-1 flex-1 overflow-y-auto">
                    {navigation.map((item, index) => (
                      <motion.div
                        key={item.name}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.1 + index * 0.05 }}
                      >
                        <Link
                          href={item.href}
                          onClick={() => setIsOpen(false)}
                          className={cn(
                            "relative flex items-center gap-3 text-sm font-medium py-3 px-4 rounded-lg transition-all duration-300 group overflow-hidden",
                            pathname === item.href 
                              ? "text-primary-foreground" 
                              : "text-foreground/80 hover:text-primary"
                          )}
                        >
                          {/* Active Background */}
                          {pathname === item.href && (
                            <motion.div
                              layoutId="activeNav"
                              className="absolute inset-0 bg-linear-to-r from-primary to-primary/80 rounded-lg"
                              transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                            />
                          )}
                          
                          {/* Hover Background */}
                          <div className="absolute inset-0 bg-primary/5 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity" />
                          
                          {/* Content */}
                          <span className="relative flex items-center gap-3 w-full">
                            <motion.span 
                              className={cn(
                                "w-1.5 h-1.5 rounded-full transition-all",
                                pathname === item.href ? "bg-primary-foreground scale-125" : "bg-muted-foreground/40 group-hover:bg-primary"
                              )}
                              whileHover={{ scale: 1.5 }}
                            />
                            <span className="relative">{item.name}</span>
                            {pathname === item.href && (
                              <motion.span
                                initial={{ width: 0 }}
                                animate={{ width: "auto" }}
                                className="ml-auto text-xs opacity-70"
                              >
                                •
                              </motion.span>
                            )}
                          </span>
                        </Link>
                      </motion.div>
                    ))}
                  </nav>

                  {/* CTA Button */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4 }}
                  >
                    <Button 
                      asChild 
                      className="w-full bg-linear-to-r from-accent to-accent/90 hover:from-accent/90 hover:to-accent text-accent-foreground font-semibold shadow-lg hover:shadow-xl transition-all duration-300 py-5 mb-5"
                    >
                      <Link href="/contact" onClick={() => setIsOpen(false)}>
                        <span>Request a Quote</span>
                        <motion.span
                          animate={{ x: [0, 4, 0] }}
                          transition={{ repeat: Infinity, duration: 1.5 }}
                          className="ml-2"
                        >
                          →
                        </motion.span>
                      </Link>
                    </Button>
                  </motion.div>

                  {/* Contact Info */}
                  <motion.div 
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.5 }}
                    className="pt-5 border-t border-primary/10 space-y-3"
                  >
                    <p className="text-[10px] font-semibold text-muted-foreground uppercase tracking-wider mb-3">Get in Touch</p>
                    <a
                      href="tel:+255788706592"
                      className="flex items-center gap-3 text-xs text-foreground/80 hover:text-primary transition-all duration-300 p-2 rounded-lg hover:bg-primary/5 group"
                    >
                      <div className="w-8 h-8 rounded-full bg-primary/10 group-hover:bg-primary/20 flex items-center justify-center transition-colors">
                        <Phone className="h-3.5 w-3.5 text-primary" />
                      </div>
                      <span className="text-xs">+255 788 706 592</span>
                    </a>
                    <a
                      href="mailto:info@assap.co.tz"
                      className="flex items-center gap-3 text-xs text-foreground/80 hover:text-primary transition-all duration-300 p-2 rounded-lg hover:bg-primary/5 group"
                    >
                      <div className="w-8 h-8 rounded-full bg-primary/10 group-hover:bg-primary/20 flex items-center justify-center transition-colors">
                        <Mail className="h-3.5 w-3.5 text-primary" />
                      </div>
                      <span className="text-xs">info@assap.co.tz</span>
                    </a>
                  </motion.div>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </nav>
      </header>
    </>
  )
}
