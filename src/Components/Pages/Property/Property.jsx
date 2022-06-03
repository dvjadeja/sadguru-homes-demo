import React, { useEffect, useState } from "react";
import Navbar from "../../Navbar/Navbar";
// import { useQuery } from "@apollo/client";
import { useParams } from "react-router-dom";
import Card from "../../Card/Card";
import styles from "./Property.module.scss";
// import { ID_CARD } from "../../../utils/Queries";
import { ALL_DATA } from "../../../utils/data";
import { motion } from "framer-motion";

const Property = () => {
  let params = useParams();
  const [data, setData] = useState([]);
  // const { loading, data, error } = useQuery(ID_CARD, {
  //   variables: {
  //     id: params.propertyId,
  //   },
  // });
  const filterData = () => {
    if (ALL_DATA) {
      if (ALL_DATA.length) {
        setData(
          ALL_DATA.filter((item) => Number(params?.propertyId) === item.id)[0]
        );
      }
    }
  };

  useEffect(() => {
    filterData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const queryHandler = () => {
    // if (loading) return <h1>LOADING</h1>;
    // if (error) return <h1>ERROR</h1>;
    return (
      <div className={styles.house}>
        <Card
          secondClass={styles.card}
          info={{
            id: data.id,
            category: data.category,
            imageSource: data?.imageSource,
            city: `${data.city}`,
            neighbourhood: `${data.neighbourhood}`,
            street: `${data.street}`,
            rooms: `${data.rooms}`,
            bedrooms: `${data.bedrooms}`,
            bathrooms: `${data.bathrooms}`,
            shortAndress: `${data.shortAndress}`,
            price: `${data.price}`,
            rent: `${data.rent}`,
          }}
          showInfo={{
            price: data.price ? 1 : 0,
            rent: data.rent ? 1 : 0,
          }}
        />

        <div style={{ marginTop: "2rem", marginBottom: "2rem", color: "#333" }}>
          <span>Description:</span>
          <p>{data.description}</p>
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
