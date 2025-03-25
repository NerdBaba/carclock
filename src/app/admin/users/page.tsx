"use client"

import { useState } from "react"
import { Card } from "~/components/ui/card"
import { Button } from "~/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "~/components/ui/tabs"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "~/components/ui/table"
import { Search, UserPlus, MoreHorizontal, Shield, User } from "lucide-react"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "~/components/ui/dropdown-menu"
import { Avatar, AvatarFallback, AvatarImage } from "~/components/ui/avatar"

// Sample user data
const users = [
  { 
    id: "U1001", 
    name: "Rahul Gupta", 
    email: "rahul.g@example.com", 
    joinDate: "2023-08-15", 
    bookings: 5,
    role: "user", 
    status: "active" 
  },
  { 
    id: "U1002", 
    name: "Anita Desai", 
    email: "anita.d@example.com", 
    joinDate: "2023-09-02", 
    bookings: 3,
    role: "user", 
    status: "active" 
  },
  { 
    id: "U1003", 
    name: "Sanjay Patel", 
    email: "sanjay.p@example.com", 
    joinDate: "2023-07-19", 
    bookings: 8,
    role: "user", 
    status: "inactive" 
  },
  { 
    id: "U1004", 
    name: "Deepak Sharma", 
    email: "deepak.s@example.com", 
    joinDate: "2023-05-10", 
    bookings: 12,
    role: "admin", 
    status: "active" 
  },
  { 
    id: "U1005", 
    name: "Priyanka Joshi", 
    email: "priyanka.j@example.com", 
    joinDate: "2023-10-08", 
    bookings: 1,
    role: "user", 
    status: "active" 
  },
]

export default function AdminUsersPage() {
  const [activeTab, setActiveTab] = useState("all")
  const [searchQuery, setSearchQuery] = useState("")
  
  const filteredUsers = users.filter(user => {
    // Filter by tab
    if (activeTab === "admin" && user.role !== "admin") {
      return false
    }
    if (activeTab === "user" && user.role !== "user") {
      return false
    }
    if (activeTab === "inactive" && user.status !== "inactive") {
      return false
    }
    
    // Filter by search
    if (searchQuery) {
      const query = searchQuery.toLowerCase()
      return (
        user.name.toLowerCase().includes(query) ||
        user.email.toLowerCase().includes(query) ||
        user.id.toLowerCase().includes(query)
      )
    }
    
    return true
  })
  
  const getUserInitials = (name: string) => {
    return name
      .split(' ')
      .map(part => part[0])
      .join('')
      .toUpperCase()
  }
  
  return (
    <>
      <div className="mb-6">
        <h1 className="text-3xl font-bold">Users Management</h1>
        <p className="text-muted-foreground">Manage customer accounts and admin users</p>
      </div>
      
      <div className="flex h-64 items-center justify-center rounded-lg border border-dashed border-border/40 bg-[#1a1a1a]">
        <p className="text-muted-foreground">Users management interface will be implemented here</p>
      </div>
    </>
  )
} 