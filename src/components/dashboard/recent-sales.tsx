"use client"

// Helper function to format currency in INR
const formatINR = (amount: number) => {
  return new Intl.NumberFormat('en-IN', {
    style: 'currency',
    currency: 'INR',
    maximumFractionDigits: 0
  }).format(amount);
};

export function RecentSales() {
  const sales = [
    {
      customer: {
        name: "Olivia Martin",
        email: "olivia.martin@email.com",
        avatar: "/avatars/01.png"
      },
      amount: formatINR(199900)
    },
    {
      customer: {
        name: "Jackson Lee",
        email: "jackson.lee@email.com",
        avatar: "/avatars/02.png"
      },
      amount: formatINR(3900)
    },
    {
      customer: {
        name: "Isabella Nguyen",
        email: "isabella.nguyen@email.com",
        avatar: "/avatars/03.png"
      },
      amount: formatINR(29900)
    },
    {
      customer: {
        name: "William Kim",
        email: "will@email.com",
        avatar: "/avatars/04.png"
      },
      amount: formatINR(9900)
    },
    {
      customer: {
        name: "Sofia Davis",
        email: "sofia.davis@email.com",
        avatar: "/avatars/05.png"
      },
      amount: formatINR(3900)
    }
  ]

  return (
    <div className="rounded-xl border bg-card p-6 shadow-sm">
      <div className="mb-4">
        <h3 className="text-lg font-semibold">Recent Sales</h3>
        <p className="text-sm text-muted-foreground">
          You made 265 sales this month.
        </p>
      </div>
      <div className="space-y-4">
        {sales.map((sale, index) => (
          <div key={index} className="flex items-center">
            <div className="relative mr-4 h-10 w-10 overflow-hidden rounded-full">
              <div className="flex h-full w-full items-center justify-center rounded-full bg-muted text-muted-foreground">
                {sale.customer.name.charAt(0)}
              </div>
            </div>
            <div className="flex-1">
              <p className="text-sm font-medium">{sale.customer.name}</p>
              <p className="text-xs text-muted-foreground">{sale.customer.email}</p>
            </div>
            <div className="text-sm font-medium">{sale.amount}</div>
          </div>
        ))}
      </div>
    </div>
  )
} 