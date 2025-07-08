import { Card } from "@/components/ui/card";
import { Chart } from "./chart";

const btcData = [
  { name: "Jul 1", value: 27000 },
  { name: "Jul 8", value: 27500 },
  { name: "Jul 15", value: 29000 },
  { name: "Jul 22", value: 28000 },
  { name: "Jul 29", value: 30000 },
];

const ethData = [
  { name: "Jul 1", value: 1700 },
  { name: "Jul 8", value: 1750 },
  { name: "Jul 15", value: 1800 },
  { name: "Jul 22", value: 1760 },
  { name: "Jul 29", value: 1800 },
];

export function DualPriceCharts() {
  return (
    <div className="space-y-4">
      <h2 className="text-lg font-medium">Price Chart</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Card className="p-4 space-y-2">
          <div>
            <h3 className="text-sm text-muted-foreground">Bitcoin</h3>
            <p className="text-2xl font-bold">$30,000</p>
            <p className="text-green-600 text-sm">Past 30 Days +2.5%</p>
          </div>
          <Chart data={btcData} />
        </Card>

        <Card className="p-4 space-y-2">
          <div>
            <h3 className="text-sm text-muted-foreground">Ethereum</h3>
            <p className="text-2xl font-bold">$1,800</p>
            <p className="text-green-600 text-sm">Past 30 Days +1.8%</p>
          </div>
          <Chart data={ethData} />
        </Card>
      </div>
    </div>
  );
}