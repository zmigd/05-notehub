import ReactPaginate from "react-paginate";
import css from "./Pagination.module.css";

interface PaginationProps {
  pageCount: number;
  currentPage: number; 
  onPageChange: (selected: number) => void;
}

export default function Pagination({ pageCount, currentPage, onPageChange }: PaginationProps) {
  return (
    <ReactPaginate
      breakLabel="..."
      nextLabel=">"
      previousLabel="<"
      onPageChange={(event: { selected: number }) => onPageChange(event.selected)}
      pageRangeDisplayed={5}
      pageCount={pageCount}
      forcePage={currentPage} 
      containerClassName={css.pagination}
      activeClassName={css.active}
    />
  );
}
