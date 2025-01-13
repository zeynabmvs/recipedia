import { createContext, useEffect, useState } from "react";

export const GlobalStateContext = createContext(null);

function GlobalStateProvider({ children }) {
  const [recipes, setRecipes] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  // const [area, setArea] = useState("");
  // const [category, setCategory] = useState("");

  const [searchQuery, setSearchQuery] = useState("");

  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage, SetPostsPerPage] = useState(2);

  function handlePagination(currentPage) {
    setCurrentPage(currentPage);
  }

  const getPageRecipes = () => {
    const indexOfLastPost = currentPage * postsPerPage;

    const indexOfFirstPost = indexOfLastPost - postsPerPage;
    return recipes?.slice(indexOfFirstPost, indexOfLastPost);
  };

  async function fetchRecipes(
    url = "https://www.themealdb.com/api/json/v1/1/filter.php?c=breakfast"
  ) {
    // console.log(url);
    try {
      setLoading(true);
      const response = await fetch(url);
      if (response.ok) {
        const data = await response.json();
        setRecipes(data?.meals);
        setLoading(false);
        setError("");
      } else {
        throw new Error(response.statusText);
      }
    } catch (error) {
      setError(error);
      setLoading(false);
    }
  }

  useEffect(() => {
    console.log("mountd");
    fetchRecipes();
  }, []);

  // useEffect(() => {
  //   console.log("fetch based on area: ", area);
  //   area !== "" &&
  //     fetchRecipes(
  //       `https://www.themealdb.com/api/json/v1/1/filter.php?a=${area}`
  //     );
  // }, [area]);

  // useEffect(() => {
  //   console.log("fetch based on category: ", category);
  //   category !== "" &&
  //     fetchRecipes(
  //       `https://www.themealdb.com/api/json/v1/1/filter.php?c=${category}`
  //     );
  // }, [category]);

  useEffect(() => {
    setCurrentPage(1);
  }, [recipes]);

  // Handle search
  const handleSearch = async (query) => {
    if (query.trim() === "") {
      setError("Please enter a search term.");
      return;
    }
    await fetchRecipes(
      `https://www.themealdb.com/api/json/v1/1/search.php?s=${query}`
    );
  };

  // Fetch recipes when search query changes
  useEffect(() => {
    if (searchQuery) {
      handleSearch(searchQuery);
    }
  }, [searchQuery]);

  return (
    <GlobalStateContext.Provider
      value={{
        // setArea,
        recipes,
        setRecipes,
        loading,
        setLoading,
        error,
        setError,
        // isFavorite,
        // handleFavorite,
        // favorites,
        // setCategory,
        handlePagination,
        currentPage,
        getPageRecipes,
        postsPerPage,
        searchQuery,
        setSearchQuery,
        handleSearch,
      }}
    >
      {children}
    </GlobalStateContext.Provider>
  );
}
export default GlobalStateProvider;
