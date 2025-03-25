"use client"

import Image from "next/image"
import Link from "next/link"
import { Button } from "./ui/button"
import { ChevronRight, Clock, Clock3 } from "lucide-react"
import { BlurredImage } from "./ui/blurred-image"

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-secondary/20 via-background/80 to-background py-16 md:py-24 lg:py-32">
      {/* Abstract background elements */}
      <div className="absolute -left-16 top-40 h-64 w-64 rounded-full bg-accent/20 blur-3xl"></div>
      <div className="absolute left-1/2 top-1/4 h-72 w-72 -translate-x-1/2 rounded-full bg-secondary/20 blur-3xl"></div>
      
      <div className="container mx-auto px-6 lg:px-8 relative">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <div className="space-y-8">
            <div className="inline-flex items-center gap-2 rounded-full bg-secondary/20 px-4 py-2 text-sm font-bold tracking-wide text-secondary">
              <Clock className="h-4 w-4" /> Rent by the hour, day, or week
            </div>
            
            <h1 className="text-4xl font-black tracking-tight md:text-5xl lg:text-6xl">
              Your time. Your ride.
              <span className="mt-2 block bg-gradient-to-r from-secondary via-secondary/80 to-accent bg-clip-text text-transparent">
                Car<span className="font-black">Clock</span> it.
              </span>
            </h1>
            
            <p className="text-xl font-medium text-foreground/80">
              Premium vehicles on your schedule. Flexible car rentals with hourly rates 
              and no hidden fees. The smarter way to rent a car.
            </p>
            
            <div className="flex flex-col gap-4 sm:flex-row">
              <Link href="/cars">
                <Button size="lg" className="w-full bg-secondary font-bold tracking-wide text-white shadow-lg shadow-secondary/20 hover:bg-secondary/80 sm:w-auto">
                  Browse Cars
                  <ChevronRight className="ml-1 h-4 w-4" />
                </Button>
              </Link>
              <Link href="/how-it-works">
                <Button size="lg" variant="outline" className="w-full border-secondary/50 font-bold tracking-wide text-secondary hover:bg-secondary/10 hover:text-secondary sm:w-auto">
                  How It Works
                </Button>
              </Link>
            </div>
            
            <div className="flex flex-wrap items-center gap-6 text-sm font-semibold text-foreground/70">
              <div className="flex items-center gap-1.5">
                <Clock3 className="h-4 w-4 text-secondary" />
                <span>Quick Bookings</span>
              </div>
              <div className="flex items-center gap-1.5">
                <Clock3 className="h-4 w-4 text-secondary" />
                <span>Hourly Pricing</span>
              </div>
              <div className="flex items-center gap-1.5">
                <Clock3 className="h-4 w-4 text-secondary" />
                <span>No Hidden Fees</span>
              </div>
            </div>
          </div>
          
          <div className="relative mx-auto w-full max-w-lg lg:mx-0">
            <div className="relative">
              <div className="absolute -top-6 -left-6 h-72 w-72 rounded-full bg-secondary/20 blur-3xl"></div>
              <div className="absolute -bottom-8 -right-8 h-72 w-72 rounded-full bg-accent/20 blur-3xl"></div>
              
              <div className="relative aspect-[4/3] overflow-hidden rounded-2xl shadow-xl shadow-black/30">
                <BlurredImage 
                  isBlurred={false}
                  blurAmount="blur-[2px]"
                  src="/cars/car-hero.jpg" 
                  alt="Luxury car rental" 
                  fill
                  className="object-cover"
                  priority
                />
              </div>
              
              <div className="absolute right-0 bottom-0 sm:-right-8 sm:-bottom-8 flex h-24 w-24 sm:h-28 sm:w-28 items-center justify-center rounded-full bg-secondary text-white shadow-lg shadow-secondary/30">
                <div className="text-center">
                  <p className="text-xs font-semibold">From only</p>
                  <p className="text-lg sm:text-xl font-black">₹599/hr</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
} 