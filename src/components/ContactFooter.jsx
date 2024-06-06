import React from "react";
import "./Footer.css";

const ContactFooter = () => {
  return (
    <footer className="text-center text-lg-start bg-body-tertiary text-muted">
      <section className="">
        <div
          className="container text-center text-md-start "
          style={{ paddingTop: "30px" }}
        >
          <div className="row mt-3">
            <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
              <h6
                className="text-uppercase fw-bold mb-4"
                style={{ color: "gold" }}
              >
                <i className="fas fa-gem me-3"></i>SUHI CRUSH
              </h6>
              <p>
                Presentations are communication tools that can be used as
                demonstrations, lectures, speeches, reports, and more.
              </p>
            </div>

            <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
              <h6
                className="text-uppercase fw-bold mb-4"
                style={{ color: "gold" }}
              >
                Products
              </h6>
              <p>
                <a href="#!" className="text-reset" style={{ color: "gold" }}>
                  Sushi
                </a>
              </p>
              <p>
                <a href="#!" className="text-reset">
                  Drinks
                </a>
              </p>
              <p>
                <a href="#!" className="text-reset">
                  Moshi
                </a>
              </p>
              <p>
                <a href="#!" className="text-reset">
                  Sushi
                </a>
              </p>
            </div>

            <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
              <h6
                className="text-uppercase fw-bold mb-4"
                style={{ color: "gold" }}
              >
                Useful links
              </h6>
              <p>
                <a href="#!" className="text-reset">
                  Pricing
                </a>
              </p>
              <p>
                <a href="#!" className="text-reset">
                  Settings
                </a>
              </p>
              <p>
                <a href="#!" className="text-reset">
                  Orders
                </a>
              </p>
              <p>
                <a href="#!" className="text-reset">
                  Help
                </a>
              </p>
            </div>

            <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
              <h6
                className="text-uppercase fw-bold mb-4"
                style={{ color: "gold" }}
              >
                Contact
              </h6>
              <p>
                <i className="fas fa-home me-3"></i> Irbid, Us 10012,
              </p>
              <p>
                <i className="fas fa-envelope me-3"></i>
                nedaaalyasein.com
              </p>
              <p>
                <i className="fas fa-phone me-3"></i> +962 776485420
              </p>
              <p>
                <i className="fas fa-print me-3"></i> +962 776485420
              </p>
            </div>
          </div>
        </div>
      </section>

      <div
        className="text-center p-4"
        style={{ backgroundColor: "rgba(0, 0, 0, 0.05)" }}
      >
        © 2024 Copyright:
        <a className="text-reset fw-bold" href="">
          engnedaa.com
        </a>
      </div>
    </footer>
  );
};

export default ContactFooter;
