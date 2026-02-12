import { createRoot } from "react-dom/client";
import "./index.css";
import Navbar from "./Landing_page/Navbar";
import Footer from "./Landing_page/Footer";
import NotFound from "./Landing_page/NotFound";
import AboutPage from "./Landing_page/About/AboutPage";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./Landing_page/home/HomePage";
import Signup from "./Landing_page/signup/Signup";
import ProductPage from "./Landing_page/products/ProductsPage";
import SupportPage from "./Landing_page/support/SupportPage";
import PricingPage from "./Landing_page/Pricing/PricingPage";
import SignIn from "./Landing_page/SignIn/Signin";
createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <Navbar />
    <Routes>
      <Route path="/" element={<HomePage />}></Route>
      <Route path="/signup" element={<Signup />}></Route>
      <Route path="/about" element={<AboutPage />}></Route>
      <Route path="/product" element={<ProductPage />}></Route>
      <Route path="/support" element={<SupportPage />}></Route>
      <Route path="/pricing" element={<PricingPage />}></Route>
      <Route path="/signin" element={<SignIn></SignIn>}></Route>
      <Route path="*" element={<NotFound />} />
    </Routes>
    <Footer />
  </BrowserRouter>
);
