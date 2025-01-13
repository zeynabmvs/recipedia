import { useContext } from "react";
import { GlobalStateContext } from "src/contexts/GlobalState";

const usePagination = () => {
  const { recipes, handlePagination, currentPage, postsPerPage } =
    useContext(GlobalStateContext);
  const length = recipes?.length;

  const paginationNumbers = [];

  for (let i = 1; i <= Math.ceil(length / postsPerPage); i++) {
    paginationNumbers.push(i);
  }

  return { paginationNumbers, handlePagination, currentPage };
};

export default usePagination;
