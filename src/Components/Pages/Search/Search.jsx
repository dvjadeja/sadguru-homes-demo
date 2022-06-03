import React, { useContext } from "react";
import { SearchContext } from "../../../context/searchContext";
import Card from "../../Card/Card";
import Navbar from "../../Navbar/Navbar";
import styles from "./Search.module.scss";

const Search = () => {
  const { searchData } = useContext(SearchContext);
  return (
    <main>
      {console.log("SearchData in Search", searchData)}
      <Navbar />
      <div className={styles.content}>
        <h1>Your Dream Houses</h1>

        {/* CARDS */}
        <div className={styles.card}>
          <div className={styles.cards}>
            {searchData.map((house, index) => (
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
    </main>
  );
};

export default Search;
