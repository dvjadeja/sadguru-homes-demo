import React from "react";
import Navbar from "../../Navbar/Navbar";
import { useQuery } from "@apollo/client";
import { useParams } from "react-router-dom";
import Card from "../../Card/Card";
import styles from "./Property.module.scss";
import { ID_CARD } from "../../../utils/Queries";
// import { ALL_DATA } from "../../../utils/data";
import { motion } from "framer-motion";

const Property = () => {
  let params = useParams();
  const { loading, data, error } = useQuery(ID_CARD, {
    variables: {
      id: params.propertyId,
    },
  });

  const queryHandler = () => {
    if (loading) return <h1>LOADING</h1>;
    if (error) return <h1>ERROR</h1>;
    return (
      <div className={styles.house}>
        <Card
          secondClass={styles.card}
          info={{
            id: data.houses.data[0].id,
            category: "Buy",
            imageSource: `${data.houses.data[0].attributes.Preview_Image.data.attributes.url}`,
            city: `${data.houses.data[0].attributes.location.data.attributes.City}`,
            neighbourhood: `${data.houses.data[0].attributes.Neighbourhood}`,
            street: `${data.houses.data[0].attributes.Street}`,
            rooms: `${data.houses.data[0].attributes.Rooms}`,
            bedrooms: `${data.houses.data[0].attributes.Bedrooms}`,
            bathrooms: `${data.houses.data[0].attributes.Bathrooms}`,
            shortAndress: `${data.houses.data[0].attributes.Short_Andress}`,
            price: `${data.houses.data[0].attributes.Price}`,
          }}
          showInfo={{
            price: data.houses.data[0].price ? 1 : 0,
            rent: data.houses.data[0].rent ? 1 : 0,
          }}
        />

        <div style={{ marginTop: "2rem", marginBottom: "2rem", color: "#333" }}>
          <span>Description:</span>
          <p>{data.houses.data[0].attributes.Description}</p>
        </div>
      </div>
    );
  };

  return (
    <main className={styles.flex}>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0, transition: { duration: 0.2 } }}
      >
        <Navbar />
        <div className={styles.center}>{queryHandler()}</div>
      </motion.div>
    </main>
  );
};

export default Property;
