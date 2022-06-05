import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Navbar from "../../../Navbar/Navbar";
import styles from "./Section1.module.scss";
import building1 from "../../../../assets/building1.jpg";
import { useQuery } from "@apollo/client";
import { GET_ALL_CARD } from "../../../../utils/Queries";
// import { ALL_DATA } from "../../../../utils/data";
import { SearchContext } from "../../../../context/searchContext";

const Section1 = () => {
  const { loading, data, error } = useQuery(GET_ALL_CARD);
  const ctxData = useContext(SearchContext);
  const [city, setCity] = useState([]);

  const filterLocation = () => {
    const filteredData = data.houses.data.filter(
      (item) =>
        item.attributes.location.data.attributes.City === ctxData.location
    );
    ctxData.setSearchData(filteredData);
  };

  const getDistinctOptions = () => {
    if (loading || error) {
      return;
    }
    setCity(
      data.houses.data
        .map((item) => item.attributes.location.data.attributes.City)
        .filter((value, index, self) => self.indexOf(value) === index)
    );
  };
  useEffect(() => {
    getDistinctOptions();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [data]);

  return (
    <>
      <SearchContext.Provider value={{ city: city }}>
        <section className={styles.section_1}>
          {/* NAVBAR */}
          <div className={styles.Navbar}>
            <Navbar BurgerColour={"whitesmoke"} />
          </div>

          {/* BACKGROUND IMAGES */}
          <div className={styles.img}></div>

          {/* SECTION 1 CONTENT */}
          <div className={styles.section_1_content}>
            {/* SLOGAN */}
            <div className={styles.slogan}>
              <h1>Easy way to find your Dream House</h1>
              <p>
                Search and find your dream house at affordable prices, but with
                the best quality. Only Availble at Sadguru Homes
              </p>

              {/* SearchBox */}
              <div className={styles.search_container}>
                {/* LOCATION */}
                <div className={styles.location_container}>
                  <span>Location</span>
                  <select
                    type="text"
                    placeholder="Choose a Location"
                    onChange={(e) => ctxData.setLocation(e.target.value)}
                  >
                    <option>Choose a Location</option>
                    {city.map((item, index) => (
                      <option key={index} value={item}>
                        {item}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Price Range */}
                <div className={styles.price_container}>
                  {/* <span>Price Range</span>
                <select
                  name="Price"
                  id="price"
                  onChange={(e) => ctxData.setPrice(e.target.value)}
                >
                  <option value="<100k">{`<100k`}</option>
                  <option value="100k-200k">100k-200k</option>
                  <option value="200k-500k">200k-500k</option>
                  <option value=">500k">{`>500k`}</option>
                </select> */}
                </div>

                {/* Search Button */}
                <button onClick={filterLocation} className={styles.btn_search}>
                  <Link
                    to={`${
                      ctxData.location !== "Choose a Location" && "search"
                    }`}
                  >
                    Search
                  </Link>
                </button>
              </div>
            </div>

            {/* Building Image*/}
            <div className={styles.slogan_image}>
              <img src={building1} alt="building" />
            </div>
          </div>
        </section>
      </SearchContext.Provider>
    </>
  );
};

export default Section1;
