import { Link } from "react-router-dom";

const Resources = () => {
  return (
    <div className="content">
      <h1 className="title">Our Resources</h1>
      <section className="resources-cards">
      <div className="resources-card">
        <h2>
          <Link to="/age-one-two" className="resources-card-link">Age One - Two</Link>
        </h2>
        </div>
        <div className="resources-card">
        <h2>
          <Link to="/age-two-three" className="resources-card-link">Age Two - Three</Link>
        </h2>
        </div>
        <div className="resources-card">
        <h2>
          <Link to="/age-three-four" className="resources-card-link">Age Three - Four</Link>
        </h2>
        </div>
        <div className="resources-card">
        <h2>
          <Link to="/age-four-five" className="resources-card-link">Age Four - Five</Link>
        </h2>
        </div>
        <div className="resources-card">
        <h2>
          <Link to="/building-blocks" className="resources-card-link">Building Blocks of Language</Link>
        </h2>
        </div>
        <div className="resources-card">
        <h2>
          <Link to="/expressive-vocabulary" className="resources-card-link">Expressive Vocabulary Development</Link>
        </h2>
        </div>
        <div className="resources-card">
        <h2>
          <Link to="/speech-sounds-english" className="resources-card-link">
            Speech Sound Development of English
          </Link>
        </h2>
        </div>
        <div className="resources-card">
        <h2>
          <Link to="/speech-sounds-spanish" className="resources-card-link">
            Speech Sound Development of Spanish
          </Link>
        </h2>
        </div>
        <div className="resources-card">
        <h2>
          <Link to="/syntax-mean-length" className="resources-card-link">Syntax Mean Length of Utterance</Link>
        </h2>
        </div>
      </section>
    </div>
  );
};

export default Resources;
