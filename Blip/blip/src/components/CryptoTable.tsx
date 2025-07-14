import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Card } from '@/components/ui/card';
import { Bookmark } from 'lucide-react';
import LoaderComponent from './LoaderComponent';

type CryptoTableProps = {
  isLoading : boolean;
  coinsData : [];
};

export const CryptoTable = ({isLoading , coinsData} : CryptoTableProps) => {
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
          {coinsData.map((crypto) => (
            <TableRow key={crypto.id} className="hover:bg-muted/50 border-border">
              <TableCell className="font-medium text-muted-foreground">
                {crypto.market_cap_rank}
              </TableCell>
              <TableCell className="font-medium">
                {crypto.id}
              </TableCell>
              <TableCell className="font-medium">
                {crypto.current_price}$
              </TableCell>
              <TableCell>
                <Badge 
                  variant={crypto.market_cap_change_percentage_24h > 0 ? "success" : "destructive"}
                  className={crypto.market_cap_change_percentage_24h > 0 ? "bg-green-500/10 text-green-500 hover:bg-green-500/20" : ""}
                >
                  {crypto.market_cap_change_percentage_24h}
                </Badge>
              </TableCell>
              <TableCell className="font-medium">
                {crypto.market_cap_change_24h}
              </TableCell>
              <TableCell>
                <Button variant="ghost" size="sm" className="text-muted-foreground hover:text-foreground">
                  <Bookmark className="h-4 w-4 mr-1" />
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