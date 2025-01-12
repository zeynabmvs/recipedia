import { useContext } from "react";
import { GlobalStateContext } from "src/contexts/GlobalState";

// TODO: check if it's standalone component or part of another component
function Pagination() {
  const { recipes, handlePagination, currentPage, postsPerPage } =
    useContext(GlobalStateContext);
  const length = recipes.length;

  const paginationNumbers = [];

  for (let i = 1; i <= Math.ceil(length / postsPerPage); i++) {
    paginationNumbers.push(i);
  }

  return ( paginationNumbers.length > 1 ? 
    <div className="pagination flex justify-center gap-2 p-4 my-10">
      {paginationNumbers.map((pageNumber, index) => (
        <button
          key={pageNumber}
          onClick={() => handlePagination(pageNumber)}
          className={
            "p-2 bg-slate-50  w-10 h-10 flex items-center justify-center rounded-sm hover:bg-slate-100" +
            (currentPage === index+1 ? " active text-primary" : " text-slate-800")
          }
        >
          {pageNumber}
        </button>
      ))}
    </div> : null
  );
}

export default Pagination;
