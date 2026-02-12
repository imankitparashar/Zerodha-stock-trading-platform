import React from "react";
import "../home/home.css";
export default function Hero() {
  return (
    <section className="container-fluid " id="supportHero">
      <div className="  pt-5 p-5  mb-5 " id="supportWrapper">
        <h4>Support Portal</h4>
        <a href="">Track Tickets</a>
      </div>
      <div className=" row pb-5 me-auto m-5  mb-5 ">
        <div className="col-6 mt-5 footer p-3 col-md-12 col-lg-8 col-xl-6 col-sm-12 text-first  ">
          <h2>Search for an answer or browse help topics to create a ticket</h2>
          <form action="">
            <input
              type="text"
              placeholder="Eg. how do i activate F&O , why is my order getting rejected...."
            />
          </form>
          <a href="">Track account opening </a> &nbsp; &nbsp;
          <a href="">Track segment activation</a> &nbsp; &nbsp;
          <a href="">intraday </a> <br />
          <a href="">margins </a> &nbsp; &nbsp;
          <a href="">Kite user manual</a> &nbsp; &nbsp;
        </div>
        <div className="col-6 footer  col-md-12 p-5 col-lg-6 col-xl-6 col-sm-12 mt-3 text-first ">
          <h2>Featured</h2>
          <ol type="1">
            <a href="">
              <li className="mb-2" style={{ maxWidth: "100%" }}>
                Current Takeovers and Delisting - January 2024
              </li>
            </a>
            <a href="">
              {" "}
              <li>Latest intraday leverages - MIS & CO</li>
            </a>
          </ol>
        </div>
      </div>
    </section>
  );
}
