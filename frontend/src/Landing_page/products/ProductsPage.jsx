import React from "react";
import Hero from "./Hero";
import LeftSection from "./LeftSection";
import RightSection from "./RightSection";
import Universe from "./Universe";
function ProductPage() {
  return (
    <>
      <Hero></Hero>
      <LeftSection
        imageUrl="/media/images/kite.png"
        productName="Kite"
        productDescription="Our ultra-fast flagship trading platform with streaming market data, advanced charts, an elegant UI, and more. Enjoy the Kite experience seamlessly on your Android and iOS devices."
        tryDemo="Try Demo"
        learnMore=""
        googlePlay=""
        appStore=""
      ></LeftSection>
      <RightSection
        imageUrl="/media/images/console.png"
        productName="Console"
        productDescription="The central dashboard for your Zerodha account. Gain insights into your trades and investments with in-depth reports and visualisations."
        learnMore="Console"
      ></RightSection>
      <LeftSection
        imageUrl="/media/images/coin.png"
        productName="Coin"
        productDescription="Buy direct mutual funds online, commission-free, delivered directly to your Demat account. Enjoy the investment experience on your Android and iOS devices."
        tryDemo="Coin"
        learnMore=""
        googlePlay=""
        appStore=""
      ></LeftSection>
      <RightSection
        imageUrl="/media/images/kiteconnect.png"
        productName="Kite Connect API"
        productDescription="Build powerful trading platforms and experiences with our super simple HTTP/JSON APIs. If you are a startup, build your investment app and showcase it to our clientbase.

"
        learnMore="Kite Connect"
      ></RightSection>
      <LeftSection
        imageUrl="/media/images/varsity.png"
        productName="Varsity mobile"
        productDescription="Our ultra-fast flagship trading platform with streaming market data, advanced charts, an elegant UI, and more. Enjoy the Kite experience seamlessly on your Android and iOS devices."
        tryDemo="varsity"
        learnMore=""
        googlePlay=""
        appStore=""
      ></LeftSection>
      <p style={{ color: "#424242", fontSize: "20px" }} className="text-center">
        Want to know more about our technology stack? Check out the{" "}
        <a href="" style={{ textDecoration: "none" }}>
          Zerodha.tech blog
        </a>
        .
      </p>
      <Universe></Universe>
    </>
  );
}

export default ProductPage;
