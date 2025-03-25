"use client"

import Image from "next/image"
import { Calendar, Clock, Fuel, GitFork, Users, ShieldCheck, Map, Star } from "lucide-react"
import { Button } from "./ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "./ui/card"
import { Badge } from "./ui/badge"
import { BlurredImage } from "./ui/blurred-image"
import { useState } from "react"
import { Dialog, DialogContent } from "./ui/dialog"
import { ImageCarousel } from "./ui/image-carousel"

// Define our own Car interface for the component
export interface Car {
  id: string
  name: string
  model: string
  brand: string
  type: string
  seats: number
  transmission: string
  fuelType: string
  pricePerHour: number
  pricePerDay: number
  images: string[]
  status: "AVAILABLE" | "RENTED" | "MAINTENANCE"
  rating?: number
}

interface CarCardProps {
  car: Car
  onBook?: (carId: string) => void
}

// Helper function to format currency in INR
const formatINR = (amount: number) => {
  return new Intl.NumberFormat('en-IN', {
    style: 'currency',
    currency: 'INR',
    maximumFractionDigits: 0
  }).format(amount);
};

export function CarCard({ car, onBook }: CarCardProps) {
  // Default rating if not provided
  const rating = car.rating ?? 4.5;
  const [showGallery, setShowGallery] = useState(false);
  
  return (
    <>
      <Card className="group h-full overflow-hidden transition-all hover:shadow-lg hover:shadow-secondary/10">
        <div 
          className="relative h-52 w-full overflow-hidden sm:h-56 cursor-pointer" 
          onClick={() => setShowGallery(true)}
        >
          {/* Status Badge */}
          <div className="absolute left-3 top-3 z-10">
            {car.status === "AVAILABLE" ? (
              <Badge className="bg-secondary text-white font-semibold hover:bg-secondary/80">Available</Badge>
            ) : car.status === "RENTED" ? (
              <Badge className="bg-accent text-white font-semibold hover:bg-accent/80">Rented</Badge>
            ) : (
              <Badge variant="outline" className="border-amber-500 bg-black/40 text-amber-400 font-semibold backdrop-blur-sm">Maintenance</Badge>
            )}
          </div>
          
          {/* Type Badge */}
          <div className="absolute right-3 top-3 z-10">
            <Badge variant="outline" className="border-white/30 bg-black/60 text-white font-semibold backdrop-blur-sm">
              {car.type}
            </Badge>
          </div>
          
          <BlurredImage
            isBlurred={false}
            src={car.images[0] ?? "/placeholder-car.jpg"}
            alt={`${car.brand} ${car.model}`}
            fill
            className="object-cover object-center transition-all duration-700 group-hover:scale-110"
          />
        </div>
        
        <CardHeader className="pb-2 pt-4">
          <div className="flex justify-between">
            <div>
              <CardTitle className="text-lg font-extrabold tracking-tight">{car.brand} {car.model}</CardTitle>
              
              {/* Rating */}
              <div className="mt-2 flex items-center gap-1">
                {[...Array(5)].map((_, i) => (
                  <Star 
                    key={i} 
                    className={`h-3 w-3 ${i < Math.floor(rating) ? 'fill-accent text-accent' : 'fill-gray-700 text-gray-700'}`} 
                  />
                ))}
                <span className="ml-1 text-xs font-medium text-muted-foreground">{rating.toFixed(1)}</span>
              </div>
            </div>
            
            <div className="text-right">
              <div className="text-lg font-extrabold text-secondary">
                {formatINR(car.pricePerHour)}
                <span className="text-xs font-bold text-muted-foreground">/hr</span>
              </div>
              <div className="text-xs font-medium text-muted-foreground">
                {formatINR(car.pricePerDay)}/day
              </div>
            </div>
          </div>
        </CardHeader>
        
        <CardContent className="pb-3 pt-0">
          {/* Fix the overlapping issue by adding grid layout with better spacing */}
          <div className="grid grid-cols-1 gap-y-2 sm:grid-cols-2">
            <div className="flex items-center gap-1.5 text-xs font-medium">
              <Users className="h-3.5 w-3.5 text-secondary flex-shrink-0" />
              <span className="truncate">{car.seats} seats</span>
            </div>
            <div className="flex items-center gap-1.5 text-xs font-medium">
              <GitFork className="h-3.5 w-3.5 text-secondary flex-shrink-0" />
              <span className="truncate">{car.transmission}</span>
            </div>
            <div className="flex items-center gap-1.5 text-xs font-medium">
              <Fuel className="h-3.5 w-3.5 text-secondary flex-shrink-0" />
              <span className="truncate">{car.fuelType}</span>
            </div>
            <div className="flex items-center gap-1.5 text-xs font-medium">
              <ShieldCheck className="h-3.5 w-3.5 text-secondary flex-shrink-0" />
              <span className="truncate">Insured</span>
            </div>
          </div>
        </CardContent>
        
        <CardFooter className="border-t border-border/20 bg-muted/80 p-3">
          <div className="grid w-full gap-2 sm:grid-cols-2">
            <Button 
              variant="outline" 
              className="h-9 border-border/50 text-xs font-semibold tracking-wide hover:border-secondary/70 hover:bg-secondary/10 hover:text-secondary" 
              onClick={() => onBook?.(car.id)}
              disabled={car.status !== "AVAILABLE"}
            >
              <Calendar className="mr-1.5 h-3.5 w-3.5" />
              Book by Day
            </Button>
            <Button 
              className="h-9 bg-secondary text-xs font-semibold tracking-wide text-white shadow-md hover:bg-secondary/80 hover:shadow-secondary/20" 
              onClick={() => onBook?.(car.id)}
              disabled={car.status !== "AVAILABLE"}
            >
              <Clock className="mr-1.5 h-3.5 w-3.5" />
              Book by Hour
            </Button>
          </div>
        </CardFooter>
      </Card>

      {/* Full Screen Image Carousel */}
      <ImageCarousel 
        images={car.images.length ? car.images : ["/placeholder-car.jpg"]}
        alt={`${car.brand} ${car.model}`}
        open={showGallery}
        onOpenChange={setShowGallery}
      />
    </>
  )
} 