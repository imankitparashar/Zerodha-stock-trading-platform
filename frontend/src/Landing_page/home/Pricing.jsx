import "./home.css";
export default function Pricing() {
  return (
    <div className="container my-4">
      <div className="row align-items-center ">
        <div className="col-md-12 col-lg-5 col-12 mb-3   p-5  ">
          <h1
            className="mb-4 p-2 fs-2"
            style={{ fontSize: "1.75rem", fontWeight: "500", color: "#424242" }}
          >
            Unbeatable pricing
          </h1>
          <p
            style={{
              fontSize: "1rem",
              lineHeight: "1.6",
              color: "#666",
            }}
            className=" p-1 text-muted"
          >
            We pioneered the concept of discount broking and price transparency
            in India. Flat fees and no hidden charges.
          </p>
          <a href="#" style={{ textDecoration: "none" }}>
            Start Pricing <i class="fa-solid fa-arrow-right"></i>
          </a>
        </div>
        <div className="col-lg-7 col-md-12 col-12 my-5 align-items-center ">
          <div className="row  ">
            <div className=" mb-4 mr-4 col-lg-6 pr-5 col-xxl-4 col-md-6 col-xl-5 col-12  d-flex justify-content-center align-items-center  ">
              <img
                className="pricing-img"
                src="/media/images/pricing0.svg"
                alt="price"
              />{" "}
              &nbsp; &nbsp;{" "}
              <p className="text-muted mr-3 flex-shrink-0 pricing-para">
                Free Account
                <br />
                Opening
              </p>
              &nbsp;
            </div>
            <div className="mb-4  col-lg-6 p-4 col-xxl-4 col-md-6 ml-1 col-xl-5 col-12 d-flex  justify-content-center align-items-center ">
              <img
                className="pricing-img"
                src="/media/images/pricing0.svg"
                alt="price"
              />{" "}
              &nbsp;
              <p className="text-muted text-nowrap flex-shrink-0 pricing-para">
                Free equity delivery
                <br />
                and direct mutual funds
              </p>
            </div>

            <div className="pricing-box mb-4 ml-2 pl-3 col-12 col-xxl-4 col-md-8  col-lg-12 col-xl-4  ml-1 d-flex justify-content-center align-items-center">
              <img
                className="pricing-img"
                src="/media/images/other-trades.svg"
                alt="price"
              />
              <p className="text-muted text-nowrap flex-shrink-0 pricing-para">
                intraday and <br /> F&O
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
