import {
  MdAccountBox,
  MdArrowDropDown,
  MdNotificationsNone,
  MdSearch,
} from "react-icons/md";

function Header() {
  return (
    <div>
      <ul>
        <li>Home</li>
        <li>TV Shows</li>
        <li>Movies</li>
        <li>Latest</li>
        <li>My List</li>
        <li>Browse by Languages</li>
      </ul>
      <ul>
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
  );
}

export default Header;
