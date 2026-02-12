export default function Education() {
  return (
    <div className="container mt-5 mb-5">
      <div className="row align-items-center gy-4 ">
        <div className="col-12 col-md-6 p-5 text-center">
          <img
            src="/media/images/education.svg"
            alt="Broker_Image"
            style={{ width: "90%", fontWeight: "500" }}
          />
        </div>
        <div className="col-12 col-md-6 p-5 mt-3 ml-4 text-md-start ">
          <h2
            className="mb-4"
            style={{ color: "#424242", fontSize: "1.75rem" }}
          >
            Free and open market education
          </h2>
          <p className="mt-5 " style={{ color: "#424242", fontSize: "1rem" }}>
            Varsity, the largest online stock market education book in the world
            covering everything from the basics to advanced trading.
          </p>
          <a href="#" style={{ textDecoration: "none", color: "#387ed1" }}>
            Varsity <i class="fa-solid fa-arrow-right"></i>
          </a>
          <p className="mt-5 " style={{ color: "#424242", fontSize: "1rem" }}>
            TradingQ&A, the most active trading and investment community in
            India for all your market related queries.
          </p>
          <a href="#" style={{ textDecoration: "none", color: "#387ed1;" }}>
            TradingQ&A <i class="fa-solid fa-arrow-right"></i>
          </a>
        </div>
      </div>
    </div>
  );
}
