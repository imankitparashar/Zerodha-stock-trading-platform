import React from "react";
function CreateTicket() {
  return (
    <div className="container">
      <div className="row text-center mt-5">
        <h1
          style={{
            color: "#424242",
          }}
          className=" mb-4"
        >
          To create a ticket, select a relevant topic
        </h1>

        <div className="row text-start mt-5">
          <div className="col-4  footer mt-5 col-lg-4 col-xl-4 col-md-4 col-sm-12">
            <h4>
              <i class="fa-solid fa-plus"></i> &nbsp;Account Opening
            </h4>
            <ul className="text-start" style={{ lineHeight: "1.8" }}>
              <li> Online Account Opening </li>
              <li> Offline Account Opening </li>
              <li> Opening </li>
              <li>Company, Partnership and HUF Account </li>
              <li>NRI Account Opening </li>
              <li> Charges at Zerodha </li>
              <li> Zerodha IDFC FIRST Bank 3-in-1 Account </li>
              <li> Getting Started </li>
            </ul>
          </div>
          <div className="col-4 footer mt-5 col-lg-4 col-xl-4 col-md-4 col-sm-12">
            <h4>
              {" "}
              <i class="fa-solid fa-circle-user"></i> &nbsp;Your Zerodha Account
            </h4>
            <ul className="text-start" style={{ lineHeight: "1.8" }}>
              <li> Online Account Opening </li>
              <li> Offline Account Opening </li>
              <li> Opening </li>
              <li>Company, Partnership and HUF Account </li>
              <li>NRI Account Opening </li>
              <li> Charges at Zerodha </li>
              <li> Zerodha IDFC FIRST Bank 3-in-1 Account </li>
              <li> Getting Started </li>
            </ul>
          </div>
          <div className="col-4 footer mt-5 col-lg-4 col-xl-4 col-md-4 col-sm-12">
            <h4>
              <i class="fa-solid fa-eye"></i> &nbsp; Console
            </h4>
            <ul className="text-start" style={{ lineHeight: "1.8" }}>
              <li> Online Account Opening </li>
              <li> Offline Account Opening </li>
              <li> Opening </li>
              <li>Company, Partnership and HUF Account </li>
              <li>NRI Account Opening </li>
              <li> Charges at Zerodha </li>
              <li> Zerodha IDFC FIRST Bank 3-in-1 Account </li>
              <li> Getting Started </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CreateTicket;
