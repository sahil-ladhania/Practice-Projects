import { PriceChart } from "@/components/PriceChart";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";

const mockData = {
  name: "Bitcoin",
  symbol: "BTC",
  price: "$29,450",
  percentChange: "+2.3%",
  marketCap: "$570.23B",
  volume24h: "$12.34B",
  circulatingSupply: "19.45M BTC",
  totalSupply: "21M BTC",
  maxSupply: "21M BTC",
  fdv: "$618.45B",
  ath: "$68,789 (Nov 10, 2021)",
  atl: "$0.00 (Jul 6, 2010)",
};

export default function Details() {
  return (
    <div className="p-6 max-w-5xl mx-auto space-y-8">
      
      {/* Breadcrumb */}
      <div className="text-sm text-muted-foreground">
        Markets / <span className="text-foreground font-medium">{mockData.name}</span>
      </div>

      {/* Title + Bookmark */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-semibold">{mockData.name}</h1>
          <p className="text-muted-foreground text-sm">{mockData.symbol}</p>
        </div>
        <Button variant="outline">Bookmark</Button>
      </div>

      {/* Price + Change */}
      <div className="space-y-2">
        <p className="text-sm text-muted-foreground">7D</p>
        <p className="text-3xl font-bold">{mockData.price}</p>
        <p className="text-green-600 text-sm">Last 7 Days {mockData.percentChange}</p>
      </div>

      {/* Chart Placeholder */}
      <div className="w-full h-48 bg-muted/50 rounded-lg flex items-center justify-center text-muted-foreground">
        {/* Replace with chart later */}
        {/* 7-Day Price Chart */}
        <PriceChart/>
      </div>

      {/* Stats Grid */}
      <div className="space-y-4">
        <h2 className="text-lg font-medium">Bitcoin Stats</h2>
        <Separator />

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm">
          <Stat label="Market Cap" value={mockData.marketCap} />
          <Stat label="Volume (24h)" value={mockData.volume24h} />
          <Stat label="Circulating Supply" value={mockData.circulatingSupply} />
          <Stat label="Total Supply" value={mockData.totalSupply} />
          <Stat label="Max Supply" value={mockData.maxSupply} />
          <Stat label="Fully Diluted Valuation" value={mockData.fdv} />
          <Stat label="All-Time High" value={mockData.ath} />
          <Stat label="All-Time Low" value={mockData.atl} />
        </div>
      </div>
    </div>
  );
}

function Stat({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex flex-col gap-1">
      <span className="text-muted-foreground">{label}</span>
      <span className="text-foreground font-medium">{value}</span>
    </div>
  );
}