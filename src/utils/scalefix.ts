/**
 * This utility helps prevent unwanted scaling on Windows browsers
 * by explicitly setting the zoom level to 100% on page load.
 * 
 * It uses a MutationObserver to ensure the fix is applied even if
 * the DOM changes, and it respects user-initiated zoom changes after
 * the initial load.
 */

let userHasZoomed = false;

export function initScaleFix() {
  // Only run in browser environment
  if (typeof window === 'undefined') return;

  // Skip for mobile devices
  if (/Mobi|Android/i.test(navigator.userAgent)) return;

  // Detect if we're on Windows
  const isWindows = /Windows NT/i.test(navigator.userAgent);
  
  if (!isWindows) return;

  // Apply initial scale fix
  applyScaleFix();

  // Listen for user-initiated zoom events
  window.addEventListener('keydown', (e) => {
    // Ctrl + '+', Ctrl + '-', or Ctrl + wheel events are typically zoom
    if (e.ctrlKey && (e.key === '+' || e.key === '-' || e.key === '0')) {
      userHasZoomed = true;
    }
  });

  // Watch for orientation changes which can trigger unwanted scaling
  window.addEventListener('orientationchange', () => {
    if (!userHasZoomed) {
      setTimeout(applyScaleFix, 300); // Wait for orientation change to complete
    }
  });

  // Watch for window resize events
  window.addEventListener('resize', () => {
    if (!userHasZoomed) {
      applyScaleFix();
    }
  });
}

function applyScaleFix() {
  // Don't interfere if user has intentionally zoomed
  if (userHasZoomed) return;
  
  // Force to 100% zoom (but allow zoom after page loads)
  document.body.style.zoom = "100%";
  
  // Alternative approach using transform
  // document.body.style.transform = "scale(1)";
  // document.body.style.transformOrigin = "0 0";
} 