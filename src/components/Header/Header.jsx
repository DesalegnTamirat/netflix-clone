import {
  MdAccountBox,
  MdArrowDropDown,
  MdNotificationsNone,
  MdSearch,
} from "react-icons/md";
import "./header.css";

function Header() {
  return (
    <div className="header-outer-container place-center">
      <div className="header-container place-between">
        <div className="header-left">
          <ul className="place-between">
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
            <li>
              <MdSearch />
            </li>
            <li>
              <MdNotificationsNone />
            </li>
            <li>
              <MdAccountBox />
            </li>
            <li>
              <MdArrowDropDown />
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Header;
