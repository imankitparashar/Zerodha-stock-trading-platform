import React from "react";
import "../home/home.css";
function Hero() {
  return (
    <div className="Container">
      <div
        className="row text-center mt-5 mb-5  text-wrap col-12 p-4"
        style={{ color: "#424242", fontSize: "24px" }}
      >
        <h2
          style={{
            marginLeft: "10px",
          }}
        >
          We pioneered the discount broking model in India.
        </h2>
        <br />
        <h2
          style={{
            marginLeft: "10px",
          }}
        >
          Now, we are breaking ground with our technology.
        </h2>
      </div>
      <div
        className="row text-center align-items-center my-5 border-top d-flex justify-content-center mt-5 p-2 "
        style={{ color: "#424242", fontSize: "24px" }}
      >
        <div className="col-6 text-start col-xl-6  col-md-12 col-lg-12 col-sm-12 footer  my-5 mt-2 col-xxl-6">
          <div
            style={{
              marginLeft: "40px",

              marginTop: "80px",
            }}
          >
            <p className="mb-3 r ">
              We kick-started operations on the 15th of August, 2010 with the
              goal of breaking all barriers that traders and investors face in
              India in terms of cost, support, and technology. We named the
              company Zerodha, a combination of Zero and "Rodha", the Sanskrit
              word for barrier.{" "}
              <p className="mb-3">
                {" "}
                Today, our disruptive pricing models and in-house technology
                have made us the biggest stock broker in India.
              </p>{" "}
              <p className="mb-3 ">
                Over 1.6+ crore clients place billions of orders every year
                through our powerful ecosystem of investment platforms,
                contributing over 15% of all Indian retail trading volumes.
              </p>
            </p>
          </div>
        </div>
        <div className="col-6 text-start  footer align-items-center  col-md-12 col-lg-12 col-sm-12 col-xl-6 my-5 p-2 mt-5 col-xxl-6 ">
          <div
            style={{
              marginLeft: "40px",
            }}
          >
            <p className="mb-3">
              In addition, we run a number of popular open online educational
              and community initiatives to empower retail traders and investors.
            </p>{" "}
            <p className="mb-3">
              {" "}
              <a style={{ textDecoration: "none" }} href="#">
                {" "}
                Rainmatter
              </a>
              , our fintech fund and incubator, has invested in several fintech
              startups with the goal of growing the Indian capital markets.
            </p>{" "}
            <p className="mb-3">
              And yet, we are always up to something new every day. Catch up on
              the latest updates on our blog or see what the media is saying
              about us or learn more about our business and product
              philosophies.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
