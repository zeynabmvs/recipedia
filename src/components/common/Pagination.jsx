import usePagination from "src/hooks/usePagination";

function Pagination() {
  const { paginationNumbers, handlePagination, currentPage } = usePagination();

  return paginationNumbers.length > 1 ? (
    <div className="pagination flex justify-center gap-2 p-4 my-10">
      {paginationNumbers.map((pageNumber, index) => (
        <button
          key={pageNumber}
          onClick={() => handlePagination(pageNumber)}
          className={
            "p-2 bg-slate-50  w-10 h-10 flex items-center justify-center rounded-sm hover:bg-slate-100" +
            (currentPage === index + 1
              ? " active text-primary"
              : " text-slate-800")
          }
        >
          {pageNumber}
        </button>
      ))}
    </div>
  ) : null;
}

export default Pagination;
