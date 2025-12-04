import { FaFacebook, FaInstagram, FaYoutube } from "react-icons/fa";
import "./footer.css";
import { FOOTER_LINKS } from "../../utils/data";

function Footer() {
  return (
    <footer className="footer-outer-container flex-center">
      <div className="footer-container screen-padding">
        <div className="footer-icons flex-container">
          <FaFacebook size={30} />
          <FaInstagram size={30} />
          <FaYoutube size={30} />
        </div>

        <div className="footer-data">
          {FOOTER_LINKS.flat().map((link) => (
            <div key={link} className="footer-link-item">
              <a href="#">{link}</a>
            </div>
          ))}
        </div>

        <button className="service-code-button">Service Code</button>

        <p className="copy-write">
          &copy; {new Date().getFullYear()} Netflix, Inc.
        </p>
      </div>
    </footer>
  );
}

export default Footer;
