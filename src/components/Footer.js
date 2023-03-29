import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInstagram, faFacebook } from "@fortawesome/free-brands-svg-icons";
import "./index.scss";

const Footer = () => {
  return (
    <footer className="footer">
      <h1 style={{textAlign: "center"}}>Thrive Pediatric Therapy</h1>
      <section className="footer-content">
        <div className="footer-info">
          <p>170 W Franklin Street Gallatin, TN 37066 </p>
          <p>(615) 802-8051</p>
          <p>Monday - Thursday 8-6 PM</p>
          <a href="mailto: admin@thrivepediatrictherapy.org" className="email-link">Send us an Email!</a>
        </div>
      <div className="footer-social">
        <FontAwesomeIcon icon={faInstagram} className="instagram" />
        <a href="https://instagram.com/thrive.pediatrictherapy/" className="instagram-link">Our Instagram</a>
        <FontAwesomeIcon icon={faFacebook} className="facebook" />
        <a href="https://www.facebook.com/thrivepediatrictherapytn" className="facebook-link">Our Facebook</a>
      </div>
      </section>
    </footer>
  )
};

export default Footer;