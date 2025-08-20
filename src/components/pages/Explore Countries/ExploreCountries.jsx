import canada from "../../../assets/canada.jpg";
import usa from "../../../assets/usa.jpg";
import uk from "../../../assets/uk.jpg";
import malaysia from "../../../assets/malaysia.jpg";
import australia from "../../../assets/australia_1.jpg";
import "./ExploreCountries.css";

function ExploreCountries() {
  return (
    <div className="container">
      <div className="explore-text">
        <h2>Explore Your STUDY ABROAD OPTIONS</h2>
        {/* <svg
          width="100%"
          // height="20%"
          viewBox="0 0 800 220"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M3,146.1c17.1-8.8,33.5-17.8,51.4-17.8c15.6,0,17.1,18.1,30.2,18.1c22.9,0,36-18.6,53.9-18.6
           c17.1,0,21.3,18.5,37.5,18.5c21.3,0,31.8-18.6,49-18.6c22.1,0,18.8,18.8,36.8,18.8c18.8,0,37.5-18.6,49-18.6
           c20.4,0,17.1,19,36.8,19c22.9,0,36.8-20.6,54.7-18.6c17.7,1.4,7.1,19.5,33.5,18.8c17.1,0,47.2-6.5,61.1-15.6"
            fill="none"
            stroke="#8b5cf6"
            strokeWidth={4}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg> */}
      </div>
      <div className="countries">
        <div className="country">
          <img src={canada} alt="" />
          <div className="caption">
            <h2>Study in Canada</h2>
            <p>Academic excellence, affordability and adventure – Canada.</p>
          </div>
        </div>
        <div className="country">
          <img src={usa} alt="" />
          <div className="caption">
            <h2>Study in USA</h2>
            <p>
              Academic excellence, affordability and adventure USA stands out as
              an ideal place to study.
            </p>
          </div>
        </div>
        <div className="country">
          <img src={uk} alt="" />
          <div className="caption">
            <h2>Study in UK</h2>
            <p>
              UK education system is recognized by employers, universities and
              governments worldwide.
            </p>
          </div>
        </div>
        <div className="country">
          <img src={australia} alt="" />
          <div className="caption">
            <h2>Study in Australia</h2>
            <p>
              Australia is a popular destination for international students from
              around the world.
            </p>
          </div>
        </div>
        <div className="country">
          <img src={malaysia} alt="" />
          <div className="caption">
            <h2>Study in malaysia</h2>
            <p>Academic excellence, affordability and adventure Malaysia</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ExploreCountries;
