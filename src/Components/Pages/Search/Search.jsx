import React, { useContext, useState } from "react";
import { SearchContext } from "../../../context/searchContext";
import Card from "../../Card/Card";
import Navbar from "../../Navbar/Navbar";
import styles from "./Search.module.scss";
import { motion } from "framer-motion";

const Search = () => {
  const { searchData } = useContext(SearchContext);
  const [searchedData, setSearchedData] = useState(searchData);

  const filterByCategory = (val) => {
    if (val === "Both") return setSearchedData(searchData);
    setSearchedData(searchData.filter((item) => item.category === val));
  };
  return (
    <main>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0, transition: { duration: 0.2 } }}
      >
        <Navbar />
        <div className={styles.content}>
          <h1>Your Dream Houses</h1>
          <div className={styles.category_container}>
            <select
              name="category"
              id="category"
              onChange={(e) => filterByCategory(e.target.value)}
            >
              <option value="">Select Category</option>
              <option value="Buy">Buy</option>
              <option value="Rent">Rent</option>
              <option value="Both">Buy/Rent</option>
            </select>
          </div>
          {/* CARDS */}
          <div className={styles.card}>
            <div className={styles.cards}>
              {searchedData.map((house, index) => (
                <Card
                  key={index}
                  secondClass={styles.card}
                  info={{
                    id: house.id,
                    category: house.category,
                    imageSource: house.imageSource,
                    city: `${house.city}`,
                    neighbourhood: `${house.neighbourhood}`,
                    street: `${house.street}`,
                    rooms: `${house.rooms}`,
                    bedrooms: `${house.bedrooms}`,
                    bathrooms: `${house.bathrooms}`,
                    shortAndress: `${house.shortAndress}`,
                    rent: `${house.rent}`,
                    price: `${house.price}`,
                  }}
                  showInfo={
                    house.category === "Buy"
                      ? {
                          price: true,
                          rent: false,
                        }
                      : {
                          price: false,
                          rent: true,
                        }
                  }
                />
              ))}
            </div>
          </div>
        </div>
      </motion.div>
    </main>
  );
};

export default Search;
