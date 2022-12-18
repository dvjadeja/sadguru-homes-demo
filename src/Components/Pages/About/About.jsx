import React from "react";
import { motion } from "framer-motion";
import Navbar from "../../Navbar/Navbar";

import Footer from "../Home/Sections/Footer";

import styles from "./About.module.scss";
import building1 from "../../../assets/building1.jpg";
import building2 from "../../../assets/building2.jpg";
import building3 from "../../../assets/building3.jpg";

const About = () => {
  return (
    <main>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0, transition: { duration: 0.2 } }}
      >
        <Navbar />

        <div className={styles.aboutContainer}>
          <h1>About Us</h1>

          <section>
            <div className={styles.first}>
              <div className={styles.imgContainer}>
                <img src={building1} alt="1" />
              </div>
              <div className={styles.contentContainer}>
                <div>
                  <span>Why Choose Us</span>
                  <p>
                    Real estate industry is a challenging one, and to be one of
                    the best, always embryonic is essential. Thus, We Sadguru
                    Projects, have comprised change to remain at the vanguard.
                    Our entire firm stands strong on the foundation of
                    perseverance, innovation and transparency.
                    <br />
                    Sadguru Projects under the leadership of visionary Mr. DB
                    Jadeja, NB Jadeja and GK Chavda, started their journey way
                    back in 1997. With the focus of achieving the unprecedented
                    customer satisfaction, Sadguru Projects is serving the
                    society by creating Quality Livelihood.
                  </p>
                </div>
              </div>
            </div>

            <br />

            <div className={styles.second}>
              <div className={styles.imgContainer}>
                <img src={building2} alt="2" />
              </div>
              <div className={styles.contentContainer}>
                <div>
                  <span>What we are cabpable of!</span>
                  <p>
                    Our passion to excel in every endeavor germinates from the
                    legacy of our founder Mr. DB Jadeja, NB Jadeja and GK
                    Chavda. His mission, ideals and values stand with us as we
                    collectively seek to further develop dream projects for the
                    society. In the years ahead of us.
                    <br />
                    The first step towards the goal was to be an active part of
                    creating a Home where feelings flourish. We work to provide
                    you a place which energizes your mind, body, heart and soul.
                  </p>
                </div>
              </div>
            </div>

            <br />

            <div className={styles.first}>
              <div className={styles.imgContainer}>
                <img src={building3} alt="2" />
              </div>
              <div className={styles.contentContainer}>
                <div>
                  <span>What we Achieved!</span>
                  <p>
                    In the journey of around 25 years, every year has been a
                    milestone as well as a cornerstone for us. We thrive even
                    harder and build unmatched residential and commercial space.
                  </p>
                </div>
              </div>
            </div>
          </section>
        </div>

        <Footer />
      </motion.div>
    </main>
  );
};

export default About;
