"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { 
  Menu, X, Car, MapPin, Info, User, 
  BookOpen, LogIn, Clock, CreditCard, Shield
} from "lucide-react"
import { Button } from "./ui/button"
import { Sheet, SheetContent, SheetTrigger } from "./ui/sheet"
import { cn } from "~/lib/utils"
import { GeistSans } from "geist/font/sans"

interface MobileNavItem {
  href: string;
  label: string;
  icon: React.ReactNode;
}

const mainNavItems: MobileNavItem[] = [
  {
    href: "/cars",
    label: "Browse Cars",
    icon: <Car className="h-5 w-5" />
  },
  {
    href: "/locations",
    label: "Locations",
    icon: <MapPin className="h-5 w-5" />
  },
  {
    href: "/how-it-works",
    label: "How It Works",
    icon: <Info className="h-5 w-5" />
  }
]

const accountItems: MobileNavItem[] = [
  {
    href: "/bookings",
    label: "My Bookings",
    icon: <BookOpen className="h-5 w-5" />
  },
  {
    href: "/profile",
    label: "Profile",
    icon: <User className="h-5 w-5" />
  }
]

export function MobileSidebar() {
  const [isAdmin, setIsAdmin] = useState(false)
  const [isOpen, setIsOpen] = useState(false)
  
  useEffect(() => {
    // Check if user is authenticated as admin
    const adminAuth = localStorage.getItem("adminAuthenticated") === "true"
    setIsAdmin(adminAuth)
  }, [])

  const NavItem = ({ item }: { item: MobileNavItem }) => (
    <Link 
      href={item.href}
      className="flex items-center gap-3 rounded-lg px-3 py-2 text-sm transition-colors hover:bg-secondary/10 hover:text-secondary"
      onClick={() => setIsOpen(false)}
    >
      <div className="text-secondary">{item.icon}</div>
      <span>{item.label}</span>
    </Link>
  )

  return (
    <Sheet open={isOpen} onOpenChange={setIsOpen}>
      <SheetTrigger asChild>
        <Button variant="ghost" size="icon" className="md:hidden">
          <Menu className="h-6 w-6" />
          <span className="sr-only">Toggle menu</span>
        </Button>
      </SheetTrigger>
      <SheetContent side="left" className="flex w-full max-w-xs flex-col border-r border-border/30 bg-background p-0">
        <div className="flex items-center justify-between border-b border-border/30 px-6 py-4">
          <Link href="/" className={`flex items-center gap-2 text-xl font-bold ${GeistSans.className}`} onClick={() => setIsOpen(false)}>
            <div className="relative flex h-8 w-8 items-center justify-center rounded-full bg-secondary text-white">
              <Clock className="h-5 w-5" />
              <Car className="absolute h-3 w-3 translate-x-[1px] translate-y-[1px]" />
            </div>
            <span className="bg-gradient-to-r from-secondary to-accent bg-clip-text text-transparent">
              Car<span className="font-black">Clock</span>
            </span>
          </Link>
          <Button variant="ghost" size="icon" onClick={() => setIsOpen(false)}>
            <X className="h-5 w-5" />
            <span className="sr-only">Close</span>
          </Button>
        </div>

        <div className="flex flex-1 flex-col gap-6 overflow-auto p-6">
          {/* Main Navigation */}
          <div className="space-y-1">
            <h3 className="mb-2 px-3 text-xs font-medium uppercase tracking-wider text-muted-foreground">
              Navigation
            </h3>
            {mainNavItems.map((item) => (
              <NavItem key={item.href} item={item} />
            ))}
            {isAdmin && (
              <Link 
                href="/admin" 
                className="flex items-center gap-3 rounded-lg px-3 py-2 text-sm transition-colors hover:bg-secondary/10 hover:text-secondary"
                onClick={() => setIsOpen(false)}
              >
                <div className="text-secondary"><User className="h-5 w-5" /></div>
                <span>Admin Panel</span>
              </Link>
            )}
          </div>

          {/* Account */}
          <div className="space-y-1">
            <h3 className="mb-2 px-3 text-xs font-medium uppercase tracking-wider text-muted-foreground">
              Account
            </h3>
            {accountItems.map((item) => (
              <NavItem key={item.href} item={item} />
            ))}
          </div>
        </div>

        <div className="border-t border-border/30 p-6">
          <Link href="/login" onClick={() => setIsOpen(false)}>
            <Button className="w-full bg-secondary text-white hover:bg-secondary/80">
              <LogIn className="mr-2 h-4 w-4" />
              Sign In
            </Button>
          </Link>
        </div>
      </SheetContent>
    </Sheet>
  )
} 