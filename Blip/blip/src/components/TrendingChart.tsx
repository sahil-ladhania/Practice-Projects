import {
    LineChart,
    Line,
    XAxis,
    YAxis,
    ResponsiveContainer,
    Tooltip,
  } from "recharts";
  import { Card } from "@/components/ui/card";
  
  const data = [
    { name: "Mon", price: 27000 },
    { name: "Tue", price: 27500 },
    { name: "Wed", price: 29000 },
    { name: "Thu", price: 28000 },
    { name: "Fri", price: 30000 },
    { name: "Sat", price: 29800 },
    { name: "Sun", price: 30200 },
  ];
  
  export function TrendingChart() {
    return (
      <Card className="p-4">
        <h2 className="text-sm text-muted-foreground mb-2">Trending: Bitcoin</h2>
        <div className="text-2xl font-bold">$29,450</div>
        <p className="text-green-600 text-sm mb-4">Last 7 Days +2.3%</p>
        <div className="h-40">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={data}>
              <XAxis dataKey="name" />
              <YAxis hide />
              <Tooltip />
              <Line
                type="monotone"
                dataKey="price"
                stroke="#22c55e"
                strokeWidth={2}
                dot={false}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </Card>
    );
  }