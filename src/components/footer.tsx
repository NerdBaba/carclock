"use client"

import Link from "next/link"
import { Clock, Car, Facebook, Twitter, Instagram, Mail, Phone, MapPin, LogIn } from "lucide-react"

export function Footer() {
  return (
    <footer className="border-t border-border/30 bg-primary">
      <div className="container mx-auto px-6 lg:px-8 py-12 md:py-16">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
          <div className="space-y-4">
            <Link href="/" className="flex items-center gap-2 text-xl font-bold">
              <div className="relative flex h-7 w-7 items-center justify-center rounded-full bg-secondary text-white">
                <Clock className="h-4 w-4" />
                <Car className="absolute h-2.5 w-2.5 translate-x-[1px] translate-y-[1px]" />
              </div>
              <span className="bg-gradient-to-r from-secondary to-accent bg-clip-text text-transparent">
                Car<span className="font-black">Clock</span>
              </span>
            </Link>
            <p className="text-sm font-medium text-foreground/70">
              The smarter way to rent a car. Convenient, affordable, and reliable car rentals on your schedule.
            </p>
            <div className="flex items-center gap-4">
              <a 
                href="https://facebook.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="rounded-full bg-muted/30 p-2 text-foreground/60 transition-colors hover:bg-secondary hover:text-white"
              >
                <Facebook className="h-4 w-4" />
              </a>
              <a 
                href="https://twitter.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="rounded-full bg-muted/30 p-2 text-foreground/60 transition-colors hover:bg-secondary hover:text-white"
              >
                <Twitter className="h-4 w-4" />
              </a>
              <a 
                href="https://instagram.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="rounded-full bg-muted/30 p-2 text-foreground/60 transition-colors hover:bg-secondary hover:text-white"
              >
                <Instagram className="h-4 w-4" />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="mb-4 text-lg font-bold tracking-wide text-foreground">Company</h3>
            <ul className="space-y-3 text-sm">
              <li>
                <Link href="/about" className="flex items-center gap-2 font-medium text-foreground/70 transition-colors hover:text-secondary">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/careers" className="flex items-center gap-2 font-medium text-foreground/70 transition-colors hover:text-secondary">
                  Careers
                </Link>
              </li>
              <li>
                <Link href="/blog" className="flex items-center gap-2 font-medium text-foreground/70 transition-colors hover:text-secondary">
                  Blog
                </Link>
              </li>
              <li>
                <Link href="/partners" className="flex items-center gap-2 font-medium text-foreground/70 transition-colors hover:text-secondary">
                  Partner With Us
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="mb-4 text-lg font-bold tracking-wide text-foreground">Support</h3>
            <ul className="space-y-3 text-sm">
              <li>
                <Link href="/help" className="flex items-center gap-2 font-medium text-foreground/70 transition-colors hover:text-secondary">
                  Help Center
                </Link>
              </li>
              <li>
                <Link href="/contact" className="flex items-center gap-2 font-medium text-foreground/70 transition-colors hover:text-secondary">
                  Contact Us
                </Link>
              </li>
              <li>
                <Link href="/faq" className="flex items-center gap-2 font-medium text-foreground/70 transition-colors hover:text-secondary">
                  FAQ
                </Link>
              </li>
              <li>
                <Link href="/accidents" className="flex items-center gap-2 font-medium text-foreground/70 transition-colors hover:text-secondary">
                  Accident Support
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="mb-4 text-lg font-bold tracking-wide text-foreground">Contact</h3>
            <ul className="space-y-3 text-sm">
              <li className="flex items-center gap-2 font-medium text-foreground/70">
                <Phone className="h-4 w-4 text-secondary" />
                <span>+91 98765 43210</span>
              </li>
              <li className="flex items-center gap-2 font-medium text-foreground/70">
                <Mail className="h-4 w-4 text-secondary" />
                <span>support@carclock.com</span>
              </li>
              <li className="flex items-start gap-2 font-medium text-foreground/70">
                <MapPin className="h-4 w-4 shrink-0 text-secondary" />
                <span>123 Rental Street, Bangalore, India 560001</span>
              </li>
            </ul>
            <div className="mt-6">
              <h4 className="mb-3 text-sm font-medium">Download Our App</h4>
              <div className="flex gap-3">
                <a 
                  href="#" 
                  className="inline-flex h-10 items-center justify-center rounded-md bg-primary px-4 text-xs font-medium text-white shadow transition-colors hover:bg-primary/90"
                >
                  App Store
                </a>
                <a 
                  href="#" 
                  className="inline-flex h-10 items-center justify-center rounded-md bg-primary px-4 text-xs font-medium text-white shadow transition-colors hover:bg-primary/90"
                >
                  Google Play
                </a>
              </div>
            </div>
          </div>
        </div>
        
        <div className="mt-12 border-t border-border/30 pt-6">
          <div className="flex flex-col justify-between gap-4 text-sm text-foreground md:flex-row md:items-center">
            <p className="font-medium">© {new Date().getFullYear()} CarClock. All rights reserved.</p>
            <div className="flex flex-wrap gap-6">
              <Link href="/terms" className="font-medium transition-colors hover:text-secondary">
                Terms
              </Link>
              <Link href="/privacy" className="font-medium transition-colors hover:text-secondary">
                Privacy
              </Link>
              <Link href="/cookies" className="font-medium transition-colors hover:text-secondary">
                Cookies
              </Link>
              <Link href="/sitemap" className="font-medium transition-colors hover:text-secondary">
                Sitemap
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
} 