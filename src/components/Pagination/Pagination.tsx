import ReactPaginate from "react-paginate";
import css from "./Pagination.module.css";

interface PaginationProps {
  pageCount: number;
  onPageChange: (selected: number) => void;
}

export default function Pagination({ pageCount, onPageChange }: PaginationProps) {
  return (
    <ReactPaginate
      breakLabel="..."
      nextLabel=">"
      onPageChange={(event) => onPageChange(event.selected)}
      pageRangeDisplayed={5}
      pageCount={pageCount}
      previousLabel="<"
      containerClassName={css.pagination}
      activeClassName={css.active}
    />
  );
}
