import { CryptoTable } from "@/components/CryptoTable";
import { CryptoPagination } from "@/components/ui/CryptoPagination";

export default function Home() {
  return (
    <div>
      <CryptoTable/>
      <CryptoPagination/>
    </div>
  )
}
