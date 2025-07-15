import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Card } from '@/components/ui/card';
import { Trash2 } from 'lucide-react';
import { useDispatch, useSelector } from 'react-redux';
import type { AppDispatch, RootState } from '@/store/store';
import { removeCoin } from '@/store/slices/watchlistSlice';
import type { Coin } from '@/types/coin';
import { formatMarketCap } from '@/utils/formatMarketCap';

export const WatchlistTable = () => {
  // useSelector & useDispatch
  const dispatch = useDispatch<AppDispatch>();
  const coins = useSelector((state: RootState) => state.watchlist.coins);

  // Handler Functions
  const handleRemoveCoin = (coin: Coin) => {
    dispatch(removeCoin(coin.id));
  }

  return (
    (coins.length > 0) ?
      <Card className="bg-card border-border">
        <Table>
          <TableHeader>
            <TableRow className="border-border">
              <TableHead className="w-12 text-muted-foreground">#</TableHead>
              <TableHead className="text-muted-foreground">Coin</TableHead>
              <TableHead className="text-muted-foreground">Price</TableHead>
              <TableHead className="text-muted-foreground">24h %</TableHead>
              <TableHead className="text-muted-foreground">Market Cap</TableHead>
              <TableHead className="text-muted-foreground"></TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {coins?.map((coin) => (
              <TableRow key={coin.id} className="hover:bg-muted/50 border-border">
                <TableCell className="font-medium text-muted-foreground">
                  {coin.market_cap_rank}
                </TableCell>
                <TableCell className="font-medium">
                  {coin.name}
                </TableCell>
                <TableCell className="font-medium">
                  {coin.current_price}
                </TableCell>
                <TableCell>
                  <Badge 
                    variant={(coin.market_cap_change_percentage_24h > 0) ? "success" : "destructive"}
                    className={(coin.market_cap_change_percentage_24h > 0) ? "bg-green-500/10 text-green-500 hover:bg-green-500/20" : ""}
                  >
                    {coin.market_cap_change_percentage_24h}
                  </Badge>
                </TableCell>
                <TableCell>
                  <Badge className="bg-blue-500/10 text-blue-500 hover:bg-blue-500/20">
                    {formatMarketCap(coin.market_cap)}
                  </Badge>
                </TableCell>
                <TableCell>
                  <Button onClick={() => handleRemoveCoin(coin)} variant="ghost" size="sm" className="text-muted-foreground hover:text-foreground">
                      <Trash2 size={16} />
                    Remove
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </Card>
      :
      <div className="flex flex-col items-center justify-center h-64 text-center text-muted-foreground">
        <Trash2 size={32} className="mb-2" />
        <p className="text-lg font-medium">No coins in your watchlist</p>
        <p className="text-sm">Start bookmarking your favorite coins to see them here.</p>
      </div>
  );
};