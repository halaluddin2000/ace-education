import { useEffect, useState } from "react";
import logo from "../../assets/final_logo_2.png";
import menu_icon from "../../assets/manu-icon.png";
import "./navbar.css";
import { Link } from "react-scroll";

function Navbar() {
  const [sticky, setSticky] = useState(false);
  const [mobileMenu, setMobileMenu] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      setSticky(window.scrollY > 50);
    });
  }, []);

  const toggleMenu = () => {
    // setMobileMenu(!mobileMenu);
    mobileMenu ? setMobileMenu(false) : setMobileMenu(true);
  };

  return (
    <nav className={`container ${sticky ? "dark-nav" : ""}`}>
      <img src={logo} className="logo" alt="Logo" />
      <ul className={mobileMenu ? "" : "mobile-menu-hidden"}>
        <li>
          <Link
            to="hero"
            smooth={true}
            offset={0}
            duration={500}
            spy={true}
            activeClass="active"
          >
            Home
          </Link>
        </li>
        <li>
          <Link
            to="feature"
            smooth={true}
            offset={-80}
            duration={500}
            spy={true}
            activeClass="active"
          >
            Feature
          </Link>
        </li>
        <li>
          <Link
            to="explore"
            smooth={true}
            offset={-150}
            duration={500}
            spy={true}
            activeClass="active"
          >
            Explore Countries
          </Link>
        </li>
        <li>
          <Link
            to="about"
            smooth={true}
            offset={-180}
            duration={500}
            spy={true}
            activeClass="active"
          >
            About Us
          </Link>
        </li>
        <li>
          <Link
            to="testimonials"
            smooth={true}
            offset={-160}
            duration={500}
            spy={true}
            activeClass="active"
          >
            Testimonials
          </Link>
        </li>
        <li>
          <Link
            to="contact"
            smooth={true}
            offset={-160}
            duration={500}
            spy={true}
            activeClass="active-btn"
          >
            <button className="nav-btn">Contact Us</button>
          </Link>
        </li>
      </ul>
      <img
        src={menu_icon}
        alt="Menu"
        className="menu-icon"
        onClick={toggleMenu}
      />
    </nav>
  );
}

export default Navbar;
