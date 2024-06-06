import React, { useState, useEffect } from "react";
import { Modal, Button, Form } from "react-bootstrap";
import "./all.css";
const ItemModal = ({ show, onHide, item }) => {
  const [quantity, setQuantity] = useState(1);
  // Ensure item.price is a number. If it's a string, parse it to a float.
  const [itemPrice, setItemPrice] = useState(parseFloat(item.price));

  const handleQuantityChange = (e) => {
    const newQuantity = parseInt(e.target.value, 10);
    // Check if the parsed quantity is a valid number before setting it.
    if (!isNaN(newQuantity) && newQuantity > 0) {
      setQuantity(newQuantity);
      setItemPrice(calculatePrice(parseFloat(item.price), newQuantity));
    }
  };

  // Helper function to calculate the price
  const calculatePrice = (price, quantity) => {
    // Ensure both price and quantity are numbers.
    return price * quantity;
  };

  // Use useEffect to update the price if the item price changes
  useEffect(() => {
    setItemPrice(calculatePrice(parseFloat(item.price), quantity));
  }, [item.price, quantity]);

  return (
    <Modal
      show={show}
      onHide={onHide}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          {item.title}
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <div className="d-flex flex-column flex-lg-row justify-content-between">
          <img src={item.image} alt={item.title} className="img-fluid" />
          <div className="mt-3 mt-lg-0" style={{ marginRight: "90px" }}>
            <p className="itemText">{item.dis}</p>
            <p className="itemsText">{item.text}</p>
            <Form.Group
              controlId="quantitySelector"
              className="mt-2 p"
              style={{ marginTop: "10px" }}
            >
              <Form.Control
                type="number"
                value={quantity}
                onChange={handleQuantityChange}
                min="1"
                max="100"
                className="w-auto p"
                style={{ width: "80px" }}
              />
              <h5 className="prices">{itemPrice.toFixed(2)} JOD</h5>{" "}
            </Form.Group>
            {/* Format the price to two decimal places */}
          </div>
        </div>
      </Modal.Body>
      <Modal.Footer>
        <Button
          className="ordernow"
          onClick={() => {
            onHide();
            console.log(`Ordered ${quantity} of ${item.title}`);
          }}
        >
          Order Now
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default ItemModal;
