import React from "react";
import styles from "./Section2.module.scss";
import { ArrowButton } from ".././../../Buttons/Buttons";
import building2 from "../../../../assets/building2.jpg";

const Section2 = () => {
  return (
    <section className={styles.section_2}>
      {/* IMAGE */}
      <div className={styles.section_2_image_container}>
        <img src={building2} alt="building" />
      </div>

      {/* SLOGAN */}
      <div className={styles.section_2_slogan}>
        <h1>
          Whether you are Buying, Selling or Renting, We Can Help You Move
          forward.
        </h1>
      </div>

      {/* SELECTION */}
      <div className={styles.selection}>
        {/* BUY */}
        <div className={styles.buy}>
          <h3>Buy a home</h3>
          <p>
            Find your Place with and immersive photo experience and the most
            listings, including things you won't find anywhere else.
          </p>
          <ArrowButton text={"Search Houses"} path="buy" />
        </div>

        {/* RENT */}
        <div className={styles.rent}>
          <h3>Rent a home</h3>
          <p>
            We're creating a seemless online Experience - from shopping on the
            largest rental network , to appyling, to paying rent.
          </p>
          <ArrowButton text={"See Your Options"} path="rent" />
        </div>

        {/* SELL */}
        <div className={styles.sell}>
          <h3>Sell a home</h3>
          <p>
            Wether you get a cash offer through Sadguru Homes Offers or choose to sell
            traditionally, we can help you navigate a successfull sale.
          </p>
          <ArrowButton text={"Use Filters"} path="search" />
        </div>
      </div>
    </section>
  );
};

export default Section2;
