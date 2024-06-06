import React, { useState } from "react";
import "./tabels.css";
import initialCardData from "./CardData";
import BookingModal from "./BookingModal";

const Tabels = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [cardData, setCardData] = useState(initialCardData);
  const [selectedCard, setSelectedCard] = useState(null);
  const [roomCount, setRoomCount] = useState(1);

  const handleOpenModal = (card) => {
    setSelectedCard(card);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedCard(null);
    setRoomCount(1);
  };

  const handleBookNow = (selectedCard, roomCount) => {
    const roomCountNumber = Number(roomCount);
    const updatedCardData = cardData.map((card) => {
      if (card.title === selectedCard.title) {
        const updatedNumber = card.number - roomCountNumber;
        return {
          ...card,
          number: updatedNumber >= 0 ? updatedNumber : 0,
        };
      }
      return card;
    });

    setCardData(updatedCardData);
    setIsModalOpen(false);
  };

  return (
    <div className="parent">
      <h2 style={{ paddingTop: "35px", color: "white", textAlign: "center" }}>
        Available Tables
      </h2>

      <div
        className="containe"
        style={{
          marginTop: "50px",
          display: "flex",

          justifyContent: "space-around",
        }}
      >
        {cardData.map((card, index) => (
          <div key={index} className="cardt">
            <h3 className="cardt-title" style={{ marginTop: "40px" }}>
              {card.number} {card.title}
            </h3>
            <p className="cardt-text">{card.text}</p>
            <button
              className="book-now-btn"
              onClick={() => handleOpenModal(card)}
            >
              Book Now
            </button>
          </div>
        ))}
      </div>

      <BookingModal
        isOpen={isModalOpen}
        onClose={handleCloseModal}
        onBookNow={handleBookNow}
        card={selectedCard}
        roomCount={roomCount}
        setRoomCount={setRoomCount}
      />
    </div>
  );
};

export default Tabels;
