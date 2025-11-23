import { FaFacebook, FaInstagram, FaYoutube } from "react-icons/fa";
import "./footer.css";

function Footer() {
  return (
    <div className="footer-outer-container justify-center">
      <div className="footer-container">
        <div className="footer-icons justify-between">
          <FaFacebook />
          <FaInstagram />
          <FaYoutube />
        </div>
        <div className="footer-data justify-between">
          <ul>
            <li>Audio Description</li>
            <li>Investor Relations</li>
            <li>Legal Notice</li>
          </ul>
          <ul>
            <li>Help Center</li>
            <li>Jobs</li>
            <li>Cookie Preferences</li>
          </ul>
          <ul>
            <li>Gift Cards</li>
            <li>Terms of Use</li>
            <li>Corporate Information</li>
          </ul>
          <ul>
            <li>Media Center</li>
            <li>Privacy</li>
            <li>Contact Us</li>
          </ul>
        </div>
        <p className="service-code place-center">Service Code</p>
        <p className="copy-write">
          &copy; {new Date().getFullYear()} Netflix, Inc.
        </p>
      </div>
    </div>
  );
}

export default Footer;
