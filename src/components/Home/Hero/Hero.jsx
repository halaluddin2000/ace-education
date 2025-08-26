import "./hero.css";
import heroImage from "../../../assets/banner2.jpg";
import dark_arrow from "../../../assets/btn-img.png";
import { motion, useAnimation } from "framer-motion";
import { useEffect, useState } from "react";

function Hero() {
  const [offsetY, setOffsetY] = useState(0);

  const handleScroll = () => setOffsetY(window.pageYOffset);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="hero">
      {/* Parallax Background Image */}
      <motion.img
        src={heroImage}
        alt="Hero Background"
        className="hero-bg-img"
        style={{ y: offsetY * 0.3 }} // parallax effect
        initial={{ scale: 1.3, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ type: "spring", stiffness: 40, damping: 20, delay: 0.2 }}
      />

      {/* Gradient Overlay */}
      <div className="hero-gradient"></div>

      {/* Hero Text */}
      <motion.div
        className="hero-text"
        initial="hidden"
        animate="visible"
        variants={{
          hidden: {},
          visible: { transition: { staggerChildren: 0.3 } },
        }}
      >
        <motion.h1
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ type: "spring", stiffness: 80, delay: 0.5 }}
        >
          We Ensure better education for a better world
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ type: "spring", stiffness: 80, delay: 0.8 }}
        >
          Our cutting-edge curriculum is designed to empower students with the
          knowledge, skills, and experiences needed to excel.
        </motion.p>

        <motion.button
          className="hero-btn"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ type: "spring", stiffness: 80, delay: 1 }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Explore more <img className="dark_arrow" src={dark_arrow} alt="" />
        </motion.button>
      </motion.div>
    </div>
  );
}

export default Hero;
