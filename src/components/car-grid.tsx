"use client"

import { type Car, CarCard } from "./car-card"

interface CarGridProps {
  cars: Car[]
  onBook?: (carId: string) => void
}

export function CarGrid({ cars, onBook }: CarGridProps) {
  return (
    <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3">
      {cars.map((car) => (
        <CarCard key={car.id} car={car} onBook={onBook} />
      ))}
    </div>
  )
} 