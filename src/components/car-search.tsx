"use client"

import { Button } from "./ui/button"
import { Search } from "lucide-react"

export function CarSearch() {
  return (
    <div className="space-y-4">
      <div>
        <label htmlFor="location" className="mb-2 block text-sm font-medium">
          Location
        </label>
        <select
          id="location"
          className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus:outline-none focus:ring-2 focus:ring-secondary focus:ring-offset-2"
        >
          <option value="">Select a location</option>
          <option value="bangalore">Bangalore</option>
          <option value="mumbai">Mumbai</option>
          <option value="delhi">Delhi</option>
          <option value="chennai">Chennai</option>
          <option value="hyderabad">Hyderabad</option>
          <option value="pune">Pune</option>
        </select>
      </div>
      <div className="grid grid-cols-2 gap-4">
        <div>
          <label htmlFor="pickup-date" className="mb-2 block text-sm font-medium">
            Pickup Date
          </label>
          <input
            type="date"
            id="pickup-date"
            className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus:outline-none focus:ring-2 focus:ring-secondary focus:ring-offset-2"
          />
        </div>
        <div>
          <label htmlFor="pickup-time" className="mb-2 block text-sm font-medium">
            Pickup Time
          </label>
          <select
            id="pickup-time"
            className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus:outline-none focus:ring-2 focus:ring-secondary focus:ring-offset-2"
          >
            <option value="">Select time</option>
            <option value="08:00">8:00 AM</option>
            <option value="09:00">9:00 AM</option>
            <option value="10:00">10:00 AM</option>
            <option value="11:00">11:00 AM</option>
            <option value="12:00">12:00 PM</option>
            <option value="13:00">1:00 PM</option>
            <option value="14:00">2:00 PM</option>
            <option value="15:00">3:00 PM</option>
            <option value="16:00">4:00 PM</option>
            <option value="17:00">5:00 PM</option>
            <option value="18:00">6:00 PM</option>
            <option value="19:00">7:00 PM</option>
            <option value="20:00">8:00 PM</option>
          </select>
        </div>
      </div>
      <div className="grid grid-cols-2 gap-4">
        <div>
          <label htmlFor="return-date" className="mb-2 block text-sm font-medium">
            Return Date
          </label>
          <input
            type="date"
            id="return-date"
            className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus:outline-none focus:ring-2 focus:ring-secondary focus:ring-offset-2"
          />
        </div>
        <div>
          <label htmlFor="return-time" className="mb-2 block text-sm font-medium">
            Return Time
          </label>
          <select
            id="return-time"
            className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus:outline-none focus:ring-2 focus:ring-secondary focus:ring-offset-2"
          >
            <option value="">Select time</option>
            <option value="08:00">8:00 AM</option>
            <option value="09:00">9:00 AM</option>
            <option value="10:00">10:00 AM</option>
            <option value="11:00">11:00 AM</option>
            <option value="12:00">12:00 PM</option>
            <option value="13:00">1:00 PM</option>
            <option value="14:00">2:00 PM</option>
            <option value="15:00">3:00 PM</option>
            <option value="16:00">4:00 PM</option>
            <option value="17:00">5:00 PM</option>
            <option value="18:00">6:00 PM</option>
            <option value="19:00">7:00 PM</option>
            <option value="20:00">8:00 PM</option>
          </select>
        </div>
      </div>
      <div>
        <label htmlFor="car-type" className="mb-2 block text-sm font-medium">
          Car Type
        </label>
        <select
          id="car-type"
          className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus:outline-none focus:ring-2 focus:ring-secondary focus:ring-offset-2"
        >
          <option value="">All Car Types</option>
          <option value="sedan">Sedan</option>
          <option value="suv">SUV</option>
          <option value="hatchback">Hatchback</option>
          <option value="luxury">Luxury</option>
          <option value="electric">Electric</option>
        </select>
      </div>
      <Button className="mt-2 w-full bg-secondary hover:bg-secondary/hover">
        <Search className="mr-2 h-4 w-4" />
        Search Cars
      </Button>
    </div>
  )
} 