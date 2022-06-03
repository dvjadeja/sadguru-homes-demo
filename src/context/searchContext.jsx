import { createContext } from "react";

const SearchContext = createContext({
  searchData: [],
  setSearchData: [],
  setPrice: Number,
  price: Number,
  setLocation: String,
  location: String,
});

export { SearchContext };
