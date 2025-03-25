import "~/styles/globals.css";

import { GeistSans } from "geist/font/sans";
import { type Metadata, type Viewport } from "next";

import { TRPCReactProvider } from "~/trpc/react";
import { CarProvider } from "~/context/car-context";
import { ScaleFixInitializer } from "~/components/scale-fix-initializer";

export const metadata: Metadata = {
  title: "CarClock - Car Rental Service",
  description: "The smarter way to rent a car. Convenient, affordable, and reliable car rentals on your schedule.",
  icons: [{ rel: "icon", url: "/favicon.ico" }],
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  minimumScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className="dark">
      <body className={`min-h-screen bg-background text-foreground ${GeistSans.className}`}>
        {/* Initialize scale fix for Windows browsers */}
        <ScaleFixInitializer />
        <TRPCReactProvider>
          <CarProvider>{children}</CarProvider>
        </TRPCReactProvider>
      </body>
    </html>
  );
}
