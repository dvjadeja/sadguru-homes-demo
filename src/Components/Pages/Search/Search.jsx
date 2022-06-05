import React, { useContext, useEffect, useState } from "react";
import { SearchContext } from "../../../context/searchContext";
import Card from "../../Card/Card";
import Navbar from "../../Navbar/Navbar";
import styles from "./Search.module.scss";
import { motion } from "framer-motion";
import { useQuery } from "@apollo/client";
import { GET_ALL_CARD, GET_OPTION_BY_LOCATION } from "../../../utils/Queries";

const Search = () => {
  const { data: ALL_DATA, loading, error } = useQuery(GET_ALL_CARD);
  const [city, setCity] = useState([]);
  const { searchData, location, setLocation, setSearchData } =
    useContext(SearchContext);
  const [searchedData, setSearchedData] = useState(searchData);
  const [category, setCategory] = useState("Buy/Rent");
  const { data } = useQuery(GET_OPTION_BY_LOCATION, {
    variables: {
      location: location,
      category: category,
    },
  });

  const filterLocation = () => {
    const filteredData = ALL_DATA.houses.data.filter(
      (item) => item.attributes.location.data.attributes.City === location
    );
    setSearchData(filteredData);
  };

  const getDistinctOptions = () => {
    if (loading || error) {
      return;
    }
    setCity(
      ALL_DATA.houses.data
        .map((item) => item.attributes.location.data.attributes.City)
        .filter((value, index, self) => self.indexOf(value) === index)
    );
  };
  useEffect(() => {
    getDistinctOptions();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [ALL_DATA]);

  const filterByCategory = () => {
    filterLocation();
    if (category === "Buy/Rent") {
      setSearchedData(searchData);
    }
    if (category === "Buy") {
      if (data) {
        setSearchedData(data.houses.data);
      }
    }
    if (category === "Rent") {
      console.log("Rent Func");
      if (data) {
        setSearchedData(data.houses.data);
      }
    }
  };

  return (
    <main>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0, transition: { duration: 0.2 } }}
      >
        <Navbar />
        {console.log("City", city)}
        <div className={styles.content}>
          <h1>Your Dream Houses</h1>
          <div className={styles.filter_container}>
            <div className={styles.location_container}>
              <span>Location</span>
              <select
                type="text"
                placeholder="Choose a Location"
                onChange={(e) => setLocation(e.target.value)}
              >
                <option>Choose a Location</option>
                {city.map((item, index) => (
                  <option key={index} value={item}>
                    {item}
                  </option>
                ))}
              </select>
            </div>

            <div className={styles.category_container}>
              <span>Category</span>
              <select
                name="category"
                id="category"
                onChange={(e) => setCategory(e.target.value)}
              >
                <option value="">Select Category</option>
                <option value="Buy">Buy</option>
                <option value="Rent">Rent</option>
                <option value="Buy/Rent">Buy/Rent</option>
              </select>
            </div>

            <div className={styles.btn_container}>
              <button onClick={filterByCategory}>Filter</button>
            </div>
          </div>
          {/* CARDS */}
          <div className={styles.card}>
            <div className={styles.cards}>
              {console.log(searchData)}
              {searchedData.length > 0 ? (
                searchedData.map((house, index) => (
                  <Card
                    key={index}
                    secondClass={styles.card}
                    info={{
                      id: house.id,
                      category: category,
                      imageSource:
                        house.attributes.Preview_Image.data.attributes.url,
                      city: `${house.attributes.location.data.attributes.City}`,
                      neighbourhood: `${house.attributes.Neighbourhood}`,
                      street: `${house.attributes.Street}`,
                      rooms: `${house.attributes.Rooms}`,
                      bedrooms: `${house.attributes.Bedrooms}`,
                      bathrooms: `${house.attributes.Bathrooms}`,
                      shortAndress: `${house.attributes.Short_Andress}`,
                      rent: `${house.attributes.Rent}`,
                      price: `${house.attributes.Price}`,
                    }}
                    showInfo={
                      house.attributes.categories.data[0].attributes
                        .Category === "Buy" &&
                      (category === "Buy" || category === "Buy/Rent")
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
                ))
              ) : searchedData.length <= 0 && category === "Buy/Rent" ? (
                ALL_DATA &&
                ALL_DATA.houses.data.map((house, index) => (
                  <Card
                    key={index}
                    secondClass={styles.card}
                    info={{
                      id: house.id,
                      category: category,
                      imageSource:
                        house.attributes.Preview_Image.data.attributes.url,
                      city: `${house.attributes.location.data.attributes.City}`,
                      neighbourhood: `${house.attributes.Neighbourhood}`,
                      street: `${house.attributes.Street}`,
                      rooms: `${house.attributes.Rooms}`,
                      bedrooms: `${house.attributes.Bedrooms}`,
                      bathrooms: `${house.attributes.Bathrooms}`,
                      shortAndress: `${house.attributes.Short_Andress}`,
                      rent: `${house.attributes.Rent}`,
                      price: `${house.attributes.Price}`,
                    }}
                    showInfo={
                      house.attributes.categories.data[0].attributes
                        .Category === "Buy"
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
                ))
              ) : (
                <h1>No Houses for ${category}</h1>
              )}
            </div>
          </div>
        </div>
      </motion.div>
    </main>
  );
};

export default Search;
