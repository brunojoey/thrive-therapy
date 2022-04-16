import logo from "../assets/logo-files/thrive-pediatric-therapy-transparent.png";
import "./index.scss";

const ComingSoon = () => {
  return (
    <div>
      <section className="coming-soon">
        <img src={logo} alt="Thrive Pediatric Therapy Logo" className="coming-soon-logo" width={500}></img>
        <h2>...Coming Soon!</h2>
      </section>
    </div>
  );
};

export default ComingSoon;