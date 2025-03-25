"use client"

import { useState, useEffect } from "react"
import { Layout } from "~/components/layout"
import { Button } from "~/components/ui/button"
import { 
  User, 
  Mail, 
  Phone, 
  MapPin, 
  Calendar, 
  CarFront, 
  CreditCard, 
  Settings, 
  Lock, 
  LogOut 
} from "lucide-react"

type UserProfile = {
  name: string;
  email: string;
  phone: string;
  address: string;
  memberSince: string;
  trips: number;
  paymentMethods: number;
}

export default function ProfilePage() {
  const [user, setUser] = useState<UserProfile | null>(null)
  const [activeTab, setActiveTab] = useState<'account' | 'bookings' | 'payments' | 'settings'>('account')
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    // Simulate API fetch delay
    setTimeout(() => {
      setUser({
        name: "Alex Johnson",
        email: "alex.johnson@example.com",
        phone: "+91 98765 43210",
        address: "123 Main Street, Bangalore, India",
        memberSince: "January 2023",
        trips: 12,
        paymentMethods: 2
      })
      setIsLoading(false)
    }, 1000)
  }, [])

  if (isLoading) {
    return (
      <Layout>
        <div className="container mx-auto px-6 py-16">
          <div className="flex h-96 items-center justify-center">
            <div className="h-8 w-8 animate-spin rounded-full border-4 border-secondary border-t-transparent"></div>
          </div>
        </div>
      </Layout>
    )
  }

  return (
    <Layout>
      <div className="container mx-auto px-6 py-8 md:py-16">
        <div className="mb-12">
          <h1 className="mb-2 text-3xl font-bold">Your Profile</h1>
          <p className="text-foreground/70">Manage your account and preferences</p>
        </div>

        <div className="grid gap-10 md:grid-cols-4">
          {/* Sidebar */}
          <div className="md:col-span-1">
            <div className="sticky top-24 rounded-xl border border-border/30 bg-primary p-6">
              <div className="mb-6 flex flex-col items-center">
                <div className="relative mb-4 h-20 w-20 overflow-hidden rounded-full bg-secondary/20">
                  <div className="flex h-full w-full items-center justify-center text-secondary">
                    <User className="h-10 w-10" />
                  </div>
                </div>
                <h2 className="text-xl font-bold">{user?.name}</h2>
                <p className="text-sm text-foreground/70">{user?.email}</p>
              </div>

              <nav className="mt-6 space-y-1">
                <Button
                  variant={activeTab === 'account' ? 'default' : 'ghost'}
                  className={`w-full justify-start ${activeTab === 'account' ? 'bg-secondary text-white' : 'text-foreground/70'}`}
                  onClick={() => setActiveTab('account')}
                >
                  <User className="mr-2 h-4 w-4" />
                  Account
                </Button>
                <Button
                  variant={activeTab === 'bookings' ? 'default' : 'ghost'}
                  className={`w-full justify-start ${activeTab === 'bookings' ? 'bg-secondary text-white' : 'text-foreground/70'}`}
                  onClick={() => setActiveTab('bookings')}
                >
                  <CarFront className="mr-2 h-4 w-4" />
                  Bookings
                </Button>
                <Button
                  variant={activeTab === 'payments' ? 'default' : 'ghost'}
                  className={`w-full justify-start ${activeTab === 'payments' ? 'bg-secondary text-white' : 'text-foreground/70'}`}
                  onClick={() => setActiveTab('payments')}
                >
                  <CreditCard className="mr-2 h-4 w-4" />
                  Payments
                </Button>
                <Button
                  variant={activeTab === 'settings' ? 'default' : 'ghost'}
                  className={`w-full justify-start ${activeTab === 'settings' ? 'bg-secondary text-white' : 'text-foreground/70'}`}
                  onClick={() => setActiveTab('settings')}
                >
                  <Settings className="mr-2 h-4 w-4" />
                  Settings
                </Button>
              </nav>

              <div className="mt-8 border-t border-border/30 pt-4">
                <Button
                  variant="outline"
                  className="mt-2 w-full justify-start border-red-500/30 text-red-500 hover:bg-red-500/10 hover:text-red-400"
                >
                  <LogOut className="mr-2 h-4 w-4" />
                  Sign Out
                </Button>
              </div>
            </div>
          </div>

          {/* Content Area */}
          <div className="md:col-span-3">
            {activeTab === 'account' && (
              <div className="rounded-xl border border-border/30 bg-primary p-6 animate-fade-in">
                <h3 className="mb-6 text-xl font-bold">Personal Information</h3>
                
                <div className="space-y-4">
                  <div className="grid gap-4 md:grid-cols-2">
                    <div className="rounded-lg border border-border/30 bg-primary/30 p-4">
                      <div className="mb-2 text-sm font-medium text-foreground/60">Full Name</div>
                      <div className="flex items-center gap-2">
                        <User className="h-4 w-4 text-secondary" />
                        <span>{user?.name}</span>
                      </div>
                    </div>
                    
                    <div className="rounded-lg border border-border/30 bg-primary/30 p-4">
                      <div className="mb-2 text-sm font-medium text-foreground/60">Email Address</div>
                      <div className="flex items-center gap-2">
                        <Mail className="h-4 w-4 text-secondary" />
                        <span>{user?.email}</span>
                      </div>
                    </div>
                  </div>
                  
                  <div className="grid gap-4 md:grid-cols-2">
                    <div className="rounded-lg border border-border/30 bg-primary/30 p-4">
                      <div className="mb-2 text-sm font-medium text-foreground/60">Phone Number</div>
                      <div className="flex items-center gap-2">
                        <Phone className="h-4 w-4 text-secondary" />
                        <span>{user?.phone}</span>
                      </div>
                    </div>
                    
                    <div className="rounded-lg border border-border/30 bg-primary/30 p-4">
                      <div className="mb-2 text-sm font-medium text-foreground/60">Address</div>
                      <div className="flex items-center gap-2">
                        <MapPin className="h-4 w-4 text-secondary" />
                        <span>{user?.address}</span>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="mt-8 grid gap-4 md:grid-cols-3">
                  <div className="flex flex-col items-center rounded-lg border border-border/30 bg-primary/30 p-4 text-center">
                    <Calendar className="mb-2 h-8 w-8 text-secondary" />
                    <div className="text-sm font-medium text-foreground/60">Member Since</div>
                    <div className="text-lg font-bold">{user?.memberSince}</div>
                  </div>
                  
                  <div className="flex flex-col items-center rounded-lg border border-border/30 bg-primary/30 p-4 text-center">
                    <CarFront className="mb-2 h-8 w-8 text-secondary" />
                    <div className="text-sm font-medium text-foreground/60">Total Trips</div>
                    <div className="text-lg font-bold">{user?.trips}</div>
                  </div>
                  
                  <div className="flex flex-col items-center rounded-lg border border-border/30 bg-primary/30 p-4 text-center">
                    <CreditCard className="mb-2 h-8 w-8 text-secondary" />
                    <div className="text-sm font-medium text-foreground/60">Payment Methods</div>
                    <div className="text-lg font-bold">{user?.paymentMethods}</div>
                  </div>
                </div>
                
                <div className="mt-8 flex justify-end gap-4">
                  <Button variant="outline">Cancel</Button>
                  <Button className="bg-secondary hover:bg-secondary/80">Edit Profile</Button>
                </div>
              </div>
            )}
            
            {activeTab === 'bookings' && (
              <div className="rounded-xl border border-border/30 bg-primary p-6 animate-fade-in">
                <h3 className="mb-6 text-xl font-bold">Your Bookings</h3>
                <div className="text-center py-12">
                  <CarFront className="mx-auto mb-4 h-16 w-16 text-foreground/20" />
                  <p className="text-lg font-medium">No active bookings found</p>
                  <p className="text-foreground/60">Your booking history will appear here</p>
                  <Button className="mt-6 bg-secondary hover:bg-secondary/80">Browse Cars</Button>
                </div>
              </div>
            )}
            
            {activeTab === 'payments' && (
              <div className="rounded-xl border border-border/30 bg-primary p-6 animate-fade-in">
                <h3 className="mb-6 text-xl font-bold">Payment Methods</h3>
                <div className="text-center py-12">
                  <CreditCard className="mx-auto mb-4 h-16 w-16 text-foreground/20" />
                  <p className="text-lg font-medium">No payment methods added</p>
                  <p className="text-foreground/60">Add a payment method to book cars faster</p>
                  <Button className="mt-6 bg-secondary hover:bg-secondary/80">Add Payment Method</Button>
                </div>
              </div>
            )}
            
            {activeTab === 'settings' && (
              <div className="rounded-xl border border-border/30 bg-primary p-6 animate-fade-in">
                <h3 className="mb-6 text-xl font-bold">Account Settings</h3>
                
                <div className="space-y-6">
                  <div className="border-b border-border/30 pb-4">
                    <div className="flex items-center justify-between">
                      <div>
                        <h4 className="font-medium">Email Notifications</h4>
                        <p className="text-sm text-foreground/60">Receive emails about your account activity and bookings</p>
                      </div>
                      <Button variant="outline" size="sm">Manage</Button>
                    </div>
                  </div>
                  
                  <div className="border-b border-border/30 pb-4">
                    <div className="flex items-center justify-between">
                      <div>
                        <h4 className="font-medium">Change Password</h4>
                        <p className="text-sm text-foreground/60">Update your password and security settings</p>
                      </div>
                      <Button variant="outline" size="sm">Update</Button>
                    </div>
                  </div>
                  
                  <div className="border-b border-border/30 pb-4">
                    <div className="flex items-center justify-between">
                      <div>
                        <h4 className="font-medium">Delete Account</h4>
                        <p className="text-sm text-foreground/60">Permanently delete your account and all data</p>
                      </div>
                      <Button variant="outline" size="sm" className="border-red-500/30 text-red-500 hover:bg-red-500/10 hover:text-red-400">Delete</Button>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </Layout>
  )
} 