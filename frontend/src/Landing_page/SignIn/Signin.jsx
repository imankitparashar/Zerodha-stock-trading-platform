 import React from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
function SignIn() {
  const navigate = useNavigate();
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  function handleChange(e) {
    setError("");
    setSuccess("");
    setFormData({ ...formData, [e.target.name]: e.target.value });
  }
  function handleSubmit(e) {
    e.preventDefault();
  }
  async function handleLogin() {
    try {
<<<<<<< HEAD
      const res = await axios.post(
        "https://zerodha-stock-trading-platform-8qu2.onrender.com/signin",
        formData
      );
=======
      const res = await axios.post("https://zerodha-stock-trading-platform-8qu2.onrender.com/signin", formData);
>>>>>>> 8da730bad348753e0228e479a14d6c25cdbeec16

      if (res.data.success === true) {
        localStorage.setItem("token", res.data.token);

        setSuccess("Login Successful. Redirecting....");
        setTimeout(() => {
          window.location.href = "https://zerodha-stock-trading-platform-1.onrender.com";
        }, 1500);
      }
    } catch (err) {
      if (err.response && err.response.status === 400) {
        setError("Email and password required");
      } else if (err.response && err.response.status === 401) {
        setError("Invalid email or password");
      } else if (err.response && err.response.data?.message) {
        setError(err.response.data.message);
      } else {
        setError("something went wrong");
      }
    }
  }
  return (
    <div className="container my-5 ">
      <div className="row justify-content-center   ">
        <div
          className="col  col-11 col-sm-10 col-md-8 col-lg-6 col-xl-5 rounded  text-center  "
          style={{
            background: "linear-gradient(to right, #6190e8, #a7bfe8)",
          }}
        >
          <h1 className="m-5 p-3" style={{ color: "#424242" }}>
            Log In to Zerodha
          </h1>
          <form className="p-3 p-sm-4 p-md-5" onSubmit={handleSubmit}>
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
              value={formData.email}
              onChange={handleChange}
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
              placeholder="password"
              name="password"
              id="password"
              value={formData.password}
              onChange={handleChange}
              required
            />
            <br />

            <button
              onClick={handleLogin}
              className="p-2 m-4 rounded text-primary"
            >
              Log in
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

export default SignIn;
