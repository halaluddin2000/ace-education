import canada from "../../../assets/canada.jpg";
import usa from "../../../assets/usa.jpg";
import uk from "../../../assets/uk.jpg";
import malaysia from "../../../assets/malaysia.jpg";
import australia from "../../../assets/australia_1.jpg";
import "./ExploreCountries.css";
import Title from "../../Title/Title";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

function ExploreCountries() {
  return (
    <div className="explore" id="explore">
      <div className="container">
        <div className="explore-text">
          <Title
            subTitle={"Our Destination"}
            title={"Explore Your STUDY ABROAD OPTIONS"}
          />
        </div>
        <motion.div
          className="countries"
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ type: "spring", delay: 0.2 }}
          viewport={{ once: false, amount: 0.2 }}
        >
          <div className="country">
            <img src={canada} alt="" />
            <div className="caption">
              <h2>Study in Canada</h2>
              <p>Academic excellence, affordability and adventure – Canada.</p>
              <Link to="/canada">
                <button>Details</button>
              </Link>
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
              <Link to="/usa">
                <button>Details</button>
              </Link>
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
              <Link to="/uk">
                <button>Details</button>
              </Link>
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
              <Link to="/australia">
                <button>Details</button>
              </Link>
            </div>
          </div>

          <div className="country">
            <img src={malaysia} alt="" />
            <div className="caption">
              <h2>Study in Malaysia</h2>
              <p>Academic excellence, affordability and adventure Malaysia</p>
              <Link to="/malaysia">
                <button>Details</button>
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}

export default ExploreCountries;
