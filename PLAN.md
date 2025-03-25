# WiseCar - Car Rental Platform Plan

## Project Overview
A modern car rental platform similar to Zoom Car, featuring a website, mobile apps (iOS/Android), and an admin dashboard. Built with T3 Stack for type safety and modern development practices.

## System Architecture

### 1. Website (Next.js)
- **Homepage**
  - Featured cars showcase
  - Search/filter functionality
  - Location-based car availability
  - User authentication/registration

- **Car Selection**
  - Detailed car listings
  - Pricing calculator (hourly/daily rates)
  - Availability calendar
  - Car specifications and images
  - Reviews and ratings

- **Booking Flow**
  - Date/time selection
  - Pricing breakdown
  - User details collection
  - Payment integration
  - Booking confirmation

### 2. Mobile Apps (React Native)
- **User Features**
  - User authentication
  - Car browsing and search
  - Booking management
  - Payment processing
  - Trip history
  - Push notifications

- **Car Features**
  - Car location tracking
  - Digital key access
  - Emergency support
  - Trip recording
  - Fuel level monitoring

### 3. Admin Dashboard
- **Car Management**
  - Add/edit/remove cars
  - Set pricing and availability
  - Track car status
  - Maintenance scheduling

- **User Management**
  - View all users
  - Handle user issues
  - Manage bookings
  - View payment history

- **Analytics**
  - Revenue reports
  - Usage statistics
  - Popular cars
  - Peak hours analysis

## Database Schema (Prisma)

### Core Models
```prisma
model Car {
  id          String   @id @default(cuid())
  name        String
  model       String
  brand       String
  type        String
  seats       Int
  transmission String
  fuelType    String
  pricePerHour Float
  pricePerDay  Float
  images      String[]
  status      String   // available, rented, maintenance
  location    Location?
  bookings    Booking[]
  createdAt   DateTime @default(now())
  updatedAt   DateTime @updatedAt
}

model Booking {
  id          String   @id @default(cuid())
  car         Car      @relation(fields: [carId], references: [id])
  carId       String
  user        User     @relation(fields: [userId], references: [id])
  userId      String
  startTime   DateTime
  endTime     DateTime
  totalPrice  Float
  status      String   // pending, confirmed, completed, cancelled
  paymentStatus String
  createdAt   DateTime @default(now())
  updatedAt   DateTime @updatedAt
}

model Location {
  id          String   @id @default(cuid())
  address     String
  city        String
  state       String
  country     String
  coordinates Json     // {lat: number, lng: number}
  car         Car?
  createdAt   DateTime @default(now())
  updatedAt   DateTime @updatedAt
}

model User {
  id          String   @id @default(cuid())
  name        String?
  email       String   @unique
  phone       String?
  license     String?
  bookings    Booking[]
  createdAt   DateTime @default(now())
  updatedAt   DateTime @updatedAt
}
```

## Tech Stack

### Frontend
- Next.js 14+ (App Router)
- React Native
- TailwindCSS
- Shadcn/ui
- React Query
- Zustand (State Management)

### Backend
- tRPC
- Prisma
- PostgreSQL
- NextAuth.js (for authentication)

### Mobile
- React Native
- Expo
- React Navigation
- Native Base or React Native Paper

### Admin Dashboard
- Next.js
- TanStack Table
- Recharts
- React Hook Form
- Zod

## Development Phases

### Phase 1: Core Setup and UI Development
- [x] Project initialization with T3 Stack
- [x] Core UI components using shadcn/ui
- [x] Basic website layout (header, footer, navigation)
- [x] Homepage with hero section and features
- [x] Car listing and filtering
- [x] Car detail components with specifications
- [x] Responsive design for mobile and desktop

### Phase 2: Admin Dashboard
- [x] Admin dashboard layout
- [x] Admin authentication and protected routes
- [x] Car management interface (add/edit/delete cars)
- [x] Dashboard analytics (stats, charts, revenue)
- [x] Persistent storage for car data
- [ ] User management
- [ ] Booking management

### Phase 3: Database & Authentication
- [ ] Database schema implementation
- [ ] Prisma ORM setup
- [ ] User authentication (login/register)
- [ ] Admin vs regular user roles
- [ ] Protected routes
- [ ] Profile management

### Phase 4: Booking Flow
- [ ] Car availability calendar
- [ ] Booking creation flow
- [ ] Payment integration
- [ ] Booking management (view, cancel)
- [ ] Email notifications
- [ ] User dashboard for bookings

### Phase 5: Mobile App Development (Future Phase)
- [ ] App setup with Expo
- [ ] Core screens implementation
- [ ] Authentication
- [ ] Car booking flow
- [ ] Location services

### Phase 6: Advanced Features
- [ ] Reviews and ratings
- [ ] Search optimization
- [ ] Location-based car availability
- [ ] Analytics improvement
- [ ] Performance optimization

## Current Progress

### Completed
1. **Basic Website Structure**
   - Created core layout with header, footer, and navigation
   - Implemented responsive design using Tailwind CSS
   - Created home page with hero section and featured cars
   - Built car listing page with filtering capabilities
   - Used shadcn/ui components for consistent styling

2. **Admin Dashboard**
   - Created separate admin routes with authentication
   - Implemented dashboard with analytics and stats
   - Built car management system with CRUD operations
   - Added data persistence using localStorage
   - Created settings with data reset functionality
   - Added mock data for revenue charts and sales

3. **Data Management**
   - Created a React context for car data
   - Implemented persistent storage using localStorage
   - Added INR pricing format
   - Allowed CRUD operations on cars

### In Progress
1. **Database Integration**
   - Setting up Prisma schema
   - Preparing for database connection

2. **Authentication**
   - Basic admin authentication implemented
   - Need to expand for regular users

### Next Steps
1. Implement the database integration with Prisma
2. Create proper authentication system with NextAuth.js
3. Develop the booking flow
4. Build user dashboard for managing bookings
5. Implement payment processing

## Notes
- All pricing is in Indian Rupees (INR)
- Focus on type safety throughout the application
- Implement proper error handling
- Ensure responsive design
- Follow accessibility guidelines
- Maintain consistent styling across platforms 