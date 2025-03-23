import { useContext } from "react";
import { createContext, useState } from "react";

// Top level state to avoid prop drilling
export const SearchContext = createContext("");

//context provider
export const SearchProvider = ({ children }) => {
  const [search, setSearch] = useState("");

  return (
    <SearchContext.Provider value={{ search, setSearch }}>
      {children}
    </SearchContext.Provider>
  );
};

// using context
const useSearch = () => {
  // consume context
  const Search = useContext(SearchContext);
  return Search;
};

export default useSearch;
