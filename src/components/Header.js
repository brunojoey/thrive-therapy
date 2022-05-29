import { Link } from "react-router-dom";
import Dropdown from "./Dropdown.js";
import logo from "../assets/logo-files/thrive-pediatric-therapy.svg";
import useMediaQuery from "../utils/useMediaQuery";
import "./index.scss";

const Header = () => {
  const matches = useMediaQuery("(min-width: 600px)");
  return (
    <header className="header">
      <section className="header-logo">
        <img className="logo" src={logo} alt="logo" width={350} />
      </section>
      {matches ? (
      <section className="page-links">
        <nav>
          <Link to="/" className="header-link">Home</Link>
          <Link to="/about" className="header-link">About</Link>
          <Link to="/services" className="header-link">Services</Link>
          <Link to="/contact" className="header-link">Contact</Link>
          <Link to="/resources" className="header-link">Resources</Link>
          <Link to="/faq" className="header-link">FAQ</Link>
        </nav>
      </section>
      ) : (
        <Dropdown />
      )
      }
    </header>
  )
};

export default Header;