import React from "react";
import "../home/home.css";
function LeftSection({
  imageUrl,
  productName,
  productDescription,
  tryDemo,
  learnMore,
  googlePlay,
  appStore,
}) {
  return (
    <div className="container ">
      <div className="row d-flex mt-5">
        <div className="col-6 p-5 footer col-md-12 col-lg-12 col-xl-6 col-sm-12">
          <img src={imageUrl} alt="image" style={{ maxWidth: "100%" }} />
        </div>
        <div className="col-6 mt-5 text-muted footer text-start p-5 col-md-12 col-lg-12 col-xl-6 col-sm-12 ">
          <h1 className="mb-4">{productName}</h1>
          <p
            className="mb-5 mt-3"
            style={{
              color: "#424242",
              fontSize: "20px",
            }}
          >
            {productDescription}
          </p>
          <div>
            <a
              className="m-5"
              href={tryDemo}
              style={{ textDecoration: "none" }}
            >
              {tryDemo} &nbsp;
              <i class="fa-solid fa-arrow-right"></i>
            </a>
            <a
              className="m-3"
              href={learnMore}
              style={{ textDecoration: "none" }}
            >
              learn More &nbsp;&nbsp;
              <i class="fa-solid fa-arrow-right"></i>
            </a>
          </div>

          <div className="mt-3">
            <a
              className="m-5 "
              href={googlePlay}
              style={{ textDecoration: "none" }}
            >
              <img
                src="/media/images/googlePlayBadge.svg"
                alt="images"
                className="mb-3"
              />
            </a>
            <a href={appStore} style={{ textDecoration: "none" }}>
              <img
                src="/media/images/appstoreBadge.svg"
                alt="image"
                className="mb-3 "
              />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LeftSection;
