import { AssetComparisonTable } from "@/components/AssetComparisonTable";
import { DualPriceCharts } from "@/components/DualPriceCharts";
import { Button } from "@/components/ui/button";

export default function Comparison() {
  return (
    <div className="p-6 max-w-7xl mx-auto space-y-8">
      <h1 className="text-2xl font-semibold">Compare Assets</h1>

      <AssetComparisonTable />

      <DualPriceCharts />

      <div className="flex justify-center gap-4 pt-6">
        <Button variant="secondary">Reset Comparison</Button>
        <Button variant="default">Close</Button>
      </div>
    </div>
  );
}