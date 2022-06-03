import React from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import Navbar from "./Navbar/Navbar";
import Buy from "./Pages/Buy/Buy";
import Home from "./Pages/Home/Home";
import Property from "./Pages/Property/Property";
import Rent from "./Pages/Rent/Rent";
import Search from "./Pages/Search/Search";

import { AnimatePresence } from "framer-motion";

const AnimatedRoute = () => {
  const location = useLocation();
  return (
    <AnimatePresence>
      <Routes location={location} key={location.pathname}>
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
      </Routes>
    </AnimatePresence>
  );
};

export default AnimatedRoute;
