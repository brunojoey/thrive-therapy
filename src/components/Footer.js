import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";
import "./index.scss";

const Footer = () => {
  return (
    <div className="footer">
      <section className="footer-info">
        <h2>Thrive Pediatric Therapy</h2>
        <p>170 W Franklin Street Gallatin, TN 37066 </p>
        <p>(615) 802-8051</p>
        <p>Monday - Thursday 8-6 PM</p>
        <a href="mailto: admin@thrivepediatrictherapy.org" className="email-link">Send us an Email!</a>
      </section>
      <section className="social-links">
        <a href="https://www.instagram.com/thrive.pediatrictherapy" className="instagram"><FontAwesomeIcon icon={faInstagram} /></a>
      </section>
    </div>
  )
};

export default Footer;