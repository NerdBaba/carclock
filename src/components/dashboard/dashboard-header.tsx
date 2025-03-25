"use client"

import { Button } from "~/components/ui/button"

interface DashboardHeaderProps {
  dateRange: string
  onDateRangeChange: (range: string) => void
}

export function DashboardHeader({ dateRange, onDateRangeChange }: DashboardHeaderProps) {
  return (
    <div className="flex flex-col justify-between gap-4 md:flex-row md:items-center">
      <h1 className="text-3xl font-bold tracking-tight">Dashboard</h1>
      <div className="flex items-center gap-2">
        <div className="relative">
          <button className="flex items-center rounded-md border bg-background px-4 py-2 text-sm shadow-sm">
            <span>{dateRange}</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="ml-2"
            >
              <path d="M6 9l6 6 6-6" />
            </svg>
          </button>
        </div>
        <Button size="sm">Download</Button>
      </div>
    </div>
  )
} 