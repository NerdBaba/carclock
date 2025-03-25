"use client"

import { useEffect } from "react"
import { useRouter } from "next/navigation"

export default function DashboardRedirect() {
  const router = useRouter()

  useEffect(() => {
    // Redirect to the new admin dashboard
    router.push("/admin")
  }, [router])

  return (
    <div className="container h-screen flex items-center justify-center">
      <p className="text-muted-foreground">Redirecting to admin panel...</p>
    </div>
  )
} 