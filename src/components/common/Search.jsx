import { useRef, useContext } from "react";
import { useNavigate, createSearchParams } from "react-router-dom";
import { HiOutlineSearch } from "react-icons/hi";
import { GlobalStateContext } from "src/contexts/GlobalState";

const Search = ({ placeholder = "Search for...", className = "" }) => {
  const searchInputRef = useRef();
  const navigate = useNavigate();

  const { setRecipesFilter } = useContext(GlobalStateContext);

  const onSearchHandler = (e) => {
    e.preventDefault();

    const query = searchInputRef.current.value.trim();
    if (query === "") return;

    // Set search query in global state
  setRecipesFilter({ type: "search", value: query });

    // Clear search input
    searchInputRef.current.value = "";

    // Navigate to the search results page
    navigate({
      pathname: "/recipes",
      search: `?s=${query}`,
    });
  };

  return (
    <form
      onSubmit={onSearchHandler}
      className={`relative w-full md:w-auto ${className}`}
    >
      <HiOutlineSearch className="absolute top-[11px] left-2" size={16} />
      <input
        type="text"
        placeholder={placeholder}
        className="border border-slate-200 p-2 w-full md:w-60 rounded-full pl-8 text-body-sm"
        ref={searchInputRef}
      ></input>
    </form>
  );
};

export default Search;
