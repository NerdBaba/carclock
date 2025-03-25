"use client"

import { useEffect, useState } from "react"
import { ChevronRight, Clock, Star, Shield, CreditCard } from "lucide-react"
import Link from "next/link"
import { type Car } from "~/components/car-card"
import { CarGrid } from "~/components/car-grid"
import { CarSearch } from "~/components/car-search"
import { Features } from "~/components/features"
import { Hero } from "~/components/hero"
import { Layout } from "~/components/layout"
import { Button } from "~/components/ui/button"
import { useCars } from "~/context/car-context"

export default function HomePage() {
  const { cars } = useCars()
  const [featuredCars, setFeaturedCars] = useState<Car[]>([])

  // Get 4 random available cars for the featured section
  useEffect(() => {
    const availableCars = cars.filter(car => car.status === "AVAILABLE")
    const randomCars = [...availableCars]
      .sort(() => 0.5 - Math.random())
      .slice(0, 4)
    
    setFeaturedCars(randomCars)
  }, [cars])

  return (
    <Layout>
      <Hero />
      
      {/* Featured Cars with Search Section */}
      <div className="container mx-auto px-6 lg:px-8 py-16 md:py-24">
        <div className="grid gap-10 md:grid-cols-3">
          <div className="md:col-span-1">
            <div className="sticky top-20 rounded-xl border border-border/30 bg-primary/50 p-6 shadow-md backdrop-blur-sm">
              <h2 className="mb-6 text-xl font-extrabold tracking-tight">Find Your Perfect Ride</h2>
              <CarSearch />
            </div>
          </div>
          <div className="md:col-span-2">
            <div className="flex items-center justify-between">
              <h2 className="mb-8 text-2xl font-black tracking-tight">Featured Cars</h2>
              <Link href="/cars" className="text-sm font-semibold text-secondary hover:text-secondary/hover">
                View all cars
              </Link>
            </div>
            <CarGrid cars={featuredCars} />
          </div>
        </div>
      </div>
      
      <Features />
      
      {/* Call to Action */}
      <section className="bg-gradient-to-r from-secondary to-accent py-16 md:py-20">
        <div className="container mx-auto px-6 lg:px-8 text-center">
          <h2 className="mb-4 text-3xl font-bold text-white">Ready to hit the road?</h2>
          <p className="mx-auto mb-8 max-w-2xl text-white/90">
            Join thousands of satisfied customers who choose CarClock for their car rental needs.
            Sign up today and get your first hour free!
          </p>
          <div className="flex flex-col justify-center gap-4 sm:flex-row">
            <Link href="/register">
              <Button size="lg" className="w-full bg-white text-secondary hover:bg-white/90 sm:w-auto">
                Sign Up Now
                <ChevronRight className="ml-1 h-4 w-4" />
              </Button>
            </Link>
            <Link href="/cars">
              <Button 
                size="lg" 
                variant="outline" 
                className="w-full border-white text-white hover:bg-white/10 sm:w-auto"
              >
                Browse Cars
              </Button>
            </Link>
          </div>
          
          <div className="mt-12 flex flex-wrap items-center justify-center gap-6">
            <div className="flex items-center gap-2">
              <Star className="h-5 w-5 text-white" />
              <span className="text-sm font-medium text-white">4.9/5 from 500+ reviews</span>
            </div>
            <div className="flex items-center gap-2">
              <Shield className="h-5 w-5 text-white" />
              <span className="text-sm font-medium text-white">Fully insured vehicles</span>
            </div>
            <div className="flex items-center gap-2">
              <CreditCard className="h-5 w-5 text-white" />
              <span className="text-sm font-medium text-white">Secure payment</span>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  )
}
