"use client"

import { useState } from "react"
import { CarGrid } from "~/components/car-grid"
import { Layout } from "~/components/layout"
import { useCars } from "~/context/car-context"

export default function CarsPage() {
  const { cars } = useCars()
  const [filteredCars, setFilteredCars] = useState(cars)
  const [filters, setFilters] = useState({
    type: "",
    minPrice: "",
    maxPrice: "",
    seats: "",
    transmission: "",
    fuelType: "",
  })

  const handleFilterChange = (e: React.ChangeEvent<HTMLSelectElement | HTMLInputElement>) => {
    const { name, value } = e.target
    setFilters({ ...filters, [name]: value })
  }

  const applyFilters = () => {
    let filtered = cars

    if (filters.type) {
      filtered = filtered.filter(car => car.type === filters.type)
    }

    if (filters.minPrice) {
      filtered = filtered.filter(car => car.pricePerDay >= parseInt(filters.minPrice))
    }

    if (filters.maxPrice) {
      filtered = filtered.filter(car => car.pricePerDay <= parseInt(filters.maxPrice))
    }

    if (filters.seats) {
      filtered = filtered.filter(car => car.seats === parseInt(filters.seats))
    }

    if (filters.transmission) {
      filtered = filtered.filter(car => car.transmission === filters.transmission)
    }

    if (filters.fuelType) {
      filtered = filtered.filter(car => car.fuelType === filters.fuelType)
    }

    setFilteredCars(filtered)
  }

  const resetFilters = () => {
    setFilters({
      type: "",
      minPrice: "",
      maxPrice: "",
      seats: "",
      transmission: "",
      fuelType: "",
    })
    setFilteredCars(cars)
  }

  return (
    <Layout>
      <div className="container py-12">
        <h1 className="mb-8 text-3xl font-bold">Available Cars</h1>
        
        <div className="grid gap-8 md:grid-cols-4">
          <div className="md:col-span-1">
            <div className="rounded-xl border bg-card p-6 shadow-sm">
              <h2 className="mb-4 text-xl font-semibold">Filters</h2>
              <div className="space-y-4">
                <div>
                  <label htmlFor="type" className="mb-2 block text-sm font-medium">
                    Car Type
                  </label>
                  <select
                    id="type"
                    name="type"
                    value={filters.type}
                    onChange={handleFilterChange}
                    className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm"
                  >
                    <option value="">All Types</option>
                    <option value="Sedan">Sedan</option>
                    <option value="SUV">SUV</option>
                    <option value="Electric">Electric</option>
                    <option value="Luxury">Luxury</option>
                    <option value="Sports">Sports</option>
                  </select>
                </div>
                
                <div>
                  <label htmlFor="minPrice" className="mb-2 block text-sm font-medium">
                    Min Price (per day)
                  </label>
                  <input
                    type="number"
                    id="minPrice"
                    name="minPrice"
                    value={filters.minPrice}
                    onChange={handleFilterChange}
                    className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm"
                    placeholder="Min price"
                    min="0"
                  />
                </div>
                
                <div>
                  <label htmlFor="maxPrice" className="mb-2 block text-sm font-medium">
                    Max Price (per day)
                  </label>
                  <input
                    type="number"
                    id="maxPrice"
                    name="maxPrice"
                    value={filters.maxPrice}
                    onChange={handleFilterChange}
                    className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm"
                    placeholder="Max price"
                    min="0"
                  />
                </div>
                
                <div>
                  <label htmlFor="seats" className="mb-2 block text-sm font-medium">
                    Seats
                  </label>
                  <select
                    id="seats"
                    name="seats"
                    value={filters.seats}
                    onChange={handleFilterChange}
                    className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm"
                  >
                    <option value="">Any</option>
                    <option value="2">2</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                    <option value="7">7</option>
                  </select>
                </div>
                
                <div>
                  <label htmlFor="transmission" className="mb-2 block text-sm font-medium">
                    Transmission
                  </label>
                  <select
                    id="transmission"
                    name="transmission"
                    value={filters.transmission}
                    onChange={handleFilterChange}
                    className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm"
                  >
                    <option value="">Any</option>
                    <option value="Automatic">Automatic</option>
                    <option value="Manual">Manual</option>
                  </select>
                </div>
                
                <div>
                  <label htmlFor="fuelType" className="mb-2 block text-sm font-medium">
                    Fuel Type
                  </label>
                  <select
                    id="fuelType"
                    name="fuelType"
                    value={filters.fuelType}
                    onChange={handleFilterChange}
                    className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm"
                  >
                    <option value="">Any</option>
                    <option value="Gasoline">Gasoline</option>
                    <option value="Diesel">Diesel</option>
                    <option value="Electric">Electric</option>
                    <option value="Hybrid">Hybrid</option>
                  </select>
                </div>
                
                <div className="flex gap-2">
                  <button
                    onClick={applyFilters}
                    className="flex-1 rounded-md bg-primary px-3 py-2 text-sm font-medium text-primary-foreground"
                  >
                    Apply Filters
                  </button>
                  <button
                    onClick={resetFilters}
                    className="rounded-md border px-3 py-2 text-sm font-medium"
                  >
                    Reset
                  </button>
                </div>
              </div>
            </div>
          </div>
          
          <div className="md:col-span-3">
            <div className="mb-4 flex items-center justify-between">
              <p className="text-sm text-muted-foreground">
                Showing {filteredCars.length} cars
              </p>
              <select
                className="rounded-md border border-input bg-background px-3 py-2 text-sm"
                defaultValue="price-low"
              >
                <option value="price-low">Price: Low to High</option>
                <option value="price-high">Price: High to Low</option>
                <option value="newest">Newest First</option>
              </select>
            </div>
            
            <CarGrid cars={filteredCars} />
          </div>
        </div>
      </div>
    </Layout>
  )
} 