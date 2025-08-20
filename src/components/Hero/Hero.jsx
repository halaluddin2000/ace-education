import "./hero.css";
import dark_arrow from "../../assets/arrow.jpg";
import { motion } from "motion/react";

function Hero() {
  return (
    <div className="hero container">
      <motion.div
        className="hero-text "
        initial={{ opacity: 0, y: 80 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ type: "spring", stiffness: 80, delay: 0.5 }}
      >
        <h1>We Ensure better education for a better world </h1>
        <p>
          Our cutting-edge curriculum is designed to empower students with the
          knowledge, skills, and experiences needed to excel in the dynamic
          field of education
        </p>
        <button className="btn">
          Explore more <img src={dark_arrow} alt="" />
        </button>
      </motion.div>
    </div>
  );
}

export default Hero;
