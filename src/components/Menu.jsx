import React, { useState } from "react";
import menuItems from "./MenuItems";
import "./Menu.css";
import { Card, Button, Row, Col } from "react-bootstrap";
import ItemModal from "./ItemModal";
import "./all.css";
const Menu = () => {
  const [activeCategory, setActiveCategory] = useState("mainCourse");
  const [modalShow, setModalShow] = useState(false);
  const [selectedItem, setSelectedItem] = useState({});

  const handleCardClick = (item) => {
    setSelectedItem(item);
    setModalShow(true);
  };

  return (
    <div style={{ backgroundColor: "#00000066" }}>
      <h1 className="menuTitle">Main Menu</h1>
      <div className="container menu-categories">
        {Object.keys(menuItems).map((category) => (
          <Button
            key={category}
            onClick={() => setActiveCategory(category)}
            className="catbtn"
          >
            {category}
          </Button>
        ))}
      </div>

      <div className="row-container">
        <Row className="container" style={{ marginTop: "5px" }}>
          {menuItems[activeCategory].slice(0, 12).map((item, index) => (
            <Col key={index} lg={4} xs={6} sm={6} md={6}>
              {" "}
              <Card className="menu-card" onClick={() => handleCardClick(item)}>
                <Card.Img variant="top" src={item.image} />
                <Card.Body className="menubody">
                  <Card.Title>{item.title}</Card.Title>
                  <Card.Text className="dis">{item.text}</Card.Text>
                  <p className="price">{item.price}</p>
                  <Card.Text className="dis" style={{ display: "none" }}>
                    {item.dis}
                  </Card.Text>
                </Card.Body>
              </Card>
              {/* {index % 6 === 5 && <hr className="menu-divider" />} */}
            </Col>
          ))}
        </Row>
      </div>

      <ItemModal
        show={modalShow}
        onHide={() => setModalShow(false)}
        item={selectedItem}
      />
    </div>
  );
};

export default Menu;
