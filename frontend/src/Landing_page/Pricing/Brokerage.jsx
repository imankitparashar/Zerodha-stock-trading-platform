import React from "react";
function Brokerage() {
  return (
    <div className="container ">
      <div className="row text-center border-top  mt-5 ">
        <div className="col-8 col-lg-8 cl-md-8 col-sm-12 footer mt-5">
          <h3 style={{ color: "#387ed1" }}>Brokerage Calculator</h3>
          <ul className="mt-5 text-start text-muted">
            <li style={{ lineHeight: 1.8 }}>
              For a non-PIS account, 0.5% or ₹50 per executed order for equity
              and F&O (whichever is lower).
              <li>
                For a PIS account, 0.5% or ₹200 per executed order for equity
                (whichever is lower).
              </li>
              <li>
                ₹500 + GST as yearly account maintenance charges (AMC) charges.
              </li>
            </li>
          </ul>
        </div>
        <div className="col-4 col-md-4 col-lg-4 col-sm-12 footer mt-5">
          <h3 style={{ color: "#387ed1" }}>List of Charges</h3>
        </div>
      </div>
    </div>
  );
}

export default Brokerage;
