"use client"

import Link from "next/link"
import {
  Package,
  CreditCard,
  Users,
  Car,
  Calendar,
  MapPin,
  ChevronRight
} from "lucide-react"
import { Card } from "~/components/ui/card"

// Sample data for the dashboard
const overviewData = [
  { title: "Total Bookings", value: "312", icon: <Package className="h-5 w-5 text-cyan-500" />, change: "+15%", color: "text-cyan-500" },
  { title: "Total Revenue", value: "₹1,54,870", icon: <CreditCard className="h-5 w-5 text-cyan-500" />, change: "+24%", color: "text-cyan-500" },
  { title: "Active Users", value: "1,305", icon: <Users className="h-5 w-5 text-cyan-500" />, change: "+8%", color: "text-cyan-500" },
  { title: "Total Cars", value: "48", icon: <Car className="h-5 w-5 text-cyan-500" />, change: "+3%", color: "text-cyan-500" },
]

const recentBookings = [
  { id: "B-1234", customer: "Priya Sharma", car: "Toyota Camry", date: "2023-09-18", amount: "₹4,500", status: "Completed" },
  { id: "B-1235", customer: "Raj Kumar", car: "Honda City", date: "2023-09-17", amount: "₹3,200", status: "Active" },
  { id: "B-1236", customer: "Neha Singh", car: "Hyundai Creta", date: "2023-09-16", amount: "₹5,600", status: "Completed" },
  { id: "B-1237", customer: "Vikram Mehta", car: "Maruti Swift", date: "2023-09-15", amount: "₹2,800", status: "Cancelled" },
]

const popularLocations = [
  { name: "Bangalore Central", bookings: 78 },
  { name: "Mumbai Airport", bookings: 65 },
  { name: "Delhi Hub", bookings: 52 },
  { name: "Chennai City", bookings: 48 },
  { name: "Hyderabad Tech Park", bookings: 42 },
]

export default function AdminDashboard() {
  return (
    <>
      <div className="mb-6">
        <h1 className="text-3xl font-bold">Admin Dashboard</h1>
        <p className="text-muted-foreground">Manage your car fleet, bookings, and users</p>
      </div>
      
      <div className="mb-8 flex gap-4 overflow-auto">
        <button className="border-b-2 border-secondary pb-2 pt-1 text-secondary">Overview</button>
        <button className="border-b-2 border-transparent pb-2 pt-1 text-muted-foreground hover:text-foreground">Bookings</button>
        <button className="border-b-2 border-transparent pb-2 pt-1 text-muted-foreground hover:text-foreground">Cars</button>
        <button className="border-b-2 border-transparent pb-2 pt-1 text-muted-foreground hover:text-foreground">Users</button>
      </div>

      {/* Dashboard Cards */}
      <div className="mb-8 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
        {overviewData.map((item, index) => (
          <Card key={index} className="border-border/20 bg-[#1a1a1a]">
            <div className="p-6">
              <div className="mb-4 flex items-center justify-between">
                <h3 className="text-sm font-medium text-muted-foreground">{item.title}</h3>
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-[#242424]">
                  {item.icon}
                </div>
              </div>
              <div className="text-3xl font-bold">{item.value}</div>
              <p className="mt-1 text-xs text-green-500">{item.change} from last month</p>
            </div>
          </Card>
        ))}
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        {/* Recent Bookings */}
        <Card className="border-border/20 bg-[#1a1a1a]">
          <div className="flex items-center justify-between p-6 pb-4">
            <div>
              <h3 className="text-lg font-semibold">Recent Bookings</h3>
              <p className="text-sm text-muted-foreground">Recent car bookings across the platform</p>
            </div>
            <Link href="/admin/bookings" className="flex items-center gap-1 text-sm text-secondary hover:underline">
              View all <ChevronRight className="h-4 w-4" />
            </Link>
          </div>
          <div className="px-6 pb-4">
            {recentBookings.map((booking, index) => (
              <div key={booking.id} className="mb-4 flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-[#242424] text-cyan-500">
                    <Calendar className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="font-medium">{booking.customer}</p>
                    <p className="text-sm text-muted-foreground">{booking.car}</p>
                  </div>
                </div>
                <div className="text-right">
                  <p className="font-semibold">{booking.amount}</p>
                  <p className={`text-sm ${
                    booking.status === 'Completed' ? 'text-green-500' : 
                    booking.status === 'Active' ? 'text-cyan-500' : 'text-red-500'
                  }`}>
                    {booking.status}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </Card>

        {/* Popular Locations */}
        <Card className="border-border/20 bg-[#1a1a1a]">
          <div className="flex items-center justify-between p-6 pb-4">
            <div>
              <h3 className="text-lg font-semibold">Popular Locations</h3>
              <p className="text-sm text-muted-foreground">Most booked locations this month</p>
            </div>
            <Link href="/admin/locations" className="flex items-center gap-1 text-sm text-secondary hover:underline">
              View all <ChevronRight className="h-4 w-4" />
            </Link>
          </div>
          <div className="space-y-4 px-6 pb-4">
            {popularLocations.map((location, index) => (
              <div key={location.name} className="flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-[#242424] text-cyan-500">
                    <MapPin className="h-5 w-5" />
                  </div>
                  <p>{location.name}</p>
                </div>
                <div className="flex items-center gap-3">
                  <span className="text-sm">{location.bookings} bookings</span>
                  <div className="h-2 w-24 overflow-hidden rounded-full bg-[#242424]">
                    <div 
                      className="h-full bg-cyan-500" 
                      style={{ width: `${(location.bookings / 80) * 100}%` }}
                    ></div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </Card>
      </div>
    </>
  )
} 