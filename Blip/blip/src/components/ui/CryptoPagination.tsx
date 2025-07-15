import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from '@/components/ui/pagination';
import type { CryptoPaginationProps } from '@/types/pagination';

export const CryptoPagination = ({currentPageCount , setCurrentPageCount} : CryptoPaginationProps) => {
  // Handler Functions
  const handlePrevious = () => {
    if(currentPageCount > 1){
      setCurrentPageCount(currentPageCount - 1);
    };
  }

  const handleNext = () => {
    if(currentPageCount < 250){
      setCurrentPageCount(currentPageCount + 1);
    };
  }

  return (
    <div className="mt-6">
      <Pagination>
        <PaginationContent>
          <PaginationItem>
            <PaginationPrevious onClick={handlePrevious} href="#" />
          </PaginationItem>
            <PaginationLink href="#" isActive>
              {currentPageCount}
            </PaginationLink>
          <PaginationItem>
            <PaginationNext onClick={handleNext} href="#" />
          </PaginationItem>
        </PaginationContent>
      </Pagination>
    </div>
  );
};