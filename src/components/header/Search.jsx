import { useContext } from "react";
import { GlobalStateContext } from "../../contexts/GlobalState";

function Search() {
  const { seachParam, setSerachParam, handleSearch } = useContext(GlobalStateContext);

  function handleSubmit(e) {
    e.preventDefault();
    handleSearch()
  }

  function handleChange(e) {
    setSerachParam(e.target.value);
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Search for..."
        value={seachParam}
        onChange={(e) => handleChange(e)}
        className="rounded-md border border-slate-200 p-4 w-80"
      ></input>
    </form>
  );
}

export default Search;
