import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import type { Coin } from "@/types/coin";
import LoaderComponent from "./LoaderComponent";
import { formatMarketCap } from "@/utils/formatMarketCap";
import { getCoinData } from "@/services/getCoinDetails";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { clearCurrentCoinDetails, setCurrentCoinDetails } from "@/store/slices/coinDetailsSlice";
import type { RootState } from "@/store/store";

export function DataTable({ marketData, isLoading }) {
  // useNavigate , useDispatch , useSelector
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const currentCoinDetails = useSelector((state: RootState) => state.coinDetails.currentCoinDetails);

  // Handler Functions
  const handleViewDetailsOfCoin = async(coinId: string) => {
    try {
      console.log("Hi");
      const coinData = await getCoinData(coinId);
      navigate(`/details/${coinId}`);
      if(!currentCoinDetails){
        dispatch(setCurrentCoinDetails(coinData));  
      }
      else{
        dispatch(clearCurrentCoinDetails());
        dispatch(setCurrentCoinDetails(coinData));
      }
    }
    catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="rounded-md border overflow-x-auto">
      {
        isLoading === true ? 
          (
            <LoaderComponent />
          ) 
          : 
          (
          <div className="max-h-[500px] overflow-y-auto">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead className="w-[50px]">#</TableHead>
                  <TableHead>Coin</TableHead>
                  <TableHead>Price</TableHead>
                  <TableHead>24h %</TableHead>
                  <TableHead>Market Cap</TableHead>
                  <TableHead className="text-center">Action</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {marketData.map((coin: Coin) => (
                  <TableRow key={coin.id}>
                    <TableCell>{coin.market_cap_rank}</TableCell>
                    <TableCell className="font-medium">{coin.name}</TableCell>
                    <TableCell>{coin.current_price}</TableCell>
                    <TableCell>
                      <Badge
                        variant={
                          coin.market_cap_change_percentage_24h > 0
                            ? "success"
                            : "destructive"
                        }
                        className={
                          coin.market_cap_change_percentage_24h > 0
                            ? "bg-green-500/10 text-green-500 hover:bg-green-500/20"
                            : "bg-red-500/10 text-red-500 hover:bg-red-500/20"
                        }
                      >
                        {coin.market_cap_change_percentage_24h.toFixed(2)}%
                      </Badge>
                    </TableCell>
                    <TableCell>
                      <Badge className="bg-blue-500/10 text-blue-500 hover:bg-blue-500/20">
                        {formatMarketCap(coin.market_cap)}
                      </Badge>
                    </TableCell>
                    <TableCell className="text-center">
                      <Button onClick={() => handleViewDetailsOfCoin(coin.id)} size="sm" variant="outline">
                        View
                      </Button>
                    </TableCell>
                    <TableCell className="text-center">
                      <Button size="sm" variant="outline">
                        Compare
                      </Button>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        )
      }
    </div>
  );
}