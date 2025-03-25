"use client"

// Helper function to format currency in INR
const formatINR = (amount: number) => {
  return new Intl.NumberFormat('en-IN', {
    style: 'currency',
    currency: 'INR',
    maximumFractionDigits: 0
  }).format(amount);
};

export function RevenueChart() {
  // This would normally use a charting library like recharts or chart.js
  // For now, we'll create a simple bar chart with CSS
  
  const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]
  const data = [
    { month: "Jan", value: 250000 },
    { month: "Feb", value: 100000 },
    { month: "Mar", value: 500000 },
    { month: "Apr", value: 400000 },
    { month: "May", value: 350000 },
    { month: "Jun", value: 500000 },
    { month: "Jul", value: 280000 },
    { month: "Aug", value: 420000 },
    { month: "Sep", value: 430000 },
    { month: "Oct", value: 550000 },
    { month: "Nov", value: 600000 },
    { month: "Dec", value: 330000 },
  ]
  
  const maxValue = Math.max(...data.map(item => item.value))
  
  return (
    <div className="rounded-xl border bg-card p-6 shadow-sm">
      <div className="mb-4">
        <h3 className="text-lg font-semibold">Overview</h3>
      </div>
      <div className="h-[300px]">
        <div className="flex h-full items-end gap-2">
          {data.map((item) => (
            <div key={item.month} className="flex flex-1 flex-col items-center">
              <div 
                className="w-full bg-primary" 
                style={{ 
                  height: `${(item.value / maxValue) * 100}%`,
                  minHeight: '4px'
                }}
              />
              <div className="mt-2 text-xs">{item.month}</div>
            </div>
          ))}
        </div>
      </div>
      <div className="mt-4 grid grid-cols-4 gap-2 text-xs text-muted-foreground">
        <div>₹0</div>
        <div>₹1,50,000</div>
        <div>₹3,00,000</div>
        <div>₹6,00,000</div>
      </div>
    </div>
  )
} 