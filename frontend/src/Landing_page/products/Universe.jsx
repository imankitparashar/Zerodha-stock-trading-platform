import React from "react";
function Universe() {
  return (
    <div className="container">
      <div className="row text-center mt-5">
        <h2
          style={{
            color: "#424242",
          }}
          className=" mb-4"
        >
          Zerodha Universe
        </h2>
        <p
          style={{
            color: "#424242",
            fontSize: "20px",
          }}
        >
          Extend your trading and investment experience even further with our
          partner platforms
        </p>
        <div className="col-4 footer mt-5 col-lg-4 col-xl-4 col-md-4 col-sm-12">
          <img
            src="/media/images/smallcaseLogo.png"
            alt=""
            style={{ width: "50%" }}
          />
          <p className="text-small text-muted">
            Thematic investing platform that helps you invest in diversified
            baskets of stocks on ETFs.
          </p>
        </div>
        <div className="col-4 footer mt-5 col-lg-4 col-xl-4 col-md-4 col-sm-12">
          <img
            src="/media/images/streakLogo.png"
            alt=""
            style={{ width: "50%" }}
          />
          <p className="text-small  text-muted">
            Systematic trading platform that allows you to create and backtest
            strategies without coding.
          </p>
        </div>
        <div className="col-4 footer mt-5 col-lg-4 col-xl-4 col-md-4 col-sm-12">
          <img
            src="/media/images/sensibullLogo.svg"
            alt=""
            style={{ width: "50%", marginBottom: "25px" }}
          />
          <p className="text-small text-muted">
            Options trading platform that lets you create strategies, analyze
            positions, and examine data points like open interest, FII/DII, and
            more.
          </p>
        </div>
        <div className="col-4 footer mt-5 col-lg-4 col-xl-4 col-md-4 col-sm-12">
          <img
            src="/media/images/zerodhaFundhouse.png"
            alt=""
            style={{ width: "50%" }}
          />
          <p className="text-small text-muted">
            Our asset management venture that is creating simple and transparent
            index funds to help you save for your goals.
          </p>
        </div>
        <div className="col-4 footer mt-5 col-lg-4 col-xl-4 col-md-4 col-sm-12">
          <img
            src="/media/images/goldenpiLogo.png"
            alt=""
            style={{ width: "50%" }}
          />
          <p className="text-small  text-muted">
            Investment research platform that offers detailed insights on
            stocks, sectors, supply chains, and more.
          </p>
        </div>
        <div className="col-4 footer mt-3  col-lg-4 col-xl-4 col-md-4 col-sm-12">
          <img
            src="/media/images/dittoLogo.png"
            alt=""
            style={{ width: "50%" }}
            className="mb-3"
          />
          <p className="text-small text-muted">
            Personalized advice on life and health insurance. No spam and no
            mis-selling.
          </p>
        </div>
        <button
          className="btn p-3 button-signup text-nowrap  mb-5"
          style={{
            width: "20%",
            // padding: "10px 30px",
            margin: "25px auto",
            minWidth: "160px",
            fontSize: "1.2em",
            lineHeight: "1.2em",
            textAlign: "center",
            borderRadius: "3px",

            backgroundColor: "#387ed1",
            color: "white",
            fontWeight: "400",
            border: "1px solid rgba(0, 0, 0, 0) !important",
          }}
        >
          Sign up for free
        </button>
      </div>
    </div>
  );
}

export default Universe;
