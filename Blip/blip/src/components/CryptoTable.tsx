import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Card } from '@/components/ui/card';
import { Bookmark, BookmarkCheck } from 'lucide-react';
import LoaderComponent from './LoaderComponent';
import { useState } from 'react';
import type { Coin, CryptoTableProps } from '@/types/coin';
import { useDispatch } from 'react-redux';
import type { AppDispatch } from '@/store/store';
import { bookmarkCoin, removeCoin } from '@/store/slices/watchlistSlice';
import { formatMarketCap } from '@/utils/formatMarketCap';

export const CryptoTable = ({isLoading , coinsData} : CryptoTableProps) => {
  // useDispatch
  const dispatch = useDispatch<AppDispatch>();
  // State Variables
  const [bookmarkedCoins , setBookmarkedCoins] = useState<string[]>([]);

  // Handler Functions
  const handleBookMark = (coin: Coin) => {
    setBookmarkedCoins(prev => 
      prev.includes(coin.id) ?
        prev.filter(id => id !== coin.id)
        :
        [...prev , coin.id]
    );
    if(!bookmarkedCoins.includes(coin.id)){
      dispatch(bookmarkCoin(coin));
    }
    else{
      dispatch(removeCoin(coin.id));
    }
  };

  return (
    (isLoading == true) ?
    <LoaderComponent/>
    :
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
          {coinsData.map((coin) => (
            <TableRow key={coin.id} className="hover:bg-muted/50 border-border">
              <TableCell className="font-medium text-muted-foreground">
                {coin.market_cap_rank}
              </TableCell>
              <TableCell className="font-medium">
                {coin.name}
              </TableCell>
              <TableCell className="font-medium">
                {coin.current_price}$
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
                <Button onClick={() => handleBookMark(coin)} variant="ghost" size="sm" className="cursor-pointer text-muted-foreground hover:text-foreground">
                  {
                    bookmarkedCoins.includes(coin.id) ?
                      <BookmarkCheck className="h-4 w-4 mr-1" />
                      :
                      <Bookmark className="h-4 w-4 mr-1" />
                  }
                  Bookmark
                </Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </Card>
  );
};