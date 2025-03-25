"use client"

import { createContext, useContext, useState, useEffect, ReactNode } from "react"
import { type Car } from "~/components/car-card"

// Initial cars data
const initialCars: Car[] = [
  {
    id: "1",
    name: "Toyota Camry",
    model: "Camry",
    brand: "Toyota",
    type: "Sedan",
    seats: 5,
    transmission: "Automatic",
    fuelType: "Gasoline",
    pricePerHour: 1200,
    pricePerDay: 8500,
    images: [
      "/cars/toyota-camry.jpg",
      "/cars/toyota-camry-interior.jpg",
      "/cars/toyota-camry-side.jpg",
      "/cars/toyota-camry-back.jpg"
    ],
    status: "AVAILABLE",
    rating: 4.8
  },
  {
    id: "2",
    name: "Honda CR-V",
    model: "CR-V",
    brand: "Honda",
    type: "SUV",
    seats: 5,
    transmission: "Automatic",
    fuelType: "Gasoline",
    pricePerHour: 1500,
    pricePerDay: 12000,
    images: [
      "/cars/honda-crv.jpg",
      "/cars/honda-crv-interior.jpg",
      "/cars/honda-crv-side.jpg"
    ],
    status: "AVAILABLE",
    rating: 4.6
  },
  {
    id: "3",
    name: "Tesla Model 3",
    model: "Model 3",
    brand: "Tesla",
    type: "Electric",
    seats: 5,
    transmission: "Automatic",
    fuelType: "Electric",
    pricePerHour: 2000,
    pricePerDay: 16000,
    images: [
      "/cars/tesla-model3.jpg",
      "/cars/tesla-model3-interior.jpg",
      "/cars/tesla-model3-side.jpg"
    ],
    status: "AVAILABLE",
    rating: 4.9
  },
  {
    id: "4",
    name: "BMW 5 Series",
    model: "5 Series",
    brand: "BMW",
    type: "Luxury",
    seats: 5,
    transmission: "Automatic",
    fuelType: "Gasoline",
    pricePerHour: 2500,
    pricePerDay: 20000,
    images: [
      "/cars/bmw-5series.jpg",
      "/cars/bmw-5series-interior.jpg",
      "/cars/bmw-5series-side.jpg"
    ],
    status: "MAINTENANCE",
    rating: 4.7
  },
]

interface CarContextType {
  cars: Car[]
  addCar: (car: Car) => void
  updateCar: (car: Car) => void
  deleteCar: (id: string) => void
  resetToInitialData: () => void
}

const CarContext = createContext<CarContextType | undefined>(undefined)

// Helper for localStorage with SSR safety
const getStorageData = (key: string, defaultValue: Car[]): Car[] => {
  if (typeof window !== "undefined") {
    const stored = localStorage.getItem(key)
    if (stored !== null) {
      try {
        return JSON.parse(stored)
      } catch (error) {
        console.error("Error parsing stored data:", error)
        return defaultValue
      }
    }
  }
  return defaultValue
}

export function CarProvider({ children }: { children: ReactNode }) {
  // Initialize state with data from localStorage or fallback to initialCars
  const [cars, setCars] = useState<Car[]>(() => getStorageData("wiseCars", initialCars))

  // Save to localStorage whenever data changes
  useEffect(() => {
    if (typeof window !== "undefined") {
      localStorage.setItem("wiseCars", JSON.stringify(cars))
    }
  }, [cars])

  const addCar = (car: Car) => {
    setCars((prevCars) => {
      const newCars = [...prevCars, car]
      return newCars
    })
  }

  const updateCar = (updatedCar: Car) => {
    setCars((prevCars) => {
      const newCars = prevCars.map((car) => 
        car.id === updatedCar.id ? updatedCar : car
      )
      return newCars
    })
  }

  const deleteCar = (id: string) => {
    setCars((prevCars) => {
      const newCars = prevCars.filter((car) => car.id !== id)
      return newCars
    })
  }

  const resetToInitialData = () => {
    setCars(initialCars)
  }

  return (
    <CarContext.Provider value={{ cars, addCar, updateCar, deleteCar, resetToInitialData }}>
      {children}
    </CarContext.Provider>
  )
}

export function useCars() {
  const context = useContext(CarContext)
  if (context === undefined) {
    throw new Error("useCars must be used within a CarProvider")
  }
  return context
} 