import React from "react";

function OpenAccount() {
  return (
    <div className="row">
      <div className="col text-center">
        <h1
          className="mt-5"
          style={{ fontSize: "28px", color: "#424242", fontWeight: "500" }}
        >
          Open a Zerodha account
        </h1>
        <p
          style={{
            marginTop: "10px",
            color: "#424242",
            fontSize: "20px",
            fontWeight: "400",
          }}
        >
          Modern platforms and apps, ₹0 investments, and flat ₹20 intraday and
          F&O trades.
        </p>
        <button
          className="btn p-3 button-signup text-nowrap mb-5 "
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

export default OpenAccount;
