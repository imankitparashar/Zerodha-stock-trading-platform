export default function Stats() {
  return (
    <div className="container my-5 container-lg p-4">
      <div className="row row align-items-center gy-4 ">
        <div className="col-12 col-lg-5 p-5 mw-100">
          <h2 className="mb-5" style={{ color: "#424242" }}>
            Trust with confidence
          </h2>
          <h3 className="mt-5" style={{ color: "#424242" }}>
            Customer-first always
          </h3>
          <p
            className="text-muted"
            style={{
              color: "#666666",
              marginTop: "5px",
              marginBottom: "32px",
              fontSize: "1rem",
              lineHeight: "1.8rem",
            }}
          >
            That's why 1.6+ crore customers trust Zerodha with ~ ₹6 lakh crores
            of equity investments, making us India’s largest broker;
            contributing to 15% of daily retail exchange volumes in India.
          </p>
          <h3 className="mt-4" style={{ color: "#424242" }}>
            No spam or gimmicks
          </h3>
          <p
            className="text-muted"
            style={{
              color: "#666666",
              marginTop: "5px",
              marginBottom: "32px",
              fontSize: "1rem",
              lineHeight: "1.8rem",
            }}
          >
            No gimmicks, spam, "gamification", or annoying push notifications.
            High quality apps that you use at your pace, the way you like.
          </p>
          <h3 className="mt-4" style={{ color: "#424242" }}>
            The Zerodha universe
          </h3>
          <p
            className="text-muted"
            style={{
              color: "#666666",
              marginTop: "5px",
              marginBottom: "32px",
              fontSize: "1rem",
              lineHeight: "1.8rem",
            }}
          >
            Not just an app, but a whole ecosystem. Our investments in 30+
            fintech startups offer you tailored services specific to your needs.
          </p>
          <h3 className="mt-4" style={{ color: "#424242" }}>
            Do better with money
          </h3>
          <p
            className="text-muted"
            style={{
              color: "#666666",
              marginTop: "5px",
              marginBottom: "32px",
              fontSize: "1rem",
              lineHeight: "1.8rem",
            }}
          >
            With initiatives like Nudge and Kill Switch, we don't just
            facilitate transactions, but actively help you do better with your
            money.
          </p>
        </div>
        <div className="col-12 col-lg-7 text-center p-5">
          <img
            src="/media/images/ecosystem.png"
            alt="eco_system"
            style={{ maxWidth: "100%" }}
          />
          <div className="text-center">
            <a href="#" style={{ textDecoration: "none" }}>
              Explore our Products <i class="fa-solid fa-arrow-right"></i>
            </a>
            &nbsp; &nbsp; &nbsp; &nbsp;
            <a href="#" style={{ textDecoration: "none" }}>
              Try Kite <i class="fa-solid fa-arrow-right"></i>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
