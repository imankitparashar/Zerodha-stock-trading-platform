import React from "react";
import "./home/home.css";

function Footer() {
  return (
    <footer style={{ backgroundColor: "#fbfbfb" }}>
      <div className="Container d-flex justify-content-evenly mx-5 p-5 align-itmes-center border-top mt-5">
        <div className="row d-flex text-start mt-5">
          <div className="col-3 col-md-6 mt-2 col-lg-3 footer col-xl-3 col-sm-6 col-xs-12 mt-4 ">
            <img
              src="/media/images/logo.svg"
              alt="logo"
              style={{ width: "50%" }}
            />
            <p className="text-muted mt-3">
              &copy; 2010 - 2025, Zerodha Broking Ltd.
              <br />
              All rights reserved.
            </p>
          </div>
          <div className="col-3 col-md-6 col-lg-3 col-xl-3 footer col-sm-6 col-xs-12 text-muted text-start">
            <p
              style={{ color: "#424242", fontWeight: "500", marginTop: "30px" }}
            >
              Company
            </p>
            <a
              href=""
              style={{
                textDecoration: "none",
                color: "#666666",
                marginBottom: "30px ",
              }}
            >
              {" "}
              Philosophy
            </a>
            <br />
            <a
              href=""
              style={{
                textDecoration: "none",
                color: "#666666",
                marginBottom: "30px ",
              }}
            >
              {" "}
              Press & media
            </a>
            <br />

            <a
              href=""
              style={{
                textDecoration: "none",
                color: "#666666",
                marginBottom: "30px ",
              }}
            >
              Careers
            </a>
            <br />
            <a
              href=""
              style={{
                textDecoration: "none",
                color: "#666666",
                marginBottom: "30px ",
              }}
            >
              {" "}
              Zerodha Cares (CSR)
            </a>
            <br />
            <a
              href=""
              style={{
                textDecoration: "none",
                color: "#666666",
                marginBottom: "30px ",
              }}
            >
              {" "}
              Zerodha.tech
            </a>
            <br />
            <a
              href=""
              style={{
                textDecoration: "none",
                color: "#666666",
                marginBottom: "30px ",
              }}
            >
              Open source
            </a>
            <br />
          </div>
          <div className="col-3 col-md-6 col-lg-3 col-xl-3 footer col-sm-6 col-xs-12 text-muted text-start">
            <p
              style={{ color: "#424242", fontWeight: "500", marginTop: "30px" }}
            >
              Support
            </p>
            <a
              href="href"
              style={{
                textDecoration: "none",
                color: "#666666",
                marginBottom: "30px ",
              }}
            >
              Contact us
            </a>
            <br />
            <a
              href="href"
              style={{
                textDecoration: "none",
                color: "#666666",
                marginBottom: "30px ",
              }}
            >
              Support portal
            </a>
            <br />
            <a
              href="href"
              style={{
                textDecoration: "none",
                color: "#666666",
                marginBottom: "30px ",
              }}
            >
              How to file a complaint?
            </a>
            <br />
            <a
              href="href"
              style={{
                textDecoration: "none",
                color: "#666666",
                marginBottom: "30px ",
              }}
            >
              Status of your complaints
            </a>
            <br />
            <a
              href="href"
              style={{
                textDecoration: "none",
                color: "#666666",
                marginBottom: "30px ",
              }}
            >
              Bulletin
            </a>
            <br />
            <a
              href="href"
              style={{
                textDecoration: "none",
                color: "#666666",
                marginBottom: "30px ",
              }}
            >
              Circular
            </a>
            <br />
            <a
              href="href"
              style={{
                textDecoration: "none",
                color: "#666666",
                marginBottom: "30px ",
              }}
            >
              Z-Connect blog
            </a>
            <br />
            <a
              href="href"
              style={{
                textDecoration: "none",
                color: "#666666",
                marginBottom: "30px ",
              }}
            >
              {" "}
              Downloads
            </a>
            <br />
          </div>
          <div className="col-3 col-md-6 col-lg-3 col-xl-3 footer col-sm-6 col-xs-12 mt-4 flex-sm-row text-muted">
            <p style={{ color: "#424242", fontWeight: "500" }}>Account</p>
            <a
              href=""
              style={{
                textDecoration: "none",
                color: "#666666",
                marginBottom: "30px ",
              }}
            >
              Open demat account
            </a>
            <br />

            <a
              href=""
              style={{
                textDecoration: "none",
                color: "#666666",
                marginBottom: "30px ",
              }}
            >
              Minor demat account
            </a>
            <br />

            <a
              href=""
              style={{
                textDecoration: "none",
                color: "#666666",
                marginBottom: "30px ",
              }}
            >
              NRI demat account
            </a>
            <br />

            <a
              href=""
              style={{
                textDecoration: "none",
                color: "#666666",
                marginBottom: "30px ",
              }}
            >
              Commodity
            </a>
            <br />

            <a
              href=""
              style={{
                textDecoration: "none",
                color: "#666666",
                marginBottom: "30px ",
              }}
            >
              Dematerialisation
            </a>
            <br />

            <a
              href=""
              style={{
                textDecoration: "none",
                color: "#666666",
                marginBottom: "30px ",
              }}
            >
              Fund transfer
            </a>
            <br />

            <a
              href=""
              style={{
                textDecoration: "none",
                color: "#666666",
                marginBottom: "30px ",
              }}
            >
              MTF
            </a>
            <br />

            <a
              href=""
              style={{
                textDecoration: "none",
                color: "#666666",
                marginBottom: "30px ",
              }}
            >
              Referral program
            </a>
            <br />
          </div>
        </div>
      </div>
      <div
        className="p-5 justify-content-center mt-3  text-muted "
        style={{ fontSize: "1rem", lineHeight: "1.8" }}
      >
        <p className="mb-1  text-start" style={{ color: "#666666" }}>
          {" "}
          Zerodha Broking Ltd.: Member of NSE, BSE​ &​ MCX – SEBI Registration
          no.: INZ000031633 CDSL/NSDL: Depository services through Zerodha
          Broking Ltd. – SEBI Registration no.: IN-DP-431-2019 Registered
          Address: Zerodha Broking Ltd., #153/154, 4th Cross, Dollars Colony,
          Opp. Clarence Public School, J.P Nagar 4th Phase, Bengaluru - 560078,
          Karnataka, India. For any complaints pertaining to securities broking
          please write to complaints@zerodha.com, for DP related to
          dp@zerodha.com. Please ensure you carefully read the Risk Disclosure
          Document as prescribed by SEBI | ICF
        </p>
        <p className="mb-1 text-start" style={{ color: "#666666" }}>
          {" "}
          Procedure to file a complaint on SEBI SCORES: Register on SCORES
          portal. Mandatory details for filing complaints on SCORES: Name, PAN,
          Address, Mobile Number, E-mail ID. Benefits: Effective Communication,
          Speedy redressal of the grievances
        </p>
        <a href="" style={{ textDecoration: "none" }}>
          {" "}
          Smart Online Dispute Resolution | Grievances Redressal Mechanism
        </a>
        <p className="mb-1 text-start" style={{ color: "#666666" }}>
          {" "}
          Investments in securities market are subject to market risks; read all
          the related documents carefully before investing.
        </p>
        <p className="mb-1 text-start" style={{ color: "#666666" }}>
          Attention investors: 1) Stock brokers can accept securities as margins
          from clients only by way of pledge in the depository system w.e.f
          September 01, 2020. 2) Update your e-mail and phone number with your
          stock broker / depository participant and receive OTP directly from
          depository on your e-mail and/or mobile number to create pledge. 3)
          Check your securities / MF / bonds in the consolidated account
          statement issued by NSDL/CDSL every month.
        </p>
        <p className="mb-1 text-start" style={{ color: "#666666" }}>
          India's largest broker based on networth as per NSE.
        </p>{" "}
        <a href="" style={{ textDecoration: "none" }}>
          NSE broker factsheet
        </a>{" "}
        <p className="mb-1 text-start" style={{ color: "#666666" }}>
          "Prevent unauthorised transactions in your account. Update your mobile
          numbers/email IDs with your stock brokers. Receive information of your
          transactions directly from Exchange on your mobile/email at the end of
          the day. Issued in the interest of investors. KYC is one time exercise
          while dealing in securities markets - once KYC is done through a SEBI
          registered intermediary (broker, DP, Mutual Fund etc.), you need not
          undergo the same process again when you approach another
          intermediary." Dear Investor, if you are subscribing to an IPO, there
          is no need to issue a cheque. Please write the Bank account number and
          sign the IPO application form to authorize your bank to make payment
          in case of allotment. In case of non allotment the funds will remain
          in your bank account. As a business we don't give stock tips, and have
          not authorized anyone to trade on behalf of others. If you find anyone
          claiming to be part of Zerodha and offering such services, please{" "}
        </p>
        <a href="" style={{ textDecoration: "none" }}>
          {" "}
          create a ticket here.
        </a>
        <p className="mb-1 text-start" style={{ color: "#666666" }}>
          *Customers availing insurance advisory services offered by Ditto
          (Tacterial Consulting Private Limited | IRDAI Registered Corporate
          Agent (Composite) License No CA0738) will not have access to the
          exchange investor grievance redressal forum, SEBI SCORES/ODR, or
          arbitration mechanism for such products.
        </p>
      </div>
    </footer>
  );
}

export default Footer;
