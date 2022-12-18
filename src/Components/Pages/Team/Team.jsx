import React from "react";
import { motion } from "framer-motion";
import Navbar from "../../Navbar/Navbar";
import styles from "./Team.module.scss";

import Footer from "../Home/Sections/Footer";

const arr = [1, 2, 3, 4];

const Team = () => {
  return (
    <main>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0, transition: { duration: 0.2 } }}
      >
        <Navbar />

        <section className={styles.mainSection}>
          <div className={styles.container}>
            <div className={styles.headerContainer}>
              <div className={styles.header}>
                <div className={styles.headerText}>
                  <h2>The Root Team</h2>
                  <p>
                    There are many variations of passages of Lorem Ipsum
                    available but the majority have suffered alteration in some
                    form.
                  </p>
                </div>
              </div>
            </div>

            <div className={styles.teams}>
              {/*  */}
              {arr.map((item, index) => (
                <div className={styles.profileContainer} key={index}>
                  <div className={styles.profile_view}>
                    <div className={styles.singleProfile}>
                      <img
                        src="https://cdn.tailgrids.com/1.0/assets/images/team/team-01/image-02.jpg"
                        alt="profile_1"
                        className={styles.profileImg}
                      />

                      <div className={styles.dContainer}>
                        <div className={styles.dBody}>
                          <h3 className={styles.dTitle}>D.B Jadeja</h3>
                          <p className={styles.designation}>Co-Founder</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <Footer />
      </motion.div>
    </main>
  );
};

export default Team;
