import React from "react";
function RightSection({
  imageUrl,
  productName,
  productDescription,
  learnMore,
}) {
  return (
    <div className="container  ">
      <div className="row d-flex mt-5">
        <div className="col-6 mt-4 text-muted footer text-start p-5 col-md-12 col-lg-12 col-xl-6 col-sm-12 ">
          <h1 className="mb-4">{productName}</h1>
          <p
            className="mb-3 mt-3"
            style={{
              color: "#424242",
              fontSize: "20px",
            }}
          >
            {productDescription}
          </p>
          <div>
            <a href={learnMore} style={{ textDecoration: "none" }}>
              {learnMore} &nbsp;&nbsp;
              <i class="fa-solid fa-arrow-right"></i>
            </a>
          </div>
        </div>
        <div className="col-6 p-2 footer col-md-12 col-lg-12 col-xl-6 col-sm-12">
          <img src={imageUrl} alt="image" style={{ maxWidth: "100%" }} />
        </div>
      </div>
    </div>
  );
}

export default RightSection;
