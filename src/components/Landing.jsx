import React from "react";
import "./all.css";
import { Link as ScrollLink } from "react-scroll";

export default function () {
  return (
    <div className="banner d-flex">
      <div className="inner-text">
        <h1 className="" style={{ color: "#FFEB3B" }}>
          Quality And Consistancy Of Food
        </h1>

        <p className="">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam a
          ultricies
          <br /> metus. Sed nec molestie eros. Sed viverra velit venenatis
          fermentum luctus.
        </p>
        <ScrollLink
          to="tables"
          spy={true}
          smooth={true}
          offset={-70}
          duration={500}
        >
          <a
            href="#"
            className="btn order"
            style={{ border: "1px solid #FFEB3B" }}
          >
            Book My Table
          </a>
        </ScrollLink>
        <ScrollLink
          to="menu"
          spy={true}
          smooth={true}
          offset={-70}
          duration={500}
        >
          <a
            href="#"
            className="btn order two"
            style={{
              border: "1px solid #FFEB3B",
              marginLeft: "15px",
            }}
          >
            Veiw Menu
          </a>
        </ScrollLink>
      </div>
      <div style={{ width: "30%" }}></div>
    </div>
  );
}
