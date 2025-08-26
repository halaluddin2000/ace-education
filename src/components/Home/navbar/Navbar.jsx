import { useEffect, useState } from "react";
import logo from "../../../assets/final_logo_2.png";
import menu_icon from "../../../assets/manu-icon.png";
import "./navbar.css";
import { Link as RouterLink, useNavigate } from "react-router-dom";
import { scroller } from "react-scroll";

function Navbar() {
  const [dropdown, setDropdown] = useState(false);
  const [sticky, setSticky] = useState(false);
  const [mobileMenu, setMobileMenu] = useState(false);

  const navigate = useNavigate();

  useEffect(() => {
    window.addEventListener("scroll", () => {
      setSticky(window.scrollY > 50);
    });
  }, []);

  const toggleMenu = () => {
    setMobileMenu(!mobileMenu);
  };

  const toggleDropdown = () => {
    setDropdown(!dropdown);
  };

  // ✅ Handle scroll for Home/About/etc.
  const handleScrollTo = (id) => {
    if (window.location.pathname !== "/") {
      // অন্য page এ আছো → আগে home এ পাঠাও
      navigate("/");

      // ছোট delay দিয়ে scroll করাও (home load হওয়ার পর)
      setTimeout(() => {
        scroller.scrollTo(id, {
          smooth: true,
          duration: 500,
          offset: -80,
        });
      }, 100);
    } else {
      // ইতিমধ্যেই home page এ আছো → সরাসরি scroll
      scroller.scrollTo(id, {
        smooth: true,
        duration: 500,
        offset: -80,
      });
    }
  };

  return (
    <nav className={`container ${sticky ? "dark-nav" : ""}`}>
      <img src={logo} className="logo" alt="Logo" />

      <ul className={mobileMenu ? "" : "mobile-menu-hidden"}>
        {/*  Home scrolls to Hero */}
        <li onClick={() => handleScrollTo("hero")}>Home</li>

        {/*  Feature scroll */}
        <li onClick={() => handleScrollTo("feature")}>Feature</li>

        {/* Dropdown = real routes */}
        <li className="dropdown">
          <span className="dropdown-title" onClick={toggleDropdown}>
            Study Abroad ▾
          </span>
          {dropdown && (
            <ul className="dropdown-menu">
              <li>
                <RouterLink to="/canada" onClick={() => setDropdown(false)}>
                  Canada
                </RouterLink>
              </li>
              <li>
                <RouterLink to="/usa" onClick={() => setDropdown(false)}>
                  USA
                </RouterLink>
              </li>
              <li>
                <RouterLink to="/uk" onClick={() => setDropdown(false)}>
                  UK
                </RouterLink>
              </li>
              <li>
                <RouterLink to="/australia" onClick={() => setDropdown(false)}>
                  Australia
                </RouterLink>
              </li>
              <li>
                <RouterLink to="/malaysia" onClick={() => setDropdown(false)}>
                  Malaysia
                </RouterLink>
              </li>
            </ul>
          )}
        </li>

        {/* ✅ About scroll */}
        <li onClick={() => handleScrollTo("about")}>About Us</li>

        {/* ✅ Testimonials scroll */}
        <li onClick={() => handleScrollTo("testimonials")}>Success Students</li>

        {/* ✅ Contact scroll */}
        <li onClick={() => handleScrollTo("contact")}>
          <button className="nav-btn">Contact Us</button>
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
