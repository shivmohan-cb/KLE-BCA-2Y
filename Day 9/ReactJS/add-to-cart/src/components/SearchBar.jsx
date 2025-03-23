import useSearch from "../context/SearchContext";

const SearchBar = ()=>{
    const {search,setSearch} = useSearch();
    
    const handleChange = (e)=>{
      let value = e.target.value;
      setSearch(value);
    }
    const handleSubmit = (e)=>{
     e.preventDefault();
     // some code

    }
    return (
        <form onSubmit={handleSubmit}>
            <input type="text" onChange={handleChange} value={search}/>
        </form>
    )
}
export default SearchBar;