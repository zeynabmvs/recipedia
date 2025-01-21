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

    const value = searchInputRef.current.value
    if (value.trim() !=='') {
      console.log('lets search for', value)
      setRecipesFilter({ type: "search", value: value});
      navigate({
        pathname: "/recipes",
      });
    }
    
  };

  return (
    <form
      onSubmit={onSearchHandler}
      className={`relative w-full md:w-auto flex items-center h-10 ${className}`}
    >
      <input
        type="text"
        placeholder={placeholder}
        className="border border-primary py-2 px-4 w-full md:w-60 rounded-full text-body-sm h-10"
        ref={searchInputRef}
      ></input>
      <button onClick={onSearchHandler} className="p-2 bg-primary rounded-r-full h-[38px] w-[38px] absolute right-0">
        <HiOutlineSearch className="" size={22}  color="white" />
      </button>
    </form>
  );
};

export default Search;
