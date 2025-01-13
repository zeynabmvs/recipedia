import { useRef } from 'react';
import { useNavigate, createSearchParams } from 'react-router-dom';
import { HiOutlineSearch } from "react-icons/hi";

// TODO: change code so it can be used as standalone saerch component
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
      pathname: '/recipes/',
      search: `?${queryString}`
    })
  };

  return (
    <form onSubmit={onSearchHandler} className='relative w-full md:w-auto'>
      <HiOutlineSearch className='absolute top-[11px] left-2' size={16}/>
      <input
        type="text"
        placeholder="Search for..."
        className="border border-slate-200 p-2 w-full md:w-60 rounded-full pl-8 text-body-sm"
        ref={searchInputRef}
      >
      </input>
    </form>
  );
}

export default Search;
