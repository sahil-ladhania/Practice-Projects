import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from '@/components/ui/pagination';
import type React from 'react';

type CryptoPaginationProps = {
  currentPageCount : number;
  setCurrentPageCount : React.Dispatch<React.SetStateAction<number>>;
}

export const CryptoPagination = ({currentPageCount , setCurrentPageCount} : CryptoPaginationProps) => {
  // Handler Functions
  const handlePrevious = async() => {
    try {
      if(currentPageCount > 1){
        setCurrentPageCount(currentPageCount - 1);
      };
    }
    catch (error) {
      console.log(error);
    }
  }
  const handleNext = async() => {
    try {
      if(currentPageCount < 250){
        setCurrentPageCount(currentPageCount + 1);
      };
    }
    catch (error) {
      console.log(error);
    }
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