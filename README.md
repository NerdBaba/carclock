# CarClock

CarClock is a web application that provides a digital clock interface, designed to be used in vehicles or as a simple, always-on display.
![image](https://github.com/user-attachments/assets/0e4fbb07-6e00-4506-a5aa-9bae1ac8d43b)

## Website

You can access the live website at: [https://carclock.vercel.app/](https://carclock.vercel.app/)


## Technologies Used

*   **Next.js:** A React framework for building web applications.
*   **React:** A JavaScript library for building user interfaces.
*   **Tailwind CSS:** A utility-first CSS framework for styling the application.
*   **Prisma:** A modern database toolkit for type-safe database access.
*   **Drizzle:** A modern TypeScript ORM.
*   **tRPC:** End-to-end typesafe APIs.
*   **Radix UI:** A set of unstyled, accessible UI primitives.

## Getting Started

To get started with the project locally, follow these steps:

### Prerequisites

*   Node.js (>=18)
*   npm or Yarn
*   Docker (optional, for database)

### Installation

1.  Clone the repository:

    ```bash
    git clone <repository_url>
    cd carclock
    ```

2.  Install dependencies:

    ```bash
    npm install
    # or
    yarn install
    ```

3.  Set up the database:

    *   **Using Docker:**
        ```bash
        docker-compose up -d
        npm run db:push
        ```

    *   **Manually:**
        *   Install a PostgreSQL database.
        *   Configure the database connection in the `.env` file.
        *   Run `npm run db:migrate` to apply migrations.

4.  Configure Environment Variables:

    Create a `.env` file in the root directory and add the necessary environment variables. See `.env.example` for the required variables.

5.  Start the development server:

    ```bash
    npm run dev
    # or
    yarn dev
    ```

    Open [http://localhost:3000](http://localhost:3000) with your browser to see the application.

## Scripts

*   `npm run dev`: Starts the development server.
*   `npm run build`: Builds the application for production.
*   `npm run start`: Starts the production server.
*   `npm run lint`: Runs ESLint for code linting.
*   `npm run format:write`: Formats the code using Prettier.
*   `npm run typecheck`: Runs TypeScript type checking.
*   `npm run db:generate`: Generates the Prisma client.
*   `npm run db:migrate`: Applies database migrations.
*   `npm run db:push`: Pushes the database schema.
*   `npm run db:studio`: Opens Prisma Studio.
