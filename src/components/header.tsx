"use client"

import { useEffect, useState } from "react"
import Link from "next/link"
import { Car, MapPin, Info, User, BookOpen, LogIn, Clock } from "lucide-react"
import { Button } from "./ui/button"
import { MobileSidebar } from "./mobile-sidebar"
import { GeistSans } from "geist/font/sans"

export function Header() {
  const [isAdmin, setIsAdmin] = useState(false)
  
  useEffect(() => {
    // Check if user is authenticated as admin
    const adminAuth = localStorage.getItem("adminAuthenticated") === "true"
    setIsAdmin(adminAuth)
  }, [])

  return (
    <header className="sticky top-0 z-50 border-b border-border/30 bg-background/80 backdrop-blur-md">
      <div className="container mx-auto px-6 lg:px-8 flex h-16 items-center justify-between">
        <div className="flex items-center gap-6">
          <Link href="/" className={`flex items-center gap-2 text-2xl font-bold ${GeistSans.className}`}>
            <div className="relative flex h-8 w-8 items-center justify-center rounded-full bg-secondary text-white">
              <Clock className="h-5 w-5" />
              <Car className="absolute h-3 w-3 translate-x-[1px] translate-y-[1px]" />
            </div>
            <span className="bg-gradient-to-r from-secondary to-accent bg-clip-text text-transparent">
              Car<span className="font-black">Clock</span>
            </span>
          </Link>

          <nav className="hidden md:flex">
            <ul className={`flex gap-6 ${GeistSans.className}`}>
              <li>
                <Link 
                  href="/cars" 
                  className="flex items-center gap-1.5 text-sm font-semibold tracking-wide transition-colors hover:text-secondary"
                >
                  <Car className="h-4 w-4" />
                  Browse Cars
                </Link>
              </li>
              <li>
                <Link 
                  href="/locations" 
                  className="flex items-center gap-1.5 text-sm font-semibold tracking-wide transition-colors hover:text-secondary"
                >
                  <MapPin className="h-4 w-4" />
                  Locations
                </Link>
              </li>
              <li>
                <Link 
                  href="/how-it-works" 
                  className="flex items-center gap-1.5 text-sm font-semibold tracking-wide transition-colors hover:text-secondary"
                >
                  <Info className="h-4 w-4" />
                  How It Works
                </Link>
              </li>
              {isAdmin && (
                <li>
                  <Link 
                    href="/admin" 
                    className="flex items-center gap-1.5 text-sm font-semibold tracking-wide transition-colors hover:text-secondary"
                  >
                    <User className="h-4 w-4" />
                    Admin Panel
                  </Link>
                </li>
              )}
            </ul>
          </nav>
        </div>
        
        {/* Desktop Buttons */}
        <div className="hidden items-center gap-4 md:flex">
          <Link href="/bookings">
            <Button variant="ghost" size="sm" className="flex items-center gap-1.5 text-foreground hover:text-secondary">
              <BookOpen className="h-4 w-4" />
              My Bookings
            </Button>
          </Link>
          <Link href="/profile">
            <Button variant="outline" size="sm" className="flex items-center gap-1.5 border-border/50 hover:border-secondary hover:text-secondary">
              <User className="h-4 w-4" />
              Profile
            </Button>
          </Link>
          <Link href="/login">
            <Button size="sm" className="flex items-center gap-1.5 bg-secondary font-semibold text-white hover:bg-secondary/80">
              <LogIn className="h-4 w-4" />
              Sign In
            </Button>
          </Link>
        </div>

        {/* Mobile Sidebar */}
        <MobileSidebar />
      </div>
    </header>
  )
} 