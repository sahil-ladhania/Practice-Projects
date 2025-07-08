import { Card } from "@/components/ui/card";

const data = [
  {
    name: "Bitcoin",
    price: "$30,000",
    change: "+2.5%",
    marketCap: "$580B",
    volume: "$15B",
    circ: "19.4M",
    total: "21M",
  },
  {
    name: "Ethereum",
    price: "$1,800",
    change: "+1.8%",
    marketCap: "$220B",
    volume: "$8B",
    circ: "120M",
    total: "120M",
  },
];

export function AssetComparisonTable() {
  return (
    <Card className="overflow-x-auto p-4">
      <table className="w-full text-sm">
        <thead className="border-b text-muted-foreground">
          <tr>
            <th className="text-left py-2 px-4">Asset</th>
            <th className="text-left py-2 px-4">Price</th>
            <th className="text-left py-2 px-4">24h %</th>
            <th className="text-left py-2 px-4">Market Cap</th>
            <th className="text-left py-2 px-4">Volume (24h)</th>
            <th className="text-left py-2 px-4">Circulating Supply</th>
            <th className="text-left py-2 px-4">Total Supply</th>
          </tr>
        </thead>
        <tbody>
          {data.map((coin, i) => (
            <tr key={i} className="border-t">
              <td className="py-2 px-4">{coin.name}</td>
              <td className="py-2 px-4">{coin.price}</td>
              <td className="py-2 px-4 text-green-600">{coin.change}</td>
              <td className="py-2 px-4">{coin.marketCap}</td>
              <td className="py-2 px-4">{coin.volume}</td>
              <td className="py-2 px-4">{coin.circ}</td>
              <td className="py-2 px-4">{coin.total}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </Card>
  );
}