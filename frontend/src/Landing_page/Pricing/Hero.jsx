import React from "react";
function Hero() {
  return (
    <div className="container ">
      <div
        className="row text-center border-bottom  mt-5 "
        style={{ color: "#424242" }}
      >
        <h2 className="mt-2" style={{ color: "#424242" }}>
          Charges
        </h2>

        <p className="mt-3 mb-5" style={{ color: "#424242", fontSize: "24px" }}>
          List of all charges and taxes{" "}
        </p>
      </div>
      <div className="row text-center mt-5 mb-5" style={{ color: "#424242" }}>
        <div className="col-4 footer col-sm-4 col-md-6 col-lg-4 col-xl-4">
          <img src="/media/images/pricingEquity.svg" alt="" />
          <h2 style={{ color: "#424242" }}>Free equity delivery</h2>
          <p
            style={{
              fontSize: "1rem",
              lineHeight: "1.6",
              color: "#666",
            }}
          >
            All equity delivery investments (NSE, BSE), are absolutely free — ₹
            0 brokerage.
          </p>
        </div>
        <div className="col-4 footer col-md-6 col-sm-4 col-lg-4 col-xl-4 ">
          <img src="/media/images/intradayTrades.svg" alt="" />
          <h2 style={{ color: "#424242" }}>Intraday and F&O trades</h2>
          <p
            style={{
              fontSize: "1rem",
              lineHeight: "1.6",
              color: "#666",
            }}
          >
            {" "}
            Flat ₹ 20 or 0.03% (whichever is lower) per executed order on
            intraday trades across equity, currency, and commodity trades. Flat
            ₹20 on all option trades.
          </p>
        </div>
        <div className="col-4 footer col-sm-4 mb-3  col-md-6 col-lg-4 col-xl-4">
          <img src="/media/images/pricingEquity.svg" alt="" />
          <h2 style={{ color: "#424242" }}>Free direct MF</h2>
          <p
            style={{
              fontSize: "1rem",
              lineHeight: "1.6",
              color: "#666",
            }}
          >
            All direct mutual fund investments are absolutely free — ₹ 0
            commissions & DP charges.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Hero;
