import React from "react";
import Navbar from "../../Navbar/Navbar";
import styles from "./Buy.module.scss";
import Card from "../../Card/Card";
import { BUY_DATA } from "../../../utils/data";
import { motion } from "framer-motion";
// import { useQuery } from "@apollo/client";
// import { BUY_CARDS } from "../../../utils/Queries";

const Buy = () => {
  // const { loading, data, error } = useQuery(BUY_CARDS);
  return (
    <main>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0, transition: { duration: 0.2 } }}
      >
        <Navbar />
        <div className={styles.content}>
          <h1>Houses For Sale</h1>
          {/* CARDS */}
          <div className={styles.card}>
            {/* {loading || error ? (
            <h1 style={{ color: "#333" }}>Loading</h1>
          ) : ( */}
            <div className={styles.cards}>
              {BUY_DATA.map((house, index) => (
                <Card
                  key={index}
                  secondClass={styles.card}
                  info={{
                    id: house.id,
                    category: "Buy",
                    imageSource: house.imageSource,
                    city: `${house.city}`,
                    neighbourhood: `${house.neighbourhood}`,
                    street: `${house.street}`,
                    rooms: `${house.rooms}`,
                    bedrooms: `${house.bedrooms}`,
                    bathrooms: `${house.bathrooms}`,
                    shortAndress: `${house.shortAndress}`,
                    price: `${house.price}`,
                  }}
                />
              ))}
            </div>
            {/* )} */}
          </div>
        </div>
      </motion.div>
    </main>
  );
};

export default Buy;
