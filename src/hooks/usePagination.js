import { DEFAULT_PER_PAGE } from "src/data";
import { useState } from "react";

const usePagination = (items = [], perPage = DEFAULT_PER_PAGE) => {
  const [currentPage, setCurrentPage] = useState(1);

  const getPaginatedList = () => {
    if (items?.length > 0) {
      const indexOfLastPost = currentPage * perPage;
      const indexOfFirstPost = indexOfLastPost - perPage;
      return items?.slice(indexOfFirstPost, indexOfLastPost);
    }
  };

  const paginatedList = getPaginatedList();

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  return { paginatedList, currentPage, handlePageChange };
};

export default usePagination;
