import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
  } from "@/components/ui/table";
  import { Button } from "@/components/ui/button";
  
  const coins = [
    { id: "bitcoin", name: "Bitcoin", price: "$45,000", change: "+2.5%", cap: "$850B" },
    { id: "ethereum", name: "Ethereum", price: "$3,200", change: "+3.1%", cap: "$380B" },
    { id: "cardano", name: "Cardano", price: "$1.20", change: "-1.8%", cap: "$40B" },
    { id: "solana", name: "Solana", price: "$150", change: "+4.2%", cap: "$65B" },
  ];
  
  export function DataTable() {
    return (
      <div className="rounded-md border overflow-x-auto">
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
            {coins.map((coin, i) => (
              <TableRow key={coin.id}>
                <TableCell>{i + 1}</TableCell>
                <TableCell className="font-medium">{coin.name}</TableCell>
                <TableCell>{coin.price}</TableCell>
                <TableCell
                  className={`${
                    coin.change.startsWith("-")
                      ? "text-red-600"
                      : "text-green-600"
                  } font-medium`}
                >
                  {coin.change}
                </TableCell>
                <TableCell>{coin.cap}</TableCell>
                <TableCell className="text-center">
                  <a href={`/details`}>
                    <Button size="sm" variant="outline">
                      View
                    </Button>
                  </a>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    );
  }