import logo from "../../assets/final_logo_2.png";
import "./navbar.css";

function Navbar() {
  return (
    <nav className="container">
      <img src={logo} className="logo" alt="" />
      <ul>
        <li>Home</li>
        <li>Program</li>
        <li>About Us</li>
        <li>Campus</li>
        <li>Testimonials</li>
        <li>
          <button className="btn">Contact Us</button>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
