import React, { useState, useRef } from "react";
import "./Carousel.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTag, faCertificate } from "@fortawesome/free-solid-svg-icons";
import "./all.css";
const Carousel = ({ cards }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const intervalRef = useRef(null); // Reference for the interval

  // Function to move to the previous card
  const prevCard = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? cards.length - 4 : prevIndex - 1
    );
  };

  // Function to move to the next card
  const nextCard = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === cards.length - 4 ? 0 : prevIndex + 1
    );
  };

  // Start auto-transition on hover
  const handleMouseEnter = () => {
    intervalRef.current = setInterval(nextCard, 2000); // Change card every 2 seconds
  };

  // Stop auto-transition on mouse leave
  const handleMouseLeave = () => {
    clearInterval(intervalRef.current);
  };

  return (
    <div
      className="carousel-container"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {/* Button to move to the previous card */}
      <button className="arrow" onClick={prevCard}>
        ◀ {/* This is a left-pointing arrow */}
      </button>
      <div className="container carousel-wrapper">
        {/* Displaying the next four cards starting from the current index */}
        {cards.slice(currentIndex, currentIndex + 4).map((card) => (
          <div key={card.id} className="card">
            <img src={card.imageUrl} alt={card.title} className="card-img" />
            <h6
              style={{ textAlign: "center", marginTop: "7px", color: "white" }}
            >
              {card.title}
            </h6>
            <p style={{ textAlign: "center", color: "#ffeb3b" }}>{card.text}</p>
            <FontAwesomeIcon
              icon={faCertificate}
              style={{
                rotate: "275deg",
                color: "yellow",
                fontSize: "40px",
                position: "absolute",
                top: "0px",
                right: "0px",
              }}
            />
          </div>
        ))}
      </div>
      {/* Button to move to the next card */}
      <button className="arrow" onClick={nextCard}>
        ▶ {/* This is a right-pointing arrow */}
      </button>
    </div>
  );
};

export default Carousel;
