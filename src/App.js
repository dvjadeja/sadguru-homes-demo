import "./App.scss";
// import { Routes, Route } from "react-router-dom";
// import Home from "./Components/Pages/Home/Home";
// import Buy from "./Components/Pages/Buy/Buy";
// import Rent from "./Components/Pages/Rent/Rent";
// import Navbar from "./Components/Navbar/Navbar";
// import Property from "./Components/Pages/Property/Property";
// import Search from "./Components/Pages/Search/Search";
import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";
import { SearchContext } from "./context/searchContext";
import { useState } from "react";
import "react-toastify/dist/ReactToastify.css";
import AnimatedRoute from "./Components/AnimatedRoute";

const client = new ApolloClient({
  uri: "https://pacific-spire-46750.herokuapp.com/graphql",
  cache: new InMemoryCache(),
});

function App() {
  const [price, setPrice] = useState();
  const [location, setLocation] = useState("Choose a Location");
  const [searchData, setSearchData] = useState([]);

  return (
    <SearchContext.Provider
      value={{
        setSearchData: setSearchData,
        searchData: searchData,
        setLocation: setLocation,
        setPrice: setPrice,
        price: price,
        location: location,
      }}
    >
      <ApolloProvider client={client}>
        <div className="App">
          {/* <Routes>
            <Route
              path="*"
              element={
                <main>
                  <Navbar />
                  <h1 style={{ marginTop: "3rem", color: "rgb(26, 55, 58)" }}>
                    404 NOT FOUND
                  </h1>
                </main>
              }
            />
            <Route path="/" element={<Home />} />
            <Route path="/buy" element={<Buy />} />
            <Route path="/rent" element={<Rent />} />
            <Route path="/search" element={<Search />} />
            <Route path="/property">
              <Route path=":propertyId" element={<Property />} />
            </Route>
          </Routes> */}
          <AnimatedRoute />
        </div>
      </ApolloProvider>
    </SearchContext.Provider>
  );
}

export default App;
