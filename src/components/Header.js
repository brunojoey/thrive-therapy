import { Link } from "react-router-dom";
import logo from "../assets/logo-files/thrive-pediatric-therapy.svg";
import "./index.scss";

const Header = () => {
  return (
    <div className="header">
      <section className="header-logo">
        <img className="logo" src={logo} alt="logo" width={140} />
      </section>
      <section className="page-links">
        <Link to="/" className="header-link">Home</Link>
        <Link to="/about" className="header-link">About</Link>
        <Link to="/services" className="header-link">Services</Link>
        <Link to="/contact" className="header-link">Contact</Link>
        <Link to="/resources" className="header-link">Resources</Link>
        <Link to="/faq" className="header-link">FAQ</Link>
      </section>
    </div>
  )
};

export default Header;