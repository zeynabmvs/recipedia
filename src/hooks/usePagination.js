import { DEFAULT_PER_PAGE } from "src/data";
import { useEffect, useState } from "react";

const usePagination = (items = [], perPage = DEFAULT_PER_PAGE) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [paginatedList, setPaginatdList] = useState([]);
  
  useEffect(() => {
    if (items?.length > 0) {
      const indexOfLastPost = currentPage * perPage;
      const indexOfFirstPost = indexOfLastPost - perPage;
      setPaginatdList(items?.slice(indexOfFirstPost, indexOfLastPost));
    }
  }, [items, perPage, currentPage]);

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  return { paginatedList, currentPage, handlePageChange };
};

export default usePagination;
