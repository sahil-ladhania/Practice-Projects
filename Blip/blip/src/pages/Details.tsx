import { PriceChart } from "@/components/PriceChart";
import { Separator } from "@/components/ui/separator";
import type { RootState } from "@/store/store";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

export default function Details() {
  // useSelector and useDispatch
  const currentCoinDetails = useSelector((state: RootState) => state.coinDetails.currentCoinDetails);
  
  return (
    <div className="p-6 max-w-5xl mx-auto space-y-8">
      
      {/* Breadcrumb */}
      <div className="text-sm text-muted-foreground">
        <Link to='/markets' className="mr-2 text-sm underline">Markets</Link>
        / 
        <span className="text-foreground font-medium ml-2">{currentCoinDetails?.name}</span>
      </div>

      {/* Title + Bookmark */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-semibold">{currentCoinDetails?.name}</h1>
          <p className="text-muted-foreground text-sm">{currentCoinDetails?.symbol?.toUpperCase()}</p>
        </div>
      </div>

      {/* Price + Change */}
      <div className="space-y-2">
        <p className="text-sm text-muted-foreground">7D</p>
        <p className="text-3xl font-bold">{currentCoinDetails?.market_data?.current_price?.usd.toLocaleString()}</p>
        <p className="text-green-600 text-sm">Last 7 Days {currentCoinDetails?.market_data?.price_change_percentage_7d?.toFixed(2)}</p>
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
          <Stat label="Market Cap" value={`$${currentCoinDetails?.market_data?.market_cap?.usd.toLocaleString()}`} />
          <Stat label="Volume (24h)" value={`$${currentCoinDetails?.market_data?.total_volume?.usd.toLocaleString()}`} />
          <Stat label="Circulating Supply" value={`${currentCoinDetails?.market_data?.circulating_supply?.toLocaleString()} ${currentCoinDetails?.symbol?.toUpperCase()}`} />
          <Stat label="Total Supply" value={`${currentCoinDetails?.market_data?.total_supply?.toLocaleString()} ${currentCoinDetails?.symbol?.toUpperCase()}`} />
          <Stat label="Max Supply" value={`${currentCoinDetails?.market_data?.max_supply?.toLocaleString()} ${currentCoinDetails?.symbol?.toUpperCase()}`} />
          <Stat label="Fully Diluted Valuation" value={`$${currentCoinDetails?.market_data?.fully_diluted_valuation?.usd?.toLocaleString()}`} />
          <Stat label="All-Time High" value={`$${currentCoinDetails?.market_data?.ath?.usd?.toLocaleString()} (${new Date(currentCoinDetails?.market_data?.ath_date?.usd).toDateString()})`} />
          <Stat label="All-Time Low" value={`$${currentCoinDetails?.market_data?.atl?.usd?.toLocaleString()} (${new Date(currentCoinDetails?.market_data?.atl_date?.usd).toDateString()})`} />
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