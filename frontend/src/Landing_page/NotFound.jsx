import React from "react";
import { Link } from "react-router-dom";

function Error() {
  return (
    <div className="row">
      <div className="col text-center">
        <h1
          className="mt-5"
          style={{ fontSize: "28px", color: "#424242", fontWeight: "500" }}
        >
          404 <br />
          Ankit couldn’t find that page
        </h1>
        <p
          style={{
            marginTop: "10px",
            color: "#424242",
            fontSize: "20px",
            fontWeight: "400",
          }}
        >
          We couldn’t find the page you were looking for. Visit{" "}
          <Link
            to="/"
            style={{
              textDecoration: "none",
            }}
          >
            Zerodha’s home page
          </Link>
        </p>
      </div>
    </div>
  );
}
export default Error;
