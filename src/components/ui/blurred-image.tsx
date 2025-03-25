"use client"

import Image from "next/image";
import React, { useState } from "react";
import { cn } from "~/lib/utils";

interface BlurredImageProps extends React.ComponentProps<typeof Image> {
  isBlurred?: boolean;
  blurAmount?: string;
}

export function BlurredImage({
  isBlurred = true,
  blurAmount = "blur-sm",
  className,
  alt,
  ...props
}: BlurredImageProps) {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <div className="overflow-hidden">
      <Image
        className={cn(
          "duration-700 ease-in-out",
          isLoading ? "scale-110 blur-xl" : "",
          isBlurred && !isLoading ? blurAmount : "",
          "transition-all",
          className
        )}
        alt={alt || "Image"}
        onLoadingComplete={() => setIsLoading(false)}
        {...props}
      />
    </div>
  );
} 