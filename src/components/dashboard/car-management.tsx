"use client"

import { useState } from "react"
import Image from "next/image"
import { Button } from "~/components/ui/button"
import { type Car } from "~/components/car-card"
import { useCars } from "~/context/car-context"

// Helper function to format currency in INR
const formatINR = (amount: number) => {
  return new Intl.NumberFormat('en-IN', {
    style: 'currency',
    currency: 'INR',
    maximumFractionDigits: 0
  }).format(amount);
};

export function CarManagement() {
  const { cars, addCar, updateCar, deleteCar } = useCars()
  const [isAddingCar, setIsAddingCar] = useState(false)
  const [editingCarId, setEditingCarId] = useState<string | null>(null)
  const [newCar, setNewCar] = useState<Partial<Car>>({
    name: "",
    model: "",
    brand: "",
    type: "",
    seats: 5,
    transmission: "Automatic",
    fuelType: "Gasoline",
    pricePerHour: 0,
    pricePerDay: 0,
    images: ["/placeholder-car.jpg"],
    status: "AVAILABLE",
  })

  const handleAddCar = () => {
    if (
      !newCar.name ||
      !newCar.model ||
      !newCar.brand ||
      !newCar.type ||
      !newCar.pricePerHour ||
      !newCar.pricePerDay
    ) {
      alert("Please fill in all required fields")
      return
    }

    const carToAdd: Car = {
      ...newCar as Car,
      id: Date.now().toString(),
    }

    addCar(carToAdd)
    setNewCar({
      name: "",
      model: "",
      brand: "",
      type: "",
      seats: 5,
      transmission: "Automatic",
      fuelType: "Gasoline",
      pricePerHour: 0,
      pricePerDay: 0,
      images: ["/placeholder-car.jpg"],
      status: "AVAILABLE",
    })
    setIsAddingCar(false)
  }

  const handleUpdateCar = () => {
    if (!editingCarId) return

    updateCar({ ...newCar as Car, id: editingCarId })
    setEditingCarId(null)
    setNewCar({
      name: "",
      model: "",
      brand: "",
      type: "",
      seats: 5,
      transmission: "Automatic",
      fuelType: "Gasoline",
      pricePerHour: 0,
      pricePerDay: 0,
      images: ["/placeholder-car.jpg"],
      status: "AVAILABLE",
    })
  }

  const handleDeleteCar = (id: string) => {
    if (confirm("Are you sure you want to delete this car?")) {
      deleteCar(id)
    }
  }

  const handleEditCar = (car: Car) => {
    setEditingCarId(car.id)
    setNewCar({ ...car })
  }

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (!file) return

    // In a real app, you would upload this to a server/storage
    // For now, we'll create a local URL
    const imageUrl = URL.createObjectURL(file)
    setNewCar({ ...newCar, images: [imageUrl] })
  }

  return (
    <div className="rounded-xl border bg-card p-6 shadow-sm">
      <div className="mb-6 flex items-center justify-between">
        <h3 className="text-lg font-semibold">Car Management</h3>
        <Button onClick={() => setIsAddingCar(true)} disabled={isAddingCar || editingCarId !== null}>
          Add New Car
        </Button>
      </div>

      {(isAddingCar || editingCarId !== null) && (
        <div className="mb-6 rounded-lg border bg-card p-4 shadow-sm">
          <h4 className="mb-4 text-md font-medium">
            {editingCarId !== null ? "Edit Car" : "Add New Car"}
          </h4>
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
            <div>
              <label className="mb-1 block text-sm font-medium">Brand</label>
              <input
                type="text"
                value={newCar.brand}
                onChange={(e) => setNewCar({ ...newCar, brand: e.target.value })}
                className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm"
                placeholder="e.g. Toyota"
              />
            </div>
            <div>
              <label className="mb-1 block text-sm font-medium">Model</label>
              <input
                type="text"
                value={newCar.model}
                onChange={(e) => setNewCar({ ...newCar, model: e.target.value })}
                className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm"
                placeholder="e.g. Camry"
              />
            </div>
            <div>
              <label className="mb-1 block text-sm font-medium">Name</label>
              <input
                type="text"
                value={newCar.name}
                onChange={(e) => setNewCar({ ...newCar, name: e.target.value })}
                className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm"
                placeholder="e.g. Toyota Camry"
              />
            </div>
            <div>
              <label className="mb-1 block text-sm font-medium">Type</label>
              <select
                value={newCar.type}
                onChange={(e) => setNewCar({ ...newCar, type: e.target.value })}
                className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm"
              >
                <option value="">Select Type</option>
                <option value="Sedan">Sedan</option>
                <option value="SUV">SUV</option>
                <option value="Electric">Electric</option>
                <option value="Luxury">Luxury</option>
                <option value="Sports">Sports</option>
              </select>
            </div>
            <div>
              <label className="mb-1 block text-sm font-medium">Seats</label>
              <input
                type="number"
                value={newCar.seats}
                onChange={(e) => setNewCar({ ...newCar, seats: parseInt(e.target.value) })}
                className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm"
                min="1"
                max="10"
              />
            </div>
            <div>
              <label className="mb-1 block text-sm font-medium">Transmission</label>
              <select
                value={newCar.transmission}
                onChange={(e) => setNewCar({ ...newCar, transmission: e.target.value })}
                className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm"
              >
                <option value="Automatic">Automatic</option>
                <option value="Manual">Manual</option>
              </select>
            </div>
            <div>
              <label className="mb-1 block text-sm font-medium">Fuel Type</label>
              <select
                value={newCar.fuelType}
                onChange={(e) => setNewCar({ ...newCar, fuelType: e.target.value })}
                className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm"
              >
                <option value="Gasoline">Gasoline</option>
                <option value="Diesel">Diesel</option>
                <option value="Electric">Electric</option>
                <option value="Hybrid">Hybrid</option>
              </select>
            </div>
            <div>
              <label className="mb-1 block text-sm font-medium">Price Per Hour (₹)</label>
              <input
                type="number"
                value={newCar.pricePerHour}
                onChange={(e) => setNewCar({ ...newCar, pricePerHour: parseFloat(e.target.value) })}
                className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm"
                min="0"
                step="100"
              />
            </div>
            <div>
              <label className="mb-1 block text-sm font-medium">Price Per Day (₹)</label>
              <input
                type="number"
                value={newCar.pricePerDay}
                onChange={(e) => setNewCar({ ...newCar, pricePerDay: parseFloat(e.target.value) })}
                className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm"
                min="0"
                step="100"
              />
            </div>
            <div>
              <label className="mb-1 block text-sm font-medium">Status</label>
              <select
                value={newCar.status}
                onChange={(e) => setNewCar({ ...newCar, status: e.target.value as "AVAILABLE" | "RENTED" | "MAINTENANCE" })}
                className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm"
              >
                <option value="AVAILABLE">Available</option>
                <option value="RENTED">Rented</option>
                <option value="MAINTENANCE">Maintenance</option>
              </select>
            </div>
            <div>
              <label className="mb-1 block text-sm font-medium">Car Image</label>
              <input
                type="file"
                accept="image/*"
                onChange={handleImageUpload}
                className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm"
              />
              {newCar.images && newCar.images[0] && (
                <div className="mt-2 h-20 w-32 relative">
                  <Image
                    src={newCar.images[0]}
                    alt="Car preview"
                    fill
                    className="object-cover rounded-md"
                  />
                </div>
              )}
            </div>
          </div>
          <div className="mt-4 flex justify-end gap-2">
            <Button
              variant="outline"
              onClick={() => {
                setIsAddingCar(false)
                setEditingCarId(null)
                setNewCar({
                  name: "",
                  model: "",
                  brand: "",
                  type: "",
                  seats: 5,
                  transmission: "Automatic",
                  fuelType: "Gasoline",
                  pricePerHour: 0,
                  pricePerDay: 0,
                  images: ["/placeholder-car.jpg"],
                  status: "AVAILABLE",
                })
              }}
            >
              Cancel
            </Button>
            <Button onClick={editingCarId !== null ? handleUpdateCar : handleAddCar}>
              {editingCarId !== null ? "Update Car" : "Add Car"}
            </Button>
          </div>
        </div>
      )}

      <div className="overflow-x-auto">
        <table className="w-full border-collapse">
          <thead>
            <tr className="border-b">
              <th className="px-4 py-2 text-left text-sm font-medium">Image</th>
              <th className="px-4 py-2 text-left text-sm font-medium">Car</th>
              <th className="px-4 py-2 text-left text-sm font-medium">Type</th>
              <th className="px-4 py-2 text-left text-sm font-medium">Seats</th>
              <th className="px-4 py-2 text-left text-sm font-medium">Price/Hour</th>
              <th className="px-4 py-2 text-left text-sm font-medium">Price/Day</th>
              <th className="px-4 py-2 text-left text-sm font-medium">Status</th>
              <th className="px-4 py-2 text-left text-sm font-medium">Actions</th>
            </tr>
          </thead>
          <tbody>
            {cars.map((car) => (
              <tr key={car.id} className="border-b">
                <td className="px-4 py-2">
                  <div className="h-12 w-16 relative">
                    <Image
                      src={car.images[0] ?? "/placeholder-car.jpg"}
                      alt={car.name}
                      fill
                      className="object-cover rounded-md"
                    />
                  </div>
                </td>
                <td className="px-4 py-2">
                  <div>
                    <div className="font-medium">{car.brand} {car.model}</div>
                    <div className="text-xs text-muted-foreground">{car.name}</div>
                  </div>
                </td>
                <td className="px-4 py-2">{car.type}</td>
                <td className="px-4 py-2">{car.seats}</td>
                <td className="px-4 py-2">{formatINR(car.pricePerHour)}</td>
                <td className="px-4 py-2">{formatINR(car.pricePerDay)}</td>
                <td className="px-4 py-2">
                  <span className={`inline-block rounded-full px-2 py-1 text-xs ${
                    car.status === "AVAILABLE" 
                      ? "bg-green-100 text-green-800" 
                      : car.status === "RENTED" 
                      ? "bg-blue-100 text-blue-800" 
                      : "bg-yellow-100 text-yellow-800"
                  }`}>
                    {car.status}
                  </span>
                </td>
                <td className="px-4 py-2">
                  <div className="flex gap-2">
                    <Button 
                      variant="outline" 
                      size="sm" 
                      onClick={() => handleEditCar(car)}
                      disabled={isAddingCar || editingCarId !== null}
                    >
                      Edit
                    </Button>
                    <Button 
                      variant="destructive" 
                      size="sm" 
                      onClick={() => handleDeleteCar(car.id)}
                      disabled={isAddingCar || editingCarId !== null}
                    >
                      Delete
                    </Button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
} 