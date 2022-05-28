import { useState } from "react";
import { Link } from "react-router-dom";
import { Button, Menu } from "@material-ui/core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
// import "./Dropdown.scss";

function Dropdown() {
  const [anchor, setAnchor] = useState(null);

  const handleClick = (event) => {
    setAnchor(event.currentTarget);
  };

  const handleClose = () => {
    setAnchor(null);
  };

  return (
    <section>
      <Button
        className="page-links"
        style={{ color: "#d49a89" }}
        aria-controls="simple-menu"
        aria-haspopup="true"
        onClick={handleClick}
      >
        <FontAwesomeIcon icon={faBars} className="fa-bars" />
      </Button>
      <Menu
        id="simple-menu"
        anchorEl={anchor}
        keepMounted
        open={Boolean(anchor)}
        onClose={handleClose}
      >
        <nav className="nav">
          <ul className="nav-list">
            <li>
              <Link to="/" className="dropdown-link">
                Home
              </Link>
            </li>
            <li>
              <Link to="/about" className="dropdown-link">
                About
              </Link>
            </li>
            <li>
              <Link to="/services" className="dropdown-link">
                Services
              </Link>
            </li>
            <li>
              <Link to="/contact" className="dropdown-link">
                Contact
              </Link>
            </li>
            <li>
              <Link to="/resources" className="dropdown-link">
                Resources
              </Link>
            </li>
            <li>
              <Link to="/faq" className="dropdown-link">
                FAQ
              </Link>
            </li>
          </ul>
        </nav>
      </Menu>
    </section>
  );
}

export default Dropdown;
