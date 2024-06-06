import "../components/index.css";
import "bootstrap";
import "./all.css";
import { Link as ScrollLink } from "react-scroll";

export default function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg bg-dark ">
      <div className="container-fluid  " style={{ marginTop: "-30px" }}>
        <a className="navbar-brand " href="#">
          <img className="logo" src="../imges/logo.png" alt="" />
        </a>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavDropdown"
          aria-controls="navbarNavDropdown"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span
            className="navbar-toggler-icon"
            style={{ border: " white 1px solid !important" }}
          ></span>
        </button>
        <div
          className="collapse navbar-collapse justify-content-evenly"
          id="navbarNavDropdown"
        >
          <ul className="navbar-nav  ">
            <li className="nav-item">
              <ScrollLink
                activeClass="active"
                to="home"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
              >
                {" "}
                <a
                  className="nav-link active n"
                  aria-current="page"
                  href="#"
                  style={{ color: "#fff", textDecoration: "none" }}
                >
                  Home
                </a>
              </ScrollLink>
            </li>
            <li className="nav-item">
              {" "}
              <ScrollLink
                to="about"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
              >
                <a className="nav-link n" href="#" style={{ color: "#fff" }}>
                  About Us
                </a>
              </ScrollLink>
            </li>
            <li className="nav-item ">
              <ScrollLink
                to="contact"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
              >
                <a className="nav-link n" href="#" style={{ color: "#fff" }}>
                  Contact
                </a>
              </ScrollLink>
            </li>
            <li className="nav-item ">
              {" "}
              <ScrollLink
                to="menu"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
              >
                <a className="nav-link n" href="#" style={{ color: "#fff" }}>
                  Menu{" "}
                </a>
              </ScrollLink>
            </li>
          </ul>
          <form className="d-flex">
            <input
              className="form-control me-2 serchin"
              type="search"
              aria-label="Search"
              style={{
                color: "orange",
                backgroundColor: "transparent ",
                border: "1px solid #E9BF72",
              }}
            />
            <button className="btn btn-outline-success search" type="submit">
              Search
            </button>
          </form>
        </div>
      </div>
    </nav>
  );
}
