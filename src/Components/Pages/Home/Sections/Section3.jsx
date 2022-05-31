import React from "react";
import styles from "./Section3.module.scss";
import { ArrowButton } from "../../../Buttons/Buttons";
import Carousel from "../../../Carousel/Carousel";

import { SwiperSlide } from "swiper/react";
import Card from "../../../Card/Card";
// import { useQuery, gql } from "@apollo/client";
import { BUY_DATA } from "../../../../utils/data";

// const CARD_DATA = gql`
//   query GET_CARDS {
//     houses(
//       filters: { categories: { Category: { contains: "Buy" } } }
//       pagination: { limit: 6 }
//     ) {
//       data {
//         id
//         attributes {
//           location {
//             data {
//               attributes {
//                 City
//               }
//             }
//           }
//           Preview_Image {
//             data {
//               attributes {
//                 url
//               }
//             }
//           }
//           categories {
//             data {
//               attributes {
//                 Category
//               }
//             }
//           }
//           Street
//           Rooms
//           Bedrooms
//           Bathrooms
//           Price
//           Rent
//           Short_Andress
//           Neighbourhood
//         }
//       }
//     }
//   }
// `;

const Section3 = () => {
  // const { loading, data, error } = useQuery(CARD_DATA);
  return (
    <section className={styles.section_3}>
      <div className={styles.section_3_title}>
        <h1>Best Houses</h1>
        <ArrowButton text="See More" path="buy" />
      </div>

      {/* CARDS/ CAROUSEL */}
      <div className={styles.cards}>
        <Carousel>
          {/* {loading || error ? (
            <>
              <SwiperSlide>
                <Card />
              </SwiperSlide>
            </>
          ) : ( */}
          <>
            {BUY_DATA.map((house, index) => (
              <SwiperSlide key={index}>
                <Card
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
              </SwiperSlide>
            ))}
          </>
          {/* )} */}
        </Carousel>
      </div>
    </section>
  );
};

export default Section3;
