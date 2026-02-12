import "../../index.css";
import { Link } from "react-router-dom";
export default function Hero() {
  return (
    <div className="container p-5 mb-4 mt-200px">
      <div className="row text-center">
        <img
          src="/media/images/homeHero.png"
          alt="Hero Image"
          className="mb-5"
        />
        <h1
          className="mt-5"
          style={{ fontSize: "28px", color: "#424242", fontWeight: "500" }}
        >
          Invest in everything
        </h1>
        <p
          style={{
            marginTop: "10px",
            color: "#424242",
            fontSize: "20px",
            fontWeight: "400",
          }}
        >
          Online platform to invest in stocks, derivatives, mutual funds, ETFs,
          bonds, and more.
        </p>
        <Link to="/Signup">
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
        </Link>
      </div>
    </div>
  );
}
