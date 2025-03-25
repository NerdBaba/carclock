import { useEffect } from 'react';
import { initScaleFix } from '~/utils/scalefix';

/**
 * React hook that applies scaling fixes for Windows browsers
 * This ensures the website displays at 100% scale on Windows browsers
 * where resolution scaling can cause websites to be zoomed by default
 */
export function useScaleFix() {
  useEffect(() => {
    // Initialize the scale fix
    initScaleFix();
    
    // Add a specific CSS class to help with scale issues
    if (typeof document !== 'undefined') {
      document.documentElement.classList.add('scale-fix');
    }
  }, []);
} 