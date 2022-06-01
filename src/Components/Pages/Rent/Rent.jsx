import React from "react";
import Navbar from "../../Navbar/Navbar";
// import { useQuery } from "@apollo/client";
// import { RENT_CARDS } from "../../../utils/Queries";
import styles from "./Rent.module.scss";
import Card from "../../Card/Card";
import { RENT_DATA } from "../../../utils/data";

const Rent = () => {
  // const { loading, data, error } = useQuery(RENT_CARDS);
  return (
    <main>
      <Navbar />
      <div className={styles.content}>
        <h1>Houses For Renting</h1>

        {/* CARDS */}
        <div className={styles.card}>
          {/* {loading || error ? (
            <h1 style={{ color: "#333" }}>Loading</h1>
          ) : ( */}
          <div className={styles.cards}>
            {RENT_DATA.map((house, index) => (
              <Card
                key={index}
                secondClass={styles.card}
                info={{
                  id: house.id,
                  category: "Rent",
                  imageSource: house.imageSource,
                  city: `${house.city}`,
                  neighbourhood: `${house.neighbourhood}`,
                  street: `${house.street}`,
                  rooms: `${house.rooms}`,
                  bedrooms: `${house.bedrooms}`,
                  bathrooms: `${house.bathrooms}`,
                  shortAndress: `${house.shortAndress}`,
                  rent: `${house.rent}`,
                }}
                showInfo={{
                  price: false,
                  rent: true,
                }}
              />
            ))}
          </div>
          {/* )} */}
        </div>
      </div>
    </main>
  );
};

export default Rent;
