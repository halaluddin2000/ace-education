import React from "react";
import "./CountryPage.css";
import Footer from "../../Home/Footer/Footer";

const CountryPage = ({ coverImage, title, subtitle, universities }) => {
  return (
    <div className="country-page">
      {/* Cover Section */}
      <div
        className="cover-section"
        style={{ backgroundImage: `url(${coverImage})` }}
      >
        <div className="cover-content">
          <h1>{title}</h1>
          <p>{subtitle}</p>
        </div>
      </div>

      {/* Universities Section */}
      <div className="universities-section">
        <h2>Explore Our Partner Universities</h2>
        <p>Leading institutions where your future begins.</p>
        <div className="university-logos">
          {universities?.map((logo, idx) => (
            <div key={idx} className="uni-logo">
              <img src={logo} alt={`University ${idx + 1}`} />
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default CountryPage;
