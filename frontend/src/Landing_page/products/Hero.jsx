import React from "react";
function Hero() {
  return (
    <div className="container ">
      <div
        className="row text-center border-bottom  mt-5 "
        style={{ color: "#424242" }}
      >
        <h2 className="mt-2" style={{ color: "#424242" }}>
          Zerodha Products
        </h2>
        <h3 className="text-muted mt-3">
          Sleek, modern, and intuitive trading platforms
        </h3>
        <p className="mt-3 mb-5" style={{ color: "#424242" }}>
          Check out our{" "}
          <a href="#" style={{ textDecoration: "none" }}>
            investment offerings <i class="fa-solid fa-arrow-right"></i>
          </a>
        </p>
      </div>
    </div>
  );
}

export default Hero;
