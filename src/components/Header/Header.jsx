import {
  MdAccountBox,
  MdArrowDropDown,
  MdNotificationsNone,
  MdSearch,
} from "react-icons/md";
import "./header.css";
import logo from "../../assets/images/logo.png";

function Header() {
  return (
    <div className="header-outer-container place-center">
      <div className="header-container place-between">
        <div className="header-left">
          <ul className="place-between">
            <li className="place-center">
              <img src={logo} alt="Netflix logo" className="logo" />
            </li>
            <li>Home</li>
            <li>TV Shows</li>
            <li>Movies</li>
            <li>Latest</li>
            <li>My List</li>
            <li>Browse by Languages</li>
          </ul>
        </div>
        <div className="header-right">
          <ul className="place-between">
            <li className="place-center">
              <MdSearch />
            </li>
            <li className="place-center">
              <MdNotificationsNone />
            </li>
            <li className="place-center">
              <MdAccountBox />
            </li>
            <li className="place-center">
              <MdArrowDropDown />
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Header;
