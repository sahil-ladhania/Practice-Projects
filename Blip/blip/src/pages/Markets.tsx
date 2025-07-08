import { DataTable } from "@/components/MarketsTable";
import { TrendingChart } from "@/components/TrendingChart";

export default function Markets() {
  return (
    <div className="p-6 max-w-7xl mx-auto space-y-8">
      <h1 className="text-2xl font-semibold">Markets</h1>

      <TrendingChart />

      <DataTable />
    </div>
  );
}