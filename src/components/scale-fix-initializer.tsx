"use client";

import { useScaleFix } from "~/hooks/use-scale-fix";

/**
 * This component initializes the scale fix for Windows browsers
 * It needs to be a client component because it uses browser APIs
 */
export function ScaleFixInitializer() {
  // Initialize the scale fix
  useScaleFix();
  
  // This component doesn't render anything
  return null;
} 