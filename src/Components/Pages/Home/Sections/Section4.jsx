import React from "react";
import styles from "./Section4.module.scss";
import building3 from "../../../../assets/building3.jpg";

const Section4 = () => {
  return (
    <section className={styles.section_4}>
      {/* SECTION TITLE */}
      <div className={styles.section_4_title}>
        <h1>Help People To Getting Their Dream House For More Than 17 Years</h1>
      </div>

      {/* CONTENT */}
      <div className={styles.section_4_content}>
        {/* IMAGE CONTAINER */}
        <div className={styles.image_container}>
          <img src={building3} alt="building" />
        </div>

        {/* INFO */}
        <div className={styles.info}>
          <p>
            Search and find your Dream House at affordable prices, but with best
            Quality. Only Available at Sadguru Homes!
          </p>

          <div className={styles.rows}>
            {/* ROW1 */}
            <div className={styles.row_1}>
              {/* FACT1 */}
              <div className={styles.fact}>
                <h2>10,234</h2>
                <h3>Completed Houses</h3>
              </div>

              {/* FACT2 */}
              <div className={styles.fact}>
                <h2>11,234</h2>
                <h3>Rented Houses</h3>
              </div>
            </div>

            {/* ROW2 */}
            <div className={styles.row_1}>
              {/* FACT1 */}
              <div className={styles.fact}>
                <h2>2,157</h2>
                <h3>Sold Houses</h3>
              </div>

              {/* FACT2 */}
              <div className={styles.fact}>
                <h2>1,2157</h2>
                <h3>Happy Clients</h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Section4;
