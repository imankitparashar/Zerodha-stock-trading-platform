import React from "react";
import { Link } from "react-router-dom";
import "../home/home.css";
function Team() {
  return (
    <div className="container">
      <div
        className="row text-center d-flex align-items-center my-5 d-flex justify-content-center mt-5 p-5  "
        style={{ color: "#424242", fontSize: "24px" }}
      >
        <h1 className="mb-5">People</h1>
        <div className="col-6 col-md-12 text-muted col-lg-8p-5 col-xl-6 col-sm-12 my-5 mt-5 text-center footer justify-content-center align-items-center">
          <img
            src="/media/images/Ankit .jpg"
            alt="team image"
            style={{
              textAlign: "center",

              height: "500px",
              width: "500px",
              borderRadius: "50%",
              marginBottom: "10px",
              color: "#424242",
            }}
          />
          <h2 className="mt-4">Ankit Parashar</h2>
          <h3>Founder,CEO</h3>
        </div>
        <div className="col-6 col-md-12 text-muted footer text-wrap  my-5 col-xl-6 col-lg-8 col-sm-12 ">
          {" "}
          <p
            className="mb-3 text-start"
            style={{
              marginTop: "10px",
              color: "#424242",
              fontSize: "20px",
              fontWeight: "400",

              maxWidth: "700px",
              lineHeight: "1.8",
            }}
          >
            Ankit Parashar bootstrapped and founded Zerodha in 2010 to overcome
            the hurdles he faced during his decade long stint as a trader.
            Today, Zerodha has changed the landscape of the Indian broking
            industry.
          </p>
          <p
            className="text-start"
            style={{
              marginTop: "10px",
              color: "#424242",
              fontSize: "20px",
              fontWeight: "400",

              lineHeight: "1.8",
            }}
          >
            He is a member of the SEBI Secondary Market Advisory Committee
            (SMAC) and the Market Data Advisory Committee (MDAC).
          </p>
          <p
            className="text-start"
            style={{
              marginTop: "10px",
              color: "#424242",
              fontSize: "20px",
              fontWeight: "400",

              lineHeight: "1.8",
            }}
          >
            {" "}
            Playing basketball is his zen. Connect on{" "}
            <Link to="/" style={{ textDecoration: "none" }}>
              Homepage
            </Link>{" "}
            /{" "}
            <a href="" style={{ textDecoration: "none" }}>
              TradingQnA
            </a>{" "}
            /{" "}
            <a href="" style={{ textDecoration: "none" }}>
              Twitter
            </a>
          </p>
          <p
            className="text-start"
            style={{
              marginTop: "10px",
              color: "#424242",
              fontSize: "20px",
              fontWeight: "400",
            }}
          >
            Connect on Homepage / TradingQnA /
          </p>
        </div>
      </div>
    </div>
  );
}

export default Team;
