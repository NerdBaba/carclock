"use client"

import { createContext, useContext, useState, useEffect, ReactNode } from "react"

interface GeneralSettings {
  siteName: string
  siteDescription: string
  contactEmail: string
  contactPhone: string
  address: string
}

interface PricingSettings {
  currency: string
  currencySymbol: string
  taxRate: number
  depositPercentage: number
  discountForWeeklyRentals: number
  discountForMonthlyRentals: number
}

interface FeatureSettings {
  enableUserReviews: boolean
  enableCarAvailabilityCalendar: boolean
  enableOnlinePayments: boolean
  enableLiveChat: boolean
  requirePhoneVerification: boolean
}

interface NotificationSettings {
  emailNotificationsEnabled: boolean
  smsNotificationsEnabled: boolean
  bookingConfirmation: boolean
  bookingReminders: boolean
  specialOffers: boolean
  systemUpdates: boolean
}

interface SiteSettings {
  general: GeneralSettings
  pricing: PricingSettings
  features: FeatureSettings
  notifications: NotificationSettings
}

interface SettingsContextType {
  settings: SiteSettings
  updateSettings: (newSettings: SiteSettings) => void
  resetSettings: () => void
}

// Default settings
const defaultSettings: SiteSettings = {
  general: {
    siteName: "CarClock",
    siteDescription: "Rent luxury cars at affordable prices",
    contactEmail: "support@carclock.com",
    contactPhone: "+91 98765 43210",
    address: "123 Main Street, Bangalore, India",
  },
  pricing: {
    currency: "INR",
    currencySymbol: "₹",
    taxRate: 18,
    depositPercentage: 10,
    discountForWeeklyRentals: 10,
    discountForMonthlyRentals: 20,
  },
  features: {
    enableUserReviews: true,
    enableCarAvailabilityCalendar: true,
    enableOnlinePayments: true,
    enableLiveChat: false,
    requirePhoneVerification: true,
  },
  notifications: {
    emailNotificationsEnabled: true,
    smsNotificationsEnabled: true,
    bookingConfirmation: true,
    bookingReminders: true,
    specialOffers: false,
    systemUpdates: true,
  },
}

// Helper function to get data from localStorage
function getStorageData<T>(key: string, defaultValue: T): T {
  if (typeof window === "undefined") {
    return defaultValue
  }
  
  const stored = localStorage.getItem(key)
  if (!stored) {
    return defaultValue
  }
  
  try {
    return JSON.parse(stored) as T
  } catch (error) {
    console.error(`Error parsing stored data for key "${key}":`, error)
    return defaultValue
  }
}

const SettingsContext = createContext<SettingsContextType | undefined>(undefined)

export function useSettings() {
  const context = useContext(SettingsContext)
  if (context === undefined) {
    throw new Error("useSettings must be used within a SettingsProvider")
  }
  return context
}

export function SettingsProvider({ children }: { children: ReactNode }) {
  const [settings, setSettings] = useState<SiteSettings>(() => 
    getStorageData("wiseCarSettings", defaultSettings)
  )

  // Save to localStorage whenever settings change
  useEffect(() => {
    if (typeof window !== "undefined") {
      localStorage.setItem("wiseCarSettings", JSON.stringify(settings))
    }
  }, [settings])

  const updateSettings = (newSettings: SiteSettings) => {
    setSettings(newSettings)
  }

  const resetSettings = () => {
    setSettings(defaultSettings)
  }

  return (
    <SettingsContext.Provider value={{ settings, updateSettings, resetSettings }}>
      {children}
    </SettingsContext.Provider>
  )
} 