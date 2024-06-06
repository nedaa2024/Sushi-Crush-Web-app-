import React, { useEffect, useState } from "react";
import Carousel from "./Carousel";
import { offersData } from "../Data";
import "./all.css";
const Offers = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((current) =>
        current === offersData.length - 1 ? 0 : current + 1
      );
    }, 3000); // Change slides every 3 seconds

    return () => clearInterval(interval);
  }, [offersData.length]);

  console.log(offersData);

  return (
    <div
      className="offers-container"
      style={{ marginTop: "150px", marginBottom: "200px" }}
    >
      <h2
        style={{
          textAlign: "center",
          marginBottom: "30px",
          background:
            "linear-gradient(to right, red, orange, yellow, #51ff51, #f3b251, indigo, violet) text",
          backgroundClip: "text",
          color: "transparent",
        }}
        className="colortext"
      >
        Our Special Offers
      </h2>
      <Carousel cards={offersData} />
    </div>
  );
};

export default Offers;
