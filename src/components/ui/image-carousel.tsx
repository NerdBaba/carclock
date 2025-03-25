"use client"

import React, { useState } from "react"
import Image from "next/image"
import { ChevronLeft, ChevronRight, X } from "lucide-react"
import { Dialog, DialogContent } from "./dialog"
import { cn } from "~/lib/utils"
import { BlurredImage } from "./blurred-image"

interface ImageCarouselProps {
  images: string[]
  alt: string
  open: boolean
  onOpenChange: (open: boolean) => void
}

export function ImageCarousel({ images, alt, open, onOpenChange }: ImageCarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isLoading, setIsLoading] = useState(true)

  const handlePrevious = (e: React.MouseEvent) => {
    e.stopPropagation()
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1))
    setIsLoading(true)
  }

  const handleNext = (e: React.MouseEvent) => {
    e.stopPropagation()
    setCurrentIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1))
    setIsLoading(true)
  }

  const handleThumbnailClick = (index: number) => {
    setCurrentIndex(index)
    setIsLoading(true)
  }

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-screen-lg p-0 overflow-hidden bg-black/90 border-none">
        <div className="relative flex h-screen max-h-[80vh] w-full flex-col justify-between p-0">
          {/* Close button */}
          <button
            onClick={() => onOpenChange(false)}
            className="absolute right-4 top-4 z-50 rounded-full bg-black/50 p-2 text-white hover:bg-black/70"
            aria-label="Close"
          >
            <X className="h-6 w-6" />
          </button>

          {/* Main image container */}
          <div className="relative flex h-full w-full items-center justify-center">
            {images.length > 1 && (
              <>
                <button
                  onClick={handlePrevious}
                  className="absolute left-4 z-40 rounded-full bg-black/50 p-2 text-white hover:bg-black/70"
                  aria-label="Previous image"
                >
                  <ChevronLeft className="h-6 w-6" />
                </button>

                <button
                  onClick={handleNext}
                  className="absolute right-4 z-40 rounded-full bg-black/50 p-2 text-white hover:bg-black/70"
                  aria-label="Next image"
                >
                  <ChevronRight className="h-6 w-6" />
                </button>
              </>
            )}

            <div className="relative h-full w-full">
              {images.map((src, index) => (
                <div
                  key={index}
                  className={cn(
                    "absolute inset-0 h-full w-full transition-opacity duration-300",
                    currentIndex === index ? "opacity-100" : "opacity-0 pointer-events-none"
                  )}
                >
                  <Image
                    src={src || "/placeholder-car.jpg"}
                    alt={`${alt} ${index + 1}`}
                    fill
                    className="object-contain"
                    onLoad={() => setIsLoading(false)}
                  />
                </div>
              ))}
              
              {isLoading && (
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="h-8 w-8 animate-spin rounded-full border-4 border-secondary border-t-transparent"></div>
                </div>
              )}
            </div>
          </div>

          {/* Thumbnails */}
          {images.length > 1 && (
            <div className="relative z-50 flex w-full justify-center gap-2 bg-black/50 p-4">
              {images.map((src, index) => (
                <button
                  key={index}
                  onClick={() => handleThumbnailClick(index)}
                  className={cn(
                    "relative h-16 w-20 overflow-hidden rounded transition-all",
                    currentIndex === index ? "ring-2 ring-secondary" : "opacity-70 hover:opacity-100"
                  )}
                >
                  <Image
                    src={src || "/placeholder-car.jpg"}
                    alt={`Thumbnail ${index + 1}`}
                    fill
                    className="object-cover"
                  />
                </button>
              ))}
            </div>
          )}
        </div>
      </DialogContent>
    </Dialog>
  )
} 