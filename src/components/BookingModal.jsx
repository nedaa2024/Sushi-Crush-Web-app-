import React from "react";
import "./BookingModal.css";

const BookingModal = ({
  isOpen,
  onClose,
  onBookNow,
  card,
  roomCount,
  setRoomCount,
}) => {
  if (!isOpen) return null;

  const handleRoomCountChange = (e) => {
    setRoomCount(Number(e.target.value));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onBookNow(card, roomCount);
  };

  return (
    <div className="modal modale b">
      <div className="modal-contente b">
        <span className="close" onClick={onClose}>
          ×
        </span>
        {card && (
          <>
            <h2 style={{ textAlign: "center" }}>Booking Form </h2>
            <h4 style={{ textAlign: "center" }}>
              {card.Number} {card.title}
            </h4>
            <p style={{ textAlign: "center" }}>{card.text}</p>
          </>
        )}
        <form className="booking-form b" onSubmit={handleSubmit}>
          <input type="date" placeholder="Date" required />
          <input type="time" placeholder="Time" required />
          <input type="text" placeholder="Full Name" required />
          <input type="email" placeholder="Email" required />
          <input type="tel" placeholder="Phone" required />
          <input
            className="numberOfRoom"
            type="number"
            placeholder="Number of Rooms"
            value={roomCount}
            onChange={handleRoomCountChange}
            min="1"
            required
          />
          <button type="submit" className="book-now-modal-btn">
            Book Now
          </button>
        </form>
      </div>
    </div>
  );
};

export default BookingModal;
