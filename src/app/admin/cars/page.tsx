"use client"

import { useState } from "react"
import { useCars } from "~/context/car-context"
import { type Car } from "~/components/car-card"
import { Button } from "~/components/ui/button"
import { Card } from "~/components/ui/card"
import { PlusCircle, Pencil, Trash2, ImagePlus } from "lucide-react"
import Image from "next/image"
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "~/components/ui/dialog"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "~/components/ui/tabs"

export default function AdminCarsPage() {
  const { cars, addCar, updateCar, deleteCar } = useCars()
  const [isDialogOpen, setIsDialogOpen] = useState(false)
  const [activeTab, setActiveTab] = useState("all")
  const [editingCar, setEditingCar] = useState<Car | null>(null)
  const [newCar, setNewCar] = useState<Partial<Car>>({
    name: "",
    model: "",
    brand: "",
    type: "Sedan",
    seats: 5,
    transmission: "Automatic",
    fuelType: "Gasoline",
    pricePerHour: 0,
    pricePerDay: 0,
    images: ["/placeholder-car.jpg"],
    status: "AVAILABLE",
  })
  const [carImages, setCarImages] = useState<string[]>([])
  const [uploadingImage, setUploadingImage] = useState(false)

  const resetCarForm = () => {
    setNewCar({
      name: "",
      model: "",
      brand: "",
      type: "Sedan",
      seats: 5,
      transmission: "Automatic",
      fuelType: "Gasoline",
      pricePerHour: 0,
      pricePerDay: 0,
      images: ["/placeholder-car.jpg"],
      status: "AVAILABLE",
    })
    setCarImages([])
    setEditingCar(null)
  }

  const openDialog = (car?: Car) => {
    if (car) {
      setEditingCar(car)
      setNewCar(car)
      setCarImages(car.images || [])
    } else {
      resetCarForm()
    }
    setIsDialogOpen(true)
  }

  const closeDialog = () => {
    setIsDialogOpen(false)
    resetCarForm()
  }

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (!file) return

    setUploadingImage(true)

    // In a real app, you would upload this to a cloud storage service
    // For this demo, we're creating a local blob URL
    const imageUrl = URL.createObjectURL(file)
    setCarImages([...carImages, imageUrl])
    setNewCar({ ...newCar, images: [...carImages, imageUrl] })
    setUploadingImage(false)
  }

  const removeImage = (index: number) => {
    const updatedImages = [...carImages]
    updatedImages.splice(index, 1)
    setCarImages(updatedImages)
    setNewCar({ ...newCar, images: updatedImages })
  }

  const saveCar = () => {
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

    if (editingCar) {
      updateCar({ ...newCar as Car, id: editingCar.id })
    } else {
      addCar({
        ...newCar as Car,
        id: Date.now().toString(),
        images: carImages.length > 0 ? carImages : ["/placeholder-car.jpg"],
      })
    }
    closeDialog()
  }

  const handleDeleteCar = (id: string) => {
    if (confirm("Are you sure you want to delete this car? This action cannot be undone.")) {
      deleteCar(id)
    }
  }

  const filteredCars = activeTab === "all" 
    ? cars 
    : cars.filter(car => 
        activeTab === "available" 
          ? car.status === "AVAILABLE" 
          : activeTab === "rented" 
            ? car.status === "RENTED" 
            : car.status === "MAINTENANCE"
      )

  return (
    <>
      <div className="mb-6 flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold">Cars Management</h1>
          <p className="text-muted-foreground">Add, edit or remove cars from your fleet</p>
        </div>
        <Button onClick={() => openDialog()} className="gap-2">
          <PlusCircle className="h-4 w-4" />
          Add New Car
        </Button>
      </div>
      
      <Tabs defaultValue="all" className="mb-6" onValueChange={setActiveTab}>
        <TabsList className="grid w-full max-w-md grid-cols-4">
          <TabsTrigger value="all">All Cars</TabsTrigger>
          <TabsTrigger value="available">Available</TabsTrigger>
          <TabsTrigger value="rented">Rented</TabsTrigger>
          <TabsTrigger value="maintenance">Maintenance</TabsTrigger>
        </TabsList>
      </Tabs>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {filteredCars.map((car) => (
          <Card key={car.id} className="overflow-hidden border-border/20 bg-[#1a1a1a]">
            <div className="relative h-48 w-full">
              <Image 
                src={car.images?.[0] || "/placeholder-car.jpg"} 
                alt={car.name} 
                fill 
                className="object-cover"
              />
              <div className="absolute bottom-2 right-2 flex gap-2">
                <Button 
                  size="icon" 
                  variant="secondary" 
                  className="h-8 w-8 rounded-full bg-black/60 hover:bg-black/80"
                  onClick={() => openDialog(car)}
                >
                  <Pencil className="h-4 w-4" />
                </Button>
                <Button 
                  size="icon" 
                  variant="destructive" 
                  className="h-8 w-8 rounded-full bg-black/60 hover:bg-red-600/80"
                  onClick={() => handleDeleteCar(car.id)}
                >
                  <Trash2 className="h-4 w-4" />
                </Button>
              </div>
              <div className="absolute left-2 top-2">
                <span className={`rounded-full px-2 py-1 text-xs font-semibold ${
                  car.status === "AVAILABLE" 
                    ? "bg-green-500/20 text-green-500" 
                    : car.status === "RENTED" 
                      ? "bg-blue-500/20 text-blue-500" 
                      : "bg-amber-500/20 text-amber-500"
                }`}>
                  {car.status}
                </span>
              </div>
            </div>
            <div className="p-4">
              <h3 className="text-lg font-semibold">{car.name}</h3>
              <p className="text-sm text-muted-foreground">{car.brand} {car.model}</p>
              <div className="mt-2 flex justify-between">
                <div>
                  <p className="text-sm text-muted-foreground">Hourly</p>
                  <p className="font-semibold">₹{car.pricePerHour}</p>
                </div>
                <div className="text-right">
                  <p className="text-sm text-muted-foreground">Daily</p>
                  <p className="font-semibold">₹{car.pricePerDay}</p>
                </div>
              </div>
            </div>
          </Card>
        ))}
      </div>

      {/* Car Form Dialog */}
      <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
        <DialogContent className="max-h-[90vh] max-w-4xl overflow-y-auto bg-[#1a1a1a] p-6">
          <DialogHeader>
            <DialogTitle>
              {editingCar ? "Edit Car" : "Add New Car"}
            </DialogTitle>
          </DialogHeader>
          
          <div className="mt-4 grid grid-cols-1 gap-6 md:grid-cols-2">
            <div className="space-y-4">
              <div>
                <label className="mb-1 block text-sm font-medium">Brand *</label>
                <input
                  type="text"
                  value={newCar.brand || ""}
                  onChange={(e) => setNewCar({ ...newCar, brand: e.target.value })}
                  className="w-full rounded-md border border-border/30 bg-[#242424] px-3 py-2 text-sm"
                  placeholder="e.g. Toyota"
                  required
                />
              </div>
              
              <div>
                <label className="mb-1 block text-sm font-medium">Model *</label>
                <input
                  type="text"
                  value={newCar.model || ""}
                  onChange={(e) => setNewCar({ ...newCar, model: e.target.value })}
                  className="w-full rounded-md border border-border/30 bg-[#242424] px-3 py-2 text-sm"
                  placeholder="e.g. Camry"
                  required
                />
              </div>
              
              <div>
                <label className="mb-1 block text-sm font-medium">Display Name *</label>
                <input
                  type="text"
                  value={newCar.name || ""}
                  onChange={(e) => setNewCar({ ...newCar, name: e.target.value })}
                  className="w-full rounded-md border border-border/30 bg-[#242424] px-3 py-2 text-sm"
                  placeholder="e.g. Toyota Camry"
                  required
                />
              </div>
              
              <div>
                <label className="mb-1 block text-sm font-medium">Car Type *</label>
                <select
                  value={newCar.type || ""}
                  onChange={(e) => setNewCar({ ...newCar, type: e.target.value })}
                  className="w-full rounded-md border border-border/30 bg-[#242424] px-3 py-2 text-sm"
                  required
                >
                  <option value="Sedan">Sedan</option>
                  <option value="SUV">SUV</option>
                  <option value="Electric">Electric</option>
                  <option value="Luxury">Luxury</option>
                  <option value="Sports">Sports</option>
                  <option value="Hatchback">Hatchback</option>
                </select>
              </div>
              
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="mb-1 block text-sm font-medium">Price Per Hour (₹) *</label>
                  <input
                    type="number"
                    value={newCar.pricePerHour || ""}
                    onChange={(e) => setNewCar({ ...newCar, pricePerHour: Number(e.target.value) })}
                    className="w-full rounded-md border border-border/30 bg-[#242424] px-3 py-2 text-sm"
                    placeholder="e.g. 1200"
                    min="0"
                    required
                  />
                </div>
                
                <div>
                  <label className="mb-1 block text-sm font-medium">Price Per Day (₹) *</label>
                  <input
                    type="number"
                    value={newCar.pricePerDay || ""}
                    onChange={(e) => setNewCar({ ...newCar, pricePerDay: Number(e.target.value) })}
                    className="w-full rounded-md border border-border/30 bg-[#242424] px-3 py-2 text-sm"
                    placeholder="e.g. 8500"
                    min="0"
                    required
                  />
                </div>
              </div>
            </div>
            
            <div className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="mb-1 block text-sm font-medium">Seats</label>
                  <input
                    type="number"
                    value={newCar.seats || 5}
                    onChange={(e) => setNewCar({ ...newCar, seats: Number(e.target.value) })}
                    className="w-full rounded-md border border-border/30 bg-[#242424] px-3 py-2 text-sm"
                    min="1"
                    max="10"
                  />
                </div>
                
                <div>
                  <label className="mb-1 block text-sm font-medium">Transmission</label>
                  <select
                    value={newCar.transmission || "Automatic"}
                    onChange={(e) => setNewCar({ ...newCar, transmission: e.target.value })}
                    className="w-full rounded-md border border-border/30 bg-[#242424] px-3 py-2 text-sm"
                  >
                    <option value="Automatic">Automatic</option>
                    <option value="Manual">Manual</option>
                  </select>
                </div>
              </div>
              
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="mb-1 block text-sm font-medium">Fuel Type</label>
                  <select
                    value={newCar.fuelType || "Gasoline"}
                    onChange={(e) => setNewCar({ ...newCar, fuelType: e.target.value })}
                    className="w-full rounded-md border border-border/30 bg-[#242424] px-3 py-2 text-sm"
                  >
                    <option value="Gasoline">Gasoline</option>
                    <option value="Diesel">Diesel</option>
                    <option value="Electric">Electric</option>
                    <option value="Hybrid">Hybrid</option>
                    <option value="CNG">CNG</option>
                  </select>
                </div>
                
                <div>
                  <label className="mb-1 block text-sm font-medium">Status</label>
                  <select
                    value={newCar.status || "AVAILABLE"}
                    onChange={(e) => setNewCar({ ...newCar, status: e.target.value as "AVAILABLE" | "RENTED" | "MAINTENANCE" })}
                    className="w-full rounded-md border border-border/30 bg-[#242424] px-3 py-2 text-sm"
                  >
                    <option value="AVAILABLE">Available</option>
                    <option value="RENTED">Rented</option>
                    <option value="MAINTENANCE">Maintenance</option>
                  </select>
                </div>
              </div>
              
              <div>
                <label className="mb-1 block text-sm font-medium">Car Images</label>
                <div className="mt-2 grid grid-cols-3 gap-2">
                  {carImages.map((image, index) => (
                    <div key={index} className="group relative h-24 overflow-hidden rounded-md">
                      <Image
                        src={image}
                        alt={`Car image ${index + 1}`}
                        fill
                        className="object-cover"
                      />
                      <button
                        type="button"
                        onClick={() => removeImage(index)}
                        className="absolute inset-0 flex items-center justify-center bg-black/60 opacity-0 transition-opacity group-hover:opacity-100"
                      >
                        <Trash2 className="h-5 w-5 text-red-500" />
                      </button>
                    </div>
                  ))}
                  
                  <label className="flex h-24 cursor-pointer items-center justify-center rounded-md border border-dashed border-border/30 bg-[#242424] transition-colors hover:border-border/60">
                    <input
                      type="file"
                      accept="image/*"
                      onChange={handleImageUpload}
                      className="hidden"
                    />
                    <div className="flex flex-col items-center">
                      <ImagePlus className="h-5 w-5 text-muted-foreground" />
                      <span className="mt-1 text-xs text-muted-foreground">Add Image</span>
                    </div>
                  </label>
                </div>
              </div>
            </div>
          </div>
          
          <div className="mt-6 flex justify-end gap-2">
            <Button variant="outline" onClick={closeDialog}>
              Cancel
            </Button>
            <Button onClick={saveCar}>
              {editingCar ? "Update Car" : "Add Car"}
            </Button>
    </div>
        </DialogContent>
      </Dialog>
    </>
  )
} 