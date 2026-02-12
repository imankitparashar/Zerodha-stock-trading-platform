import React from "react";

export default function Awards() {
  return (
    <div className="container mt-5 mb-5">
      <div className="row align-items-center gy-4 ">
        <div className="col-12 col-md-6 p-5 text-center">
          <img
            src="/media/images/largestBroker.svg"
            alt="Broker_Image"
            style={{ width: "90%" }}
          />
        </div>
        <div className="col-12 col-md-6 p-5 mt-3 ml-4 text-md-start ">
          <h1 className="mb-3">Largest stock broker in India</h1>
          <p className="mb-5 ">
            2+ million Zerodha clients contribute to over 15% of all retail
            order volumes in India daily by trading and investing in :
          </p>
          <div className="row ">
            <div className="col">
              <ul>
                <p>
                  <li>Futures and Options</li>
                </p>
                <p>
                  {" "}
                  <li>Commodity derivatives</li>
                </p>
                <p>
                  {" "}
                  <li>Currency derivatives</li>
                </p>
              </ul>
            </div>
            <div className="col">
              <ul>
                <p>
                  <li>Stocks & IPOs</li>
                </p>
                <p>
                  {" "}
                  <li>Direct mutual funds</li>
                </p>
                <p>
                  {" "}
                  <li>Bonds and Govt. Securities</li>
                </p>
              </ul>
            </div>
          </div>
          <img
            className="mt-3"
            src="/media/images/pressLogos.png"
            alt="press_image"
            style={{ width: "90%" }}
          />
        </div>
      </div>
    </div>
  );
}
