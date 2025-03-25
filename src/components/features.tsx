"use client"

import { useEffect, useRef } from "react"
import { Clock, Star, Shield, CreditCard, RefreshCcw, Map, Headphones, Zap } from "lucide-react"

interface FeatureProps {
  icon: React.ReactNode
  title: string
  description: string
  delay: number
}

function Feature({ icon, title, description, delay }: FeatureProps) {
  const featureRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            setTimeout(() => {
              entry.target.classList.add('opacity-100', 'translate-y-0')
              entry.target.classList.remove('opacity-0', 'translate-y-10')
            }, delay)
            observer.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.1 }
    )

    if (featureRef.current) {
      observer.observe(featureRef.current)
    }

    return () => {
      if (featureRef.current) {
        observer.unobserve(featureRef.current)
      }
    }
  }, [delay])

  return (
    <div 
      ref={featureRef} 
      className="opacity-0 translate-y-10 transition-all duration-700 ease-out"
    >
      <div className="relative overflow-hidden rounded-xl bg-gradient-to-b from-primary to-background p-6 backdrop-blur-sm">
        {/* Background blur and glow effects */}
        <div className="absolute -top-10 -right-10 h-40 w-40 rounded-full bg-secondary/10 blur-3xl"></div>
        <div className="absolute -bottom-10 -left-10 h-40 w-40 rounded-full bg-accent/10 blur-3xl"></div>
        
        <div className="relative z-10">
          <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-secondary/10 text-secondary">
            {icon}
          </div>
          <h3 className="mb-3 text-xl font-bold tracking-tight">{title}</h3>
          <p className="text-foreground/70">
            {description}
          </p>
        </div>
      </div>
    </div>
  )
}

export function Features() {
  const sectionRef = useRef<HTMLDivElement>(null)
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('opacity-100')
            entry.target.classList.remove('opacity-0')
            observer.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.1 }
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current)
      }
    }
  }, [])

  return (
    <section 
      ref={sectionRef} 
      className="py-16 md:py-24 opacity-0 transition-opacity duration-500 ease-out"
    >
      <div className="container mx-auto px-6 lg:px-8">
        <div className="mx-auto mb-16 max-w-3xl text-center">
          <div className="inline-flex items-center gap-2 rounded-full bg-secondary/20 px-4 py-2 text-sm font-bold tracking-wide text-secondary mb-6">
            <RefreshCcw className="h-4 w-4" /> Reimagined Car Rental Experience
          </div>
          <h2 className="mb-6 text-3xl font-black tracking-tight md:text-4xl">Why Choose CarClock?</h2>
          <p className="text-lg font-medium text-foreground/70 max-w-2xl mx-auto">
            We offer a seamless car rental experience with flexible rates, transparent pricing,
            and exceptional customer service that puts you in control.
          </p>
        </div>
        
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          <Feature 
            icon={<Clock className="h-6 w-6" />}
            title="Flexible Timing"
            description="Rent by the hour, day, or week. Our flexible timing options ensure you only pay for what you need."
            delay={100}
          />
          
          <Feature 
            icon={<Star className="h-6 w-6" />}
            title="Premium Vehicles"
            description="Choose from our fleet of well-maintained, late-model vehicles to ensure a comfortable and reliable ride."
            delay={200}
          />
          
          <Feature 
            icon={<Shield className="h-6 w-6" />}
            title="Comprehensive Insurance"
            description="Drive with peace of mind knowing you're covered by our comprehensive insurance policy."
            delay={300}
          />
          
          <Feature 
            icon={<CreditCard className="h-6 w-6" />}
            title="Transparent Pricing"
            description="No hidden fees or surprise charges. Our pricing is clear and transparent from booking to return."
            delay={400}
          />
          
          <Feature 
            icon={<Map className="h-6 w-6" />}
            title="Convenient Locations"
            description="Pick up and drop off your car at any of our convenient locations throughout the city."
            delay={500}
          />
          
          <Feature 
            icon={<Headphones className="h-6 w-6" />}
            title="24/7 Support"
            description="Our customer service team is available around the clock to assist you with any questions or issues."
            delay={600}
          />
          
          <Feature 
            icon={<Zap className="h-6 w-6" />}
            title="Quick Booking"
            description="Our streamlined booking process lets you reserve your car in minutes, not hours."
            delay={700}
          />
          
          <Feature 
            icon={<RefreshCcw className="h-6 w-6" />}
            title="Flexible Cancellation"
            description="Plans change? No problem. Our flexible cancellation policy has you covered."
            delay={800}
          />
        </div>
      </div>
    </section>
  )
} 