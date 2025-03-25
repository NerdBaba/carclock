"use client"

import { useState } from "react"
import { Button } from "~/components/ui/button"
import { useCars } from "~/context/car-context"

export default function AdminSettingsPage() {
  const { resetToInitialData } = useCars()
  const [resetConfirm, setResetConfirm] = useState(false)
  const [resetSuccess, setResetSuccess] = useState(false)

  const handleReset = () => {
    if (resetConfirm) {
      resetToInitialData()
      setResetConfirm(false)
      setResetSuccess(true)
      
      // Clear success message after 3 seconds
      setTimeout(() => {
        setResetSuccess(false)
      }, 3000)
    } else {
      setResetConfirm(true)
    }
  }

  return (
    <>
      <div className="mb-6">
        <h1 className="text-3xl font-bold">Settings</h1>
        <p className="text-muted-foreground">Configure system settings and preferences</p>
      </div>
      
      <div className="flex h-64 items-center justify-center rounded-lg border border-dashed border-border/40 bg-[#1a1a1a]">
        <p className="text-muted-foreground">Settings interface will be implemented here</p>
      </div>
    </>
  )
} 