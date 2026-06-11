import { Link } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
  return (
    <nav className="navbar">
      <input type="checkbox" id="menu-toggle" />
      <label htmlFor="menu-toggle" className="hamburger"> ☰ </label>
      <div className="nav-left">
        <label htmlFor="menu-toggle" className="close-btn"> ✕ </label>
        <ul>
          <li> <Link to="/">HOME</Link> </li>
          <li className="dropdown">
            <input type="checkbox" id="pages-toggle" />
            <label htmlFor="pages-toggle" className="dropdown-btn"> PAGES </label>
            <ul className="dropdown-menu">
              <li> <Link to="/about">ABOUT US</Link> </li>
              <li> <Link to="/">LANDING</Link> </li>
              <li> <Link to="/team">BAKERY TEAM</Link> </li>
              <li> <Link to="/workshop">WORKSHOPS</Link> </li>
            </ul>
          </li>
          <li> <Link to="/bread">OUR BREAD</Link> </li>
          <li> <Link to="/contact">CONTACT</Link> </li>
        </ul>
      </div>

      <div className="logo-part">
        <a href="/" > 
          <img src="https://assets.nicepagecdn.com/d2cc3eaa/3256687/images/logo-2.png" alt="logo"/>
        </a>
      </div>

      <div className="nav-right-part">
        <a href="/">
          <i className="fa-solid fa-magnifying-glass"></i>
        </a>
        <a href="">
          <img src="https://cdn-icons-png.flaticon.com/512/107/107831.png" alt="cart" />
        </a>
      </div>
    </nav>
  );
}

export default Navbar;