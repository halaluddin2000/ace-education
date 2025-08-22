import { useEffect, useState } from "react";
import logo from "../../assets/final_logo_2.png";
import "./navbar.css";
import { Link } from "react-scroll";

function Navbar() {
  const [sticky, setSticky] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      window.scrollY > 50 ? setSticky(true) : setSticky(false);
    });
  }, []);
  return (
    <nav className={`container ${sticky ? "dark-nav" : ""}`}>
      <img src={logo} className="logo" alt="" />
      <ul>
        <li>
          <Link to="hero" smooth={true} offset={0} duration={500}>
            Home
          </Link>
        </li>
        <li>
          <Link to="feature" smooth={true} offset={-120} duration={500}>
            Feature
          </Link>
        </li>
        <li>
          <Link to="explore" smooth={true} offset={-150} duration={500}>
            Explore Countries
          </Link>
        </li>
        <li>
          <Link to="about" smooth={true} offset={-180} duration={500}>
            About Us
          </Link>
        </li>
        <li>
          <Link to="testimonials" smooth={true} offset={-150} duration={500}>
            Testimonials
          </Link>
        </li>
        <li>
          <Link to="contact" smooth={true} offset={-260} duration={500}>
            <button className="btn">Contact Us</button>
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
