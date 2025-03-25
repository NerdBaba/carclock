"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import Link from "next/link"
import { Layout } from "~/components/layout"
import { Button } from "~/components/ui/button"
import { Input } from "~/components/ui/input"
import { Label } from "~/components/ui/label"
import { Car, Clock, Lock, User } from "lucide-react"
import { GeistSans } from "geist/font/sans"

export default function AdminLoginPage() {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [error, setError] = useState("")
  const [isLoading, setIsLoading] = useState(false)
  const router = useRouter()

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)
    setError("")

    // For demo purposes, accept any non-empty credentials
    // In a real app, you would validate against a backend
    if (email === "admin@carclock.com" && password === "admin123") {
      localStorage.setItem("adminAuthenticated", "true")
      setTimeout(() => {
        router.push("/admin")
      }, 1000)
    } else {
      setError("Invalid email or password")
      setIsLoading(false)
    }
  }

  return (
    <Layout>
      <div className="container mx-auto flex min-h-[calc(100vh-4rem)] items-center justify-center px-6 py-12">
        <div className="relative w-full max-w-md overflow-hidden rounded-2xl border border-border/30 bg-primary/50 p-8 shadow-lg backdrop-blur-sm">
          {/* Background glow */}
          <div className="absolute -top-40 -right-40 h-80 w-80 rounded-full bg-secondary/10 blur-3xl"></div>
          <div className="absolute -bottom-40 -left-40 h-80 w-80 rounded-full bg-accent/10 blur-3xl"></div>

          <div className="relative z-10">
            <div className="mb-8 flex flex-col items-center text-center">
              <div className="relative mb-2 flex h-12 w-12 items-center justify-center rounded-full bg-secondary">
                <Clock className="h-6 w-6 text-white" />
                <Car className="absolute h-3 w-3 translate-x-[1px] translate-y-[1px] text-white" />
              </div>
              <h1 className={`text-2xl font-bold ${GeistSans.className}`}>
                <span className="bg-gradient-to-r from-secondary to-accent bg-clip-text text-transparent">
                  Admin Login
                </span>
              </h1>
              <p className="mt-2 text-sm text-muted-foreground">
                Sign in to access the CarClock admin dashboard
              </p>
            </div>

            {error && (
              <div className="mb-6 rounded-md bg-red-500/10 p-3 text-center text-sm text-red-500">
                {error}
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="space-y-2">
                <Label htmlFor="email" className="text-sm font-medium">
                  Email
                </Label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 flex items-center pl-3 text-muted-foreground">
                    <User className="h-4 w-4" />
                  </div>
                  <Input
                    id="email"
                    type="email"
                    placeholder="admin@carclock.com"
                    className="pl-10"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="password" className="text-sm font-medium">
                  Password
                </Label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 flex items-center pl-3 text-muted-foreground">
                    <Lock className="h-4 w-4" />
                  </div>
                  <Input
                    id="password"
                    type="password"
                    placeholder="••••••••"
                    className="pl-10"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                  />
                </div>
              </div>

              <Button 
                type="submit" 
                className="w-full bg-secondary font-semibold text-white hover:bg-secondary/80"
                disabled={isLoading}
              >
                {isLoading ? (
                  <span className="flex items-center gap-2">
                    <span className="h-4 w-4 animate-spin rounded-full border-2 border-current border-t-transparent"></span>
                    Signing in...
                  </span>
                ) : (
                  "Sign In"
                )}
              </Button>
            </form>

            <div className="mt-6 text-center text-sm text-muted-foreground">
              <Link href="/" className="hover:text-secondary hover:underline">
                Back to homepage
              </Link>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
} 