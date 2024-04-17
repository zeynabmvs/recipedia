import { useRef } from 'react';
import { useNavigate, createSearchParams } from 'react-router-dom';

const Search = () => {
  const searchInputRef = useRef();
  const navigate = useNavigate();

  const onSearchHandler = (e) => {
    e.preventDefault();

    const query = {
      s: searchInputRef.current.value
    }
    const queryString = createSearchParams(query);
    
    // empty search input
    searchInputRef.current.value = ""

    navigate({
      pathname: '/',
      search: `?${queryString}`
    })
  };

  return (
    <form onSubmit={onSearchHandler} className='w-full md:w-auto'>
      <input
        type="text"
        placeholder="Search for..."
        className="rounded-md border border-slate-200 p-4 w-80 w-full md:w-auto"
        ref={searchInputRef}
      ></input>
    </form>
  );
}

export default Search;
