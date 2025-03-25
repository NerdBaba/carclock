"use client"

import { useState } from "react"
import { Card } from "~/components/ui/card"
import { Button } from "~/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "~/components/ui/tabs"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "~/components/ui/table"
import { Calendar, Filter, Search } from "lucide-react"

// Sample bookings data
const bookings = [
  { 
    id: "B1234", 
    customer: "Priya Sharma", 
    car: "Toyota Camry", 
    carId: "1",
    startDate: "2023-11-15", 
    endDate: "2023-11-17", 
    amount: 16000, 
    status: "Completed" 
  },
  { 
    id: "B1235", 
    customer: "Raj Kumar", 
    car: "Honda City", 
    carId: "2",
    startDate: "2023-11-18", 
    endDate: "2023-11-19", 
    amount: 9500, 
    status: "Active" 
  },
  { 
    id: "B1236", 
    customer: "Neha Singh", 
    car: "Hyundai Creta", 
    carId: "3",
    startDate: "2023-11-20", 
    endDate: "2023-11-22", 
    amount: 15000, 
    status: "Upcoming" 
  },
  { 
    id: "B1237", 
    customer: "Vikram Mehta", 
    car: "BMW 5 Series", 
    carId: "4",
    startDate: "2023-11-10", 
    endDate: "2023-11-12", 
    amount: 42000, 
    status: "Cancelled" 
  },
  { 
    id: "B1238", 
    customer: "Ananya Patel", 
    car: "Tesla Model 3", 
    carId: "3",
    startDate: "2023-11-25", 
    endDate: "2023-11-28", 
    amount: 48000, 
    status: "Upcoming" 
  },
]

export default function AdminBookingsPage() {
  const [activeTab, setActiveTab] = useState("all")
  const [searchQuery, setSearchQuery] = useState("")
  
  const filteredBookings = bookings.filter(booking => {
    // Filter by tab
    if (activeTab !== "all" && booking.status.toLowerCase() !== activeTab) {
      return false
    }
    
    // Filter by search
    if (searchQuery) {
      const query = searchQuery.toLowerCase()
      return (
        booking.id.toLowerCase().includes(query) ||
        booking.customer.toLowerCase().includes(query) ||
        booking.car.toLowerCase().includes(query)
      )
    }
    
    return true
  })
  
  const getStatusColor = (status: string) => {
    switch (status.toLowerCase()) {
      case "completed":
        return "bg-green-500/20 text-green-500"
      case "active":
        return "bg-blue-500/20 text-blue-500"
      case "upcoming":
        return "bg-amber-500/20 text-amber-500"
      case "cancelled":
        return "bg-red-500/20 text-red-500"
      default:
        return "bg-gray-500/20 text-gray-500"
    }
  }
  
  return (
    <>
      <div className="mb-6 flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold">Bookings Management</h1>
          <p className="text-muted-foreground">View and manage all bookings</p>
        </div>
        <div className="flex items-center gap-2">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
            <input
              type="text"
              placeholder="Search bookings..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-9 h-10 w-60 rounded-md border border-border/30 bg-[#242424] px-3 py-2 text-sm"
            />
          </div>
          <Button variant="outline" size="icon" className="h-10 w-10">
            <Filter className="h-4 w-4" />
          </Button>
          <Button variant="outline" size="icon" className="h-10 w-10">
            <Calendar className="h-4 w-4" />
          </Button>
        </div>
      </div>
      
      <Tabs defaultValue="all" className="mb-6" onValueChange={setActiveTab}>
        <TabsList className="grid w-full max-w-md grid-cols-4">
          <TabsTrigger value="all">All Bookings</TabsTrigger>
          <TabsTrigger value="active">Active</TabsTrigger>
          <TabsTrigger value="upcoming">Upcoming</TabsTrigger>
          <TabsTrigger value="completed">Completed</TabsTrigger>
        </TabsList>
      </Tabs>
      
      <Card className="border-border/20 bg-[#1a1a1a]">
        <div className="overflow-x-auto">
          <Table>
            <TableHeader>
              <TableRow className="border-border/20 hover:bg-[#242424]">
                <TableHead>Booking ID</TableHead>
                <TableHead>Customer</TableHead>
                <TableHead>Car</TableHead>
                <TableHead>Dates</TableHead>
                <TableHead>Amount</TableHead>
                <TableHead>Status</TableHead>
                <TableHead className="text-right">Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {filteredBookings.length === 0 ? (
                <TableRow>
                  <TableCell colSpan={7} className="h-24 text-center">
                    No bookings found.
                  </TableCell>
                </TableRow>
              ) : (
                filteredBookings.map((booking) => (
                  <TableRow key={booking.id} className="border-border/20 hover:bg-[#242424]">
                    <TableCell className="font-medium">{booking.id}</TableCell>
                    <TableCell>{booking.customer}</TableCell>
                    <TableCell>{booking.car}</TableCell>
                    <TableCell>
                      {booking.startDate} to {booking.endDate}
                    </TableCell>
                    <TableCell>₹{booking.amount}</TableCell>
                    <TableCell>
                      <span className={`rounded-full px-2 py-1 text-xs font-semibold ${getStatusColor(booking.status)}`}>
                        {booking.status}
                      </span>
                    </TableCell>
                    <TableCell className="text-right">
                      <div className="flex justify-end gap-2">
                        <Button variant="ghost" size="sm">View</Button>
                        <Button 
                          variant="ghost" 
                          size="sm"
                          disabled={["Completed", "Cancelled"].includes(booking.status)}
                        >
                          Edit
                        </Button>
                      </div>
                    </TableCell>
                  </TableRow>
                ))
              )}
            </TableBody>
          </Table>
        </div>
      </Card>
    </>
  )
} 