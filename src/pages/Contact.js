import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBuilding, faEnvelope, faFax, faPhone } from "@fortawesome/free-solid-svg-icons";

const Contact = () => {

  return (
    <div className="content">
      <h1 className="title">Contact Us</h1>
      <div className="contact">
        <section className="contact-info">
          <div className="contact-square">
            <FontAwesomeIcon icon={faPhone} className="contact-fa"/>
            <p>Phone Number: (615) 802-8051</p>
          </div>
          <div className="contact-square">
            <FontAwesomeIcon icon={faBuilding} className="contact-fa"/>
            <p>Address: 144 College Street Gallatin, TN 37066 </p>
          </div>
          <div className="contact-square">
            <FontAwesomeIcon icon={faEnvelope} className="contact-fa"/>
            <p>E-Mail: admin@thrivepediatrictherapy.org</p>
          </div>
          <div className="contact-square">
            <FontAwesomeIcon icon={faFax} className="contact-fa"/>
            <p>Fax Number: (833) 901-2965</p>
          </div>
        </section>
        <section className="contact-form">
          <form action="mailto:admin@thrivepediatrictherapy.org" method="post" encType="text/plain" className="contact-form">
            {/* <label for="name">Name: </label> */}
            <p>Name:</p>
            <input
              className="contact-form-input"
              type="text"
              required
              // value={name}
              name="name"
              // onChange={(e) => setName(e.target.value)}
            />
            {/* <label for="email">Email: </label> */}
            <p>Email:</p>
            <input
              className="contact-form-input"
              type="email"
              required
              // value={email}
              name="email"
              // onChange={(e) => setEmail(e.target.value)}
            />
            {/* <label for="number">Phone Number: </label> */}
            <p>Phone Number:</p>
            <input
              className="contact-form-input"
              type="tel"
              pattern="[0-9]{3}[0-9]{3}[0-9]{4}"
              required
              // value={phone}
              name="number"
              // onChange={(e) => setPhone(e.target.value)}
            />
            {/* <label for="message">Your Message: </label> */}
            <p>Message:</p>
            <textarea
              className="contact-form-input"
              rows="10"
              cols="30"
              required
              // value={message}
              name="message"
              // onChange={(e) => setMessage(e.target.value)}
            />
            <input type="submit" value="Submit" className="contact-button" />
          </form>
        </section>
      </div>
    </div>
  );
};

export default Contact;
