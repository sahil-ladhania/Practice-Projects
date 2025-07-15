import { DataTable } from "@/components/MarketsTable";
import { TrendingChart } from "@/components/TrendingChart";
import { getMarketData } from "@/services/getMarketData";
import { useEffect, useState } from "react";

export default function Markets() {
  // State Variables
  const [marketData , setMarketData] = useState<[]>([]);
  const [isLoading , setIsLoading] = useState<boolean>(true);

  // useEffect
  useEffect(() => {
    let isMounted = true;

    const fetchCoinsData = async() => {
      try {
        const data = await getMarketData();
        if (isMounted && data) {
          setMarketData(data);
          console.log(data);
          setIsLoading(false);
        }
      }
      catch (error) {
        console.log(error);
      }
    }

    fetchCoinsData();
    return () => {
      isMounted = false;
    }
  }, []);
  
  return (
    <div className="p-6 max-w-7xl mx-auto space-y-8">
      <h1 className="text-2xl font-semibold">Markets</h1>

      <TrendingChart />

      <DataTable isLoading={isLoading} marketData={marketData}/>
    </div>
  );
}