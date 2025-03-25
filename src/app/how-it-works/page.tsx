"use client"

import { Lightbulb, Search, Calendar, Car, CreditCard, Clock, CheckCircle, PhoneCall } from "lucide-react"
import { Button } from "~/components/ui/button"
import { Card, CardContent } from "~/components/ui/card"
import Link from "next/link"
import { Layout } from "~/components/layout"

const steps = [
  {
    id: 1,
    title: "Browse Cars",
    description: "Explore our diverse fleet of vehicles and find the perfect car for your needs. Filter by type, price, and features.",
    icon: <Search className="h-8 w-8 text-secondary" />,
  },
  {
    id: 2,
    title: "Choose Time & Location",
    description: "Select your preferred pickup location and rental duration - by hour, day, or week.",
    icon: <Calendar className="h-8 w-8 text-secondary" />,
  },
  {
    id: 3,
    title: "Book Instantly",
    description: "Complete your booking in minutes with our simple checkout process. Secure payment and instant confirmation.",
    icon: <CreditCard className="h-8 w-8 text-secondary" />,
  },
  {
    id: 4,
    title: "Enjoy Your Ride",
    description: "Pick up your car at the scheduled time and enjoy your journey with full insurance coverage.",
    icon: <Car className="h-8 w-8 text-secondary" />,
  },
]

const faqs = [
  {
    question: "What documents do I need to rent a car?",
    answer: "You'll need a valid driver's license, a credit or debit card for payment, and a government-issued ID. International customers need a passport and international driver's permit.",
  },
  {
    question: "Can I rent a car by the hour?",
    answer: "Yes! We offer flexible hourly rentals starting from just ₹599/hour, making it perfect for short trips or business meetings.",
  },
  {
    question: "Is insurance included in the rental price?",
    answer: "Basic insurance is included in all our rental packages. Additional coverage options are available during the booking process.",
  },
  {
    question: "What is your cancellation policy?",
    answer: "Free cancellation up to 24 hours before your scheduled pickup. Cancellations within 24 hours may incur a fee of one day's rental.",
  },
  {
    question: "Can I extend my rental period?",
    answer: "Yes, you can extend your rental through our app or by calling customer service, subject to availability. It's best to notify us at least 6 hours before your scheduled return.",
  },
  {
    question: "Do you offer doorstep delivery and pickup?",
    answer: "Yes, we offer doorstep delivery and pickup for an additional fee in select cities. You can select this option during checkout.",
  },
]

export default function HowItWorksPage() {
  return (
    <Layout>
      <main className="relative">
        {/* Hero section with gradient background */}
        <section className="relative overflow-hidden bg-gradient-to-b from-secondary/20 via-background/80 to-background pb-8 pt-24 md:pb-12 md:pt-32">
          {/* Abstract background elements */}
          <div className="absolute -left-16 top-40 h-64 w-64 rounded-full bg-accent/20 blur-3xl"></div>
          <div className="absolute right-0 top-1/4 h-72 w-72 rounded-full bg-secondary/20 blur-3xl"></div>
          
          <div className="container mx-auto relative">
            <div className="max-w-3xl mx-auto text-center mb-12">
              <div className="inline-flex items-center gap-2 rounded-full bg-secondary/20 px-4 py-2 text-sm font-bold tracking-wide text-secondary mb-6">
                <Lightbulb className="h-4 w-4" /> Simple & Hassle-free Process
              </div>
              
              <h1 className="text-4xl font-black tracking-tight md:text-5xl">
                How CarClock 
                <span className="mt-2 block bg-gradient-to-r from-secondary via-secondary/80 to-accent bg-clip-text text-transparent">
                  Makes Car Rental Easy
                </span>
              </h1>
              
              <p className="mt-6 text-xl font-medium text-foreground/80">
                Renting a car should be simple. We've streamlined the entire process from booking to return, putting you in control of your journey.
              </p>
            </div>
          </div>
        </section>
        
        {/* Steps section */}
        <section className="container mx-auto px-4 py-16">
          <div className="max-w-4xl mx-auto">
            <div className="grid gap-8 md:grid-cols-2">
              {steps.map((step) => (
                <Card key={step.id} className="border-border/20 bg-[#1a1a1a] hover:shadow-lg hover:shadow-secondary/10 transition-all">
                  <CardContent className="p-6">
                    <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-secondary/10">
                      {step.icon}
                      <span className="absolute -right-1 -top-1 flex h-6 w-6 items-center justify-center rounded-full bg-secondary text-xs font-bold text-white">
                        {step.id}
                      </span>
                    </div>
                    <h3 className="mb-2 text-xl font-bold">{step.title}</h3>
                    <p className="text-foreground/70">{step.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
            
            <div className="mt-12 text-center">
              <Link href="/cars">
                <Button size="lg" className="bg-secondary text-white">
                  Browse Cars Now
                </Button>
              </Link>
            </div>
          </div>
        </section>
        
        {/* Features section */}
        <section className="bg-gradient-to-r from-secondary/10 via-secondary/5 to-transparent py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold text-center mb-12">Why Choose CarClock?</h2>
              
              <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                <div className="flex flex-col items-center text-center p-6">
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-secondary/20">
                    <Clock className="h-6 w-6 text-secondary" />
                  </div>
                  <h3 className="mb-2 text-lg font-semibold">Flexible Timing</h3>
                  <p className="text-foreground/70">Rent by the hour, day, or week. Pay only for what you need.</p>
                </div>
                
                <div className="flex flex-col items-center text-center p-6">
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-secondary/20">
                    <CreditCard className="h-6 w-6 text-secondary" />
                  </div>
                  <h3 className="mb-2 text-lg font-semibold">No Hidden Fees</h3>
                  <p className="text-foreground/70">Transparent pricing with all fees clearly displayed before booking.</p>
                </div>
                
                <div className="flex flex-col items-center text-center p-6">
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-secondary/20">
                    <CheckCircle className="h-6 w-6 text-secondary" />
                  </div>
                  <h3 className="mb-2 text-lg font-semibold">Quality Assured</h3>
                  <p className="text-foreground/70">All vehicles undergo thorough inspection before each rental.</p>
                </div>
                
                <div className="flex flex-col items-center text-center p-6">
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-secondary/20">
                    <PhoneCall className="h-6 w-6 text-secondary" />
                  </div>
                  <h3 className="mb-2 text-lg font-semibold">24/7 Support</h3>
                  <p className="text-foreground/70">Our customer service team is available round the clock to assist you.</p>
                </div>
                
                <div className="flex flex-col items-center text-center p-6">
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-secondary/20">
                    <Calendar className="h-6 w-6 text-secondary" />
                  </div>
                  <h3 className="mb-2 text-lg font-semibold">Easy Booking</h3>
                  <p className="text-foreground/70">Book a car in under 2 minutes with our streamlined process.</p>
                </div>
                
                <div className="flex flex-col items-center text-center p-6">
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-secondary/20">
                    <Car className="h-6 w-6 text-secondary" />
                  </div>
                  <h3 className="mb-2 text-lg font-semibold">Diverse Fleet</h3>
                  <p className="text-foreground/70">From economy to luxury, find the perfect car for your needs.</p>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* FAQ section */}
        <section className="container mx-auto px-4 py-16">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12">Frequently Asked Questions</h2>
            
            <div className="space-y-6">
              {faqs.map((faq, index) => (
                <div key={index} className="rounded-lg border border-border/20 bg-[#1a1a1a] p-6">
                  <h3 className="mb-3 text-lg font-semibold">{faq.question}</h3>
                  <p className="text-foreground/70">{faq.answer}</p>
                </div>
              ))}
            </div>
            
            <div className="mt-12 text-center">
              <h3 className="text-xl font-semibold mb-4">Still have questions?</h3>
              <Button size="lg" className="bg-secondary text-white">
                Contact Customer Support
              </Button>
            </div>
          </div>
        </section>
      </main>
    </Layout>
  )
} 