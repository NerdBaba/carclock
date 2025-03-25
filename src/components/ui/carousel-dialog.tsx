"use client"

import * as React from "react"
import { ChevronLeft, ChevronRight, X } from "lucide-react"
import { Dialog, DialogContent } from "./dialog"
import { cn } from "~/lib/utils"
import { BlurredImage } from "./blurred-image"

interface CarouselDialogProps {
  images: string[]
  open: boolean
  onOpenChange: (open: boolean) => void
  title?: string
  onPrevious?: () => void
  onNext?: () => void
  currentIndex: number
}

export function CarouselDialog({
  images,
  open,
  onOpenChange,
  title,
  currentIndex,
  onPrevious,
  onNext,
}: CarouselDialogProps) {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-h-screen w-screen max-w-none border-none bg-black/95 p-0">
        <div className="relative flex h-screen w-full items-center justify-center">
          {/* Close button */}
          <button
            onClick={() => onOpenChange(false)}
            className="absolute right-4 top-4 z-50 rounded-full bg-black/50 p-2 text-white backdrop-blur-sm transition-colors hover:bg-black/70"
          >
            <X className="h-6 w-6" />
          </button>

          {/* Title */}
          {title && (
            <div className="absolute top-4 left-4 z-50 rounded-full bg-black/50 px-4 py-2 text-white backdrop-blur-sm">
              <h2 className="text-lg font-bold">{title}</h2>
            </div>
          )}

          {/* Navigation buttons */}
          <button
            onClick={onPrevious}
            className="absolute left-4 z-50 rounded-full bg-black/50 p-2 text-white backdrop-blur-sm transition-colors hover:bg-black/70 disabled:opacity-50"
            disabled={currentIndex === 0}
          >
            <ChevronLeft className="h-8 w-8" />
          </button>

          <button
            onClick={onNext}
            className="absolute right-4 z-50 rounded-full bg-black/50 p-2 text-white backdrop-blur-sm transition-colors hover:bg-black/70 disabled:opacity-50"
            disabled={currentIndex === images.length - 1}
          >
            <ChevronRight className="h-8 w-8" />
          </button>

          {/* Image */}
          <div className="relative h-full w-full">
            <div className="absolute inset-0 flex items-center justify-center p-4">
              <BlurredImage
                src={images[currentIndex] ?? "/placeholder-car.jpg"}
                alt={`Image ${currentIndex + 1}`}
                fill
                className="object-contain"
                priority
              />
            </div>
          </div>

          {/* Thumbnails */}
          <div className="absolute bottom-4 left-1/2 z-50 -translate-x-1/2">
            <div className="flex gap-2 rounded-full bg-black/50 p-2 backdrop-blur-sm">
              {images.map((_, index) => (
                <div
                  key={index}
                  className={cn(
                    "h-1.5 w-1.5 rounded-full transition-colors",
                    index === currentIndex ? "bg-white" : "bg-white/50"
                  )}
                />
              ))}
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  )
} 