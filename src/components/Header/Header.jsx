import { useState, useEffect } from "react";
import {
  MdAccountBox,
  MdArrowDropDown,
  MdNotificationsNone,
  MdSearch,
} from "react-icons/md";
import "./header.css";
import logo from "../../assets/images/logo.png";
import { Link } from "react-router-dom";
import { NAV_LINKS } from "../../utils/data";

function Header() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);

    // >=> Cleanup the event listener
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header
      className={`header-outer-container ${isScrolled ? "header-black" : ""}`}
    >
      <div className="header-container flex-container flex-between screen-padding">
        {/* === Left Section (Logo & Nav) === */}
        <nav className="header-left flex-container">
          <img src={logo} alt="Netflix logo" className="logo" />
          <ul className="nav-list flex-container">
            {NAV_LINKS.map((link) => (
              <li key={link} className="nav-item">
                <Link to="/">{link}</Link>
              </li>
            ))}
          </ul>
        </nav>

        {/* === Right Section (Icons) === */}
        <div className="header-right flex-container">
          <ul className="icon-list flex-container">
            <li className="icon-item">
              <MdSearch size={24} />
            </li>
            <li className="icon-item">Kids</li>{" "}
            <li className="icon-item">
              <MdNotificationsNone size={24} />
            </li>
            <li className="icon-item profile-dropdown">
              <MdAccountBox size={24} />
              <MdArrowDropDown size={24} />
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
}

export default Header;
