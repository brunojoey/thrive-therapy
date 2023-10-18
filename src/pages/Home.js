import christinaPhoto from "../assets/owner-files/christina-photo.jpg";
import alyssaPhoto from "../assets/owner-files/alyssa-photo.jpg";
import pizza from "../assets/stock-photos/troy-t-WA2EE7YtzC4-unsplash.jpg";
import camera from "../assets/stock-photos/tanaphong-toochinda-GagC07wVvck-unsplash.jpg";
import strawberries from "../assets/stock-photos/ryland-dean-D6Rx5fE5p8w-unsplash.jpg";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="content">
      <section>
        <div className="home-welcome">
          <div className="home-welcome-block">
            <h1>Welcome to Thrive Pediatric Therapy</h1>
            <h2>Speech | Feeding | Occupational Therapy</h2>
          </div>
        </div>
        <div className="home-what-we-do">
          <h2>What We Do</h2>
          <p>
            Thrive Pediatric Therapy is a private independent practice serving
            families who desire care for their children at the highest
            professional level. Our mission is to provide quality,
            multidisciplinary, state-of-the-art treatment for children, in a
            clean, safe, upbeat, and patient centered environment. Our
            therapists are compassionate, well educated and knowledgeable. Our
            goal is to promote maximal functional ability and quality of
            life for individuals from infancy to adulthood.
          </p>
        </div>
      </section>
      <section className="info-block">
        <div className="info-block-one">
          <img src={pizza} alt="Child Playing With Pizza Toys" />
          <h3>Speech &#38; Language Therapy</h3>
          <p>
            Evaluate, diagnose, and treat children with receptive language,
            expressive language, pragmatic language, cognitive-communication,
            and speech difficulties impacting speech production, comprehension
            and expression.
          </p>
        </div>
        <div className="info-block-two">
          <h3>Feeding Therapy</h3>
          <p>
            Evaluate, diagnose, and treat oral motor, swallowing, sensory, and
            behavioral skills related to feeding for independent feeding of a
            variety of foods for improved nutrition.
          </p>
          <img src={strawberries} alt="Child Eating Strawberries" />
        </div>
        <div className="info-block-three">
          <img src={camera} alt="Child Playing With Toy Camera" />
          <h3>Occupational Therapy</h3>
          <p>
            Evaluate, diagnose, and treat children with goals to achieve
            independence in every aspect of our clients' daily lives. Goals will
            target a child's self-care, sensory integration, fine motor skills,
            self-help skills, handwriting, play skills, peer interactions, and
            more!
          </p>
        </div>
      </section>
      <h2 className="owner-home-title"><Link to="/about" className="owner-home-link">Meet the Owners</Link></h2>
      <section className="owner-section">
        <div className="owner">
          <h3>Alyssa Williams</h3>
          <img src={alyssaPhoto} width="250" alt="" className="owner-photo" />
        </div>
        <div className="owner">
          <h3>Christina Bruno</h3>
          <img
            src={christinaPhoto}
            width="250"
            alt="Christina Bruno"
            className="owner-photo"
          />
        </div>
      </section>
    </div>
  );
};

export default Home;
