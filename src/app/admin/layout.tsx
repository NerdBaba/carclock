"use client"

import { useState, useEffect } from "react"
import { useRouter, usePathname } from "next/navigation"
import Link from "next/link"
import { 
  LayoutDashboard, Car, Calendar, Users, Settings, 
  LogOut, Clock, ChevronRight
} from "lucide-react"
import { Button } from "~/components/ui/button"
import { GeistSans } from "geist/font/sans"

interface AdminLayoutProps {
  children: React.ReactNode
}

export default function AdminLayout({ children }: AdminLayoutProps) {
  const router = useRouter()
  const pathname = usePathname()
  const [isAuthenticated, setIsAuthenticated] = useState(false)
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    // Check if user is authenticated as admin
    const adminAuth = localStorage.getItem("adminAuthenticated") === "true"
    setIsAuthenticated(adminAuth)
    setIsLoading(false)

    if (!adminAuth && !isLoading && !pathname.includes("/admin/login")) {
      router.push("/admin/login")
    }
  }, [router, isLoading, pathname])

  const handleLogout = () => {
    localStorage.removeItem("adminAuthenticated")
    router.push("/admin/login")
  }

  if (isLoading) {
    return (
      <div className="flex h-screen items-center justify-center">
        <div className="h-8 w-8 animate-spin rounded-full border-4 border-secondary border-t-transparent"></div>
      </div>
    )
  }

  if (!isAuthenticated && !pathname.includes("/admin/login")) {
    return null // Will redirect to login in useEffect
  }

  if (pathname.includes("/admin/login")) {
    return <>{children}</>
  }

  const isActive = (path: string) => {
    return pathname === path
  }

  const NavItem = ({ href, label, icon }: { href: string; label: string; icon: React.ReactNode }) => (
    <Link 
      href={href}
      className={`flex items-center gap-3 rounded-lg px-3 py-2 transition-colors ${
        isActive(href) 
          ? "bg-secondary text-white" 
          : "text-foreground/70 hover:bg-secondary/10 hover:text-foreground"
      }`}
    >
      {icon}
      <span>{label}</span>
    </Link>
  )

  return (
    <div className="flex min-h-screen bg-[#121212]">
      {/* Admin Sidebar */}
      <div className="w-[207px] flex-shrink-0 border-r border-border/20 bg-[#171717]">
        <div className="p-6">
          <Link href="/" className={`flex items-center gap-2 text-xl font-bold ${GeistSans.className}`}>
            <div className="relative flex h-8 w-8 items-center justify-center rounded-full bg-secondary text-white">
              <Clock className="h-5 w-5" />
              <Car className="absolute h-3 w-3 translate-x-[1px] translate-y-[1px]" />
            </div>
            <span className="bg-gradient-to-r from-secondary to-accent bg-clip-text text-transparent">
              Car<span className="font-black">Clock</span>
            </span>
          </Link>
        </div>
        
        <nav className="mt-6 px-3">
          <div className="space-y-1">
            <NavItem 
              href="/admin" 
              label="Dashboard" 
              icon={<LayoutDashboard className="h-5 w-5" />} 
            />
            <NavItem 
              href="/admin/cars" 
              label="Cars" 
              icon={<Car className="h-5 w-5" />} 
            />
            <NavItem 
              href="/admin/bookings" 
              label="Bookings" 
              icon={<Calendar className="h-5 w-5" />} 
            />
            <NavItem 
              href="/admin/users" 
              label="Users" 
              icon={<Users className="h-5 w-5" />} 
            />
            <NavItem 
              href="/admin/settings" 
              label="Settings" 
              icon={<Settings className="h-5 w-5" />} 
            />
          </div>
        </nav>

        <div className="absolute bottom-6 left-3 right-3">
          <Button 
            variant="outline" 
            className="w-full justify-start gap-3 border-red-500/30 text-red-500 hover:bg-red-500/10 hover:text-red-400"
            onClick={handleLogout}
          >
            <LogOut className="h-5 w-5" />
            <span>Sign Out</span>
          </Button>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 overflow-auto">
        <header className="flex h-16 items-center justify-between border-b border-border/20 bg-[#171717] px-6">
          <div>
            <h1 className="text-lg font-semibold">Admin Panel</h1>
          </div>
          <div>
            <Link href="/">
              <Button variant="ghost" size="sm">
                Logout
              </Button>
            </Link>
          </div>
        </header>
        <main className="p-6">
          {children}
        </main>
      </div>
    </div>
  )
} 