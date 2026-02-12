import React from "react";
import "../../index.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
function signup() {
  const navigate = useNavigate();
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    Mobile: "",
  });

  async function handleSignup(e) {
    try {
      const res = await axios.post("https://zerodha-stock-trading-platform-8qu2.onrender.com/signup", formData);
      console.log(formData);
      if (res.data.success === true) {
        setSuccess("Account Created Succesfully. Redirecting..");
        setTimeout(() => {
          window.location.href = "https://zerodha-stock-trading-platform-1.onrender.com";
        }, 1500);
      }
    } catch (err) {
      if (err.response && err.response?.status === 409) {
        setError("Account already exists. Please login");
      } else if (err.response?.status === 400) {
        setError("Please fill all mandatory fields");
      } else {
        setError("Something went wrong. Try again");
      }
    }
  }
  function handleSubmit(e) {
    e.preventDefault();
  }
  function handleChange(e) {
    setError("");
    setSuccess("");
    setFormData({ ...formData, [e.target.name]: e.target.value });
  }

  return (
    <div className="container my-5 ">
      <div className="row justify-content-center   ">
        <div
          className="col  col-11 col-sm-10 col-md-8 col-lg-6 col-xl-5 rounded  text-center  "
          style={{
            background: "linear-gradient(to right, #36d1dc, #5b86e5)",
          }}
        >
          <h1 className="m-5 p-3" style={{ color: "#424242" }}>
            Signup Zerodha
          </h1>
          <form onSubmit={handleSubmit} className="p-3 p-sm-4 p-md-5">
            <label htmlFor="email" className="text-white">
              {" "}
              Email : &nbsp;
            </label>
            <input
              className=" form-control rounded  border-2  "
              type="text"
              placeholder="abc@gmail.com"
              name="email"
              id="email"
              onChange={handleChange}
              value={formData.email}
              required
            />
            <br />
            <label className="text-white" htmlFor="password">
              {" "}
              Password : &nbsp;
            </label>
            <input
              className=" form-control rounded  border-2 "
              type="password"
              autoComplete="current-password"
              placeholder="password"
              name="password"
              id="password"
              onChange={handleChange}
              value={formData.password}
              required
            />
            <br />
            <label className="text-white" htmlFor="Mobile">
              Mobile : &nbsp;
            </label>
            <input
              className=" form-control rounded  border-2 "
              type="number"
              id="Mobile"
              placeholder="1234567890"
              name="Mobile"
              onChange={handleChange}
              value={formData.Mobile}
              required
            />
            <br />
            <button
              onClick={handleSignup}
              className="p-2 m-4 rounded text-primary"
            >
              Signup
            </button>
          </form>
          {error && <p style={{ color: "red", marginTop: "10px" }}>{error}</p>}

          {success && (
            <p style={{ color: "lightgreen", marginTop: "10px" }}>{success}</p>
          )}
        </div>
      </div>
    </div>
  );
}

export default signup;
