import { useRef } from "react";
import { useNavigate } from "react-router-dom";
import { HiOutlineSearch } from "react-icons/hi";
import useRecipes from "src/hooks/useRecipes";

const Search = ({ placeholder = "Search for...", className = "" }) => {
  const navigate = useNavigate();
  const searchInputRef = useRef();
  const { setRecipesFilter } = useRecipes();

  const onSearchHandler = (e) => {
    e.preventDefault();

    setRecipesFilter({ type: "search", value: searchInputRef.current.value });
    navigate({
      pathname: "/recipes",
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
