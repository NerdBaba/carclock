"use client"

import { Clock, MapPin, Building, Car } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { Button } from "~/components/ui/button"
import { Card, CardContent } from "~/components/ui/card"
import { Layout } from "~/components/layout"

const locations = [
  {
    id: "1",
    name: "Bangalore Central",
    address: "MG Road, Bangalore, Karnataka",
    description: "Prime location in the heart of Bangalore's business district",
    image: "/locations/bangalore.jpg",
    cars: 12,
    popular: true,
  },
  {
    id: "2",
    name: "Mumbai Airport",
    address: "Terminal 2, Mumbai International Airport, Mumbai",
    description: "Convenient pickup and drop-off at Mumbai's international terminal",
    image: "/locations/mumbai.jpg",
    cars: 15,
    popular: true,
  },
  {
    id: "3",
    name: "Delhi Hub",
    address: "Connaught Place, New Delhi",
    description: "Central Delhi location with easy metro access",
    image: "/locations/delhi.jpg",
    cars: 10,
    popular: true,
  },
  {
    id: "4",
    name: "Chennai City",
    address: "Anna Nagar, Chennai, Tamil Nadu",
    description: "Located in upscale Anna Nagar with 24/7 service",
    image: "/locations/chennai.jpg",
    cars: 8,
    popular: false,
  },
  {
    id: "5",
    name: "Hyderabad Tech Park",
    address: "HITEC City, Hyderabad, Telangana",
    description: "Located near major tech companies and IT parks",
    image: "/locations/hyderabad.jpg",
    cars: 9,
    popular: true,
  },
  {
    id: "6",
    name: "Pune University",
    address: "Shivaji Nagar, Pune, Maharashtra",
    description: "Convenient location near Pune University and tech parks",
    image: "/locations/pune.jpg",
    cars: 7,
    popular: false,
  },
]

export default function LocationsPage() {
  return (
    <Layout>
      <main className="relative">
        {/* Hero section with gradient background */}
        <section className="relative overflow-hidden bg-gradient-to-b from-secondary/20 via-background/80 to-background pb-8 pt-24 md:pb-12 md:pt-32">
          {/* Abstract background elements */}
          <div className="absolute -left-16 top-40 h-64 w-64 rounded-full bg-accent/20 blur-3xl"></div>
          <div className="absolute right-0 top-1/4 h-72 w-72 rounded-full bg-secondary/20 blur-3xl"></div>
          
          <div className="container mx-auto relative">
            <div className="max-w-3xl mx-auto text-center mb-12">
              <div className="inline-flex items-center gap-2 rounded-full bg-secondary/20 px-4 py-2 text-sm font-bold tracking-wide text-secondary mb-6">
                <MapPin className="h-4 w-4" /> Multiple locations across India
              </div>
              
              <h1 className="text-4xl font-black tracking-tight md:text-5xl">
                Our Convenient
                <span className="mt-2 block bg-gradient-to-r from-secondary via-secondary/80 to-accent bg-clip-text text-transparent">
                  Pickup Locations
                </span>
              </h1>
              
              <p className="mt-6 text-xl font-medium text-foreground/80">
                Find our car rental locations throughout major Indian cities. Convenient pickup and drop-off points designed for your ease.
              </p>
            </div>
          </div>
        </section>
        
        {/* Locations grid */}
        <section className="container mx-auto px-4 py-16">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {locations.map((location) => (
              <Card key={location.id} className="overflow-hidden group hover:shadow-lg hover:shadow-secondary/10 transition-all">
                <div className="relative h-48 bg-gradient-to-br from-secondary/30 to-accent/10">
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent z-10"></div>
                  {location.popular && (
                    <div className="absolute top-3 right-3 z-10">
                      <span className="bg-secondary/90 text-white text-xs px-2 py-1 rounded-full font-medium">
                        Popular
                      </span>
                    </div>
                  )}
                  <div className="absolute bottom-3 left-3 right-3 z-10">
                    <h3 className="text-white text-xl font-bold">{location.name}</h3>
                    <p className="text-white/80 text-sm flex items-center gap-1 mt-1">
                      <MapPin className="h-3 w-3" /> {location.address}
                    </p>
                  </div>
                </div>
                <CardContent className="p-4">
                  <p className="text-sm text-foreground/70 mb-4">
                    {location.description}
                  </p>
                  <div className="flex items-center justify-between">
                    <span className="flex items-center gap-1.5 text-sm font-medium">
                      <Car className="h-4 w-4 text-secondary" />
                      {location.cars} cars available
                    </span>
                    <Link href={`/cars?location=${location.id}`}>
                      <Button variant="outline" size="sm" className="border-secondary/50 text-secondary hover:bg-secondary/10">
                        Browse Cars
                      </Button>
                    </Link>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>
        
        {/* Call to action */}
        <section className="bg-gradient-to-r from-secondary/10 via-secondary/5 to-transparent py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl font-bold mb-6">Need a custom pickup location?</h2>
              <p className="text-lg text-foreground/70 mb-8">
                We offer flexible pickup options at your convenience. Contact us to arrange a custom location.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" className="bg-secondary text-white">
                  Contact Us
                </Button>
                <Button size="lg" variant="outline" className="border-secondary/50 text-secondary hover:bg-secondary/10">
                  View All Locations
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>
    </Layout>
  )
} 