import { CryptoTable } from "@/components/CryptoTable";
import { CryptoPagination } from "@/components/ui/CryptoPagination";
import { getAllCoinsData } from "@/services/getAllCoins";
import { useEffect, useState } from "react";

export default function Home() {
  // State Variables
  const [coinsData , setCoinsData] = useState<[]>([]);
  const [isLoading , setIsLoading] = useState<boolean>(true);
  const [currentPageCount , setCurrentPageCount] = useState<number>(1);

  // useEffect
  useEffect(() => {
    let isMounted = true;

    const fetchCoinsData = async() => {
      try {
        const data = await getAllCoinsData(currentPageCount);
        if (isMounted && data) {
          setCoinsData(data);
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
  }, [currentPageCount]);

  return (
    <div>
      <CryptoTable isLoading={isLoading} coinsData={coinsData}/>
      <CryptoPagination currentPageCount={currentPageCount} setCurrentPageCount={setCurrentPageCount}/>
    </div>
  )
}
