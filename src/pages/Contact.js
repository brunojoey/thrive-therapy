import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBuilding, faEnvelope, faFax, faPhone } from "@fortawesome/free-solid-svg-icons";

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const inputs = { name, email, phone, message };

    console.log("inputs", inputs);
  }

  return (
    <div className="content">
      <h1 className="title">Contact Us</h1>
      <div className="contact">
        <section className="contact-info">
          <div className="contact-square">
            <FontAwesomeIcon icon={faPhone} className="contact-fa"/>
            <p>(615) 802-8051</p>
          </div>
          <div className="contact-square">
            <FontAwesomeIcon icon={faBuilding} className="contact-fa"/>
            <p>170 W Franklin Street Gallatin, TN 37066</p>
          </div>
          <div className="contact-square">
            <FontAwesomeIcon icon={faEnvelope} className="contact-fa"/>
            <p>admin@thrivepediatrictherapy.org</p>
          </div>
          <div className="contact-square">
            <FontAwesomeIcon icon={faFax} className="contact-fa"/>
            <p>(833) 901-2965</p>
          </div>
        </section>
        <section className="contact-form">
          <form onSubmit={handleSubmit}>
            <label>Name: </label>
            <input
              type="text"
              required
              value={name}
              onChange={(e) => setName(e.target.value)}
            ></input>
            <label>Email: </label>
            <input
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            ></input>
            <label>Phone Number: </label>
            <input
              type="tel"
              pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
              required
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
            ></input>
            <label>Your Message: </label>
            <textarea
              rows="10"
              cols="30"
              required
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            ></textarea>
            <button className="contact-button">Submit</button>
          </form>
        </section>
      </div>
    </div>
  );
};

export default Contact;
