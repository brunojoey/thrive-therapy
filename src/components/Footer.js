import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";
import "./index.scss";

const Footer = () => {
  return (
    <div className="footer">
      <section className="footer-info">
        <h2>Thrive Therapy</h2>
        <p>170 W Franklin Street Gallatin, TN 37066 </p>
        <a href="mailto: admin@thrivepediatrictherapy.org">Send us an Email!</a>
        <p>Hours</p>
      </section>
      <section className="social-links">
        <a href="https://www.instagram.com/thrive.pediatrictherapy" className="instagram"><FontAwesomeIcon icon={faInstagram} /></a>
      </section>
    </div>
  )
};

export default Footer;