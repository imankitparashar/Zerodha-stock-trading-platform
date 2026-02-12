import "../Landing_page/home/home.css";
import "../index.css";
import { Link } from "react-router-dom";
export default function Navbar() {
  return (
    <nav
      class="navbar navbar-expand-lg bg-white border-bottom d-flex"
      style={{ backgroundColor: "#fff" }}
    >
      <div class="container p-2 ">
        <Link class="navbar-brand" to="/">
          <img
            src="/media/images/logo.svg"
            alt="logo"
            style={{ width: "25%" }}
          />
        </Link>
        <button
          class="navbar-toggler ms-auto"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav me-auto mb-2 mb-lg-0">
            <li class="nav-item">
              <Link
                class="nav-link nav-Link text-muted active"
                aria-current="page"
                to="/Signin"
              >
                Login
              </Link>
            </li>
            <li class="nav-item">
              <Link
                class="nav-link nav-Link text-muted active"
                aria-current="page"
                to="/Signup"
              >
                Signup
              </Link>
            </li>
            <li class="nav-item">
              <Link class="nav-link nav-Link  text-muted active" to="/about">
                About
              </Link>
            </li>
            <li class="nav-item">
              <Link class="nav-link nav-Link text-muted active" to="/product">
                Products
              </Link>
            </li>
            <li class="nav-item">
              <Link class="nav-link nav-Link text-muted active " to="/pricing">
                Pricing
              </Link>
            </li>
            <li class="nav-item">
              <Link class="nav-link nav-Link  text-muted active" to="/support">
                Support
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
