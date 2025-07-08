import {
    LineChart,
    Line,
    XAxis,
    Tooltip,
    ResponsiveContainer,
  } from "recharts";
  
  const data = [
    { day: "Mon", price: 27000 },
    { day: "Tue", price: 27500 },
    { day: "Wed", price: 29000 },
    { day: "Thu", price: 28000 },
    { day: "Fri", price: 30000 },
    { day: "Sat", price: 31000 },
    { day: "Sun", price: 29450 },
  ];
  
  export function PriceChart() {
    return (
      <div className="w-full h-48">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={data}>
            <XAxis
              dataKey="day"
              axisLine={false}
              tickLine={false}
              stroke="#888"
              fontSize={12}
            />
            <Tooltip
              contentStyle={{
                backgroundColor: "#fff",
                borderRadius: "0.5rem",
                fontSize: "0.75rem",
                border: "1px solid #e5e7eb",
              }}
              labelStyle={{ color: "#888" }}
              formatter={(value: any) => [`$${value}`, "Price"]}
            />
            <Line
              type="monotone"
              dataKey="price"
              stroke="#4ade80" // green-400
              strokeWidth={2.5}
              dot={false}
              activeDot={{ r: 5 }}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    );
  }