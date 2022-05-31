import "./App.scss";
import { Routes, Route } from "react-router-dom";
import Home from "./Components/Pages/Home/Home";
import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";
import Buy from "./Components/Pages/Buy/Buy";
import Rent from "./Components/Pages/Rent/Rent";
import Navbar from "./Components/Navbar/Navbar";
import Property from "./Components/Pages/Property/Property";

const client = new ApolloClient({
  uri: "https://pacific-spire-46750.herokuapp.com/graphql",
  cache: new InMemoryCache(),
});

function App() {
  return (
    <ApolloProvider client={client}>
      <div className="App">
        <Routes>
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
          <Route path="/property">
            <Route path=":propertyId" element={<Property />} />
          </Route>
        </Routes>
      </div>
    </ApolloProvider>
  );
}

export default App;
