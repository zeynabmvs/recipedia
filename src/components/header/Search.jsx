import { useContext } from "react";
import { GlobalStateContext } from "../../contexts/GlobalState";

function Search() {
  const { searchParam, setSearchParam, handleSearch } = useContext(GlobalStateContext);

  function handleChange(e) {
    setSearchParam(e.target.value);
  }

  return (
    <form onSubmit={(e) => handleSearch(e)}>
      <input
        type="text"
        placeholder="Search for..."
        value={searchParam}
        onChange={(e) => handleChange(e)}
        className="rounded-md border border-slate-200 p-4 w-80"
      ></input>
    </form>
  );
}

export default Search;
