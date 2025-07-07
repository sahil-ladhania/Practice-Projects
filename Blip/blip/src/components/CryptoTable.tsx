import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Card } from '@/components/ui/card';
import { Bookmark } from 'lucide-react';

interface CryptoData {
  rank: number;
  name: string;
  price: string;
  change24h: string;
  marketCap: string;
  isPositive: boolean;
}

const mockCryptoData: CryptoData[] = [
  { rank: 1, name: 'Bitcoin', price: '$45,000', change24h: '+2.5%', marketCap: '$850B', isPositive: true },
  { rank: 2, name: 'Ethereum', price: '$3,200', change24h: '+3.1%', marketCap: '$380B', isPositive: true },
  { rank: 3, name: 'Cardano', price: '$1.20', change24h: '-1.8%', marketCap: '$40B', isPositive: false },
  { rank: 4, name: 'Binance Coin', price: '$400', change24h: '+1.5%', marketCap: '$60B', isPositive: true },
  { rank: 5, name: 'Solana', price: '$150', change24h: '+4.2%', marketCap: '$65B', isPositive: true },
  { rank: 6, name: 'XRP', price: '$0.85', change24h: '-0.5%', marketCap: '$40B', isPositive: false },
  { rank: 7, name: 'Polkadot', price: '$20', change24h: '+2.0%', marketCap: '$20B', isPositive: true },
  { rank: 8, name: 'Dogecoin', price: '$0.15', change24h: '+1.0%', marketCap: '$20B', isPositive: true },
  { rank: 9, name: 'Avalanche', price: '$80', change24h: '+3.5%', marketCap: '$15B', isPositive: true },
  { rank: 10, name: 'Litecoin', price: '$150', change24h: '+2.8%', marketCap: '$10B', isPositive: true },
];

export const CryptoTable = () => {
  return (
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
          {mockCryptoData.map((crypto) => (
            <TableRow key={crypto.rank} className="hover:bg-muted/50 border-border">
              <TableCell className="font-medium text-muted-foreground">
                {crypto.rank}
              </TableCell>
              <TableCell className="font-medium">
                {crypto.name}
              </TableCell>
              <TableCell className="font-medium">
                {crypto.price}
              </TableCell>
              <TableCell>
                <Badge 
                  variant={crypto.isPositive ? "default" : "destructive"}
                  className={crypto.isPositive ? "bg-green-500/10 text-green-500 hover:bg-green-500/20" : ""}
                >
                  {crypto.change24h}
                </Badge>
              </TableCell>
              <TableCell className="font-medium">
                {crypto.marketCap}
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