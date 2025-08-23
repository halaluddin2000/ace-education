import canada from "../../../assets/canada.jpg";
import usa from "../../../assets/usa.jpg";
import uk from "../../../assets/uk.jpg";
import malaysia from "../../../assets/malaysia.jpg";
import australia from "../../../assets/australia_1.jpg";
import "./ExploreCountries.css";

function ExploreCountries() {
  return (
    <div className="explore">
      <div className=" container">
        <div className="explore-text     ">
          <h2>Explore Your STUDY ABROAD OPTIONS</h2>
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
                Academic excellence, affordability and adventure USA stands out
                as an ideal place to study.
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
                Australia is a popular destination for international students
                from around the world.
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
    </div>
  );
}

export default ExploreCountries;
